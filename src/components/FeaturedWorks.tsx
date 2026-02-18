import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const works = [
    {
        id: 1,
        title: "Neon Nights",
        category: "Commercial",
        color: "bg-purple-900"
    },
    {
        id: 2,
        title: "Urban Rhythm",
        category: "Music Video",
        color: "bg-blue-900"
    },
    {
        id: 3,
        title: "Taste of Nature",
        category: "Brand Film",
        color: "bg-green-900"
    }
];

export function FeaturedWorks() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <FadeIn direction="up">
                            <h2 className="text-4xl md:text-6xl font-anton text-primary mb-4">
                                Selected Works
                            </h2>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.1}>
                            <p className="text-gray-600 max-w-md text-lg">
                                A curated selection of our recent projects that define our visual style.
                            </p>
                        </FadeIn>
                    </div>
                    <Link
                        to="/works"
                        className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest mt-6 md:mt-0 hover:text-accent transition-colors"
                    >
                        View All Works
                        <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <FadeIn
                            key={work.id}
                            delay={index * 0.1}
                            className="group relative cursor-pointer"
                        >
                            <div className={`aspect-video md:aspect-[4/5] ${work.color} rounded-lg overflow-hidden relative shadow-lg`}>
                                {/* Placeholder for Project Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-anton text-4xl group-hover:scale-105 transition-transform duration-700">
                                    {work.title}
                                </div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                            </div>

                            <div className="mt-6 flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-anton text-primary group-hover:text-accent transition-colors">
                                        {work.title}
                                    </h3>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">
                                        {work.category}
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-accent group-hover:text-accent transition-all">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
