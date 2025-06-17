'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BusinessDemo() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [visitorCount, setVisitorCount] = useState(1247);
  const [activeUsers, setActiveUsers] = useState(23);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('he-IL'));
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
      setActiveUsers(prev => Math.max(15, prev + (Math.random() > 0.5 ? 1 : -1)));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      id: 1,
      icon: "🌐",
      title: "פיתוח אתרים מתקדמים",
      description: "אתרים רספונסיביים עם טכנולוגיות החדישות ביותר - React, Next.js, TypeScript",
      price: "₪15,000 - ₪50,000",
      duration: "2-6 שבועות",
      features: ["React & Next.js 14", "עיצוב רספונסיבי מלא", "אופטימיזציה לSEO", "מהירות טעינה מקסימלית"],
      clients: ["Microsoft", "Intel", "Teva", "Check Point"]
    },
    {
      id: 2,
      icon: "📱",
      title: "אפליקציות מובייל",
      description: "אפליקציות iOS ו-Android מתקדמות עם חוויית משתמש מעולה ופיצ'רים מתקדמים",
      price: "₪25,000 - ₪80,000",
      duration: "3-8 שבועות",
      features: ["React Native", "עיצוב UI/UX מתקדם", "פוש נוטיפיקציות", "אינטגרציות API"],
      clients: ["Waze", "Fiverr", "JFrog", "Mobileye"]
    },
    {
      id: 3,
      icon: "🤖",
      title: "פתרונות AI ו-Machine Learning",
      description: "בינה מלאכותית מתקדמת לאוטומציה של תהליכים עסקיים ושיפור היעילות",
      price: "₪40,000 - ₪150,000",
      duration: "4-12 שבועות",
      features: ["ChatGPT Integration", "Computer Vision", "NLP Processing", "Predictive Analytics"],
      clients: ["IDF", "Mossad", "Unit 8200", "IAI"]
    },
    {
      id: 4,
      icon: "☁️",
      title: "Cloud Infrastructure",
      description: "תשתיות ענן מתקדמות עם אוטומציה מלאה, ניטור 24/7 וסקיילביליות",
      price: "₪30,000 - ₪100,000",
      duration: "3-10 שבועות",
      features: ["AWS/Azure/GCP", "Kubernetes", "Auto Scaling", "CI/CD Pipelines"],
      clients: ["Amdocs", "Nice", "Matrix", "Verint"]
    },
    {
      id: 5,
      icon: "🔒",
      title: "Cyber Security Solutions",
      description: "פתרונות אבטחת מידע מתקדמים עם בדיקות חדירה וניטור בזמן אמת",
      price: "₪35,000 - ₪120,000",
      duration: "4-8 שבועות",
      features: ["Penetration Testing", "SOC Managed Service", "Real-time Monitoring", "Compliance"],
      clients: ["Ministry of Defense", "Shin Bet", "Bank of Israel", "El Al"]
    },
    {
      id: 6,
      icon: "⚙️",
      title: "מערכות ניהול Enterprise",
      description: "פתרונות ניהול מתקדמים עם דשבורדים אינטראקטיביים ודוחות בזמן אמת",
      price: "₪50,000 - ₪200,000",
      duration: "6-16 שבועות",
      features: ["ERP Systems", "CRM Integration", "BI Dashboards", "Process Automation"],
      clients: ["Bank Hapoalim", "Clalit", "Elbit Systems", "Rafael"]
    }
  ];

  const stats = [
    { number: "500+", label: "פרויקטים מוצלחים", subtext: "מאז 2018" },
    { number: "99.8%", label: "זמינות מערכות", subtext: "SLA מובטח" },
    { number: "24/7", label: "תמיכה טכנית", subtext: "בעברית ואנגלית" },
    { number: "150+", label: "מהנדסים", subtext: "בישראל ובחו״ל" }
  ];

  const testimonials = [
    {
      name: "אלון מסק",
      title: "CTO, SpaceX Israel",
      content: "הצוות של טכנולוגיה מתקדמת בנה לנו מערכת ניהול משימות שחסכה מיליוני שקלים. המקצועיות מרשימה.",
      avatar: "🚀"
    },
    {
      name: "שרה כהן",
      title: "VP R&D, Intel Israel",
      content: "אחרי שנים של חיפוש אחר פתרון AI מתקדם, מצאנו את הפתרון המושלם. המערכת עובדת בדיוק כמו שתכננו.",
      avatar: "💻"
    },
    {
      name: "דוד לוי",
      title: "CEO, Check Point Software",
      content: "המומחיות הטכנית והיכולת לספק פתרונות מותאמים לתחום האבטחה הרשימו אותנו מאוד.",
      avatar: "🛡️"
    }
  ];

  const portfolioProjects = [
    {
      title: "מערכת ניהול Intel Israel",
      description: "מערכת ניהול פרויקטים מתקדמת עם דשבורדים בזמן אמת",
      client: "Intel Israel",
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "אפליקציית Waze Enterprise",
      description: "אפליקציית ניווט enterprise עם ניהול צי רכבים",
      client: "Waze",
      tech: ["React Native", "GraphQL", "Firebase"]
    },
    {
      title: "פתרון AI עבור צה\"ל",
      description: "מערכת זיהוי תמונות מתקדמת עם Computer Vision",
      client: "IDF",
      tech: ["Python", "TensorFlow", "OpenCV"]
    },
    {
      title: "אתר Check Point החדש",
      description: "אתר חברה מתקדם עם פיצ'רי אבטחה",
      client: "Check Point",
      tech: ["Next.js", "TypeScript", "Vercel"]
    }
  ];

  const teamMembers = [
    {
      name: "דר' אלכס כהן",
      title: "CTO & Co-Founder",
      bio: "דוקטור למדעי המחשב מהטכניון, 15 שנות ניסיון בפיתוח מערכות enterprise",
      expertise: ["AI/ML", "Cloud Architecture", "System Design"]
    },
    {
      name: "שרה לוי",
      title: "Head of Design",
      bio: "מעצבת UX/UI מובילה, עבדה ב-Google ו-Facebook",
      expertise: ["UX/UI Design", "Design Systems", "User Research"]
    },
    {
      name: "מיכאל דוד",
      title: "Senior Full-Stack Developer",
      bio: "מפתח בכיר עם 12 שנות ניסיון, התמחות בReact ו-Node.js",
      expertise: ["React/Next.js", "Node.js", "DevOps"]
    },
    {
      name: "רותי ברק",
      title: "Senior Project Manager",
      bio: "מנהלת פרויקטים מוסמכת PMP עם 10 שנות ניסיון",
      expertise: ["Project Management", "Agile/Scrum", "Client Relations"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 rtl">
      {/* Top Bar with Live Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-reverse space-x-6">
            <span>🕐 {currentTime}</span>
            <span>👥 {activeUsers} גולשים פעילים</span>
            <span>📊 {visitorCount.toLocaleString()} ביקורים היום</span>
          </div>
          <div className="flex items-center space-x-reverse space-x-4">
            <span>📞 03-1234567</span>
            <span>✉️ info@techadvanced.co.il</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-reverse space-x-4">
              <Link 
                href="/#templates"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                <span className="mr-2">←</span>
                חזרה לגלריה
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600 font-medium">דמו עסק מקומי</span>
            </div>
            
            <div className="flex items-center space-x-reverse space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">ט</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">טכנולוגיה מתקדמת</div>
                <div className="text-sm text-gray-500">Innovation Since 2018</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <span className="text-green-300 mr-2">🟢</span>
            <span className="text-sm font-medium">זמינים כעת • תגובה תוך 5 דקות</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              טכנולוגיה מתקדמת
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
            הובלת החדשנות הטכנולוגית בישראל
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            פתרונות טכנולוגיים enterprise המותאמים לחברות מובילות • AI • Cloud • Cyber Security • Mobile Apps
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => setIsContactOpen(true)}
              className="group bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center"
            >
              <span className="mr-3">🚀</span>
              קבלו הצעת מחיר בתוך 24 שעות
              <span className="mr-3 group-hover:translate-x-1 transition-transform">←</span>
            </button>
            <button className="border-3 border-white text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white hover:text-blue-600 transition-all">
              📂 צפו בפורטפוליו
            </button>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-4 opacity-80">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
              <span className="text-lg mr-2">🏆</span>
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
              <span className="text-lg mr-2">🔒</span>
              <span className="text-sm font-medium">SOC 2 Type II</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
              <span className="text-lg mr-2">☁️</span>
              <span className="text-sm font-medium">AWS Advanced</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
              <span className="text-lg mr-2">🥇</span>
              <span className="text-sm font-medium">Microsoft Gold</span>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300/10 rounded-full animate-bounce"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-900 font-bold text-lg mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-100 text-blue-800 rounded-full px-6 py-2 text-sm font-bold mb-6">
              💼 השירותים שלנו
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              פתרונות ברמה <span className="text-blue-600">עולמית</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אנחנו עובדים עם החברות הכי מתקדמות בישראל ובעולם
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-5xl mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-blue-600 font-medium">⏱️ {service.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-blue-600 mb-1">
                      {service.price}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">✨ מה כלול:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 ml-2 font-bold">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">🏢 לקוחות נבחרים:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.clients.map((client, clientIndex) => (
                      <span key={clientIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl text-xl font-bold hover:shadow-lg transition-all transform hover:scale-105"
              >
                🚀 שלחו בקשה • תגובה תוך 2 שעות
              </button>
              
              <p className="text-gray-500 text-xs text-center">
                * שדות חובה • המידע שלכם מוגן ומאובטח בהתאם לתקנות הגנת הפרטיות
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 relative"
        >
          💬
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center animate-pulse">
            3
          </span>
        </button>
        
        {isChatOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-3xl shadow-2xl p-6 w-96 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="font-bold text-gray-900">💬 צ'אט עם המומחים</h4>
                <p className="text-sm text-green-600">🟢 זמינים עכשיו</p>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ד
                  </div>
                  <span className="mr-2 font-medium text-gray-900">דני - מומחה טכני</span>
                  <span className="text-xs text-gray-500">עכשיו</span>
                </div>
                <p className="text-sm text-gray-700">
                  👋 שלום! אני דני, מומחה הטכנולוגיה שלנו. איך אני יכול לעזור לכם היום?
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ר
                  </div>
                  <span className="mr-2 font-medium text-gray-900">רותי - מנהלת פרויקטים</span>
                  <span className="text-xs text-gray-500">לפני דקה</span>
                </div>
                <p className="text-sm text-gray-700">
                  יש לנו זמינות לפרויקט חדש החל מהשבוע הבא 🚀
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-2xl">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    א
                  </div>
                  <span className="mr-2 font-medium text-gray-900">אלכס - מומחה AI</span>
                  <span className="text-xs text-gray-500">לפני 2 דקות</span>
                </div>
                <p className="text-sm text-gray-700">
                  🤖 מעוניינים בפתרונות AI? יש לנו הרבה חדשות מרגשות!
                </p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex gap-2 mb-3">
                <button className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors">
                  💰 מה המחיר?
                </button>
                <button className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-xs font-medium hover:bg-green-200 transition-colors">
                  ⏰ כמה זמן?
                </button>
                <button className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors">
                  🎯 איך מתחילים?
                </button>
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="כתבו הודעה..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-xl text-sm font-medium hover:shadow-lg transition-all">
                  שלח
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-2 text-center">
                ⚡ זמן תגובה ממוצע: 45 שניות
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <div className="mb-8">
            <span className="inline-block bg-green-500 text-green-900 rounded-full px-4 py-2 text-sm font-bold mb-6">
              ✨ מיוצר על ידי WebMaster Pro
            </span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black mb-6">
            רוצים אתר כזה <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">לעסק שלכם?</span>
          </h3>
          
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <strong>WebMaster Pro</strong> בונה אתרים ברמה הזאת עבור עסקים מובילים בישראל. 
            כל מה שראיתם כאן - זה בדיוק מה שתקבלו עבור העסק שלכם.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold mb-2">משלוח מהיר</h4>
              <p className="text-gray-300 text-sm">אתר מלא תוך 7-14 ימי עבודה</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold mb-2">התאמה מלאה</h4>
              <p className="text-gray-300 text-sm">מותאם לחלוטין לעסק ולקהל שלכם</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="font-bold mb-2">אחריות מלאה</h4>
              <p className="text-gray-300 text-sm">6 חודשי תמיכה ועדכונים</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-8 mb-8">
            <div className="text-2xl font-black mb-4">🎉 מבצע השקה מיוחד</div>
            <div className="text-4xl font-black mb-2">
              <span className="line-through text-gray-200">₪4,999</span>
              <span className="text-yellow-300 mr-4">₪2,999</span>
            </div>
            <div className="text-lg mb-4">חוסכים ₪2,000 • מבצע לזמן מהוגבל</div>
            <div className="text-sm text-green-100">כולל: עיצוב מותאם + פיתוח מלא + העלאה לאוויר + 6 חודשי תמיכה</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/#contact"
              className="group bg-white text-gray-900 px-10 py-5 rounded-2xl text-xl font-black hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center"
            >
              <span className="mr-3">🚀</span>
              התחילו עכשיו - ₪2,999
              <span className="mr-3 group-hover:translate-x-1 transition-transform">←</span>
            </Link>
            <Link 
              href="tel:+972501234567"
              className="border-3 border-white text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center"
            >
              <span className="mr-3">📞</span>
              התקשרו למחלקת מכירות
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>💳 תשלום בהעברה בנקאית או באשראי • ללא עמלות נוספות</p>
            <p>🎯 מתחייבים למועד אספקה • החזר מלא אם לא מרוצים</p>
          </div>
        </div>
      </div>
    </div>
  );
}
                  onClick={() => setIsContactOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  🚀 קבלו הצעת מחיר עבור {service.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">הפורטפוליו שלנו</h2>
            <p className="text-xl text-gray-600">פרויקטים שביצענו עבור החברות המובילות</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{project.client}</p>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">הצוות שלנו</h2>
            <p className="text-xl text-gray-600">מומחים מובילים בתחום הטכנולוגיה</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">מה אומרים עלינו</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-lg mb-4 italic">"{testimonial.content}"</p>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-blue-200 text-sm">{testimonial.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-900">🚀 בואו נתחיל</h3>
              <button
                onClick={() => setIsContactOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ✕
              </button>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <p className="text-blue-800 text-sm">
                <strong>⚡ תגובה מהירה:</strong> נחזור אליכם תוך 2 שעות עבודה
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="שם מלא *"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                />
                <input
                  type="text"
                  placeholder="תפקיד בחברה"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                />
              </div>
              
              <input
                type="text"
                placeholder="שם החברה *"
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
              />
              
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="אימייל עסקי *"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                />
                <input
                  type="tel"
                  placeholder="טלפון *"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                />
              </div>
              
              <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium">
                <option>איזה שירות מעניין אתכם?</option>
                <option>פיתוח אתרים מתקדמים</option>
                <option>אפליקציות מובייל</option>
                <option>פתרונות AI ו-Machine Learning</option>
                <option>Cloud Infrastructure</option>
                <option>Cyber Security Solutions</option>
                <option>מערכות ניהול Enterprise</option>
                <option>לא בטוח - רוצה ייעוץ</option>
              </select>
              
              <textarea
                placeholder="ספרו לנו על הפרויקט: מה המטרה? איזה אתגרים יש לכם? מה התקציב המשוער?"
                rows={4}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
              ></textarea>
              
              <button
