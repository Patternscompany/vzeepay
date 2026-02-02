"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import GetQuoteForm from "@/components/shared/GetQuoteForm";

export default function BalanceTransfer() {
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

    const openQuoteForm = () => setIsQuoteFormOpen(true);
    const closeQuoteForm = () => setIsQuoteFormOpen(false);

    const features = [
        {
            title: "Reduce EMI",
            description: "Transfer your loan to a bank offering lower interest rates and reduce your monthly outgo.",
        },
        {
            title: "Top-up Loan",
            description: "Get additional funds as a top-up loan when you transfer your home loan.",
        },
        {
            title: "No Hidden Costs",
            description: "Transparent process with minimal processing fees for transfer.",
        }
    ];

    return (
        <main>
            <PageHero
                title="Transfer Loan,"
                subtitle="Reduce Burden"
                description="Stop paying high interest on your existing loans. Switch to VZEEPAY's partner banks and reduce your EMI burden by up to 25% instantly."
                badge="Zero Transfer Fee*"
                ctaText="Apply Now"
                onCtaClick={openQuoteForm}
            />
            <FeatureGrid
                title="Benefits of Balance Transfer"
                features={features}
            />
            <GetQuoteForm
                isOpen={isQuoteFormOpen}
                onClose={closeQuoteForm}
                initialSubject="Balance Transfer Application"
            />
        </main>
    );
}
