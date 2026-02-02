import React from "react";
import { Link } from "react-router-dom";

export default function LoanMatchEngine() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-amber-50 to-white -z-10" />
                <div className="container-custom relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            Advanced Matching Algorithm
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                            LoanMatch <span className="text-primary">Engine</span>
                        </h1>
                        <p className="text-lg leading-8 text-gray-600 mb-10">
                            Align your unique profile with specific lender criteria for higher approval odds. Our intelligent engine finds the perfect financial partner for your needs.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <Link
                                to="/loans"
                                className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
                            >
                                Find Your Match
                            </Link>
                            <Link
                                to="/contact"
                                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all duration-200"
                            >
                                Talk to Advisor
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
                            <div className="h-12 w-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Employment & Credit Calibration</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We calibrate your employment history and credit mix against lender policies to ensure you apply only where you have the highest chance of success.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Policy-level Lender Compatibility</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our engine tracks hundreds of policy parameters from banks and NBFCs, matching you with lenders whose internal policies align perfectly with your profile.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">3-Tier Approval Probability</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get a clear view of your approval odds categorized into High, Medium, and Low probability tiers, empowering you to make informed application decisions.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="h-12 w-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Policy Updates</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Stay ahead of the curve with real-time updates on interest rate changes and policy shifts, ensuring your application strategy is always current.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="bg-gradient-to-r from-secondary to-blue-600 rounded-3xl p-12 text-center text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>

                        <h2 className="text-3xl font-bold mb-6 relative z-10">Find Your Perfect Lending Partner</h2>
                        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 relative z-10">
                            Let our LoanMatch Engine do the heavy lifting. Get matched with lenders who are looking for borrowers just like you.
                        </p>
                        <Link
                            to="/loans"
                            className="inline-flex items-center gap-2 bg-white text-secondary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors relative z-10"
                        >
                            Start Matching
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
