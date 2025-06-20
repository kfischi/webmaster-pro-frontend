'use client';

import React, { useState } from 'react';

const templates = [
  {
    id: 'barbershop',
    title: 'מספרה יוקרתית',
    description: 'עיצוב מודרני ושירות ברמה הגבוהה ביותר.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop',
    features: ['וידאו ברקע', 'הזמנת תורים', 'גלריית עבודות']
  },
  {
    id: 'gym',
    title: 'חדר כושר מתקדם',
    description: 'ציוד חדיש ואימונים מותאמים אישית.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    features: ['מונים אנימטיים', 'מערכת הרשמה', 'לוח אימונים']
  },
  {
    id: 'lawfirm',
    title: 'משרד עורכי דין',
    description: 'ייצוג משפטי מקצועי ואמין.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
    features: ['עיצוב קלאסי', 'אזור לקוחות', 'יצירת קשר מאובטח']
  },
  {
    id: 'restaurant',
    title: 'מסעדת גורמה',
    description: 'חוויית טעמים בלתי נשכחת.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    features: ['תפריט דיגיטלי', 'הזמנות אונליין', 'גלריית מנות']
  },
  {
    id: 'clinic',
    title: 'קליניקה רפואית',
    description: 'טיפול אישי ומקצועי בסטנדרטים הגבוהים ביותר.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
    features: ['הזמנת תורים', 'מידע רפואי', 'פורטל מטופלים']
  },
  {
    id: 'yoga',
    title: 'סטודיו יוגה',
    description: 'איזון גוף ונפש בסביבה שלווה.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    features: ['שיעורים אונליין', 'מדיטציה מודרכת', 'חנות יוגה']
  },
];

function TemplateGallery() {
  const [loadingId, setLoadingId] = useState(null);

  const loadTemplate = (templateId) => {
    setLoadingId(templateId);
    setTimeout(() => {
      console.log(`Template loaded: ${templateId}`);
      setLoadingId(null);
      // כאן תוכל להוסיף לוגיקה לטעינת התבנית באדיטור
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>🎨 גלריית תבניות ברמה עולמית</h1>
        <p style={styles.subtitle}>בחר תבנית והתחל לעצב אתר מקצועי תוך דקות</p>
      </div>
      
      <div style={styles.grid}>
        {templates.map((template) => (
          <div
            key={template.id}
            style={{
              ...styles.card,
              ...(loadingId === template.id ? styles.loadingCard : {}),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
          >
            <img 
              src={template.image} 
              alt={template.title}
              style={styles.image}
            />
            <h3 style={styles.title}>{template.title}</h3>
            <p style={styles.description}>{template.description}</p>
            
            {/* Features */}
            <div style={styles.features}>
              {template.features.map((feature, index) => (
                <span key={index} style={styles.feature}>
                  {feature}
                </span>
              ))}
            </div>

            <button
              style={{
                ...styles.button,
                ...(loadingId === template.id ? styles.loadingButton : {})
              }}
              onClick={() => loadTemplate(template.id)}
              disabled={loadingId === template.id}
              onMouseEnter={(e) => {
                if (loadingId !== template.id) {
                  e.target.style.background = 'linear-gradient(90deg, #00f2fe, #4facfe)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (loadingId !== template.id) {
                  e.target.style.background = 'linear-gradient(90deg, #4facfe, #00f2fe)';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {loadingId === template.id ? '⏳ טוען...' : '🚀 טען תבנית'}
            </button>
          </div>
        ))}
      </div>
      
      <div style={styles.footer}>
        <p style={styles.footerText}>
          💡 כל תבנית כוללת רכיבים מתקדמים, אנימציות וממשק אדמין מלא
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    color: 'white'
  },
  mainTitle: {
    fontSize: '2.5rem',
    margin: '0 0 10px 0',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  },
  subtitle: {
    fontSize: '1.1rem',
    margin: 0,
    opacity: 0.9
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '25px',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  loadingCard: {
    opacity: 0.6,
    pointerEvents: 'none',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.4rem',
    margin: '0 0 10px',
    color: '#2d3748',
    fontWeight: 'bold'
  },
  description: {
    fontSize: '0.95rem',
    color: '#4a5568',
    marginBottom: '20px',
    lineHeight: 1.5
  },
  features: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center',
    marginBottom: '25px'
  },
  feature: {
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  button: {
    background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
    border: 'none',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    boxShadow: '0 4px 15px rgba(79, 172, 254, 0.3)',
    transition: 'all 0.3s ease',
    width: '100%'
  },
  loadingButton: {
    background: '#9ca3af',
    cursor: 'not-allowed',
    boxShadow: 'none'
  },
  footer: {
    textAlign: 'center',
    marginTop: '50px',
    color: 'white'
  },
  footerText: {
    fontSize: '1rem',
    margin: 0,
    opacity: 0.8
  }
};

export default TemplateGallery;
