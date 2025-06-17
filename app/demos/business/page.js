'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BusinessDemo() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 rtl">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
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

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-black/50 absolute z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            טכנולוגיה מתקדמת בע"ם
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            פתרונות טכנולוגיים מתקדמים ברמה של Silicon Valley
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
            >
              🚀 קבלו הצעת מחיר
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white hover:text-blue-600 transition-all">
              📱 הורידו קטלוג
            </button>
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
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">99.9%</div>
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

      {/* Services Section with Real Images */}
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
            {/* Service 1 - Web Development */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
                  alt="Web Development"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
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
            </div>

            {/* Service 2 - Mobile Apps */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
                  alt="Mobile Development"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
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
            </div>

            {/* Service 3 - AI Solutions */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
                  alt="AI Technology"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
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

            {/* Service 4 - Cloud Infrastructure */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
                  alt="Cloud Infrastructure"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
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
            </div>

            {/* Service 5 - Cyber Security */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
                  alt="Cyber Security"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
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
            </div>

            {/* Service 6 - Enterprise Systems */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
                  alt="Enterprise Systems"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
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
        </div>
      </section>

      {/* Portfolio Section with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">פרויקטים נבחרים</h2>
            <p className="text-xl text-gray-600">חלק מהפרויקטים שביצענו עבור לקוחותינו</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop"
                  alt="Intel Project"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">מערכת ניהול Intel</h3>
                <p className="text-sm text-blue-600 mb-3">Intel Israel</p>
                <p className="text-gray-600 text-sm mb-4">מערכת ניהול פרויקטים מתקדמת</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Node.js</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
                  alt="Waze Project"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">אפליקציית Waze</h3>
                <p className="text-sm text-blue-600 mb-3">Waze</p>
                <p className="text-gray-600 text-sm mb-4">אפליקציית ניווט enterprise</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React Native</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Firebase</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
                  alt="IDF AI Project"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">פתרון AI צה"ל</h3>
                <p className="text-sm text-blue-600 mb-3">IDF</p>
                <p className="text-gray-600 text-sm mb-4">מערכת זיהוי תמונות מתקדמת</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Real Photos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">הצוות שלנו</h2>
            <p className="text-xl text-gray-600">מומחים מובילים בתחום הטכנולוגיה</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-center">
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="Dr. Michael Cohen"
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">דר' מיכאל כהן</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm mb-4">מומחה AI עם 20+ שנות ניסיון. לשעבר Intel</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">AI</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">ML</span>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-center">
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face"
                    alt="Rachel Levy"
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">רחל לוי</h3>
                <p className="text-blue-600 font-medium mb-3">Lead Full Stack Developer</p>
                <p className="text-gray-600 text-sm mb-4">מפתחת senior עם התמחות ב-React. לשעבר Google</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Node.js</span>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-center">
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Yossi Dahan"
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">יוסי דהן</h3>
                <p className="text-blue-600 font-medium mb-3">Head of Cyber Security</p>
                <p className="text-gray-600 text-sm mb-4">מומחה אבטחה עם רקע ביחידה 8200</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Security</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Pentesting</span>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-center">
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                    alt="Sarah Abraham"
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">שרה אברהם</h3>
                <p className="text-blue-600 font-medium mb-3">AI Research Scientist</p>
                <p className="text-gray-600 text-sm mb-4">חוקרת AI. לשעבר Microsoft Research</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">CV</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">NLP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          >
            <span className="text-2xl">💬</span>
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div>
                <h4 className="font-semibold">💬 צ'אט עם המומחים</h4>
                <p className="text-sm opacity-90">3 מומחים זמינים עכשיו</p>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            
            <div className="flex-1 p-4 space-y-3">
              <div className="flex items-center space-x-reverse space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                    מ
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">דר' מיכאל כהן - CTO</div>
                  <div className="text-xs text-green-600">זמין עכשיו</div>
                  <div className="text-xs text-gray-500">AI & Machine Learning</div>
                </div>
              </div>

              <div className="flex items-center space-x-reverse space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                    ר
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">רחל לוי - Lead Dev</div>
                  <div className="text-xs text-green-600">זמינה עכשיו</div>
                  <div className="text-xs text-gray-500">Full Stack Development</div>
                </div>
              </div>

              <div className="flex items-center space-x-reverse space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                    י
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">יוסי דהן - Security</div>
                  <div className="text-xs text-green-600">זמין עכשיו</div>
                  <div className="text-xs text-gray-500">Cyber Security</div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t">
              <button
                onClick={() => setIsContactOpen(true)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                התחילו שיחה
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Contact Form Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">🚀 בואו נתחיל פרויקט</h3>
                <p className="text-gray-600 mt-2">מענה תוך 2 שעות מובטח</p>
              </div>
              <button
                onClick={() => setIsContactOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="שם מלא *"
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <input
                  type="email"
                  placeholder="אימייל *"
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="טלפון *"
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <select className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option>סוג הפרויקט *</option>
                  <option>אתר אינטרנט</option>
                  <option>אפליקציית מובייל</option>
                  <option>פתרון AI</option>
                  <option>מערכת ניהול</option>
                  <option>אבטחת מידע</option>
                  <option>אחר</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="שם החברה"
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              
              <textarea
                placeholder="ספרו לנו על הפרויקט שלכם - מה המטרה, איזה פיצ'רים אתם צריכים, ומה התקציב המשוער? *"
                rows={5}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              ></textarea>

              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="font-semibold text-blue-900 mb-2">💎 מה תקבלו:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>✓ ייעוץ ראשוני חינם (שווה ₪1,500)</li>
                  <li>✓ הצעת מחיר מפורטת תוך 24 שעות</li>
                  <li>✓ אפשרות לפגישת zoom עם המומחים</li>
                  <li>✓ הערכת היתכנות טכנית מקצועית</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                🚀 שלחו בקשה - קבלו מענה תוך 2 שעות!
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                * שדות חובה | המידע מוגן ולא יועבר לצדדים שלישיים
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Call to Action Footer */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h3 className="text-4xl font-bold mb-6">
            🎯 מעוניינים לקבל אתר כזה לעסק שלכם?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            <span className="font-semibold">WebMaster Pro</span> יכולה לבנות לכם אתר מקצועי ומותאם אישית ברמה של חברות Fortune 500
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="text-2xl font-bold mb-2">🔥 מבצע השקה מיוחד!</div>
            <div className="text-lg mb-2">
              <span className="line-through opacity-60">₪4,999</span>
              <span className="text-3xl font-bold text-yellow-400 mx-3">₪2,999</span>
              <span className="text-sm">(חיסכון של ₪2,000!)</span>
            </div>
            <div className="text-sm opacity-75">⏰ המבצע מסתיים בעוד 3 ימים</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              🚀 התחילו עכשיו - ₪2,999
            </button>
            <a 
              href="tel:+972501234567"
              className="bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-blue-800 transition-all duration-300 border-2 border-white/20"
            >
              📞 התקשרו מיד - 050-123-4567
            </a>
          </div>
          
          <div className="mt-8 text-sm opacity-75">
            💎 כולל: עיצוב מותאם | פיתוח מקצועי | 3 חודשי תמיכה | אחריות שנה
          </div>
        </div>
      </div>
    </div>
  );
}
