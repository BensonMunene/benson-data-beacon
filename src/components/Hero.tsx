import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section 
      id="home" 
      className={cn('min-h-[80vh] flex flex-col justify-center relative pt-8', className)}
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
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-accent-green shadow-xl">
            <img 
              src="/lovable-uploads/7c76a28b-77ba-4f18-a88a-e4a411499ccf.png"
              alt="Benson Munene"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-accent-green font-semibold text-xl mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-gradient">Benson Munene</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground/90">
              Data Scientist & Financial Engineer
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <a 
                href="https://www.upwork.com/freelancers/bensonm27" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#14a800] text-white px-4 py-2 rounded-full hover:bg-[#14a800]/90 transition-colors"
              >
                Top Rated Plus on Upwork
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
              </a>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              A top-rated freelance professional with expertise in Actuarial Science, 
              data analytics, and AI/ML applications. Specialized in predictive modeling, 
              big data pipelines, and real-time decision-making systems.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-8">
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
