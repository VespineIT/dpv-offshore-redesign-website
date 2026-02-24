// components/GoogleTranslateHelper.jsx
'use client';

import { useEffect } from 'react';

export default function GoogleTranslateHelper() {
  useEffect(() => {
    // Prevent adding the script multiple times
    if (document.getElementById('google-translate-script')) return;

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { 
          pageLanguage: 'en', 
          // Added 'ru' for Russian
          includedLanguages: 'en,fr,de,ru', 
          autoDisplay: false 
        },
        'google_translate_element'
      );
    };
  }, []);

  // We hide this element completely via inline styles
  return <div id="google_translate_element" style={{ display: 'none' }}></div>;
}