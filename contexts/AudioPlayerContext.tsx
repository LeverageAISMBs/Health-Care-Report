import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { AudioPlayerContextType } from '../types';
import { GoogleGenAI, Modality } from "@google/genai";
import { base64ToUint8Array, pcmToAudioBuffer } from '../utils/audioUtils';

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTitle, setCurrentTitle] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Refs for Web Audio API
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedAtRef = useRef<number>(0);

  // Initialize AudioContext lazily or on mount
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const getAudioContext = async () => {
    if (!audioContextRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        audioContextRef.current = new AudioContextClass({ sampleRate: 24000 });
      }
    }
    
    // Critical: Resume context if suspended (browser autoplay policy)
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume();
    }
    
    return audioContextRef.current;
  };

  const playBuffer = (offset: number = 0) => {
    const ctx = audioContextRef.current;
    if (!ctx || !audioBufferRef.current) return;

    // Disconnect old source
    if (sourceNodeRef.current) {
      try {
        sourceNodeRef.current.stop();
        sourceNodeRef.current.disconnect();
      } catch (e) {
        // Ignore if already stopped
      }
    }

    const source = ctx.createBufferSource();
    source.buffer = audioBufferRef.current;
    source.connect(ctx.destination);
    
    source.onended = () => {
      // Natural end logic could go here
    };

    source.start(0, offset);
    sourceNodeRef.current = source;
    startTimeRef.current = ctx.currentTime - offset;
    setIsPlaying(true);
  };

  const playText = async (text: string, title: string = 'Audio Report') => {
    try {
      stop(); // Reset current playback
      setError(null);
      setIsLoading(true);
      setCurrentTitle(title);

      // Initialize/Resume Audio Context *before* network request to satisfy user interaction requirements
      const ctx = await getAudioContext();
      if (!ctx) throw new Error("Audio Context not supported in this browser");

      if (!process.env.API_KEY) {
        throw new Error("API Key is missing. Please configuration your environment.");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: { parts: [{ text }] },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      
      if (!base64Audio) {
        throw new Error("Model generated no audio content.");
      }

      const pcmData = base64ToUint8Array(base64Audio);
      const buffer = pcmToAudioBuffer(pcmData, ctx, 24000);
      
      audioBufferRef.current = buffer;
      pausedAtRef.current = 0;
      playBuffer(0);
      
    } catch (err: any) {
      console.error("TTS Error:", err);
      setError(err.message || "Failed to generate audio");
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePlayPause = async () => {
    const ctx = await getAudioContext();
    if (!ctx) return;

    if (isPlaying) {
      // Pause
      if (sourceNodeRef.current) {
        try {
            sourceNodeRef.current.stop();
        } catch (e) {}
        pausedAtRef.current = ctx.currentTime - startTimeRef.current;
      }
      setIsPlaying(false);
    } else {
      // Resume
      playBuffer(pausedAtRef.current);
    }
  };

  const stop = () => {
    if (sourceNodeRef.current) {
      try {
        sourceNodeRef.current.stop();
      } catch(e) {}
      sourceNodeRef.current = null;
    }
    setIsPlaying(false);
    pausedAtRef.current = 0;
    // Don't clear title/error here so UI persists until new play
  };

  const seek = (seconds: number) => {
    if (!audioContextRef.current || !audioBufferRef.current) return;
    
    // Calculate current position
    let currentPos = 0;
    if (isPlaying) {
        currentPos = audioContextRef.current.currentTime - startTimeRef.current;
    } else {
        currentPos = pausedAtRef.current;
    }

    let newPos = currentPos + seconds;
    
    // Clamp
    if (newPos < 0) newPos = 0;
    if (newPos > audioBufferRef.current.duration) newPos = audioBufferRef.current.duration;

    pausedAtRef.current = newPos;

    if (isPlaying) {
        playBuffer(newPos);
    }
  };

  const restart = () => {
    pausedAtRef.current = 0;
    if (isPlaying) {
      playBuffer(0);
    }
  };

  return (
    <AudioPlayerContext.Provider value={{
      isPlaying,
      isLoading,
      currentTitle,
      error,
      playText,
      togglePlayPause,
      stop,
      seek,
      restart
    }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};