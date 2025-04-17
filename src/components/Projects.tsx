
import React, { useState } from 'react';
import { Project } from '@/utils/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Predictive Maintenance Models for Manufacturing",
      description: "Used ML models to predict equipment failures before they occurred to reduce downtime and cost.",
      technologies: ["Python", "Scikit-learn", "Pandas", "AWS", "Power BI"],
      category: "machine-learning"
    },
    {
      id: 2,
      title: "Sentiment Analysis on Social Media for Market Trend Prediction",
      description: "Analyzed social media data using NLP to anticipate market trends and consumer sentiment.",
      technologies: ["Python", "NLTK", "Tweepy", "Tableau"],
      category: "data-science"
    },
    {
      id: 3,
      title: "Customer Segmentation and Personalized Recommendations for E-commerce",
      description: "Built clustering models and recommendation engines to enhance personalization.",
      technologies: ["Python", "Scikit-learn", "SQL", "Looker Studio"],
      category: "data-science"
    },
    {
      id: 4,
      title: "Real-time Fraud Detection in Financial Transactions",
      description: "Developed a streaming ML model to flag suspicious activity in fintech transactions.",
      technologies: ["Python", "Spark", "AWS Kinesis", "Flask"],
      category: "financial"
    },
    {
      id: 5,
      title: "Automated Disease Diagnosis with Medical Imaging Data",
      description: "Used CNNs to automate diagnostic classification of X-rays.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "Python"],
      category: "machine-learning"
    },
    {
      id: 6,
      title: "NLP for Automated Customer Service & Engagement",
      description: "Created a chatbot and automated ticket categorization system using NLP.",
      technologies: ["Python", "spaCy", "Django", "React"],
      category: "data-science"
    }
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "data-science", label: "Data Science" },
    { value: "machine-learning", label: "Machine Learning" },
    { value: "financial", label: "Financial" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = projects.filter(
    project => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section 
      id="projects" 
      className={cn('section-padding bg-secondary/30', className)}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="card-hover overflow-hidden border border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="mb-4 text-foreground/80">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-accent-green hover:text-accent-green/90 hover:bg-transparent"
                    >
                      View details <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
