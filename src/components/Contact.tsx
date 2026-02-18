import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-primary relative text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#FFD700 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-anton mb-6">
                            Let's Create Something <br />
                            <span className="text-accent">Amazing Together.</span>
                        </h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Ready to start your project? Get in touch with us for a consultation or quote.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                                    <Mail />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 uppercase tracking-wider">Email Us</h4>
                                    <a href="mailto:nooziproductions@gmail.com" className="text-xl font-medium">nooziproductions@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                                    <Phone />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 uppercase tracking-wider">Call Us</h4>
                                    <a href="tel:9495885051" className="text-xl font-medium">949 588 5651</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 uppercase tracking-wider">Visit Us</h4>
                                    <p className="text-xl font-medium">Palazhi</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 text-gray-900"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Project details" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-green-800 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
