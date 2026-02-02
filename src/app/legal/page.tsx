export default function Page() {
  return (
    <section className="bg-[#fff7f0]">
      <div className="container-custom py-20">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-darker">Legal & Compliance</h1>
          <p className="mt-4 text-lg text-gray-600">We prioritize regulatory compliance, data privacy and transparent policies so you can trust every financial step taken on <strong>VZEE PAY</strong>.</p>
        </div>

        {/* Compliance Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">Regulatory Compliance</h3>
            <p className="text-gray-600">Strict adherence to RBI rules and applicable Indian financial laws is the backbone of our operations.</p>
          </div>

          <div className="p-6 bg-white rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">Transparency & Fairness</h3>
            <p className="text-gray-600">Clear disclosure of fees, interest rates, and eligibility criteria with zero hidden charges.</p>
          </div>

          <div className="p-6 bg-white rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold text-darker mb-2">Ethical Partnerships</h3>
            <p className="text-gray-600">We only partner with institutions that meet our ethical and compliance standards.</p>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="mt-12 md:flex md:items-center md:gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-darker">Data Privacy & Security</h3>
            <p className="mt-3 text-gray-600">We protect user data with industry-standard encryption, minimal access principles and regular audits. Your information is used only for improving experiences and delivering services with consent.</p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 grid grid-cols-2 gap-4">
            <div className="p-4 bg-orange-50 border rounded-lg">
              <h4 className="font-semibold text-primary">Encryption</h4>
              <p className="text-gray-600 text-sm mt-1">Bank-grade encryption safeguards data in transit and at rest.</p>
            </div>
            <div className="p-4 bg-orange-50 border rounded-lg">
              <h4 className="font-semibold text-primary">Access Controls</h4>
              <p className="text-gray-600 text-sm mt-1">Strict role-based access limits who can see sensitive information.</p>
            </div>
          </div>
        </div>

        {/* How Loans Work */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-darker">How Lending Partnerships Work</h3>
          <p className="mt-3 text-gray-600">VZEE PAY partners with regulated banks and NBFCs to offer loan products. We make the application process simple while our lending partners perform underwriting, KYC, and final approvals.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg border">
              <h4 className="font-semibold text-primary">Apply</h4>
              <p className="text-gray-600 text-sm mt-1">Customers apply using our comparison tools. We collect required documents and submit to lenders with consent.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <h4 className="font-semibold text-primary">Underwriting</h4>
              <p className="text-gray-600 text-sm mt-1">Partner banks evaluate eligibility and compliance checks. We do not make lending decisions ourselves; partners set terms.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <h4 className="font-semibold text-primary">Disbursal & Support</h4>
              <p className="text-gray-600 text-sm mt-1">Once approved, funds are disbursed by partner institutions; we provide ongoing support for any post-disbursal queries.</p>
            </div>
          </div>
        </div>

        {/* Partner Banks & Lenders */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-darker">Partner Banks & Lenders</h3>
          <p className="mt-3 text-gray-600">We work with regulated banks and NBFCs that meet our compliance and customer-protection standards.</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="#" className="p-4 bg-white rounded-lg border flex items-center gap-3 hover:shadow">
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">🏦</div>
              <div>
                <div className="font-semibold text-darker">Akshaya Bank</div>
                <div className="text-sm text-gray-600">Home & personal loans</div>
              </div>
            </a>

            <a href="#" className="p-4 bg-white rounded-lg border flex items-center gap-3 hover:shadow">
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">🏦</div>
              <div>
                <div className="font-semibold text-darker">Sahakara Finance</div>
                <div className="text-sm text-gray-600">SME and business lending</div>
              </div>
            </a>

            <a href="#" className="p-4 bg-white rounded-lg border flex items-center gap-3 hover:shadow">
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">🏦</div>
              <div>
                <div className="font-semibold text-darker">Bharat Trust Bank</div>
                <div className="text-sm text-gray-600">Affordable housing loans</div>
              </div>
            </a>

            <a href="#" className="p-4 bg-white rounded-lg border flex items-center gap-3 hover:shadow">
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">🏦</div>
              <div>
                <div className="font-semibold text-darker">MicroLend</div>
                <div className="text-sm text-gray-600">Small-ticket personal credit</div>
              </div>
            </a>

            <a href="#" className="p-4 bg-white rounded-lg border flex items-center gap-3 hover:shadow">
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">🏦</div>
              <div>
                <div className="font-semibold text-darker">Capital One NBFC</div>
                <div className="text-sm text-gray-600">Business and vehicle financing</div>
              </div>
            </a>
          </div>
        </div>

        {/* Our Legal Team */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-darker">Our Legal Team & External Counsel</h3>
          <p className="mt-3 text-gray-600">Our in-house legal team works closely with external counsels to ensure policies and partnerships meet all regulatory requirements.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border">
              <div className="font-semibold">Asha Rao</div>
              <div className="text-sm text-gray-600">Head of Legal — Corporate & Regulatory</div>
              <div className="text-sm mt-2"><a href="mailto:asha.rao@vzeepay.com" className="text-primary">asha.rao@vzeepay.com</a></div>
            </div>

            <div className="p-4 bg-white rounded-lg border">
              <div className="font-semibold">R. K. Sharma</div>
              <div className="text-sm text-gray-600">Senior Counsel — Compliance</div>
              <div className="text-sm mt-2"><a href="mailto:rk.sharma@vzeepay.com" className="text-primary">rk.sharma@vzeepay.com</a></div>
            </div>

            <div className="p-4 bg-white rounded-lg border">
              <div className="font-semibold">External Counsel — Veritas & Co.</div>
              <div className="text-sm text-gray-600">Litigation and regulatory advisory</div>
              <div className="text-sm mt-2"><a href="mailto:contact@veritascorp.com" className="text-primary">contact@veritascorp.com</a></div>
            </div>

            <div className="p-4 bg-white rounded-lg border">
              <div className="font-semibold">External Counsel — Lexwait LLP</div>
              <div className="text-sm text-gray-600">Data protection and privacy</div>
              <div className="text-sm mt-2"><a href="mailto:privacy@lexwait.com" className="text-primary">privacy@lexwait.com</a></div>
            </div>
          </div>
        </div>

        {/* Consumer Rights & Grievances */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-darker">Consumer Rights & Grievance Redressal</h3>
          <p className="mt-3 text-gray-600">We maintain clear channels for complaints and follow well-defined timelines for resolution. If you face any issue, our support and legal teams will help escalate and resolve matters fairly.</p>
        </div>

        {/* Policies & Resources */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <a href="/privacy-policy" className="p-6 bg-white rounded-lg border hover:shadow transition">Privacy Policy</a>
          <a href="/terms-and-conditions" className="p-6 bg-white rounded-lg border hover:shadow transition">Terms & Conditions</a>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primaryLight">Contact our Legal Team</a>
        </div>
      </div>
    </section>
  );
}
