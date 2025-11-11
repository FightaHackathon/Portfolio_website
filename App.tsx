import React, { useState, useEffect, useRef } from 'react';
import { GithubIcon, FacebookIcon, LinkedInIcon } from './components/Icons';
import { profileImageBase64 } from './assets/profile';
import DataQuiz from './components/DataQuiz';
import ParticleBackground from './components/ParticleBackground';
import { galleryImages } from './assets/galleryImages';
import Jukebox, { AudioProvider } from './components/Jukebox';
import { BrowserRouter } from 'react-router-dom';


const Scanlines = () => (
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50">
    <div 
      className="absolute top-0 left-0 w-full h-full bg-repeat"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px)',
        backgroundSize: '100% 2px',
      }}
    ></div>
  </div>
);

const BlinkingCursor = () => <span className="blinking-cursor">_</span>;

const RetroGif = () => (
    <div className="w-full h-full flex flex-col">
        <h3 className="text-lg text-[#ff007f] text-shadow-pink mb-2 flex-shrink-0">[ sys_monitor.gfx ]</h3>
        <div className="relative w-full flex-grow overflow-hidden border border-[#401f68]">
            <img 
                src="https://pa1.aminoapps.com/6840/8bdfe1ed7e65d05b2c467b2b5fd8af8562bc5ea5_hq.gif"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Retro anime gif"
            />
            <div 
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundColor: 'rgba(0, 245, 212, 0.05)',
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.1) brightness(0.9) saturate(1.2)'
                }}
            ></div>
            <div 
              className="absolute top-0 left-0 w-full h-full bg-repeat pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px)',
                backgroundSize: '100% 3px',
              }}
            ></div>
        </div>
    </div>
);


const UserInfo = () => (
    <div className="p-4 border-2 border-[#401f68] bg-[#1a0933] h-full flex flex-col">
        <div className="flex-shrink-0">
            <img 
                src={profileImageBase64} 
                alt="Profile of Min Thant Tun" 
                className="float-right ml-4 w-32 h-32 border-2 border-[#00f5d4] object-cover"
            />
            <h2 className="text-2xl text-[#ff007f] text-shadow-pink mb-4">[ user_info.log ]</h2>
            <p className="mb-1 text-white"><span className="text-[#00f5d4]">{'>'} NAME:</span> Min Thant Tun</p>
            <p className="mb-1 text-white"><span className="text-[#00f5d4]">{'>'} UNIVERSITY:</span> University of Information Technology,Yangon</p>
            <p className="mb-1 text-white"><span className="text-[#00f5d4]">{'>'} MAJOR:</span> Knowledge Engineering</p>
            <p className="mb-1 text-white"><span className="text-[#00f5d4]">{'>'} INTERESTS:</span> Deep Learning, Machine Learning, Data Analyst, Data Science</p>
            <p className="mb-4 text-white"><span className="text-[#00f5d4]">{'>'} HOBBIES:</span> Reading, Gaming, Coding, Drawing</p>
            <p className="mt-4 text-gray-300">
              A passionate student of Data Science and AI with hands-on experience leading university and external projects. I thrive on turning complex data into meaningful solutions and am always seeking new challenges to expand my skills in building intelligent systems. <BlinkingCursor />
            </p>
        </div>
        <div className="flex-grow mt-4 border-t-2 border-[#401f68] pt-4 flex flex-col md:flex-row gap-4 min-h-0">
            <div className="md:w-3/5 lg:w-2/3 h-full">
                <DataQuiz />
            </div>
            <div className="md:w-2/5 lg:w-1/3 h-full min-h-[250px] md:min-h-0">
                <RetroGif />
            </div>
        </div>
    </div>
);


const ProjectItem: React.FC<{ name: string; description: string; tech: string }> = ({ name, description, tech }) => (
    <div className="mb-3">
        <p className="text-white"><span className="text-[#00f5d4]">{'>'} {name}</span></p>
        <p className="text-sm pl-4 text-gray-400"> <span className="text-gray-600">//</span> {description}</p>
        <p className="text-sm pl-4 text-[#ff007f]"> <span className="text-gray-600">{'>'}</span> [{tech}]</p>
    </div>
);


const Projects = () => (
    <div className="p-4 border-2 border-[#401f68] bg-[#1a0933]">
        <h2 className="text-2xl text-[#ff007f] text-shadow-pink mb-4">[ C:/Projects ]</h2>
        <ProjectItem 
            name="SkinCare Website"
            description="A modern skincare consultation site with interactive analysis features (skin, body, color, hair), clinic booking, and user profiles."
            tech="React, TypeScript, TensorFlow"
        />
        <ProjectItem 
            name="Image_FFT_Analyzer"
            description="Analyzes differences between natural and AI-generated images using FFT/IFT. Includes a demo for training a model with this method for an engineering mathematics project."
            tech="TypeScript, Python"
        />
        <ProjectItem 
            name="Terrian physics playground for 3d testing"
            description="A 3D ball simulation using pure TypeScript physics with gravity. Built with React Three Fiber, it features free movement and a reset function."
            tech="Vite, React, Three.js, React Three Fiber, TailwindCSS"
        />
    </div>
);

const achievementsList = [
    { year: "2023", text: "Myanmar Hackatom Winner" },
    { year: "2023", text: "Myanmar Representative for ASEAN Youth Dialogue" },
    { year: "2023", text: "Myanmar Youth Representative for ASEAN Summit" },
    { year: "2024", text: "Data Manager at INOTEK" },
    { year: "2024", text: "Myanmar Youth Forum" },
    { year: "2024", text: "Myanmar representative at Youth Nuclear Forum" },
    { year: "2025", text: "Cogniverse Member at Korea ASEAN Youth AI Festa 2025" },
];

const Achievements = () => (
    <div className="p-4 border-2 border-[#401f68] bg-[#1a0933] flex flex-col">
        <h2 className="text-2xl text-[#ff007f] text-shadow-pink mb-4 flex-shrink-0">[ accolades.log ]</h2>
        <div className="flex-grow">
            <div>
                {achievementsList.map((item, index) => (
                    <p key={index} className="list-none text-gray-300 text-sm mb-1">
                        <span className="text-[#00f5d4]">{'>'} {item.year}:</span> {item.text}
                    </p>
                ))}
            </div>
        </div>
    </div>
);

const Connect = () => (
    <div className="p-2 border-2 border-[#401f68] bg-[#1a0933] h-full flex items-center justify-between flex-wrap gap-4">
        <div className="flex-grow min-w-[300px]">
           <p className="text-gray-300 text-md text-center sm:text-left">"Remember to favour your time and spend it wisely."</p>
        </div>
        <div className="flex items-center space-x-4 flex-shrink-0 mx-auto sm:mx-0">
            <span className="text-[#00f5d4]">Contact me:</span>
            <a href="https://github.com/FightaHackathon" target="_blank" rel="noopener noreferrer" className="text-[#00f5d4] hover:text-white transition-all transform hover:scale-110"><div className="w-8 h-8"><GithubIcon /></div></a>
            <a href="https://www.facebook.com/min.thanttun.33" target="_blank" rel="noopener noreferrer" className="text-[#00f5d4] hover:text-white transition-all transform hover:scale-110"><div className="w-8 h-8"><FacebookIcon /></div></a>
            <a href="https://www.linkedin.com/in/min-thant-tun-a9ab902a5/" target="_blank" rel="noopener noreferrer" className="text-[#00f5d4] hover:text-white transition-all transform hover:scale-110"><div className="w-8 h-8"><LinkedInIcon /></div></a>
        </div>
    </div>
);


// Page Components
const HomePage = () => (
    <div className="flex-grow grid grid-cols-1 md:grid-cols-5 gap-4 min-h-0">
        <div className="md:col-span-3 h-full">
            <UserInfo />
        </div>
        <div className="md:col-span-2 space-y-4 flex flex-col">
            <Projects />
            <Achievements />
            <Jukebox />
        </div>
    </div>
);

const DevLogPage = () => {
  const today = new Date().toISOString().split('T')[0];
  return (
    <div className="p-4 border-2 border-[#401f68] bg-[#1a0933] flex-grow">
        <h2 className="text-2xl text-[#ff007f] text-shadow-pink mb-4">[ dev_log.sys ]</h2>
        <div className="mb-4">
            <p className="text-white"><span className="text-[#00f5d4]">{'>'} {today}:</span> Commissioned work: a private data haven for my inner circle.</p>
            <p className="text-sm pl-4 text-gray-400"> <span className="text-gray-600">//</span> Scrambling the sigs. No corpo snooping allowed. <BlinkingCursor /></p>
        </div>
        <div className="mb-4">
            <p className="text-white"><span className="text-[#00f5d4]">{'>'} {today}:</span> Implemented Page Navigation</p>
            <p className="text-sm pl-4 text-gray-400"> <span className="text-gray-600">//</span> Refactored to support multiple pages (Dev Log, Gallery) without a full router.</p>
        </div>
        <div className="mb-4">
            <p className="text-white"><span className="text-[#00f5d4]">{'>'} {today}:</span> Added Jukebox & Interactivity</p>
            <p className="text-sm pl-4 text-gray-400"> <span className="text-gray-600">//</span> Integrated the YouTube IFrame API for a background music player. Added subtle hover animations.</p>
        </div>
        <div className="mb-4">
            <p className="text-white"><span className="text-[#00f5d4]">{'>'} {today}:</span> Project Initialization</p>
            <p className="text-sm pl-4 text-gray-400"> <span className="text-gray-600">//</span> Set up the initial VA-11 HALL-A aesthetic, basic layout, and components.</p>
        </div>
    </div>
  );
};

const GalleryPage = ({ onImageSelect }: { onImageSelect: (src: string) => void }) => (
    <div className="p-4 border-2 border-[#401f68] bg-[#1a0933] flex-grow">
        <h2 className="text-2xl text-[#ff007f] text-shadow-pink mb-4">[ C:/Media/Gallery ]</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((image) => (
                <div 
                  key={image.id} 
                  className="aspect-square border-2 border-[#401f68] bg-black/30 hover:border-[#00f5d4] transition-colors cursor-pointer overflow-hidden group"
                  onClick={() => onImageSelect(image.src)}
                  aria-label={`View image ${image.alt}`}
                  role="button"
                >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 retro-filter"
                      loading="lazy"
                    />
                </div>
            ))}
        </div>
    </div>
);


const App: React.FC = () => {
  const [activePage, setActivePage] = useState('HOME');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  return (
    <AudioProvider>
      <BrowserRouter>
        <div className="w-screen h-screen font-mono relative overflow-hidden p-2 sm:p-4 md:p-6 bg-black">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: "url('https://i.pinimg.com/originals/99/8e/05/998e055aba57c24138220937cc5166ab.gif')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(2px)',
              }}
            />
          </div>
          <ParticleBackground />
          <div className="relative z-10 w-full h-full flex flex-col">
            <Scanlines />
            <header className="flex justify-between items-center px-2 py-1 border-2 border-[#401f68] bg-[#1a0933]">
                <div className="flex items-baseline space-x-8">
                    <div className="cursor-pointer" onClick={() => setActivePage('HOME')}>
                        <h1 className="text-2xl text-[#ff007f] text-shadow-pink tracking-widest">PORTFOLIO.EXE</h1>
                        <p className="text-xs text-gray-400">STATUS: ONLINE</p>
                    </div>
                    <nav className="flex space-x-4">
                        <button 
                          onClick={() => setActivePage('DEV_LOG')} 
                          className={`text-lg transition-all duration-300 bg-transparent border-none ${activePage === 'DEV_LOG' ? 'text-white text-shadow-cyan' : 'text-[#00f5d4] hover:text-shadow-cyan'} hover:scale-105 transform`}
                        >
                          DEV_LOG
                        </button>
                        <button 
                          onClick={() => setActivePage('GALLERY')} 
                          className={`text-lg transition-all duration-300 bg-transparent border-none ${activePage === 'GALLERY' ? 'text-white text-shadow-cyan' : 'text-[#00f5d4] hover:text-shadow-cyan'} hover:scale-105 transform`}
                        >
                          GALLERY
                        </button>
                    </nav>
                </div>
                <div className="text-right">
                    <p className="text-xl text-[#00f5d4] text-shadow-cyan">Min Thant Tun Portfolio</p>
                </div>
            </header>

            <main className="flex-grow flex flex-col mt-4 overflow-y-auto min-h-0">
              <div key={activePage} className="page-transition flex-grow flex flex-col">
                {activePage === 'HOME' && <HomePage />}
                {activePage === 'DEV_LOG' && <DevLogPage />}
                {activePage === 'GALLERY' && <GalleryPage onImageSelect={setSelectedImage} />}
              </div>
            </main>

            <footer className="mt-4">
                <Connect />
            </footer>
            
            {selectedImage && (
                <div 
                  className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 cursor-pointer page-transition"
                  onClick={() => setSelectedImage(null)}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Enlarged image view"
                >
                  <img 
                    src={selectedImage} 
                    alt="Enlarged view" 
                    className="max-w-full max-h-full object-contain border-4 border-[#00f5d4] shadow-lg shadow-[#00f5d4]/50"
                    onClick={(e) => e.stopPropagation()} 
                  />
                </div>
            )}
          </div>
        </div>
      </BrowserRouter>
    </AudioProvider>
  );
};

export default App;