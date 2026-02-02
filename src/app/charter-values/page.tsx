import { Link } from "react-router-dom";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="container-custom py-20">

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-darker">
            Chartered for Trust & Transparency
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            <strong>VZEE PAY</strong> operates with structured governance,
            verified financial partners, and responsible processes that help
            users make confident loan and credit decisions.
          </p>
        </div>

        {/* Core Commitments */}
        <div className="grid gap-6 md:grid-cols-3">
          <article className="bg-orange-50 border border-orange-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">
              Verified Financial Partners
            </h3>
            <p className="text-gray-600">
              We collaborate only with recognised banks and regulated lending
              institutions to ensure reliability and compliance.
            </p>
          </article>

          <article className="bg-white border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">
              Responsible Lending Approach
            </h3>
            <p className="text-gray-600">
              Loan options are presented with clear eligibility, interest rates,
              and repayment terms — no surprises later.
            </p>
          </article>

          <article className="bg-white border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">
              Structured Risk Assessment
            </h3>
            <p className="text-gray-600">
              Our systems align borrowers with suitable products based on
              affordability and financial health.
            </p>
          </article>

          <article className="bg-white border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">
              Secure Data Practices
            </h3>
            <p className="text-gray-600">
              Personal and financial information is handled through secure,
              encrypted, and privacy-focused systems.
            </p>
          </article>

          <article className="bg-white border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">
              Compliance-Driven Operations
            </h3>
            <p className="text-gray-600">
              Our processes align with applicable financial regulations and
              industry best practices in India.
            </p>
          </article>

          <article className="bg-white border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">
              Customer-Centric Guidance
            </h3>
            <p className="text-gray-600">
              Users receive clear guidance at every step — from comparison to
              application and approval.
            </p>
          </article>
        </div>

        {/* How It Helps */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-gradient-to-br from-primary/10 via-primaryLight/6 to-white rounded-lg">
            <h4 className="font-semibold text-primary mb-2">
              Informed Decisions
            </h4>
            <p className="text-gray-600">
              Transparent information enables smarter borrowing choices.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border">
            <h4 className="font-semibold text-primary mb-2">
              Reduced Risk
            </h4>
            <p className="text-gray-600">
              Responsible matching lowers financial stress and repayment risks.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border">
            <h4 className="font-semibold text-primary mb-2">
              Faster Outcomes
            </h4>
            <p className="text-gray-600">
              Streamlined processes help users move from application to approval
              efficiently.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-[#f0f9ff] border border-[#e0f2fe] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-darker mb-3">
            Choose a Platform Built on Trust
          </h3>
          <p className="text-gray-600 mb-6">
            Compare loan options with clarity and confidence on VZEE PAY.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primaryLight"
          >
            Get Started
          </Link>
        </div>

      </div>
    </section>
  );
}
