import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skill } from '@/utils/types';
import { cn } from '@/lib/utils';
import { Code, Database, Cloud, Brain, Calculator, Wrench } from 'lucide-react';

interface SkillsProps {
  className?: string;
}

const Skills: React.FC<SkillsProps> = ({ className }) => {
  const skills: Skill[] = [
    // Languages
    { name: 'Python', level: 100, category: 'language' },
    { name: 'R', level: 100, category: 'language' },
    { name: 'SQL', level: 100, category: 'language' },
    { name: 'JavaScript', level: 100, category: 'language' },
    
    // Tools/Frameworks
    { name: 'Django', level: 100, category: 'tool' },
    { name: 'React', level: 100, category: 'tool' },
    { name: 'Power BI', level: 100, category: 'tool' },
    { name: 'Tableau', level: 100, category: 'tool' },
    { name: 'Looker Studio', level: 100, category: 'tool' },
    { name: 'Excel', level: 100, category: 'tool' },
    { name: 'R Shiny', level: 100, category: 'tool' },
    
    // Cloud & Big Data
    { name: 'AWS', level: 100, category: 'cloud' },
    { name: 'Snowflake', level: 100, category: 'cloud' },
    { name: 'Microsoft Azure', level: 100, category: 'cloud' },
    { name: 'Google Cloud Platform', level: 100, category: 'cloud' },
    
    // Machine Learning/AI
    { name: 'Scikit-learn', level: 100, category: 'ml' },
    { name: 'TensorFlow', level: 100, category: 'ml' },
    { name: 'PyTorch', level: 100, category: 'ml' },
    { name: 'XGBoost', level: 100, category: 'ml' },
    { name: 'Keras', level: 100, category: 'ml' },
    { name: 'NLP', level: 100, category: 'ml' },
    { name: 'Reinforcement Learning', level: 100, category: 'ml' },
    
    // Quant & Econometrics
    { name: 'MATLAB', level: 100, category: 'quant' },
    { name: 'Stata', level: 100, category: 'quant' },
    { name: 'EViews', level: 100, category: 'quant' },
    { name: 'Python + QuantLib', level: 100, category: 'quant' },
    { name: 'R + quantmod', level: 100, category: 'quant' },
    
    // Other
    { name: 'Git', level: 100, category: 'other' },
    { name: 'Docker', level: 100, category: 'other' },
    { name: 'REST APIs', level: 100, category: 'other' },
  ];

  const categories = [
    { id: 'all', label: 'All', icon: Wrench },
    { id: 'language', label: 'Languages', icon: Code },
    { id: 'tool', label: 'Tools', icon: Database },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'ml', label: 'ML/AI', icon: Brain },
    { id: 'quant', label: 'Quant/Econometrics', icon: Calculator },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredSkills = skills.filter(
    skill => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section 
      id="skills" 
      className={cn('section-padding', className)}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                <category.icon size={16} />
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-sm card-hover"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{skill.name}</h3>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-blue to-accent-green w-full"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
