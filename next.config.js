'use client';

import { useState } from 'react';

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('הכל');

  const templates = [
    {
      id: 1,
      title: 'מאמן כושר אישי',
      category: 'בריאות וכושר',
      description: 'תבנית מקצועית למאמני כושר עם גלריה ומערכת הזמנות',
      price: 1500,
      features: ['תכניות אימון', 'הזמנת מפגשים', 'גלריה'],
      color: '#FF6B6B'
    },
    {
      id: 2,
      title: 'פסיכולוגיה קלינית',
      category: 'בריאות וכושר',
      description: 'אתר מקצועי לפסיכולוגים עם מערכת הזמנות',
      price: 1800,
      features: ['הזמנת פגישות', 'מאמרים', 'אזור מוגן'],
      color: '#667eea'
    },
    {
      id: 3,
      title: 'סטודיו יוגה',
      category: 'בריאות וכושר',
      description: 'תבנית שלווה לסטודיו יוגה עם לוח שיעורים',
      price: 1400,
      features: ['לוח שיעורים', 'הרשמה', 'בלוג'],
      color: '#43cea2'
    },
    {
      id: 4,
      title: 'תזונאית קלינית',
      category: 'בריאות וכושר',
      description: 'אתר לתזונאים עם מחשבון קלוריות',
      price: 1600,
      features: ['מחשבון קלוריות', 'תפריטים', 'יעוץ'],
      color: '#a8edea'
    },
    {
      id: 5,
      title: 'מורה פרטי',
      category: 'חינוך ולימודים',
      description: 'פלטפורמה ללימודים פרטיים',
      price: 1300,
      features: ['לוח זמנים', 'חומרי לימוד', 'מבחנים'],
      color: '#11998e'
    },
    {
      id: 6,
      title: 'מספרה מקצועית',
      category: 'יופי ועיצוב',
      description: 'אתר אלגנטי למספרה',
      price: 1200,
      features: ['הזמנת תורים', 'גלריה', 'מחירון'],
      color: '#f093fb'
    },
    {
      id: 7,
      title: 'משרד עורכי דין',
      category: 'עסקי ומשפטי',
      description: 'אתר מקצועי למשרד עורכי דין',
      price: 2000,
      features: ['התמחויות', 'צוות', 'מאמרים'],
      color: '#2c3e50'
    },
    {
      id: 8,
      title: 'מומחה סייבר',
      category: 'טכנולוגיה ומחשבים',
      description: 'אתר לשירותי אבטחת מידע',
      price: 2200,
      features: ['סקירות אבטחה', 'יעוץ', 'הדרכות'],
      color: '#0f0f23'
    }
  ];

  const categories = ['הכל', 'בריאות וכושר', 'חינוך ולימודים', 'יופי ועיצוב', 'עסקי ומשפטי', 'טכנולוגיה ומחשבים'];

  const filteredTemplates = selectedCategory === 'הכל' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const handleContactClick = (templateTitle) => {
    const message = `שלום, אני מעוניין/ת לבנות אתר בסגנון "${templateTitle}". אשמח לקבל פרטים נוספים.`;
    const whatsappUrl = `https://wa.me/972501234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '2rem' }}>
      {/* Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center',
        borderRadius: '12px',
        marginBottom: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          גלריית תבניות מקצועיות
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          תבניות אתרים מתקדמות לעסקים שונים
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* כפתורי קטגוריות */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '25px',
                backgroundColor: selectedCategory === category ? '#667eea' : '#e9ecef',
                color: selectedCategory === category ? 'white' : '#333',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: selectedCategory === category ? 'bold' : 'normal',
                transition: 'all 0.3s ease'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* רשת תבניות */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              {/* תמונת תבנית */}
              <div style={{ 
                height: '200px', 
                background: `linear-gradient(135deg, ${template.color}, ${template.color}dd)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                {template.title}
              </div>
              
              {/* תוכן כרטיס */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#333' }}>
                    {template.title}
                  </h3>
                  <span style={{
                    backgroundColor: template.color,
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    {template.category}
                  </span>
                </div>
                
                <p style={{ 
                  color: '#666', 
                  marginBottom: '1rem', 
                  lineHeight: '1.5'
                }}>
                  {template.description}
                </p>
                
                {/* פיצ'רים */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem' 
                  }}>
                    {template.features.map((feature, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: '#f8f9fa',
                          color: '#666',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '15px',
                          fontSize: '0.8rem',
                          border: '1px solid #e9ecef'
                        }}
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* מחיר ופעולות */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: template.color 
                  }}>
                    ₪{template.price.toLocaleString()}
                  </div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>
                    מחיר בניית אתר
                  </div>
                </div>
                
                {/* כפתור יצירת קשר */}
                <button
                  onClick={() => handleContactClick(template.title)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: 'none',
                    backgroundColor: template.color,
                    color: 'white',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  בניתי לך אתר כזה
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center',
        marginTop: '4rem',
        borderRadius: '12px'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          מוכן להתחיל?
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
          בחר תבנית ואנחנו נבנה לך אתר מקצועי תוך 7-14 ימי עבודה
        </p>
        <button
          onClick={() => handleContactClick('שיחת ייעוץ כללית')}
          style={{
            padding: '1rem 3rem',
            fontSize: '1.2rem',
            backgroundColor: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          קבע שיחת ייעוץ חינם
        </button>
      </div>
    </div>
  );
}
