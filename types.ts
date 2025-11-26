import React from 'react';

export enum ViewState {
  SUMMARY = 'SUMMARY',
  FULL_REPORT = 'FULL_REPORT'
}

export interface RankingData {
  r: number;
  c: string; // Country
  s: number; // Score
  l: number; // Life Expectancy
  w: string; // Wait Time
  e: string; // Efficiency
  m: string; // Model
}

export interface EfficiencyPoint {
  country: string;
  expenditure: number; // x
  outcome: number; // y
  population: number; // z (size)
}

export interface WaitTimeData {
  country: string;
  days: number;
}

export interface SatisfactionData {
  metric: string;
  switzerland: number;
  uk: number;
  singapore: number;
}

export interface ImmigrationData {
  year: string;
  migrationIndex: number;
  policyStrength: number;
}

export interface NavProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export interface ReportSection {
  id: string;
  title: string;
  excerpt: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  speechContent: string; // Plain text for TTS
}

export interface AudioPlayerContextType {
  isPlaying: boolean;
  isLoading: boolean;
  currentTitle: string | null;
  error: string | null;
  playText: (text: string, title?: string) => Promise<void>;
  togglePlayPause: () => void;
  stop: () => void;
  seek: (seconds: number) => void; // + or - seconds
  restart: () => void;
}