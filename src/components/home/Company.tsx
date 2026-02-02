import React from "react";
import { Link } from "react-router-dom";

export default function Company() {
    return (
        <section id="company" className="py-20 sm:py-24 bg-gray-50 border-t border-gray-100">
            <div className="container-custom">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl"></div>
                        <img
                            src="/vzee/fj.png"
                            alt="VZEEPAY Team"
                            width={600}
                            height={600}
                            className="relative rounded-3xl shadow-2xl w-full h-auto"
                        />
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                            <span>About VZEEPAY</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Empowering Your <span className="text-primary">Financial Journey</span>
                        </h2>
                        <div className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
                            <p>Established in 2018, VZEEPAY has revolutionized how India borrows and invests. With a presence in 500+ cities, we combine cutting-edge technology with human trust.</p>
                            <p>Our mission is to simplify finance for every Indian. Whether you're in a metro or a tier-3 town, we bring world-class financial products to your fingertips.</p>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-6">
                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <div className="text-3xl font-bold text-primary">₹2,500+ Cr</div>
                                <div className="mt-2 text-sm text-gray-600">Interest Saved</div>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <div className="text-3xl font-bold text-primary">75 Points</div>
                                <div className="mt-2 text-sm text-gray-600">Avg Score Improvement</div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Link to="/about" className="inline-flex items-center text-primary font-semibold hover:text-primaryLight transition-colors">
                                Learn more about us <span className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
