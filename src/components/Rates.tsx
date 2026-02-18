import { FadeIn } from './ui/FadeIn';
import { Video, MonitorPlay, Share2, Sparkles } from 'lucide-react';

export function Rates() {
    return (
        <section id="rates" className="py-10 md:py-20 relative bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <p className="font-handwriting text-3xl md:text-4xl text-primary mb-2 font-bold !normal-case" style={{ fontFamily: '"Bradley Hand ITC", cursive' }}>
                            Proposed Plan for
                        </p>
                        <h2 className="text-5xl md:text-9xl font-anton text-primary uppercase">
                            B2B <span className="text-primary border-b-8 border-primary inline-block leading-[0.85] pb-1 md:pb-3">WORK</span><span className="text-accent">.</span>
                        </h2>
                    </FadeIn>
                </div>

                {/* Project Scope Card */}
                <FadeIn className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-16 relative overflow-hidden">
                    {/* Background Dot Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
                        style={{ backgroundImage: 'radial-gradient(#006400 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                    />

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-anton text-gray-900 mb-2 flex items-center gap-2 uppercase tracking-wide">
                            Project Scope:
                        </h3>
                        <p className="text-gray-600 mb-10 pl-8 font-light" style={{ fontFamily: '"Cascadia Mono", monospace' }}>
                            Ad campaign for corporate branding and digital presence.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-4 border-l-2 border-gray-100 ml-2">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-primary">
                                    <Video size={24} />
                                    <h4 className="text-2xl font-bold" style={{ fontFamily: '"Bradley Hand ITC", cursive' }}>Production</h4>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed font-light" style={{ fontFamily: '"Cascadia Mono", monospace' }}>
                                    On-site filming with professional cinema equipment.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-primary">
                                    <MonitorPlay size={24} />
                                    <h4 className="text-2xl font-bold" style={{ fontFamily: '"Bradley Hand ITC", cursive' }}>Post-Production</h4>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed font-light" style={{ fontFamily: '"Cascadia Mono", monospace' }}>
                                    Editing, color grading, and motion graphics.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-primary">
                                    <Share2 size={24} />
                                    <h4 className="text-2xl font-bold" style={{ fontFamily: '"Bradley Hand ITC", cursive' }}>Distribution</h4>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed font-light" style={{ fontFamily: '"Cascadia Mono", monospace' }}>
                                    Formats optimized for social media and web.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Rate Cards Container */}
                <div className="space-y-12">

                    {/* Card 1: Presentation Videos */}
                    <RateCard
                        number="1"
                        title="PRESENTATION VIDEOS"
                        standardRates={[
                            { range: "1-2 videos", price: "Rs. 3500/-" },
                            { range: "3-9 videos", price: "Rs. 3000/-" },
                            { range: "10+ videos", price: "Rs. 2800/-" }
                        ]}
                        b2bRates={[
                            { range: "1-2 videos", price: "Rs. 3000/-" },
                            { range: "3-9 videos", price: "Rs. 2800/-" },
                            { range: "10+ videos", price: "Rs. 2500/-" }
                        ]}
                    />

                    {/* Card 2: Creative Presentation Videos */}
                    <RateCard
                        number="2"
                        title="CREATIVE PRESENTATION VIDEOS"
                        standardRates={[
                            { range: "1-2 videos", price: "Rs. 4500/-" },
                            { range: "3-9 videos", price: "Rs. 4000/-" },
                            { range: "10+ videos", price: "Rs. 3800/-" }
                        ]}
                        b2bRates={[
                            { range: "1-2 videos", price: "Rs. 4000/-" },
                            { range: "3-9 videos", price: "Rs. 3800/-" },
                            { range: "10+ videos", price: "Rs. 3500/-" }
                        ]}
                    />

                </div>

                {/* Bottom Illustration Placeholder */}
                <div className="mt-20 flex flex-col items-center justify-center opacity-20">
                    <div className="flex items-end gap-8">
                        <div className="w-2 h-16 bg-primary rounded-full"></div>
                        <div className="w-2 h-24 bg-primary rounded-full"></div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 rounded-full border-4 border-primary"></div>
                            <div className="w-20 h-10 bg-primary rounded-t-lg"></div>
                        </div>
                        <div className="w-2 h-24 bg-accent rounded-full"></div>
                        <div className="w-2 h-12 bg-primary rounded-full"></div>
                    </div>
                    <div className="w-full max-w-6xl h-2 bg-primary rounded-full mt-6"></div>
                </div>

            </div>
        </section>
    );
}

function RateCard({ number, title, standardRates, b2bRates }: { number: string, title: string, standardRates: any[], b2bRates: any[] }) {
    return (
        <FadeIn className="rounded-2xl overflow-hidden shadow-lg bg-white">
            {/* Header */}
            <div className="bg-primary p-4 px-6 md:px-8 flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                    <span className="w-8 h-8 flex items-center justify-center bg-white text-primary font-bold rounded-full text-sm">
                        {number}
                    </span>
                    <h3 className="font-anton text-2xl md:text-3xl uppercase tracking-wide">{title}</h3>
                </div>
                <Sparkles size={18} className="opacity-50" />
            </div>

            {/* Body */}
            <div className="p-2 md:p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-50">
                {/* Left: Standard Rate */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 h-full relative">
                    <h4 className="flex items-center gap-2 text-primary font-bold text-2xl !normal-case mb-6 font-handwriting" style={{ fontFamily: '"Bradley Hand ITC", cursive' }}>
                        <span className="w-2 h-2 bg-primary rounded-full"></span> Standard Rate
                    </h4>

                    <div className="space-y-4">
                        {standardRates.map((rate, i) => (
                            <div key={i} className="flex justify-between items-center text-sm font-light" style={{ fontFamily: '"Cascadia Mono", monospace' }}>
                                <span className="text-gray-600 font-medium">{rate.range}</span>
                                <div className="text-right">
                                    <span className="block font-bold text-gray-900">{rate.price}</span>
                                    <span className="text-[10px] text-gray-400 block">+ Presenter charge</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: B2B Exclusive */}
                <div className="bg-white p-6 rounded-xl border-2 border-dotted border-accent/30 relative h-full">
                    {/* B2B Badge */}
                    <div className="absolute -top-4 left-6 bg-white px-2">
                        <span className="text-accent font-bold text-2xl !normal-case flex items-center gap-1 font-handwriting" style={{ fontFamily: '"Bradley Hand ITC", cursive' }}>
                            <span className="w-2 h-2 bg-accent rounded-full"></span> B2B Exclusive Rate
                        </span>
                    </div>

                    <div className="space-y-4 mt-2">
                        {b2bRates.map((rate, i) => (
                            <div key={i} className="flex justify-between items-center text-sm font-light" style={{ fontFamily: '"Cascadia Mono", monospace' }}>
                                <span className="text-gray-600 font-medium">{rate.range}</span>
                                <div className="text-right">
                                    <span className="block font-bold text-gray-900">{rate.price}</span>
                                    <span className="text-[10px] text-gray-400 block">+ Presenter charge</span>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </FadeIn>
    );
}
