'use client';

import Link from 'next/link';

export default function BusinessDemo() {
  return (
    <div className="min-h-screen bg-gray-50 rtl">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-reverse space-x-4">
              <Link 
                href="/"
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

      {/* 🔥 NEW HERO SECTION - MUCH MORE IMPRESSIVE! */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black">
          {/* Moving Stars */}
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          {/* Live Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-red-600 rounded-full px-6 py-3 mb-6 shadow-2xl animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full mr-3 animate-ping"></div>
              <span className="text-sm font-bold">🔴 LIVE: 1,247 גולשים פעילים עכשיו!</span>
            </div>
          </div>

          {/* Giant Title */}
          <h1 className="text-8xl md:text-9xl font-black mb-8 animate-pulse">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              טכנולוגיה
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              מתקדמת
            </span>
          </h1>

          <p className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400 animate-bounce">
            🚀 בע"ם 🚀
          </p>

          <p className="text-2xl md:text-3xl mb-12 text-cyan-300 animate-pulse">
            💎 פתרונות ברמה של Apple, Google, Microsoft! 💎
          </p>

          {/* Giant Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-16 py-8 rounded-3xl text-3xl font-black hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse">
              🔥 קבלו הצעה עכשיו! 🔥
            </button>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-16 py-8 rounded-3xl text-3xl font-black hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
              💰 ₪2,999 בלבד! 💰
            </button>
          </div>

          {/* Mega Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-6xl font-black text-white mb-2">🔥 500+</div>
              <div className="text-xl text-white font-bold">פרויקטים מטורפים!</div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-6xl font-black text-white mb-2">⚡ 99.9%</div>
              <div className="text-xl text-white font-bold">זמינות מושלמת!</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-6xl font-black text-white mb-2">🚀 24/7</div>
              <div className="text-xl text-white font-bold">תמיכה מהירה!</div>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-6xl font-black text-white mb-2">💎 150+</div>
              <div className="text-xl text-white font-bold">מומחים טובים!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Same as before */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">השירותים שלנו</h2>
            <p className="text-xl text-gray-600">פתרונות טכנולוגיים מתקדמים לכל סוג עסק</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">מעוניינים לקבל אתר כזה לעסק שלכם?</h3>
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
