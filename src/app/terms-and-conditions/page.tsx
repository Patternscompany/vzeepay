import React from "react";

export default function TermsAndConditions() {
    return (
        <main className="pt-24 pb-16 bg-white">
            <div className="container-custom mx-auto max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>Last updated: January 01, 2025</p>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                        <p>These Terms and Conditions constitute a legally binding agreement between you and VZEEPAY. By accessing our platform, you agree to abide by these terms, which govern your use of our innovative financial services.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">2. User Representations</h2>
                        <p>By using the Site, you represent and warrant that:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
                            <li>You serve not a minor in the jurisdiction in which you reside.</li>
                            <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">3. Financial Services Disclaimer</h2>
                        <p>VZEEPAY is a financial services aggregator and not a lender. All loan products and credit facilities are provided by third-party banks and NBFCs. Approval of any loan or credit facility is at the sole discretion of the lending partner.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">4. Intellectual Property Rights</h2>
                        <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">5. Limitations of Liability</h2>
                        <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
