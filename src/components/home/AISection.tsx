import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function AISection() {
    const cardsData = [
        {
            title: "Personal Loan",
            desc: "Get instant funds for your personal needs with minimal documentation and quick approval.",
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            features: [
                "Instant Eligibility Check",
                "No Collateral Required",
                "Flexible Repayment Options",
                "Fast Disbursal"
            ],
            gradient: "from-primary to-secondary",
            link: "/loans/personal-loan"
        },
        {
            title: "Business Loan",
            desc: "Fuel your business growth with our tailored financial solutions designed for entrepreneurs.",
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            features: [
                "High Loan Amounts",
                "Quick Processing",
                "Competitive Interest Rates",
                "Minimal Paperwork"
            ],
            gradient: "from-secondary to-primary",
            link: "/loans/business-loan"
        },
        {
            title: "Home Loan",
            desc: "Affordable home financing options with flexible tenure and attractive rates.",
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V10.5z" />
                </svg>
            ),
            features: [
                "Low Interest Rates",
                "Flexible Tenure",
                "Balance Transfer Facility",
                "Dedicated Support"
            ],
            gradient: "from-amber-500 to-primary",
            link: "/loans/home-loan"
        },
        {
            title: "Loan Against Property",
            desc: "Leverage your property to access substantial funds for business or personal needs.",
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V4m0 0L8 8m4-4l4 4M6 20h12" />
                </svg>
            ),
            features: [
                "High Loan-to-Value",
                "Flexible Repayments",
                "Competitive Rates",
                "Long Tenure Options"
            ],
            gradient: "from-indigo-500 to-primary",
            link: "/loans/loan-against-property"
        },
        {
            title: "Balance Transfer",
            desc: "Transfer your outstanding balance and reduce EMI burden with lower rates.",
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4m0 0l6-6m-6 6l6 6" />
                </svg>
            ),
            features: [
                "Reduced EMI",
                "Quick Processing",
                "Transparent Charges",
                "Flexible Tenures"
            ],
            gradient: "from-emerald-500 to-primary",
            link: "/loans/balance-transfer"
        },
        {
            title: "Top-up Loan",
            desc: "Get additional funds on your existing loan with simplified processing.",
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            ),
            features: [
                "Quick Approval",
                "Minimal Documentation",
                "Affordable Rates",
                "Flexible Repayment"
            ],
            gradient: "from-purple-500 to-primary",
            link: "/loans/top-up-loan"
        },
        {
            title: "NRI Home Loans",
            desc: "Home loan solutions tailored for NRIs with easy documentation and support.",
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 8v4l2 2" />
                </svg>
            ),
            features: [
                "NRI-specific Documentation",
                "Competitive Rates",
                "Flexible Tenures",
                "International Support"
            ],
            gradient: "from-sky-500 to-primary",
            link: "/loans/nri-home-loan"
        },
        {
            title: "Vehicle Loan",
            desc: "Drive your dreams with easy vehicle loans for cars and two-wheelers.",
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l2-4h14l2 4M5 21h14a2 2 0 002-2v-3H3v3a2 2 0 002 2z" />
                </svg>
            ),
            features: [
                "Low Downpayment",
                "Quick Sanction",
                "Affordable EMIs",
                "Wide Network"
            ],
            gradient: "from-yellow-400 to-primary",
            link: "/loans/vehicle-loan"
        }
    ];

    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const slidesToShowRef = useRef(1);
    const autoplayRef = useRef<number | null>(null);

    useEffect(() => {
        const update = () => {
            const slides = window.matchMedia('(min-width: 1024px)').matches ? 2 : 1;
            slidesToShowRef.current = slides;
            setIndex(prev => {
                const maxIdx = Math.max(0, cardsData.length - slidesToShowRef.current);
                return Math.min(prev, maxIdx);
            });
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [cardsData.length]);

    // Autoplay effect — advances slides every 4s; paused on hover/focus
    useEffect(() => {
        if (isPaused) {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
                autoplayRef.current = null;
            }
            return;
        }

        if (autoplayRef.current) clearInterval(autoplayRef.current);
        autoplayRef.current = window.setInterval(() => {
            setIndex(i => {
                const max = Math.max(0, cardsData.length - slidesToShowRef.current);
                return i >= max ? 0 : i + 1;
            });
        }, 4000);

        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
                autoplayRef.current = null;
            }
        };
    }, [isPaused, cardsData.length]);

    const prev = () => setIndex(i => Math.max(0, i - 1));
    const next = () => setIndex(i => Math.min(i + 1, Math.max(0, cardsData.length - slidesToShowRef.current)));

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

                {/* Carousel slider with navigation */}
                <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocus={() => setIsPaused(true)} onBlur={() => setIsPaused(false)} tabIndex={0}>
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${index * (100 / Math.max(1, slidesToShowRef.current))}%)` }}
                        >
                            {cardsData.map((c, i) => (
                                <div key={i} className="flex-shrink-0 w-full lg:w-1/2 px-2">
                                    <AICard {...c} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <button aria-label="Previous" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100">
                        <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button aria-label="Next" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100">
                        <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="mt-6 flex items-center justify-center gap-2">
                        {Array.from({ length: Math.max(1, cardsData.length - slidesToShowRef.current + 1) }).map((_, p) => (
                            <button key={p} onClick={() => setIndex(p)} aria-label={`Go to slide ${p + 1}`} className={`h-2 w-8 rounded-full transition-colors ${index === p ? 'bg-primary' : 'bg-gray-200'}`}></button>
                        ))}
                    </div>
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
