'use client';
import { useState, useEffect } from 'react';

export default function UltimateTemplatesGallery() {
  const [selectedCategory, setSelectedCategory] = useState('הכל');
  const [searchTerm, setSearchTerm] = useState('');
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [hoveredTemplate, setHoveredTemplate] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const templates = [
    {
      id: 1,
      title: "עסק מקומי מודרני",
      description: "תבנית מתקדמת עם אנימציות וחוויית משתמש מושלמת",
      category: "עסקים",
      price: "חינם",
      rating: 4.9,
      downloads: 2847,
      tags: ["רספונסיבי", "SEO", "מהיר"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      preview: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      html: `
        <!DOCTYPE html>
        <html lang="he" dir="rtl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>עסק מקומי מודרני</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 100px 20px; text-align: center; }
            .hero h1 { font-size: 3rem; margin-bottom: 20px; }
            .hero p { font-size: 1.3rem; margin-bottom: 30px; opacity: 0.9; }
            .btn-primary { background: rgba(255,255,255,0.2); color: white; padding: 15px 30px; border: 2px solid white; border-radius: 50px; font-size: 1.1rem; cursor: pointer; backdrop-filter: blur(10px); }
            .services { padding: 80px 20px; max-width: 1200px; margin: 0 auto; }
            .services h2 { text-align: center; margin-bottom: 50px; font-size: 2.5rem; }
            .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
            .service-card { background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; }
            .service-icon { font-size: 3rem; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <header class="header">
            <nav class="nav">
              <div class="logo">🏥 קליניקת הבריאות</div>
              <div>📞 03-1234567</div>
            </nav>
          </header>
          <div class="hero">
            <h1>בריאות ברמה הגבוהה ביותר</h1>
            <p>טיפול רפואי מקצועי ואמין עם טכנולוגיות מתקדמות</p>
            <button class="btn-primary">הזמינו תור עכשיו</button>
          </div>
          <div class="services">
            <h2>השירותים הרפואיים שלנו</h2>
            <div class="services-grid">
              <div class="service-card">
                <div class="service-icon">🩺</div>
                <h3>רפואה כללית</h3>
                <p>טיפול רפואי כללי ובדיקות מקיפות</p>
              </div>
              <div class="service-card">
                <div class="service-icon">❤️</div>
                <h3>קרדיולוגיה</h3>
                <p>בדיקות לב מתקדמות ומעקב רפואי</p>
              </div>
              <div class="service-card">
                <div class="service-icon">🦴</div>
                <h3>אורתופדיה</h3>
                <p>טיפול במחלות עצמות ופרקים</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    }
  ];

  const categories = ['הכל', 'עסקים', 'מסעדות', 'חנויות', 'עיצוב', 'שירותים', 'בריאות'];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'הכל' || template.category === selectedCategory;
    const matchesSearch = template.title.includes(searchTerm) || template.description.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  const openPreview = (template) => {
    setPreviewTemplate(template);
  };

  const closePreview = () => {
    setPreviewTemplate(null);
  };

  const editTemplate = (template) => {
    // Navigate to editor with template data
    alert(`מעביר לאדיטור עם תבנית: ${template.title}`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
        `,
        animation: 'float 20s ease-in-out infinite'
      }} />

      {/* Glassmorphism Container */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        minHeight: '100vh',
        backdropFilter: 'blur(20px)',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        {/* Header */}
        <header style={{
          padding: '30px 40px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 20px rgba(255,255,255,0.3)',
              letterSpacing: '-0.02em'
            }}>
              🎨 גלריית תבניות פרימיום
            </h1>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              color: 'rgba(255,255,255,0.9)',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                ⭐ {filteredTemplates.reduce((acc, t) => acc + t.rating, 0) / filteredTemplates.length || 0}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                📥 {filteredTemplates.reduce((acc, t) => acc + t.downloads, 0).toLocaleString()}
              </div>
            </div>
          </div>
        </header>

        {/* Search and Filter Section */}
        <div style={{
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              gap: '30px',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '30px'
            }}>
              <input
                type="text"
                placeholder="🔍 חפש תבניות..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: '1',
                  minWidth: '300px',
                  padding: '15px 25px',
                  fontSize: '1.1rem',
                  border: 'none',
                  borderRadius: '50px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(20px)',
                  color: 'white',
                  outline: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Categories */}
            <div style={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
              justifyContent: 'center'
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
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(20px)',
                    border: selectedCategory === category 
                      ? '2px solid rgba(255, 255, 255, 0.5)' 
                      : '1px solid rgba(255, 255, 255, 0.2)',
                    transform: selectedCategory === category ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: selectedCategory === category 
                      ? '0 8px 25px rgba(255,255,255,0.2)' 
                      : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.transform = 'scale(1.02) translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'scale(1) translateY(0)';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div style={{
          padding: '60px 40px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '40px',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease'
          }}>
            {filteredTemplates.map((template, index) => (
              <div
                key={template.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  animation: `slideUp 0.6s ease ${index * 0.1}s both`,
                  transformOrigin: 'center bottom'
                }}
                onMouseEnter={(e) => {
                  setHoveredTemplate(template.id);
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.3)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  setHoveredTemplate(null);
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                {/* Template Preview */}
                <div style={{
                  height: '280px',
                  background: template.gradient,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Floating particles effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 1px, transparent 1px),
                      radial-gradient(circle at 80% 40%, rgba(255,255,255,0.1) 1px, transparent 1px),
                      radial-gradient(circle at 40% 80%, rgba(255,255,255,0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px, 30px 30px, 40px 40px',
                    animation: 'float 15s ease-in-out infinite'
                  }} />
                  
                  {/* Price Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: template.price === 'חינם' 
                      ? 'linear-gradient(135deg, #10b981, #059669)' 
                      : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {template.price}
                  </div>

                  {/* Rating */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'rgba(0,0,0,0.4)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    ⭐ {template.rating}
                  </div>

                  {/* Hover Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.7)',
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
                      transform: hoveredTemplate === template.id ? 'scale(1)' : 'scale(0.8)',
                      transition: 'transform 0.3s ease'
                    }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openPreview(template);
                        }}
                        style={{
                          background: 'rgba(255,255,255,0.2)',
                          color: 'white',
                          border: '2px solid white',
                          padding: '12px 20px',
                          borderRadius: '25px',
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          backdropFilter: 'blur(20px)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'white';
                          e.target.style.color = '#667eea';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'rgba(255,255,255,0.2)';
                          e.target.style.color = 'white';
                        }}
                      >
                        👁️ תצוגה מקדימה
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          editTemplate(template);
                        }}
                        style={{
                          background: 'linear-gradient(135deg, #10b981, #059669)',
                          color: 'white',
                          border: 'none',
                          padding: '12px 20px',
                          borderRadius: '25px',
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.05)';
                          e.target.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                          e.target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.4)';
                        }}
                      >
                        🚀 התחל עריכה
                      </button>
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div style={{ padding: '30px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '15px'
                  }}>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: 'white',
                      marginBottom: '8px',
                      textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                      {template.title}
                    </h3>
                    <div style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      backdropFilter: 'blur(10px)'
                    }}>
                      {template.category}
                    </div>
                  </div>
                  
                  <p style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    textShadow: '0 1px 5px rgba(0,0,0,0.3)'
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
                          background: 'rgba(255,255,255,0.2)',
                          color: 'white',
                          padding: '4px 10px',
                          borderRadius: '10px',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.9rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <span>📥 {template.downloads.toLocaleString()}</span>
                      <span>⭐ {template.rating}</span>
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.2)',
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontWeight: '600',
                      backdropFilter: 'blur(10px)'
                    }}>
                      {template.price}
                    </div>
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
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
            backdropFilter: 'blur(20px)'
          }} onClick={closePreview}>
            <div style={{
              background: 'white',
              borderRadius: '20px',
              width: '95%',
              height: '95%',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
            }} onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '20px 30px',
                zIndex: 1001,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backdropFilter: 'blur(20px)'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '600' }}>
                    {previewTemplate.title}
                  </h3>
                  <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>
                    תצוגה מקדימה מלאה
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <button
                    onClick={() => editTemplate(previewTemplate)}
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      border: '2px solid white',
                      padding: '10px 20px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'white';
                      e.target.style.color = '#667eea';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.2)';
                      e.target.style.color = 'white';
                    }}
                  >
                    🚀 ערוך תבנית
                  </button>
                  <button
                    onClick={closePreview}
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      border: '2px solid white',
                      padding: '10px 20px',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#ef4444';
                      e.target.style.borderColor = '#ef4444';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.2)';
                      e.target.style.borderColor = 'white';
                    }}
                  >
                    ✕ סגור
                  </button>
                </div>
              </div>
              
              {/* Template Content */}
              <iframe
                srcDoc={previewTemplate.html}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '20px',
                  paddingTop: '80px'
                }}
                title="תצוגה מקדימה מלאה"
              />
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(1deg); }
            66% { transform: translateY(5px) rotate(-1deg); }
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          input::placeholder {
            color: rgba(255,255,255,0.7);
          }
        `}
      </style>
    </div>
  );
}deg, #667eea 0%, #764ba2 100%); color: white; padding: 100px 20px; text-align: center; }
            .hero h1 { font-size: 3rem; margin-bottom: 20px; animation: fadeInUp 1s ease; }
            .hero p { font-size: 1.3rem; margin-bottom: 30px; animation: fadeInUp 1s ease 0.2s both; }
            .btn { background: white; color: #667eea; padding: 15px 30px; border: none; border-radius: 50px; font-size: 1.1rem; cursor: pointer; animation: fadeInUp 1s ease 0.4s both; }
            .services { padding: 80px 20px; max-width: 1200px; margin: 0 auto; }
            .services h2 { text-align: center; margin-bottom: 50px; font-size: 2.5rem; }
            .service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
            .service-card { background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
            .service-card:hover { transform: translateY(-10px); }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          </style>
        </head>
        <body>
          <div class="hero">
            <h1>העסק המקומי שלכם</h1>
            <p>פתרונות מקצועיים ברמה הגבוהה ביותר</p>
            <button class="btn">צרו קשר עכשיו</button>
          </div>
          <div class="services">
            <h2>השירותים שלנו</h2>
            <div class="service-grid">
              <div class="service-card">
                <h3>ייעוץ עסקי</h3>
                <p>ליווי מקצועי לפיתוח העסק שלכם</p>
              </div>
              <div class="service-card">
                <h3>פתרונות דיגיטליים</h3>
                <p>בניית נוכחות חזקה ברשת</p>
              </div>
              <div class="service-card">
                <h3>שיווק ומכירות</h3>
                <p>הגדלת המכירות והרווחיות</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    },
    {
      id: 2,
      title: "מסעדה אלגנטית",
      description: "חוויית קולינרית מושלמת עם עיצוב יוקרתי ומתקדם",
      category: "מסעדות",
      price: "₪149",
      rating: 4.8,
      downloads: 1923,
      tags: ["תפריט דיגיטלי", "הזמנות", "גלריה"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      preview: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      html: `
        <!DOCTYPE html>
        <html lang="he" dir="rtl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>מסעדה אלגנטית</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Playfair Display', serif; line-height: 1.6; color: #2c3e50; }
            .hero { background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop'); background-size: cover; background-position: center; color: white; padding: 150px 20px; text-align: center; }
            .hero h1 { font-size: 4rem; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
            .hero p { font-size: 1.5rem; margin-bottom: 30px; }
            .btn { background: #e74c3c; color: white; padding: 15px 30px; border: none; border-radius: 5px; font-size: 1.1rem; cursor: pointer; transition: all 0.3s ease; }
            .btn:hover { background: #c0392b; transform: translateY(-2px); }
            .menu-section { padding: 80px 20px; max-width: 1000px; margin: 0 auto; }
            .menu-section h2 { text-align: center; margin-bottom: 50px; font-size: 3rem; color: #2c3e50; }
            .menu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px; }
            .menu-item { border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 20px; }
            .menu-item h3 { color: #e74c3c; margin-bottom: 10px; }
            .menu-item .price { float: left; font-weight: bold; color: #27ae60; }
          </style>
        </head>
        <body>
          <div class="hero">
            <h1>ביסטרו אלגנס</h1>
            <p>חוויה קולינרית בלתי נשכחת</p>
            <button class="btn">הזמינו מקום</button>
          </div>
          <div class="menu-section">
            <h2>התפריט שלנו</h2>
            <div class="menu-grid">
              <div>
                <div class="menu-item">
                  <h3>סטייק אנגוס</h3>
                  <span class="price">₪89</span>
                  <p>סטייק אנגוס מעולה עם תוספות עונתיות</p>
                </div>
                <div class="menu-item">
                  <h3>דג ים טרי</h3>
                  <span class="price">₪75</span>
                  <p>דג ים טרי של היום עם ירקות צלויים</p>
                </div>
              </div>
              <div>
                <div class="menu-item">
                  <h3>פסטה טרופיה</h3>
                  <span class="price">₪65</span>
                  <p>פסטה בית עם רטבי הבית המיוחדים</p>
                </div>
                <div class="menu-item">
                  <h3>סלט קיסר</h3>
                  <span class="price">₪45</span>
                  <p>סלט קיסר קלאסי עם עוף צלוי</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    },
    {
      id: 3,
      title: "חנות אופנה טרנדית",
      description: "קטלוג מוצרים אינטראקטיבי עם חוויית קנייה מתקדמת",
      category: "חנויות",
      price: "₪199",
      rating: 4.9,
      downloads: 3156,
      tags: ["סל קניות", "תשלומים", "מלאי"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      preview: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      html: `
        <!DOCTYPE html>
        <html lang="he" dir="rtl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>חנות אופנה טרנדית</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
            .header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 20px; }
            .nav { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; }
            .logo { font-size: 2rem; font-weight: bold; }
            .hero { background: #f8f9fa; padding: 80px 20px; text-align: center; }
            .hero h1 { font-size: 3rem; margin-bottom: 20px; color: #2c3e50; }
            .hero p { font-size: 1.3rem; margin-bottom: 30px; color: #7f8c8d; }
            .products { padding: 80px 20px; max-width: 1200px; margin: 0 auto; }
            .products h2 { text-align: center; margin-bottom: 50px; font-size: 2.5rem; }
            .product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
            .product-card { background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: all 0.3s ease; }
            .product-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
            .product-image { height: 200px; background: linear-gradient(45deg, #f093fb, #f5576c); }
            .product-info { padding: 20px; }
            .product-price { color: #e74c3c; font-size: 1.3rem; font-weight: bold; }
            .btn { background: #4facfe; color: white; padding: 10px 20px; border: none; border-radius: 25px; cursor: pointer; margin-top: 10px; }
          </style>
        </head>
        <body>
          <header class="header">
            <nav class="nav">
              <div class="logo">StyleHub</div>
              <div>🛒 סל קניות (0)</div>
            </nav>
          </header>
          <div class="hero">
            <h1>אופנה שמתחדשת</h1>
            <p>הקולקציה החדשה כבר כאן - סטייל שלא תמצאו בשום מקום אחר</p>
          </div>
          <div class="products">
            <h2>מוצרים מובחרים</h2>
            <div class="product-grid">
              <div class="product-card">
                <div class="product-image"></div>
                <div class="product-info">
                  <h3>חולצה אלגנטית</h3>
                  <p>חולצה מעוצבת מבד איכותי</p>
                  <div class="product-price">₪129</div>
                  <button class="btn">הוסף לסל</button>
                </div>
              </div>
              <div class="product-card">
                <div class="product-image"></div>
                <div class="product-info">
                  <h3>מכנסיים מודרניים</h3>
                  <p>מכנסיים בגזרה מושלמת</p>
                  <div class="product-price">₪199</div>
                  <button class="btn">הוסף לסל</button>
                </div>
              </div>
              <div class="product-card">
                <div class="product-image"></div>
                <div class="product-info">
                  <h3>נעליים ספורטיביות</h3>
                  <p>נעליים נוחות לכל יום</p>
                  <div class="product-price">₪299</div>
                  <button class="btn">הוסף לסל</button>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    },
    {
      id: 4,
      title: "סטודיו לעיצוב",
      description: "פורטפוליו אינטראקטיבי עם גלריית עבודות מתקדמת",
      category: "עיצוב",
      price: "חינם",
      rating: 4.7,
      downloads: 1456,
      tags: ["פורטפוליו", "גלריה", "מינימלי"],
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      preview: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      html: `
        <!DOCTYPE html>
        <html lang="he" dir="rtl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>סטודיו לעיצוב</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2c3e50; background: #f8f9fa; }
            .hero { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); padding: 120px 20px; text-align: center; }
            .hero h1 { font-size: 4rem; margin-bottom: 20px; font-weight: 300; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
            .hero p { font-size: 1.5rem; color: rgba(255,255,255,0.9); font-weight: 300; }
            .portfolio { padding: 100px 20px; max-width: 1400px; margin: 0 auto; }
            .portfolio h2 { text-align: center; margin-bottom: 60px; font-size: 3rem; font-weight: 300; }
            .portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px; }
            .portfolio-item { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.08); transition: all 0.4s ease; position: relative; }
            .portfolio-item:hover { transform: translateY(-15px); box-shadow: 0 25px 50px rgba(0,0,0,0.15); }
            .portfolio-image { height: 300px; background: linear-gradient(45deg, #667eea, #764ba2); position: relative; overflow: hidden; }
            .portfolio-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); opacity: 0; transition: opacity 0.3s ease; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; }
            .portfolio-item:hover .portfolio-overlay { opacity: 1; }
            .portfolio-info { padding: 30px; }
            .portfolio-info h3 { margin-bottom: 10px; font-size: 1.5rem; }
            .portfolio-info p { color: #7f8c8d; line-height: 1.8; }
          </style>
        </head>
        <body>
          <div class="hero">
            <h1>Design Studio</h1>
            <p>יוצרים חוויות עיצוב בלתי נשכחות</p>
          </div>
          <div class="portfolio">
            <h2>הפרויקטים שלנו</h2>
            <div class="portfolio-grid">
              <div class="portfolio-item">
                <div class="portfolio-image">
                  <div class="portfolio-overlay">לחץ לצפייה</div>
                </div>
                <div class="portfolio-info">
                  <h3>זהות חזותית לחברת טכנולוגיה</h3>
                  <p>פיתוח זהות חזותית מלאה כולל לוגו, צבעים וטיפוגרפיה עבור חברת סטארט-אפ מובילה</p>
                </div>
              </div>
              <div class="portfolio-item">
                <div class="portfolio-image">
                  <div class="portfolio-overlay">לחץ לצפייה</div>
                </div>
                <div class="portfolio-info">
                  <h3>עיצוב אפליקציה מובילה</h3>
                  <p>UX/UI מתקדם לאפליקציית מובייל עם מעל מיליון משתמשים רשומים</p>
                </div>
              </div>
              <div class="portfolio-item">
                <div class="portfolio-image">
                  <div class="portfolio-overlay">לחץ לצפייה</div>
                </div>
                <div class="portfolio-info">
                  <h3>קמפיין דיגיטלי מובחר</h3>
                  <p>עיצוב קמפיין דיגיטלי מלא כולל באנרים, לנדינג ופייג' ותוכן למדיה חברתית</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    },
    {
      id: 5,
      title: "שירותי ייעוץ מתקדמים",
      description: "פלטפורמה מקצועית לייעוץ עסקי ופיננסי",
      category: "שירותים",
      price: "₪89",
      rating: 4.8,
      downloads: 2134,
      tags: ["CRM", "לקוחות", "דוחות"],
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
      preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      html: `
        <!DOCTYPE html>
        <html lang="he" dir="rtl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>שירותי ייעוץ מתקדמים</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #2c3e50; }
            .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 120px 20px; text-align: center; position: relative; overflow: hidden; }
            .hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="white" opacity="0.1"><polygon points="1000,100 1000,0 0,100"/></svg>') no-repeat bottom; background-size: 100% 100px; }
            .hero h1 { font-size: 3.5rem; margin-bottom: 20px; position: relative; z-index: 2; }
            .hero p { font-size: 1.4rem; margin-bottom: 30px; position: relative; z-index: 2; opacity: 0.9; }
            .btn { background: rgba(255,255,255,0.2); color: white; padding: 15px 35px; border: 2px solid white; border-radius: 50px; font-size: 1.1rem; cursor: pointer; transition: all 0.3s ease; backdrop-filter: blur(10px); }
            .btn:hover { background: white; color: #667eea; transform: translateY(-2px); }
            .services { padding: 100px 20px; max-width: 1200px; margin: 0 auto; }
            .services h2 { text-align: center; margin-bottom: 60px; font-size: 2.8rem; color: #2c3e50; }
            .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px; }
            .service-card { background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%); padding: 40px; border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.08); transition: all 0.4s ease; border: 1px solid rgba(255,255,255,0.2); }
            .service-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.15); }
            .service-icon { width: 80px; height: 80px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 20px; margin-bottom: 25px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; }
            .service-card h3 { margin-bottom: 15px; font-size: 1.5rem; color: #2c3e50; }
            .service-card p { color: #7f8c8d; line-height: 1.8; }
            .cta-section { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 80px 20px; text-align: center; color: white; }
            .cta-section h2 { font-size: 2.5rem; margin-bottom: 20px; }
            .cta-section p { font-size: 1.3rem; margin-bottom: 30px; opacity: 0.9; }
          </style>
        </head>
        <body>
          <div class="hero">
            <h1>ייעוץ עסקי מתקדם</h1>
            <p>פתרונות מקצועיים להצלחה עסקית בעידן הדיגיטלי</p>
            <button class="btn">קבעו פגישת ייעוץ</button>
          </div>
          <div class="services">
            <h2>התמחויות שלנו</h2>
            <div class="services-grid">
              <div class="service-card">
                <div class="service-icon">💼</div>
                <h3>אסטרטגיה עסקית</h3>
                <p>פיתוח אסטרטגיות מותאמות לצמיחה ארוכת טווח עם דגש על יעדים מדידים ותוצאות ממשיות</p>
              </div>
              <div class="service-card">
                <div class="service-icon">📊</div>
                <h3>ייעוץ פיננסי</h3>
                <p>ניהול תזרים מזומנים, תכנון תקציבי ואופטימיזציה של הרווחיות העסקית</p>
              </div>
              <div class="service-card">
                <div class="service-icon">🚀</div>
                <h3>טרנספורמציה דיגיטלית</h3>
                <p>הובלת העסק לעידן הדיגיטלי עם כלים מתקדמים ופתרונות טכנולוגיים מותאמים</p>
              </div>
            </div>
          </div>
          <div class="cta-section">
            <h2>מוכנים להתחיל?</h2>
            <p>בואו נדבר על איך אנחנו יכולים לקדם את העסק שלכם</p>
            <button class="btn">צרו קשר עכשיו</button>
          </div>
        </body>
        </html>
      `
    },
    {
      id: 6,
      title: "קליניקה רפואית מתקדמת",
      description: "מערכת ניהול מטופלים מתקדמת עם הזמנת תורים",
      category: "בריאות",
      price: "₪249",
      rating: 4.9,
      downloads: 987,
      tags: ["תורים", "מטופלים", "HIPAA"],
      gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      preview: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      html: `
        <!DOCTYPE html>
        <html lang="he" dir="rtl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>קליניקה רפואית מתקדמת</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #2c3e50; }
            .header { background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%); color: white; padding: 20px; }
            .nav { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; }
            .logo { font-size: 1.8rem; font-weight: bold; }
            .hero { background: linear-gradient(135
