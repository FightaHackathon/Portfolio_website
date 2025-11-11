
import React from 'react';

const BlinkingCursor = () => <span className="blinking-cursor">_</span>;

export const ProfileContent: React.FC = () => (
  <div className="text-lg leading-relaxed">
    <h1 className="text-3xl text-[#f15bb5] mb-4">[ user_info ]</h1>
    <p><span className="text-[#fee440]">> NAME:</span> [Your Name Here]</p>
    <p><span className="text-[#fee440]">> STATUS:</span> 4th Year Student</p>
    <p><span className="text-[#fee440]">> MAJOR:</span> Knowledge Engineering</p>
    <p className="mb-4"><span className="text-[#fee440]">> UNIVERSITY:</span> University of Information Technology, Yangon</p>
    
    <p className="my-4">
      Welcome to my digital space. I'm passionate about AI, data, and building cool things for the web.
      Loading more info... <BlinkingCursor />
    </p>

    <h2 className="text-2xl text-[#f15bb5] mt-6 mb-2">[ C:/Projects ]</h2>
    <div className="mb-2">
        <p><span className="text-[#fee440]">project_name:</span> retro_portfolio.exe</p>
        <p className="pl-4">This very website you are looking at!</p>
    </div>
    <div className="mb-2">
        <p><span className="text-[#fee440]">project_name:</span> ai_chatbot_v1.sys</p>
        <p className="pl-4">A command-line chatbot using NLP.</p>
    </div>
    <div className="mb-2">
        <p><span className="text-[#fee440]">project_name:</span> data_visualizer.app</p>
        <p className="pl-4">Interactive dashboard for visualizing datasets.</p>
    </div>

    <h2 className="text-2xl text-[#f15bb5] mt-6 mb-2">[ accolades.log ]</h2>
    <ul className="list-disc list-inside">
        <li><span className="text-[#fee440]">2023:</span> Hackathon Challenge - 1st Place</li>
        <li><span className="text-[#fee440]">2022:</span> Dean's List for Academic Excellence</li>
        <li><span className="text-[#fee440]">2021:</span> University Tech Fair - Best Project</li>
    </ul>
  </div>
);
