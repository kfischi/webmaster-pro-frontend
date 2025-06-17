// app/demos/business/page.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import DemoTemplate from '../../components/DemoTemplate';
import Link from 'next/link';

export default function BusinessDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <DemoTemplate 
      title="טכנולוגיה מתקדמת בע״ם" 
      category="עסק מקומי"
      description="דמו של חברת IT מקצועית"
      demoType="business"
    >
      <div className="bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-40">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  TM
                </div>
                <div className="mr-3">
                  <h1 className="text-xl font-bold text-gray-900">טכנולוגיה מתקדמת</h1>
                  <p className="text-sm text-gray-600">פתרונות IT מקצועיים</p>
                </div>
              </div>
              
              <div className="hidden md:flex space-x-8 space-x-reverse">
                <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">בית</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">שירותים</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">אודותינו</a>
                <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">פרויקטים</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">יצירת קשר</a>
              </div>
              
              <div className="hidden md:flex">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  קבלת הצעת מחיר חינם
                </motion.button>
              </div>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            
            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:hidden py-4 space-y-2"
              >
                <a href="#home" className="block text-gray-700 hover:text-blue-600 py-2">בית</a>
                <a href="#services" className="block text-gray-700 hover:text-blue-600 py-2">שירותים</a>
                <a href="#about" className="block text-gray-700 hover:text-blue-600 py-2">אודותינו</a>
                <a href="#portfolio" className="block text-gray-700 hover:text-blue-600 py-2">פרויקטים</a>
                <a href="#contact" className="block text-gray-700 hover:text-blue-600 py-2">יצירת קשר</a>
              </motion.div>
            )}
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  פתרונות טכנולוגיים
                  <span className="block text-yellow-300">מתקדמים לעסק שלכם</span>
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  אנחנו מתמחים בפיתוח תוכנה, אבטחת מידע ופתרונות cloud למגזר העסקי. 
                  עם ניסיון של 15+ שנה בתחום, אנחנו מובילים את הטרנספורמציה הדיגיטלית של העסקים הישראליים.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                  >
                    קבלת ייעוץ חינם
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    הפרויקטים שלנו
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [-20, 20, -20] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-80 h-80 mx-auto bg-white bg-opacity-10 rounded-3xl backdrop-blur-lg p-8"
                >
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">💻</div>
                    <h3 className="text-2xl font-bold mb-4">פתרונות חכמים</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>פיתוח תוכנה</span>
                        <span className="text-green-300">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>אבטחת מידע</span>
                        <span className="text-green-300">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>פתרונות Cloud</span>
                        <span className="text-green-300">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>ייעוץ טכנולוגי</span>
                        <span className="text-green-300">✓</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "200+", label: "פרויקטים הושלמו" },
                { number: "15+", label: "שנות ניסיון" },
                { number: "98%", label: "שביעות רצון לקוחות" },
                { number: "24/7", label: "תמיכה טכנית" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="transform hover:scale-105 transition-transform"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">השירותים שלנו</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                אנחנו מציעים מגוון רחב של פתרונות טכנולוגיים המותאמים לצרכים הספציפיים של העסק שלכם
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🚀",
                  title: "פיתוח תוכנה מותאמת",
                  description: "פיתוח אפליקציות ותוכנות מותאמות אישית לצרכי העסק שלכם. משלב התכנון ועד ההטמעה המלאה.",
                  price: "החל מ-₪25,000"
                },
                {
                  icon: "🔒",
                  title: "אבטחת מידע ו-Cyber",
                  description: "הגנה מלאה על המידע הרגיש של החברה שלכם. בדיקות חדירה, תוכניות הגנה ומערכות גיבוי מתקדמות.",
                  price: "החל מ-₪15,000"
                },
                {
                  icon: "☁️",
                  title: "פתרונות Cloud",
                  description: "מעבר לענן בצורה מאובטחת ויעילה. AWS, Azure, Google Cloud - נבחר את הפלטפורמה הכי מתאימה לכם.",
                  price: "החל מ-₪20,000"
                },
                {
                  icon: "📊",
                  title: "ביג דאטה ו-AI",
                  description: "ניתוח מידע מתקדם וכלי בינה מלאכותית שיעזרו לכם לקבל החלטות עסקיות חכמות יותר.",
                  price: "החל מ-₪30,000"
                },
                {
                  icon: "🌐",
                  title: "אתרי אינטרנט מתקדמים",
                  description: "בניית אתרים מקצועיים עם טכנולוגיות מתקדמות. ממערכות ניהול תוכן ועד פלטפורמות מסחר מקוונות.",
                  price: "החל מ-₪8,000"
                },
                {
                  icon: "🛠️",
                  title: "תמיכה טכנית 24/7",
                  description: "תמיכה טכנית מלאה לכל המערכות שלכם. זמינות גבוהה, תגובה מהירה ופתרון בעיות מקצועי.",
                  price: "החל מ-₪5,000/חודש"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="text-blue-600 font-semibold">{service.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">אודות טכנולוגיה מתקדמת</h2>
                <p className="text-lg text-gray-600 mb-6">
                  החברה שלנו נוסדה ב-2008 ומאז אנחנו מובילים בתחום הפתרונות הטכנולוגיים בישראל. 
                  אנחנו מתמחים בטכנולוגיות מתקדמות ומעניקים פתרונות מותאמים אישית לכל לקוח.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  הצוות שלנו מורכב ממהנדסי תוכנה מנוסים, מומחי אבטחת מידע ויועצי טכנולוגיה 
                  שעובדים יחד כדי להביא לכם את הפתרונות הכי חדשניים בשוק.
                </p>
                <div className="space-y-4">
                  {[
                    "צוות של 25+ מומחי טכנולוגיה",
                    "הסמכות Microsoft, AWS ו-Google Cloud",
                    "ISO 27001 & SOC 2 מאושרים"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full ml-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "👨‍💻", title: "צוות מומחים", desc: "מהנדסי תוכנה בכירים עם ניסיון בחברות הטכנולוגיה הגדולות", color: "bg-blue-100" },
                    { icon: "🏆", title: "פרסים ואישורים", desc: "זוכי פרסי חדשנות וטכנולוגיה מהמובילים בתחום", color: "bg-purple-100" },
                    { icon: "🔒", title: "אבטחה מתקדמת", desc: "פרוטוקולי אבטחה ברמה הגבוהה ביותר לכל הפרויקטים", color: "bg-green-100" },
                    { icon: "⚡", title: "ביצועים מעולים", desc: "מערכות מהירות ויציבות עם זמינות של 99.9%", color: "bg-yellow-100" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`${feature.color} p-6 rounded-xl hover:scale-105 transition-transform`}
                    >
                      <div className="text-3xl mb-2">{feature.icon}</div>
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">בואו נתחיל לעבוד יחד</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                מוכנים לקחת את העסק שלכם לשלב הבא? נשמח לשמוע מכם ולהציע פתרון מותאם אישית
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">פרטי התקשרות</h3>
                <div className="space-y-6">
                  {[
                    { icon: "📞", title: "טלפון", info: "03-1234567" },
                    { icon: "✉️", title: "אימייל", info: "info@techno-advanced.co.il" },
                    { icon: "📍", title: "כתובת", info: "רח' הטכנולוגיה 15, תל אביב" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center ml-4">
                        <span className="text-white text-xl">{contact.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{contact.title}</h4>
                        <p className="text-blue-100">{contact.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">שלחו לנו הודעה</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">שם מלא</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="השם שלכם" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">אימייל</label>
                      <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="הכתובת מייל" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">נושא</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="נושא הפנייה" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">הודעה</label>
                    <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="ספרו לנו על הפרויקט שלכם..."></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    שלח הודעה
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl ml-3">
                  TM
                </div>
                <h3 className="text-2xl font-bold">טכנולוגיה מתקדמת בע"ם</h3>
              </div>
              <p className="text-gray-400 mb-6">פתרונות טכנולוגיים מתקדמים לעסקים חכמים</p>
              <div className="flex justify-center space-x-6 space-x-reverse mb-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">מדיניות פרטיות</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">תנאי שימוש</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">צור קשר</a>
              </div>
              <p className="text-sm text-gray-500">
                © 2024 טכנולוגיה מתקדמת בע"ם. כל הזכויות שמורות. | 
                <span className="text-blue-400"> נוצר עם WebMaster Pro</span>
              </p>
            </div>
          </div>
        </footer>

        {/* Chat Widget */}
        <div className="fixed bottom-6 left-6 z-30">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setChatOpen(!chatOpen)}
            className={`w-16 h-16 rounded-full shadow-lg transition-colors flex items-center justify-center ${
              chatOpen ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            <span className="text-2xl">{chatOpen ? '✕' : '💬'}</span>
          </motion.button>
          
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute bottom-20 left-0 bg-white rounded-lg shadow-xl w-80 h-96"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h4 className="font-semibold">צ'אט עם מומחה</h4>
                <button onClick={() => setChatOpen(false)} className="text-white hover:bg-white hover:bg-opacity-20 rounded">✕</button>
              </div>
              <div className="p-4 h-64 overflow-y-auto">
                <div className="mb-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm">שלום! איך אני יכול לעזור לכם היום?</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm">אנחנו זמינים לייעוץ חינם על כל הפתרונות הטכנולוגיים שלנו 🚀</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t">
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="כתבו את השאלה שלכם..." 
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-l-lg hover:bg-blue-700">שלח</button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </DemoTemplate>
  );
}
