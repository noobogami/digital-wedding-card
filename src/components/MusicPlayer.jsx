import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';
import { weddingConfig } from '../config';

const MusicPlayer = ({ shouldPlay }) => {
  const { theme, music } = weddingConfig;
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = music.defaultVolume;
    }
  }, [music.defaultVolume]);

  useEffect(() => {
    if (shouldPlay && !hasAutoPlayed) {
      const playAudio = async () => {
        try {
          if (audioRef.current) {
            await audioRef.current.play();
            setIsPlaying(true);
          }
        } catch (error) {
          console.error('Music play error:', error.message);
          setIsPlaying(false);
        } finally {
          setHasAutoPlayed(true);
        }
      };

      const timer = setTimeout(playAudio, 500);
      return () => clearTimeout(timer);
    }
  }, [shouldPlay, hasAutoPlayed]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src={music.src} type="audio/mpeg" />
        مرورگر شما از پخش موسیقی پشتیبانی نمی‌کند.
      </audio>

      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={togglePlay}
        aria-label={isPlaying ? 'توقف موسیقی' : 'پخش موسیقی'}
        aria-pressed={isPlaying}
        className={`fixed bottom-6 left-6 z-50 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${theme.buttonGradient} text-white shadow-2xl transition-shadow ${
          isPlaying ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-transparent' : 'opacity-90 hover:opacity-100'
        }`}
      >
        <span className="flex h-6 w-6 items-center justify-center">
          {isPlaying ? (
            <FaPause className="text-xl" aria-hidden />
          ) : (
            <FaPlay className="text-xl translate-x-[1px]" aria-hidden />
          )}
        </span>
      </motion.button>
    </>
  );
};

export default MusicPlayer;
