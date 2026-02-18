import { FadeIn } from './ui/FadeIn';
import haaziHaseeb from '../assets/images/haazi-haseeb.jpg';
import noorJaleela from '../assets/images/noor-jaleela.jpg';

export function FoundersNote() {
    return (
        <section className="py-10 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <FadeIn direction="up">
                    <h2 className="text-4xl md:text-5xl font-anton text-primary mb-12 relative inline-block">
                        Founders' Note
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent transform scale-x-50"></span>
                    </h2>

                    <div className="relative p-8 md:p-12 bg-white rounded-lg shadow-xl mb-8">
                        {/* Quote mark decoration */}
                        <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none">"</div>

                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic mb-10">
                            Building Noozi from the ground up has been a journey of passion and precision. We started with a simple belief: that every brand has a powerful story waiting to be told. Our mission is to uncover that story and bring it to life through visual excellence.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                            {/* Founder 1 */}
                            <div className="flex flex-col items-center">
                                <div className="w-72 h-96 rounded-2xl mb-6 overflow-hidden border-4 border-gray-100 shadow-xl">
                                    <img
                                        src={haaziHaseeb}
                                        alt="Haazi Haseeb"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-anton text-primary tracking-wide uppercase">Haazi Haseeb</h3>
                                <p className="text-sm font-bold text-accent uppercase tracking-widest mt-1">Co-Founder</p>
                            </div>

                            {/* Founder 2 */}
                            <div className="flex flex-col items-center">
                                <div className="w-72 h-96 rounded-2xl mb-6 overflow-hidden border-4 border-gray-100 shadow-xl">
                                    <img
                                        src={noorJaleela}
                                        alt="Noor Jaleela"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-anton text-primary tracking-wide uppercase">Noor Jaleela</h3>
                                <p className="text-sm font-bold text-accent uppercase tracking-widest mt-1">Co-Founder</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
