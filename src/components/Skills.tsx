import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skill } from '@/utils/types';
import { cn } from '@/lib/utils';
import { Code, Database, Cloud, Brain, Calculator, LineChart, LayoutDashboard, Server } from 'lucide-react';

interface SkillsProps {
  className?: string;
}

const Skills: React.FC<SkillsProps> = ({ className }) => {
  const skills: Skill[] = [
    // Languages
    { name: 'Python', level: 100, category: 'language' },
    { name: 'R', level: 100, category: 'language' },
    { name: 'Java', level: 100, category: 'language' },
    { name: 'JavaScript', level: 100, category: 'language' },
    { name: 'SQL', level: 100, category: 'language' },
    
    // Tools/Frameworks
    { name: 'Django', level: 100, category: 'dashboard' },
    { name: 'React', level: 100, category: 'dashboard' },
    { name: 'Power BI', level: 100, category: 'dashboard' },
    { name: 'Tableau', level: 100, category: 'dashboard' },
    { name: 'Looker Studio', level: 100, category: 'dashboard' },
    { name: 'Excel', level: 100, category: 'dashboard' },
    { name: 'R Shiny', level: 100, category: 'dashboard' },
    
    // Cloud & Big Data
    { name: 'AWS', level: 100, category: 'bigdata' },
    { name: 'Snowflake', level: 100, category: 'bigdata' },
    { name: 'Microsoft Azure', level: 100, category: 'bigdata' },
    { name: 'Google Cloud Platform', level: 100, category: 'bigdata' },
    { name: 'Hadoop', level: 100, category: 'bigdata' },
    { name: 'Apache Hive', level: 100, category: 'bigdata' },
    { name: 'PostgreSQL', level: 100, category: 'bigdata' },
    { name: 'Apache Spark', level: 100, category: 'bigdata' },
    
    // Machine Learning/AI
    { name: 'Scikit-learn', level: 100, category: 'ml' },
    { name: 'TensorFlow', level: 100, category: 'ml' },
    { name: 'PyTorch', level: 100, category: 'ml' },
    { name: 'XGBoost', level: 100, category: 'ml' },
    { name: 'Keras', level: 100, category: 'ml' },
    { name: 'NLP', level: 100, category: 'ml' },
    { name: 'Reinforcement Learning', level: 100, category: 'ml' },
    { name: 'OpenCV', level: 100, category: 'ml' },
    
    // Quant Finance
    { name: 'Python', level: 100, category: 'quant' },
    { name: 'R', level: 100, category: 'quant' },
    { name: 'MATLAB', level: 100, category: 'quant' },
    { name: 'Stata', level: 100, category: 'quant' },
    { name: 'Excel', level: 100, category: 'quant' },
    { name: 'EViews', level: 100, category: 'quant' },
    
    // Algo Trading & HFT
    { name: 'Python', level: 100, category: 'algotrading' },
    { name: 'MQL5', level: 100, category: 'algotrading' },
    { name: 'MQL4', level: 100, category: 'algotrading' },
    { name: 'TradingView PineScript', level: 100, category: 'algotrading' },
    { name: 'Interactive Brokers', level: 100, category: 'algotrading' },
    { name: 'MultiCharts', level: 100, category: 'algotrading' },
    { name: 'TradeStation EasyLanguage', level: 100, category: 'algotrading' },
  ];

  const categories = [
    { id: 'language', label: 'Programming Languages', icon: Code },
    { id: 'dashboard', label: 'Dashboard & Web Dev', icon: LayoutDashboard },
    { id: 'bigdata', label: 'Big Data & Cloud', icon: Server },
    { id: 'ml', label: 'Machine Learning/AI', icon: Brain },
    { id: 'quant', label: 'Quant Finance', icon: Calculator },
    { id: 'algotrading', label: 'Algo Trading & HFT', icon: LineChart },
  ];

  const [activeCategory, setActiveCategory] = useState('dashboard');
  
  const filteredSkills = skills.filter(
    skill => skill.category === activeCategory
  );

  return (
    <section 
      id="skills" 
      className={cn('section-padding', className)}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
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
