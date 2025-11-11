
import React, { useState, useRef, useEffect, useCallback } from 'react';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  initialPosition: { x: number; y: number };
  isActive: boolean;
  onFocus: (id: string) => void;
  onClose: (id: string) => void;
  onPositionChange: (id: string, newPosition: { x: number; y: number }) => void;
}

export const Window: React.FC<WindowProps> = ({
  id,
  title,
  children,
  initialPosition,
  isActive,
  onFocus,
  onClose,
  onPositionChange
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!windowRef.current) return;
    onFocus(id);
    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    dragStartPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !windowRef.current) return;
    e.preventDefault();
    
    let newX = e.clientX - dragStartPos.current.x;
    let newY = e.clientY - dragStartPos.current.y;
    
    // Clamp position to be within viewport
    const parent = windowRef.current.parentElement;
    if (parent) {
      const parentRect = parent.getBoundingClientRect();
      const myRect = windowRef.current.getBoundingClientRect();
      newX = Math.max(0, Math.min(newX, parentRect.width - myRect.width));
      newY = Math.max(0, Math.min(newY, parentRect.height - 40 - myRect.height)); // 40px for taskbar
    }

    windowRef.current.style.left = `${newX}px`;
    windowRef.current.style.top = `${newY}px`;
  }, [isDragging]);

  const handleMouseUp = useCallback((e: MouseEvent) => {
    if (!isDragging || !windowRef.current) return;
    setIsDragging(false);
    const newPosition = {
        x: parseInt(windowRef.current.style.left, 10),
        y: parseInt(windowRef.current.style.top, 10),
    };
    onPositionChange(id, newPosition);
  }, [isDragging, onPositionChange, id]);
  
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={windowRef}
      className={`absolute w-[350px] md:w-[450px] h-auto flex flex-col shadow-2xl transition-all duration-100 ease-in-out border-2 ${isActive ? 'border-[#fcf6bd] z-30' : 'border-[#5a189a] z-20'}`}
      style={{ left: `${initialPosition.x}px`, top: `${initialPosition.y}px` }}
      onMouseDown={() => onFocus(id)}
    >
      <div
        className={`w-full h-8 flex items-center justify-between px-2 cursor-move ${isActive ? 'bg-gradient-to-r from-[#9b5de5] to-[#f15bb5]' : 'bg-gradient-to-r from-[#2a1a5e] to-[#5a189a]'}`}
        onMouseDown={handleMouseDown}
      >
        <span className={`text-sm select-none ${isActive ? 'text-white' : 'text-[#a2d2ff]'}`}>{title}</span>
        <div className="flex items-center space-x-1">
          <button className="w-5 h-5 bg-gray-300 border-2 border-gray-400 text-black text-xs font-bold flex items-center justify-center">_</button>
          <button className="w-5 h-5 bg-gray-300 border-2 border-gray-400 text-black text-xs font-bold flex items-center justify-center">▫</button>
          <button onClick={() => onClose(id)} className="w-5 h-5 bg-red-500 border-2 border-red-600 text-white text-xs font-bold flex items-center justify-center">X</button>
        </div>
      </div>
      <div className="p-4 bg-[#1d0b4b]/90 text-[#00f5d4] text-lg leading-relaxed flex-grow backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
};
