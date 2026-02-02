import React from "react";
import { Link } from "react-router-dom";

export default function Comparison() {
    return (
        <section className="py-20 sm:py-24 bg-white border-t border-gray-100">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                        <span>The VZEEPAY Advantage</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How We Stack Up</h2>
                </div>

                <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-1">
                    <div className="overflow-x-auto rounded-xl bg-white">
                        <table className="w-full min-w-[600px]">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-900">Features</th>
                                    <th className="px-6 py-5 text-center">
                                        <div className="text-lg font-bold text-primary">VZEEPAY</div>
                                    </th>
                                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-600">Traditional Banks</th>
                                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-600">Other Aggregators</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-sm">
                                <Row feature="Network Scale" mk="100+ Lending Networks" trad="Limited Options" other="~50 Partners" highlightMk />
                                <Row feature="Speed to Cash" mk="Money in Minutes" trad="Weeks of Wait" other="2-3 Days" highlightMk />
                                <Row feature="Rate Advantage" mk="Lowest Possible Rates" trad="Standard Rates" other="Variable Rates" highlightMk />
                                <Row feature="Process" mk="100% Paperless" trad="Heavy Documentation" other="Semi-Digital" highlightMk />
                                <Row feature="Assistance" mk="Always-On Support" trad="Banking Hours Only" other="Limited Hours" highlightMk />
                                <Row feature="Hidden Costs" mk="Zero Surprise Fees" trad="Processing Charges" other="Hidden Markups" highlightMk />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Row({ feature, mk, trad, other, highlightMk }: { feature: string, mk: string, trad: string, other: string, highlightMk?: boolean }) {
    return (
        <tr className="group hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
            <td className="px-6 py-4 text-center">
                <span className={`inline-flex items-center gap-2 font-semibold ${highlightMk ? 'text-primary' : 'text-gray-900'}`}>
                    {mk}
                    {highlightMk && (
                        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    )}
                </span>
            </td>
            <td className="px-6 py-4 text-center text-gray-600">{trad}</td>
            <td className="px-6 py-4 text-center text-gray-600">{other}</td>
        </tr>
    )
}
