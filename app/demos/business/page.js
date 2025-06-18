'use client';
// FORCE UPDATE - Version 3.0 - NEW NAME

import { useState } from 'react';
import Link from 'next/link';

export default function MegaVideoWebsite() {  // ← שם חדש!
  const [showMessage, setShowMessage] = useState(true);

  if (showMessage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-500 via-purple-600 to-blue-800 flex items-center justify-center text-white">
        <div className="text-center p-8">
          <h1 className="text-8xl font-black mb-8 animate-bounce">
            🔥 עדכון מוצלח! 🔥
          </h1>
          <p className="text-4xl mb-8">האתר עודכן בהצלחה!</p>
          <button 
            onClick={() => setShowMessage(false)}
            className="bg-white text-purple-600 px-12 py-6 rounded-3xl text-3xl font-bold hover:shadow-2xl transition-all transform hover:scale-110"
          >
            🚀 כנסו לאתר החדש!
          </button>
          <p className="text-xl mt-6 opacity-75">לחצו כדי לראות את האתר עם הוידאו!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white rtl">
      {/* MEGA HERO with FAKE VIDEO EFFECT */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* ANIMATED BACKGROUND - FAKE VIDEO EFFECT */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black">
          {/* Moving Grid Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'moveGrid 20s linear infinite'
          }}></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center bg-red-600/80 backdrop-blur-md rounded-full px-8 py-4 mb-8 shadow-2xl animate-pulse border border-red-400">
              <div className="w-4 h-4 bg-white rounded-full mr-4 animate-ping"></div>
              <span className="text-lg font-bold">🔴 LIVE: אתר חדש עם וידאו!</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 drop-shadow-2xl">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              טכנולוגיה
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-bounce">
              מתקדמת
            </span>
          </h1>

          <p className="text-3xl md:text-5xl font-bold mb-8 text-yellow-400 drop-shadow-lg animate-pulse">
            🚀 בע"ם - עם וידאו! 🚀
          </p>

          <p className="text-xl md:text-3xl mb-12 text-cyan-300 drop-shadow-lg">
            💎 עכשיו עם וידאו רקע מטורף! 💎
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-12 py-6 rounded-3xl text-2xl font-black hover:shadow-2xl transition-all duration-500 transform hover:scale-110 animate-pulse border-4 border-yellow-300">
              🔥 וידאו עובד! 🔥
            </button>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 py-6 rounded-3xl text-2xl font-black hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border-4 border-blue-300">
              💰 אתר חדש! 💰
            </button>
          </div>

          {/* Mega Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-red-600/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-all border border-red-400">
              <div className="text-4xl font-black mb-2">🔥 LIVE</div>
              <div className="text-lg font-bold">וידאו רקע!</div>
            </div>
            <div className="bg-green-600/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-all border border-green-400">
              <div className="text-4xl font-black mb-2">⚡ NEW</div>
              <div className="text-lg font-bold">עיצוב מטורף!</div>
            </div>
            <div className="bg-purple-600/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-all border border-purple-400">
              <div className="text-4xl font-black mb-2">🚀 MEGA</div>
              <div className="text-lg font-bold">אנימציות!</div>
            </div>
            <div className="bg-yellow-600/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-all border border-yellow-400">
              <div className="text-4xl font-black mb-2">💎 PRO</div>
              <div className="text-lg font-bold">רמה עולמית!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with IMAGES */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-16 text-white">🛠️ השירותים החדשים</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "🌐 אתרים עם וידאו",
                price: "₪15,000-₪50,000",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                title: "📱 אפליקציות מתקדמות",
                price: "₪25,000-₪80,000", 
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
                gradient: "from-purple-500 to-pink-600"
              },
              {
                title: "🤖 AI עם וידאו",
                price: "₪40,000-₪150,000",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
                gradient: "from-green-500 to-blue-600"
              },
              {
                title: "☁️ Cloud מתקדם",
                price: "₪30,000-₪100,000",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
                gradient: "from-cyan-500 to-blue-600"
              },
              {
                title: "🔒 אבטחה מתקדמת",
                price: "₪35,000-₪120,000",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
                gradient: "from-red-500 to-orange-600"
              },
              {
                title: "⚙️ מערכות Enterprise",
                price: "₪50,000-₪200,000",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                gradient: "from-indigo-500 to-purple-600"
              }
            ].map((service, i) => (
              <div key={i} className="group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:scale-105 transition-all duration-500">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">{service.title}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                    {service.price}
                  </div>
                  <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all`}>
                    🚀 קבלו הצעת מחיר
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio with REAL IMAGES */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-16 text-white">📂 פרויקטים עם תמונות אמיתיות</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Intel Israel", project: "מערכת AI מתקדמת", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop" },
              { name: "Microsoft", project: "פלטפורמת Cloud", image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop" },
              { name: "Waze", project: "אפליקציית ניווט", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
              { name: "צה\"ל", project: "מערכת זיהוי AI", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop" },
              { name: "Check Point", project: "פלטפורמת אבטחה", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop" },
              { name: "בנק הפועלים", project: "מערכת בנקאות", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.project} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                  />
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

      {/* Team with REAL PHOTOS */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-16 text-white">👥 הצוות עם תמונות אמיתיות</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "דר' מיכאל כהן", role: "CTO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
              { name: "רחל לוי", role: "Lead Developer", image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&crop=face" },
              { name: "יוסי דהן", role: "Security Expert", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
              { name: "שרה אברהם", role: "AI Researcher", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" }
            ].map((member, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center shadow-2xl border border-white/20 hover:scale-105 transition-all">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg hover:scale-110 transition-transform" 
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-yellow-400 font-bold mb-4">{member.role}</p>
                <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                  💬 צ'אט עם {member.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Gallery */}
      <div className="fixed bottom-6 left-6 z-40">
        <Link 
          href="/"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center space-x-reverse space-x-2"
        >
          <span>←</span>
          <span>חזרה לגלריה</span>
        </Link>
      </div>

      {/* CTA Footer */}
      <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h3 className="text-5xl font-bold mb-6">🎯 האתר החדש עם וידאו!</h3>
          <p className="text-2xl mb-8">WebMaster Pro - עכשיו עם וידאו רקע מטורף!</p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="bg-white text-purple-600 px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              🚀 התחילו עכשיו - ₪2,999
            </button>
            <button className="bg-green-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-green-700 transition-all duration-300">
              📞 התקשרו מיד
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes moveGrid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
}
