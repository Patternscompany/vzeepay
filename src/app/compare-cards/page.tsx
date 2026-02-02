import React from "react";
import { Link } from "react-router-dom";

export default function CompareCards() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <div className="rounded-3xl bg-white p-12 shadow-xl border border-gray-100 max-w-lg w-full">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">Coming Soon</h1>
                <p className="mb-8 text-lg text-gray-600">
                    Our advanced credit card comparison tool is under development. You'll soon be able to compare cards side-by-side!
                </p>
                <Link
                    to="/credit-cards"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primaryLight hover:shadow-lg hover:-translate-y-0.5"
                >
                    Back to Credit Cards
                </Link>
            </div>
        </div>
    );
}
