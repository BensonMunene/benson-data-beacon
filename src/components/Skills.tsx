import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skill } from '@/utils/types';
import { cn } from '@/lib/utils';
import { Code, Database, Cloud, Brain, Wrench } from 'lucide-react';

interface SkillsProps {
  className?: string;
}

const Skills: React.FC<SkillsProps> = ({ className }) => {
  const skills: Skill[] = [
    // Languages
    { name: 'Python', level: 95, category: 'language' },
    { name: 'R', level: 90, category: 'language' },
    { name: 'SQL', level: 85, category: 'language' },
    { name: 'JavaScript', level: 75, category: 'language' },
    
    // Tools/Frameworks
    { name: 'Django', level: 85, category: 'tool' },
    { name: 'React', level: 80, category: 'tool' },
    { name: 'Power BI', level: 90, category: 'tool' },
    { name: 'Tableau', level: 85, category: 'tool' },
    { name: 'Looker Studio', level: 80, category: 'tool' },
    { name: 'Excel', level: 95, category: 'tool' },
    { name: 'R Shiny', level: 85, category: 'tool' },
    
    // Cloud & Big Data
    { name: 'AWS', level: 80, category: 'cloud' },
    { name: 'Snowflake', level: 85, category: 'cloud' },
    
    // Machine Learning/AI
    { name: 'Scikit-learn', level: 90, category: 'ml' },
    { name: 'TensorFlow', level: 85, category: 'ml' },
    { name: 'XGBoost', level: 90, category: 'ml' },
    { name: 'NLP', level: 80, category: 'ml' },
    { name: 'Reinforcement Learning', level: 75, category: 'ml' },
    
    // Other
    { name: 'Git', level: 85, category: 'other' },
    { name: 'Docker', level: 80, category: 'other' },
    { name: 'REST APIs', level: 85, category: 'other' },
  ];

  const categories = [
    { id: 'all', label: 'All', icon: Wrench },
    { id: 'language', label: 'Languages', icon: Code },
    { id: 'tool', label: 'Tools', icon: Database },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'ml', label: 'ML/AI', icon: Brain },
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
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
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
                    <span className="text-sm font-medium text-accent-green">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-blue to-accent-green"
                      style={{ width: `${skill.level}%` }}
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
