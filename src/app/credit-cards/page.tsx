import React from "react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import { Link } from "react-router-dom";

export default function CreditCards() {
    const features = [
        {
            title: "Max Rewards",
            description: "Earn up to 10X reward points on dining, shopping, and travel spend.",
        },
        {
            title: "Lifetime Free Options",
            description: "Choose from a wide range of cards with zero annual or joining fees.",
        },
        {
            title: "Airport Lounge Access",
            description: "Complimentary domestic and international airport lounge access.",
        },
        {
            title: "Fuel Surcharge Waiver",
            description: "Save on fuel costs with 1% surcharge waiver across all petrol pumps.",
        },
        {
            title: "Contactless Payments",
            description: "Tap and pay securely with NFC enabled credit cards.",
        },
        {
            title: "EMI Conversion",
            description: "Convert big purchases into easy EMIs with low processing fees.",
        }
    ];

    return (
        <main>
            <PageHero
                title="Elevate Your"
                subtitle="Lifestyle"
                description="Discover credit cards that reward your spending. From luxury travel perks to everyday cashback, find the perfect card for your wallet."
                badge="Premium Card Selection"
                ctaText="Compare Cards"
                ctaLink="/compare-cards"
            />

            <FeatureGrid
                title="A Card for Every Need"
                subtitle="Whether you're a traveler, shopper, or diner, we have a card that maximizes your benefits."
                features={features}
            />

            {/* Popular Cards Section Mockup */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Top Picks for You</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="h-40 w-64 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl mb-6 shadow-lg flex items-center justify-center text-white font-mono text-sm relative overflow-hidden">
                                <div className="absolute top-4 left-4 font-bold text-lg">HDFC Regalia</div>
                                <div className="absolute opacity-20 text-6xl font-bold right-0 bottom-0">VISA</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">HDFC Regalia Gold</h3>
                            <p className="text-sm text-gray-500 mb-4">Best for Travel & Lifestyle</p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left w-full pl-4">
                                <li>• 4X Reward Points on Retail</li>
                                <li>• 12 Airport Lounge Access</li>
                                <li>• Complimentary Club Vistara Membership</li>
                            </ul>
                            <Link to="/apply" className="mt-auto w-full py-2.5 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                                Apply Now
                            </Link>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="h-40 w-64 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl mb-6 shadow-lg flex items-center justify-center text-white font-mono text-sm relative overflow-hidden">
                                <div className="absolute top-4 left-4 font-bold text-lg">SBI Elite</div>
                                <div className="absolute opacity-20 text-6xl font-bold right-0 bottom-0">VISA</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">SBI Card Elite</h3>
                            <p className="text-sm text-gray-500 mb-4">Premium Shopping Rewards</p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left w-full pl-4">
                                <li>• 5X Points on Dining & Movies</li>
                                <li>• Free Movie Tickets worth ₹6k/yr</li>
                                <li>• Low Forex Markup Fee</li>
                            </ul>
                            <Link to="/apply" className="mt-auto w-full py-2.5 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                                Apply Now
                            </Link>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="h-40 w-64 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl mb-6 shadow-lg flex items-center justify-center text-white font-mono text-sm relative overflow-hidden">
                                <div className="absolute top-4 left-4 font-bold text-lg">Axis ACE</div>
                                <div className="absolute opacity-20 text-6xl font-bold right-0 bottom-0">VISA</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Axis Bank ACE</h3>
                            <p className="text-sm text-gray-500 mb-4">Unlimited Cashback</p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left w-full pl-4">
                                <li>• 5% Cashback on Bill Payments</li>
                                <li>• 2% Cashback on All Spends</li>
                                <li>• 4 Lounge Visits per Year</li>
                            </ul>
                            <Link to="/apply" className="mt-auto w-full py-2.5 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                                Apply Now
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
