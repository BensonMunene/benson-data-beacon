
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Education, Certification } from '@/utils/types';
import { cn } from '@/lib/utils';
import { BookOpen, Award } from 'lucide-react';

interface EducationSectionProps {
  className?: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({ className }) => {
  const educationItems: Education[] = [
    {
      id: 1,
      degree: 'BSc Actuarial Science',
      institution: 'University Name',
      year: '2018',
      description: 'Graduated with honors, focusing on statistical modeling and risk assessment.'
    },
    {
      id: 2,
      degree: 'MSc in Data Science',
      institution: 'Deakin University',
      year: 'Ongoing',
      description: 'Focusing on advanced machine learning techniques and big data analytics.'
    },
    {
      id: 3,
      degree: 'MSc in Financial Engineering',
      institution: 'WorldQuant University',
      year: 'Ongoing',
      description: 'Specializing in quantitative finance, algorithmic trading, and financial modeling.'
    }
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      name: 'Actuarial Papers (5)',
      issuer: 'Institute and Faculty of Actuaries, UK',
      year: '2019',
      description: 'Completed 5 professional actuarial papers covering risk management, statistics, and financial mathematics.'
    },
    {
      id: 2,
      name: 'Future Certifications',
      issuer: 'Various',
      year: 'Planned',
      description: 'Plans to pursue CFA, FRM, and PhD in Data Science to further expand expertise in finance and data science.'
    }
  ];

  return (
    <section 
      id="education" 
      className={cn('section-padding', className)}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Column */}
          <div>
            <div className="flex items-center mb-6">
              <BookOpen size={24} className="text-primary-blue mr-2" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {educationItems.map((item) => (
                <Card key={item.id} className="card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{item.degree}</CardTitle>
                      <span className="text-sm text-muted-foreground px-2 py-1 bg-secondary rounded-md">
                        {item.year}
                      </span>
                    </div>
                    <CardDescription className="text-accent-green font-medium">
                      {item.institution}
                    </CardDescription>
                  </CardHeader>
                  {item.description && (
                    <CardContent>
                      <p className="text-sm text-foreground/80">{item.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications Column */}
          <div>
            <div className="flex items-center mb-6">
              <Award size={24} className="text-primary-blue mr-2" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((item) => (
                <Card key={item.id} className="card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <span className="text-sm text-muted-foreground px-2 py-1 bg-secondary rounded-md">
                        {item.year}
                      </span>
                    </div>
                    <CardDescription className="text-accent-green font-medium">
                      {item.issuer}
                    </CardDescription>
                  </CardHeader>
                  {item.description && (
                    <CardContent>
                      <p className="text-sm text-foreground/80">{item.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
