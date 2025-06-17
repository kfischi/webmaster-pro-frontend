# קובץ 3: החלפה מלאה של app/page.js

**מה לעשות:**
1. ב-GitHub פתח: `app/page.js` (הקובץ הקיים)
2. לחץ על העיפרון (Edit)
3. **מחק את כל התוכן הישן**
4. הדבק את הקוד החדש המלא למטה:

```javascript
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      name: "עסק מקומי",
      description: "תבנית מושלמת לעסקים מקומיים - חברות הייטק, שירותי יועצים ועוד",
      image: "/templates/local-business.jpg",
      category: "עסקי",
      price: "₪2,500",
      demoUrl: "/demos/business"
    },
    {
      id: 2,
      name: "מסעדה ובתי קפה",
      description: "תבנית מותאמת למסעדות, בתי קפה ועסקי הגסטרונומיה",
      image: "/templates/restaurant.jpg",
      category: "מסחרי",
      price: "₪3,000",
      demoUrl: "#"
    },
    {
      id: 3,
      name: "רופא/קליניקה",
      description: "תבנית מקצועית לרופאים, מרפאות וקליניקות רפואיות",
      image: "/templates/medical.jpg",
      category: "מקצועי",
      price: "₪3,500",
      demoUrl: "#"
    },
    {
      id: 4,
      name: "חנות אונליין",
      description: "תבנית מתקדמת לחנויות אונליין עם מערכת הזמנות",
      image: "/templates/ecommerce.jpg",
      category: "מסחרי",
      price: "₪4,000",
      demoUrl: "#"
    }
  ];

  const handleTemplateSelect = async (template) => {
    setSelectedTemplate(template);
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/templates/select`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          templateId: template.id,
          templateName: template.name,
          price: template.price
        }),
      });

      const data = await response.json();
      console.log('Template selected:', data);
      
      // הצגת הודעת הצלחה
      alert(`נבחרה תבנית: ${template.name}\nמחיר: ${template.price}\nנחזור אליך תוך 24 שעות!`);
    } catch (error) {
      console.error('Error selecting template:', error);
      alert('שגיאה בבחירת התבנית. אנא נסה שוב.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-reverse space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WebMaster Pro
              </h1>
            </div>
            <nav className="hidden md:flex space-x-reverse space-x-8">
              <a href="#templates" className="text-gray-700 hover:text-blue-600 transition-colors">תבניות</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">מחירים</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">צור קשר</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            🚀 WebMaster Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slide-up">
            צור אתרים מקצועיים עם AI מתקדם תוך דקות ספורות
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a 
              href="#templates" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
            >
              התחל עכשיו
            </a>
            <a 
              href="#pricing" 
              className="bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-medium border-2 border-gray-200 hover:border-blue-300 transition-all"
            >
              צפה במחירים
            </a>
          </div>
        </div>
      </section>

      {/* Templates Gallery */}
      <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              תבניות מקצועיות
            </h2>
            <p className="text-xl text-gray-600">
              בחר מתוך מגוון תבניות מעוצבות במיוחד עבור עסקך
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template) => (
              <div 
                key={template.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  selectedTemplate?.id === template.id ? 'ring-4 ring-blue-500' : ''
                }`}
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-6xl">
                    {template.id === 1 && '🏢'}
                    {template.id === 2 && '🍽️'}
                    {template.id === 3 && '👨‍⚕️'}
                    {template.id === 4 && '🛒'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{template.name}</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {template.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">{template.price}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleTemplateSelect(template)}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      התחל לבנות עם {template.name} - {template.price}
                    </button>
                    <Link 
                      href={template.demoUrl}
                      className="w-full text-center text-blue-600 text-sm font-medium hover:underline py-2"
                    >
                      צפה בדמו →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            מחירים שקופים
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            ללא עלויות נסתרות, ללא מנויים חודשיים
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">חבילה בסיסית</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₪2,500 - ₪3,000</div>
              <ul className="text-right space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  עיצוב מקצועי ורספונסיבי
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  אופטימיזציה למנועי חיפוש
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  טופס יצירת קשר
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 ml-2">✓</span>
                  חיבור לרשתות חברתיות
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                מומלץ
              </div>
              <h3 className="text-2xl font-bold mb-4">חבילה מתקדמת</h3>
              <div className="text-4xl font-bold mb-6">₪3,500 - ₪4,000</div>
              <ul className="text-right space-y-3">
                <li className="flex items-center">
                  <span className="text-green-300 ml-2">✓</span>
                  כל מה שיש בחבילה הבסיסית
                </li>
                <li className="flex items-center">
                  <span className="text-green-300 ml-2">✓</span>
                  מערכת ניהול תוכן
                </li>
                <li className="flex items-center">
                  <span className="text-green-300 ml-2">✓</span>
                  אינטגרציה עם מערכות CRM
                </li>
                <li className="flex items-center">
                  <span className="text-green-300 ml-2">✓</span>
                  תמיכה טכנית 6 חודשים
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            צרו קשר עוד היום ותקבלו אתר מקצועי תוך 7 ימי עבודה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+972501234567" 
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
            >
              📞 התקשרו עכשיו
            </a>
            <a 
              href="mailto:info@webmasterpro.co.il" 
              className="bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-medium border-2 border-gray-200 hover:border-blue-300 transition-all"
            >
              ✉️ שלחו מייל
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-reverse space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">W</span>
                </div>
                <span className="text-xl font-bold">WebMaster Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                פתרונות אתרים מקצועיים עם טכנולוגיית AI מתקדמת
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">שירותים</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>בניית אתרים</li>
                <li>עיצוב UI/UX</li>
                <li>אופטימיזציה לSEO</li>
                <li>תחזוקה שוטפת</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">תמיכה</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>מרכז עזרה</li>
                <li>צ'אט חי</li>
                <li>טלפון: 050-123-4567</li>
                <li>info@webmasterpro.co.il</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">עקבו אחרינו</h4>
              <div className="flex space-x-reverse space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">פייסבוק</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">אינסטגרם</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">לינקדאין</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 WebMaster Pro. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
```

5. לחץ: "Commit changes"

**זהו! זה הקובץ המלא עם כל הקישורים לדמויים! 🎉**
