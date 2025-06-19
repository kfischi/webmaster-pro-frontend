'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const templates = [
    {
      id: 'business-advanced',
      title: 'תבנית עסקית מתקדמת',
      description: 'תבנית מושלמת לחברות הייטק, יועצים עסקיים וחברות שירותים. כוללת CRM, אנליטיקס וכלי ניהול מתקדמים.',
      category: 'business',
      icon: 'fas fa-chart-line',
      features: ['CRM מובנה', 'אנליטיקס', 'אוטומציה', 'responsive'],
      badge: 'עסקי'
    },
    {
      id: 'restaurant-luxury',
      title: 'מסעדה יוקרתית',
      description: 'עיצוב יוקרתי למסעדות וביסטרו. כולל תפריט דיגיטלי, מערכת הזמנות ותצוגת גלריה מרשימה.',
      category: 'services',
      icon: 'fas fa-utensils',
      features: ['תפריט דיגיטלי', 'הזמנות', 'גלריה', 'עיצוב יוקרתי'],
      badge: 'מסעדות'
    },
    {
      id: 'ecommerce-advanced',
      title: 'חנות אונליין מתקדמת',
      description: 'פלטפורמת אי-קומרס מלאה עם עגלת קניות, מערכת תשלומים וניהול מלאי מתקדם.',
      category: 'ecommerce',
      icon: 'fas fa-shopping-bag',
      features: ['עגלת קניות', 'תשלומים', 'ניהול מלאי', 'מובייל'],
      badge: 'חנויות'
    },
    {
      id: 'barber-modern',
      title: 'מספרה מודרנית',
      description: 'עיצוב חדשני למספרות וסלונים. כולל הזמנת תורים, גלריית עבודות וכלי ניהול לקוחות.',
      category: 'services',
      icon: 'fas fa-cut',
      features: ['הזמנת תורים', 'גלריה', 'ניהול לקוחות', 'עיצוב חדשני'],
      badge: 'שירותים'
    },
    {
      id: 'fitness-trainer',
      title: 'מאמן כושר אישי',
      description: 'אתר מקצועי למאמני כושר. כולל תוכניות אימונים, מעקב התקדמות ומערכת תשלומים.',
      category: 'services',
      icon: 'fas fa-dumbbell',
      features: ['תוכניות אימון', 'מעקב התקדמות', 'תשלומים', 'מובייל'],
      badge: 'כושר'
    },
    {
      id: 'lawyer-professional',
      title: 'משרד עורכי דין',
      description: 'עיצוב מקצועי ואמין למשרדי עו"ד. כולל תחומי התמחות, צוות המשרד וטפסי יצירת קשר.',
      category: 'business',
      icon: 'fas fa-balance-scale',
      features: ['תחומי התמחות', 'צוות', 'יצירת קשר', 'מקצועי'],
      badge: 'משפטי'
    },
    {
      id: 'medical-clinic',
      title: 'קליניקה רפואית',
      description: 'אתר מקצועי לקליניקות ורופאים. כולל הזמנת תורים, מידע רפואי ומערכת ניהול מטופלים.',
      category: 'services',
      icon: 'fas fa-stethoscope',
      features: ['הזמנת תורים', 'מידע רפואי', 'ניהול מטופלים', 'HIPAA'],
      badge: 'רפואי'
    },
    {
      id: 'portfolio-creative',
      title: 'פורטפוליו מעצבים',
      description: 'תיק עבודות מרשים למעצבים ויוצרים. כולל גלריית פרויקטים, קורות חיים ויצירת קשר.',
      category: 'portfolio',
      icon: 'fas fa-paint-brush',
      features: ['גלריית פרויקטים', 'קורות חיים', 'יצירת קשר', 'יצירתי'],
      badge: 'תיק עבודות'
    }
  ];

  const categories = [
    { id: 'all', name: 'כל התבניות', icon: 'fas fa-th' },
    { id: 'business', name: 'עסקי', icon: 'fas fa-briefcase' },
    { id: 'ecommerce', name: 'חנויות', icon: 'fas fa-shopping-cart' },
    { id: 'services', name: 'שירותים', icon: 'fas fa-tools' },
    { id: 'portfolio', name: 'תיקי עבודות', icon: 'fas fa-palette' }
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const handleEditTemplate = (templateId) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(`/editor?template=${templateId}`);
    }, 1500);
  };

  const handlePreviewTemplate = (templateId) => {
    window.open(`/templates/preview/${templateId}`, '_blank');
  };

  useEffect(() => {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Heebo', sans-serif"
    }}>
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            <i className="fas fa-rocket" style={{ marginLeft: '0.5rem' }}></i>
            WebMaster Pro
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/" style={{
              padding: '0.8rem 1.5rem',
              background: 'rgba(102, 126, 234, 0.1)',
              color: '#667eea',
              border: '2px solid rgba(102, 126, 234, 0.2)',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}>
              <i className="fas fa-home"></i>
              דף הבית
            </Link>
            <Link href="/editor" style={{
              padding: '0.8rem 1.5rem',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}>
              <i className="fas fa-edit"></i>
              לאדיטור
            </Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            גלריית תבניות מקצועיות
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            בחרו מבין 8 תבניות מעוצבות ומקצועיות, כל אחת מותאמת לעסק שלכם.
            לחצו על "ערוך תבנית" כדי להתחיל לעצב!
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                padding: '0.8rem 1.5rem',
                background: selectedCategory === category.id 
                  ? 'rgba(255,255,255,0.2)' 
                  : 'rgba(255,255,255,0.1)',
                color: 'white',
                border: `2px solid ${selectedCategory === category.id 
                  ? 'rgba(255,255,255,0.4)' 
                  : 'rgba(255,255,255,0.2)'}`,
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              <i className={category.icon} style={{ marginLeft: '0.5rem' }}></i>
              {category.name}
            </button>
          ))}
        </div>

        {isLoading && (
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            color: 'white'
          }}>
            <div style={{
              border: '3px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              borderTop: '3px solid white',
              width: '40px',
              height: '40px',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 1rem'
            }}></div>
            <p>טוען תבנית לאדיטור...</p>
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {filteredTemplates.map((template, index) => (
            <div
              key={template.id}
              style={{
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                opacity: 0,
                transform: 'translateY(30px)',
                animation: `fadeInUp 0.5s ease ${index * 0.1}s forwards`
              }}
            >
              <div style={{
                height: '250px',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(102, 126, 234, 0.9)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)'
                }}>
                  {template.badge}
                </div>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '4rem',
                  color: '#667eea',
                  opacity: 0.7
                }}>
                  <i className={template.icon}></i>
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#333'
                }}>
                  {template.title}
                </h3>
                
                <p style={{
                  color: '#666',
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  {template.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {template.features.map((feature, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.3rem 0.8rem',
                        background: 'rgba(102, 126, 234, 0.1)',
                        color: '#667eea',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => handleEditTemplate(template.id)}
                    style={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      color: 'white',
                      border: 'none',
                      padding: '1rem',
                      borderRadius: '10px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <i className="fas fa-edit"></i>
                    ערוך תבנית
                  </button>
                  
                  <button
                    onClick={() => handlePreviewTemplate(template.id)}
                    style={{
                      background: 'rgba(102, 126, 234, 0.1)',
                      color: '#667eea',
                      border: '2px solid rgba(102, 126, 234, 0.2)',
                      padding: '1rem',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          main {
            padding: 2rem 1rem !important;
          }
          
          h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
