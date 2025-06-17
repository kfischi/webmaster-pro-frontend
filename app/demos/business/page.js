'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BusinessDemo() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 rtl">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-reverse space-x-4">
              <Link 
                href="/#templates"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span className="mr-2">←</span>
                חזרה לגלריה
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600 font-medium">דמו עסק מקומי</span>
            </div>
            <div className="flex items-center space-x-reverse space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ט</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                טכנולוגיה מתקדמת בע"ם
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              טכנולוגיה מתקדמת בע"ם
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              פתרונות טכנולוגיים מתקדמים לעסקים מובילים
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
              >
                קבלו הצעת מחיר
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white hover:text-blue-600 transition-all">
                הורידו קטלוג
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">פרויקטים מוצלחים</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-gray-600 font-medium">זמינות מערכות</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">תמיכה טכנית</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">מהנדסים מנוסים</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              השירותים שלנו
            </h2>
            <p className="text-xl text-gray-600">
              פתרונות טכנולוגיים מותאמים לכל סוג עסק
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">פיתוח אתרים מתקדמים</h3>
              <p className="text-gray-600 mb-4">אתרים רספונסיביים עם טכנולוגיות החדישות ביותר</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪15,000 - ₪50,000</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  React & Next.js
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  עיצוב רספונסיבי
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  אופטימיזציה לSEO
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">לקוחות: Microsoft, Intel, Check Point</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">אפליקציות מובייל</h3>
              <p className="text-gray-600 mb-4">אפליקציות iOS ו-Android עם חוויית משתמש מעולה</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪25,000 - ₪80,000</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  React Native
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  עיצוב UI/UX
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  פרסום ב-Store
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">לקוחות: Waze, Fiverr, Mobileye</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">פתרונות AI</h3>
              <p className="text-gray-600 mb-4">בינה מלאכותית מתקדמת לאוטומציה של תהליכים</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪40,000 - ₪150,000</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  ChatGPT Integration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  Computer Vision
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  NLP Processing
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">לקוחות: צה"ל, המוסד, יחידה 8200</p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-4">תשתיות ענן מתקדמות עם אוטומציה מלאה</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪30,000 - ₪100,000</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  AWS/Azure
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  Kubernetes
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  Auto Scaling
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">לקוחות: Amdocs, Nice, Matrix</p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cyber Security</h3>
              <p className="text-gray-600 mb-4">פתרונות אבטחת מידע מתקדמים</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪35,000 - ₪120,000</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  Penetration Testing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  SOC Service
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  Real-time Monitoring
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">לקוחות: משרד הביטחון, בנק ישראל</p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">מערכות ניהול Enterprise</h3>
              <p className="text-gray-600 mb-4">פתרונות ניהול מתקדמים לעסקים גדולים</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪50,000 - ₪200,000</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  ERP Systems
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  CRM Integration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  BI Dashboards
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">לקוחות: בנק הפועלים, כללית</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                מובילים בחדשנות טכנולוגית
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                אנחנו צוות של מתכנתים ומעצבים מנוסים, שמתמחים בפיתוח פתרונות טכנולוגיים מתקדמים עבור עסקים בכל הגדלים.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                המטרה שלנו היא להביא לעסק שלכם את הטכנולוגיות הכי מתקדמות, עם דגש על יעילות, אמינות וחוויית משתמש מעולה.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  צרו קשר עוד היום
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  עיינו בפורטפוליו
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-8xl">💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">פרויקטים נבחרים</h2>
            <p className="text-xl text-gray-600">חלק מהפרויקטים שביצענו עבור לקוחותינו</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">מערכת ניהול Intel</h3>
              <p className="text-sm text-blue-600 mb-3">Intel Israel</p>
              <p className="text-gray-600 text-sm mb-4">מערכת ניהול פרויקטים מתקדמת</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Node.js</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">אפליקציית Waze</h3>
              <p className="text-sm text-blue-600 mb-3">Waze</p>
              <p className="text-gray-600 text-sm mb-4">אפליקציית ניווט enterprise</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React Native</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Firebase</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">פתרון AI צה"ל</h3>
              <p className="text-sm text-blue-600 mb-3">IDF</p>
              <p className="text-gray-600 text-sm mb-4">מערכת זיהוי תמונות מתקדמת</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">AI</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">אתר Check Point</h3>
              <p className="text-sm text-blue-600 mb-3">Check Point</p>
              <p className="text-gray-600 text-sm mb-4">אתר חברה עם פיצ'רי אבטחה</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Next.js</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">צרו קשר</h3>
              <button
                onClick={() => setIsContactOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="שם מלא"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="אימייל"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="טלפון"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                placeholder="ספרו לנו על הפרויקט שלכם"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                שלחו הודעה
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Call to Action Footer */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">
            מעוניינים לקבל אתר כזה לעסק שלכם?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            WebMaster Pro יכולה לבנות לכם אתר מקצועי ומותאם אישית תוך 7 ימי עבודה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
            >
              התחלו עכשיו - ₪2,999
            </Link>
            <Link 
              href="tel:+972501234567"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all"
            >
              📞 התקשרו מיד
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
