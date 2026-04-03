import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-bg-surface text-primary py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link to="/" className="text-2xl font-serif font-semibold tracking-tight text-primary mb-2 block">
            Dr. Julian Nolen
          </Link>
          <p className="text-sm text-text-muted font-light">
            Counseling, Assessment, and Education in Western Montana
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-text-muted font-light">
          <span>&copy; {new Date().getFullYear()} Julian Nolen, Ph.D.</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent" /> in Montana
          </span>
        </div>
      </div>
    </footer>
  );
}
