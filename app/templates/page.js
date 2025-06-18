'use client';
import { useState } from 'react';

export default function ThemeForestStyleGallery() {
  const [selectedCategory, setSelectedCategory] = useState('הכל');
  const [hoveredTemplate, setHoveredTemplate] = useState(null);
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      title: "Webmaster Pro - Business",
      subtitle: "עסק מקומי מודרני",
      description: "תבנית עסקית מתקדמת עם כלי ניהול לקוחות, מערכת CRM מובנית ועיצוב רספונסיבי מושלם",
      category: "עסקים",
      price: "חינם",
      originalPrice: "₪299",
      rating: 4.9,
      reviews: 247,
      downloads: 2847,
      tags: ["רספונסיבי", "CRM", "SEO", "מהיר"],
      preview: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center",
      features: ["Landing Page מקצועי", "מערכת ניהול לקוחות", "טפסי יצירת קשר", "גלריית פרויקטים", "בלוג מובנה"],
      demoUrl: "https://business-demo.webmaster.pro",
      lastUpdate: "דצמבר 2024"
    },
    {
      id: 2,
      title: "Gourmet - Restaurant Theme",
      subtitle: "מסעדה אלגנטית",
      description: "תבנית מסעדה יוקרתית עם תפריט דיגיטלי, מערכת הזמנות מתקדמת וגלריית תמונות מרהיבה",
      category: "מסעדות",
      price: "₪149",
      originalPrice: "₪299",
      rating: 4.8,
      reviews: 156,
      downloads: 1923,
      tags: ["תפריט דיגיטלי", "הזמנות", "גלריה", "מובייל"],
      preview: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center",
      features: ["תפריט אינטראקטיבי", "מערכת הזמנת שולחן", "גלריית מנות", "עמוד השף", "חוות דעת לקוחות"],
      demoUrl: "https://restaurant-demo.webmaster.pro",
      lastUpdate: "נובמבר 2024"
    },
    {
      id: 3,
      title: "StyleHub - Fashion Store",
      subtitle: "חנות אופנה טרנדית",
      description: "פלטפורמת אי-קומרס מתקדמת עם קטלוג מוצרים דינמי, סל קניות חכם ומערכת תשלומים מאובטחת",
      category: "חנויות",
      price: "₪199",
      originalPrice: "₪399",
      rating: 4.9,
      reviews: 198,
      downloads: 3156,
      tags: ["אי-קומרס", "סל קניות", "תשלומים", "מלאי"],
      preview: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
      features: ["קטלוג מוצרים מתקדם", "סל קניות חכם", "מערכת תשלומים", "ניהול מלאי", "קופונים והנחות"],
      demoUrl: "https://fashion-demo.webmaster.pro",
      lastUpdate: "דצמבר 2024"
    },
    {
      id: 4,
      title: "Creative Studio Portfolio",
      subtitle: "סטודיו לעיצוב",
      description: "פורטפוליו מקצועי למעצבים וסטודיו עיצוב עם גלריית עבודות אינטראקטיבית ומערכת ניהול פרויקטים",
      category: "עיצוב",
      price: "חינם",
      originalPrice: "₪199",
      rating: 4.7,
      reviews: 89,
      downloads: 1456,
      tags: ["פורטפוליו", "גלריה", "מינימלי", "אמנים"],
      preview: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=center",
      features: ["גלריית עבודות מתקדמת", "עמוד אודות מעצב", "טופס צרו קשר", "בלוג עיצוב", "תצוגת לקוחות"],
      demoUrl: "https://design-demo.webmaster.pro",
      lastUpdate: "אוקטובר 2024"
    },
    {
      id: 5,
      title: "ConsultPro - Business Advisory",
      subtitle: "שירותי ייעוץ מתקדמים",
      description: "פלטפורמה מקצועית לחברות ייעוץ עם מערכת ניהול לקוחות, קביעת פגישות ומערכת CRM מובנית",
      category: "שירותים",
      price: "₪89",
      originalPrice: "₪179",
      rating: 4.8,
      reviews: 134,
      downloads: 2134,
      tags: ["CRM", "פגישות", "ייעוץ", "דוחות"],
      preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
      features: ["מערכת ניהול לקוחות", "קביעת פגישות אונליין", "מחשבון ROI", "דוחות ביצועים", "אזור לקוח פרטי"],
      demoUrl: "https://consulting-demo.webmaster.pro",
      lastUpdate: "נובמבר 2024"
    },
    {
      id: 6,
      title: "MediCare - Medical Clinic",
      subtitle: "קליניקה רפואית מתקדמת",
      description: "מערכת ניהול קליניקה מקצועית עם הזמנת תורים, ניהול מטופלים ועמידה בתקני HIPAA",
      category: "בריאות",
      price: "₪249",
      originalPrice: "₪499",
      rating: 4.9,
      reviews: 67,
      downloads: 987,
      tags: ["תורים", "מטופלים", "HIPAA", "רפואה"],
      preview: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
      features: ["מערכת הזמנת תורים", "כרטיס מטופל דיגיטלי", "מערכת תשלומים", "תזכורות אוטומטיות", "דוחות רפואיים"],
      demoUrl: "https://medical-demo.webmaster.pro",
      lastUpdate: "דצמבר 2024"
    }
  ];

  const categories = [
    { name: 'הכל', count: templates.length },
    { name: 'עסקים', count: templates.filter(t => t.category === 'עסקים').length },
    { name: 'מסעדות', count: templates.filter(t => t.category === 'מסעדות').length },
    { name: 'חנויות', count: templates.filter(t => t.category === 'חנויות').length },
    { name: 'עיצוב', count: templates.filter(t => t.category === 'עיצוב').length },
    { name: 'שירותים', count: templates.filter(t => t.category === 'שירותים').length },
    { name: 'בריאות', count: templates.filter(t => t.category === 'בריאות').length }
  ];

  const filteredTemplates = templates.filter(template => 
    selectedCategory === 'הכל' || template.category === selectedCategory
  );

  const openPreview = (template) => {
    setPreviewTemplate(template);
  };

  const closePreview = () => {
    setPreviewTemplate(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8fafc',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        color: 'white',
        padding: '60px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }} />
        
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em'
            }}>
              תבניות אתרים מקצועיות
            </h1>
            <p style={{
              fontSize: '1.3rem',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              תבניות איכותיות ומקצועיות לכל סוג עסק - עיצוב מודרני, רספונסיבי ומותאם SEO
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              padding: '20px 30px',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '5px' }}>⭐</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>4.8</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>דירוג ממוצע</div>
            </div>
            
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              padding: '20px 30px',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '5px' }}>📥</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {templates.reduce((acc, t) => acc + t.downloads, 0).toLocaleString()}
              </div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>הורדות</div>
            </div>
            
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              padding: '20px 30px',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '5px' }}>🎨</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{templates.length}</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>תבניות זמינות</div>
            </div>
          </div>
        </div>
      </header>

      {/* Categories Filter */}
      <div style={{
        background: 'white',
        borderBottom: '1px solid #e2e8f0',
        padding: '30px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px'
        }}>
          <div style={{
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {categories.map(category => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                style={{
                  padding: '12px 24px',
                  border: selectedCategory === category.name ? '2px solid #3b82f6' : '2px solid #e2e8f0',
                  borderRadius: '50px',
                  background: selectedCategory === category.name ? '#3b82f6' : 'white',
                  color: selectedCategory === category.name ? 'white' : '#64748b',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category.name) {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.color = '#3b82f6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category.name) {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.color = '#64748b';
                  }
                }}
              >
                <span>{category.name}</span>
                <span style={{
                  background: selectedCategory === category.name ? 'rgba(255,255,255,0.2)' : '#f1f5f9',
                  color: selectedCategory === category.name ? 'white' : '#64748b',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '60px 40px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
          gap: '40px'
        }}>
          {filteredTemplates.map((template, index) => (
            <div
              key={template.id}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: hoveredTemplate === template.id 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                  : '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                cursor: 'pointer',
                transform: hoveredTemplate === template.id ? 'translateY(-8px)' : 'translateY(0)',
                border: '1px solid #e2e8f0'
              }}
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              {/* Template Preview Image */}
              <div style={{
                position: 'relative',
                height: '280px',
                overflow: 'hidden'
              }}>
                <img
                  src={template.preview}
                  alt={template.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    transform: hoveredTemplate === template.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                
                {/* Price Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: template.price === 'חינם' 
                    ? 'linear-gradient(135deg, #10b981, #059669)' 
                    : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: '80px'
                }}>
                  <span>{template.price}</span>
                  {template.originalPrice && template.price !== 'חינם' && (
                    <span style={{
                      fontSize: '0.7rem',
                      opacity: 0.8,
                      textDecoration: 'line-through'
                    }}>
                      {template.originalPrice}
                    </span>
                  )}
                </div>

                {/* Rating Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'rgba(0,0,0,0.8)',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span>⭐</span>
                  <span>{template.rating}</span>
                  <span style={{ opacity: 0.7 }}>({template.reviews})</span>
                </div>

                {/* Hover Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: hoveredTemplate === template.id ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  backdropFilter: 'blur(5px)'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    transform: hoveredTemplate === template.id ? 'scale(1)' : 'scale(0.9)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openPreview(template);
                      }}
                      style={{
                        background: 'rgba(255,255,255,0.9)',
                        color: '#1e293b',
                        border: 'none',
                        padding: '12px 20px',
                        borderRadius: '25px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>👁️</span>
                      <span>תצוגה מקדימה</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`🚀 מעביר לאדיטור עם תבנית: ${template.title}`);
                      }}
                      style={{
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        color: 'white',
                        border: 'none',
                        padding: '12px 20px',
                        borderRadius: '25px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
                      }}
                    >
                      <span>🚀</span>
                      <span>התחל עריכה</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Template Info */}
              <div style={{ padding: '25px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '5px',
                      lineHeight: 1.3
                    }}>
                      {template.title}
                    </h3>
                    <div style={{
                      color: '#64748b',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {template.subtitle}
                    </div>
                  </div>
                  <div style={{
                    background: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    {template.category}
                  </div>
                </div>
                
                <p style={{
                  color: '#64748b',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}>
                  {template.description}
                </p>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '20px'
                }}>
                  {template.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        background: '#e0f2fe',
                        color: '#0369a1',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div style={{
                  background: '#f8fafc',
                  padding: '15px',
                  borderRadius: '12px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: '#475569',
                    marginBottom: '8px'
                  }}>
                    תכונות עיקריות:
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '5px'
                  }}>
                    {template.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          color: '#64748b',
                          background: 'white',
                          padding: '2px 8px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                    {template.features.length > 3 && (
                      <span style={{
                        fontSize: '0.75rem',
                        color: '#3b82f6',
                        fontWeight: '500'
                      }}>
                        +{template.features.length - 3} נוספות
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats and Actions */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    color: '#64748b',
                    fontSize: '0.85rem'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>📥</span>
                      <span>{template.downloads.toLocaleString()}</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>⭐</span>
                      <span>{template.rating}</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>🕒</span>
                      <span>{template.lastUpdate}</span>
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: template.price === 'חינם' ? '#10b981' : '#3b82f6'
                    }}>
                      {template.price}
                    </span>
                    <button
                      style={{
                        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = 'none';
                      }}
                      onClick={() => alert(`🚀 מעביר לאדיטור עם תבנית: ${template.title}`)}
                    >
                      בחר תבנית
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#64748b'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔍</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
              לא נמצאו תבניות בקטגוריה זו
            </h3>
            <p>נסה לבחור קטגוריה אחרת או חזור לתצוגת "הכל"</p>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '20px',
          backdropFilter: 'blur(10px)'
        }} onClick={closePreview}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            width: '95%',
            height: '95%',
            maxWidth: '1200px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column'
          }} onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div style={{
              background: 'linear-gradient(135deg, #1e293b, #334155)',
              color: 'white',
              padding: '25px 30px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '5px'
                }}>
                  {previewTemplate.title}
                </h3>
                <p style={{
                  opacity: 0.9,
                  fontSize: '1rem'
                }}>
                  {previewTemplate.subtitle}
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '15px' }}>
                <button
                  onClick={() => {
                    alert(`🚀 מעביר לאדיטור עם תבנית: ${previewTemplate.title}`);
                    closePreview();
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span>🚀</span>
                  <span>התחל עריכה</span>
                </button>
                
                <button
                  onClick={closePreview}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    border: '2px solid rgba(255,255,255,0.3)',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span>✕</span>
                  <span>סגור</span>
                </button>
              </div>
            </div>
            
            {/* Template Details */}
            <div style={{
              background: '#f8fafc',
              padding: '20px 30px',
              borderBottom: '1px solid #e2e8f0'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginBottom: '15px'
              }}>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>מחיר: </span>
                  <span style={{ fontWeight: '700', color: '#10b981' }}>{previewTemplate.price}</span>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>דירוג: </span>
                  <span style={{ fontWeight: '700' }}>⭐ {previewTemplate.rating} ({previewTemplate.reviews} ביקורות)</span>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>הורדות: </span>
                  <span style={{ fontWeight: '700' }}>{previewTemplate.downloads.toLocaleString()}</span>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>עודכן: </span>
                  <span style={{ fontWeight: '700' }}>{previewTemplate.lastUpdate}</span>
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <span style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>
                  תכונות כלולות:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {previewTemplate.features.map((feature, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'white',
                        color: '#475569',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Preview Content */}
            <div style={{
              flex: 1,
              background: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: '#64748b'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎨</div>
                <div style={{ marginBottom: '10px' }}>תצוגה מקדימה של התבנית</div>
                <div style={{ fontSize: '1rem' }}>{previewTemplate.title}</div>
                <div style={{
                  marginTop: '20px',
                  padding: '15px 25px',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: 'white',
                  borderRadius: '25px',
                  display: 'inline-block',
                  cursor: 'pointer'
                }} onClick={() => {
                  alert(`🚀 מעביר לאדיטור עם תבנית: ${previewTemplate.title}`);
                  closePreview();
                }}>
                  🚀 התחל עריכה עכשיו
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        color: 'white',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '20px'
          }}>
            מוכן להתחיל?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            marginBottom: '30px',
            lineHeight: 1.6
          }}>
            בחר תבנית שמתאימה לעסק שלך והתחל לעצב את האתר המושלם עוד היום
          </p>
          <button style={{
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
          }}>
            🚀 התחל עכשיו בחינם
          </button>
        </div>
      </div>
    </div>
  );
}
