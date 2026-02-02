import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetQuoteForm from "@/components/shared/GetQuoteForm";

export default function Hero() {
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

    return (
        <>
            <GetQuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
            <section id="home" className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white pt-20 sm:pt-24 lg:pt-20 pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-grid-gray-100 bg-[size:20px_20px] opacity-50"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                                <span className="flex items-center gap-1">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    Empowering 5 Million+ Financial Journeys
                                </span>
                            </div>

                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                                <span className="block">Smart Financial</span>
                                <span className="relative mt-2 block">
                                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Decisions Start Here</span>
                                    <svg className="absolute left-0 -bottom-2 w-full opacity-30 text-primary" height="8" viewBox="0 0 250 8" preserveAspectRatio="none">
                                        <path d="M0,4 Q62.5,0 125,4 T250,4" stroke="currentColor" strokeWidth="3" fill="none" />
                                    </svg>
                                </span>
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
                                Compare and apply for the best loans, credit cards, and investment options from India's top banks. Zero hidden fees, paperless approval, and expert guidance at every step.
                            </p>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center lg:justify-start">
                                <button
                                    onClick={() => setIsQuoteFormOpen(true)}
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primaryLight hover:shadow-xl active:scale-95"
                                >
                                    Get A Quote
                                    <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                                <a
                                    href="tel:+916303261137"
                                    className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-300 rounded-full hover:border-gray-400 hover:text-gray-900"
                                >
                                    Call Now +91 6303261137
                                    <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="relative lg:pl-8">
                            <div className="relative mx-auto max-w-lg lg:max-w-none">
                                {/* Blobs */}
                                <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>

                                <img
                                    src="/vzee/credit-scor.jpg"
                                    alt="VZEEPay Financial Services"
                                    width={700}
                                    height={600}
                                    className="relative rounded-2xl shadow-xl w-full h-auto z-10"
                                />

                                {/* Floating Card 1 */}
                                <div className="absolute -right-4 top-12 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                                    <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Instant Approval</div>
                                        <div className="text-xs text-gray-500">Get approved in minutes</div>
                                    </div>
                                </div>

                                {/* Floating Card 2 */}
                                <div className="absolute -left-4 bottom-12 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">100% Secure</div>
                                        <div className="text-xs text-gray-500">Bank-level encryption</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
