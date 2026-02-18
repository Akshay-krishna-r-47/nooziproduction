import { FadeIn } from './ui/FadeIn';
import camera from '../assets/images/camera.jpg';
import film from '../assets/images/film.png';

export function CreatorsNote() {
    return (
        <section className="py-10 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <FadeIn
                        className="order-2 md:order-1 relative max-w-xs mx-auto w-full"
                        direction="right"
                    >
                        <div className="relative z-10 p-2 border-2 border-primary rounded-lg rotate-2 shadow-xl bg-white">
                            <div className="aspect-[4/5] bg-white rounded overflow-hidden flex items-center justify-center p-4">
                                <img
                                    src={camera}
                                    alt="Creative Vision"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        {/* Abstract background element */}
                        <div className="absolute top-10 -left-10 w-full h-full bg-accent/20 -z-10 rounded-lg -rotate-3"></div>
                    </FadeIn>

                    <FadeIn
                        className="order-1 md:order-2 relative"
                        direction="left"
                        delay={0.2}
                    >
                        <img
                            src={film}
                            alt=""
                            className="absolute -top-24 -right-40 w-40 md:w-56 opacity-80 rotate-12 pointer-events-none"
                        />
                        <h2 className="text-4xl md:text-5xl font-anton text-primary mb-6">
                            Creator's Vision
                        </h2>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium" style={{ fontFamily: '"Cascadia Mono Light", monospace' }}>
                            <p>
                                Creativity isn't just about making things look good—it's about making them feel right. Our creative process is deeply collaborative, blending artistic intuition with market strategy.
                            </p>
                            <p>
                                We believe in the power of "motion" to evoke emotion. Every frame, every cut, and every color grade is a deliberate choice made to serve the narrative. We don't just capture moments; we craft experiences that leave a lasting impression.
                            </p>


                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
