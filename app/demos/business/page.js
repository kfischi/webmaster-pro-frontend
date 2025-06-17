'use client';

import { useState } from 'react';
import DemoTemplate from '../../components/DemoTemplate';

export default function BusinessDemo() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const services = [
    {
      icon: "🌐",
      title: "פיתוח אתרים מתקדמים",
      description: "אתרים רספונסיביים עם טכנולוגיות החדישות ביותר",
      price: "₪15,000 - ₪50,000",
      features: ["React & Next.js", "עיצוב רספונסיבי", "אופטימיזציה לSEO", "מהירות טעינה מקסימלית"]
    },
    {
      icon: "📱",
      title: "אפליקציות מובייל",
      description: "אפליקציות iOS ו-Android עם חוויית משתמש מעולה",
      price: "₪25,000 - ₪80,000",
      features: ["React Native", "עיצוב UI/UX", "אינטגרציות API", "פרסום ב-Store"]
    },
    {
      icon: "⚙️",
      title: "מערכות ניהול",
      description: "פתרונות ERP ו-CRM מותאמים אישית לעסק שלכם",
      price: "₪30,000 - ₪100,000",
      features: ["ניהול לקוחות", "מעקב מכירות", "דוחות מתקדמים", "אוטומציה"]
    },
    {
      icon: "🔒",
      title: "אבטחת מידע",
      description: "הגנה מלאה על המידע והמערכות הדיגיטליות",
      price: "₪20,000 - ₪60,000",
      features: ["הצפנת נתונים", "גיבוי אוטומטי", "ניטור איומים", "הדרכות צוות"]
    },
    {
      icon: "💡",
      title: "ייעוץ טכנולוגי",
      description: "ייעוץ מקצועי להטמעת טכנולוגיות מתקדמות",
      price: "₪500/שעה",
      features: ["אבחון מערכות", "תכנון ארכיטקטורה", "אסטרטגיה דיגיטלית", "הדרכת צוותים"]
    },
    {
      icon: "🛠️",
      title: "תמיכה ותחזוקה",
      description: "תמיכה טכנית 24/7 ותחזוקה שוטפת למערכות",
      price: "₪2,000/חודש",
      features: ["תמיכה 24/7", "עדכונים שוטפים", "מעקב ביצועים", "גיבויים יומיים"]
    }
  ];

  const stats = [
    { number: "200+", label: "פרויקטים מוצלחים" },
    { number: "98%", label: "שביעות רצון לקוחות" },
    { number: "24/7", label: "תמיכה טכנית" },
    { number: "50+", label: "לקוחות עסקיים" }
  ];

  return (
    <DemoTemplate title="דמו עסק מקומי - טכנולוגיה מתקדמת">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              טכנולוגיה מתקדמת בע"ם
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
              פתרונות טכנולוגיים מתקדמים לעסקים מובילים
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
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
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-float-slow"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
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
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {service.price}
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 ml-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          💬
        </button>
        
        {isChatOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-xl p-6 w-80">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-gray-900">צ'אט עם המומחים</h4>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3 mb-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm">שלום! איך אפשר לעזור לכם היום?</p>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="כתבו הודעה..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                שלח
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </DemoTemplate>
  );
}
