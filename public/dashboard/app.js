// JavaScript for Daily Dashboard

// Configuration Constants
const HELENA_LAT = 46.5891;
const HELENA_LON = -112.0391;

const CHASE_CATEGORIES = {
    1: {
        name: "2026 Q1 (Jan 1 - Mar 31)",
        categories: ["Dining / Restaurants", "Norwegian Cruise Line", "American Heart Association"],
        icons: ["utensils", "ship", "heart"]
    },
    2: {
        name: "2026 Q2 (Apr 1 - Jun 30)",
        categories: ["Amazon.com", "Whole Foods Market", "Chase Travel", "Feeding America"],
        icons: ["shopping-bag", "shopping-cart", "plane", "gift"]
    },
    3: {
        name: "2026 Q3 (Jul 1 - Sep 30)",
        categories: ["Gas Stations & EV Charging", "Public Transit", "Select Live Entertainment", "United Way"],
        icons: ["fuel", "bus", "ticket", "heart-handshake"]
    },
    4: {
        name: "2026 Q4 (Oct 1 - Dec 31)",
        categories: ["Categories TBA", "Typically PayPal / Wholesale", "Announced Mid-September"],
        icons: ["help-circle", "help-circle", "help-circle"]
    }
};

const MARKET_TICKERS = ["VTI", "VXUS", "MSFT", "SONY", "BTC-USD"];
const HABITS = ["Exercise", "Hydration", "Remodeling", "Project Development"];

const NEWS_FEEDS = {
    science: "https://www.sciencedaily.com/rss/top/science.xml",
    goodnews: "https://www.goodnewsnetwork.org/feed/",
    investment: "https://finance.yahoo.com/rss/"
};

// Global State
let currentNewsTab = 'science';

// DOM Elements & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Start Clock
    updateClock();
    setInterval(updateClock, 1000);

    // Initial weather & air quality
    fetchWeather();
    fetchAQI();

    // Initial markets
    fetchMarkets();
    document.getElementById('refresh-markets').addEventListener('click', fetchMarkets);

    // Initial news
    fetchNews(currentNewsTab);
    setupNewsTabs();

    // Initial Chase rewards
    setupChaseRewards();

    // Initial Habit Tracker
    setupHabitTracker();
});

// ==========================================
// 1. CLOCK & GREETING
// ==========================================
function updateClock() {
    const now = new Date();
    
    // Time formatting
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const hoursStr = String(hours).padStart(2, '0');
    
    document.getElementById('clock-time').textContent = `${hoursStr}:${minutes}:${seconds}`;
    document.getElementById('clock-ampm').textContent = ampm;

    // Personalized greeting based on hour
    const rawHour = now.getHours();
    let greetingText = "Good morning, Julian";
    if (rawHour >= 12 && rawHour < 17) {
        greetingText = "Good afternoon, Julian";
    } else if (rawHour >= 17 && rawHour < 22) {
        greetingText = "Good evening, Julian";
    } else if (rawHour >= 22 || rawHour < 5) {
        greetingText = "Good night, Julian";
    }
    document.getElementById('greeting').textContent = greetingText;

    // Date formatting (e.g. Wednesday, July 1, 2026)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date-string').textContent = now.toLocaleDateString('en-US', options);
}

// ==========================================
// 2. WEATHER & AQI
// ==========================================
async function fetchWeather() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${HELENA_LAT}&longitude=${HELENA_LON}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=America/Denver&temperature_unit=fahrenheit`;
    
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Weather API request failed');
        const data = await res.json();
        
        // Render current weather
        const current = data.current_weather;
        document.getElementById('current-temp').textContent = Math.round(current.temperature);
        document.getElementById('weather-desc').textContent = getWeatherDesc(current.weathercode);
        
        // Render icon
        const iconName = getWeatherIcon(current.weathercode);
        const iconDiv = document.getElementById('weather-icon-large');
        iconDiv.innerHTML = `<i data-lucide="${iconName}" class="animated-weather-icon"></i>`;
        
        // Today high/low
        const maxTemp = Math.round(data.daily.temperature_2m_max[0]);
        const minTemp = Math.round(data.daily.temperature_2m_min[0]);
        document.getElementById('today-high-low').textContent = `${maxTemp}°F / ${minTemp}°F`;

        // Render 7-day forecast
        renderForecast(data.daily);
        
        // Initialize/update icons
        lucide.createIcons();

    } catch (e) {
        console.error('Error fetching weather:', e);
        document.getElementById('weather-desc').textContent = 'Error loading weather';
    }
}

async function fetchAQI() {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${HELENA_LAT}&longitude=${HELENA_LON}&current=us_aqi`;
    
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('AQI API request failed');
        const data = await res.json();
        
        const aqiVal = data.current.us_aqi;
        document.getElementById('aqi-value').textContent = aqiVal;
        
        // Determine AQI category & color
        let color = '#10b981'; // Green (Good)
        let label = 'Good';
        let glow = 'rgba(16, 185, 129, 0.4)';
        
        if (aqiVal > 50 && aqiVal <= 100) {
            color = '#f59e0b'; // Yellow (Moderate)
            label = 'Moderate';
            glow = 'rgba(245, 158, 11, 0.4)';
        } else if (aqiVal > 100 && aqiVal <= 150) {
            color = '#f97316'; // Orange (Sensitive Groups)
            label = 'Unhealthy for Sensitive';
            glow = 'rgba(249, 115, 22, 0.4)';
        } else if (aqiVal > 150) {
            color = '#f43f5e'; // Red (Unhealthy)
            label = 'Unhealthy';
            glow = 'rgba(244, 63, 94, 0.4)';
        }
        
        const aqiDot = document.getElementById('aqi-dot');
        aqiDot.style.backgroundColor = color;
        aqiDot.style.boxShadow = `0 0 8px ${glow}`;
        document.getElementById('aqi-label').textContent = label;

    } catch (e) {
        console.error('Error fetching AQI:', e);
        document.getElementById('aqi-value').textContent = '--';
        document.getElementById('aqi-label').textContent = 'Error';
    }
}

function renderForecast(daily) {
    const scrollContainer = document.getElementById('forecast-scroll');
    scrollContainer.innerHTML = '';
    
    // We display days 1 to 6 (excluding today for forecast details, or starting today)
    // Starting index 0 is today. Let's render today + next 6 days (7 days total)
    for (let i = 0; i < 7; i++) {
        const dateStr = daily.time[i];
        const dateObj = new Date(dateStr + 'T00:00:00'); // Parse in local context
        const dayName = i === 0 ? 'Today' : dateObj.toLocaleDateString('en-US', { weekday: 'short' });
        
        const maxTemp = Math.round(daily.temperature_2m_max[i]);
        const minTemp = Math.round(daily.temperature_2m_min[i]);
        const iconName = getWeatherIcon(daily.weathercode[i]);
        
        const itemHtml = `
            <div class="forecast-item">
                <div class="forecast-day">${dayName}</div>
                <div class="forecast-icon"><i data-lucide="${iconName}"></i></div>
                <div class="forecast-temp">${maxTemp}° <span>/ ${minTemp}°</span></div>
            </div>
        `;
        scrollContainer.insertAdjacentHTML('beforeend', itemHtml);
    }
}

function getWeatherIcon(code) {
    if (code === 0) return 'sun';
    if (code >= 1 && code <= 3) return 'cloud-sun';
    if (code === 45 || code === 48) return 'cloud-fog';
    if (code >= 51 && code <= 57) return 'cloud-drizzle';
    if (code >= 61 && code <= 67) return 'cloud-rain';
    if (code >= 71 && code <= 77) return 'cloud-snow';
    if (code >= 80 && code <= 82) return 'cloud-showers-heavy';
    if (code >= 85 && code <= 86) return 'cloud-snow';
    if (code >= 95 && code <= 99) return 'cloud-lightning';
    return 'cloud';
}

function getWeatherDesc(code) {
    if (code === 0) return 'Clear Sky';
    if (code === 1) return 'Mainly Clear';
    if (code === 2) return 'Partly Cloudy';
    if (code === 3) return 'Overcast';
    if (code === 45 || code === 48) return 'Foggy';
    if (code >= 51 && code <= 55) return 'Drizzle';
    if (code >= 56 && code <= 57) return 'Freezing Drizzle';
    if (code >= 61 && code <= 63) return 'Light Rain';
    if (code === 65) return 'Heavy Rain';
    if (code >= 66 && code <= 67) return 'Freezing Rain';
    if (code >= 71 && code <= 75) return 'Snowing';
    if (code === 77) return 'Snow Grains';
    if (code >= 80 && code <= 82) return 'Rain Showers';
    if (code >= 85 && code <= 86) return 'Snow Showers';
    if (code >= 95 && code <= 99) return 'Thunderstorm';
    return 'Cloudy';
}

// ==========================================
// 3. MARKETS TICKER
// ==========================================
async function fetchMarkets() {
    const refreshBtn = document.getElementById('refresh-markets');
    refreshBtn.classList.add('loading'); // Custom class for rotation animation if desired
    
    const proxy = "https://api.allorigins.win/raw?url=";
    
    for (const sym of MARKET_TICKERS) {
        const targetUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${sym}?interval=1d&range=1d`;
        const fetchUrl = proxy + encodeURIComponent(targetUrl);
        
        try {
            const res = await fetch(fetchUrl);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            
            const meta = data.chart.result[0].meta;
            const price = meta.regularMarketPrice;
            const prevClose = meta.chartPreviousClose;
            const changePct = ((price - prevClose) / prevClose) * 100;
            
            // Render to UI
            // Yahoo Tickers mapping to DOM IDs (VTI -> VTI, BTC-USD -> BTC)
            const domId = sym === "BTC-USD" ? "BTC" : sym;
            
            const priceCell = document.getElementById(`price-${domId}`);
            const changeCell = document.getElementById(`change-${domId}`);
            
            // Format price: Crypto gets cents or commas based on magnitude
            if (domId === "BTC") {
                priceCell.textContent = `$${Math.round(price).toLocaleString()}`;
            } else {
                priceCell.textContent = `$${price.toFixed(2)}`;
            }
            
            const prefix = changePct >= 0 ? '+' : '';
            changeCell.textContent = `${prefix}${changePct.toFixed(2)}%`;
            
            // Style change classes
            if (changePct >= 0) {
                changeCell.className = "change text-right positive-change";
            } else {
                changeCell.className = "change text-right negative-change";
            }
            
        } catch (e) {
            console.error(`Error loading market for ${sym}:`, e);
            const domId = sym === "BTC-USD" ? "BTC" : sym;
            document.getElementById(`price-${domId}`).textContent = 'Error';
            document.getElementById(`change-${domId}`).textContent = '--%';
            document.getElementById(`change-${domId}`).className = "change text-right";
        }
    }
    
    setTimeout(() => refreshBtn.classList.remove('loading'), 500);
}

// ==========================================
// 4. HABIT TRACKER
// ==========================================
function getLocalDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function setupHabitTracker() {
    // Generate dates array for past 6 days + today (total 7 days)
    const dates = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        dates.push(d);
    }

    // Render Headers
    const headersRow = document.getElementById('tracker-headers');
    // Clear existing dynamic headers (keep first 'Habit' th)
    headersRow.innerHTML = '<th>Habit</th>';
    
    dates.forEach((date, index) => {
        const isToday = index === 6;
        const dayInitial = date.toLocaleDateString('en-US', { weekday: 'narrow' });
        const shortDate = `${date.getMonth() + 1}/${date.getDate()}`;
        
        const th = document.createElement('th');
        if (isToday) th.className = 'is-today-column';
        th.innerHTML = `
            <div class="tracker-header-day ${isToday ? 'is-today' : ''}">
                <span class="day-lbl">${dayInitial}</span>
                <span class="date-lbl">${shortDate}</span>
            </div>
        `;
        headersRow.appendChild(th);
    });

    // Render Body Rows
    const tbody = document.getElementById('tracker-tbody');
    tbody.innerHTML = '';

    HABITS.forEach(habit => {
        const tr = document.createElement('tr');
        
        // Habit Name Label cell
        const nameTd = document.createElement('td');
        nameTd.textContent = habit;
        tr.appendChild(nameTd);
        
        // Habit cells for 7 days
        dates.forEach((date, dayIdx) => {
            const isToday = dayIdx === 6;
            const td = document.createElement('td');
            if (isToday) td.className = 'is-today-column';
            
            const dateStr = getLocalDateString(date);
            const storageKey = `habit_${habit.replace(/\s+/g, '_')}_${dateStr}`;
            const isCompleted = localStorage.getItem(storageKey) === 'true';
            
            td.innerHTML = `
                <div class="habit-cell">
                    <label class="habit-checkbox-wrapper">
                        <input type="checkbox" data-habit="${habit}" data-date="${dateStr}" ${isCompleted ? 'checked' : ''}>
                        <span class="habit-checkmark"></span>
                    </label>
                </div>
            `;
            
            // Click Handler
            const checkbox = td.querySelector('input');
            checkbox.addEventListener('change', (e) => {
                const checked = e.target.checked;
                localStorage.setItem(storageKey, checked ? 'true' : 'false');
                updateHabitCompletionRate();
            });
            
            tr.appendChild(td);
        });
        
        tbody.appendChild(tr);
    });

    updateHabitCompletionRate();
}

function updateHabitCompletionRate() {
    const todayStr = getLocalDateString(new Date());
    let completedToday = 0;
    
    HABITS.forEach(habit => {
        const storageKey = `habit_${habit.replace(/\s+/g, '_')}_${todayStr}`;
        if (localStorage.getItem(storageKey) === 'true') {
            completedToday++;
        }
    });
    
    const pct = Math.round((completedToday / HABITS.length) * 100);
    document.getElementById('habit-completion-rate').textContent = `${completedToday} of ${HABITS.length} completed today (${pct}%)`;
}

// ==========================================
// 5. NEWS BRIEFING
// ==========================================
function setupNewsTabs() {
    const tabs = document.querySelectorAll('.news-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const targetTab = e.currentTarget.dataset.tab;
            if (targetTab === currentNewsTab) return;
            
            // Switch tabs
            tabs.forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            currentNewsTab = targetTab;
            fetchNews(currentNewsTab);
        });
    });

    document.getElementById('retry-news-btn').addEventListener('click', () => {
        fetchNews(currentNewsTab);
    });
}

async function fetchNews(tab) {
    const loader = document.getElementById('news-loader');
    const errorEl = document.getElementById('news-error');
    const newsList = document.getElementById('news-list');
    
    loader.classList.remove('hidden');
    errorEl.classList.add('hidden');
    newsList.innerHTML = '';
    
    const rssUrl = NEWS_FEEDS[tab];
    const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    try {
        const res = await fetch(api);
        if (!res.ok) throw new Error('News fetch failed');
        const data = await res.json();
        
        if (data.status !== 'ok' || !data.items || data.items.length === 0) {
            throw new Error('News feed data parse error');
        }
        
        // Hide loader
        loader.classList.add('hidden');
        
        // Slice top 6 articles
        const articles = data.items.slice(0, 6);
        articles.forEach(item => {
            // Clean date
            let pubDateStr = 'Recent';
            if (item.pubDate) {
                const dateObj = new Date(item.pubDate.replace(' ', 'T'));
                pubDateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            }
            
            // Source label
            let source = data.feed.title || 'News Feed';
            if (source.includes('ScienceDaily')) source = 'ScienceDaily';
            else if (source.includes('Good News')) source = 'Good News Network';
            else if (source.includes('Yahoo Finance')) source = 'Yahoo Finance';
            
            const li = document.createElement('li');
            li.className = 'news-item';
            li.innerHTML = `
                <div class="news-item-title">
                    <a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a>
                </div>
                <div class="news-item-meta">
                    <span>${source}</span>
                    <span>${pubDateStr}</span>
                </div>
            `;
            newsList.appendChild(li);
        });
        
    } catch (e) {
        console.error('Error fetching news:', e);
        loader.classList.add('hidden');
        errorEl.classList.remove('hidden');
    }
}

// ==========================================
// 6. CHASE FREEDOM REWARDS
// ==========================================
function setupChaseRewards() {
    // Determine current quarter based on local system date
    const currentMonth = new Date().getMonth(); // 0-11
    let activeQ = 1;
    if (currentMonth >= 0 && currentMonth <= 2) activeQ = 1;
    else if (currentMonth >= 3 && currentMonth <= 5) activeQ = 2;
    else if (currentMonth >= 6 && currentMonth <= 8) activeQ = 3;
    else if (currentMonth >= 9 && currentMonth <= 11) activeQ = 4;
    
    // Set active tab styling
    const qButtons = document.querySelectorAll('.q-btn');
    qButtons.forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.quarter) === activeQ) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', (e) => {
            const quarter = parseInt(e.currentTarget.dataset.quarter);
            qButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderChaseQuarter(quarter);
        });
    });

    // Render initial quarter categories
    renderChaseQuarter(activeQ);
}

function renderChaseQuarter(qNum) {
    const data = CHASE_CATEGORIES[qNum];
    const listContainer = document.getElementById('card-categories-list');
    const infoContainer = document.getElementById('card-quarter-info');
    
    infoContainer.textContent = data.name;
    listContainer.innerHTML = '';
    
    data.categories.forEach((cat, idx) => {
        const icon = data.icons[idx] || 'check-circle';
        const itemHtml = `
            <div class="card-category-item">
                <i data-lucide="${icon}"></i>
                <span>${cat}</span>
            </div>
        `;
        listContainer.insertAdjacentHTML('beforeend', itemHtml);
    });
    
    // Refresh icons
    lucide.createIcons();
}
