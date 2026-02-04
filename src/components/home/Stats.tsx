import React from "react";

export default function Stats() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Powering India's Financial Ambitions</h2>
                </div>

                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 mb-16">
                    <StatItem value="4000+" label="Customers Empowered" />
                    <StatItem value="30+" label="Lending Networks" />
                    <StatItem value="₹1000cr+" label="Credit Enabled" />
                    <StatItem value="50+" label="Cities Active" />
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12"></div>

                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    <FeatureStat value="4.8/5" label="User Rating" />
                    <FeatureStat value="Always" label="Ready to Assist" />
                    <FeatureStat value="< 5 Min" label="Response Speed" />
                    <FeatureStat value="ISO" label="Certified Security" />
                </div>
            </div>
        </section>
    );
}

function StatItem({ value, label }: { value: string, label: string }) {
    return (
        <div className="text-center group">
            <div className="inline-flex items-baseline text-4xl sm:text-5xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                {value}
            </div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">{label}</div>
        </div>
    );
}

function FeatureStat({ value, label }: { value: string, label: string }) {
    return (
        <div className="relative group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">{value}</div>
            <div className="text-sm font-medium text-gray-600">{label}</div>
        </div>
    )
}
