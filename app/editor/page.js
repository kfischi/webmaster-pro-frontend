'use client';

import React, { useState, useEffect, useRef } from 'react';

// =============================================
// BARBERSHOP CANVAS - תבנית מלאה ומקצועית
// =============================================
function BarbershopCanvas({ view, zoom, orientation, onSelectElement }) {
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (id) => {
    setSelectedId(id);
    if (onSelectElement) onSelectElement(id);
  };

  const getResponsiveStyles = () => {
    switch (view) {
      case 'mobile':
        return { fontSize: '14px', padding: '10px' };
      case 'tablet':
        return { fontSize: '16px', padding: '15px' };
      default:
        return { fontSize: '18px', padding: '20px' };
    }
  };

  const getHeroResponsiveStyle = () => {
    switch (view) {
      case 'mobile':
        return { height: '60vh', padding: '30px 15px' };
      case 'tablet':
        return { height: '70vh', padding: '40px 20px' };
      default:
        return { height: '90vh', padding: '60px 40px' };
    }
  };

  if (isLoading) {
    return (
      <div style={canvasStyles.loadingScreen}>
        <div style={canvasStyles.spinner}></div>
        <p style={canvasStyles.loadingText}>טוען תבנית מקצועית...</p>
      </div>
    );
  }

  return (
    <div style={{
      ...canvasStyles.canvas,
      ...getResponsiveStyles(),
      transform: `scale(${zoom / 100})`,
      transformOrigin: 'top left'
    }}>
      {/* Hero Section */}
      <section
        data-id="hero"
        onClick={() => handleSelect('hero')}
        style={{
          ...canvasStyles.hero,
          ...getHeroResponsiveStyle(),
          outline: selectedId === 'hero' ? '3px solid #3b82f6' : 'none',
          cursor: 'pointer'
        }}
      >
        <div style={canvasStyles.heroContent}>
          <h1 style={{
            ...canvasStyles.heroTitle,
            fontSize: view === 'mobile' ? '2.2rem' : view === 'tablet' ? '3rem' : '4rem'
          }}>
            המספרה הכי יוקרתית בישראל
          </h1>
          <p style={{
            ...canvasStyles.heroSubtitle,
            fontSize: view === 'mobile' ? '1rem' : view === 'tablet' ? '1.2rem' : '1.5rem'
          }}>
            סטייל, מקצועיות, ואווירה שאין בשום מקום אחר
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              border: 'none',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              📞 הזמן תור עכשיו
            </button>
          </div>
        </div>
        
        {selectedId === 'hero' && (
          <div style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(59, 130, 246, 0.9)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            zIndex: 10
          }}>
            ✏️ עריכת Hero Section
          </div>
        )}
      </section>

      {/* Services Section */}
      <section
        data-id="services"
        onClick={() => handleSelect('services')}
        style={{
          padding: '60px 20px',
          background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
          outline: selectedId === 'services' ? '3px solid #3b82f6' : 'none',
          cursor: 'pointer'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: view === 'mobile' ? '2rem' : '3rem',
            marginBottom: '50px',
            color: '#f8fafc'
          }}>
            השירותים שלנו
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: view === 'mobile' ? '1fr' : view === 'tablet' ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {[
              { name: 'תספורת קלאסית', price: '₪120', time: '45 דקות' },
              { name: 'עיצוב זקן', price: '₪80', time: '30 דקות' },
              { name: 'גילוח חם', price: '₪70', time: '35 דקות' }
            ].map((service, i) => (
              <div key={i} style={{
                background: 'rgba(30, 41, 59, 0.8)',
                borderRadius: '20px',
                padding: '25px',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <h4 style={{ color: '#f8fafc', marginBottom: '10px' }}>{service.name}</h4>
                <p style={{ color: '#94a3b8', marginBottom: '15px' }}>שירות מקצועי ואיכותי</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: 'bold' }}>{service.price}</span>
                  <span style={{ color: '#cbd5e1' }}>{service.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {selectedId === 'services' && (
          <div style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(59, 130, 246, 0.9)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold'
          }}>
            ✏️ עריכת שירותים
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section
        data-id="contact"
        onClick={() => handleSelect('contact')}
        style={{
          padding: '60px 20px',
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          outline: selectedId === 'contact' ? '3px solid #3b82f6' : 'none',
          cursor: 'pointer'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#f8fafc' }}>
            צור קשר
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.2rem', marginBottom: '40px' }}>
            📞 03-1234567 | 📧 info@barbershop.co.il
          </p>
          <p style={{ color: '#94a3b8' }}>
            רחוב הרצל 123, תל אביב | ראשון-חמישי: 9:00-20:00
          </p>
        </div>
        
        {selectedId === 'contact' && (
          <div style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(59, 130, 246, 0.9)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold'
          }}>
            ✏️ עריכת יצירת קשר
          </div>
        )}
      </section>
    </div>
  );
}

// =============================================
// RESPONSIVE CANVAS
// =============================================
function ResponsiveCanvas({ view, zoom, orientation, currentTemplate, elements, onSelectElement }) {
  if (currentTemplate === 'barbershop-ultra') {
    return (
      <BarbershopCanvas 
        view={view}
        zoom={zoom}
        orientation={orientation}
        onSelectElement={onSelectElement}
      />
    );
  }

  return (
    <div style={{
      padding: '20px',
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      transform: `scale(${zoom / 100})`,
      transformOrigin: 'top left'
    }}>
      {elements.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '100px', color: '#64748b' }}>
          <div style={{ fontSize: '5rem', marginBottom: '30px', opacity: 0.7 }}>🎨</div>
          <h3 style={{ fontSize: '2rem', margin: '0 0 15px 0', color: '#94a3b8' }}>התחל ליצור</h3>
          <p style={{ fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
            בחר תבנית מהצד השמאלי או הוסף רכיבים כדי להתחיל לעצב
          </p>
        </div>
      ) : (
        elements.map((el) => (
          <div
            key={el.id}
            onClick={() => onSelectElement && onSelectElement(el.id)}
            style={{
              backgroundColor: '#334155',
              padding: '20px',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginBottom: '15px',
              border: '2px solid transparent'
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <span style={{
                fontSize: '0.8rem',
                color: '#94a3b8',
                textTransform: 'uppercase',
                fontWeight: '700'
              }}>
                {el.type}
              </span>
            </div>
            <div style={{ color: '#f8fafc', fontSize: '1rem' }}>{el.content}</div>
          </div>
        ))
      )}
    </div>
  );
}

// =============================================
// DEVICE FRAME
// =============================================
function DeviceFrame({ view, orientation, zoom, children }) {
  const getFrameStyle = () => {
    switch (view) {
      case 'tablet':
        return {
          width: orientation === 'portrait' ? '768px' : '1024px',
          height: orientation === 'portrait' ? '1024px' : '768px',
          borderRadius: '24px',
          border: '12px solid #6b7280',
          backgroundColor: '#6b7280',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          overflow: 'hidden'
        };
      case 'mobile':
        return {
          width: orientation === 'portrait' ? '375px' : '667px',
          height: orientation === 'portrait' ? '812px' : '375px',
          borderRadius: '36px',
          border: '8px solid #1f2937',
          backgroundColor: '#1f2937',
          boxShadow: '0 25px 70px rgba(0,0,0,0.6)',
          overflow: 'hidden'
        };
      default:
        return {
          width: '100%',
          height: '100%',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
        };
    }
  };

  return (
    <div style={getFrameStyle()}>
      <div style={{
        width: '100%',
        height: '100%',
        overflow: 'auto',
        borderRadius: view === 'desktop' ? '12px' : '20px'
      }}>
        {children}
      </div>
    </div>
  );
}

// =============================================
// PAGE MANAGER
// =============================================
const defaultTemplates = {
  Home: ['Hero', 'Services', 'Statistics', 'Testimonials', 'Contact'],
  About: ['Hero', 'Story', 'Team', 'Values'],
  Services: ['Hero', 'ServicesGrid', 'Pricing', 'FAQ'],
  Contact: ['Hero', 'ContactForm', 'Map', 'Info'],
  Gallery: ['Hero', 'ImageGallery', 'Categories'],
  Blog: ['Hero', 'BlogPosts', 'Categories', 'Subscribe'],
};

const pageIcons = {
  Home: '🏠',
  About: '👤', 
  Services: '💈',
  Contact: '📞',
  Gallery: '🖼️',
  Blog: '📝',
};

function PageManager({ onPageChange }) {
  const [pages, setPages] = useState([
    {
      id: Date.now(),
      name: 'Home',
      type: 'Home',
      content: defaultTemplates.Home,
      settings: { 
        seoTitle: 'Home - WebMaster Pro', 
        metaDescription: 'This is the Home page',
        favicon: '/favicon.ico'
      },
      lastModified: new Date().toISOString(),
    }
  ]);
  const [activePageId, setActivePageId] = useState(pages[0]?.id);
  const [showDropdown, setShowDropdown] = useState(false);

  function addPage(type = 'Home') {
    const newPage = {
      id: Date.now() + Math.random(),
      name: type,
      type,
      content: defaultTemplates[type] || ['Hero', 'Content'],
      settings: { 
        seoTitle: `${type} - WebMaster Pro`, 
        metaDescription: `This is the ${type} page`,
        favicon: '/favicon.ico'
      },
      lastModified: new Date().toISOString(),
    };
    setPages([...pages, newPage]);
    setActivePageId(newPage.id);
    if (onPageChange) onPageChange(newPage);
    setShowDropdown(false);
  }

  function deletePage(id) {
    if (pages.length <= 1) return;
    const updated = pages.filter((p) => p.id !== id);
    setPages(updated);
    if (activePageId === id && updated.length > 0) {
      setActivePageId(updated[0].id);
      if (onPageChange) onPageChange(updated[0]);
    }
  }

  function setActivePage(id) {
    setActivePageId(id);
    if (onPageChange) {
      const page = pages.find((p) => p.id === id);
      onPageChange(page);
    }
  }

  const activePage = pages.find((p) => p.id === activePageId);

  return (
    <div style={{
      backgroundColor: '#1e293b',
      borderBottom: '1px solid #334155'
    }}>
      <div style={{
        padding: '12px 20px',
        borderBottom: '1px solid #334155',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
          📄 {activePage?.name} ({activePage?.type})
        </span>
      </div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        gap: '8px'
      }}>
        <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
          {pages.map((page) => (
            <div
              key={page.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '8px 8px 0 0',
                cursor: 'pointer',
                backgroundColor: page.id === activePageId ? '#3b82f6' : '#334155',
                color: 'white'
              }}
              onClick={() => setActivePage(page.id)}
            >
              <span>{pageIcons[page.type] || '📄'}</span>
              <span style={{ fontSize: '0.9rem' }}>{page.name}</span>
              {pages.length > 1 && (
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    marginLeft: '8px'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    deletePage(page.id);
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
        
        <div style={{ position: 'relative', marginLeft: '12px' }}>
          <button 
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              border: 'none',
              color: 'white',
              padding: '10px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            ➕ דף חדש
          </button>
          {showDropdown && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              background: '#334155',
              borderRadius: '8px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
              zIndex: 1000,
              minWidth: '180px',
              border: '1px solid #475569',
              marginTop: '4px'
            }}>
              {Object.keys(defaultTemplates).map((type) => (
                <button 
                  key={type} 
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    color: '#f8fafc',
                    padding: '12px 16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onClick={() => addPage(type)}
                >
                  {pageIcons[type]} {type}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// =============================================
// MAIN RESPONSIVE EDITOR
// =============================================
const templates = [
  {
    id: 'barbershop-ultra',
    title: 'מספרה יוקרתית מקצועית',
    description: 'תבנית מלאה עם וידאו ברקע, שירותים, סטטיסטיקות וחוות דעת',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop',
    features: ['5 סקציות', 'וידאו ברקע', 'רספונסיבי מלא', 'אנימציות מתקדמות', 'טפסים אינטראקטיביים'],
    category: 'עסקים'
  }
];

const tabs = ['🧠 AI Assistant', '🧩 רכיבים', '🎨 תבניות', '✨ אנימציות', '⚙️ הגדרות'];

const ResponsiveEditor = () => {
  const [activeTab, setActiveTab] = useState('🎨 תבניות');
  const [selectedDevice, setSelectedDevice] = useState('Desktop');
  const [elements, setElements] = useState([]);
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [zoom, setZoom] = useState(100);
  const [orientation, setOrientation] = useState('portrait');
  const [aiPrompt, setAiPrompt] = useState('');
  const [showGrid, setShowGrid] = useState(false);

  const deviceMapping = {
    'Desktop': 'desktop',
    'Tablet': 'tablet', 
    'Mobile': 'mobile'
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (page.type === 'Home' && currentTemplate === 'barbershop-ultra') {
      return;
    }
    const pageElements = page.content.map((section, index) => ({
      id: Date.now() + index,
      type: section,
      content: `${section} של דף ${page.name}`
    }));
    setElements(pageElements);
    setCurrentTemplate(null);
  };

  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      content: `${type} חדש - ${selectedDevice}`
    };
    setElements([...elements, newElement]);
    setSelectedElementId(newElement.id);
  };

  const addTemplateToCanvas = (templateId) => {
    if (templateId === 'barbershop-ultra') {
      setCurrentTemplate('barbershop-ultra');
      setElements([]);
    }
  };

  const TemplatesContent = () => (
    <div style={{ padding: '15px' }}>
      <div style={{ textAlign: 'center', marginBottom: '25px' }}>
        <h3 style={{ fontSize: '1.3rem', margin: '0 0 8px 0', color: '#f8fafc' }}>🎨 תבניות מקצועיות</h3>
        <p style={{ fontSize: '0.95rem', margin: 0, color: '#cbd5e1' }}>תבניות ברמה עולמית עם תוכן מלא ואנימציות מתקדמות</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        {templates.map((template) => (
          <div key={template.id} style={{
            background: 'rgba(51, 65, 85, 0.8)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #475569',
            cursor: 'pointer'
          }}>
            <img 
              src={template.image} 
              alt={template.title} 
              style={{ width: '100%', height: '120px', objectFit: 'cover' }}
            />
            
            <div style={{ padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h4 style={{ margin: 0, color: '#f8fafc' }}>{template.title}</h4>
                <span style={{
                  background: '#3b82f6',
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  fontSize: '0.7rem'
                }}>
                  {template.category}
                </span>
              </div>
              
              <p style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '12px' }}>
                {template.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '15px' }}>
                {template.features.map((feature, index) => (
                  <span key={index} style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: 'white',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    fontSize: '0.65rem',
                    fontWeight: '600'
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
              
              <button
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  border: 'none',
                  color: '#fff',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  width: '100%'
                }}
                onClick={() => addTemplateToCanvas(template.id)}
              >
                🚀 השתמש בתבנית
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#0f172a',
      color: '#fff',
      fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
    }}>
      {/* Left Panel */}
      <div style={{
        width: '320px',
        backgroundColor: '#1e293b',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #334155'
      }}>
        <div style={{ padding: '25px', borderBottom: '1px solid #334155', textAlign: 'center' }}>
          <h2 style={{
            margin: '0 0 8px 0',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1.6rem',
            fontWeight: '800'
          }}>
            WebMaster Pro
          </h2>
          <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: '600' }}>Professional Edition v2.0</div>
        </div>
        
        <div style={{ padding: '20px 0', borderBottom: '1px solid #334155' }}>
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '14px 25px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: '500',
                backgroundColor: activeTab === tab ? '#3b82f6' : 'transparent',
                borderLeft: activeTab === tab ? '4px solid #60a5fa' : 'none',
                borderRadius: '0 25px 25px 0',
                marginRight: '15px'
              }}
            >
              {tab}
            </div>
          ))}
        </div>
        
        <div style={{ flex: 1, padding: '25px', overflowY: 'auto' }}>
          {activeTab === '🎨 תבניות' && <TemplatesContent />}
          
          {activeTab === '🧩 רכיבים' && (
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#f8fafc' }}>ספריית רכיבים</h3>
              {['Hero Section', 'Text Block', 'Button', 'Image', 'Gallery', 'Video', 'Contact Form'].map
