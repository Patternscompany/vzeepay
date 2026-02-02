"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import GetQuoteForm from "@/components/shared/GetQuoteForm";

export default function TopUpLoan() {
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

    const openQuoteForm = () => setIsQuoteFormOpen(true);
    const closeQuoteForm = () => setIsQuoteFormOpen(false);

    const features = [
        {
            title: "Instant Funds",
            description: "Get additional funds on your existing home loan quickly.",
        },
        {
            title: "Low Rates",
            description: "Interest rates similar to your existing home loan rates.",
        },
        {
            title: "No New Documentation",
            description: "Minimal to no additional documentation for existing customers.",
        }
    ];

    return (
        <main>
            <PageHero
                title="Top-Up Your"
                subtitle="Ambitions"
                description="Need extra funds? Get a top-up on your existing home loan at nominal rates. Perfect for renovations, furnishings, or any personal requirement."
                badge="Instant Approval"
                ctaText="Apply Now"
                onCtaClick={openQuoteForm}
            />
            <FeatureGrid
                title="Why Top-up Loan?"
                features={features}
            />
            <GetQuoteForm
                isOpen={isQuoteFormOpen}
                onClose={closeQuoteForm}
                initialSubject="Top-Up Loan Application"
            />
        </main>
    );
}
