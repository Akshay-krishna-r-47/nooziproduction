import { Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-primary text-white py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    <div>
                        <h3 className="text-2xl font-anton mb-4">Noozi Production</h3>
                        <p className="text-gray-300 max-w-xs">
                            Turning your ideas into compelling visual narratives that resonate with your audience.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-accent uppercase">Contact</h4>
                        <div className="space-y-2">
                            <a href="mailto:nooziproductions@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                                <Mail size={18} />
                                nooziproductions@gmail.com
                            </a>
                            <a href="tel:9495885051" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                                <Phone size={18} />
                                949 588 5651
                            </a>
                            <p className="text-gray-300 pl-7">Address: Palazhi</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-accent uppercase">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/noozi.production" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-all">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Noozi Production. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
