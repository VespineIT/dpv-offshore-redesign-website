import React from 'react';
import BaseModal from '../ui/BaseModal';
import { offices } from '@/data/offices';

export default function ContactUsModal({ isOpen, onClose }) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Contact Us & Global Offices"
      subtitle="Our team is ready to support your operations worldwide."
      maxWidth="max-w-6xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offices.map((office) => (
          <div
            key={office.id}
            className="bg-gray-50 dark:bg-[#111827] border border-gray-100 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-black/50 transition-all duration-300 flex flex-col h-full"
          >
            <div className="mb-5">
              <span className="inline-block bg-[#FF5722]/10 text-[#FF5722] text-xs font-bold px-3 py-1 rounded-full mb-3">
                {office.title}
              </span>
              <h4 className="text-xl font-bold text-[#1C1C1C] dark:text-white mb-2">{office.city}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{office.address}</p>
            </div>

            <div className="mt-auto pt-5 border-t border-gray-200 dark:border-gray-700">
              <h5 className="text-xs font-bold text-[#1C1C1C] dark:text-gray-300 mb-2 uppercase tracking-wider">Ports Covered:</h5>
              <ul className="flex flex-wrap gap-2 mb-3">
                {office.ports.map((port, i) => (
                  <li key={i} className="bg-white dark:bg-[#1f2937] text-gray-700 dark:text-gray-300 text-xs px-2.5 py-1 rounded border border-gray-200 dark:border-gray-600">
                    {port}
                  </li>
                ))}
              </ul>

              <div className="mt-4 space-y-4 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-[#0a0f1c] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                {office.contacts.map((contact, i) => (
                  <div key={i} className={i > 0 ? 'pt-4 border-t border-gray-100 dark:border-gray-800' : ''}>
                    {contact.name && (
                      <p>
                        <strong className="text-gray-800 dark:text-gray-200 text-xs uppercase">Contact:</strong> {contact.name}
                        {contact.position && <span className="text-xs text-gray-500 ml-1">({contact.position})</span>}
                      </p>
                    )}
                    {contact.phone && (
                      <p className="mt-1">
                        <strong className="text-gray-800 dark:text-gray-200 text-xs uppercase">Phone:</strong>{' '}
                        <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#FF5722] transition-colors">{contact.phone}</a>
                      </p>
                    )}
                    {contact.email && (
                      <p className="mt-1">
                        <strong className="text-gray-800 dark:text-gray-200 text-xs uppercase">Email:</strong>{' '}
                        <a href={`mailto:${contact.email}`} className="text-[#FF5722] hover:underline break-all ml-1">{contact.email}</a>
                      </p>
                    )}
                  </div>
                ))}
                {office.imo && (
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                    <p><strong className="text-gray-800 dark:text-gray-200 text-xs uppercase">IMO No:</strong> {office.imo}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </BaseModal>
  );
}
