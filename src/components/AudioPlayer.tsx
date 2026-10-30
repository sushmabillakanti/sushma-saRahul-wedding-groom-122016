import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showPrompt, setShowPrompt] = useState<boolean>(true);

  const startAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.85;
    audio.muted = false;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
        })
        .catch(() => {
          // Autoplay blocked by browser until user touches or clicks the page
        });
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      startAudio();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  useEffect(() => {
    // 1. Attempt automatic immediate playback
    startAudio();

    // 2. Comprehensive global interaction listeners across window and document
    const events = ['click', 'touchstart', 'touchend', 'scroll', 'wheel', 'pointerdown', 'keydown'];

    const handleAnyGesture = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
          // Remove listeners once audio successfully starts playing
          events.forEach(evt => {
            window.removeEventListener(evt, handleAnyGesture, { capture: true });
            document.removeEventListener(evt, handleAnyGesture, { capture: true });
          });
        }).catch(() => {
          // Wait for next interaction
        });
      }
    };

    events.forEach(evt => {
      window.addEventListener(evt, handleAnyGesture, { capture: true, passive: true });
      document.addEventListener(evt, handleAnyGesture, { capture: true, passive: true });
    });

    const audio = audioRef.current;
    if (audio) {
      audio.onplay = () => {
        setIsPlaying(true);
        setShowPrompt(false);
      };
      audio.onpause = () => setIsPlaying(false);
    }

    return () => {
      events.forEach(evt => {
        window.removeEventListener(evt, handleAnyGesture, { capture: true });
        document.removeEventListener(evt, handleAnyGesture, { capture: true });
      });
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="./wedding-background-music.mp3"
        autoPlay
        loop
        preload="auto"
        playsInline
      >
        <source src="./wedding-background-music.mp3" type="audio/mpeg" />
        <source src="./assets/aistudio/AUD-20261028-WA0010_515583a7.mp3" type="audio/mpeg" />
      </audio>

      {/* Subtle top banner if browser blocked initial autoplay until first tap */}
      {!isPlaying && showPrompt && (
        <div
          onClick={startAudio}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#162E5B] via-[#AA771C] to-[#162E5B] text-[#FFF8E7] px-4 py-2 text-center text-xs font-royal tracking-wider shadow-lg cursor-pointer flex items-center justify-center gap-2 animate-pulse"
        >
          <Music className="w-3.5 h-3.5 text-[#F3E5AB]" />
          <span>Tap anywhere to start traditional wedding music 🪷</span>
        </div>
      )}

      {/* Floating elegant sound controller */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#0B192E]/95 backdrop-blur-md px-3.5 py-2.5 rounded-full border border-[#D4AF37]/60 shadow-2xl text-[#FFF8E7] transition-all hover:border-[#D4AF37]">
        <button
          onClick={togglePlay}
          className="flex items-center gap-2.5 text-xs font-medium tracking-wide hover:text-[#E8C86A] transition-colors focus:outline-none"
          title={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#162E5B] text-[#F3E5AB] border border-[#D4AF37]/40">
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5 translate-x-0.5" />
            )}
            {!isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
              </span>
            )}
          </span>
          <span className="font-royal tracking-widest text-[11px] uppercase text-[#F3E5AB]">
            {isPlaying ? 'Wedding Music Playing' : 'Play Music'}
          </span>
        </button>

        {isPlaying && (
          <div className="flex items-center gap-1.5 pl-2 border-l border-[#D4AF37]/30">
            {/* Animated sound wave bars */}
            <div className="flex items-end gap-0.5 h-4 w-5">
              <span className="w-1 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:0.1s] h-3"></span>
              <span className="w-1 bg-[#F3E5AB] rounded-full animate-bounce [animation-delay:0.3s] h-4"></span>
              <span className="w-1 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:0.2s] h-2"></span>
            </div>

            <button
              onClick={toggleMute}
              className="p-1 text-[#F3E5AB] hover:text-[#D4AF37] transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
