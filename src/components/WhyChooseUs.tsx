import { FadeIn } from './ui/FadeIn';
import background from '../assets/images/background.png';

export function WhyChooseUs() {
    return (
        <section className="py-10 md:py-20 bg-white relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-accent/10 -skew-y-2 transform origin-top-left" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <FadeIn direction="right">
                        <h2 className="text-4xl md:text-5xl font-anton text-black mb-2">
                            Why
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-anton text-black mb-8 flex items-center gap-2">
                            Choose <span className="text-accent font-handwriting text-5xl md:text-6xl lowercase transform -rotate-6">Us?</span>
                        </h2>

                        <ul className="space-y-6" style={{ fontFamily: '"Cascadia Mono Light", monospace' }}>
                            {[
                                "Professional team with creative expertise.",
                                "Commitment to deadlines and client satisfaction.",
                                "High-quality equipment and production standards.",
                                "Tailored solutions for every budget."
                            ].map((reason, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="min-w-3 min-h-3 w-3 h-3 rounded-full bg-primary" />
                                    <span className="text-gray-700 font-medium">{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn
                        direction="left"
                        className="relative"
                    >
                        <div className="flex justify-center">
                            <img
                                src={background}
                                alt="Why Choose Us Illustration"
                                className="max-w-full h-auto object-cover"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
