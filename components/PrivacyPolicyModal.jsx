import React from 'react';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity">
      
      {/* Modal Container */}
      <div className="bg-white dark:bg-[#0a0f1c] text-gray-800 w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 border dark:border-gray-800">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#030712]">
          <h3 className="text-2xl font-bold text-[#1C1C1C] dark:text-white">Privacy & Cookies Policy</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-10 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          
          {/* INTRODUCTION */}
          <section className="space-y-4">
            <p>
              By submitting any information to this website, you consent to its use as set out in this Privacy Policy. We may update this policy from time to time, and any changes will be posted on this page with an updated effective date.
            </p>
            <p>
              <strong>Important Notice:</strong> The internet is not a secure medium. However, DPV Offshore & Marine Services LLC respects the privacy of every individual visiting our website. This policy explains our security measures and how we use collected information. Please read this Privacy Policy before providing any personal information. By submitting your information, you consent to the transfer of data outside the United Arab Emirates where necessary for processing, in compliance with UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021).
            </p>
          </section>

          {/* WHAT WE MAY COLLECT */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">What We May Collect</h4>
            <p className="mb-2">Personal information we may collect includes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your name, job title, company name, and contact information (email, phone number, address).</li>
              <li>Your approximate location derived from your IP address.</li>
              <li>Vessel requirements and project specifications you provide.</li>
              <li>Correspondence records when you contact us.</li>
            </ul>
          </section>

          {/* LEGAL BASIS FOR PROCESSING */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Legal Basis for Processing</h4>
            <p className="mb-2">Under UAE PDPL, we process personal data based on:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Consent:</strong> Where you have explicitly agreed to our processing.</li>
              <li><strong>Contractual Necessity:</strong> To perform contracts or take steps at your request prior to entering a contract.</li>
              <li><strong>Legitimate Interests:</strong> To operate our business and provide marine services, provided your rights do not override these interests.</li>
            </ul>
          </section>

          {/* WHAT WE DO WITH THE INFORMATION WE GATHER */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">What We Do with the Information We Gather</h4>
            <p className="mb-2">We use the information collected to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Provide you with access to website functions and features.</li>
              <li>Respond to queries, feedback, or vessel charter/sale inquiries.</li>
              <li>Send you offshore vessel circulars, market updates, and marine industry information that may interest you (with your consent).</li>
              <li>Comply with legal and regulatory obligations under UAE maritime and commercial laws.</li>
              <li>Improve our website functionality and user experience.</li>
            </ul>
            <p className="mb-2">Your personal information is treated in strict confidence and will not be disclosed to third parties except:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Where we have your explicit consent.</li>
              <li>Where required by UAE law, regulatory authorities, or court order.</li>
              <li>To our professional advisers, insurers, or auditors under strict confidentiality obligations.</li>
              <li>To vessel owners, brokers, or classification societies as necessary to facilitate charter or sale transactions (with your prior knowledge).</li>
            </ul>
          </section>

          {/* PROTECTING YOUR INFORMATION */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Protecting Your Information</h4>
            <p className="mb-2">
              In accordance with Article 20 of the UAE PDPL, we have implemented suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online. These measures include encryption, access controls, and regular security assessments.
            </p>
            <p>
              We will not sell, distribute, or lease your personal information to third parties for marketing purposes.
            </p>
          </section>

          {/* DATA SUBJECT RIGHTS */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Data Subject Rights</h4>
            <p className="mb-2">Under the UAE PDPL, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data where legally permissible.</li>
              <li><strong>Restriction:</strong> Request limitation of processing under certain circumstances.</li>
              <li><strong>Objection:</strong> Object to processing for direct marketing purposes.</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another controller where technically feasible.</li>
            </ul>
            <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg mt-4">
              <p className="font-semibold mb-1">To exercise these rights, please contact us at:</p>
              <p className="text-sm">
                <strong>Data Protection Contact</strong><br/>
                DPV Offshore & Marine Services LLC<br/>
                #W306, Workshop 05, Dubai Maritime City, Dubai<br/>
                Email: <a href="mailto:info@dpvoffshore.com" className="text-blue-600 dark:text-blue-400 hover:underline">info@dpvoffshore.com</a>
              </p>
            </div>
            <p className="mt-4 text-sm">
              We will respond to all requests within 30 days in accordance with UAE PDPL standards. A reasonable fee may be charged for manifestly unfounded or excessive requests.
            </p>
          </section>

          {/* DATA RETENTION */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Data Retention</h4>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting requirements. For vessel transaction records, this period may extend in accordance with UAE commercial and maritime law requirements.
            </p>
          </section>

          {/* CROSS-BORDER DATA TRANSFERS */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Cross-Border Data Transfers</h4>
            <p>
              As an international marine services provider, your information may be transferred to and processed in countries outside the UAE. We ensure such transfers comply with Articles 22-23 of the UAE PDPL, implementing appropriate safeguards such as standard contractual clauses where the destination country does not provide adequate protection levels.
            </p>
          </section>

          {/* OUR THIRD-PARTY DATA PROCESSORS */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Our Third-Party Data Processors</h4>
            <p className="mb-2">We engage carefully selected third-party service providers to support our website and business operations, including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Website hosting and development services.</li>
              <li>Cloud storage and IT infrastructure providers.</li>
              <li>Email marketing and communication platforms.</li>
            </ul>
            <p>
              All third-party processors are contractually bound to process data only on our instructions and in compliance with UAE PDPL requirements. We do not permit third parties to use your data for their own purposes.
            </p>
          </section>

          {/* DATA BREACHES */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Data Breaches</h4>
            <p>
              In compliance with Article 9 of the UAE PDPL, we will report any unlawful data breach of our databases to the UAE Data Office and affected individuals within 72 hours of becoming aware of the breach, where the breach is likely to result in a risk to your rights and freedoms.
            </p>
          </section>

          {/* COOKIES */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Cookies</h4>
            <p className="mb-2">
              Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Distinguish you from other users.</li>
              <li>Remember your preferences.</li>
              <li>Analyse website traffic and usage patterns.</li>
              <li>Improve site functionality.</li>
            </ul>
            <p className="font-semibold mt-4 mb-2">Types of cookies we use:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Essential Cookies:</strong> Required for website operation.</li>
              <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count visitors and analyse site usage.</li>
              <li><strong>Functionality Cookies:</strong> Remember choices you make to improve your experience.</li>
            </ul>
            <p className="mb-2">
              The cookies we use do not collect personally identifiable information. You can control cookies through your browser settings. If you continue browsing without changing your settings, we assume you consent to our use of cookies.
            </p>
            <p>
              We comply with the UAE Data Office Guidelines regarding cookie usage and transparency.
            </p>
          </section>

          {/* LINKS TO OTHER WEBSITES */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Links to Other Websites</h4>
            <p>
              Our website may contain links to partner networks, advertisers, affiliates, and maritime industry resources. These third-party websites have their own privacy policies, and we do not accept responsibility or liability for their practices. Please review their policies before submitting personal data.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}