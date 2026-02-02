"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import GetQuoteForm from "@/components/shared/GetQuoteForm";

export default function HomeLoan() {
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

    const openQuoteForm = () => setIsQuoteFormOpen(true);
    const closeQuoteForm = () => setIsQuoteFormOpen(false);

    const features = [
        {
            title: "Lowest Interest Rates",
            description: "Home loans starting at just 8.35% p.a. from top banks in India.",
        },
        {
            title: "High Eligibility",
            description: "Get up to 90% of the property value as loan amount.",
        },
        {
            title: "Longer Tenure",
            description: "Repayment tenure up to 30 years to keep your EMIs comfortable.",
        },
        {
            title: "Tax Benefits",
            description: "Save tax under Section 80C and 24(b) of the Income Tax Act.",
        },
        {
            title: "Doorstep Service",
            description: "Complete assistance from application to disbursement at your doorstep.",
        },
        {
            title: "Balance Transfer",
            description: "Transfer your existing home loan to us for lower interest rates.",
        }
    ];

    return (
        <main>
            <PageHero
                title="Your Dream Home"
                subtitle="Expertly Financed"
                description="Why settle for one bank? We compare 40+ lenders to get you the lowest interest rates, highest eligibility, and fastest approval for your home loan."
                badge="Lowest Rates Guaranteed"
                ctaText="Apply Now"
                onCtaClick={openQuoteForm}
            />

            <FeatureGrid
                title="The VZEEPAY Advantage"
                subtitle="We don't just find you a loan; we find you the perfect loan partner."
                features={features}
            />

            <section className="py-20 bg-gray-50">
                <div className="container-custom mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Interest Rates from Top Partners</h2>
                    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
                        <table className="w-full bg-white text-left text-sm text-gray-600">
                            <thead className="bg-gray-100 text-xs uppercase font-semibold text-gray-700">
                                <tr>
                                    <th className="px-6 py-4">Bank/NBFC</th>
                                    <th className="px-6 py-4">Interest Rate</th>
                                    <th className="px-6 py-4">Processing Fee</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">HDFC Bank</td>
                                    <td className="px-6 py-4">8.35% - 9.15%</td>
                                    <td className="px-6 py-4">Up to 0.50%</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">SBI</td>
                                    <td className="px-6 py-4">8.40% - 9.05%</td>
                                    <td className="px-6 py-4">Nil - 0.35%</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">ICICI Bank</td>
                                    <td className="px-6 py-4">8.75% Onwards</td>
                                    <td className="px-6 py-4">0.50% - 1.00%</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Kotak Mahindra</td>
                                    <td className="px-6 py-4">8.70% Onwards</td>
                                    <td className="px-6 py-4">0.50% + GST</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-center mt-4 text-gray-500">*Interest rates are subject to change and depend on credit profile.</p>
                </div>
            </section>
            <GetQuoteForm
                isOpen={isQuoteFormOpen}
                onClose={closeQuoteForm}
                initialSubject="Home Loan Application"
            />
        </main>
    );
}
