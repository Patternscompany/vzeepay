import React from "react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CreditScoreSimulator from "@/components/credit-score/CreditScoreSimulator";

export default function CreditScore() {
    const features = [
        {
            title: "No Impact on Score",
            description: "Checking your own credit score with VZEEPAY is a soft inquiry and never hurts your score.",
        },
        {
            title: "Monthly Updates",
            description: "Get regular updates on your credit health and tips to improve it over time.",
        },
        {
            title: "Personalized Offers",
            description: "Receive loan and credit card offers tailored specifically to your credit profile.",
        },
    ];

    return (
        <main>
            {/* Custom Split Hero for Credit Score */}
            <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-32 lg:pb-24">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl text-center lg:text-left">
                            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                Powered by Equifax
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                                Master Your <span className="text-primary">Financial Health</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Your credit score is more than just a number. Get comprehensive insights, personalized tips, and instant access to your report—completely free.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4">
                                <ul className="space-y-2 text-left">
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        No impact on your score
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Detailed report analysis
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <CreditScoreSimulator />
                        </div>
                    </div>
                </div>
            </section>

            <FeatureGrid
                title="Why check your score with VZEEPAY?"
                subtitle="Your credit score is the key to your financial future. Monitor it regularly to stay ahead."
                features={features}
            />

            {/* FAQ Section specific to Credit Score could go here */}
            <section className="py-20 bg-white">
                <div className="container-custom mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">What is a good credit score?</h3>
                            <p className="text-gray-600">A score above 750 is generally considered excellent and can help you get faster loan approvals with lower interest rates.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">Does checking my score reduce it?</h3>
                            <p className="text-gray-600">No. Checking your own score via VZEEPAY is considered a "soft inquiry" and does not impact your credit score at all.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
