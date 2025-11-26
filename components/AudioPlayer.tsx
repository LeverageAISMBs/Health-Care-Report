import React from 'react';
import { useAudioPlayer } from '../contexts/AudioPlayerContext';
import { Play, Pause, Square, RotateCcw, Rewind, FastForward, Loader2, AlertCircle, X } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const { isPlaying, isLoading, currentTitle, error, togglePlayPause, stop, seek, restart } = useAudioPlayer();

  if (error) {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-red-50 border-t border-red-200 p-4 z-50 animate-in slide-in-from-bottom duration-300">
             <div className="container mx-auto max-w-4xl flex items-center justify-between text-red-700">
                <div className="flex items-center gap-2">
                    <AlertCircle size={20} />
                    <span className="text-sm font-medium">{error}</span>
                </div>
                <button onClick={stop} className="p-1 hover:bg-red-100 rounded">
                    <X size={20} />
                </button>
             </div>
        </div>
    );
  }

  if (!currentTitle && !isLoading) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-4xl flex items-center justify-between gap-4">
        
        {/* Track Info */}
        <div className="flex-1 min-w-0">
            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Now Playing</p>
            <h3 className="text-slate-800 font-medium truncate">
                {isLoading ? 'Generating Audio...' : currentTitle}
            </h3>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
            {/* Restart */}
            <button 
                onClick={restart}
                className="p-2 text-slate-400 hover:text-sky-600 transition-colors hidden sm:block"
                title="Restart"
                disabled={isLoading}
            >
                <RotateCcw size={20} />
            </button>

            {/* Back 10s */}
            <button 
                onClick={() => seek(-10)}
                className="p-2 text-slate-500 hover:text-sky-600 transition-colors"
                title="Back 10s"
                disabled={isLoading}
            >
                <div className="relative">
                    <Rewind size={24} />
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[0.6rem] font-bold">10</span>
                </div>
            </button>

            {/* Play/Pause */}
            <button 
                onClick={togglePlayPause}
                disabled={isLoading}
                className="w-12 h-12 flex items-center justify-center bg-sky-600 text-white rounded-full hover:bg-sky-500 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <Loader2 size={24} className="animate-spin" />
                ) : isPlaying ? (
                    <Pause size={24} fill="currentColor" />
                ) : (
                    <Play size={24} fill="currentColor" className="ml-1" />
                )}
            </button>

            {/* Forward 30s */}
            <button 
                onClick={() => seek(30)}
                className="p-2 text-slate-500 hover:text-sky-600 transition-colors"
                title="Forward 30s"
                disabled={isLoading}
            >
                 <div className="relative">
                    <FastForward size={24} />
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[0.6rem] font-bold">30</span>
                </div>
            </button>
            
            {/* Stop */}
             <button 
                onClick={stop}
                className="p-2 text-slate-400 hover:text-red-500 transition-colors ml-2 hidden sm:block"
                title="Stop"
            >
                <Square size={20} fill="currentColor" />
            </button>
        </div>
      </div>
    </div>
  );
};