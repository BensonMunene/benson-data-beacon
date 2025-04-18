import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Linkedin, Github, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <section id="contact" className={cn('section-padding bg-secondary/30', className)}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <Card className="border border-border/50">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input 
                        id="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-primary-blue hover:bg-primary-blue/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 text-accent-green mr-3" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:bensonmunene14@gmail.com" className="text-muted-foreground hover:text-accent-green">
                      bensonmunene14@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 text-accent-green mr-3" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Remote / Worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Briefcase className="w-5 h-5 mt-1 text-accent-green mr-3" />
                  <div>
                    <h4 className="font-medium">Upwork</h4>
                    <div className="flex items-center gap-2">
                      <a 
                        href="https://www.upwork.com/freelancers/bensonm27" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent-green"
                      >
                        Top-Rated Plus Freelancer
                      </a>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="w-5 h-5 mt-1 text-accent-green mr-3" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href="http://www.linkedin.com/in/benson-munene" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent-green"
                    >
                      linkedin.com/in/benson-munene
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="w-5 h-5 mt-1 text-accent-green mr-3" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a 
                      href="https://github.com/your-github" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent-green"
                    >
                      github.com/your-github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          
            <div>
              <h3 className="text-xl font-bold mb-4">Freelancing</h3>
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#14a800]">
                  <img 
                    src="/lovable-uploads/7c76a28b-77ba-4f18-a88a-e4a411499ccf.png"
                    alt="Benson Munene"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
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
                  <p className="text-muted-foreground">
                    Available for freelance projects in data science, machine learning, and financial engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
