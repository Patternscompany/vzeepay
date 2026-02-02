"use client";

import React, { useState, useEffect } from "react";

export default function CreditScoreSimulator() {
    const [step, setStep] = useState<"input" | "otp" | "calculating" | "result">("input");
    const [score, setScore] = useState(0);
    const [progress, setProgress] = useState(0);
    const [formData, setFormData] = useState({ name: "", mobile: "", otp: "" });

    const handleInitiate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.mobile) return;
        setStep("otp");
    };

    const handleVerifyOTP = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.otp) return;
        setStep("calculating");
    };

    useEffect(() => {
        if (step === "calculating") {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setStep("result");
                        // Simulate a score between 720 and 800
                        setScore(Math.floor(Math.random() * (800 - 720 + 1)) + 720);
                        return 100;
                    }
                    return prev + 2; // Progress speed
                });
            }, 30);
            return () => clearInterval(interval);
        }
    }, [step]);

    return (
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl border border-gray-100 transition-all duration-300">
            {step === "input" && (
                <div className="animate-in fade-in zoom-in duration-300">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">Check Your Score</h3>
                    <p className="mb-6 text-sm text-gray-500">
                        Get your comprehensive credit report for free. No impact on your score.
                    </p>
                    <form onSubmit={handleInitiate} className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                required
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                placeholder="As per PAN card"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Mobile Number</label>
                            <input
                                type="tel"
                                required
                                pattern="[0-9]{10}"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                placeholder="10 digit number"
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95 hover:bg-primaryLight"
                        >
                            Get OTP
                        </button>
                        <p className="text-center text-[10px] text-gray-400">
                            By clicking Get OTP, you agree to our Terms & Conditions.
                        </p>

                        <div className="mt-4 rounded-lg bg-blue-50 p-3 text-xs text-blue-800">
                            <p className="font-semibold mb-1">Real-World Process:</p>
                            <ul className="list-disc list-inside space-y-1 opacity-90">
                                <li>Identity Verification (PAN Match)</li>
                                <li>Mobile Verification (OTP)</li>
                                <li>Secure Bureau Fetch (Equifax/CIBIL)</li>
                            </ul>
                        </div>
                    </form>
                </div>
            )}

            {step === "otp" && (
                <div className="animate-in fade-in slide-in-from-right duration-300">
                    <div className="mb-6 flex items-center gap-2">
                        <button
                            onClick={() => setStep("input")}
                            className="rounded-full p-1 hover:bg-gray-100 text-gray-500"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <h3 className="text-xl font-bold text-gray-900">Verify Mobile</h3>
                    </div>

                    <p className="mb-6 text-sm text-gray-500">
                        Enter the OTP sent to <span className="font-semibold text-gray-900">+91 {formData.mobile}</span>
                    </p>

                    <form onSubmit={handleVerifyOTP} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                required
                                maxLength={6}
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-center text-2xl tracking-[0.5em] font-mono focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                placeholder="0000"
                                value={formData.otp}
                                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                            />
                            <p className="mt-2 text-center text-xs text-gray-500">
                                Hint: Enter any number like 1234
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95 hover:bg-primaryLight"
                        >
                            Verify & Check Score
                        </button>
                    </form>
                </div>
            )}

            {step === "calculating" && (
                <div className="flex flex-col items-center justify-center py-10 animate-in fade-in duration-300">
                    <div className="relative mb-6 h-20 w-20">
                        {/* Spinning loader */}
                        <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center font-bold text-primary">
                            {progress}%
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 animate-pulse">Analysing Profile...</h3>
                    <p className="text-sm text-gray-500">Connecting to Bureau</p>
                </div>
            )}

            {step === "result" && (
                <div className="text-center animate-in fade-in zoom-in duration-500">
                    <p className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-widest">Your Credit Score</p>

                    <div className="relative mx-auto my-6 h-40 w-64 overflow-hidden">
                        {/* Simple Semi-Circle Gauge SVG */}
                        <svg viewBox="0 0 200 110" className="w-full h-full">
                            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#E5E7EB" strokeWidth="20" strokeLinecap="round" />
                            <path
                                d="M 20 100 A 80 80 0 0 1 180 100"
                                fill="none"
                                stroke="#F97316" // Primary Orange
                                strokeWidth="20"
                                strokeLinecap="round"
                                strokeDasharray="251.2" // PI * 160 / 2 ?? radius is 80. Circumference 2*PI*80 = 502. Semi = 251.
                                strokeDashoffset={251.2 - (251.2 * (score - 300) / (900 - 300))} // Range 300 to 900 typically
                                className="transition-all duration-1000 ease-out"
                            />
                        </svg>
                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end h-full pb-4">
                            <span className="text-5xl font-extrabold text-gray-900">{score}</span>
                            <span className="text-sm font-medium text-green-500">Excellent</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-left bg-gray-50 rounded-xl p-4 mb-6">
                        <div>
                            <p className="text-xs text-gray-500">Payment History</p>
                            <p className="font-semibold text-green-600">100% On Time</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Credit Utilization</p>
                            <p className="font-semibold text-blue-600">Low (12%)</p>
                        </div>
                    </div>

                    <button
                        onClick={() => { setStep("input"); setFormData({ name: "", mobile: "", otp: "" }) }}
                        className="text-sm font-medium text-primary hover:text-primaryLight hover:underline"
                    >
                        Check Another Score
                    </button>

                    <div className="mt-6 rounded-lg bg-yellow-50 p-3 text-xs text-yellow-800">
                        <p className="font-semibold">Note:</p>
                        <p>It is currently a simulation. Right now, it does not fetch real credit data from a bureau like CIBIL or Equifax.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
