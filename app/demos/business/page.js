'use client';

import Link from 'next/link';

export default function BusinessDemo() {
  return (
    <div className="min-h-screen bg-gray-50 rtl">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-800"
            >
              ← חזרה לגלריה
            </Link>
            <h1 className="text-xl font-bold">טכנולוגיה מתקדמת בע"ם</h1>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">
            טכנולוגיה מתקדמת בע"ם
          </h1>
          <p className="text-xl mb-8">
            פתרונות טכנולוגיים מתקדמים ברמה של Silicon Valley
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold">
            צרו קשר
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">השירותים שלנו</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-4">פיתוח אתרים</h3>
              <p className="text-gray-600 mb-4">אתרים מתקדמים עם React</p>
              <div className="text-2xl font-bold text-blue-600">₪15,000-₪50,000</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-4">אפליקציות מובייל</h3>
              <p className="text-gray-600 mb-4">אפליקציות iOS ו-Android</p>
              <div className="text-2xl font-bold text-blue-600">₪25,000-₪80,000</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-4">פתרונות AI</h3>
              <p className="text-gray-600 mb-4">בינה מלאכותית מתקדמת</p>
              <div className="text-2xl font-bold text-blue-600">₪40,000-₪150,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">
            מעוניינים לקבל אתר כזה?
          </h3>
          <p className="text-xl mb-8">
            WebMaster Pro יכולה לבנות לכם אתר מקצועי
          </p>
          <Link 
            href="/"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold"
          >
            התחלו עכשיו - ₪2,999
          </Link>
        </div>
      </div>
    </div>
  );
}
