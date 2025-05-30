"use client"
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import Link from 'next/link'

const videos = [
  {
    id: 1,
    title: "Auto Artist Defender",
    src: encodeURI("/follow-us/Auto Artist Defender after video.mp4"),
    type: "video/mp4"
  },
  {
    id: 2,
    title: "Auto Artist Elevate",
    src: encodeURI("/follow-us/AUTO ARTIST ELEVATE.mp4"),
    type: "video/mp4"
  },
  {
    id: 3,
    title: "Auto Artist BMW",
    src: encodeURI("/follow-us/Auto-Artist-BWM.mp4"),
    type: "video/mp4"
  },
  {
    id: 4,
    title: "Auto Artist Safari",
    src: encodeURI("/follow-us/AUTO ARTIST SAFARI.mp4"),
    type: "video/mp4"
  },
  {
    id: 5,
    title: "Auto Artist THAR ROXX",
    src: encodeURI("/follow-us/Auto Artist THAR ROXX.mp4"),
    type: "video/mp4"
  }
];

export default function FollowUs() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playing, setPlaying] = useState<number | null>(null);
  const [loadingStates, setLoadingStates] = useState<boolean[]>(Array(videos.length).fill(false));
  const handleVideoClick = async (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    try {
      // If the same video is clicked while playing, pause it
      if (playing === index) {
        video.pause();
        setPlaying(null);
        return;
      }

      // Show loading state for clicked video
      setLoadingStates(prev => {
        const newStates = [...prev];
        newStates[index] = true;
        return newStates;
      });

      // Pause any currently playing video
      if (playing !== null && videoRefs.current[playing]) {
        const currentVideo = videoRefs.current[playing];
        currentVideo.pause();
        setPlaying(null);
      }

      // Reset the video if it ended
      if (video.ended) {
        video.currentTime = 0;
      }

      // Ensure video is ready to play
      video.muted = true; // Always start muted to ensure playback
      
      const playVideo = async () => {
        try {
          console.log('Attempting to play video:', video.src);
          await video.play();
          console.log('Video playing successfully');
          setPlaying(index);
        } catch (playError) {
          console.error('Play error:', playError);
          throw playError;
        }
      };

      if (video.readyState >= 3) {
        await playVideo();
      } else {
        video.load();
        await new Promise((resolve, reject) => {
          video.oncanplay = () => resolve(true);
          video.onerror = (e) => reject(new Error(`Video load error: ${e}`));
          video.onloadeddata = () => console.log('Video data loaded');
        });
        await playVideo();
      }

      // Update states after successful play
      setPlaying(index);
      setLoadingStates(prev => {
        const newStates = [...prev];
        newStates[index] = false;
        return newStates;
      });} catch (error) {
      console.error('Video handling error:', error);
    } finally {
      setLoadingStates(prev => {
        const newStates = [...prev];
        newStates[index] = false;
        return newStates;
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className='text-white'>Follow </span>Us
        </motion.h2>

        <div className="flex justify-center items-center mb-12">
          <Link 
            href="https://www.instagram.com/auto_artist_7/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
            <span>Follow us on Instagram</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative aspect-video rounded-lg overflow-hidden bg-black/50 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleVideoClick(index)}
            >              <video
                ref={(el: HTMLVideoElement | null): void => { videoRefs.current[index] = el }}
                className="w-full h-full object-cover"
                playsInline
                preload="auto"
                controls={false}
                muted
                loop
                src={video.src}
                onError={(e) => {
                  console.error('Video error:', e);
                  setLoadingStates(prev => {
                    const newStates = [...prev];
                    newStates[index] = false;
                    return newStates;
                  });
                }}
              /><div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity">
                {loadingStates[index] ? (
                  <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                    <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                ) : playing === index ? (
                  <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-semibold text-lg">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
