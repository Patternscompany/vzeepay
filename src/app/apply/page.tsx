import React from "react";
import { Link } from "react-router-dom";

export default function Apply() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <div className="rounded-3xl bg-white p-12 shadow-xl border border-gray-100 max-w-lg w-full">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">Coming Soon</h1>
                <p className="mb-8 text-lg text-gray-600">
                    We are working hard to bring you a seamless loan application experience. Stay tuned!
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primaryLight hover:shadow-lg hover:-translate-y-0.5"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
