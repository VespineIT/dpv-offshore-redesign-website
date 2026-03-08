import React from 'react';

export default function TermsAndConditionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity">
      
      {/* Modal Container */}
      <div className="bg-white dark:bg-[#0a0f1c] text-gray-800 w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 border dark:border-gray-800">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#030712]">
          <h3 className="text-2xl font-bold text-[#1C1C1C] dark:text-white">Legal & Compliance</h3>
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
          
          {/* TERMS AND CONDITIONS SECTION */}
          <section className="space-y-4">
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">TERMS AND CONDITIONS</h4>
            <div className="space-y-4">
              <p>
                Welcome to our website. www.dpvoffshore.com is operated by DPV Offshore & Marine Services LLC, a company registered in the United Arab Emirates under Trade License Number 929197 with its registered office at P.O. Box 75287, Workshop 05, #W306, Dubai Maritime City, Dubai, UAE.
              </p>
              <p>
                The terms "DPV", "DPV Offshore", "us", "we", and "our" refer to the owner of the website, DPV Offshore & Marine Services LLC. The terms "you" and "your" refer to the user or viewer of this website.
              </p>
              <p>
                By continuing to browse and use this website, you agree to comply with and be bound by the following terms and conditions, which govern DPV's relationship with you. If you do not accept these terms, please leave the site immediately.
              </p>
              <p>
                If any provision of these Conditions of Use is unlawful, void, or unenforceable, that provision shall be deemed severable and shall not affect the validity of the remaining provisions.
              </p>
              
              <h5 className="font-bold text-gray-900 dark:text-gray-100 mt-6 mb-2">Specific Terms</h5>
              <ul className="space-y-3">
                <li><strong>General Information Only:</strong> The content of this website is for general information and marketing purposes only. While we endeavour to keep information accurate and up to date, we make no warranties, representations, or guarantees regarding accuracy, timeliness, reliability, completeness, or availability of vessel specifications, technical data, or other information for any particular purpose.</li>
                <li><strong>No Reliability:</strong> You acknowledge that information and materials may contain inaccuracies or errors. We expressly fully exclude liability for such inaccuracies or errors permitted by UAE law. Any reliance you place on website information is strictly at your own risk.</li>
                <li><strong>No Liability:</strong> In no event shall we be liable for any loss or damage, including without limitation indirect, consequential, or incidental loss or damage, or any loss of profits, data, or business opportunities arising from website use, vessel transactions, or reliance on published information.</li>
                <li><strong>Technical Availability:</strong> We make every effort to maintain website availability but accept no liability for temporary unavailability due to technical issues beyond our reasonable control, including maritime communication limitations.</li>
                <li><strong>Intellectual Property:</strong> This website contains material owned by or licensed to us, including design, layout, appearance, graphics, vessel images, and technical content. Reproduction is prohibited except as permitted under our Copyright Statement.</li>
                <li><strong>Trademarks:</strong> All trademarks reproduced on this website, which are not our property or licensed to us, are acknowledged. "DPV Offshore & Marine Services" and our logo are registered trademarks.</li>
                <li><strong>Prohibited Use:</strong> Unauthorized use of this website may give rise to civil claims for damages or injunctive relief under UAE law and/or constitute a criminal offense.</li>
                <li><strong>Linking Policy:</strong> You may not create a link to this website from another website or document without our prior written consent.</li>
                <li><strong>User-Generated Content:</strong> Visitors must not post information copyrighted by third parties. You are solely responsible for any content you post. Posting of copyrighted material is strictly prohibited. We are not responsible for third-party copyrighted material uploaded to the website by users.</li>
                <li><strong>Governing Law:</strong> Your use of this website and any dispute arising from such use is subject to the laws of the United Arab Emirates and the non-exclusive jurisdiction of the courts of the Emirate of Dubai.</li>
              </ul>
            </div>
          </section>

          {/* COPYRIGHT STATEMENT SECTION */}
          <section className="space-y-4">
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">COPYRIGHT STATEMENT</h4>
            <div className="space-y-4">
              <p>
                All copyright and other intellectual property rights in any material contained in this website, including (but not limited to) content, text, features, functions, layout, graphics, photographs, technical drawings, vessel specifications, and other images are owned by DPV Offshore & Marine Services LLC or have been licensed to us by the copyright owners for use as part of this website.
              </p>
              <p>
                Copying of part or all the contents of these pages in any form is strictly prohibited except in accordance with the following exceptions.
              </p>
              <ul className="space-y-3">
                <li>
                  <strong>Licence to copy for personal use</strong> – You may print extracts from these pages for your personal reference only. Any commercial use, redistribution, or exploitation for financial gain is strictly prohibited.
                </li>
                <li>
                  <strong>Licence to recopy for limited purposes</strong> – You may share extracts from these pages with individual third parties for their personal reference only, provided that:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>You acknowledge our website as the source of the material.</li>
                    <li>You include the following copyright notice: "Copyright © 2026 DPV Offshore & Marine Services LLC. All Rights Reserved."</li>
                    <li>You inform such third parties that these Conditions of Use apply to them and that they must comply with them.</li>
                  </ul>
                </li>
              </ul>
              <p>
                This licence does not permit incorporation of the material or any part of it in any other work, publication, database, or vessel marketing materials, whether in hard copy, electronic, or any other form. No part of our website may be distributed or copied for any commercial purpose without express written consent from DPV Offshore & Marine Services LLC.
              </p>
              <p>
                No part of this website may be reproduced on, transmitted to, or stored in any other website or electronic retrieval system without express written permission from DPV Offshore & Marine Services LLC.
              </p>
              <p>
                No part of this website, including but not limited to technical specifications, vessel data, literary content, graphics, and logos, may be modified, adapted, or used to create derivative works in any way.
              </p>
            </div>
          </section>

          {/* EMAIL DISCLAIMER SECTION */}
          <section className="space-y-4">
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">EMAIL DISCLAIMER</h4>
            <div className="space-y-4">
              <ul className="space-y-3">
                <li><strong>Confidentiality Notice:</strong> This email and any attachments are intended solely for the named addressee(s). The information contained herein may be privileged, confidential, and/or proprietary. If you are not the intended recipient, any unauthorized use, disclosure, copying, distribution, or dissemination is strictly prohibited.</li>
                <li><strong>Error Notification:</strong> If you have received this communication in error, please notify the sender immediately by telephone and delete this message. The sender accepts no liability to any unintended third party.</li>
                <li><strong>Virus Disclaimer:</strong> While we believe this email and attachments are virus-free, we cannot accept liability for any damage or loss due to viruses. It is your responsibility to scan for viruses.</li>
                <li><strong>Views Expressed:</strong> The contents of this email represent the views of the individual sender and not necessarily those of DPV Offshore & Marine Services LLC, unless expressly stated otherwise.</li>
                <li><strong>Service Information:</strong> All details regarding repair and maintenance services, technical capabilities, yard availability, and pricing contained in this email are believed correct at the time of writing but are not guaranteed unless confirmed in writing.</li>
                <li>
                  <strong>Service Proposals:</strong> All repair, maintenance, or technical service proposals are subject to:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Final yard availability and slot confirmation.</li>
                    <li>Vessel condition assessment upon arrival.</li>
                    <li>Agreement on scope of work and terms.</li>
                    <li>Compliance with applicable classification society requirements and maritime regulations.</li>
                  </ul>
                </li>
                <li><strong>Pricing:</strong> Prices quoted are net, excluding applicable taxes (VAT), duties, or third-party charges (e.g., classification society fees, specialized equipment hire) unless otherwise expressly stated.</li>
                <li><strong>Contractual Terms:</strong> No binding contract for services is formed until a signed Repair Agreement or Purchase Order is exchanged and acknowledged by both parties.</li>
                <li><strong>Unsubscribe:</strong> If this message is irrelevant to your business, please reply with "UNSUBSCRIBE" in the subject line to be removed from our mailing list.</li>
              </ul>
            </div>
          </section>

          {/* SOCIAL MEDIA POLICY SECTION */}
          <section className="space-y-4">
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">SOCIAL MEDIA POLICY</h4>
            <div className="space-y-4">
              <p>
                <strong>IF YOU VISIT OUR PROFILES ON SOCIAL MEDIA</strong><br/>
                DPV Offshore & Marine Services LLC and the individual social media platforms are joint data controllers for the processing of your personal data when you visit our social media profiles. We comply with the guidelines of the UAE Data Office concerning joint controllership and attempt to ensure you receive transparent information about the processing of your personal data when visiting our social media pages.
              </p>
              <p>
                This section applies to our processing of personal data which you leave behind and/or provide when you visit our official profiles on social media platforms such as LinkedIn, Facebook, Instagram, and X (formerly Twitter) (collectively, the "Social Media"). This section supplements the general privacy policies issued by the social media platforms individually. Both Meta (Facebook/Instagram) and LinkedIn have published addendums on joint controllership describing the arrangement of responsibilities, which you may access by clicking the respective platform links: Facebook/Instagram Joint Controller Addendum | (10) DPV Offshore & Marine Services: Overview | LinkedIn.
              </p>

              <h5 className="font-bold text-gray-900 dark:text-gray-100 mt-4 mb-2">Processing of Your Personal Data Through Social Media</h5>
              <p>Depending on your interaction with our social media profiles, DPV Offshore & Marine Services LLC and the social media platforms may collect the following personal data about you:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your "likes," reactions, shares, or comments on our posts.</li>
                <li>Content you post on our pages, including photos, videos, or technical inquiries.</li>
                <li>Your visits to our profiles and interaction patterns.</li>
                <li>Your profile information (name, job title, company, location) when you interact with us.</li>
                <li>Messages sent via social media direct messaging features.</li>
                <li>Your interests in our services (e.g., repair capabilities, maintenance solutions, technical certifications).</li>
              </ul>
              <p>
                We encourage you to delete comments, likes, and other interactions you have left on our profiles yourself if you no longer want them displayed. DPV Offshore & Marine Services LLC does not routinely delete publicly available interactions unless they violate our community guidelines or legal obligations. Please refer to the privacy policy of each social media provider for information on their specific data retention periods and processing practices.
              </p>

              <h5 className="font-bold text-gray-900 dark:text-gray-100 mt-4 mb-2">Purposes of the Processing</h5>
              <p>Your personal data may be processed for the following legitimate business purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Service Development & Improvement:</strong> Enhancing our marine repair and maintenance service offerings based on client feedback and industry trends.</li>
                <li><strong>Client Communication:</strong> Responding to inquiries about vessel repairs, maintenance schedules, technical capabilities, and service availability.</li>
                <li><strong>Marketing & Business Development:</strong> Promoting our repair yard facilities, maintenance contracts, and technical services to the maritime industry.</li>
                <li><strong>Industry Networking:</strong> Building professional relationships with ship owners, operators, classification societies, and maritime professionals.</li>
                <li><strong>Research & Statistics:</strong> Analysing engagement metrics to improve our social media presence and service marketing strategies.</li>
                <li><strong>Quality Assurance:</strong> Monitoring feedback on our repair and maintenance services to ensure compliance with international maritime standards.</li>
              </ul>
              <p>
                The social media platforms collect statistical data on visitor behaviour for their own purposes through cookies, pixels, and similar technologies when you visit our profiles. Each cookie contains a unique identification code that remains active for a specific period unless deleted earlier. You can read more about each platform's processing of personal data by visiting their privacy policies (Meta Privacy Policy | LinkedIn Privacy Policy) and cookie policies.
              </p>

              <h5 className="font-bold text-gray-900 dark:text-gray-100 mt-4 mb-2">Legal Basis for Processing</h5>
              <p>Under UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) and applicable international standards, DPV Offshore & Marine Services LLC processes your personal data based on the following legal grounds:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Legitimate Interests (Article 4 of UAE PDPL):</strong> We process your personal data based on our legitimate interest in marketing our marine repair and maintenance services, communicating with industry professionals, and improving our service offerings. This includes networking with potential clients and showcasing our technical capabilities to the maritime community.</li>
                <li><strong>Consent:</strong> Where required for specific marketing activities or non-essential data processing, we rely on your explicit consent, which you may withdraw at any time.</li>
                <li><strong>Contractual Necessity:</strong> When you contact us via social media to request repair or maintenance services, we process your data to take steps prior to entering a contract or to perform contractual obligations.</li>
              </ul>
              <p>
                We do not process sensitive personal data (as defined under UAE PDPL Article 1) through our social media activities unless explicitly provided by you for specific service requirements (e.g., safety certifications for yard access).
              </p>

              <h5 className="font-bold text-gray-900 dark:text-gray-100 mt-4 mb-2">Sharing of Your Personal Data</h5>
              <p>DPV Offshore & Marine Services LLC will never disclose your personal data collected via social media to third parties for marketing purposes. However, please note that:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The social media platforms may share your personal data internally among their subsidiaries and externally with analytics providers, advertisers, and research partners.</li>
                <li>Such transfers may include transfers to countries outside the United Arab Emirates. For more information, please refer to the social media platforms' terms and conditions and privacy policies linked above.</li>
                <li>We may share your contact details internally within our company departments (e.g., from Marketing to Operations) solely to respond to your service inquiries or maintenance requests.</li>
              </ul>

              <h5 className="font-bold text-gray-900 dark:text-gray-100 mt-4 mb-2">Your Rights Under UAE PDPL</h5>
              <p>Under the UAE Personal Data Protection Law, you have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Right to Access:</strong> Request information about what personal data we hold about you.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data where legally permissible.</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of processing under certain circumstances.</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests, including direct marketing.</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another controller where technically feasible.</li>
              </ul>
              <p>
                <strong>How to Exercise Your Rights:</strong> The social media platforms' general infrastructure requires that you contact the platform directly if you wish to exercise most of these rights, as they maintain the technical capability to access and modify profile data. However, if you believe DPV Offshore & Marine Services LLC can comply with your specific request (Data we have extracted into our own CRM systems), please contact us.
              </p>

              <h5 className="font-bold text-gray-900 dark:text-gray-100 mt-4 mb-2">Data Retention</h5>
              <p>We retain personal data collected through social media interactions only for as long as necessary to fulfil the purposes outlined above, or as required by UAE commercial and maritime regulations. Typically:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Inquiry responses:</strong> 2 years from last interaction.</li>
                <li><strong>Marketing contacts:</strong> Until you unsubscribe or withdraw consent.</li>
                <li><strong>Contract-related communications:</strong> Duration of contract plus applicable statutory limitation periods.</li>
              </ul>

              <h5 className="font-bold text-gray-900 dark:text-gray-100 mt-4 mb-2">Security Measures</h5>
              <p>
                We implement appropriate technical and organizational measures to protect personal data collected via social media, in accordance with Article 20 of the UAE PDPL. However, please be aware that social media platforms operate their own security infrastructure, and we recommend reviewing their security practices in their respective privacy policies.
              </p>

              <h5 className="font-bold text-gray-900 dark:text-gray-100 mt-4 mb-2">Updates to This Section</h5>
              <p>
                We may update this social media privacy section periodically to reflect changes in our practices or regulatory requirements. The effective date will be indicated at the top of this section.
              </p>
            </div>
          </section>

          {/* ACCESSIBILITY STATEMENT SECTION */}
          <section className="space-y-4">
            <h4 className="text-xl font-bold text-[#FF5722] mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">ACCESSIBILITY STATEMENT</h4>
            <div className="space-y-4">
              <p>
                We are committed to ensuring our website is accessible to all visitors, including those using adaptive technologies.
              </p>
              <h5 className="font-bold text-gray-900 dark:text-gray-100 mt-4 mb-2">Accessibility Features:</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Text size can be controlled through your browser settings.</li>
                <li>Compatible with screen readers and assistive navigation technologies.</li>
                <li>Adjustable colour contrasts and style sheet options.</li>
              </ul>
              <p>
                <strong>Browser Text Size:</strong> You can change text size through your browser. For example, in most browsers, use Ctrl++ to increase or Ctrl+- to decrease font size.
              </p>
              <p>
                <strong>Feedback:</strong> If you have suggestions for improving website accessibility, please contact us at info@dpvoffshore.com.
              </p>
              
              <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500">
                <strong>References:</strong><br/>
                Data Privacy Laws in the UAE [2026]: Everything You Need to Know<br/>
                Guide to the UAE’s Personal Data Protection Law
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}