'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdvancedVideoSite() {
  const [activeTab, setActiveTab] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  const renderPage = () => {
    switch(activeTab) {
      case 'home':
        return (
          <>
            {/* Hero Section with FULL VIDEO Background */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* VIDEO BACKGROUND - FULL SCREEN */}
              <div className="absolute inset-0 w-full h-full z-0">
                <iframe
                  className="absolute inset-0 w-full h-full object-cover scale-150"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
                  title="Technology Background Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black/70"></div>
              </div>

              {/* Hero Content Over Video */}
              <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
                <div className="mb-8">
                  <div className="inline-flex items-center bg-red-600/80 backdrop-blur-md rounded-full px-8 py-4 mb-8 shadow-2xl animate-pulse border border-red-400">
                    <div className="w-4 h-4 bg-white rounded-full mr-4 animate-ping"></div>
                    <span className="text-lg font-bold">🔴 LIVE: מיליוני צפיות עכשיו!</span>
                  </div>
                </div>

                <h1 className="text-7xl md:text-9xl font-black mb-8 drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                    טכנולוגיה
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-bounce">
                    מתקדמת
                  </span>
                </h1>

                <p className="text-4xl md:text-6xl font-bold mb-8 text-yellow-400 drop-shadow-lg animate-pulse">
                  🚀 בע"ם 🚀
                </p>

                <p className="text-2xl md:text-4xl mb-12 text-cyan-300 drop-shadow-lg">
                  💎 ברמה של Apple, Tesla, SpaceX! 💎
                </p>

                <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-16 py-8 rounded-3xl text-3xl font-black hover:shadow-2xl transition-all duration-500 transform hover:scale-110 animate-pulse border-4 border-yellow-300"
                  >
                    🔥 בואו נתחיל! 🔥
                  </button>
                  <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-16 py-8 rounded-3xl text-3xl font-black hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border-4 border-blue-300">
                    💰 ₪2,999 בלבד! 💰
                  </button>
                </div>
              </div>
            </section>

            {/* Video Gallery Section */}
            <section className="py-20 bg-black">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-16 text-white">🎬 הפרויקטים שלנו בוידאו</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: "Intel Project", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "Microsoft App", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "IDF AI System", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "Waze Platform", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "Bank System", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "Check Point", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                  ].map((project, i) => (
                    <div key={i} className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                      <div className="h-64">
                        <iframe
                          className="w-full h-full"
                          src={project.video}
                          title={project.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                          צפו בפרויקט המלא →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );

      case 'services':
        return (
          <section className="py-20 min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-6xl font-black text-center mb-16 text-white">🛠️ השירותים שלנו</h1>
              
              <div className="grid md:grid-cols-2 gap-12">
                {[
                  {
                    title: "🌐 פיתוח אתרים Enterprise",
                    price: "₪15,000-₪50,000",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    features: ["React 18 + Next.js 14", "AI Integration", "99.9% Uptime", "Real-time Analytics"]
                  },
                  {
                    title: "📱 אפליקציות מובייל מתקדמות",
                    price: "₪25,000-₪80,000", 
                    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
                    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    features: ["React Native + Native", "AR/VR Support", "Push Notifications", "Offline Mode"]
                  },
                  {
                    title: "🤖 פתרונות AI מתקדמים",
                    price: "₪40,000-₪150,000",
                    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
                    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    features: ["GPT-4 Integration", "Computer Vision", "Custom Models", "Real-time Processing"]
                  },
                  {
                    title: "☁️ Cloud Infrastructure",
                    price: "₪30,000-₪100,000",
                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
                    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    features: ["AWS/Azure/GCP", "Kubernetes", "Auto Scaling", "DevOps Pipeline"]
                  }
                ].map((service, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                    <div className="h-64 relative">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <iframe
                          className="w-3/4 h-3/4 rounded-xl"
                          src={service.video}
                          title={service.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                      <div className="text-4xl font-bold text-yellow-400 mb-6">{service.price}</div>
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, j) => (
                          <div key={j} className="flex items-center text-white">
                            <span className="text-green-400 ml-3">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => setIsContactOpen(true)}
                        className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 rounded-xl text-xl font-bold hover:shadow-lg transition-all"
                      >
                        🚀 קבלו הצעת מחיר
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'portfolio':
        return (
          <section className="py-20 min-h-screen bg-black">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-6xl font-black text-center mb-16 text-white">📂 הפורטפוליו שלנו</h1>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: "Intel Israel", project: "מערכת ניהול פרויקטים AI", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop" },
                  { name: "Microsoft", project: "פלטפורמת Cloud Enterprise", image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop" },
                  { name: "Waze", project: "אפליקציית ניווט מתקדמת", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
                  { name: "צה\"ל", project: "מערכת זיהוי AI מסווגת", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop" },
                  { name: "Check Point", project: "פלטפורמת אבטחה 360", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop" },
                  { name: "בנק הפועלים", project: "מערכת בנקאות דיגיטלית", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                    <div className="h-48 relative overflow-hidden">
                      <img src={item.image} alt={item.project} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-xl font-bold">{item.name}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-4">{item.project}</h3>
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                        צפו בפרויקט →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'team':
        return (
          <section className="py-20 min-h-screen bg-gradient-to-br from-purple-900 to-blue-900">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-6xl font-black text-center mb-16 text-white">👥 הצוות שלנו</h1>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { name: "דר' מיכאל כהן", role: "CTO", specialty: "AI & Machine Learning", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
                  { name: "רחל לוי", role: "Lead Developer", specialty: "Full Stack", image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&crop=face" },
                  { name: "יוסי דהן", role: "Security Expert", specialty: "Cyber Security", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
                  { name: "שרה אברהם", role: "AI Researcher", specialty: "Computer Vision", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" }
                ].map((member, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center shadow-2xl border border-white/20 hover:scale-105 transition-all">
                    <div className="relative mb-6">
                      <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg" />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-yellow-400 font-bold mb-2">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-6">{member.specialty}</p>
                    <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                      💬 צ'אט עם {member.name.split(' ')[0]}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'about':
        return (
          <section className="py-20 min-h-screen bg-gradient-to-br from-green-900 to-blue-900">
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-6xl font-black text-center mb-16 text-white">🏢 אודותינו</h1>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-8">🚀 מי אנחנו?</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    אנחנו חברת טכנולוגיה מובילה המתמחה בפיתוח פתרונות מתקדמים ברמה של Silicon Valley. 
                    הצוות שלנו כולל מומחים מהחברות הגדולות בעולם: Google, Microsoft, Intel ויחידה 8200.
                  </p>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    אנחנו מאמינים שטכנולוגיה מתקדמת צריכה להיות נגישה לכל עסק, לא רק לחברות ענק. 
                    לכן אנחנו מביאים לכם פתרונות ברמה עולמית במחירים הוגנים.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-white">
                      <span className="text-3xl mr-4">🎯</span>
                      <span className="text-xl">500+ פרויקטים מוצלחים</span>
                    </div>
                    <div className="flex items-center text-white">
                      <span className="text-3xl mr-4">🏆</span>
                      <span className="text-xl">עובדים עם החברות הגדולות בעולם</span>
                    </div>
                    <div className="flex items-center text-white">
                      <span className="text-3xl mr-4">💎</span>
                      <span className="text-xl">טכנולוגיות החדישות ביותר</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                    alt="Our Team" 
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
          </section>
        );

      case 'contact':
        return (
          <section className="py-20 min-h-screen bg-gradient-to-br from-red-900 to-purple-900">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-6xl font-black text-center mb-16 text-white">📞 צרו קשר</h1>
              
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-8">🚀 בואו נתחיל פרויקט</h2>
                    <div className="space-y-6">
                      <div className="flex items-center text-white">
                        <span className="text-2xl mr-4">📧</span>
                        <span className="text-xl">info@techadvanced.co.il</span>
                      </div>
                      <div className="flex items-center text-white">
                        <span className="text-2xl mr-4">📱</span>
                        <span className="text-xl">050-123-4567</span>
                      </div>
                      <div className="flex items-center text-white">
                        <span className="text-2xl mr-4">🏢</span>
                        <span className="text-xl">תל אביב, מגדל עזריאלי</span>
                      </div>
                      <div className="flex items-center text-white">
                        <span className="text-2xl mr-4">⏰</span>
                        <span className="text-xl">זמינים 24/7</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <form className="space-y-6">
                      <input
                        type="text"
                        placeholder="שם מלא *"
                        className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white"
                      />
                      <input
                        type="email"
                        placeholder="אימייל *"
                        className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white"
                      />
                      <input
                        type="tel"
                        placeholder="טלפון *"
                        className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white"
                      />
                      <textarea
                        placeholder="ספרו לנו על הפרויקט *"
                        rows={5}
                        className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 rounded-xl text-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
                      >
                        🚀 שלחו הודעה
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black rtl">
      {/* MEGA NAVIGATION with 6 Pages */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-reverse space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">🚀</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">טכנולוגיה מתקדמת</div>
                <div className="text-sm text-gray-400">Enterprise Solutions</div>
              </div>
            </div>

            {/* 6 PAGE NAVIGATION */}
            <div className="hidden lg:flex items-center space-x-reverse space-x-8">
              {[
                { id: 'home', label: 'בית', icon: '🏠' },
                { id: 'services', label: 'שירותים', icon: '🛠️' },
                { id: 'portfolio', label: 'פורטפוליו', icon: '📂' },
                { id: 'team', label: 'צוות', icon: '👥' },
                { id: 'about', label: 'אודותינו', icon: '🏢' },
                { id: 'contact', label: 'צור קשר', icon: '📞' }
              ].map((page) => (
                <button
                  key={page.id}
                  onClick={() => setActiveTab(page.id)}
                  className={`flex items-center space-x-reverse space-x-2 px-6 py-3 rounded-xl transition-all duration-300 text-lg font-semibold ${
                    activeTab === page.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-xl">{page.icon}</span>
                  <span>{page.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button className="text-white text-2xl">☰</button>
            </div>
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="pt-20">
        {renderPage()}
      </div>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-8 max-w-2xl w-full border border-white/20">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-white">🚀 בואו נתחיל פרויקט</h3>
              <button
                onClick={() => setIsContactOpen(false)}
                className="text-white hover:text-red-400 text-3xl"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="שם מלא *"
                  className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300"
                />
                <input
                  type="email"
                  placeholder="אימייל *"
                  className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300"
                />
              </div>
              <input
                type="tel"
                placeholder="טלפון *"
                className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300"
              />
              <textarea
                placeholder="ספרו לנו על הפרויקט שלכם *"
                rows={4}
                className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 rounded-xl text-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
              >
                🚀 שלחו בקשה עכשיו!
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Back to Gallery Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <Link 
          href="/"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center space-x-reverse space-x-2"
        >
          <span>←</span>
          <span>חזרה לגלריה</span>
        </Link>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsContactOpen(true)}
          className="bg-gradient-to-r from-red-500 to-yellow-500 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-pulse"
        >
          <span className="text-2xl">🔥</span>
        </button>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h3 className="text-5xl font-bold mb-6">🎯 מעוניינים באתר כזה?</h3>
          <p className="text-2xl mb-8 opacity-90">
            WebMaster Pro יכולה לבנות לכם אתר ברמה של Netflix!
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-12 max-w-3xl mx-auto border border-white/20">
            <div className="text-3xl font-bold mb-4">🔥 מבצע השקה מיוחד!</div>
            <div className="text-2xl mb-4">
              <span className="line-through opacity-60">₪4,999</span>
              <span className="text-4xl font-bold text-yellow-400 mx-4">₪2,999</span>
              <span>(חיסכון ₪2,000!)</span>
            </div>
            <div className="text-lg opacity-75">⏰ המבצע מסתיים בעוד 3 ימים</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-white text-blue-600 px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              🚀 התחילו עכשיו - ₪2,999
            </button>
            <a 
              href="tel:+972501234567"
              className="bg-green-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-green-700 transition-all duration-300"
            >
              📞 התקשרו מיד
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
