"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import GetQuoteForm from "@/components/shared/GetQuoteForm";

export default function LoanAgainstProperty() {
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

    const openQuoteForm = () => setIsQuoteFormOpen(true);
    const closeQuoteForm = () => setIsQuoteFormOpen(false);

    const features = [
        {
            title: "Unlock Value",
            description: "Get loans up to 60-70% of your property's market value.",
        },
        {
            title: "Lower Interest Rates",
            description: "Rates lower than personal loans, starting at just 9.5% p.a.",
        },
        {
            title: "Flexible Usage",
            description: "Use funds for business, education, wedding, or medical emergencies.",
        },
        {
            title: "Longer Tenure",
            description: "Repay comfortably over a tenure of up to 15 years.",
        }
    ];

    return (
        <main>
            <PageHero
                title="Turn Your Property"
                subtitle="Into Capital"
                description="Unlock the hidden value of your residential or commercial property. Get high-value loans at interest rates significantly lower than personal loans."
                badge="Max Value Unlock"
                ctaText="Apply Now"
                onCtaClick={openQuoteForm}
            />
            <FeatureGrid
                title="Why Choose Loan Against Property?"
                features={features}
            />
            <GetQuoteForm
                isOpen={isQuoteFormOpen}
                onClose={closeQuoteForm}
                initialSubject="Loan Against Property Application"
            />
        </main>
    );
}
