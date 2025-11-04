import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaMusic } from 'react-icons/fa';

const MusicPlayer = ({ shouldPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef(null);

  // Play music when envelope opens
  useEffect(() => {
    if (shouldPlay && !isPlaying) {
      const playAudio = async () => {
        console.log('🎵 Attempting to play music...');
        console.log('Audio element:', audioRef.current);
        console.log('Audio src:', audioRef.current?.src);
        
        try {
          if (audioRef.current) {
            // Check if audio file is loaded
            console.log('Audio ready state:', audioRef.current.readyState);
            
            audioRef.current.volume = volume;
            await audioRef.current.play();
            
            console.log('✅ Music playing successfully!');
            setIsPlaying(true);
            setShowPlayer(true);
          }
        } catch (error) {
          console.error('❌ Music play error:', error);
          console.error('Error name:', error.name);
          console.error('Error message:', error.message);
          setIsPlaying(false);
          setShowPlayer(true); // Show player so user can manually play
        }
      };

      // Small delay to let the envelope animation start
      const timer = setTimeout(playAudio, 500);
      return () => clearTimeout(timer);
    }
  }, [shouldPlay, volume, isPlaying]);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error('Error playing audio:', error);
        }
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  return (
    <>
      {/* Audio element - PLACEHOLDER: Replace with your actual music file */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* 
          PLACEHOLDER: Add your music file here
          Example: <source src="/music/background-music.mp3" type="audio/mpeg" />
          
          For now, using a placeholder. You can:
          1. Add your music file to the public/music/ directory
          2. Update the src attribute below
          3. Or use a URL to a hosted music file
        */}
        <source src="/music/background-music.mp3?v=2" type="audio/mpeg" />
        مرورگر شما از پخش موسیقی پشتیبانی نمی‌کند.
      </audio>

      {/* Floating Music Player */}
      <AnimatePresence>
        {showPlayer && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 left-6 z-50"
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-4 min-w-[280px]">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                  >
                    <FaMusic className="text-purple-500 text-xl" />
                  </motion.div>
                  <span className="text-sm font-semibold text-gray-700 font-vazir">
                    موسیقی مراسم
                  </span>
                </div>
                <button
                  onClick={() => setShowPlayer(false)}
                  className="text-gray-400 hover:text-gray-600 text-sm"
                >
                  ✕
                </button>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                {/* Play/Pause Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  {isPlaying ? (
                    <FaPause className="text-xl" />
                  ) : (
                    <FaPlay className="text-xl mr-0.5" />
                  )}
                </motion.button>

                {/* Volume Control */}
                <div className="flex items-center gap-2 flex-1">
                  <button
                    onClick={toggleMute}
                    className="text-gray-600 hover:text-purple-500 transition-colors"
                  >
                    {isMuted || volume === 0 ? (
                      <FaVolumeMute className="text-lg" />
                    ) : (
                      <FaVolumeUp className="text-lg" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
              </div>

              {/* Visual indicator */}
              {isPlaying && (
                <div className="flex gap-1 justify-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
                      animate={{
                        height: ["10px", "25px", "10px"],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show button if player is hidden */}
      {!showPlayer && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowPlayer(true)}
          className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-2xl"
        >
          <FaMusic className="text-2xl" />
        </motion.button>
      )}
    </>
  );
};

export default MusicPlayer;

