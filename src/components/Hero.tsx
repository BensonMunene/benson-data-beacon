
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section 
      id="home" 
      className={cn(
        'min-h-screen flex flex-col justify-center relative pt-16', 
        className
      )}
    >
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-5" 
        style={{ 
          backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      <div className="container mx-auto px-4 animate-fade-in">
        <div className="max-w-3xl">
          <h2 className="text-accent-green font-semibold mb-2">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Benson</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground/90">
            Data Scientist & Financial Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            A top-rated freelance professional with expertise in Actuarial Science, 
            data analytics, and AI/ML applications. Specialized in predictive modeling, 
            big data pipelines, and real-time decision-making systems.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-primary-blue hover:bg-primary-blue/90"
              size="lg"
              onClick={() => {
                const resumeUrl = "/path-to-resume.pdf";
                const link = document.createElement('a');
                link.href = resumeUrl;
                link.setAttribute('download', 'Benson-Resume.pdf');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#skills" 
          className="text-foreground/60 hover:text-accent-green transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
