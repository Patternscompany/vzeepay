import React from "react";
import { Link } from "react-router-dom";

export default function VZEEOpportunityIndex() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white -z-10" />
                <div className="container-custom relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            Proprietary Evaluation Model
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                            VZEE Opportunity <span className="text-primary">Index</span>
                        </h1>
                        <p className="text-lg leading-8 text-gray-600 mb-10">
                            Unlock your true borrowing potential with our advanced behavioral analytics engine. We look beyond just credit scores to understand your complete financial unique profile.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <Link
                                to="/credit-score"
                                className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
                            >
                                Check Your Score
                            </Link>
                            <Link
                                to="/contact"
                                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all duration-200"
                            >
                                Contact Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dynamic 0-100 Potential Rating</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Unlike static credit scores, our index updates in real-time based on your financial behavior, giving you a dynamic score that truly reflects your current borrowing power.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-dimensional Readiness Check</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We analyze over 50+ parameters including income stability, spending patterns, and savings growth to provide a comprehensive readiness assessment for your loan application.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Priority Queue for High-intent Profiles</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Applicants with a high Opportunity Index are automatically fast-tracked to our premium lending partners, significantly reducing processing times.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Eligibility Assessment</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get immediate feedback on your loan eligibility across multiple lenders without affecting your credit score, thanks to our soft-inquiry technology.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-12 text-center text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>

                        <h2 className="text-3xl font-bold mb-6 relative z-10">Ready to Discover Your Potential?</h2>
                        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 relative z-10">
                            Start your journey today and see how VZEE Opportunity Index can help you secure the best loan rates.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors relative z-10"
                        >
                            Get Started Now
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
