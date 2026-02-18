import { RetroTV } from './RetroTV';
import { FadeIn } from './ui/FadeIn';

export function About() {
    return (
        <section id="about" className="py-10 md:py-20 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <FadeIn direction="right">
                        <h2 className="text-4xl md:text-5xl font-anton text-primary mb-6 relative inline-block">
                            Who We Are
                            <span className="absolute -top-2 -right-4 text-accent text-6xl">.</span>
                        </h2>
                        <div className="pl-6 border-l-4 border-primary/20 space-y-4 text-gray-700 text-lg leading-relaxed font-medium" style={{ fontFamily: '"Cascadia Mono Light", monospace' }}>
                            <p>
                                At Noozi Production, we specialize in creating high-impact visual content tailored for advertising and brand storytelling. With a sharp focus on commercials and promotional media, our team brings together creativity, technical expertise, and strategic insight to deliver content that not only looks great but drives results.
                            </p>
                            <p>
                                Whether it's a sleek product ad, a brand film, or engaging social media content, Noozi Production is committed to turning your ideas into compelling visual narratives that resonate with your audience and elevate your brand.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left" delay={0.2} className="relative">
                        <div className="relative z-10">
                            <RetroTV />
                        </div>
                        {/* Decorative Yellow Box */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-accent -z-10 rotate-6 rounded-lg blur-sm opacity-80" />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
