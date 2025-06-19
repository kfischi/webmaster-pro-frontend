'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function WebMasterPro() {
  // ============================================
  // CORE STATE MANAGEMENT
  // ============================================
  
  const [project, setProject] = useState({
    id: 'project-1',
    name: 'אתר חדש',
    settings: {
      colors: {
        primary: '#667eea',
        secondary: '#764ba2',
        text: '#1a202c'
      },
      fonts: {
        heading: 'Heebo',
        body: 'Assistant'
      }
    }
  });

  const [pages, setPages] = useState([
    {
      id: 'page-home',
      name: 'דף הבית',
      url: '/',
      elements: []
    },
    {
      id: 'page-about',
      name: 'אודותינו',
      url: '/about',
      elements: []
    }
  ]);

  const [currentPageId, setCurrentPageId] = useState('page-home');
  const [selectedElement, setSelectedElement] = useState(null);
  const [currentDevice, setCurrentDevice] = useState('desktop');
  const [currentZoom, setCurrentZoom] = useState(100);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activePanel, setActivePanel] = useState('pages');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const canvasRef = useRef(null);

  // ============================================
  // DEVICES & COMPONENTS
  // ============================================
  
  const devices = {
    mobile: { name: 'Mobile', width: '375px', icon: '📱' },
    tablet: { name: 'Tablet', width: '768px', icon: '📱' },
    desktop: { name: 'Desktop', width: '1024px', icon: '🖥️' }
  };

  const componentLibrary = {
    text: [
      { id: 'heading-1', name: 'כותרת ראשית', icon: '📝', tag: 'h1' },
      { id: 'heading-2', name: 'כותרת משנה', icon: '📝', tag: 'h2' },
      { id: 'paragraph', name: 'פסקה', icon: '📄', tag: 'p' },
      { id: 'button', name: 'כפתור', icon: '🔘', tag: 'button' }
    ],
    media: [
      { id: 'image', name: 'תמונה', icon: '🖼️', tag: 'img' },
      { id: 'video', name: 'וידאו', icon: '🎬', tag: 'div' }
    ],
    business: [
      { id: 'hero', name: 'Hero Section', icon: '🎯', tag: 'section' },
      { id: 'testimonial', name: 'המלצה', icon: '⭐', tag: 'div' },
      { id: 'service-card', name: 'כרטיס שירות', icon: '💼', tag: 'div' }
    ]
  };

  const googleFonts = [
    { name: 'Heebo', hebrew: true },
    { name: 'Assistant', hebrew: true },
    { name: 'Rubik', hebrew: true },
    { name: 'Open Sans', hebrew: false },
    { name: 'Roboto', hebrew: false },
    { name: 'Inter', hebrew: false }
  ];

  // ============================================
  // HELPER FUNCTIONS
  // ============================================
  
  const showToastMessage = useCallback((message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }, []);

  const getCurrentPage = useCallback(() => {
    return pages.find(page => page.id === currentPageId);
  }, [pages, currentPageId]);

  const generateId = useCallback(() => {
    return 'el-' + Math.random().toString(36).substr(2, 9);
  }, []);

  // ============================================
  // PAGE MANAGEMENT
  // ============================================
  
  const createPage = useCallback((name = 'דף חדש') => {
    const newPage = {
      id: `page-${Date.now()}`,
      name,
      url: `/${name.replace(/\s+/g, '-').toLowerCase()}`,
      elements: []
    };
    
    setPages(prev => [...prev, newPage]);
    setCurrentPageId(newPage.id);
    showToastMessage(`דף "${name}" נוצר בהצלחה!`);
  }, [showToastMessage]);

  const deletePage = useCallback((pageId) => {
    if (pages.length <= 1) {
      showToastMessage('חייב להישאר לפחות דף אחד!');
      return;
    }
    
    setPages(prev => prev.filter(p => p.id !== pageId));
    if (currentPageId === pageId) {
      setCurrentPageId(pages[0].id);
    }
    showToastMessage('הדף נמחק בהצלחה!');
  }, [pages, currentPageId, showToastMessage]);

  // ============================================
  // ELEMENT MANAGEMENT
  // ============================================
  
  const createElement = useCallback((componentType) => {
    const component = Object.values(componentLibrary)
      .flat()
      .find(comp => comp.id === componentType);
    
    if (!component) return;

    const elementId = generateId();
    const newElement = {
      id: elementId,
      type: componentType,
      tag: component.tag,
      content: getDefaultContent(componentType),
      styles: getDefaultStyles(componentType),
      position: { x: 50 + Math.random() * 100, y: 50 + Math.random() * 100 }
    };

    setPages(prev => prev.map(page => 
      page.id === currentPageId 
        ? { ...page, elements: [...page.elements, newElement] }
        : page
    ));

    setSelectedElement(newElement);
    showToastMessage(`${component.name} נוסף בהצלחה!`);
  }, [currentPageId, generateId, showToastMessage]);

  const updateElement = useCallback((elementId, updates) => {
    setPages(prev => prev.map(page => 
      page.id === currentPageId 
        ? {
            ...page,
            elements: page.elements.map(el => 
              el.id === elementId ? { ...el, ...updates } : el
            )
          }
        : page
    ));

    if (selectedElement?.id === elementId) {
      setSelectedElement(prev => ({ ...prev, ...updates }));
    }
  }, [currentPageId, selectedElement]);

  const deleteElement = useCallback((elementId) => {
    setPages(prev => prev.map(page => 
      page.id === currentPageId 
        ? { ...page, elements: page.elements.filter(el => el.id !== elementId) }
        : page
    ));
    
    if (selectedElement?.id === elementId) {
      setSelectedElement(null);
    }
    
    showToastMessage('האלמנט נמחק בהצלחה!');
  }, [currentPageId, selectedElement, showToastMessage]);

  // ============================================
  // DEFAULT CONTENT & STYLES
  // ============================================
  
  const getDefaultContent = (type) => {
    const defaults = {
      'heading-1': 'כותרת ראשית',
      'heading-2': 'כותרת משנה',
      'paragraph': 'זהו טקסט לדוגמה. לחץ כדי לערוך.',
      'button': 'לחץ כאן',
      'hero': 'ברוכים הבאים לעסק שלנו',
      'testimonial': 'שירות מעולה! אני ממליץ בחום.',
      'service-card': 'השירות שלנו'
    };
    return defaults[type] || 'תוכן חדש';
  };

  const getDefaultStyles = (type) => {
    const baseStyles = {
      'heading-1': {
        fontSize: '3rem',
        fontWeight: '700',
        color: project.settings.colors.text,
        marginBottom: '1rem',
        textAlign: 'center'
      },
      'heading-2': {
        fontSize: '2.5rem',
        fontWeight: '600',
        color: project.settings.colors.text,
        marginBottom: '1rem'
      },
      'paragraph': {
        fontSize: '1.125rem',
        lineHeight: '1.6',
        color: project.settings.colors.text,
        marginBottom: '1rem'
      },
      'button': {
        backgroundColor: project.settings.colors.primary,
        color: '#ffffff',
        padding: '0.75rem 2rem',
        borderRadius: '0.5rem',
        border: 'none',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer'
      }
    };

    return baseStyles[type] || {};
  };

  // ============================================
  // EXPORT FUNCTIONALITY
  // ============================================
  
  const exportToHTML = useCallback(() => {
    const currentPage = getCurrentPage();
    if (!currentPage) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${currentPage.name}</title>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400;500;600;700;800&family=Assistant:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Assistant', sans-serif; line-height: 1.6; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
    </style>
</head>
<body>
    ${currentPage.elements.map(element => {
      const styles = Object.entries(element.styles)
        .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
        .join('; ');
      
      return `<${element.tag} style="position: absolute; left: ${element.position.x}px; top: ${element.position.y}px; ${styles}">${element.content}</${element.tag}>`;
    }).join('\n')}
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.name}.html`;
    a.click();
    URL.revokeObjectURL(url);
    showToastMessage('האתר יוצא בהצלחה!');
  }, [project, getCurrentPage, showToastMessage]);

  // ============================================
  // RENDER COMPONENTS
  // ============================================

  const Toast = () => (
    showToast && (
      <div style={{
        position: 'fixed',
        top: '24px',
        right: '24px',
        background: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(40px)',
        padding: '16px 24px',
        borderRadius: '12px',
        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
        color: isDarkMode ? '#e2e8f0' : '#1a202c',
        zIndex: 10000,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '20px',
            height: '20px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px'
          }}>
            ✓
          </div>
          {toastMessage}
        </div>
      </div>
    )
  );

  // ============================================
  // MAIN RENDER
  // ============================================

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      height: '100vh',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .element-selected {
          outline: 3px solid #667eea !important;
          outline-offset: 2px;
          position: relative;
          z-index: 1000;
        }
        
        .element-selected::after {
          content: '✏️';
          position: absolute;
          top: -12px;
          right: -12px;
          background: #667eea;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          border: 2px solid white;
          z-index: 1001;
        }
      `}</style>

      <Toast />

      {/* Header */}
      <header style={{
        background: isDarkMode 
          ? 'rgba(15, 23, 42, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(40px)',
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🚀 WebMaster Pro
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 16px',
            background: isDarkMode 
              ? 'rgba(255,255,255,0.05)' 
              : 'rgba(255,255,255,0.7)',
            borderRadius: '12px',
            fontSize: '0.9rem',
            fontWeight: '500',
            color: isDarkMode ? '#e2e8f0' : '#1a202c'
          }}>
            📄 {getCurrentPage()?.name || 'טוען...'}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* Device Switcher */}
          <div style={{
            display: 'flex',
            background: isDarkMode 
              ? 'rgba(255,255,255,0.05)' 
              : 'rgba(255,255,255,0.6)',
            borderRadius: '12px',
            padding: '4px'
          }}>
            {Object.entries(devices).map(([deviceKey, device]) => (
              <button
                key={deviceKey}
                onClick={() => setCurrentDevice(deviceKey)}
                style={{
                  padding: '8px 12px',
                  border: 'none',
                  background: currentDevice === deviceKey
                    ? (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)')
                    : 'transparent',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: currentDevice === deviceKey
                    ? (isDarkMode ? '#ffffff' : '#1a202c')
                    : (isDarkMode ? '#94a3b8' : '#64748b'),
                  fontSize: '0.8rem'
                }}
              >
                {device.icon} {device.name}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              padding: '8px 12px',
              background: isDarkMode 
                ? 'rgba(255,255,255,0.08)' 
                : 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '8px',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            style={{
              padding: '8px 16px',
              background: isPreviewMode 
                ? 'linear-gradient(135deg, #06d6a0, #0891b2)' 
                : (isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.7)'),
              border: 'none',
              borderRadius: '8px',
              color: isPreviewMode ? 'white' : (isDarkMode ? '#e2e8f0' : '#1a202c'),
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: '500'
            }}
          >
            {isPreviewMode ? '✏️ Edit' : '👁️ Preview'}
          </button>

          <button
            onClick={exportToHTML}
            style={{
              padding: '8px 16px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            💾 Export
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div style={{ display: 'flex', height: 'calc(100vh - 73px)' }}>
        
        {/* Left Sidebar */}
        {!isPreviewMode && (
          <div style={{
            width: '320px',
            background: isDarkMode 
              ? 'rgba(15, 23, 42, 0.7)' 
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(40px)',
            borderRight: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
            display: 'flex',
            flexDirection: 'column'
          }}>
            
            {/* Panel Tabs */}
            <div style={{
              display: 'flex',
              padding: '16px 16px 0 16px',
              gap: '4px'
            }}>
              {[
                { id: 'pages', label: 'דפים', icon: '📄' },
                { id: 'elements', label: 'רכיבים', icon: '🧩' },
                { id: 'design', label: 'עיצוב', icon: '🎨' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePanel(tab.id)}
                  style={{
                    flex: 1,
                    padding: '12px 8px',
                    background: activePanel === tab.id
                      ? (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)')
                      : 'transparent',
                    border: 'none',
                    borderRadius: '8px',
                    color: activePanel === tab.id
                      ? (isDarkMode ? '#ffffff' : '#1a202c')
                      : (isDarkMode ? '#94a3b8' : '#64748b'),
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: activePanel === tab.id ? '600' : '500',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Panel Content */}
            <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
              
              {/* Pages Panel */}
              {activePanel === 'pages' && (
                <div>
                  <h3 style={{
                    color: isDarkMode ? '#e2e8f0' : '#1a202c',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    📄 ניהול דפים
                  </h3>

                  <button
                    onClick={() => createPage('דף חדש')}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginBottom: '16px',
                      fontSize: '0.9rem'
                    }}
                  >
                    ➕ הוסף דף חדש
                  </button>

                  <div style={{ display: 'grid', gap: '8px' }}>
                    {pages.map((page) => (
                      <div
                        key={page.id}
                        onClick={() => setCurrentPageId(page.id)}
                        style={{
                          padding: '12px',
                          background: currentPageId === page.id
                            ? (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(103, 126, 234, 0.1)')
                            : (isDarkMode ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.6)'),
                          borderRadius: '8px',
                          cursor: 'pointer',
                          border: currentPageId === page.id
                            ? '2px solid #667eea'
                            : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.8)'}`
                        }}
                      >
                        <div style={{
                          display: 'block',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      🎨 צבע טקסט
                    </label>
                    <input
                      type="color"
                      value={selectedElement.styles?.color || '#000000'}
                      onChange={(e) => updateElement(selectedElement.id, {
                        styles: { ...selectedElement.styles, color: e.target.value }
                      })}
                      style={{
                        width: '100%',
                        height: '40px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}
                    />
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'grid', gap: '8px' }}>
                    <button
                      onClick={() => deleteElement(selectedElement.id)}
                      style={{
                        padding: '10px',
                        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}
                    >
                      🗑️ מחק אלמנט
                    </button>
                  </div>
                </div>
              )}

              {/* No Element Selected */}
              {activePanel === 'design' && !selectedElement && (
                <div style={{
                  textAlign: 'center',
                  color: isDarkMode ? '#94a3b8' : '#64748b',
                  padding: '40px 20px'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>👆</div>
                  <div style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>
                    בחר אלמנט לעריכה
                  </div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                    לחץ על אלמנט בקנבס כדי לערוך אותו
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Canvas Area */}
        <div style={{
          flex: 1,
          background: isDarkMode 
            ? 'linear-gradient(135deg, #0f172a, #1e293b)' 
            : 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: isPreviewMode ? '0' : '40px',
          overflow: 'auto'
        }}>

          {/* Canvas */}
          <div
            ref={canvasRef}
            style={{
              background: '#ffffff',
              borderRadius: isPreviewMode ? '0' : '16px',
              boxShadow: isPreviewMode 
                ? 'none' 
                : (isDarkMode 
                  ? '0 40px 120px rgba(0,0,0,0.5)' 
                  : '0 40px 120px rgba(0,0,0,0.15)'),
              overflow: isPreviewMode ? 'visible' : 'hidden',
              transform: isPreviewMode ? 'none' : `scale(${currentZoom / 100})`,
              transformOrigin: 'top center',
              width: isPreviewMode ? '100%' : devices[currentDevice].width,
              minHeight: isPreviewMode ? '100vh' : '600px',
              border: isPreviewMode 
                ? 'none' 
                : `2px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)'}`,
              position: 'relative'
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedElement(null);
              }
            }}
          >
            
            {/* Render Page Elements */}
            {getCurrentPage()?.elements.map((element) => {
              const Element = element.tag;
              const isSelected = selectedElement?.id === element.id;
              
              return (
                <Element
                  key={element.id}
                  className={isSelected ? 'element-selected' : ''}
                  style={{
                    ...element.styles,
                    position: 'absolute',
                    left: element.position?.x || 0,
                    top: element.position?.y || 0,
                    cursor: isPreviewMode ? 'default' : 'pointer',
                    userSelect: isPreviewMode ? 'text' : 'none'
                  }}
                  onClick={(e) => {
                    if (!isPreviewMode) {
                      e.stopPropagation();
                      setSelectedElement(element);
                    }
                  }}
                >
                  {element.type === 'hero' ? (
                    <div style={{
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      color: '#ffffff',
                      padding: '4rem 2rem',
                      textAlign: 'center',
                      borderRadius: '12px',
                      width: '600px',
                      minHeight: '300px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <h1 style={{
                        fontSize: '3rem',
                        fontWeight: '700',
                        marginBottom: '1rem'
                      }}>
                        {element.content}
                      </h1>
                      <p style={{
                        fontSize: '1.25rem',
                        opacity: 0.9,
                        marginBottom: '2rem'
                      }}>
                        הטקסט התומך של הHero
                      </p>
                      <button style={{
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        border: '2px solid rgba(255,255,255,0.3)',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}>
                        התחל עכשיו
                      </button>
                    </div>
                  ) : element.type === 'testimonial' ? (
                    <div style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '2rem',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                      maxWidth: '400px'
                    }}>
                      <div style={{
                        display: 'flex',
                        marginBottom: '1rem'
                      }}>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: '#fbbf24', fontSize: '1.2rem' }}>⭐</span>
                        ))}
                      </div>
                      <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        marginBottom: '1rem',
                        fontStyle: 'italic'
                      }}>
                        "{element.content}"
                      </p>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: '#e2e8f0',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          👤
                        </div>
                        <div>
                          <div style={{ fontWeight: '600' }}>שם הלקוח</div>
                          <div style={{ fontSize: '0.9rem', color: '#64748b' }}>תפקיד</div>
                        </div>
                      </div>
                    </div>
                  ) : element.type === 'service-card' ? (
                    <div style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '2rem',
                      textAlign: 'center',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                      maxWidth: '350px'
                    }}>
                      <div style={{
                        fontSize: '3rem',
                        marginBottom: '1rem'
                      }}>
                        💼
                      </div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                      }}>
                        {element.content}
                      </h3>
                      <p style={{
                        color: '#64748b',
                        lineHeight: '1.6',
                        marginBottom: '1.5rem'
                      }}>
                        תיאור השירות והיתרונות שלו ללקוחות שלכם
                      </p>
                      <button style={{
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '500'
                      }}>
                        קרא עוד
                      </button>
                    </div>
                  ) : (
                    element.content
                  )}
                </Element>
              );
            })}

            {/* Empty State */}
            {getCurrentPage()?.elements.length === 0 && !isPreviewMode && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: '#64748b'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎨</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>התחל לעצב!</h3>
                <p>לחץ על רכיבים בסיידבר כדי להתחיל לבנות את האתר</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div>
                            <div style={{
                              fontWeight: '600',
                              color: isDarkMode ? '#e2e8f0' : '#1a202c',
                              fontSize: '0.9rem'
                            }}>
                              {page.name}
                            </div>
                            <div style={{
                              fontSize: '0.75rem',
                              color: isDarkMode ? '#94a3b8' : '#64748b'
                            }}>
                              {page.url}
                            </div>
                          </div>
                          {pages.length > 1 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deletePage(page.id);
                              }}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: '#ef4444',
                                cursor: 'pointer',
                                fontSize: '0.8rem'
                              }}
                            >
                              🗑️
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Elements Panel */}
              {activePanel === 'elements' && (
                <div>
                  <h3 style={{
                    color: isDarkMode ? '#e2e8f0' : '#1a202c',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    🧩 רכיבים
                  </h3>

                  {Object.entries(componentLibrary).map(([category, components]) => (
                    <div key={category} style={{ marginBottom: '24px' }}>
                      <h4 style={{
                        color: isDarkMode ? '#cbd5e1' : '#475569',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '12px'
                      }}>
                        {category === 'text' && '📝 טקסט'}
                        {category === 'media' && '🎬 מדיה'}
                        {category === 'business' && '💼 עסקי'}
                      </h4>
                      
                      <div style={{ display: 'grid', gap: '8px' }}>
                        {components.map((component) => (
                          <div
                            key={component.id}
                            onClick={() => createElement(component.id)}
                            style={{
                              padding: '12px',
                              background: isDarkMode 
                                ? 'rgba(255,255,255,0.04)' 
                                : 'rgba(255,255,255,0.6)',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.8)'}`,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px'
                            }}
                          >
                            <div style={{
                              width: '32px',
                              height: '32px',
                              background: 'linear-gradient(135deg, #667eea, #764ba2)',
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '1rem'
                            }}>
                              {component.icon}
                            </div>
                            <div style={{
                              fontWeight: '600',
                              color: isDarkMode ? '#e2e8f0' : '#1a202c',
                              fontSize: '0.9rem'
                            }}>
                              {component.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Design Panel */}
              {activePanel === 'design' && selectedElement && (
                <div>
                  <h3 style={{
                    color: isDarkMode ? '#e2e8f0' : '#1a202c',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    🎨 עיצוב אלמנט
                  </h3>

                  {/* Content Editor */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      📝 תוכן
                    </label>
                    <textarea
                      value={selectedElement.content}
                      onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                        borderRadius: '8px',
                        background: isDarkMode 
                          ? 'rgba(255,255,255,0.05)' 
                          : 'rgba(255,255,255,0.9)',
                        color: isDarkMode ? '#e2e8f0' : '#1a202c',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                        minHeight: '80px'
                      }}
                      placeholder="הכנס תוכן..."
                    />
                  </div>

                  {/* Color Picker */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: '
