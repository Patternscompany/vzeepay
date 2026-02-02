"use client";
import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";

export default function EMICalculator() {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);

    const calculateEMI = () => {
        const r = interestRate / 12 / 100;
        const n = tenure * 12;
        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return Math.round(emi);
    }

    const emi = calculateEMI();
    const totalAmount = emi * tenure * 12;
    const totalInterest = totalAmount - loanAmount;

    return (
        <main>
            <PageHero
                title="Plan Your"
                subtitle="Repayment"
                description="Take control of your finances. Use our smart EMI calculator to plan your home loan repayment with precision."
            />

            <section className="py-20 bg-white">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-3xl shadow-sm">
                        <div className="space-y-8">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-900">Loan Amount: ₹ {loanAmount.toLocaleString()}</label>
                                <input
                                    type="range"
                                    min="100000"
                                    max="100000000"
                                    step="100000"
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                                    className="w-full accent-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-900">Interest Rate: {interestRate}%</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    step="0.1"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                    className="w-full accent-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-900">Tenure: {tenure} Years</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    step="1"
                                    value={tenure}
                                    onChange={(e) => setTenure(Number(e.target.value))}
                                    className="w-full accent-primary"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center bg-white p-8 rounded-2xl text-center">
                            <h3 className="text-gray-500 mb-2">Monthly EMI</h3>
                            <div className="text-4xl font-bold text-primary mb-6">₹ {emi.toLocaleString()}</div>

                            <div className="w-full space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Principal Amount</span>
                                    <span className="font-semibold text-gray-900">₹ {loanAmount.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Total Interest</span>
                                    <span className="font-semibold text-gray-900">₹ {totalInterest.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between border-t border-gray-200 pt-3">
                                    <span className="text-gray-600">Total Amount</span>
                                    <span className="font-semibold text-gray-900">₹ {totalAmount.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
