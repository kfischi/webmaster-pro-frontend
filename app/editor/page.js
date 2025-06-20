'use client';

import React, { useState } from 'react';

// PageManager Component
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
    if (pages.length <= 1) return; // לא למחוק את הדף האחרון
    const updated = pages.filter((p) => p.id !== id);
    setPages(updated);
    if (activePageId === id && updated.length > 0) {
      setActivePageId(updated[0].id);
      if (onPageChange) onPageChange(updated[0]);
    }
  }

  function duplicatePage(id) {
    const original = pages.find((p) => p.id === id);
    if (original) {
      const copy = {
        ...createPage(original.type),
        name: original.name + ' Copy',
        content: [...original.content],
      };
      setPages([...pages, copy]);
      setActivePageId(copy.id);
      if (onPageChange) onPageChange(copy);
    }
  }

  function renamePage(id, newName) {
    const updatedPages = pages.map((p) => (p.id === id ? { ...p, name: newName } : p));
    setPages(updatedPages);
    if (id === activePageId && onPageChange) {
      const updatedPage = updatedPages.find((p) => p.id === id);
      onPageChange(updatedPage);
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
      {/* Page Tabs */}
      <div style={pageStyles.tabs}>
        {pages.map((page) => (
          <div
            key={page.id}
            style={{
              ...pageStyles.tab,
              backgroundColor: page.id === activePageId ? '#3b82f6' : '#334155',
              borderBottom: page.id === activePageId ? '3px solid #60a5fa' : 'none',
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
          <button style={pageStyles.addPageBtn}>➕ דף חדש</button>
          <div style={pageStyles.dropdown}>
            {Object.keys(defaultTemplates).map((type) => (
              <button 
                key={type} 
                style={pageStyles.dropdownItem} 
                onClick={() => addPage(type)}
              >
                {pageIcons[type]} {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Page Actions */}
      <div style={pageStyles.pageActions}>
        <span style={pageStyles.pageInfo}>
          📄 {activePage?.name} ({activePage?.type})
        </span>
        <div style={pageStyles.actionButtons}>
          <button 
            style={pageStyles.actionBtn}
            onClick={() => duplicatePage(activePageId)}
          >
            📋 שכפל דף
          </button>
          <button 
            style={pageStyles.actionBtn}
            onClick={() => {
              const newName = prompt('שם חדש לדף:', activePage?.name);
              if (newName && newName.trim()) {
                renamePage(activePageId, newName.trim());
              }
            }}
          >
            ✏️ שנה שם
          </button>
        </div>
      </div>
    </div>
  );
}

// BarbershopCanvas Component (מהקוד הקודם)
function BarbershopCanvas({ onSelectElement }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
    if (onSelectElement) onSelectElement(id);
  };

  return (
    <div style={canvasStyles.canvas}>
      {/* Hero Section */}
      <section
        data-id="hero"
        onClick={() => handleSelect('hero')}
        style={{
          ...canvasStyles.hero,
          outline: selectedId === 'hero' ? '3px solid #3b82f6' : 'none',
          cursor: 'pointer'
        }}
      >
        <video autoPlay muted loop style={canvasStyles.video}>
          <source src="https://cdn.coverr.co/videos/coverr-barber-shop-4474/1080p.mp4" type="video/mp4" />
        </video>
        <div style={canvasStyles.heroOverlay}>
          <h1 style={canvasStyles.heroTitle}>המספרה הכי יוקרתית בישראל</h1>
          <p style={canvasStyles.heroSubtitle}>סטייל, מקצועיות, ואווירה שאין בשום מקום אחר</p>
          <div style={canvasStyles.heroButtons}>
            <button style={canvasStyles.primaryBtn}>הזמן תור עכשיו</button>
            <button style={canvasStyles.secondaryBtn}>צפה בעבודות</button>
          </div>
        </div>
        {selectedId === 'hero' && (
          <div style={canvasStyles.editBadge}>✏️ לחץ לעריכה</div>
        )}
      </section>

      {/* Services Section */}
      <section
        data-id="services"
        onClick={() => handleSelect('services')}
        style={{
          ...canvasStyles.services,
          outline: selectedId === 'services' ? '3px solid #3b82f6' : 'none',
          cursor: 'pointer'
        }}
      >
        <h2 style={canvasStyles.sectionTitle}>השירותים שלנו</h2>
        <div style={canvasStyles.servicesGrid}>
          {[
            { name: 'תספורת קלאסית', price: '₪80', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&h=200&fit=crop' },
            { name: 'עיצוב זקן מקצועי', price: '₪60', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&h=200&fit=crop' },
            { name: 'גילוח חם מסורתי', price: '₪50', img: 'https://images.unsplash.com/photo-1588699408955-7b5bb5f0c7a7?w=300&h=200&fit=crop' },
            { name: 'טיפולי פנים VIP', price: '₪100', img: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=300&h=200&fit=crop' },
            { name: 'צביעת שיער מקצועית', price: '₪120', img: 'https://images.unsplash.com/photo-1562004760-acebe7bb4e95?w=300&h=200&fit=crop' },
            { name: 'VIP סטיילינג מלא', price: '₪200', img: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=300&h=200&fit=crop' },
          ].map((service, i) => (
            <div key={i} style={canvasStyles.serviceCard}>
              <img src={service.img} style={canvasStyles.serviceImage} alt={service.name} />
              <div style={canvasStyles.serviceContent}>
                <h4 style={canvasStyles.serviceName}>{service.name}</h4>
                <p style={canvasStyles.servicePrice}>{service.price}</p>
                <button style={canvasStyles.serviceBtn}>הזמן עכשיו</button>
              </div>
            </div>
          ))}
        </div>
        {selectedId === 'services' && (
          <div style={canvasStyles.editBadge}>✏️ עריכת שירותים</div>
        )}
      </section>

      {/* Testimonials Section */}
      <section
        data-id="testimonials"
        onClick={() => handleSelect('testimonials')}
        style={{
          ...canvasStyles.testimonials,
          outline: selectedId === 'testimonials' ? '3px solid #3b82f6' : 'none',
          cursor: 'pointer'
        }}
      >
        <div style={canvasStyles.container}>
          <h2 style={canvasStyles.sectionTitle}>מה הלקוחות אומרים</h2>
          <div style={canvasStyles.testimonialGrid}>
            {[
              { 
                name: 'אורן כהן', 
                text: 'חוויה מדהימה! מספרה ברמה שלא ראיתי בארץ. השירות מעולה והתוצאה מושלמת.', 
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
                rating: '⭐⭐⭐⭐⭐'
              },
              { 
                name: 'נועה לוי', 
                text: 'השירות, האווירה, והעיצוב – פשוט וואו! המקום הכי מקצועי שהיה לי.', 
                img: 'https://images.unsplash.com/photo-1494790108755-2616b612b105?w=100&h=100&fit=crop&crop=face',
                rating: '⭐⭐⭐⭐⭐'
              },
              { 
                name: 'דוד ישראלי', 
                text: 'הספרים הכי מקצועיים שפגשתי. ממליץ בחום לכל מי שמחפש איכות.', 
                img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                rating: '⭐⭐⭐⭐⭐'
              },
            ].map((testimonial, i) => (
              <div key={i} style={canvasStyles.testimonialCard}>
                <img src={testimonial.img} style={canvasStyles.testimonialImage} alt={testimonial.name} />
                <div style={canvasStyles.testimonialContent}>
                  <div style={canvasStyles.testimonialRating}>{testimonial.rating}</div>
                  <p style={canvasStyles.testimonialText}>"{testimonial.text}"</p>
                  <p style={canvasStyles.testimonialName}>– {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedId === 'testimonials' && (
          <div style={canvasStyles.editBadge}>✏️ עריכת חוות דעת</div>
        )}
      </section>
    </div>
  );
}

// תבניות מעודכנות
const templates = [
  {
    id: 'barbershop-ultra',
    title: 'תבנית מספרה יוקרתית',
    description: 'וידאו ברקע, שירותים, חוות דעת, מונים ועוד.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop',
    features: ['וידאו ברקע', 'הזמנת תורים', 'גלריית עבודות', 'מונים אנימטיים', 'חוות דעת']
  },
  {
    id: 'gym',
    title: 'חדר כושר מתקדם',
    description: 'ציוד חדיש ואימונים מותאמים אישית.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    features: ['מונים אנימטיים', 'מערכת הרשמה', 'לוח אימונים']
  },
  {
    id: 'restaurant',
    title: 'מסעדת גורמה',
    description: 'חוויית טעמים בלתי נשכחת.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    features: ['תפריט דיגיטלי', 'הזמנות אונליין', 'גלריית מנות']
  }
];

const tabs = ['AI Assistant', 'רכיבים', 'תבניות', 'אנימציות'];
const devices = ['Desktop', 'Tablet', 'Mobile'];

const EditorWithPages = () => {
  const [activeTab, setActiveTab] = useState('תבניות');
  const [selectedDevice, setSelectedDevice] = useState('Desktop');
  const [elements, setElements] = useState([]);
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [aiPrompt, setAiPrompt] = useState('');
  const [loadingTemplateId, setLoadingTemplateId] = useState(null);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  // פונקציה לטיפול בשינוי דף
  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (page.type === 'Home' && currentTemplate === 'barbershop-ultra') {
      // אם זה דף בית עם תבנית מספרה - לשמור את התבנית
      return;
    }
    // למדם אחר - להציג רכיבים לפי תוכן הדף
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
      content: `${type} חדש`,
      styles: {}
    };
    setElements([...elements, newElement]);
    setSelectedElementId(newElement.id);
  };

  // פונקציה להוספת תבנית לקנבס
  const addTemplateToCanvas = (templateId) => {
    setLoadingTemplateId(templateId);
    
    setTimeout(() => {
      if (templateId === 'barbershop-ultra') {
        setCurrentTemplate('barbershop-ultra');
        setElements([]);
      } else {
        const defaultElements = [
          {
            id: Date.now(),
            type: 'Hero',
            content: `Hero של תבנית ${templateId}`,
          },
          {
            id: Date.now() + 1,
            type: 'Content',
            content: `תוכן של תבנית ${templateId}`,
          }
        ];
        setElements(defaultElements);
        setCurrentTemplate(null);
      }
      
      setLoadingTemplateId(null);
      setActiveTab('רכיבים');
    }, 1500);
  };

  const selectElement = (id) => {
    setSelectedElementId(id);
  };

  const selectSection = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const deleteElement = () => {
    setElements(elements.filter((el) => el.id !== selectedElementId));
    setSelectedElementId(null);
  };

  const duplicateElement = () => {
    const el = elements.find((e) => e.id === selectedElementId);
    if (el) {
      const copy = { ...el, id: Date.now() };
      setElements([...elements, copy]);
    }
  };

  const selectedElement = elements.find((e) => e.id === selectedElementId);

  // רכיב גלריית התבניות
  const TemplatesContent = () => (
    <div style={templateStyles.container}>
      <div style={templateStyles.header}>
        <h3 style={templateStyles.title}>🎨 תבניות ברמה עולמית</h3>
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
            
            {template.features && (
              <div style={templateStyles.features}>
                {template.features.map((feature, index) => (
                  <span key={index} style={templateStyles.feature}>
                    {feature}
                  </span>
                ))}
              </div>
            )}
            
            <button
              style={{
                ...templateStyles.templateButton,
                ...(loadingTemplateId === template.id ? templateStyles.loadingButton : {})
              }}
              onClick={() => addTemplateToCanvas(template.id)}
              disabled={loadingTemplateId === template.id}
            >
              {loadingTemplateId === template.id ? '⏳ טוען...' : '🚀 טען תבנית'}
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
          <div style={styles.version}>Multi-Page Edition</div>
        </div>
        
        <div style={styles.tabs}>
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.tab,
                backgroundColor: activeTab === tab ? '#3b82f6' : 'transparent',
                borderLeft: activeTab === tab ? '3px solid #60a5fa' : 'none'
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
          {activeTab === 'AI Assistant' && (
            <div>
              <h3 style={styles.sectionTitle}>🧠 AI Assistant Pro</h3>
              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="תאר מה אתה רוצה ליצור..."
                style={styles.textarea}
              />
              <button style={styles.primaryButton}>✨ צור עם AI</button>
            </div>
          )}
          
          {activeTab === 'רכיבים' && (
            <div>
              <h3 style={styles.sectionTitle}>🧩 רכיבים</h3>
              {['Hero', 'Text', 'Button', 'Image', 'Gallery', 'Video', 'Form'].map((type) => (
                <button 
                  key={type} 
                  style={styles.componentButton} 
                  onClick={() => addElement(type)}
                >
                  ➕ הוסף {type}
                </button>
              ))}
            </div>
          )}
          
          {activeTab === 'תבניות' && <TemplatesContent />}
          
          {activeTab === 'אנימציות' && (
            <div>
              <h3 style={styles.sectionTitle}>✨ אנימציות</h3>
              <label style={styles.checkboxLabel}>
                <input type="checkbox" style={styles.checkbox} /> Fade In
              </label>
              <label style={styles.checkboxLabel}>
                <input type="checkbox" style={styles.checkbox} /> Slide Up
              </label>
            </div>
          )}
        </div>
      </div>

      {/* Center Canvas */}
      <div style={styles.center}>
        {/* Page Manager */}
        <PageManager onPageChange={handlePageChange} />
        
        {/* Toolbar */}
        <div style={styles.toolbar}>
          <div style={styles.toolbarLeft}>
            {devices.map((device) => (
              <button
                key={device}
                style={{
                  ...styles.deviceButton,
                  backgroundColor: selectedDevice === device ? '#3b82f6' : '#1e293b',
                }}
                onClick={() => setSelectedDevice(device)}
              >
                {device === 'Desktop' && '🖥️ '}
                {device === 'Tablet' && '📱 '}
                {device === 'Mobile' && '📱 '}
                {device}
              </button>
            ))}
          </div>
          
          <div style={styles.toolbarRight}>
            <button style={styles.toolButton}>↶ Undo</button>
            <button style={styles.toolButton}>↷ Redo</button>
            <button style={styles.toolButton}>💾 Save</button>
            <button style={styles.toolButton}>👁️ Preview</button>
            <button style={styles.toolButton}>🚀 Publish</button>
          </div>
        </div>
        
        {/* Canvas */}
        <div style={styles.canvas}>
          {currentTemplate === 'barbershop-ultra' ? (
            <BarbershopCanvas onSelectElement={selectSection} />
          ) : elements.length === 0 ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>🎨</div>
              <h3 style={styles.emptyTitle}>
                {currentPage ? `עריכת דף ${currentPage.name}` : 'התחל ליצור'}
              </h3>
              <p style={styles.emptyText}>
                {currentPage 
                  ? `בחר תבנית או הוסף רכיבים לדף ${currentPage.name}`
                  : 'בחר תבנית מהצד השמאלי או הוסף רכיבים כדי להתחיל לעצב'
                }
              </p>
            </div>
          ) : (
            <div style={styles.elementsContainer}>
              {elements.map((el) => (
                <div
                  key={el.id}
                  onClick={() => selectElement(el.id)}
                  style={{
                    ...styles.element,
                    border: el.id === selectedElementId ? '2px solid #3b82f6' : '1px solid #475569',
                    backgroundColor: el.id === selectedElementId ? '#1e3a8a' : '#334155'
                  }}
                >
                  <div style={styles.elementHeader}>
                    <span style={styles.elementType}>{el.type}</span>
                  </div>
                  <div style={styles.elementContent}>{el.content}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div style={styles.rightPanel}>
        {selectedElement || selectedSection ? (
          <div>
            <h3 style={styles.panelTitle}>⚙️ מאפייני רכיב</h3>
            
            {selectedElement && (
              <>
                <div style={styles.propertyGroup}>
                  <label style={styles.label}>סוג רכיב:</label>
                  <div style={styles.value}>{selectedElement.type}</div>
                </div>
                
                <div style={styles.propertyGroup}>
                  <label style={styles.label}>תוכן:</label>
                  <input
                    style={styles.input}
                    value={selectedElement.content}
                    onChange={(e) =>
                      setElements(
                        elements.map((el) =>
                          el.id === selectedElement.id ? { ...el, content: e.target.value } : el
                        )
                      )
                    }
                  />
                </div>
                
                <div style={styles.actionButtons}>
                  <button style={styles.actionButton} onClick={duplicateElement}>
                    📋 שכפל
                  </button>
                  <button style={styles.deleteButton} onClick={deleteElement}>
                    🗑️ מחק
                  </button>
                </div>
              </>
            )}

            {selectedSection && (
              <div>
                <div style={styles.propertyGroup}>
                  <label style={styles.label}>סקציה נבחרת:</label>
                  <div style={styles.value}>{selectedSection}</div>
                </div>
                
                <div style={styles.propertyGroup}>
                  <label style={styles.label}>אפשרויות עריכה:</label>
                  <button style={styles.actionButton}>✏️ ערוך טקסט</button>
                  <button style={styles.actionButton}>🎨 שנה עיצוב</button>
                  <button style={styles.actionButton}>🖼️ החלף תמונה</button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div style={styles.noSelection}>
            <div style={styles.noSelectionIcon}>🎯</div>
            <h4 style={styles.noSelectionTitle}>ניהול דפים מקצועי</h4>
            <p style={styles.noSelectionText}>
              🏠 הוסף דפים חדשים<br/>
              ✏️ ערוך תוכן<br/>
              📱 תצוגה רספונסיבית<br/>
              🚀 פרסם באינטרנט
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Page Manager Styles
const pageStyles = {
  container: {
    backgroundColor: '#1e293b',
    borderBottom: '1px solid #334155'
  },
  tabs: {
    display: 'flex',
    padding: '8px 12px',
    gap: '8px',
    alignItems: 'center',
    overflowX: 'auto'
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '6px 6px 0 0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    minWidth: 'fit-content'
  },
  tabIcon: {
    fontSize: '1rem'
  },
  tabName: {
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    fontSize: '0.8rem',
    marginLeft: '4px',
    padding: '2px 4px',
    borderRadius: '2px',
    transition: 'all 0.2s ease'
  },
  addPageDropdown: {
    position: 'relative'
  },
  addPageBtn: {
    background: 'linear-gradient(90deg, #10b981, #059669)',
    border: 'none',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    background: '#334155',
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    zIndex: 1000,
    minWidth: '150px',
    display: 'none'
  },
  dropdownItem: {
    width: '100%',
    background: 'none',
    border: 'none',
    color: '#f8fafc',
    padding: '8px 12px',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease'
  },
  pageActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 16px',
    backgroundColor: '#334155',
    borderTop: '1px solid #475569'
  },
  pageInfo: {
    fontSize: '0.9rem',
    color: '#cbd5e1',
    fontWeight: '500'
  },
  actionButtons: {
    display: 'flex',
    gap: '8px'
  },
  actionBtn: {
    background: '#475569',
    border: 'none',
    color: '#e2e8f0',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.8rem',
    transition: 'all 0.3s ease'
  }
};

// Canvas Styles for BarbershopCanvas
const canvasStyles = {
  canvas: {
    backgroundColor: '#0f172a',
    color: '#fff',
    fontFamily: '"Inter", system-ui, sans-serif',
    paddingBottom: '40px',
    position: 'relative'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  editBadge: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#3b82f6',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    zIndex: 10
  },
  hero: {
    position: 'relative',
    height: '80vh',
    overflow: 'hidden',
    marginBottom: '40px',
    transition: 'all 0.3s ease'
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  heroOverlay: {
    position: 'relative',
    top: '30%',
    textAlign: 'center',
    backdropFilter: 'blur(6px)',
    padding: '40px 20px',
    background: 'rgba(15, 23, 42, 0.3)',
    borderRadius: '16px',
    margin: '0 auto',
    maxWidth: '800px'
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '16px',
    textShadow: '0 2px 6px rgba(0,0,0,0.6)',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    color: '#cbd5e1',
    marginBottom: '30px',
    lineHeight: 1.6
  },
  heroButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  primaryBtn: {
    background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
    border: 'none',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
  },
  secondaryBtn: {
    background: 'transparent',
    border: '2px solid #3b82f6',
    color: '#3b82f6',
    padding: '15px 30px',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    margin: '40px 0 30px',
    background: 'linear-gradient(90deg, #f43f5e, #f59e0b, #10b981, #3b82f6, #8b5cf6)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold'
  },
  services: {
    padding: '60px 20px',
    position: 'relative',
    transition: 'all 0.3s ease'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  serviceCard: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(59, 130, 246, 0.1)',
    backdropFilter: 'blur(10px)'
  },
  serviceImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  serviceContent: {
    padding: '20px'
  },
  serviceName: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#f8fafc'
  },
  servicePrice: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: '15px'
  },
  serviceBtn: {
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.3s ease'
  },
  testimonials: {
    padding: '60px 20px',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    position: 'relative',
    transition: 'all 0.3s ease'
  },
  testimonialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  testimonialCard: {
    background: 'rgba(51, 65, 85, 0.8)',
    backdropFilter: 'blur(10px)',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    textAlign: 'center'
  },
  testimonialImage: {
    borderRadius: '50%',
    marginBottom: '15px',
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    border: '3px solid #3b82f6'
  },
  testimonialContent: {
    textAlign: 'center'
  },
  testimonialRating: {
    fontSize: '1.2rem',
    marginBottom: '15px'
  },
  testimonialText: {
    fontSize: '1rem',
    lineHeight: 1.6,
    fontStyle: 'italic',
    color: '#e2e8f0',
    marginBottom: '15px'
  },
  testimonialName: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#f8fafc',
    margin: 0
  }
};

// Styles for templates
const templateStyles = {
  container: {
    maxHeight: '70vh',
    overflowY: 'auto',
    padding: '10px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  title: {
    fontSize: '1.2rem',
    margin: '0 0 5px 0',
    color: '#f8fafc'
  },
  subtitle: {
    fontSize: '0.9rem',
    margin: 0,
    color: '#cbd5e1'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px'
  },
  templateCard: {
    background: 'rgba(51, 65, 85, 0.8)',
    borderRadius: '8px',
    padding: '12px',
    transition: 'all 0.3s ease',
    border: '1px solid #475569'
  },
  templateImage: {
    width: '100%',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '8px',
  },
  templateTitle: {
    fontSize: '0.9rem',
    margin: '0 0 4px',
    color: '#f8fafc',
    fontWeight: 'bold'
  },
  templateDescription: {
    fontSize: '0.75rem',
    color: '#cbd5e1',
    marginBottom: '8px',
    lineHeight: 1.3
  },
  features: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
    marginBottom: '8px'
  },
  feature: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white',
    padding: '2px 6px',
    borderRadius: '10px',
    fontSize: '0.6rem',
    fontWeight: 'bold'
  },
  templateButton: {
    background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
    border: 'none',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    width: '100%'
  },
  loadingButton: {
    background: '#6b7280',
    cursor: 'not-allowed'
  }
};

// Main styles
const styles = {
  editor: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#0f172a',
    color: '#fff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  leftPanel: {
    width: '280px',
    backgroundColor: '#1e293b',
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #334155'
  },
  logo: {
    padding: '20px',
    borderBottom: '1px solid #334155',
    textAlign: 'center'
  },
  logoText: {
    margin: '0 0 5px 0',
    background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  version: {
    fontSize: '0.7rem',
    color: '#10b981',
    fontWeight: '600'
  },
  tabs: {
    padding: '16px 0',
    borderBottom: '1px solid #334155'
  },
  tab: {
    padding: '12px 20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  tabContent: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto'
  },
  sectionTitle: {
    fontSize: '1.1rem',
    marginBottom: '15px',
    color: '#f8fafc'
  },
  center: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0f172a',
  },
  toolbar: {
    padding: '12px 20px',
    backgroundColor: '#1e293b',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #334155'
  },
  toolbarLeft: {
    display: 'flex',
    gap: '8px'
  },
  toolbarRight: {
    display: 'flex',
    gap: '8px'
  },
  deviceButton: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease'
  },
  toolButton: {
    padding: '8px 12px',
    border: '1px solid #475569',
    borderRadius: '6px',
    backgroundColor: '#334155',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.8rem',
    transition: 'all 0.3s ease'
  },
  canvas: {
    flex: 1,
    backgroundImage: `
      linear-gradient(rgba(51, 65, 85, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(51, 65, 85, 0.1) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
    overflowY: 'auto',
    position: 'relative'
  },
  emptyState: {
    textAlign: 'center',
    marginTop: '100px',
    color: '#64748b',
    padding: '40px'
  },
  emptyIcon: {
    fontSize: '4rem',
    marginBottom: '20px'
  },
  emptyTitle: {
    fontSize: '1.5rem',
    margin: '0 0 10px 0',
    color: '#94a3b8'
  },
  emptyText: {
    fontSize: '1rem',
    margin: 0,
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.5
  },
  elementsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '20px'
  },
  element: {
    backgroundColor: '#334155',
    padding: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative'
  },
  elementHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  elementType: {
    fontSize: '0.8rem',
    color: '#94a3b8',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  elementContent: {
    fontSize: '1rem',
    color: '#f8fafc'
  },
  rightPanel: {
    width: '280px',
    backgroundColor: '#1e293b',
    padding: '20px',
    borderLeft: '1px solid #334155',
    overflowY: 'auto'
  },
  panelTitle: {
    marginBottom: '20px',
    fontSize: '1.1rem',
    color: '#f8fafc'
  },
  propertyGroup: {
    marginBottom: '16px'
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontSize: '0.9rem',
    color: '#cbd5e1',
    fontWeight: '500'
  },
  value: {
    padding: '8px',
    backgroundColor: '#334155',
    borderRadius: '4px',
    fontSize: '0.9rem',
    color: '#f8fafc'
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #475569',
    backgroundColor: '#334155',
    color: '#f8fafc',
    fontSize: '0.9rem'
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #475569',
    backgroundColor: '#334155',
    color: '#f8fafc',
    fontSize: '0.9rem',
    resize: 'vertical',
    marginBottom: '12px'
  },
  primaryButton: {
    background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
    border: 'none',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    width: '100%',
    marginBottom: '20px'
  },
  componentButton: {
    background: '#374151',
    border: '1px solid #475569',
    color: '#f9fafb',
    padding: '10px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    width: '100%',
    marginBottom: '8px',
    textAlign: 'left'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '0.9rem',
    color: '#e2e8f0',
    cursor: 'pointer'
  },
  checkbox: {
    marginRight: '8px'
  },
  actionButtons: {
    display: 'flex',
    gap: '8px',
    marginTop: '20px'
  },
  actionButton: {
    flex: 1,
    padding: '8px 12px',
    border: '1px solid #475569',
    borderRadius: '4px',
    backgroundColor: '#374151',
    color: '#f9fafb',
    cursor: 'pointer',
    fontSize: '0.8rem',
    marginBottom: '6px'
  },
  deleteButton: {
    flex: 1,
    padding: '8px 12px',
    border: '1px solid #dc2626',
    borderRadius: '4px',
    backgroundColor: '#dc2626',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.8rem'
  },
  noSelection: {
    textAlign: 'center',
    marginTop: '40px',
    color: '#64748b'
  },
  noSelectionIcon: {
    fontSize: '3rem',
    marginBottom: '16px'
  },
  noSelectionTitle: {
    fontSize: '1.1rem',
    margin: '0 0 8px 0',
    color: '#94a3b8'
  },
  noSelectionText: {
    fontSize: '0.9rem',
    margin: 0,
    lineHeight: 1.4
  }
};

export default EditorWithPages;
