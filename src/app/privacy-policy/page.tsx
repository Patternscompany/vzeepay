import React from "react";

export default function PrivacyPolicy() {
    return (
        <main className="pt-24 pb-16 bg-white">
            <div className="container-custom mx-auto max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>Last updated: January 01, 2025</p>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">1. Our Commitment to Privacy</h2>
                        <p>At VZEEPAY, trust is our currency. We are deeply committed to protecting your personal data and ensuring complete transparency in how we handle your information. This policy outlines our data practices and your privacy rights under the law.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">2. Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><strong>Identity Data:</strong> First name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> Billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Financial Data:</strong> Bank account, PAN card details, and payment card details.</li>
                            <li><strong>Transaction Data:</strong> Details about payments to and from you and other details of products and services you have purchased from us.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Security</h2>
                        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">5. Contact Details</h2>
                        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:privacy@vzeepay.com" className="text-primary hover:underline">privacy@vzeepay.com</a></p>
                    </section>
                </div>
            </div>
        </main>
    );
}
