import React from "react";
import PageHero from "@/components/shared/PageHero";

export default function Blog() {
    const posts = [
        {
            title: "The Ultimate Guide to Home Loans in 2026",
            category: "Home Loans",
            date: "Jan 28, 2026",
            image: "/images/b1.png",
            excerpt: "Everything you need to know about securing your dream home with the best financing options available this year. From eligibility to documentation, we cover it all."
        },
        {
            title: "Fixed vs Floating Interest Rates: What's Best for You?",
            category: "Home Loans",
            date: "Jan 25, 2026",
            image: "/images/b2.png",
            excerpt: "Confused between fixed and floating interest rates? We break down the pros and cons to help you make the right choice for your mortgage."
        },
        {
            title: "5 Common Mistakes to Avoid When Applying for a Home Loan",
            category: "Home Loans",
            date: "Jan 20, 2026",
            image: "/images/b3.png",
            excerpt: "Don't let simple errors reject your loan application. Learn about the common pitfalls and how to avoid them to ensure a smooth approval process."
        },
        {
            title: "How to Improve Your Credit Score for a Better Home Loan Rate",
            category: "Credit Score",
            date: "Jan 15, 2026",
            image: "/images/b4.png",
            excerpt: "Your credit score directly impacts your interest rate. Discover simple tips and tricks to boost your score quickly."
        }
    ];

    return (
        <main>
            <PageHero
                title="Smart Money"
                subtitle="Insights"
                description="Expert analysis, financial tips, and market trends to help you make informed decisions about your wealth."
            />

            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="relative h-48 w-full">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{post.category}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">{post.title}</h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
