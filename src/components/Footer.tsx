import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const footerLinks = [
        {
            title: "Products",
            links: [
                { name: "Home Loans", href: "/loans/home-loan" },
                { name: "Personal Loans", href: "/loans/personal-loan" },
                { name: "Business Loans", href: "/loans/business-loan" },
                { name: "Vehicle Loan", href: "/loans/vehicle-loan" },
                { name: "Loan Against Property", href: "/loans/loan-against-property" },
                { name: "Balance Transfer", href: "/loans/home-loan-balance-transfer" },
            ],
        },
        {
            title: "Tools & Resources",
            links: [
                { name: "EMI Calculator", href: "/calculators/home-loan-emi-calculator" },
                { name: "Blog", href: "/blog" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Careers", href: "/careers" },
            ],
        },
        {
            title: "Support & Legal",
            links: [
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms and Conditions", href: "/terms-and-conditions" },
            ],
        },
    ];

    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
            <div className="container-custom">
                <div className="mb-12 lg:mb-16">
                    <div className="max-w-md">
                        <Link to="/" className="inline-block">
                            <img
                                src={`${import.meta.env.BASE_URL}images/logo2.png`}
                                alt="VZEEPAY Logo"
                                width={260}
                                height={65}
                                className="h-14 w-auto"
                            />
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed text-gray-500">
                            Your trusted partner for smarter financial decisions. Compare loans and make informed choices.
                        </p>
                        <div className="mt-6 space-y-3">
                            <a href="mailto:info@vzeepay.com" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@vzeepay.com
                            </a>
                            <a href="tel:+91xxxxxxxxxx" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +91 xxxxxxxxxx
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-sm text-gray-600 hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © VZEEPAY 2025 - All rights reserved <span className="mx-2">|</span> design by <a href="https://thepatternscompany.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">The Patterns Company</a>
                    </p>
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/vzeepay" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-500 hover:text-primary transition-colors">
                            <i className="ri-facebook-fill"></i>
                        </a>
                        <a href="https://www.instagram.com/vzeepay" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-500 hover:text-primary transition-colors">
                            <i className="ri-instagram-fill"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/vzeepay" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-500 hover:text-primary transition-colors">
                            <i className="ri-linkedin-fill"></i>
                        </a>
                        <a href="https://twitter.com/vzeepay" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-500 hover:text-primary transition-colors">
                            <i className="ri-twitter-fill"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
