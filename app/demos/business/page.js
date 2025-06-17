'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UltraPremiumDemo() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [visitorCount, setVisitorCount] = useState(1247);
  const [activeUsers, setActiveUsers] = useState(23);
  const [selectedService, setSelectedService] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [teamMember, setTeamMember] = useState(null);

  // Real-time updates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('he-IL'));
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
      setActiveUsers(prev => Math.max(15, prev + (Math.random() > 0.5 ? 1 : -1)));
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
      clients: ["Microsoft", "Intel", "Teva", "Check Point"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
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
      clients: ["Waze", "Fiverr", "JFrog", "Mobileye"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      icon: "🤖",
      title: "פתרונות AI ו-Machine Learning",
      subtitle: "ChatGPT, Computer Vision, NLP",
      description: "אינטגרציית פתרונות בינה מלאכותית מתקדמים לאוטומציה של תהליכים עסקיים ושיפור היעילות",
      price: "₪40,000 - ₪150,000",
      duration: "4-12 שבועות",
      features: ["ChatGPT Integration", "Computer Vision", "NLP Processing", "Predictive Analytics", "Auto ML Pipeline", "Custom AI Models"],
      technologies: ["Python", "TensorFlow", "OpenAI", "AWS ML"],
      clients: ["IDF", "Mossad", "Unit 8200", "IAI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      icon: "☁️",
      title: "Cloud Infrastructure",
      subtitle: "AWS, Azure, Google Cloud",
      description: "תשתיות ענן מתקדמות עם אוטומציה מלאה, ניטור 24/7 וסקיילביליות אינסופית",
      price: "₪30,000 - ₪100,000",
      duration: "3-10 שבועות",
      features: ["Infrastructure as Code", "Auto Scaling", "Load Balancing", "CI/CD Pipelines", "Monitoring & Alerts", "Security Hardening"],
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
      clients: ["Amdocs", "Nice", "Matrix", "Verint"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      icon: "🔒",
      title: "Cyber Security Solutions",
      subtitle: "Penetration Testing, SOC",
      description: "פתרונות אבטחת מידע מתקדמים הכוללים בדיקות חדירה, SOC מנוהל וביטחון בזמן אמת",
      price: "₪35,000 - ₪120,000",
      duration: "4-8 שבועות",
      features: ["Penetration Testing", "SOC Managed Service", "Real-time Monitoring", "Threat Intelligence", "Incident Response", "Compliance"],
      technologies: ["Kali Linux", "Metasploit", "Wireshark", "Splunk"],
      clients: ["Ministry of Defense", "Shin Bet", "Bank of Israel", "El Al"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      icon: "⚙️",
      title: "מערכות ניהול Enterprise",
      subtitle: "ERP, CRM, BI Solutions",
      description: "פתרונות ניהול מתקדמים המותאמים לעסקים גדולים, עם דשבורדים אינטראקטיביים ודוחות בזמן אמת",
      price: "₪50,000 - ₪200,000",
      duration: "6-16 שבועות",
      features: ["ניהול לקוחות מתקדם", "דשבורדים אינטראקטיביים", "דוחות בזמן אמת", "אוטומציה מלאה", "אינטגרציות מערכות", "ביטחון מתקדם"],
      technologies: ["Python", "Django", "PostgreSQL", "Redis"],
      clients: ["Bank Hapoalim", "Clalit", "Elbit Systems", "Rafael"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    }
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: "מערכת ניהול Intel Israel",
      category: "enterprise",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "מערכת ניהול פרויקטים מתקדמת עבור Intel Israel עם דשבורדים בזמן אמת",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      client: "Intel Israel",
      year: "2024"
    },
    {
      id: 2,
      title: "אפליקציית Waze Enterprise",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      description: "אפליקציית ניווט enterprise עבור חברות עם ניהול צי רכבים מתקדם",
      technologies: ["React Native", "GraphQL", "Firebase", "Google Maps API"],
      client: "Waze",
      year: "2024"
    },
    {
      id: 3,
      title: "פתרון AI עבור צה\"ל",
      category: "ai",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=400&fit=crop",
      description: "מערכת זיהוי תמונות מתקדמת עם Computer Vision ו-Machine Learning",
      technologies: ["Python", "TensorFlow", "OpenCV", "YOLO"],
      client: "IDF",
      year: "2023"
    },
    {
      id: 4,
      title: "אתר Check Point החדש",
      category: "web",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      description: "אתר חברה מתקדם עם פיצ'רי אבטחה ואנליטיקס מתקדמים",
      technologies: ["Next.js", "TypeScript", "Vercel", "Stripe"],
      client: "Check Point",
      year: "2024"
    },
    {
      id: 5,
      title: "מערכת ERP לבנק הפועלים",
      category: "enterprise",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      description: "מערכת ניהול בנקאית מתקדמת עם אבטחה ברמה הגבוהה ביותר",
      technologies: ["Java", "Spring", "Oracle", "Kubernetes"],
      client: "Bank Hapoalim",
      year: "2023"
    },
    {
      id: 6,
      title: "אפליקציית Fiverr Pro",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      description: "אפליקציה למכירת שירותים מקצועיים עם מערכת תשלומים מתקדמת",
      technologies: ["Flutter", "Dart", "AWS", "Stripe"],
      client: "Fiverr",
      year: "2024"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "דר' אלכס כהן",
      title: "CTO & Co-Founder",
      bio: "דוקטור למדעי המחשב מהטכניון, 15 שנות ניסיון בפיתוח מערכות enterprise. עבד בGoogle ו-Microsoft, מומחה ב-AI ו-Cloud Architecture.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      expertise: ["AI/ML", "Cloud Architecture", "System Design", "Team Leadership"],
      education: "PhD Computer Science, Technion",
      experience: "15+ years",
      linkedin: "#",
      github: "#"
    },
    {
      id: 2,
      name: "שרה לוי",
      title: "Head of Design",
      bio: "מעצבת UX/UI מובילה עם 12 שנות ניסיון. עבדה ב-Google ו-Facebook, מתמחה בעיצוב מערכות מורכבות וחוויית משתמש למוצרי enterprise.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      expertise: ["UX/UI Design", "Design Systems", "User Research", "Prototyping"],
      education: "BFA Design, Bezalel",
      experience: "12+ years",
      linkedin: "#",
      dribbble: "#"
    },
    {
      id: 3,
      name: "מיכאל דוד",
      title: "Senior Full-Stack Developer",
      bio: "מפתח בכיר עם 12 שנות ניסיון בפיתוח מערכות ברמה enterprise. התמחות בReact, Node.js ומערכות ענק עם מיליוני משתמשים.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      expertise: ["React/Next.js", "Node.js", "DevOps", "Microservices"],
      education: "BSc Computer Science, Hebrew University",
      experience: "12+ years",
      linkedin: "#",
      github: "#"
    },
    {
      id: 4,
      name: "רותי ברק",
      title: "Senior Project Manager",
      bio: "מנהלת פרויקטים מוסמכת PMP עם 10 שנות ניסיון. ניהלה פרויקטים בהיקף של מיליוני שקלים עבור חברות Fortune 500.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      expertise: ["Project Management", "Agile/Scrum", "Client Relations", "Risk Management"],
      education: "MBA, Tel Aviv University",
      experience: "10+ years",
      linkedin: "#"
    }
  ];

  const testimonials = [
    {
      name: "אלון מסק",
      title: "CTO, SpaceX Israel",
      content: "הצוות של טכנולוגיה מתקדמת בנה לנו מערכת ניהול משימות שחסכה לנו מיליוני שקלים. המקצועיות והיכולת הטכנית מרשימות באמת.",
      rating: 5,
      avatar: "🚀",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
    },
    {
      name: "שרה כהן",
      title: "VP R&D, Intel Israel",
      content: "אחרי שנים של חיפוש אחר פתרון AI מתקדם, מצאנו את הפתרון המושלם. המערכת עובדת בדיוק כמו שתכננו והחסכה לנו שנת פיתוח.",
      rating: 5,
      avatar: "💻",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
    },
    {
      name: "דוד לוי",
      title: "CEO, Check Point Software",
      content: "המומחיות הטכנית והיכולת לספק פתרונות מותאמים לתחום האבטחה הרשימו אותנו מאוד. הפרויקט הסתיים במועד ובתקציב.",
      rating: 5,
      avatar: "🛡️",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
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

  const renderHomePage = () => (
    <>
      {/* Hero Video Section */}
      <section className="relative h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 animate-pulse">
              <span className="text-green-300 mr-2">🟢</span>
              <span className="text-sm font-medium">זמינים כעת • תגובה תוך 5 דקות</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                טכנולוגיה מתקדמת
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100 animate-slide-up">
              הובלת החדשנות הטכנולוגית בישראל
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              פתרונות טכנולוגיים enterprise המותאמים לחברות מובילות • AI • Cloud • Cyber Security • Mobile Apps
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up">
              <button
                onClick={() => setIsContactOpen(true)}
                className="group bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <span className="mr-3">🚀</span>
                קבלו הצעת מחיר בתוך 24 שעות
                <span className="mr-3 group-hover:translate-x-1 transition-transform">←</span>
              </button>
              <button 
                onClick={() => setCurrentPage('portfolio')}
                className="border-3 border-white text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white hover:text-blue-600 transition-all"
              >
                📂 צפו בפורטפוליו
              </button>
            </div>

            {/* Live Certifications */}
            <div className="flex flex-wrap justify-center gap-4 opacity-80">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center hover:bg-white/20 transition-colors">
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
              <div key={index} className="text-center group hover:scale-105 transition-transform cursor-pointer">
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

      {/* Services Preview with Images */}
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

          <div className="grid lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
                onClick={() => setCurrentPage('services')}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-4xl mb-2">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-blue-200 text-sm">{service.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-sm text-gray-500">⏱️ {service.duration}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full text-blue-600 font-medium hover:underline py-2">
                    קרא עוד →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('services')}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              צפו בכל השירותים →
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials with Real Photos */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">מה אומרים עלינו</h2>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src={testimonials[testimonialIndex].image} 
                  alt={testimonials[testimonialIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white/30"
                />
              </div>
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
    </>
  );

  const renderServicesPage = () => (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-6">השירותים שלנו</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            פתרונות טכנולוגיים מתקדמים המותאמים לחברות enterprise
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-blue-600 font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">💰 עלות:</h4>
                      <p className="text-2xl font-bold text-blue-600">{service.price}</p>
                      <p className="text-gray-500">⏱️ {service.duration}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">🏢 לקוחות:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.clients.slice(0, 3).map((client, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">✨ מה כלול:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <span className="text-green-500 ml-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    🚀 קבלו הצעת מחיר עבור {service.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderPortfolioPage = () => (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-6">הפורטפוליו שלנו</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            פרויקטים שביצענו עבור החברות המובילות בישראל ובעולם
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'all', label: 'הכל' },
            { key: 'web', label: 'אתרים' },
            { key: 'mobile', label: 'מובייל' },
            { key: 'enterprise', label: 'Enterprise' },
            { key: 'ai', label: 'AI/ML' }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setPortfolioFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                portfolioFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 shadow'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects
            .filter(project => portfolioFilter === 'all' || project.category === portfolioFilter)
            .map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        צפו בפרויקט →
                      </button>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-blue-600 font-medium">{project.client}</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );

  const renderTeamPage = () => (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-6">הצוות שלנו</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מומחים מובילים בתחום הטכנולוגיה, עם ניסיון בחברות הגדולות בעולם
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
              onClick={() => setTeamMember(member)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.title}</p>
                <p className="text-gray-500 text-sm mb-3">{member.experience}</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.expertise.slice(0, 2).map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button className="text-blue-600 font-medium hover:underline">
                  קרא עוד →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Member Modal */}
        {teamMember && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <img 
                    src={teamMember.image} 
                    alt={teamMember.name}
                    className="w-20 h-20 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{teamMember.name}</h3>
                    <p className="text-blue-600 font-medium">{teamMember.title}</p>
                    <p className="text-gray-500 text-sm">{teamMember.experience} • {teamMember.education}</p>
                  </div>
                </div>
                <button
                  onClick={() => setTeamMember(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{teamMember.bio}</p>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">תחומי התמחות:</h4>
                <div className="flex flex-wrap gap-2">
                  {teamMember.expertise.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  LinkedIn
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );

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
            
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-reverse space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`font-medium transition-colors ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                בית
              </button>
              <button 
                onClick={() => setCurrentPage('services')}
                className={`font-medium transition-colors ${currentPage === 'services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                שירותים
              </button>
              <button 
                onClick={() => setCurrentPage('portfolio')}
                className={`font-medium transition-colors ${currentPage === 'portfolio' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                פורטפוליו
              </button>
              <button 
                onClick={() => setCurrentPage('team')}
                className={`font-medium transition-colors ${currentPage === 'team' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                הצוות
              </button>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                צור קשר
              </button>
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

      {/* Page Content */}
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'services' && renderServicesPage()}
      {currentPage === 'portfolio' && renderPortfolioPage()}
      {currentPage === 'team' && renderTeamPage()}

      {/* Enhanced Contact Form Modal */}
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
}sm rounded-2xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold mb-2">משלוח מהיר</h4>
              <p className="text-gray-300 text-sm">אתר מלא תוך 7-14 ימי עבודה</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold mb-2">התאמה מלאה</h4>
              <p className="text-gray-300 text-sm">מותאם לחלוטין לעסק ולקהל שלכם</p>
            </div>
            <div className="bg-white/5 backdrop-blur-
