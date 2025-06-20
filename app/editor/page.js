'use client';

import React, { useState } from 'react';

// ResponsiveCanvas Component עם תוכן אמיתי
function ResponsiveCanvas({ view, zoom, orientation, currentTemplate, elements, onSelectElement }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
    if (onSelectElement) onSelectElement(id);
  };

  const getResponsiveStyles = () => {
    const baseStyles = {
      transform: `scale(${zoom / 100})`,
      transformOrigin: 'top left',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      backgroundColor: '#0f172a',
      color: '#fff',
      fontFamily: '"Inter", system-ui, sans-serif'
    };

    // התאמות לפי סוג תצוגה
    switch (view) {
      case 'mobile':
        return {
          ...baseStyles,
          fontSize: '14px'
        };
      case 'tablet':
        return {
          ...baseStyles,
          fontSize: '16px'
        };
      default:
        return {
          ...baseStyles,
          fontSize: '18px'
        };
    }
  };

  const getHeroResponsiveStyle = () => {
    switch (view) {
      case 'mobile':
        return {
          height: '60vh',
          padding: '20px 15px'
        };
      case 'tablet':
        return {
          height: '70vh',
          padding: '30px 20px'
        };
      default:
        return {
          height: '80vh',
          padding: '40px 20px'
        };
    }
  };

  const getServicesGridStyle = () => {
    switch (view) {
      case 'mobile':
        return {
          gridTemplateColumns: '1fr',
          gap: '20px'
        };
      case 'tablet':
        return {
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '25px'
        };
      default:
        return {
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        };
    }
  };

  const getTestimonialsStyle = () => {
    switch (view) {
      case 'mobile':
        return {
          gridTemplateColumns: '1fr',
          gap: '20px'
        };
      case 'tablet':
        return {
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '25px'
        };
      default:
        return {
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        };
    }
  };

  // אם זה תבנית מספרה
  if (currentTemplate === 'barbershop-ultra') {
    return (
      <div style={getResponsiveStyles()}>
        {/* Hero Section */}
        <section
          data-id="hero"
          onClick={() => handleSelect('hero')}
          style={{
            ...responsiveStyles.hero,
            ...getHeroResponsiveStyle(),
            outline: selectedId === 'hero' ? '3px solid #3b82f6' : 'none',
            cursor: 'pointer'
          }}
        >
          <div style={responsiveStyles.heroBackground}></div>
          <div style={responsiveStyles.heroOverlay}>
            <h1 style={{
              ...responsiveStyles.heroTitle,
              fontSize: view === 'mobile' ? '2rem' : view === 'tablet' ? '2.5rem' : '3rem'
            }}>
              המספרה הכי יוקרתית בישראל
            </h1>
            <p style={{
              ...responsiveStyles.heroSubtitle,
              fontSize: view === 'mobile' ? '1rem' : view === 'tablet' ? '1.1rem' : '1.3rem'
            }}>
              סטייל, מקצועיות, ואווירה שאין בשום מקום אחר
            </p>
            <div style={{
              ...responsiveStyles.heroButtons,
              flexDirection: view === 'mobile' ? 'column' : 'row',
              gap: view === 'mobile' ? '15px' : '20px'
            }}>
              <button style={{
                ...responsiveStyles.primaryBtn,
                width: view === 'mobile' ? '100%' : 'auto'
              }}>
                הזמן תור עכשיו
              </button>
              <button style={{
                ...responsiveStyles.secondaryBtn,
                width: view === 'mobile' ? '100%' : 'auto'
              }}>
                צפה בעבודות
              </button>
            </div>
          </div>
          {selectedId === 'hero' && (
            <div style={responsiveStyles.editBadge}>✏️ עריכת Hero</div>
          )}
        </section>

        {/* Services Section */}
        <section
          data-id="services"
          onClick={() => handleSelect('services')}
          style={{
            ...responsiveStyles.services,
            outline: selectedId === 'services' ? '3px solid #3b82f6' : 'none',
            cursor: 'pointer'
          }}
        >
          <h2 style={{
            ...responsiveStyles.sectionTitle,
            fontSize: view === 'mobile' ? '1.8rem' : view === 'tablet' ? '2.2rem' : '2.5rem'
          }}>
            השירותים שלנו
          </h2>
          <div style={{
            ...responsiveStyles.servicesGrid,
            ...getServicesGridStyle(),
            maxWidth: view === 'desktop' ? '1200px' : '100%',
            margin: '0 auto'
          }}>
            {[
              { name: 'תספורת קלאסית', price: '₪80', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&h=200&fit=crop' },
              { name: 'עיצוב זקן מקצועי', price: '₪60', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&h=200&fit=crop' },
              { name: 'גילוח חם מסורתי', price: '₪50', img: 'https://images.unsplash.com/photo-1588699408955-7b5bb5f0c7a7?w=300&h=200&fit=crop' },
              { name: 'טיפולי פנים VIP', price: '₪100', img: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=300&h=200&fit=crop' },
              { name: 'צביעת שיער מקצועית', price: '₪120', img: 'https://images.unsplash.com/photo-1562004760-acebe7bb4e95?w=300&h=200&fit=crop' },
              { name: 'VIP סטיילינג מלא', price: '₪200', img: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=300&h=200&fit=crop' },
            ].slice(0, view === 'mobile' ? 4 : 6).map((service, i) => (
              <div key={i} style={responsiveStyles.serviceCard}>
                <img src={service.img} style={responsiveStyles.serviceImage} alt={service.name} />
                <div style={responsiveStyles.serviceContent}>
                  <h4 style={{
                    ...responsiveStyles.serviceName,
                    fontSize: view === 'mobile' ? '1rem' : '1.2rem'
                  }}>
                    {service.name}
                  </h4>
                  <p style={{
                    ...responsiveStyles.servicePrice,
                    fontSize: view === 'mobile' ? '1.2rem' : '1.4rem'
                  }}>
                    {service.price}
                  </p>
                  <button style={{
                    ...responsiveStyles.serviceBtn,
                    padding: view === 'mobile' ? '8px 16px' : '10px 20px'
                  }}>
                    הזמן עכשיו
                  </button>
                </div>
              </div>
            ))}
          </div>
          {selectedId === 'services' && (
            <div style={responsiveStyles.editBadge}>✏️ עריכת שירותים</div>
          )}
        </section>

        {/* Testimonials Section */}
        <section
          data-id="testimonials"
          onClick={() => handleSelect('testimonials')}
          style={{
            ...responsiveStyles.testimonials,
            outline: selectedId === 'testimonials' ? '3px solid #3b82f6' : 'none',
            cursor: 'pointer'
          }}
        >
          <div style={responsiveStyles.container}>
            <h2 style={{
              ...responsiveStyles.sectionTitle,
              fontSize: view === 'mobile' ? '1.8rem' : view === 'tablet' ? '2.2rem' : '2.5rem'
            }}>
              מה הלקוחות אומרים
            </h2>
            <div style={{
              ...responsiveStyles.testimonialGrid,
              ...getTestimonialsStyle()
            }}>
              {[
                { 
                  name: 'אורן כהן', 
                  text: 'חוויה מדהימה! מספרה ברמה שלא ראיתי בארץ.', 
                  img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
                  rating: '⭐⭐⭐⭐⭐'
                },
                { 
                  name: 'נועה לוי', 
                  text: 'השירות, האווירה, והעיצוב – פשוט וואו!', 
                  img: 'https://images.unsplash.com/photo-1494790108755-2616b612b105?w=100&h=100&fit=crop&crop=face',
                  rating: '⭐⭐⭐⭐⭐'
                },
                { 
                  name: 'דוד ישראלי', 
                  text: 'הספרים הכי מקצועיים שפגשתי. ממליץ בחום.', 
                  img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                  rating: '⭐⭐⭐⭐⭐'
                },
              ].slice(0, view === 'mobile' ? 1 : view === 'tablet' ? 2 : 3).map((testimonial, i) => (
                <div key={i} style={responsiveStyles.testimonialCard}>
                  <img src={testimonial.img} style={responsiveStyles.testimonialImage} alt={testimonial.name} />
                  <div style={responsiveStyles.testimonialContent}>
                    <div style={responsiveStyles.testimonialRating}>{testimonial.rating}</div>
                    <p style={{
                      ...responsiveStyles.testimonialText,
                      fontSize: view === 'mobile' ? '0.9rem' : '1rem'
                    }}>
                      "{testimonial.text}"
                    </p>
                    <p style={responsiveStyles.testimonialName}>– {testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {selectedId === 'testimonials' && (
            <div style={responsiveStyles.editBadge}>✏️ עריכת חוות דעת</div>
          )}
        </section>
      </div>
    );
  }

  // אם זה רכיבים רגילים
  return (
    <div style={getResponsiveStyles()}>
      <div style={responsiveStyles.elementsContainer}>
        {elements.map((el) => (
          <div
            key={el.id}
            onClick={() => handleSelect(el.id)}
            style={{
              ...responsiveStyles.element,
              border: el.id === selectedId ? '2px solid #3b82f6' : '1px solid #475569',
              fontSize: view === 'mobile' ? '0.9rem' : view === 'tablet' ? '1rem' : '1.1rem'
            }}
          >
            <div style={responsiveStyles.elementHeader}>
              <span style={responsiveStyles.elementType}>{el.type}</span>
            </div>
            <div style={responsiveStyles.elementContent}>{el.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Device Frame Component
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
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          position: 'relative'
        };
      case 'mobile':
        return {
          width: orientation === 'portrait' ? '375px' : '667px',
          height: orientation === 'portrait' ? '812px' : '375px',
          borderRadius: '32px',
          border: '8px solid #1f2937',
          backgroundColor: '#1f2937',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          position: 'relative'
        };
      default:
        return {
          width: '100%',
          height: '100%',
          borderRadius: '8px',
          overflow: 'hidden'
        };
    }
  };

  const getNotchStyle = () => {
    if (view === 'mobile' && orientation === 'portrait') {
      return {
        position: 'absolute',
        top: '-8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '140px',
        height: '28px',
        backgroundColor: '#1f2937',
        borderRadius: '0 0 16px 16px',
        zIndex: 10
      };
    }
    return {};
  };

  return (
    <div style={getFrameStyle()}>
      {view === 'mobile' && <div style={getNotchStyle()}></div>}
      <div style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: view === 'desktop' ? '8px' : '16px',
        transform: `scale(${zoom / 100})`,
        transformOrigin: 'top left'
      }}>
        {children}
      </div>
    </div>
  );
}

// PageManager Component (מהקוד הקודם)
const defaultTemplates = {
  Home: ['Hero', 'Services', 'Testimonials'],
  About: ['Hero', 'Story', 'Team'],
  Services: ['Hero', 'ServicesGrid', 'Pricing'],
  Contact: ['Hero', 'ContactForm', 'Map'],
  Gallery: ['Hero', 'ImageGallery'],
  Blog: ['Hero', 'BlogPosts'],
};

const pageIcons = {
  Home: '🏠',
  About: '👤',
  Services: '💈',
  Contact: '📞',
  Gallery: '🖼️',
  Blog: '📝',
};

function PageManager({ onPageChange, currentPageId }) {
  const [pages, setPages] = useState([
    createPage('Home'),
  ]);
  const [activePageId, setActivePageId] = useState(pages[0].id);

  function createPage(type) {
    return {
      id: Date.now() + Math.random(),
      name: type,
      type,
      content: defaultTemplates[type],
      settings: { seoTitle: '', metaDescription: '' },
      lastModified: new Date().toISOString(),
    };
  }

  function addPage(type = 'Home') {
    const newPage = createPage(type);
    setPages([...pages, newPage]);
    setActivePageId(newPage.id);
    if (onPageChange) onPageChange(newPage);
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
    <div style={pageStyles.container}>
      <div style={pageStyles.tabs}>
        {pages.map((page) => (
          <div
            key={page.id}
            style={{
              ...pageStyles.tab,
              backgroundColor: page.id === activePageId ? '#3b82f6' : '#334155',
            }}
            onClick={() => setActivePage(page.id)}
          >
            <span style={pageStyles.tabIcon}>{pageIcons[page.type] || '📄'}</span>
            <span style={pageStyles.tabName}>{page.name}</span>
            {pages.length > 1 && (
              <button
                style={pageStyles.closeBtn}
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
        <div style={pageStyles.addPageDropdown}>
          <select 
            style={pageStyles.addPageSelect}
            onChange={(e) => {
              if (e.target.value) {
                addPage(e.target.value);
                e.target.value = '';
              }
            }}
          >
            <option value="">➕ דף חדש</option>
            {Object.keys(defaultTemplates).map((type) => (
              <option key={type} value={type}>
                {pageIcons[type]} {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

// תבניות
const templates = [
  {
    id: 'barbershop-ultra',
    title: 'תבנית מספרה יוקרתית',
    description: 'וידאו ברקע, שירותים, חוות דעת, מונים ועוד.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop',
    features: ['וידאו ברקע', 'הזמנת תורים', 'רספונסיבי', 'מונים אנימטיים']
  }
];

const tabs = ['AI Assistant', 'רכיבים', 'תבניות', 'אנימציות'];

const ResponsiveEditor = () => {
  const [activeTab, setActiveTab] = useState('תבניות');
  const [selectedDevice, setSelectedDevice] = useState('Desktop');
  const [elements, setElements] = useState([]);
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [zoom, setZoom] = useState(100);
  const [orientation, setOrientation] = useState('portrait');

  // Device mappings
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

  const addTemplateToCanvas = (templateId) => {
    if (templateId === 'barbershop-ultra') {
      setCurrentTemplate('barbershop-ultra');
      setElements([]);
    }
  };

  const TemplatesContent = () => (
    <div style={templateStyles.container}>
      <div style={templateStyles.header}>
        <h3 style={templateStyles.title}>🎨 תבניות רספונסיביות</h3>
        <p style={templateStyles.subtitle}>בחר תבנית מקצועית</p>
      </div>
      
      <div style={templateStyles.grid}>
        {templates.map((template) => (
          <div key={template.id} style={templateStyles.templateCard}>
            <img 
              src={template.image} 
              alt={template.title} 
              style={templateStyles.templateImage}
            />
            <h4 style={templateStyles.templateTitle}>{template.title}</h4>
            <p style={templateStyles.templateDescription}>{template.description}</p>
            
            <div style={templateStyles.features}>
              {template.features.map((feature, index) => (
                <span key={index} style={templateStyles.feature}>
                  {feature}
                </span>
              ))}
            </div>
            
            <button
              style={templateStyles.templateButton}
              onClick={() => addTemplateToCanvas(template.id)}
            >
              🚀 טען תבנית
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={styles.editor}>
      {/* Left Panel */}
      <div style={styles.leftPanel}>
        <div style={styles.logo}>
          <h2 style={styles.logoText}>WebMaster Pro</h2>
          <div style={styles.version}>Responsive Edition</div>
        </div>
        
        <div style={styles.tabs}>
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.tab,
                backgroundColor: activeTab === tab ? '#3b82f6' : 'transparent',
              }}
            >
              {tab === 'AI Assistant' && '🧠 '}
              {tab === 'רכיבים' && '🧩 '}
              {tab === 'תבניות' && '🎨 '}
              {tab === 'אנימציות' && '✨ '}
              {tab}
            </div>
          ))}
        </div>
        
        <div style={styles.tabContent}>
          {activeTab === 'תבניות' && <TemplatesContent />}
        </div>
      </div>

      {/* Center Canvas */}
      <div style={styles.center}>
        {/* Page Manager */}
        <PageManager onPageChange={handlePageChange} />
        
        {/* Responsive Toolbar */}
        <div style={styles.responsiveToolbar}>
          <div style={styles.deviceButtons}>
            {['Desktop', 'Tablet', 'Mobile'].map((device) => (
              <button
                key={device}
                style={{
                  ...styles.deviceButton,
                  backgroundColor: selectedDevice === device ? '#3b82f6' : '#334155',
                }}
                onClick={() => setSelectedDevice(device)}
              >
                {device === 'Desktop' && '🖥️'}
                {device === 'Tablet' && '📱'}
                {device === 'Mobile' && '📱'}
                {device} 
                {device === 'Tablet' && ` (${orientation === 'portrait' ? '768×1024' : '1024×768'})`}
                {device === 'Mobile' && ` (${orientation === 'portrait' ? '375×812' : '667×375'})`}
                {device === 'Desktop' && ' (1200px+)'}
              </button>
            ))}
          </div>
          
          <div style={styles.controls}>
            {(selectedDevice === 'Tablet' || selectedDevice === 'Mobile') && (
              <button
                style={styles.orientationBtn}
                onClick={() => setOrientation(orientation === 'portrait' ? 'landscape' : 'portrait')}
              >
                🔄 {orientation === 'portrait' ? 'Landscape' : 'Portrait'}
              </button>
            )}
            
            <div style={styles.zoomControls}>
              {[50, 75, 100, 125].map((zoomLevel) => (
                <button
                  key={zoomLevel}
                  style={{
                    ...styles.zoomBtn,
                    backgroundColor: zoom === zoomLevel ? '#10b981' : '#475569'
                  }}
                  onClick={() => setZoom(zoomLevel)}
                >
                  {zoomLevel}%
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Canvas with Device Frame */}
        <div style={styles.canvasContainer}>
          <DeviceFrame 
            view={deviceMapping[selectedDevice]} 
            orientation={orientation}
            zoom={selectedDevice === 'Desktop' ? zoom : 100}
          >
            <ResponsiveCanvas
              view={deviceMapping[selectedDevice]}
              zoom={selectedDevice === 'Desktop' ? 100 : zoom}
              orientation={orientation}
              currentTemplate={currentTemplate}
              elements={elements}
              onSelectElement={setSelectedElementId}
            />
          </DeviceFrame>
        </div>
      </div>

      {/* Right Panel */}
      <div style={styles.rightPanel}>
        <div style={styles.deviceInfo}>
          <h3 style={styles.panelTitle}>📱 מידע תצוגה</h3>
          <div style={styles.infoItem}>
            <strong>מכשיר:</strong> {selectedDevice}
          </div>
          <div style={styles.infoItem}>
            <strong>זום:</strong> {zoom}%
          </div>
          {(selectedDevice === 'Tablet' || selectedDevice === 'Mobile') && (
            <div style={styles.infoItem}>
              <strong>כיוון:</strong> {orientation === 'portrait' ? 'אנכי' : 'אופקי'}
            </div>
          )}
          
          <div style={styles.responsiveGuide}>
            <h4 style={styles.guideTitle}>📋 מדריך רספונסיבי</h4>
            <div style={styles.guideItem}>
              <strong>🖥️ Desktop:</strong> גרידים מלאים, טקסט גדול
            </div>
            <div style={styles.guideItem}>
              <strong>📱 Tablet:</strong> 2 עמודות, טקסט בינוני
            </div>
            <div style={styles.guideItem}>
              <strong>📱 Mobile:</strong> עמודה אחת, טקסט קטן
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Responsive Styles
const responsiveStyles = {
  hero: {
    position: 'relative',
    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    overflow: 'hidden',
    marginBottom: '40px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
    zIndex: -1
  },
  heroOverlay: {
    textAlign: 'center',
    backdropFilter: 'blur(6px)',
    background: 'rgba(15, 23, 42, 0.3)',
    borderRadius: '16px',
    margin: '0 auto',
    maxWidth: '800px'
  },
  heroTitle: {
    marginBottom: '16px',
    textShadow: '0 2px 6px rgba(0,0,0,0.6)',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold'
  },
  heroSubtitle: {
    color: '#cbd5e1',
    marginBottom: '30px',
    lineHeight: 1.6
  },
