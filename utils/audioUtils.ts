
export function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export function pcmToAudioBuffer(
  pcmData: Uint8Array,
  audioCtx: AudioContext,
  sampleRate: number = 24000
): AudioBuffer {
  // Gemini 2.5 Flash TTS returns 16-bit PCM, single channel
  const dataInt16 = new Int16Array(pcmData.buffer);
  const numChannels = 1;
  const frameCount = dataInt16.length;
  
  const buffer = audioCtx.createBuffer(numChannels, frameCount, sampleRate);
  const channelData = buffer.getChannelData(0);
  
  for (let i = 0; i < frameCount; i++) {
    // Normalize Int16 to Float32 [-1.0, 1.0]
    channelData[i] = dataInt16[i] / 32768.0;
  }
  
  return buffer;
}
