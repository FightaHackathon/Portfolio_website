
import React from 'react';

const ProjectItem: React.FC<{ name: string; description: string; tech: string }> = ({ name, description, tech }) => (
    <div className="mb-4">
        <p><span className="text-[#fee440]">project_name:</span> {name}</p>
        <p><span className="text-[#fee440]">description:</span> {description}</p>
        <p><span className="text-[#fee440]">tech_stack:</span> {tech}</p>
    </div>
);

export const ProjectsContent: React.FC = () => (
  <div>
    <h2 className="text-2xl text-[#f15bb5] mb-2">[ C:/Projects ]</h2>
    <ProjectItem 
        name="retro_portfolio.exe"
        description="This very website you are looking at!"
        tech="React, TypeScript, TailwindCSS"
    />
    <ProjectItem 
        name="ai_chatbot_v1.sys"
        description="A command-line chatbot using NLP."
        tech="Python, NLTK"
    />
    <ProjectItem 
        name="data_visualizer.app"
        description="Interactive dashboard for visualizing datasets."
        tech="D3.js, React"
    />
  </div>
);
