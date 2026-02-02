import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileDropdown = (section: string) => {
        setActiveMobileDropdown(activeMobileDropdown === section ? null : section);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Loans", href: "/loans", hasDropdown: true },
        { name: "EMI Calculator", href: "/calculators/home-loan-emi-calculator" },
        { name: "Legal Services", href: "/legal-services" },
        { name: "Charter Values", href: "/charter-values" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },

    ];

    return (
        <>
            <header className={`fixed inset-x-0 z-[100] w-full transition-all duration-200 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-md" : "bg-white"} border-b border-gray-200`}>
                <nav className="container-custom flex items-center justify-between py-4 relative z-[100]">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        {/* Using the text logo approach if image doesn't match perfectly, or keeping image if it is the full logo */}
                        <img
                            src={`${import.meta.env.BASE_URL}images/logo2.png`}
                            alt="VZEEPAY Logo"
                            width={280}
                            height={70}
                            className="h-12 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-5">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.hasDropdown ? (
                                    <button
                                        className={`text-base font-medium transition-colors hover:text-primary ${pathname.startsWith(link.href) ? "text-primary" : "text-gray-700"
                                            } flex items-center gap-1 focus:outline-none`}
                                    >
                                        {link.name}
                                        <svg
                                            className="w-4 h-4 transition-transform group-hover:rotate-180 text-gray-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className={`text-base font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-gray-700"
                                            } flex items-center gap-1`}
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {/* Dropdown for Loans */}
                                {link.hasDropdown && (
                                    <div className="absolute left-0 top-full mt-4 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-xl rounded-xl p-6 border border-gray-100">
                                        <div className="grid grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-4">Home Loans</h3>
                                                <ul className="space-y-3 text-sm text-gray-600">
                                                    <li><Link to="/loans/home-loan" className="hover:text-primary transition-colors block">Best Home Loan Rates</Link></li>
                                                    <li><Link to="/loans/loan-against-property" className="hover:text-primary transition-colors block">Loan Against Property</Link></li>
                                                    <li><Link to="/loans/balance-transfer" className="hover:text-primary transition-colors block">Balance Transfer</Link></li>
                                                    <li><Link to="/loans/top-up-loan" className="hover:text-primary transition-colors block">Top-up Loan</Link></li>
                                                    <li><Link to="/loans/nri-home-loan" className="hover:text-primary transition-colors block">NRI Home Loans</Link></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-4">Other Loans</h3>
                                                <ul className="space-y-3 text-sm text-gray-600">
                                                    <li><Link to="/loans/personal-loan" className="hover:text-primary transition-colors block">Personal Loan</Link></li>
                                                    <li><Link to="/loans/business-loan" className="hover:text-primary transition-colors block">Business Loan</Link></li>
                                                    <li><Link to="/loans/vehicle-loan" className="hover:text-primary transition-colors block">Vehicle Loan</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <div className="hidden lg:block">
                        <Link
                            to="/contact"
                            className="group relative inline-flex items-center justify-center px-8 py-2.5 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primaryLight hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] active:scale-95"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="relative w-6 h-5">
                            <span className={`absolute h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-2.5' : 'top-0'}`} />
                            <span className={`absolute h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'top-2.5'}`} />
                            <span className={`absolute h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-2.5' : 'top-5'}`} />
                        </div>
                    </button>
                </nav>

            </header>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 z-[90] bg-white pt-24 px-4 pb-10 overflow-y-auto transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            {link.hasDropdown ? (
                                <button
                                    onClick={() => toggleMobileDropdown(link.name)}
                                    className="flex items-center justify-between w-full text-lg font-medium text-gray-900 py-3 border-b border-gray-100"
                                >
                                    {link.name}
                                    <svg
                                        className={`w-5 h-5 transition-transform ${activeMobileDropdown === link.name ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            ) : (
                                <Link
                                    to={link.href}
                                    className="block text-lg font-medium text-gray-900 py-3 border-b border-gray-100"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {link.hasDropdown && activeMobileDropdown === link.name && (
                                <div className="pl-4 mt-2 space-y-2 bg-gray-50 rounded-lg p-4">
                                    <Link to="/loans/home-loan" className="block text-gray-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Home Loans</Link>
                                    <Link to="/loans/personal-loan" className="block text-gray-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Personal Loans</Link>
                                    <Link to="/loans/business-loan" className="block text-gray-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Business Loans</Link>
                                    <Link to="/loans/vehicle-loan" className="block text-gray-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Vehicle Loans</Link>
                                    <Link to="/loans/top-up-loan" className="block text-gray-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Top-up Loan</Link>
                                    <Link to="/loans/nri-home-loan" className="block text-gray-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>NRI Home Loans</Link>
                                    <Link to="/loans/loan-against-property" className="block text-gray-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Loan Against Property</Link>
                                    <Link to="/loans/balance-transfer" className="block text-gray-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Balance Transfer</Link>
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-8 w-full text-center px-6 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primaryLight block"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
}
