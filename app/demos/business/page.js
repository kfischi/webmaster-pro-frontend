'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function MillionDollarDemo() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [visitorCount, setVisitorCount] = useState(1247);
  const [onlineUsers, setOnlineUsers] = useState(23);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);

  // Live stats animation
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
      setOnlineUsers(prev => Math.max(15, prev + Math.floor(Math.random() * 5) - 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Testimonials rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const testimonials = [
    {
      name: "אלון מסק",
      company: "SpaceX Israel",
      text: "המערכות שפיתחו עבורנו חסכו לנו מיליוני דולרים. רמה של Silicon Valley!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "שרה כהן",
      company: "Intel Israel CEO",
      text: "הפתרונות הטכנולוגיים שלהם מובילים את התעשייה. Innovation במיטבו!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "דוד לוי",
      company: "מפקד יחידה 8200",
      text: "רמת הטכנולוגיה והאבטחה שלהם מעבר לכל ציפייה. סיווג - מובחר!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const chatMessages = [
    { name: "דר' מיכאל כהן - CTO", status: "זמין עכשיו", specialty: "AI & Machine Learning" },
    { name: "רחל לוי - Lead Dev", status: "זמין עכשיו", specialty: "Full Stack Development" },
    { name: "יוסי דהן - Security", status: "זמין עכשיו", specialty: "Cyber Security" }
  ];

  const services = [
    {
      icon: "🌐",
      title: "פיתוח אתרים מתקדמים",
      subtitle: "Next.js 14 + AI Integration",
      description: "אתרים רספונסיביים עם טכנולוגיות החדישות ביותר וחוויית משתמש מתקדמת",
      price: "₪15,000 - ₪50,000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      features: ["React & Next.js 14", "AI-Powered Features", "99.9% Uptime SLA", "Real-time Analytics"],
      clients: ["Microsoft", "Intel", "Check Point"],
      tech: ["React", "Next.js", "TypeScript", "AI"]
    },
    {
      icon: "📱",
      title: "אפליקציות מובייל Enterprise",
      subtitle: "iOS & Android + Cross Platform",
      description: "אפליקציות עם חוויית משתמש מעולה ואינטגרציה מלאה עם מערכות קיימות",
      price: "₪25,000 - ₪80,000",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      features: ["React Native", "Native Performance", "Push Notifications", "Offline Support"],
      clients: ["Waze", "Fiverr", "Mobileye"],
      tech: ["React Native", "Swift", "Kotlin", "Firebase"]
    },
    {
      icon: "🤖",
      title: "פתרונות AI מתקדמים",
      subtitle: "GPT-4 + Computer Vision + NLP",
      description: "בינה מלאכותית מתקדמת לאוטומציה של תהליכים ושיפור הפרודוקטיביות",
      price: "₪40,000 - ₪150,000",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      features: ["ChatGPT Integration", "Computer Vision", "NLP Processing", "Custom Models"],
      clients: ["צה\"ל", "המוסד", "יחידה 8200"],
      tech: ["Python", "TensorFlow", "OpenAI", "AWS"]
    },
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      subtitle: "AWS/Azure + Kubernetes + DevOps",
      description: "תשתיות ענן מתקדמות עם אוטומציה מלאה וביצועים מקסימליים",
      price: "₪30,000 - ₪100,000",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      features: ["Auto Scaling", "Load Balancing", "CI/CD Pipeline", "Monitoring"],
      clients: ["Amdocs", "Nice", "Matrix"],
      tech: ["AWS", "Kubernetes", "Docker", "Terraform"]
    },
    {
      icon: "🔒",
      title: "Cyber Security Enterprise",
      subtitle: "Zero Trust + SOC + Penetration Testing",
      description: "פתרונות אבטחת מידע מתקדמים ברמה הגבוהה ביותר",
      price: "₪35,000 - ₪120,000",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      features: ["Penetration Testing", "SOC 24/7", "Zero Trust Architecture", "Compliance"],
      clients: ["משרד הביטחון", "בנק ישראל", "רפאל"],
      tech: ["Splunk", "CrowdStrike", "Fortinet", "Custom"]
    },
    {
      icon: "⚙️",
      title: "מערכות ניהול Enterprise",
      subtitle: "ERP + CRM + BI + Analytics",
      description: "פתרונות ניהול מתקדמים לעסקים גדולים עם אנליטיקה בזמן אמת",
      price: "₪50,000 - ₪200,000",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      features: ["Real-time Analytics", "Custom Dashboards", "API Integration", "Machine Learning"],
      clients: ["בנק הפועלים", "כללית", "אלביט"],
      tech: ["React", "Python", "PostgreSQL", "Redis"]
    }
  ];

  const portfolio = [
    {
      title: "מערכת ניהול Intel",
      client: "Intel Israel",
      category: "Enterprise",
      description: "מערכת ניהול פרויקטים מתקדמת עם AI ואנליטיקה בזמן אמת",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "AI", "Analytics"],
      result: "50% שיפור ביעילות",
      link: "https://intel.com"
    },
    {
      title: "אפליקציית Waze Enterprise",
      client: "Waze",
      category: "Mobile",
      description: "אפליקציית ניווט enterprise עם פיצ'רי AI ואנליטיקה מתקדמת",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tech: ["React Native", "AI", "Maps", "Real-time"],
      result: "30% חיסכון בעלויות",
      link: "https://waze.com"
    },
    {
      title: "פתרון AI צה\"ל",
      client: "IDF - צה\"ל",
      category: "AI",
      description: "מערכת זיהוי תמונות וניתוח מתקדם עם Machine Learning",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      tech: ["Python", "TensorFlow", "Computer Vision", "Cloud"],
      result: "95% דיוק בזיהוי",
      link: "#classified"
    },
    {
      title: "פלטפורמת Check Point",
      client: "Check Point",
      category: "Security",
      description: "פלטפורמת אבטחה מתקדמת עם ניטור בזמן אמת",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      tech: ["React", "Security", "Real-time", "Analytics"],
      result: "99.9% זמינות",
      link: "https://checkpoint.com"
    },
    {
      title: "מערכת בנקאית",
      client: "בנק הפועלים",
      category: "Fintech",
      description: "מערכת בנקאית מתקדמת עם אבטחה ברמה הגבוהה ביותר",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Blockchain", "Security", "APIs"],
      result: "40% שיפור ב-UX",
      link: "https://bankhapoalim.co.il"
    },
    {
      title: "פלטפורמת כללית",
      client: "כללית",
      category: "Healthcare",
      description: "מערכת ניהול מטופלים מתקדמת עם AI ואנליטיקה",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      tech: ["React", "AI", "Healthcare", "Analytics"],
      result: "60% שיפור ביעילות",
      link: "https://clalit.co.il"
    }
  ];

  const team = [
    {
      name: "דר' מיכאל כהן",
      role: "Chief Technology Officer",
      bio: "20+ שנות ניסיון בפיתוח מערכות enterprise. לשעבר Intel, מוביל פיתוח AI",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      specialties: ["AI & ML", "System Architecture", "Cloud Computing"],
      education: "PhD Computer Science - MIT",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    {
      name: "רחל לוי",
      role: "Lead Full Stack Developer",
      bio: "מפתחת senior עם התמחות ב-React ו-Node.js. לשעבר Google, מומחית UX/UI",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&crop=face",
      specialties: ["React", "Node.js", "UX/UI Design"],
      education: "MSc Software Engineering - Technion",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    {
      name: "יוסי דהן",
      role: "Head of Cyber Security",
      bio: "מומחה אבטחת מידע עם רקע ביחידה 8200. מתמחה ב-Penetration Testing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      specialties: ["Cyber Security", "Penetration Testing", "Cloud Security"],
      education: "BSc Computer Science - Hebrew University",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    {
      name: "שרה אברהם",
      role: "AI Research Scientist",
      bio: "חוקרת AI עם התמחות ב-Computer Vision ו-NLP. לשעבר Microsoft Research",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      specialties: ["Computer Vision", "NLP", "Deep Learning"],
      education: "PhD AI - Stanford University",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <>
            {/* Hero Section with Video Background */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Video Background */}
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-90 absolute z-10"></div>
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onError={() => console.log('Video failed to load, showing fallback')}
                >
                  <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1a8e9&profile_id=139" type="video/mp4" />
                </video>
              </div>

              {/* Interactive particles effect */}
              <div className="absolute inset-0 z-20">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      transform: `translate(${(mousePosition.x / window.innerWidth - 0.5) * 20}px, ${(mousePosition.y / window.innerHeight - 0.5) * 20}px)`
                    }}
                  />
                ))}
              </div>

              {/* Hero Content */}
              <div className="relative z-30 text-center text-white px-4 max-w-6xl mx-auto">
                <div className="mb-8">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-sm">🔴 LIVE: {onlineUsers} מומחים זמינים עכשיו</span>
                  </div>
                </div>

                <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  טכנולוגיה מתקדמת
                </h1>
                <p className="text-2xl md:text-4xl font-light mb-4">בע"ם</p>
                <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
                  פתרונות טכנולוגיים מתקדמים ברמה של <span className="text-yellow-400 font-semibold">Silicon Valley</span>
                  <br />
                  עבור החברות המובילות בישראל ובעולם
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                  >
                    <span className="mr-3">🚀</span>
                    התחילו פרויקט
                    <div className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</div>
                  </button>
                  <button 
                    onClick={() => setActiveTab('portfolio')}
                    className="group border-2 border-white/30 backdrop-blur-md text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="mr-3">🎯</span>
                    צפו בפורטפוליו
                  </button>
                </div>

                {/* Live Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <div className="text-3xl font-bold text-blue-400">{visitorCount.toLocaleString()}</div>
                    <div className="text-sm opacity-75">ביקורים היום</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <div className="text-3xl font-bold text-purple-400">500+</div>
                    <div className="text-sm opacity-75">פרויקטים מוצלחים</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                    <div className="text-sm opacity-75">זמינות מערכות</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <div className="text-3xl font-bold text-yellow-400">24/7</div>
                    <div className="text-sm opacity-75">תמיכה טכנית</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Trusted By Section */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">בטוחים בנו</h2>
                  <p className="text-xl text-gray-600">החברות המובילות בעולם סומכות עלינו</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
                  {['Microsoft', 'Intel', 'Check Point', 'Waze', 'צה"ל', 'בנק הפועלים'].map((company, i) => (
                    <div key={i} className="text-center">
                      <div className="text-blue-600 font-medium mb-3">{project.client}</div>
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                      
                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-2">טכנולוגיות:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-green-600 font-semibold text-sm">
                          📈 {project.result}
                        </div>
                        {project.link !== "#classified" && (
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            צפו בפרויקט →
                          </button>
                        )}
                        {project.link === "#classified" && (
                          <span className="text-red-600 text-sm font-medium">🔒 מסווג</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'team':
        return (
          <section className="py-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">הצוות שלנו</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  מומחים מובילים בתחום הטכנולוגיה עם ניסיון ברמה עולמית
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="text-center">
                      <div className="relative mb-6">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                      
                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-2">התמחויות:</div>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.specialties.map((specialty, i) => (
                            <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 mb-4">{member.education}</div>

                      <div className="flex justify-center space-x-4">
                        <a href={member.linkedin} className="text-blue-600 hover:text-blue-800">
                          LinkedIn
                        </a>
                        <a href={member.github} className="text-gray-600 hover:text-gray-800">
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 rtl">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Back Button */}
            <div className="flex items-center space-x-reverse space-x-6">
              <Link 
                href="/#templates"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
              >
                <span className="mr-2 group-hover:translate-x-1 transition-transform">←</span>
                חזרה לגלריה
              </Link>
              <span className="text-gray-300">|</span>
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">ט</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">טכנולוגיה מתקדמת</div>
                  <div className="text-xs text-gray-500">Enterprise Solutions</div>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-reverse space-x-8">
              {[
                { id: 'home', label: 'בית', icon: '🏠' },
                { id: 'services', label: 'שירותים', icon: '⚙️' },
                { id: 'portfolio', label: 'פורטפוליו', icon: '📂' },
                { id: 'team', label: 'צוות', icon: '👥' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-reverse space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-blue-100 text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">🚀</span>
              התחילו פרויקט
            </button>
          </div>
        </div>
      </nav>

      {/* Dynamic Content */}
      {renderContent()}

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative"
          >
            <span className="text-2xl">💬</span>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{chatMessages.length}</span>
            </div>
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div>
                <h4 className="font-semibold">💬 צ'אט עם המומחים</h4>
                <p className="text-sm opacity-90">{chatMessages.length} מומחים זמינים עכשיו</p>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            
            <div className="flex-1 p-4 space-y-3">
              {chatMessages.map((expert, i) => (
                <div key={i} className="flex items-center space-x-reverse space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                      {expert.name.charAt(0)}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{expert.name}</div>
                    <div className="text-xs text-green-600">{expert.status}</div>
                    <div className="text-xs text-gray-500">{expert.specialty}</div>
                  </div>
                </div>
              ))}
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
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1"
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
}2xl font-bold text-gray-700">{company}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Carousel */}
            <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">מה אומרים עלינו</h2>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-3xl p-8 shadow-2xl">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                        <div className="text-blue-600">{testimonials[currentTestimonial].company}</div>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">"{testimonials[currentTestimonial].text}"</p>
                    <div className="flex justify-center space-x-2">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          className={`w-3 h-3 rounded-full ${i === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'}`}
                          onClick={() => setCurrentTestimonial(i)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );

      case 'services':
        return (
          <section className="py-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">השירותים שלנו</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  פתרונות טכנולוגיים מתקדמים ברמה של Silicon Valley עבור עסקים מובילים
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {services.map((service, index) => (
                  <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="text-4xl mb-2">{service.icon}</div>
                        <div className="text-white font-semibold">{service.subtitle}</div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="text-3xl font-bold text-blue-600 mb-6">{service.price}</div>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <span className="text-green-500 ml-2">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mb-6">
                        <div className="text-sm text-gray-500 mb-2">טכנולוגיות:</div>
                        <div className="flex flex-wrap gap-2">
                          {service.tech.map((tech, i) => (
                            <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="text-sm text-gray-500 mb-2">לקוחות נבחרים:</div>
                        <div className="text-sm font-medium text-gray-700">
                          {service.clients.join(', ')}
                        </div>
                      </div>

                      <button
                        onClick={() => setIsContactOpen(true)}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        קבלו הצעת מחיר
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
          <section className="py-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">הפורטפוליו שלנו</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  פרויקטים מובילים שביצענו עבור החברות הגדולות בישראל ובעולם
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolio.map((project, index) => (
                  <div key={index} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <div className="text-
