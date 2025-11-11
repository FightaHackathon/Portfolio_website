
import React from 'react';

export const GithubContent: React.FC = () => (
  <div>
    <h2 className="text-2xl text-[#f15bb5] mb-2">[ connect.sh ]</h2>
    <p>
      You can find my code repositories and contributions on my GitHub profile.
    </p>
    <a 
      href="https://github.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block mt-4 px-4 py-2 bg-[#9b5de5] text-white border-2 border-[#fcf6bd] hover:bg-[#f15bb5] transition-colors"
    >
      Visit GitHub &gt;
    </a>
  </div>
);
