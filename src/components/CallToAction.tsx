import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
    return (
        <section className="py-16 bg-primary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-5xl md:text-8xl font-anton mb-8 leading-tight">
                    LET'S CREATE <br />
                    <span className="text-accent">SOMETHING EPIC</span>
                </h2>

                <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-medium">
                    Ready to elevate your brand with cinematic visuals? Let's discuss your next project.
                </p>

                <Link
                    to="/contact"
                    className="inline-flex items-center gap-4 bg-white text-primary px-10 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all transform hover:scale-105 shadow-xl"
                >
                    Start a Project
                    <ArrowRight size={24} />
                </Link>
            </div>
        </section>
    );
}
