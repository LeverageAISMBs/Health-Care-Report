import React from 'react';
import { Play, Loader2 } from 'lucide-react';
import { useAudioPlayer } from '../../contexts/AudioPlayerContext';

interface PlayButtonProps {
    textToSpeak: string;
    title: string;
    className?: string;
    variant?: 'icon' | 'label';
}

export const PlayButton: React.FC<PlayButtonProps> = ({ textToSpeak, title, className = '', variant = 'icon' }) => {
    const { playText, isLoading, currentTitle } = useAudioPlayer();
    
    // Simple check if this specific item is playing/loading could be expanded with IDs
    // For now we just check if global loading
    const isThisLoading = isLoading && currentTitle === title;

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        playText(textToSpeak, title);
    };

    if (variant === 'label') {
        return (
            <button 
                onClick={handleClick}
                disabled={isLoading}
                className={`flex items-center space-x-2 bg-sky-100 hover:bg-sky-200 text-sky-800 px-4 py-2 rounded-full transition-colors font-medium text-sm ${className}`}
            >
                {isThisLoading ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} fill="currentColor" />}
                <span>Listen to {title}</span>
            </button>
        );
    }

    return (
        <button
            onClick={handleClick}
            disabled={isLoading}
            className={`w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-sky-500 hover:text-white text-sky-600 rounded-full shadow-md flex items-center justify-center transition-all transform hover:scale-110 z-10 ${className}`}
            title={`Listen to ${title}`}
        >
             {isThisLoading ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} fill="currentColor" className="ml-1" />}
        </button>
    );
};
