import React, { useState } from 'react';

export default function TemplatesGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'הכל', count: 6 },
    { id: 'business', name: 'עסקים', count: 2 },
    { id: 'restaurant', name: 'מסעדות', count: 1 },
    { id: 'shop', name: 'חנויות', count: 1 },
    { id: 'services', name: 'שירותים', count: 2 }
  ];

  const templates = [
    {
      id: 1,
      name: 'עסק מקומי מודרני',
      category: 'business',
      description: 'תבנית נקייה ומקצועית לעסקים מקומיים',
      price: 'חינם',
      rating: 4.9,
      downloads: 1247
    },
    {
      id: 2,
      name: 'מסעדה אלגנטית',
      category: 'restaurant', 
      description: 'עיצוב יוקרתי למסעדות עם תפריט מקוון',
      price: '₪99',
      rating: 4.8,
      downloads: 892
    },
    {
      id: 3,
      name: 'חנות אופנה',
      category: 'shop',
      description: 'תבנית מודרנית לחנויות אופנה',
      price: '₪149',
      rating: 4.7,
      downloads: 1055
    },
    {
      id: 4,
      name: 'סטודיו עיצוב',
      category: 'services',
      description: 'פורטפוליו מינימליסטי למעצבים',
      price: 'חינם',
      rating: 4.9,
      downloads: 743
    },
    {
      id: 5,
      name: 'שירותי ייעוץ',
      category: 'services',
      description: 'תבנית מקצועית לחברות ייעוץ',
      price: '₪79',
      rating: 4.6,
      downloads: 634
    },
    {
      id: 6,
      name: 'קליניקה רפואית',
      category: 'business',
      description: 'תבנית לקליניקות ומרפאות',
      price: '₪119',
      rating: 4.8,
      downloads: 521
    }
  ];

  const filteredTemplates = templates.filter(template => 
    selectedCategory === 'all' || template.category === selectedCategory
  );

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Header */}
      <div style={{ background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a1a1a', margin: 0, textAlign: 'center' }}>
            🎨 גלריית תבניות
          </h1>
          <p style={{ textAlign: 'center', color: '#666', marginTop: '10px' }}>
            בחרו את התבנית המושלמת לעסק שלכם
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', gap: '30px' }}>
          {/* Sidebar */}
          <div style={{ width: '250px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>קטגוריות</h3>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '8px',
                    background: selectedCategory === category.id ? '#3b82f6' : '#f8f9fa',
                    color: selectedCategory === category.id ? 'white' : '#333',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'right',
                    fontSize: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>({category.count})</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginTop: '20px' }}>
              <h3 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>סטטיסטיקות</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>6</span>
                <span style={{ color: '#666' }}>סה"כ תבניות</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontWeight: 'bold', color: '#10b981' }}>5,092</span>
                <span style={{ color: '#666' }}>הורדות כולל</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', color: '#f59e0b' }}>4.8 ⭐</span>
                <span style={{ color: '#666' }}>דירוג ממוצע</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>
                {filteredTemplates.length} תבניות נמצאו
              </h2>
              <p style={{ color: '#666' }}>
                {selectedCategory !== 'all' && `קטגוריה: ${categories.find(c => c.id === selectedCategory)?.name}`}
              </p>
            </div>

            {/* Templates Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
              {filteredTemplates.map(template => (
                <div
                  key={template.id}
                  style={{
                    background: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  }}
                >
                  {/* Template Preview */}
                  <div style={{
                    height: '200px',
                    background: `linear-gradient(135deg, ${
                      template.category === 'business' ? '#667eea, #764ba2' :
                      template.category === 'restaurant' ? '#1a1a1a, #333' :
                      template.category === 'shop' ? '#ff6b6b, #ee5a24' :
                      '#3498db, #8b5cf6'
                    })`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '3rem',
                    position: 'relative'
                  }}>
                    {template.category === 'business' && '🏢'}
                    {template.category === 'restaurant' && '🍽️'}
                    {template.category === 'shop' && '🛍️'}
                    {template.category === 'services' && '⚙️'}
                    
                    {/* Price Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: template.price === 'חינם' ? '#10b981' : '#3b82f6',
                      color: 'white',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {template.price}
                    </div>

                    {/* Rating Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      left: '15px',
                      background: 'rgba(255,255,255,0.9)',
                      color: '#333',
                      padding: '5px 10px',
                      borderRadius: '15px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      ⭐ {template.rating}
                    </div>
                  </div>

                  {/* Template Info */}
                  <div style={{ padding: '25px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                      <div>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0 0 8px 0', color: '#1a1a1a' }}>
                          {template.name}
                        </h3>
                        <p style={{ color: '#666', margin: 0, fontSize: '14px', lineHeight: '1.4' }}>
                          {template.description}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <div style={{ fontSize: '12px', color: '#888' }}>
                        {template.downloads.toLocaleString()} הורדות
                      </div>
                      <div style={{
                        background: '#f0f9ff',
                        color: '#0369a1',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        {categories.find(c => c.id === template.category)?.name}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button style={{
                        flex: 1,
                        background: '#f8f9fa',
                        color: '#333',
                        padding: '12px',
                        border: '1px solid #e9ecef',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}>
                        👁️ תצוגה מקדימה
                      </button>
                      <button style={{
                        flex: 1,
                        background: '#3b82f6',
                        color: 'white',
                        padding: '12px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}>
                        ✏️ {template.price === 'חינם' ? 'התחל עריכה' : 'רכישה ועריכה'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredTemplates.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#333' }}>
                  לא נמצאו תבניות
                </h3>
                <p style={{ color: '#666', marginBottom: '20px' }}>
                  נסו לבחור קטגוריה אחרת
                </p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  style={{
                    background: '#3b82f6',
                    color: 'white',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  הצג הכל
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
