import React from "react";
import PageHero from "@/components/shared/PageHero";

export default function Contact() {
    return (
        <main>
            <PageHero
                title="We are here to"
                subtitle="Help"
                description="Have questions? Our support team is available 24/7 to assist you with your financial journey."
                badge="24/7 Support"
                ctaText="Call Us" // Slightly different CTA
                ctaLink="tel:+91xxxxxxxxxx"
            />

            <section className="py-20 bg-white">
                <div className="container-custom mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-gray-900">Let's Start a Conversation</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Support</h3>
                                        <p className="text-gray-600 mb-2">We typically reply within 2 hours</p>
                                        <a href="mailto:info@vzeepay.com" className="text-primary font-medium hover:underline">info@vzeepay.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Talk to Us</h3>
                                        <p className="text-gray-600 mb-2">Expert assistance, Mon - Sat (9 AM - 7 PM)</p>
                                        <a href="tel:+91xxxxxxxxxx" className="text-primary font-medium hover:underline">+91 xxxxxxxxxx</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                                        <p className="text-gray-600">
                                            Hyderabad
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a message</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                    <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"></textarea>
                                </div>
                                <button type="button" className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primaryLight transition-colors">Sumit Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
