import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import { Link } from "react-router-dom";
import GetQuoteForm from "@/components/shared/GetQuoteForm";

export default function PersonalLoan() {
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

    const openQuoteForm = () => setIsQuoteFormOpen(true);
    const closeQuoteForm = () => setIsQuoteFormOpen(false);

    const features = [
        {
            title: "Instant Approval",
            description: "Get approved in as little as 2 minutes with our digital-first application process.",
        },
        {
            title: "Lowest Interest Rates",
            description: "Rates starting from 10.49% p.a. tailored to your credit profile.",
        },
        {
            title: "Flexible Tenure",
            description: "Choose repayment options from 12 to 60 months as per your convenience.",
        },
        {
            title: "Minimal Documentation",
            description: "100% paperless process. Just upload your KYC and income documents.",
        },
        {
            title: "High Loan Amount",
            description: "Get loans up to ₹50 Lakhs for any personal need - travel, medical, or wedding.",
        },
        {
            title: "No Hidden Charges",
            description: "Transparent processing fees and zero prepayment penalty options available.",
        }
    ];

    return (
        <main>
            <PageHero
                title="Instant Funds for"
                subtitle="Life's Moments"
                description="Whether it's a dream wedding, medical emergency, or a luxury vacation. Get up to ₹50 Lakhs credited to your account in as little as 24 hours."
                badge="Paperless Approval"
                ctaText="Apply Now"
                onCtaClick={openQuoteForm}
            />

            <FeatureGrid
                title="Why VZEEPAY for Personal Loans?"
                subtitle="We partner with 30+ banks and NBFCs to bring you the best offers."
                features={features}
            />

            {/* Eligibility Section (Simple text for now) */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container-custom mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Eligibility Criteria</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-2xl bg-gray-50">
                            <h3 className="text-xl font-semibold mb-4 text-primary">Salaried Individuals</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>• Age: 21 - 60 years</li>
                                <li>• Income: Min ₹20,000/month</li>
                                <li>• Work Exp: Min 1 year</li>
                                <li>• CIBIL Score: 700+ preferred</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-50">
                            <h3 className="text-xl font-semibold mb-4 text-primary">Self-Employed</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>• Age: 21 - 65 years</li>
                                <li>• Turnover: Min ₹40 Lakhs/year</li>
                                <li>• Business Vintage: Min 2 years</li>
                                <li>• CIBIL Score: 700+ preferred</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <GetQuoteForm
                isOpen={isQuoteFormOpen}
                onClose={closeQuoteForm}
                initialSubject="Personal Loan Application"
            />
        </main >
    );
}
