import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { MusicIcon } from './Icons';

// The YouTube playlist ID. You can change this to your preferred playlist.
const YOUTUBE_PLAYLIST_ID = 'PLmOx8CVVYfY3kVqnC78iltBk1Cs7QdRXu';
// The YouTube video ID to start the playlist with, from the provided link.
const YOUTUBE_VIDEO_ID = 'utYouad0v5E';

const AudioContext = createContext<any>(null);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [player, setPlayer] = useState<any>(null);

    useEffect(() => {
        const createPlayer = () => {
            if (player || !document.getElementById('player-container')) return;

            const newPlayer = new (window as any).YT.Player('player-container', {
                height: '0',
                width: '0',
                videoId: YOUTUBE_VIDEO_ID,
                playerVars: {
                    listType: 'playlist',
                    list: YOUTUBE_PLAYLIST_ID,
                    autoplay: 1,
                    loop: 1,
                    controls: 0,
                },
                events: {
                    onReady: (event: any) => {
                        event.target.setVolume(30);
                        event.target.playVideo();
                    },
                },
            });

            setPlayer(newPlayer);
        };

        createPlayer();
    }, [player]);

    return <AudioContext.Provider value={player}>{children}</AudioContext.Provider>;
};

export const useAudioPlayer = () => useContext(AudioContext);

const Jukebox: React.FC = () => {
    const player = useAudioPlayer();
    const [trackTitle, setTrackTitle] = useState('Connecting to radio...');
    const [volume, setVolume] = useState(30);
    const playerRef = useRef<any>(null);

    useEffect(() => {
        const createPlayer = () => {
            if (playerRef.current || !document.getElementById('player-container')) return;
            
            playerRef.current = new (window as any).YT.Player('player-container', {
                height: '0',
                width: '0',
                videoId: YOUTUBE_VIDEO_ID, // Start with this video
                playerVars: {
                    listType: 'playlist',
                    list: YOUTUBE_PLAYLIST_ID,
                    autoplay: 1,
                    loop: 1,
                    controls: 0,
                },
                events: {
                    onReady: (event: any) => {
                        event.target.setVolume(volume);
                        event.target.playVideo();
                    },
                    onStateChange: (event: any) => {
                        if (event.data === (window as any).YT.PlayerState.PLAYING) {
                            const videoData = event.target.getVideoData();
                            setTrackTitle(videoData.title || 'Unknown Track');
                        }
                    },
                    onError: () => {
                        setTrackTitle('Radio signal lost...');
                    }
                },
            });
        };

        if (typeof (window as any).YT === 'undefined' || typeof (window as any).YT.Player === 'undefined') {
            (window as any).onYouTubeIframeAPIReady = createPlayer;
        } else {
            createPlayer();
        }

        return () => {
            if (playerRef.current && typeof playerRef.current.destroy === 'function') {
                playerRef.current.destroy();
                playerRef.current = null;
            }
        };
    }, []);

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(e.target.value, 10);
        setVolume(newVolume);
        if (playerRef.current && typeof playerRef.current.setVolume === 'function') {
            playerRef.current.setVolume(newVolume);
        }
    };

    return (
        <div className="p-4 border-2 border-[#401f68] bg-[#1a0933] flex flex-col flex-grow min-h-[150px]">
            <h2 className="text-2xl text-[#ff007f] text-shadow-pink mb-2 flex items-center gap-2">[ <MusicIcon/> jukebox.sys ]</h2>
            <div className="flex-grow flex items-center justify-center text-center">
                <p className="text-[#00f5d4]">{trackTitle}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-gray-400">VOL</span>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider flex-grow"
                aria-label="Volume"
              />
            </div>
            <div id="player-container" className="w-0 h-0"></div>
        </div>
    );
};

export default Jukebox;