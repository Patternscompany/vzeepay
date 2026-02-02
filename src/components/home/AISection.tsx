import React from "react";
import { Link } from "react-router-dom";

export default function AISection() {
    return (
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-amber-50/50 via-white to-purple-50/30 relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500/10 to-primary/10 px-5 py-2.5 text-sm font-semibold text-amber-700 border border-amber-200/50 mb-8">
                        <span>Financial Solutions</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                        <span className="block">Comprehensive Loan Solutions</span>
                        <span className="relative mt-2 block bg-gradient-to-r from-primary via-secondary to-amber-500 bg-clip-text text-transparent">Tailored for You</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                        Whether you need funds for personal goals or business expansion, we have the right financial products to support your journey.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <AICard
                        title="Personal Loan"
                        desc="Get instant funds for your personal needs with minimal documentation and quick approval."
                        icon={
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        }
                        features={[
                            "Instant Eligibility Check",
                            "No Collateral Required",
                            "Flexible Repayment Options",
                            "Fast Disbursal"
                        ]}

                        gradient="from-primary to-secondary"
                        link="/loans/personal-loan"
                    />
                    <AICard
                        title="Business Loan"
                        desc="Fuel your business growth with our tailored financial solutions designed for entrepreneurs."
                        icon={
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        }
                        features={[
                            "High Loan Amounts",
                            "Quick Processing",
                            "Competitive Interest Rates",
                            "Minimal Paperwork"
                        ]}

                        gradient="from-secondary to-primary"
                        link="/loans/business-loan"
                    />
                </div>

                {/* <div className="mt-16 text-center">
                    <Link href="https://partners.vzeepay.com" className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white">
                        Join Partner Platform
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div> */}
            </div>
        </section>
    );
}

function AICard({ title, desc, icon, features, gradient, link }: { title: string, desc: string, icon: React.ReactNode, features: string[], gradient: string, link: string }) {
    return (
        <div className="group relative h-full">
            <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30`}></div>
            <div className="relative h-full rounded-3xl bg-white p-8 sm:p-10 shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                <div className="absolute top-8 right-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1 text-xs font-bold text-white shadow-md">NEW</span>
                </div>
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white transition-all duration-300 group-hover:scale-110`}>
                    {icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h3>
                <p className="mb-6 text-base leading-7 text-gray-600">{desc}</p>
                <ul className="space-y-3 mb-8">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="w-full">
                    <Link to={link} className={`flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${gradient} px-6 py-3.5 text-base font-semibold text-white transition-all hover:shadow-lg`}>
                        Explore {title}
                    </Link>
                </div>
            </div>
        </div>
    )
}
