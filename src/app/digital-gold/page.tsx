import React from "react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";

export default function DigitalGold() {
    const features = [
        {
            title: "24K / 99.9% Pure",
            description: "Buy certified 24 karat gold with 99.9% purity from MMTC-PAMP.",
        },
        {
            title: "Start with ₹1",
            description: "You don't need thousands. Start your gold savings journey with just ₹1.",
        },
        {
            title: "Secure Storage",
            description: "Your gold is stored securely in insured vaults with IDBI Trusteeship.",
        },
        {
            title: "Easy Sell",
            description: "Sell your gold anytime at live market rates and get instant bank credit.",
        },
        {
            title: "Convert to Physical",
            description: "Redeem your digital gold for physical coins or bars delivered to your doorstep.",
        },
        {
            title: "No Making Charges",
            description: "Buy gold at live rates without paying for making charges or wastage.",
        }
    ];

    return (
        <main>
            <PageHero
                title="The Modern Standard"
                subtitle="For Gold"
                description="Secure your future with 24K 99.9% pure gold. Buy, sell, or redeem anytime, anywhere. Wealth creation made timeless."
                badge="Live Rate: ₹6,540/gm"
                ctaText="Start Investing"
                ctaLink="/invest/gold"
            />

            <FeatureGrid
                title="Gold for the Digital Age"
                subtitle="Experience the safety of physical gold with the convenience of digital assets."
                features={features}
            />

            <section className="py-20 bg-yellow-50 border-t border-yellow-100">
                <div className="container-custom mx-auto text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">The VZEEPAY Gold Promise</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-yellow-100">
                            <div className="h-12 w-12 mx-auto bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4 font-bold text-xl">1</div>
                            <h3 className="text-lg font-semibold mb-2">Purchase</h3>
                            <p className="text-sm text-gray-600">Invest any amount starting ₹1. Live market rates, zero hidden commissions.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-yellow-100">
                            <div className="h-12 w-12 mx-auto bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4 font-bold text-xl">2</div>
                            <h3 className="text-lg font-semibold mb-2">Preserve</h3>
                            <p className="text-sm text-gray-600">We store your gold in Brinks-secured, fully insured vaults at no extra cost.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-yellow-100">
                            <div className="h-12 w-12 mx-auto bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4 font-bold text-xl">3</div>
                            <h3 className="text-lg font-semibold mb-2">Prosper</h3>
                            <p className="text-sm text-gray-600">Sell instantly to bank or convert to minted coins delivered to you.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
