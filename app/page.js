// app/page.js
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // דמו templates - נתחיל עם כמה דוגמאות
  const templates = [
    {
      id: 1,
      name: "עסק מקומי",
      description: "תבנית מושלמת לעסקים מקומיים",
      image: "/templates/local-business.jpg",
      category: "עסקי",
      price: "₪2,500"
    },
    {
      id: 2,
      name: "רופא/קליניקה", 
      description: "עיצוב מקצועי לרופאים ובעלי מקצוע",
      image: "/templates/medical.jpg",
      category: "רפואי",
      price: "₪3,000"
    },
    {
      id: 3,
      name: "מסעדה",
      description: "תבנית אלגנטית למסעדות ובתי קפה",
      image: "/templates/restaurant.jpg", 
      category: "מזון",
      price: "₪2,800"
    },
    {
      id: 4,
      name: "חנות אונליין",
      description: "חנות מקוונת מלאה עם עגלת קניות",
      image: "/templates/ecommerce.jpg",
      category: "מסחר",
      price: "₪4,000"
    }
  ];

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    toast.success(`נבחרה תבנית: ${template.name}`);
  };

  const handleStartBuilding = async () => {
    if (!selectedTemplate) {
      toast.error('אנא בחר תבנית קודם');
      return;
    }
    
    setIsLoading(true);
    
    // סימולציה של התחלת בניית האתר
    setTimeout(() => {
      setIsLoading(false);
      toast.success('בניית האתר החלה! נפנה אליך בקרוב');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <h1 className="text-3xl font-bold text-gray-900">
                🚀 WebMaster Pro
              </h1>
              <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                Beta
              </span>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              צור קשר
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              בניית אתרים מקצועית<br />
              <span className="text-blue-600">עם בינה מלאכותית</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              500+ תבניות מקצועיות, עיצוב חכם עם AI, ופתרון מלא לעסק שלך.
              מאתר פשוט ועד חנות מקוונת מלאה - הכל תוך 24 שעות.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-green-600">₪2,500</div>
                <div className="text-sm text-gray-500">אתר מלא + חודש ראשון</div>
              </motion.div>
              <div className="text-gray-400">+</div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-blue-600">₪500/חודש</div>
                <div className="text-sm text-gray-500">אחזקה + AI מתקדם</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Templates Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              בחר את התבנית המושלמת לעסק שלך
            </h3>
            <p className="text-lg text-gray-600">
              500+ תבניות מקצועיות בכל תחום
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  selectedTemplate?.id === template.id ? 'ring-4 ring-blue-500' : ''
                }`}
                onClick={() => handleSelectTemplate(template)}
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-6xl">🎨</div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {template.name}
                    </h4>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {template.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {template.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-green-600">
                      {template.price}
                    </span>
                    <button className="text-blue-600 text-sm font-medium hover:underline">
                      צפה בדמו →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Template & CTA */}
      {selectedTemplate && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16 bg-blue-50"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              נבחרה: {selectedTemplate.name}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {selectedTemplate.description}
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartBuilding}
              disabled={isLoading}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  בונה את האתר שלך...
                </div>
              ) : (
                `התחל לבנות עם ${selectedTemplate.name} - ${selectedTemplate.price}`
              )}
            </motion.button>
            
            <p className="text-sm text-gray-500 mt-4">
              נתקשר אליך תוך 10 דקות לתיאום פגישה
            </p>
          </div>
        </motion.section>
      )}

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-semibold mb-2">AI מתקדם</h4>
              <p className="text-gray-600">
                יצירת תוכן חכם, אופטימיזציה אוטומטית ותמיכה 24/7
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-2">מהירות אור</h4>
              <p className="text-gray-600">
                אתרים מהירים בעולם, SEO מושלם וחוויית משתמש מעולה
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-semibold mb-2">אבטחה מלאה</h4>
              <p className="text-gray-600">
                SSL, גיבויים יומיים והגנה מפני איומי סייבר
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🚀 WebMaster Pro</h3>
          <p className="text-gray-400 mb-6">
            פלטפורמת בניית אתרים מתקדמת עם בינה מלאכותית
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="tel:+972501234567" className="text-blue-400 hover:underline">
              📞 050-123-4567
            </a>
            <a href="mailto:info@webmaster-pro.co.il" className="text-blue-400 hover:underline">
              ✉️ info@webmaster-pro.co.il
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            © 2024 WebMaster Pro. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
}
