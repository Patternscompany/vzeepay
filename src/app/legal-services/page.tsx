import { Link } from "react-router-dom";

export default function Page() {
  return (
    <>
      {/* Turnaround & Compliance Overview */}
      <section className="mt-12 bg-white border rounded-lg p-8">
        <div className="md:flex md:items-center md:justify-between gap-8">
          <div className="md:max-w-xl">
            <h3 className="text-2xl font-bold text-darker">
              Secure & Compliant Loan Processing
            </h3>
            <p className="mt-3 text-gray-600">
              At <strong>VZEE PAY</strong>, every loan application moves through
              regulated lenders, structured verification, and compliance-led
              workflows designed to protect customers and ensure transparency.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-right">
            <div className="text-primary font-semibold text-lg">
              Average Processing Time
            </div>
            <div className="text-3xl font-bold text-darker mt-1">
              24–48 Hours*
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Based on lender checks & documentation
            </div>
          </div>
        </div>
      </section>

      {/* Financial & Legal Network */}
      <section className="mt-12 bg-white border rounded-lg p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-darker">
            Financial & Legal Ecosystem
          </h3>
          <p className="mt-2 text-gray-600">
            Our platform connects users with regulated banks, NBFCs, and legal
            professionals to ensure every transaction meets financial and
            regulatory standards.
          </p>
        </div>

        <h4 className="font-semibold text-darker mb-4">Includes</h4>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 text-sm">
          <div className="p-4 bg-[#fff7f0] rounded-lg border">
            <div className="font-semibold text-darker mb-1">
              Public & Private Banks
            </div>
            <div>PNB, ICICI Bank, HDFC Bank, Yes Bank</div>
          </div>

          <div className="p-4 bg-[#fff7f0] rounded-lg border">
            <div className="font-semibold text-darker mb-1">
              Housing & Private Lenders
            </div>
            <div>Kotak Mahindra Bank, LIC Housing Finance</div>
          </div>

          <div className="p-4 bg-[#fff7f0] rounded-lg border">
            <div className="font-semibold text-darker mb-1">
              NBFC & Corporate Finance
            </div>
            <div>Aditya Birla Finance, Tata Capital</div>
          </div>

          <div className="p-4 bg-[#fff7f0] rounded-lg border">
            <div className="font-semibold text-darker mb-1">
              Asset-Based Lending
            </div>
            <div>Muthoot Finance, REPCO Home Finance, Godrej Finance</div>
          </div>

          <div className="p-4 bg-[#fff7f0] rounded-lg border">
            <div className="font-semibold text-darker mb-1">
              Legal & Compliance Professionals
            </div>
            <div>
              Panel Advocates, Due-Diligence Lawyers, Compliance Consultants
            </div>
          </div>

          <div className="p-4 bg-[#fff7f0] rounded-lg border">
            <div className="font-semibold text-darker mb-1">
              Regulatory Advisory
            </div>
            <div>
              Contract review, disclosure guidance, and policy compliance
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Partner participation may vary by product type, applicant profile,
          and location. Final approvals, pricing, and terms are determined by
          respective lenders.
        </p>
      </section>

      {/* Legal Framework */}
      <section className="mt-12 bg-white border rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-darker">
            Our Legal & Governance Framework
          </h3>
          <p className="mt-3 text-gray-600">
            VZEE PAY operates with defined legal policies that govern data usage,
            platform conduct, and lender relationships. These frameworks ensure
            user protection, ethical operations, and regulatory alignment.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#f8fafc] border rounded-lg">
            <h4 className="font-semibold text-darker mb-2">Terms of Service</h4>
            <p className="text-gray-600 text-sm">
              Our terms outline the responsibilities, rights, and limitations
              applicable to users, lenders, and platform usage.
            </p>
            <Link
              to="/terms-and-conditions"
              className="inline-block mt-3 text-primary font-semibold text-sm"
            >
              Read Terms →
            </Link>
          </div>

          <div className="p-6 bg-[#f8fafc] border rounded-lg">
            <h4 className="font-semibold text-darker mb-2">Privacy Policy</h4>
            <p className="text-gray-600 text-sm">
              We explain how personal data is collected, processed, stored, and
              protected across all services.
            </p>
            <Link
              to="/privacy-policy"
              className="inline-block mt-3 text-primary font-semibold text-sm"
            >
              View Policy →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primaryLight"
        >
          Contact Our Compliance Team
        </Link>
        <p className="mt-3 text-xs text-gray-500">
          *Processing timelines vary based on eligibility, documentation, and
          lender-specific checks.
        </p>
      </div>
    </>
  );
}
