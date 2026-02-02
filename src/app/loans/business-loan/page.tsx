"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import GetQuoteForm from "@/components/shared/GetQuoteForm";

export default function BusinessLoan() {
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

    const openQuoteForm = () => setIsQuoteFormOpen(true);
    const closeQuoteForm = () => setIsQuoteFormOpen(false);

    const features = [
        {
            title: "Collateral-Free Loans",
            description: "Get unsecured business loans up to ₹75 Lakhs without pledging any assets.",
        },
        {
            title: "Quick Disbursal",
            description: "Funds credited to your account within 48 hours of approval.",
        },
        {
            title: "Minimal Paperwork",
            description: "Simple documentation process with GST and ITR based eligibility.",
        },
        {
            title: "Flexible Repayment",
            description: "Choose EMI options that suit your business cash flow.",
        },
        {
            title: "Overdraft Facility",
            description: "Pay interest only on the amount you utilize with our flexible OD limits.",
        },
        {
            title: "Business Expansion",
            description: "Use funds for inventory, machinery, working capital, or infrastructure.",
        }
    ];

    return (
        <main>
            <PageHero
                title="Scale Your Business"
                subtitle="Without Limits"
                description="Capital shouldn't be a constraint for growth. Get collateral-free business loans tailored for MSMEs and startups with flexible repayment options."
                badge="Trusted by 50K+ Founders"
                ctaText="Apply Now"
                onCtaClick={openQuoteForm}
            />

            <FeatureGrid
                title="Solutions for Every Business Need"
                subtitle="Whether you are a startup or an established enterprise, we have a loan for you."
                features={features}
            />

            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container-custom mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Documents Required</h2>
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="tex-lg font-semibold mb-4 text-gray-900">KYC Documents</h3>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li>• PAN Card of Business & Promoter</li>
                                    <li>• Aadhaar Card / Passport</li>
                                    <li>• Proof of Office Address</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="tex-lg font-semibold mb-4 text-gray-900">Financial Documents</h3>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li>• Last 2 Years ITR with Computation</li>
                                    <li>• Last 6 Months Bank Statement</li>
                                    <li>• GST Registration Certificate</li>
                                    <li>• Business Registration Proof</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <GetQuoteForm
                isOpen={isQuoteFormOpen}
                onClose={closeQuoteForm}
                initialSubject="Business Loan Application"
            />
        </main >
    );
}
