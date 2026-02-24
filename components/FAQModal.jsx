import React from 'react';

export default function FAQModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const faqs = [
    {
      question: "Who is DPV Offshore and Marine Services LLC?",
      answer: "DPV Offshore and Marine Services LLC is a UAE-based offshore and marine service provider specializing in electrical supply, installation, troubleshooting, and welding/fabrication services for marine, oil & gas, and industrial sectors."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve:\n• Offshore oil & gas\n• Marine vessels and shipyards\n• Power plants\n• Industrial facilities\n• Construction and infrastructure projects"
    },
    {
      question: "Where are you located?",
      answer: "We are based in the United Arab Emirates (DMC, Abu Dhabi, Fujairah) and provide services across UAE ports, offshore platforms, and regional projects. We have branches in Sri Lanka, Singapore (Representative office). 24/7, anywhere in any country our talented crew is looking forward to work with you, your vessel in safe hand with us."
    },
    {
      question: "What electrical services do you provide?",
      answer: "We provide:\n• On Board inspection & Technical attendance\n• HV/LV Motor & Alternator Overhauling\n• Control Panels & Safety Systems\n• Circuit Breaker Servicing & Testing\n• Power & Control Panel Fabrication\n• Rewiring & Equipment Replacement\n• Troubleshooting & Rectification\n• Panel Construction\n• Automatic Voltage Regulator (AVR)\n• Switchboards Servicing\n• Transformer Servicing & Testing\n• Cable Laying & Termination\n• Conveyor System Service"
    },
    {
      question: "Do you provide both supply and installation?",
      answer: "Yes. We provide complete solutions including supply, installation, testing, and commissioning depending on client requirements."
    },
    {
      question: "Can you support emergency breakdown services?",
      answer: "Yes. Our technical team is available to support urgent electrical breakdowns and troubleshooting for marine and offshore clients."
    },
    {
      question: "What welding services do you offer?",
      answer: "We offer:\n• Structural fabrication\n• Pipe welding (CS, SS, Alloy)\n• Marine repair welding\n• Equipment modification works\n• Onsite and workshop fabrication"
    },
    {
      question: "Are your welders certified?",
      answer: "Yes. Our welders are qualified and experienced in offshore and marine standards, ensuring high-quality workmanship and compliance with safety requirements."
    },
    {
      question: "Do you provide onsite welding services?",
      answer: "Yes, we provide both onsite and workshop-based fabrication and welding services."
    },
    {
      question: "Do you undertake turnkey projects?",
      answer: "Yes. We can handle turnkey projects including design coordination, supply, installation, testing, and handover."
    },
    {
      question: "How can we request a quotation?",
      answer: "You can request a quotation by:\n• Sending an email with project details\n• Sharing technical drawings and specifications\n• Contacting our sales team directly through the website"
    },
    {
      question: "What information is required for a quotation?",
      answer: "To provide an accurate quotation, we typically require:\n• Scope of work\n• Technical specifications\n• Drawings (if available)\n• Project location\n• Required timeline"
    },
    {
      question: "Do you comply with offshore safety standards?",
      answer: "Yes. Safety is our top priority. We follow industry-standard safety practices and comply with offshore and marine safety regulations."
    },
    {
      question: "Why choose DPV Offshore and Marine Services LLC?",
      answer: "• Experienced technical team\n• Fast response time\n• Competitive pricing\n• Quality workmanship\n• Reliable project execution\n• Strong offshore and marine experience"
    },
    {
      question: "Do you handle small jobs as well as large projects?",
      answer: "Yes. We support both minor repair works and large-scale project executions."
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity">
      
      {/* Modal Container */}
      <div className="bg-white dark:bg-[#0a0f1c] text-gray-800 w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 border dark:border-gray-800">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#030712]">
          <h3 className="text-2xl font-bold text-[#1C1C1C] dark:text-white">Frequently Asked Questions</h3>
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
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-base leading-relaxed">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 dark:bg-[#111827] p-5 rounded-lg border border-gray-100 dark:border-gray-800">
              <h4 className="text-lg font-bold text-[#FF5722] mb-2">{faq.question}</h4>
              {/* Added whitespace-pre-line so the \n characters render as actual line breaks for the bullet points */}
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{faq.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}