"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import GetQuoteForm from "@/components/shared/GetQuoteForm";

export default function VehicleLoan() {
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

    const openQuoteForm = () => setIsQuoteFormOpen(true);
    const closeQuoteForm = () => setIsQuoteFormOpen(false);

    const features = [
        {
            title: "Quick Approval",
            description: "Get your vehicle loan approved in 30 minutes with minimal documentation.",
        },
        {
            title: "Up to 100% On-Road Funding",
            description: "Finance up to 100% of the on-road price for select car and bike models.",
        },
        {
            title: "Flexible Tenure",
            description: "Choose a repayment period ranging from 12 to 84 months for cars and up to 60 months for bikes.",
        },
        {
            title: "Attractive Interest Rates",
            description: "Competative interest rates starting from 8.75% p.a. for new cars.",
        },
        {
            title: "Used Car Loans",
            description: "Get loans for purchasing pre-owned cars with easy transfer of ownership.",
        },
        {
            title: "Simplified Documentation",
            description: "Paperless process with instant digital verification.",
        }
    ];

    return (
        <main>
            <PageHero
                title="Drive Your Dream"
                subtitle="Vehicle"
                description="Whether it's a superbike or a family sedan, we help you get on the road faster with our quick and easy vehicle loans."
                badge="100% On-Road Funding*"
                ctaText="Apply Now"
                onCtaClick={openQuoteForm}
            />

            <FeatureGrid
                title="Ride Your Dream Vehicle Today"
                features={features}
            />

            <section className="py-20 bg-gray-50">
                <div className="container-custom mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Eligibility Criteria</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-2xl bg-white shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-primary">Salaried Individuals</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>• Age: 21 - 60 years</li>
                                <li>• Income: Min ₹15,000/month</li>
                                <li>• Work Exp: Min 1 year</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-white shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-primary">Self-Employed</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>• Age: 21 - 65 years</li>
                                <li>• Income: Min ₹2.5 Lakhs ITR</li>
                                <li>• Business Vintage: Min 2 years</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <GetQuoteForm
                isOpen={isQuoteFormOpen}
                onClose={closeQuoteForm}
                initialSubject="Vehicle Loan Application"
            />
        </main>
    );
}
