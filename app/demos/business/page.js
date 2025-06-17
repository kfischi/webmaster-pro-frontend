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
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600 font-medium">פרויקטים מוצלחים</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">שביעות רצון לקוחות</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">תמיכה טכנית</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">לקוחות עסקיים</div>
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
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">מערכות ניהול</h3>
              <p className="text-gray-600 mb-4">פתרונות ERP ו-CRM מותאמים אישית לעסק שלכם</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪30,000 - ₪100,000</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  ניהול לקוחות
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  דוחות מתקדמים
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  אוטומציה
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">אבטחת מידע</h3>
              <p className="text-gray-600 mb-4">הגנה מלאה על המידע והמערכות הדיגיטליות</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪20,000 - ₪60,000</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  הצפנת נתונים
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  ניטור איומים
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  הדרכות צוות
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">ייעוץ טכנולוגי</h3>
              <p className="text-gray-600 mb-4">ייעוץ מקצועי להטמעת טכנולוגיות מתקדמות</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪500/שעה</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  אבחון מערכות
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  תכנון ארכיטקטורה
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  הדרכת צוותים
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">תמיכה ותחזוקה</h3>
              <p className="text-gray-600 mb-4">תמיכה טכנית 24/7 ותחזוקה שוטפת למערכות</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪2,000/חודש</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  תמיכה 24/7
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  עדכונים שוטפים
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  גיבויים יומיים
                </li>
              </ul>
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
              התחלו עכשיו - ₪2,500
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
