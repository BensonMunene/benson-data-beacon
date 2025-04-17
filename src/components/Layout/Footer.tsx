
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn('bg-background border-t', className)}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Benson | Data Scientist & Financial Engineer
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/your-github" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-green transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/your-linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="text-muted-foreground hover:text-accent-green transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
