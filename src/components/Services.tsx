import { Camera, Film, MonitorPlay, Palette, Video, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import mike from '../assets/images/mike.jpg';


const services = [
    {
        title: 'Photography',
        description: 'Corporate shoots, product photography, events, lifestyle, and branding. We capture high-quality visuals that reflect the essence of your brand and message.',
        icon: Camera,
    },
    {
        title: 'Videography',
        description: 'Commercials, documentaries, short films, social media videos, and event coverage. Our team produces visually captivating videos that engage your audience and enhance your brand presence.',
        icon: Film,
    },
    {
        title: 'Presentation Videos',
        description: 'Professionally crafted videos that visually communicate your ideas, pitches, or business proposals in a clear and engaging format ideal for internal use, client presentations, or investor decks.',
        icon: MonitorPlay,
    },
    {
        title: 'Creative Presentation Videos',
        description: 'Visually rich and conceptually unique videos designed to elevate your presentations with custom graphics, animations, and narrative flow tailored to your brand tone and audience.',
        icon: Palette,
    },
    {
        title: 'Creative Concept Videos',
        description: 'Short-form or long-form videos built around a distinct creative idea or theme, ideal for campaigns, launches, or brand storytelling that requires an emotional or thought provoking impact.',
        icon: Video,
    },
    {
        title: 'Post-Production',
        description: 'Editing, color grading, motion graphics, and sound design. We polish every project with expert precision, ensuring a refined final product ready for distribution across platforms.',
        icon: PenTool, // Using PenTool as a proxy for editing/tools
    },
    {
        title: 'Creative Direction',
        description: 'Concept development, scripting, and production planning. From the initial idea to the final execution, we provide strong creative guidance to shape your content strategically and visually.',
        icon: Palette,
    }
];

export function Services() {
    return (
        <section id="services" className="py-10 md:py-20 bg-gray-50 relative overflow-hidden">
            {/* Decorative Mike Image */}
            <motion.img
                src={mike}
                alt=""
                className="absolute top-12 -left-0 md:-left-1 w-32 md:w-64 opacity-80 rotate-12 pointer-events-none mix-blend-multiply"
                animate={{
                    y: [0, -20, 0],
                    rotate: [12, 10, 12]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-5xl md:text-9xl font-anton text-primary relative inline-block uppercase">
                            Our Service<span className="text-accent">.</span>
                            {/* Decorative film reel icon or similar could go here */}
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <FadeIn
                            key={service.title}
                            delay={index * 0.1}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-accent group h-full"
                        >
                            <div className="mb-4 text-primary group-hover:text-accent transition-colors">
                                <service.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3
                                className="text-3xl normal-case font-medium text-gray-900 mb-3 group-hover:text-primary transition-colors"
                                style={{ fontFamily: '"Bradley Hand ITC", "Bradley Hand", cursive' }}
                            >
                                {service.title} <span className="text-accent">–</span>
                            </h3>
                            <p
                                className="text-gray-600 leading-relaxed text-sm"
                                style={{ fontFamily: '"Cascadia Mono Light", "Cascadia Mono", monospace', fontWeight: 300 }}
                            >
                                {service.description}
                            </p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
