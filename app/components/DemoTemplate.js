// app/components/DemoTemplate.js
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function DemoTemplate({ 
  children, 
  title, 
  category, 
  description,
  demoType = 'business' 
}) {
  const [showBackButton, setShowBackButton] = useState(false);

  // דמויים זמינים
  const demos = [
    { id: 'business', name: 'עסק מקומי', path: '/demos/business', available: true },
    { id: 'medical', name: 'רופא/קליניקה', path: '/demos/medical', available: false },
    { id: 'restaurant', name: 'מסעדה', path: '/demos/restaurant', available: false },
    { id: 'ecommerce', name: 'חנות אונליין', path: '/demos/ecommerce', available: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Navigation Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link 
              href="/"
              className="flex items-center bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors"
            >
              <span className="ml-2">←</span>
              <span>חזרה לגלריה</span>
            </Link>
            
            <div className="hidden md:flex items-center">
              <span className="text-yellow-300 ml-2">🎭</span>
              <span className="font-semibold">דמו: {title}</span>
              <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-sm mr-2">
                {category}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="hidden md:block text-sm opacity-90">
              נוצר עם WebMaster Pro
            </span>
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">WP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="relative">
        {children}
      </div>

      {/* Demo Footer Overlay */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold mb-2">אהבתם את הדמו?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              זה רק טעימה מהתבנית "{title}". אנחנו יכולים להתאים אותה בדיוק לעסק שלכם 
              עם התוכן, הצבעים והתכונות שאתם צריכים.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-semibold mb-1">עיצוב מותאם</h4>
              <p className="text-sm text-gray-300">צבעים, גופנים ועיצוב לפי הברנד שלכם</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4">
              <div className="text-3xl mb-2">📝</div>
              <h4 className="font-semibold mb-1">תוכן מקצועי</h4>
              <p className="text-sm text-gray-300">טקסטים מותאמים לעסק שלכם עם SEO</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold mb-1">תכונות מתקדמות</h4>
              <p className="text-sm text-gray-300">מערכות הזמנה, תשלומים ועוד</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              onClick={() => {
                window.location.href = '/#contact';
              }}
            >
              רוצה אתר כזה - בואו נדבר!
            </motion.button>
            
            <Link 
              href="/"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              חזרה לגלריה
            </Link>
          </div>

          {/* Other Demos */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h4 className="text-lg font-semibold mb-4">דמויים נוספים:</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {demos.map(demo => (
                demo.available ? (
                  <Link
                    key={demo.id}
                    href={demo.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      demo.id === demoType 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white'
                    }`}
                  >
                    {demo.name}
                  </Link>
                ) : (
                  <span
                    key={demo.id}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-600 text-gray-400 cursor-not-allowed"
                  >
                    {demo.name} (בקרוב)
                  </span>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
