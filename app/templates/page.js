'use client';
import { useState } from 'react';

export default function TemplatesGallery() {
  const [selectedCategory, setSelectedCategory] = useState('הכל');
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      name: 'מספרת מקצועית',
      category: 'יופי ואסתטיקה',
      image: '/images/templates/barber-shop-thumbnail.jpg',
      price: 'חינם',
      rating: 4.9,
      downloads: 1200,
      description: 'תבנית מודרנה למספרות וברברים עם מערכת הזמנות',
      features: ['מערכת הזמנות', 'גלריית עבודות', 'צוות מקצועי', 'מחירון שירותים']
    },
    {
      id: 2,
      name: 'מכון כושר אישי',
      category: 'ספורט וכושר',
      image: '/images/templates/fitness-trainer-thumbnail.jpg',
      price: '₪149',
      rating: 4.8,
      downloads: 890,
      description: 'תבנית למאמנים אישיים ומכוני כושר עם מעקב התקדמות',
      features: ['מערכת אימונים', 'מעקב התקדמות', 'תוכניות תזונה', 'יעדים אישיים']
    },
    {
      id: 3,
      name: 'משרד עורכי דין',
      category: 'משפטים ויעוץ',
      image: '/images/templates/lawyer-thumbnail.jpg',
      price: '₪199',
      rating: 4.7,
      downloads: 654,
      description: 'תבנית מקצועית למשרדי עורכי דין עם מערכת הזמנת פגישות',
      features: ['מערכת הזמנות', 'תיקי לקוחות', 'ייעוץ אונליין', 'מסמכים משפטיים']
    },
    {
      id: 4,
      name: 'מורה פרטי מקצועי',
      category: 'חינוך והוראה',
      image: '/images/templates/private-teacher-thumbnail.jpg',
      price: '₪99',
      rating: 4.9,
      downloads: 1456,
      description: 'תבנית למורים פרטיים עם מערכת תלמידים ותאומי שיעורים',
      features: ['לוח שנה חכם', 'מעקב התקדמות', 'חומרי לימוד', 'דיווחים להורים']
    },
    {
      id: 5,
      name: 'מטפל פסיכולוגי',
      category: 'בריאות ורווחה',
      image: '/images/templates/psychology-thumbnail.jpg',
      price: '₪129',
      rating: 4.8,
      downloads: 743,
      description: 'תבנית למטפלים פסיכולוגיים עם מערכת הזמנות ופרטיות מלאה',
      features: ['הזמנות מקוונות', 'פרטיות מוחלטת', 'טיפול מרחוק', 'תיקי לקוחות']
    },
    {
      id: 6,
      name: 'סטודיו יוגה ומדיטציה',
      category: 'ספורט וכושר',
      image: '/images/templates/yoga-studio-thumbnail.jpg',
      price: 'חינם',
      rating: 4.9,
      downloads: 2341,
      description: 'תבנית לסטודיו יוגה ומדיטציה עם מערכת הרשמה לשיעורים',
      features: ['לוח שיעורים', 'הרשמה מקוונת', 'מדיטציות מוקלטות', 'מעקב התקדמות']
    }
  ];

  const categories = ['הכל', 'יופי ואסתטיקה', 'ספורט וכושר', 'משפטים ויעוץ', 'חינוך והוראה', 'בריאות ורווחה'];

  const filteredTemplates = selectedCategory === 'הכל' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const openPreview = (template) => {
    setPreviewTemplate(template);
  };

  const closePreview = () => {
    setPreviewTemplate(null);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Header */}
      <header style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 20px 0', fontWeight: 'bold' }}>🎨 גלריית תבניות מקצועיות</h1>
        <p style={{ fontSize: '1.2rem', margin: 0, opacity: 0.9 }}>בחר את התבנית המושלמת לעסק שלך</p>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Categories Filter */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#2c3e50' }}>קטגוריות</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '25px',
                  background: selectedCategory === category ? '#667eea' : 'white',
                  color: selectedCategory === category ? 'white' : '#667eea',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {filteredTemplates.map(template => (
            <div key={template.id} style={{ 
              background: 'white', 
              borderRadius: '15px', 
              overflow: 'hidden', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s'
            }}>
              {/* Template Image */}
              <div style={{ 
                height: '200px', 
                background: `url(${template.image}) center/cover`,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: template.price === 'חינם' ? '#27ae60' : '#3498db',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '15px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  {template.price}
                </div>
              </div>

              {/* Template Info */}
              <div style={{ padding: '25px' }}>
                <h3 style={{ fontSize: '1.4rem', margin: '0 0 10px 0', color: '#2c3e50' }}>{template.name}</h3>
                <p style={{ color: '#7f8c8d', fontSize: '0.9rem', margin: '0 0 15px 0' }}>{template.description}</p>
                
                {/* Rating and Downloads */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ color: '#f39c12' }}>⭐</span>
                    <span style={{ fontSize: '0.9rem', color: '#2c3e50' }}>{template.rating}</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>
                    📥 {template.downloads.toLocaleString()} הורדות
                  </div>
                </div>

                {/* Features */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {template.features.slice(0, 3).map((feature, index) => (
                      <span key={index} style={{
                        background: '#ecf0f1',
                        color: '#2c3e50',
                        padding: '4px 8px',
                        borderRadius: '10px',
                        fontSize: '0.8rem'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => openPreview(template)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      border: '2px solid #667eea',
                      background: 'white',
                      color: '#667eea',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    👁️ תצוגה מקדימה
                  </button>
                  <button
                    style={{
                      flex: 1,
                      padding: '12px',
                      border: 'none',
                      background: '#667eea',
                      color: 'white',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    ✏️ ערוך
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            maxWidth: '90%',
            maxHeight: '90%',
            overflow: 'auto',
            position: 'relative'
          }}>
            <button
              onClick={closePreview}
              style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '1.2rem'
              }}
            >
              ✕
            </button>
            
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50' }}>
              {previewTemplate.name}
            </h2>
            
            <div style={{
              width: '100%',
              height: '500px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              background: '#f8f9fa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: '#7f8c8d'
            }}>
              🎨 תצוגה מקדימה של {previewTemplate.name}
              <br />
              <small style={{ marginTop: '10px', display: 'block' }}>
                כאן יוצג האתר המלא
              </small>
            </div>
            
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button
                style={{
                  background: '#27ae60',
                  color: 'white',
                  padding: '15px 30px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}
              >
                ✏️ ערוך את התבנית הזו
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
