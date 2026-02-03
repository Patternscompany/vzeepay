import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetQuoteForm from "@/components/shared/GetQuoteForm";

export default function Services() {
    const [activeTab, setActiveTab] = useState("home-loan");
    const [quoteFormState, setQuoteFormState] = useState({ isOpen: false, subject: "" });

    const openQuoteForm = (subject: string) => {
        setQuoteFormState({ isOpen: true, subject });
    };

    const tabs = [
        { id: "home-loan", label: "Home Loan", icon: "🏠" },
        { id: "personal-loan", label: "Personal Loan", icon: "💰" },
        { id: "business-loan", label: "Business Loan", icon: "💼" },
    ];

    return (
        <section id="offerings" className="py-20 sm:py-24 bg-white">
            <GetQuoteForm
                isOpen={quoteFormState.isOpen}
                onClose={() => setQuoteFormState(prev => ({ ...prev, isOpen: false }))}
                initialSubject={quoteFormState.subject}
            />
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                        <span>360° Financial Ecosystem</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Wealth, Maximized</h2>
                    <p className="mt-4 text-lg text-gray-600">From loans to investments, we provide expert solutions tailored to your life goals.</p>
                </div>

                {/* Tabs */}
                <div className="mb-12 pb-4 -mx-4 sm:mx-0">
                    <div className="overflow-x-auto px-4 sm:px-0">
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 p-1 min-w-max snap-x snap-mandatory">
                            {tabs.map((tab) => {
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex snap-start items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ${activeTab === tab.id ? "bg-white shadow text-primary" : "text-gray-600 hover:text-gray-900"}`}
                                    >
                                        <span className="text-lg">{tab.icon}</span>
                                        <span className="whitespace-nowrap">{tab.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="min-h-[400px]">
                    {activeTab === "home-loan" && (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-500 justify-center">
                            <ServiceCard
                                title="Home Loans"
                                desc="Lowest rates starting @ 8.40% | Tenure up to 30 years"
                                href="/loans/home-loan"
                                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                            />
                            <ServiceCard
                                title="Loan Against Property"
                                desc="Unlock the value of your property with high-value loans"
                                href="/loans/loan-against-property"
                                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                            />
                            <ServiceCard
                                title="Balance Transfer"
                                desc="Transfer your home loan for lower interest rates"
                                href="/loans/balance-transfer"
                                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />}
                            />
                            <div className="col-span-full text-center mt-8">
                                <button
                                    onClick={() => openQuoteForm("Home Loan Application")}
                                    className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3 bg-primary text-white font-semibold hover:bg-primaryLight transition-colors"
                                >
                                    Apply for Home Loan
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "personal-loan" && (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 animate-in fade-in slide-in-from-bottom-4 duration-500 justify-center max-w-4xl mx-auto">
                            <ServiceCard
                                title="Personal Loans"
                                desc="Instant approval up to ₹50L | Money in bank in 24 hrs"
                                href="/loans/personal-loan"
                                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                            />
                            <div className="col-span-full text-center mt-8">
                                <button
                                    onClick={() => openQuoteForm("Personal Loan Application")}
                                    className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3 bg-primary text-white font-semibold hover:bg-primaryLight transition-colors"
                                >
                                    Apply for Personal Loan
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "business-loan" && (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 animate-in fade-in slide-in-from-bottom-4 duration-500 justify-center max-w-4xl mx-auto">
                            <ServiceCard
                                title="Business Loans"
                                desc="Collateral-free loans up to ₹5 Cr for your business growth"
                                href="/loans/business-loan"
                                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                            />
                            <div className="col-span-full text-center mt-8">
                                <button
                                    onClick={() => openQuoteForm("Business Loan Application")}
                                    className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3 bg-primary text-white font-semibold hover:bg-primaryLight transition-colors"
                                >
                                    Apply for Business Loan
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ title, desc, href, icon }: { title: string, desc: string, href: string, icon: React.ReactNode }) {
    return (
        <Link to={href} className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-transparent hover:border-gray-100">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {icon}
                </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="mb-4 text-sm text-gray-600">{desc}</p>
            <div className="flex items-center text-primary font-medium">
                Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
        </Link>
    )
}

function CardType({ title, desc, color }: { title: string, desc: string, color: string }) {
    return (
        <div className={`group cursor-pointer rounded-2xl bg-gradient-to-br ${color} p-8 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
            <h3 className="mb-2 text-2xl font-bold">{title}</h3>
            <p className="mb-4">{desc}</p>
            <div className="flex items-center text-white/90 font-medium">
                Explore cards <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
        </div>
    )
}

function FeatureBox({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="rounded-xl bg-gray-50 p-6">
            <h4 className="mb-2 font-semibold text-gray-900">{title}</h4>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    )
}
