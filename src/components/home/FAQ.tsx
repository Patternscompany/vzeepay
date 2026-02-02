"use client";

import React, { useState } from "react";

export default function FAQ() {
    const faqs = [
        {
            question: "Is the Credit Score provided accurate?",
            answer: "Absolutely. We partner directly with Equifax, one of India's four authorized credit bureaus. The score you see on VZEEPAY is the same score banks use to evaluate your loan applications. We update it monthly to reflect your latest financial activity."
        },
        {
            question: "How do you match me with the right bank?",
            answer: "Our advanced algorithm analyzes your profile against the eligibility criteria of over 90+ banks and NBFCs. We verify your income, credit score, and existing obligations to recommend lenders where your approval chances are highest."
        },
        {
            question: "Is digital gold a safe investment?",
            answer: "Yes, digital gold is a secure investment. Each unit of digital gold is backed by 24K physical gold of 99.9% purity (BIS standard), stored in secure vaults approved by the Bullion Association. The gold is fully insured and regularly audited by independent agencies."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="py-20 sm:py-24 bg-gray-50">
            <div className="container-custom">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                        <span>Help & Support</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="divide-y divide-gray-200 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-200">
                        {faqs.map((faq, index) => (
                            <div key={index} className="group">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="flex w-full items-center justify-between py-6 px-6 text-left transition-all hover:bg-gray-50 rounded-xl"
                                >
                                    <span className="flex items-center gap-6">
                                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                                    </span>
                                    <span className={`ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="pb-6 pl-20 pr-8 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
