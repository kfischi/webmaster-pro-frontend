'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GalleryPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const templates = [
    {
      id: 'private-teacher-template',
      title: 'מורה פרטי',
      description: 'תבנית מקצועית למורים פרטיים עם תחומי לימוד, שיטות הוראה והמלצות.',
      category: 'education',
      icon: 'fas fa-user-graduate',
      features: ['מתמטיקה', 'אנגלית', 'פיזיקה', 'פסיכומטרי'],
      badge: 'חינוך',
      thumbnail: '/images/private-teacher-thumbnail.jpg'
    },
    {
      id: 'fitness-trainer-template',
      title: 'מאמן כושר',
      description: 'תבנית למאמני כושר עם before/after, תוכניות אימון וטופס התאמה אישית.',
      category: 'health',
      icon: 'fas fa-dumbbell',
      features: ['אימוני כושר', 'תזונה', 'תוכניות אימון'],
      badge: 'בריאות',
      thumbnail: '/images/fitness-trainer-thumbnail.jpg'
    },
    {
      id: 'barber-shop-template',
      title: 'מספרה',
      description: 'תבנית לעסקי יופי עם הזמנת תורים, גלריה ומחירון.',
      category: 'services',
      icon: 'fas fa-cut',
      features: ['תספורת', 'עיצוב זקן', 'חבילת טיפוח'],
      badge: 'שירותים',
      thumbnail: '/images/barber-shop-thumbnail.jpg'
    }
  ];

  const filteredTemplates = selectedCategory === 'all'
    ? templates
    : templates.filter(t => t.category === selectedCategory);

  const handleEdit = (id) => {
    router.push(`/editor?template=${id}`);
  };

  const handlePreview = (id) => {
    router.push(`/templates/preview/${id}`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>גלריית תבניות</h1>
      <div style={{ marginBottom: '1rem' }}>
        {['all', 'education', 'health', 'services'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              margin: '0.5rem',
              padding: '0.5rem 1rem',
              background: selectedCategory === cat ? '#667eea' : '#eee',
              color: selectedCategory === cat ? '#fff' : '#333',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {cat === 'all' ? 'הכל' : templates.find(t => t.category === cat)?.badge || cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {filteredTemplates.map(template => (
          <div key={template.id} style={{ border: '1px solid #ccc', borderRadius: '15px', padding: '1rem' }}>
            <img src={template.thumbnail} alt={template.title} style={{ width: '100%', borderRadius: '10px' }} />
            <h2>{template.title}</h2>
            <p>{template.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {template.features.map((f, i) => (
                <span key={i} style={{ background: '#f0f0f0', padding: '0.3rem 0.6rem', borderRadius: '10px' }}>{f}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => handlePreview(template.id)} style={{ flex: 1 }}>תצוגה מקדימה</button>
              <button onClick={() => handleEdit(template.id)} style={{ flex: 1, background: '#667eea', color: '#fff' }}>התחל עריכה</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
