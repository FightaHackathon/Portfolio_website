
import React from 'react';

export const AchievementsContent: React.FC = () => (
  <div>
    <h2 className="text-2xl text-[#f15bb5] mb-2">[ accolades.log ]</h2>
    <ul className="list-disc list-inside">
        <li className="mb-2">
            <span className="text-[#fee440]">2023:</span> Hackathon Challenge - 1st Place
        </li>
        <li className="mb-2">
            <span className="text-[#fee440]">2022:</span> Dean's List for Academic Excellence
        </li>
        <li className="mb-2">
            <span className="text-[#fee440]">2021:</span> University Tech Fair - Best Project
        </li>
        <li className="mb-2">
            <span className="text-[#fee440]">ONLINE:</span> Various certifications in ML/AI...
        </li>
    </ul>
  </div>
);
