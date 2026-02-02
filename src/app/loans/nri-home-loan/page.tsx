"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import GetQuoteForm from "@/components/shared/GetQuoteForm";

export default function NRIHomeLoan() {
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

    const openQuoteForm = () => setIsQuoteFormOpen(true);
    const closeQuoteForm = () => setIsQuoteFormOpen(false);

    const features = [
        {
            title: "Doorstep Service abroad",
            description: "Service available in major cities worldwide.",
        },
        {
            title: "Power of Attorney",
            description: "Easy process through Power of Attorney holders in India.",
        },
        {
            title: "Attractive Rates",
            description: "Interest rates at par with resident Indian home loans.",
        }
    ];

    return (
        <main>
            <PageHero
                title="Build in India,"
                subtitle="From Abroad"
                description="Investing in your roots is now easier than ever. Specialized home loans for NRIs with complete digital processing and doorstep service in major global cities."
                badge="Global Assistance"
                ctaText="Apply Now"
                onCtaClick={openQuoteForm}
            />
            <FeatureGrid
                title="Simplified NRI Home Loans"
                features={features}
            />
            <GetQuoteForm
                isOpen={isQuoteFormOpen}
                onClose={closeQuoteForm}
                initialSubject="NRI Home Loan Application"
            />
        </main>
    );
}
