import React from "react";
import PageHero from "@/components/shared/PageHero";

export default function About() {
    return (
        <main>
            <PageHero
                title="Our Story"
                subtitle="About VZEEPAY"
                description="We are on a mission to democratize finance for every Indian. Simple, transparent, and technology-driven."
            />

            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/vzee/fj.png"
                                alt="Our Team"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                                <span>Who We Are</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Redefining Financial Access</h2>
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Founded in 2018, VZEEPAY began with a singular vision: to bridge the gap between complex financial institutions and the everyday Indian. We believed that getting a loan or investing should be as simple as ordering a pizza.
                                </p>
                                <p>
                                    Fast forward to today, we are India's fastest-growing fintech platform, trusted by 5 million+ customers. By leveraging AI and partnerships with 90+ top banks, we've removed the paperwork, the waiting, and the varying interest rates.
                                </p>
                                <p>
                                    Whether you're buying your first home or expanding your business, VZEEPAY is your unbiased partner in growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Core Values</h2>
                        <p className="text-gray-600">The principles that guide every decision we make.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Radical Transparency</h3>
                            <p className="text-gray-600">No fine print, no hidden clauses. We tell you exactly what you're signing up for, every single time.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Lightning Speed</h3>
                            <p className="text-gray-600">We respect your time. Our AI-driven systems process applications in minutes, so you don't wait for your dreams.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Unwavering Trust</h3>
                            <p className="text-gray-600">We use bank-grade security and ISO certified processes to ensure your data is always safe with us.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
