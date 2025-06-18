'use client';
import { useState } from 'react';

export default function TemplatesGallery() {
  const [selectedCategory, setSelectedCategory] = useState('הכל');

  const templates = [
    {
      id: 1,
      title: "עסק מקומי מודרני",
      description: "תבנית מתקדמת עם אנימציות וחוויית משתמש מושלמת",
      category: "עסקים",
      price: "חינם",
      rating: 4.9,
      downloads: 2847,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "מסעדה אלגנטית",
      description: "חוויית קולינרית מושלמת עם עיצוב יוקרתי",
      category: "מסעדות",
      price: "₪149",
      rating: 4.8,
      downloads: 1923,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    }
  ];

  const categories = ['הכל', 'עסקים', 'מסעדות', 'חנויות'];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      padding: '40px'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: 'white',
          marginBottom: '20px',
          textShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}>
          🎨 גלריית תבניות פרימיום
        </h1>
      </header>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '60px',
        flexWrap: 'wrap'
      }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '12px 25px',
              border: 'none',
              borderRadius: '50px',
              background: selectedCategory === category 
                ? 'rgba(255, 255, 255, 0.3)' 
                : 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
        gap: '40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {templates.map(template => (
          <div
            key={template.id}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              borderRadius: '25px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{
              height: '280px',
              background: template.gradient,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem'
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: template.price === 'חינם' ? '#10b981' : '#3b82f6',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                {template.price}
              </div>
              🎨
            </div>

            <div style={{ padding: '30px' }}>
              <h3 style={{
                fontSize: '1.4rem',
                color: 'white',
                marginBottom: '10px'
              }}>
                {template.title}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '1rem',
                marginBottom: '20px'
              }}>
                {template.description}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'rgba(255,255,255,0.8)'
              }}>
                <div>
                  <span>📥 {template.downloads.toLocaleString()}</span>
                  <span style={{ marginLeft: '15px' }}>⭐ {template.rating}</span>
                </div>
                <button style={{
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  🚀 התחל עריכה
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
