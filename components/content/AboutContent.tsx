import React from 'react';

const BlinkingCursor = () => <span className="blinking-cursor">_</span>;

export const AboutContent: React.FC = () => (
  <div>
    <h2 className="text-2xl text-[#f15bb5] mb-2">[ user_info ]</h2>
    <p>
      <span className="text-[#fee440]">> NAME:</span> [Your Name Here]
    </p>
    <p>
      <span className="text-[#fee440]">> STATUS:</span> 4th Year Student
    </p>
    <p>
      <span className="text-[#fee440]">> MAJOR:</span> Knowledge Engineering
    </p>
    <p>
      <span className="text-[#fee440]">> UNIVERSITY:</span> University of Information Technology, Yangon
    </p>
    <p className="mt-4">
      Welcome to my digital space. I'm passionate about AI, data, and building cool things for the web.
    </p>
    <p className="mt-2">
      Loading skills... <BlinkingCursor />
    </p>
  </div>
);