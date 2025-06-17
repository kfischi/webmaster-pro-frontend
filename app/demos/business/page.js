'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PremiumBusinessDemo() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [visitorCount, setVisitorCount] = useState(1247);
  const [activeUsers, setActiveUsers] = useState(23);
  const [selectedService, setSelectedService] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('he-IL'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate visitor counter
  useEffect(() => {
    const timer = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
      setActiveUsers(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      id: 1,
      icon: "🌐",
      title: "פיתוח אתרים מתקדמים",
      subtitle: "Next.js, React, TypeScript",
      description: "אתרים רספונסיביים עם טכנולוגיות החדישות ביותר, אופטימיזציה מלאה ל-SEO ומהירות טעינה מקסימלית",
      price: "₪15,000 - ₪50,000",
      duration: "2-6 שבועות",
      features: ["React & Next.js 14", "עיצוב רספונסיבי מלא", "אופטימיזציה לSEO", "מהירות טעינה מקסימלית", "אנליטיקס מתקדמים", "תמיכת PWA"],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      clients: ["Microsoft", "Intel", "Teva", "Check Point"]
    },
    {
      id: 2,
      icon: "📱",
      title: "אפליקציות מובייל",
      subtitle: "iOS & Android Native",
      description: "אפליקציות מובייל מתקדמות עם חוויית משתמש מעולה, פוש נוטיפיקציות ואינטגרציות מתקדמות",
      price: "₪25,000 - ₪80,000",
      duration: "3-8 שבועות",
      features: ["React Native", "עיצוב UI/UX מתקדם", "פוש נוטיפיקציות", "אינטגרציות API", "פרסום ב-Store", "אנליטיקס מובייל"],
      technologies: ["React Native", "Swift", "Kotlin", "Firebase"],
      clients: ["Waze", "Fiverr", "JFrog", "Mobileye"]
    },
    {
      id: 3,
      icon: "⚙️",
      title: "מערכות ניהול enterprise",
      subtitle: "ERP, CRM, BI Solutions",
      description: "פתרונות ניהול מתקדמים המותאמים לעסקים גדולים, עם דשבורדים אינטראקטיביים ודוחות בזמן אמת",
      price: "₪50,000 - ₪200,000",
      duration: "6-16 שבועות",
      features: ["ניהול לקוחות מתקדם", "דשבורדים אינטראקטיביים", "דוחות בזמן אמת", "אוטומציה מלאה", "אינטגרציות מערכות", "ביטחון מתקדם"],
      technologies: ["Python", "Django", "PostgreSQL", "Redis"],
      clients: ["Bank Hapoalim", "Clalit", "Elbit Systems", "Rafael"]
    },
    {
      id: 4,
      icon: "🤖",
      title: "פתרונות AI ו-Machine Learning",
      subtitle: "ChatGPT, Computer Vision, NLP",
      description: "אינטגרציית פתרונות בינה מלאכותית מתקדמים לאוטומציה של תהליכים עסקיים ושיפור היעילות",
      price: "₪40,000 - ₪150,000",
      duration: "4-12 שבועות",
      features: ["ChatGPT Integration", "Computer Vision", "NLP Processing", "Predictive Analytics", "Auto ML Pipeline", "Custom AI Models"],
      technologies: ["Python", "TensorFlow", "OpenAI", "AWS ML"],
      clients: ["IDF", "Mossad", "Unit 8200", "IAI"]
    },
    {
      id: 5,
      icon: "☁️",
      title: "Cloud Infrastructure",
      subtitle: "AWS, Azure, Google Cloud",
      description: "תשתיות ענן מתקדמות עם אוטומציה מלאה, ניטור 24/7 וסקיילביליות אינסופית",
      price: "₪30,000 - ₪100,000",
      duration: "3-10 שבועות",
      features: ["Infrastructure as Code", "Auto Scaling", "Load Balancing", "CI/CD Pipelines", "Monitoring & Alerts", "Security Hardening"],
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
      clients: ["Amdocs", "Nice", "Matrix", "Verint"]
    },
    {
      id: 6,
      icon: "🔒",
      title: "Cyber Security Solutions",
      subtitle: "Penetration Testing, SOC",
      description: "פתרונות אבטחת מידע מתקדמים הכוללים בדיקות חדירה, SOC מנוהל וביטחון בזמן אמת",
      price: "₪35,000 - ₪120,000",
      duration: "4-8 שבועות",
      features: ["Penetration Testing", "SOC Managed Service", "Real-time Monitoring", "Threat Intelligence", "Incident Response", "Compliance"],
      technologies: ["Kali Linux", "Metasploit", "Wireshark", "Splunk"],
      clients: ["Ministry of Defense", "Shin Bet", "Bank of Israel", "El Al"]
    }
  ];

  const testimonials = [
    {
      name: "אלון מסק",
      title: "CTO, SpaceX Israel",
      content: "הצוות של טכנולוגיה מתקדמת בנה לנו מערכת ניהול משימות מתקדמת שחסכה לנו מיליוני שקלים. ההטמעה הייתה חלקה והתמיכה מעולה.",
      rating: 5,
      avatar: "🚀"
    },
    {
      name: "שרה כהן",
      title: "VP R&D, Intel Israel",
      content: "אחרי שנים של חיפוש אחר פתרון AI מתקדם, מצאנו את הפתרון המושלם. המערכת עובדת בצורה מדהימה ובדיוק כמו שתכננו.",
      rating: 5,
      avatar: "💻"
    },
    {
      name: "דוד לוי",
      title: "CEO, Check Point Software",
      content: "המומחיות הטכנית והיכולת לספק פתרונות מותאמים לתחום האבטחה הרשימו אותנו מאוד. הפרויקט הסתיים במועד ובתקציב.",
      rating: 5,
      avatar: "🛡️"
    }
  ];

  const stats = [
    { number: "500+", label: "פרויקטים מוצלחים", subtext: "מאז 2018" },
    { number: "99.8%", label: "זמינות מערכות", subtext: "SLA מובטח" },
    { number: "24/7", label: "תמיכה טכנית", subtext: "בעברית ואנגלית" },
    { number: "150+", label: "מהנדסים", subtext: "בישראל ובחו״ל" }
  ];

  const certifications = [
    { name: "ISO 27001", icon: "🏆" },
    { name: "SOC 2 Type II", icon: "🔒" },
    { name: "AWS Advanced", icon: "☁️" },
    { name: "Microsoft Gold", icon: "🥇" }
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
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="m0 40l40-40h-40v40zm40 0v-40h-40l40 40z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
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
                📋 הורידו מצגת חברה
              </button>
            </div>

            {/* Live Certifications */}
            <div className="flex flex-wrap justify-center gap-4 opacity-80">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
                  <span className="text-lg mr-2">{cert.icon}</span>
                  <span className="text-sm font-medium">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300/10 rounded-full animate-bounce"></div>
      </section>

      {/* Live Stats Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
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
      </div>

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
                className={`bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:scale-[1.02] cursor-pointer border-2 ${
                  selectedService === service.id ? 'border-blue-500 ring-4 ring-blue-100' : 'border-transparent'
                }`}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-5xl mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-blue-600 font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-black text-blue-600 mb-1">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500">⏱️ {service.duration}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {selectedService === service.id && (
                  <div className="border-t pt-6 space-y-6">
                    <div>
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

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">🛠️ טכנולוגיות:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
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
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsContactOpen(true);
                      }}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                    >
                      🚀 קבלו הצעת מחיר עבור {service.title}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">מה אומרים עלינו</h2>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="text-6xl mb-4">{testimonials[testimonialIndex].avatar}</div>
              <p className="text-xl mb-6 italic leading-relaxed">
                "{testimonials[testimonialIndex].content}"
              </p>
              <div className="font-bold text-lg">{testimonials[testimonialIndex].name}</div>
              <div className="text-blue-200">{testimonials[testimonialIndex].title}</div>
              
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-reverse space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === testimonialIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
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
                <option>פיתוח אתרים</option>
                <option>אפליקציות מובייל</option>
                <option>מערכות ניהול</option>
                <option>פתרונות AI</option>
                <option>Cloud Infrastructure</option>
                <option>Cyber Security</option>
                <option>לא בטוח - רוצה ייעוץ</option>
              </select>
              
              <textarea
                placeholder="ספרו לנו על הפרויקט: מה המטרה? איזה אתגרים יש לכם? מה התקציב המשוער?"
                rows={4}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl text-xl font-bold hover:shadow-lg transition-all"
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

      {/* Advanced Chat Widget */}
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
                className="text-gray-
