import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Play, X } from 'lucide-react';
import { useState } from 'react';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';
import video5 from '../assets/videos/video5.mp4';
import video6 from '../assets/videos/video6.mp4';
import video7 from '../assets/videos/video7.mp4';
import video8 from '../assets/videos/video8.mp4';
import video9 from '../assets/videos/video9.mp4';
import video10 from '../assets/videos/video10.mp4';

const works = [
    { id: 1, title: 'Ramba Ho 💃🏻 Episode 02', category: 'Web Series', thumbnail: 'bg-gray-800', videoUrl: video1 },
    { id: 2, title: 'Ramba Ho 💃🏻 Episode 01', category: 'Web Series', thumbnail: 'bg-gray-700', videoUrl: video2 },
    { id: 3, title: 'Production No:01', category: 'Short Film', thumbnail: 'bg-gray-600', videoUrl: video3 },
    { id: 4, title: 'Episode 5: The Gang 🥷🏻', category: 'Web Series', thumbnail: 'bg-gray-500', videoUrl: video4 },
    { id: 5, title: 'Episode 4: The Under World', category: 'Web Series', thumbnail: 'bg-gray-400', videoUrl: video5 },
    { id: 6, title: 'Episode 3: Why did they do that.? !!', category: 'Web Series', thumbnail: 'bg-gray-300', videoUrl: video6 },
    { id: 7, title: 'Episode 2: Thaha’s First Day!', category: 'Web Series', thumbnail: 'bg-gray-800', videoUrl: video7, description: "What happened to him?" },
    { id: 8, title: 'Episode 1: Thaha has gone missing.', category: 'Web Series', thumbnail: 'bg-gray-700', videoUrl: video8, description: "What will they do now? Wait for the TADA moment." },
    { id: 9, title: 'Mission Noor Part 2', category: 'Short Film', thumbnail: 'bg-gray-600', videoUrl: video9 },
    { id: 10, title: 'Mission Noor Part 1', category: 'Short Film', thumbnail: 'bg-gray-500', videoUrl: video10 },
];

export function Works() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen text-black pt-10 pb-10 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h1
                            className="text-5xl md:text-8xl font-anton text-black mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Our Works<span className="text-accent">.</span>
                        </motion.h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-xl md:text-2xl" style={{ fontFamily: '"Bradley Hand ITC", cursive' }}>
                            A curated selection of our recent projects, showcasing our passion for visual storytelling.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {works.map((work, index) => (
                            <motion.div
                                key={work.id}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                                onClick={() => work.videoUrl && setSelectedVideo(work.videoUrl)}
                            >
                                {/* Thumbnail / Video Preview - Aspect Video Wrapper */}
                                <div className="aspect-video relative overflow-hidden">
                                    {work.videoUrl ? (
                                        <video
                                            src={work.videoUrl}
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                            muted
                                            loop
                                            playsInline
                                            onMouseOver={(e) => e.currentTarget.play()}
                                            onMouseOut={(e) => {
                                                e.currentTarget.pause();
                                                e.currentTarget.currentTime = 0;
                                            }}
                                        />
                                    ) : (
                                        <div className={`w-full h-full ${work.thumbnail.replace('bg-gray-', 'bg-neutral-')} bg-gray-200 group-hover:scale-105 transition-transform duration-500`} />
                                    )}

                                    {/* Play Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-lg">
                                            <Play fill="black" className="text-black ml-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Below Image */}
                                <div className="p-6">
                                    <h3 className="text-xl font-anton uppercase tracking-wide text-gray-900 group-hover:text-primary transition-colors">{work.title}</h3>
                                    <p className="text-accent text-sm font-medium mt-1">{work.category}</p>
                                    {(work as any).description && (
                                        <p className="text-gray-500 text-sm mt-2 font-light leading-relaxed">
                                            {(work as any).description}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Video Modal */}
                <AnimatePresence>
                    {selectedVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <button
                                className="absolute top-8 right-8 text-white hover:text-accent transition-colors"
                                onClick={() => setSelectedVideo(null)}
                            >
                                <X size={40} />
                            </button>
                            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                                <video
                                    src={selectedVideo}
                                    className="w-full h-full object-contain"
                                    controls
                                    autoPlay
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Layout>
    );
}
