"use client"
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import Link from 'next/link'

const videos = [
  {
    id: 1,
    title: "Auto Artist Defender",
    src: "/follow-us/Auto Artist Defender after video.mp4",
    thumbnail: "/follow-us/thumbnails/Auto-Artist-Defender.png"
  },
  {
    id: 2,
    title: "Auto Artist Elevate",
    src: "/follow-us/AUTO ARTIST ELEVATE.mp4",
    thumbnail: "/follow-us/thumbnails/Auto-Artist-Elevate.png"
  },
  {
    id: 3,
    title: "Auto Artist BMW",
    src: "/follow-us/Auto-Artist-BWM.mp4",
    thumbnail: "/follow-us/thumbnails/Auto-Artist-BWM.png"
  },
  {
    id: 4,
    title: "Auto Artist THAR ROXX",
    src: "/follow-us/Auto Artist THAR ROXX.mp4",
    thumbnail: "/follow-us/thumbnails/Auto-Artist-Thar-roxx.png"
  }
];

export default function FollowUs() {  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playing, setPlaying] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean[]>(Array(videos.length).fill(false));
  const [error, setError] = useState<boolean[]>(Array(videos.length).fill(false));

  const handleVideoClick = (index: number) => {
    if (error[index]) return; // Don't handle clicks on error state
    
    if (playing === index) {
      videoRefs.current[index]?.pause();
      setPlaying(null);
    } else {      if (playing !== null) {
        videoRefs.current[playing]?.pause();
      }
      setLoading(prev => {
        const newLoading = [...prev];
        newLoading[index] = true;
        return newLoading;
      });
      videoRefs.current[index]?.play()?.then(() => {
        setLoading(prev => {
          const newLoading = [...prev];
          newLoading[index] = false;
          return newLoading;
        });
        setPlaying(index);
      }).catch(err => {
        console.error('Error playing video:', err);
        setError(prev => {
          const newError = [...prev];
          newError[index] = true;
          return newError;
        });
        setLoading(prev => {
          const newLoading = [...prev];
          newLoading[index] = false;
          return newLoading;
        });
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
        >          <span className='text-white'>Follow </span>Us
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleVideoClick(index)}
            >              <video
                ref={(el) => { void (videoRefs.current[index] = el); }}
                src={video.src}
                className="w-full h-full object-cover"
                playsInline
                poster={video.thumbnail}                preload="metadata"
                onError={() => {
                  setError(prev => {
                    const newError = [...prev];
                    newError[index] = true;
                    return newError;
                  });
                  setLoading(prev => {
                    const newLoading = [...prev];
                    newLoading[index] = false;
                    return newLoading;
                  });
                }}
              />
              
              {/* Loading Spinner */}
              {loading[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="w-12 h-12 border-4 border-[#3af7f8] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {/* Error State */}
              {error[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="text-white text-center p-4">
                    <span className="text-4xl">⚠️</span>
                    <p className="mt-2">Video unavailable</p>
                  </div>
                </div>
              )}
              
              {/* Play/Pause Overlay */}
              {!loading[index] && !error[index] && (
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-20 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-[#3af7f8] bg-opacity-80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${playing === index ? 'scale-90' : 'scale-100'}`}>
                    {playing === index ? (
                      <span className="text-black text-2xl">⏸</span>
                    ) : (
                      <span className="text-black text-2xl ml-1">▶</span>
                    )}
                  </div>
                </div>
              )}

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-lg font-semibold">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
