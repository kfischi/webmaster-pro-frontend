'use client';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

export default function WebMasterProUltimate() {
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
        text: '#1a202c',
        background: '#ffffff'
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
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const canvasRef = useRef(null);

  // ============================================
  // DESIGN SYSTEM
  // ============================================

  const googleFonts = [
    { name: 'Heebo', hebrew: true },
    { name: 'Assistant', hebrew: true },
    { name: 'Rubik', hebrew: true },
    { name: 'Open Sans', hebrew: false },
    { name: 'Roboto', hebrew: false },
    { name: 'Inter', hebrew: false },
    { name: 'Poppins', hebrew: false },
    { name: 'Montserrat', hebrew: false }
  ];

  const devices = {
    mobile: { name: 'Mobile', width: 375, icon: '📱' },
    tablet: { name: 'Tablet', width: 768, icon: '📱' },
    desktop: { name: 'Desktop', width: 1024, icon: '🖥️' },
    large: { name: 'Large', width: 1440, icon: '🖥️' }
  };

  const componentLibrary = {
    text: [
      { id: 'heading-1', name: 'כותרת ראשית', icon: '📝', tag: 'h1' },
      { id: 'heading-2', name: 'כותרת משנה', icon: '📝', tag: 'h2' },
      { id: 'heading-3', name: 'כותרת קטנה', icon: '📝', tag: 'h3' },
      { id: 'paragraph', name: 'פסקה', icon: '📄', tag: 'p' },
      { id: 'quote', name: 'ציטוט', icon: '💬', tag: 'blockquote' }
    ],
    media: [
      { id: 'image', name: 'תמונה', icon: '🖼️', tag: 'img' },
      { id: 'video-youtube', name: 'YouTube', icon: '🎬', tag: 'iframe' },
      { id: 'video-vimeo', name: 'Vimeo', icon: '🎬', tag: 'iframe' },
      { id: 'gallery', name: 'גלריה', icon: '🖼️', tag: 'div' }
    ],
    layout: [
      { id: 'container', name: 'מכולה', icon: '📦', tag: 'div' },
      { id: 'section', name: 'סקשן', icon: '📐', tag: 'section' },
      { id: 'spacer', name: 'רווח', icon: '↕️', tag: 'div' },
      { id: 'divider', name: 'מפריד', icon: '➖', tag: 'hr' }
    ],
    interactive: [
      { id: 'button', name: 'כפתור', icon: '🔘', tag: 'button' },
      { id: 'link', name: 'קישור', icon: '🔗', tag: 'a' },
      { id: 'form', name: 'טופס', icon: '📝', tag: 'form' },
      { id: 'input', name: 'שדה טקסט', icon: '📝', tag: 'input' }
    ],
    business: [
      { id: 'hero', name: 'Hero Section', icon: '🎯', tag: 'section' },
      { id: 'testimonial', name: 'המלצה', icon: '⭐', tag: 'div' },
      { id: 'team-card', name: 'כרטיס צוות', icon: '👤', tag: 'div' },
      { id: 'service-card', name: 'כרטיס שירות', icon: '💼', tag: 'div' },
      { id: 'stats', name: 'סטטיסטיקות', icon: '📊', tag: 'div' }
    ]
  };

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

  const saveToHistory = useCallback(() => {
    const newState = { pages, project };
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(newState)));
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [pages, project, history, historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const prevState = history[historyIndex - 1];
      setPages(prevState.pages);
      setProject(prevState.project);
      setHistoryIndex(historyIndex - 1);
      showToastMessage('צעד אחורה בוצע');
    }
  }, [history, historyIndex, showToastMessage]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setPages(nextState.pages);
      setProject(nextState.project);
      setHistoryIndex(historyIndex + 1);
      showToastMessage('צעד קדימה בוצע');
    }
  }, [history, historyIndex, showToastMessage]);

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
    saveToHistory();
    showToastMessage(`דף "${name}" נוצר בהצלחה!`);
  }, [saveToHistory, showToastMessage]);

  const deletePage = useCallback((pageId) => {
    if (pages.length <= 1) {
      showToastMessage('חייב להישאר לפחות דף אחד!');
      return;
    }
    
    setPages(prev => prev.filter(p => p.id !== pageId));
    if (currentPageId === pageId) {
      setCurrentPageId(pages[0].id);
    }
    saveToHistory();
    showToastMessage('הדף נמחק בהצלחה!');
  }, [pages, currentPageId, saveToHistory, showToastMessage]);

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
      position: { 
        x: 50 + Math.random() * 100, 
        y: 50 + Math.random() * 100 
      }
    };

    setPages(prev => prev.map(page => 
      page.id === currentPageId 
        ? { ...page, elements: [...page.elements, newElement] }
        : page
    ));

    setSelectedElement(newElement);
    saveToHistory();
    showToastMessage(`${component.name} נוסף בהצלחה!`);
  }, [currentPageId, generateId, saveToHistory, showToastMessage]);

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
    
    saveToHistory();
    showToastMessage('האלמנט נמחק בהצלחה!');
  }, [currentPageId, selectedElement, saveToHistory, showToastMessage]);

  const duplicateElement = useCallback((elementId) => {
    const currentPage = getCurrentPage();
    const element = currentPage?.elements.find(el => el.id === elementId);
    
    if (element) {
      const newElement = {
        ...element,
        id: generateId(),
        position: {
          x: element.position.x + 20,
          y: element.position.y + 20
        }
      };
      
      setPages(prev => prev.map(page => 
        page.id === currentPageId 
          ? { ...page, elements: [...page.elements, newElement] }
          : page
      ));
      
      saveToHistory();
      showToastMessage('האלמנט שוכפל בהצלחה!');
    }
  }, [currentPageId, getCurrentPage, generateId, saveToHistory, showToastMessage]);

  // ============================================
  // DEFAULT CONTENT & STYLES
  // ============================================
  
  const getDefaultContent = useCallback((type) => {
    const defaults = {
      'heading-1': 'כותרת ראשית',
      'heading-2': 'כותרת משנה',
      'heading-3': 'כותרת קטנה',
      'paragraph': 'זהו טקסט לדוגמה. לחץ כדי לערוך את התוכן.',
      'quote': 'זהו ציטוט מעורר השראה.',
      'button': 'לחץ כאן',
      'link': 'קישור',
      'hero': 'ברוכים הבאים לעסק שלנו\nאנחנו מספקים שירותים מעולים',
      'testimonial': '"שירות מעולה! אני ממליץ בחום."\n- לקוח מרוצה',
      'team-card': 'ישראל ישראלי\nמנהל פרויקטים',
      'service-card': 'השירות שלנו\nתיאור קצר של השירות המעולה שאנו מספקים.',
      'stats': '500+\nלקוחות מרוצים'
    };
    return defaults[type] || 'תוכן חדש';
  }, []);

  const getDefaultStyles = useCallback((type) => {
    const baseStyles = {
      'heading-1': {
        fontSize: '3rem',
        fontWeight: '700',
        color: project.settings.colors.text,
        fontFamily: project.settings.fonts.heading,
        lineHeight: '1.2',
        textAlign: 'center',
        marginBottom: '1rem'
      },
      'heading-2': {
        fontSize: '2.5rem',
        fontWeight: '600',
        color: project.settings.colors.text,
        fontFamily: project.settings.fonts.heading,
        lineHeight: '1.3',
        marginBottom: '1rem'
      },
      'heading-3': {
        fontSize: '2rem',
        fontWeight: '500',
        color: project.settings.colors.text,
        fontFamily: project.settings.fonts.heading,
        lineHeight: '1.4',
        marginBottom: '0.75rem'
      },
      'paragraph': {
        fontSize: '1.125rem',
        lineHeight: '1.6',
        color: project.settings.colors.text,
        fontFamily: project.settings.fonts.body,
        marginBottom: '1rem'
      },
      'quote': {
        fontSize: '1.5rem',
        fontStyle: 'italic',
        color: project.settings.colors.text,
        fontFamily: project.settings.fonts.body,
        borderLeft: `4px solid ${project.settings.colors.primary}`,
        paddingLeft: '1rem',
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
        cursor: 'pointer',
        fontFamily: project.settings.fonts.body
      },
      'hero': {
        background: `linear-gradient(135deg, ${project.settings.colors.primary}, ${project.settings.colors.secondary})`,
        color: '#ffffff',
        padding: '4rem 2rem',
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: '700',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }
    };

    return baseStyles[type] || {
      color: project.settings.colors.text,
      fontFamily: project.settings.fonts.body
    };
  }, [project.settings]);

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
        body { 
          font-family: 'Assistant', sans-serif; 
          line-height: 1.6; 
          color: ${project.settings.colors.text};
          background: ${project.settings.colors.background};
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; position: relative; min-height: 100vh; }
        @media (max-width: 768px) { .container { padding: 0 0.5rem; } }
    </style>
</head>
<body>
    <div class="container">
        ${currentPage.elements.map(element => {
          const styles = Object.entries(element.styles)
            .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
            .join('; ');
          
          return `<${element.tag} style="position: absolute; left: ${element.position.x}px; top: ${element.position.y}px; ${styles}">${element.content}</${element.tag}>`;
        }).join('\n')}
    </div>
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
  // KEYBOARD SHORTCUTS
  // ============================================

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'z':
            e.preventDefault();
            if (e.shiftKey) {
              redo();
            } else {
              undo();
            }
            break;
          case 's':
            e.preventDefault();
            showToastMessage('פרויקט נשמר אוטומטית!');
            break;
          case 'd':
            e.preventDefault();
            if (selectedElement) {
              duplicateElement(selectedElement.id);
            }
            break;
        }
      }
      
      if (e.key === 'Delete' && selectedElement) {
        deleteElement(selectedElement.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, selectedElement, duplicateElement, deleteElement, showToastMessage]);

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

  const PropertiesPanel = () => {
    if (!selectedElement) return null;

    return (
      <div style={{
        width: '320px',
        background: isDarkMode 
          ? 'rgba(15, 23, 42, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(40px)',
        borderLeft: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
        padding: '20px',
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 73px)'
      }}>
        <h3 style={{
          color: isDarkMode ? '#e2e8f0' : '#1a202c',
          fontSize: '1.1rem',
          fontWeight: '600',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          🎨 מאפיינים
          <button
            onClick={() => deleteElement(selectedElement.id)}
            style={{
              marginLeft: 'auto',
              background: 'none',
              border: 'none',
              color: '#ef4444',
              cursor: 'pointer',
              fontSize: '1.2rem'
            }}
            title="מחק אלמנט"
          >
            🗑️
          </button>
        </h3>

        {/* Content Editor */}
        <div style={{ marginBottom: '24px' }}>
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

        {/* Font Controls */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{
            color: isDarkMode ? '#cbd5e1' : '#475569',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            🔤 טיפוגרפיה
          </h4>

          {/* Font Family */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              marginBottom: '6px',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              fontSize: '0.8rem'
            }}>
              גופן
            </label>
            <select
              value={selectedElement.styles?.fontFamily || project.settings.fonts.body}
              onChange={(e) => updateElement(selectedElement.id, {
                styles: { ...selectedElement.styles, fontFamily: e.target.value }
              })}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'white',
                color: isDarkMode ? '#e2e8f0' : '#1a202c',
                fontSize: '0.9rem'
              }}
            >
              {googleFonts.map(font => (
                <option key={font.name} value={font.name}>
                  {font.name} {font.hebrew ? '(עברית)' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Font Size */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              marginBottom: '6px',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              fontSize: '0.8rem'
            }}>
              גודל גופן
            </label>
            <input
              type="range"
              min="12"
              max="120"
              value={parseInt(selectedElement.styles?.fontSize) || 16}
              onChange={(e) => updateElement(selectedElement.id, {
                styles: { ...selectedElement.styles, fontSize: `${e.target.value}px` }
              })}
              style={{ width: '100%' }}
            />
            <div style={{ 
              fontSize: '0.8rem', 
              color: isDarkMode ? '#94a3b8' : '#64748b',
              marginTop: '4px'
            }}>
              {selectedElement.styles?.fontSize || '16px'}
            </div>
          </div>

          {/* Font Weight */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              marginBottom: '6px',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              fontSize: '0.8rem'
            }}>
              משקל גופן
            </label>
            <select
              value={selectedElement.styles?.fontWeight || '400'}
              onChange={(e) => updateElement(selectedElement.id, {
                styles: { ...selectedElement.styles, fontWeight: e.target.value }
              })}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'white',
                color: isDarkMode ? '#e2e8f0' : '#1a202c',
                fontSize: '0.9rem'
              }}
            >
              <option value="300">Light (300)</option>
              <option value="400">Regular (400)</option>
              <option value="500">Medium (500)</option>
              <option value="600">Semi Bold (600)</option>
              <option value="700">Bold (700)</option>
              <option value="800">Extra Bold (800)</option>
            </select>
          </div>

          {/* Text Align */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              fontSize: '0.8rem'
            }}>
              יישור טקסט
            </label>
            <div style={{ display: 'flex', gap: '6px' }}>
              {[
                { value: 'left', label: 'שמאל' },
                { value: 'center', label: 'מרכז' },
                { value: 'right', label: 'ימין' }
              ].map(align => (
                <button
                  key={align.value}
                  onClick={() => updateElement(selectedElement.id, {
                    styles: { ...selectedElement.styles, textAlign: align.value }
                  })}
                  style={{
                    flex: 1,
                    padding: '8px',
                    border: 'none',
                    borderRadius: '6px',
                    background: selectedElement.styles?.textAlign === align.value
                      ? 'linear-gradient(135deg, #667eea, #764ba2)'
                      : (isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.7)'),
                    color: selectedElement.styles?.textAlign === align.value
                      ? 'white'
                      : (isDarkMode ? '#e2e8f0' : '#1a202c'),
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                >
                  {align.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Color Controls */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{
            color: isDarkMode ? '#cbd5e1' : '#475569',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            🎨 צבעים
          </h4>

          {/* Text Color */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              fontSize: '0.8rem'
            }}>
              צבע טקסט
            </label>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input
                type="color"
                value={selectedElement.styles?.color || project.settings.colors.text}
                onChange={(e) => updateElement(selectedElement.id, {
                  styles: { ...selectedElement.styles, color: e.target.value }
                })}
                style={{
                  width: '40px',
                  height: '40px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              />
              <input
                type="text"
                value={selectedElement.styles?.color || project.settings.colors.text}
                onChange={(e) => updateElement(selectedElement.id, {
                  styles: { ...selectedElement.styles, color: e.target.value }
                })}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '6px',
                  border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'white',
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontSize: '0.8rem'
                }}
                placeholder="#000000"
              />
            </div>
          </div>

          {/* Background Color */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              fontSize: '0.8rem'
            }}>
              צבע רקע
            </label>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input
                type="color"
                value={selectedElement.styles?.backgroundColor || '#ffffff'}
                onChange={(e) => updateElement(selectedElement.id, {
                  styles: { ...selectedElement.styles, backgroundColor: e.target.value }
                })}
                style={{
                  width: '40px',
                  height: '40px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              />
              <input
                type="text"
                value={selectedElement.styles?.backgroundColor || ''}
                onChange={(e) => updateElement(selectedElement.id, {
                  styles: { ...selectedElement.styles, backgroundColor: e.target.value }
                })}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '6px',
                  border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'white',
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontSize: '0.8rem'
                }}
                placeholder="transparent"
              />
            </div>
          </div>
        </div>

        {/* Position Controls */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{
            color: isDarkMode ? '#cbd5e1' : '#475569',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            📐 מיקום
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div>
              <label style={{ 
                fontSize: '0.7rem', 
                color: isDarkMode ? '#94a3b8' : '#64748b',
                display: 'block',
                marginBottom: '4px'
              }}>X</label>
              <input
                type="number"
                value={selectedElement.position?.x || 0}
                onChange={(e) => updateElement(selectedElement.id, {
                  position: { ...selectedElement.position, x: parseInt(e.target.value) }
                })}
                style={{
                  width: '100%',
                  padding: '6px',
                  borderRadius: '4px',
                  border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'white',
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontSize: '0.8rem'
                }}
              />
            </div>
            <div>
              <label style={{ 
                fontSize: '0.7rem', 
                color: isDarkMode ? '#94a3b8' : '#64748b',
                display: 'block',
                marginBottom: '4px'
              }}>Y</label>
              <input
                type="number"
                value={selectedElement.position?.y || 0}
                onChange={(e) => updateElement(selectedElement.id, {
                  position: { ...selectedElement.position, y: parseInt(e.target.value) }
                })}
                style={{
                  width: '100%',
                  padding: '6px',
                  borderRadius: '4px',
                  border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'white',
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontSize: '0.8rem'
                }}
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
          <button
            onClick={() => duplicateElement(selectedElement.id)}
            style={{
              flex: 1,
              padding: '8px',
              background: 'linear-gradient(135deg, #06d6a0, #0891b2)',
              border: 'none',
              borderRadius: '6px',
              color: 'white',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            📋 שכפל
          </button>
          <button
            onClick={() => setSelectedElement(null)}
            style={{
              flex: 1,
              padding: '8px',
              background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '6px',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            ✖️ סגור
          </button>
        </div>
      </div>
    );
  };

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

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              onClick={undo}
              disabled={historyIndex <= 0}
              style={{
                padding: '6px 12px',
                background: historyIndex > 0 
                  ? (isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.7)')
                  : 'rgba(128,128,128,0.2)',
                border: 'none',
                borderRadius: '6px',
                color: historyIndex > 0 
                  ? (isDarkMode ? '#e2e8f0' : '#1a202c')
                  : '#888',
                cursor: historyIndex > 0 ? 'pointer' : 'not-allowed',
                fontSize: '0.8rem'
              }}
              title="Undo (Ctrl+Z)"
            >
              ↶
            </button>
            <button
              onClick={redo}
              disabled={historyIndex >= history.length - 1}
              style={{
                padding: '6px 12px',
                background: historyIndex < history.length - 1
                  ? (isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.7)')
                  : 'rgba(128,128,128,0.2)',
                border: 'none',
                borderRadius: '6px',
                color: historyIndex < history.length - 1
                  ? (isDarkMode ? '#e2e8f0' : '#1a202c')
                  : '#888',
                cursor: historyIndex < history.length - 1 ? 'pointer' : 'not-allowed',
                fontSize: '0.8rem'
              }}
              title="Redo (Ctrl+Shift+Z)"
            >
              ↷
            </button>
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

          {/* Zoom Control */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 12px',
            background: isDarkMode 
              ? 'rgba(255,255,255,0.05)' 
              : 'rgba(255,255,255,0.7)',
            borderRadius: '8px',
            fontSize: '0.8rem',
            color: isDarkMode ? '#e2e8f0' : '#1a202c'
          }}>
            <button
              onClick={() => setCurrentZoom(Math.max(25, currentZoom - 25))}
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              ➖
            </button>
            <span style={{ minWidth: '40px', textAlign: 'center' }}>{currentZoom}%</span>
            <button
              onClick={() => setCurrentZoom(Math.min(200, currentZoom + 25))}
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              ➕
            </button>
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
                          display: 'flex',
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
                        {category === 'layout' && '📐 פריסה'}
                        {category === 'interactive' && '🔘 אינטראקטיבי'}
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
                              gap: '12px',
                              transition: 'all 0.2s ease'
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

              {/* Global Design Panel */}
              {activePanel === 'design' && !selectedElement && (
                <div>
                  <h3 style={{
                    color: isDarkMode ? '#e2e8f0' : '#1a202c',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    🎨 עיצוב גלובלי
                  </h3>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{
                      color: isDarkMode ? '#cbd5e1' : '#475569',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      marginBottom: '12px'
                    }}>
                      צבעי המותג
                    </h4>

                    <div style={{ display: 'grid', gap: '12px' }}>
                      <div>
                        <label style={{
                          display: 'block',
                          marginBottom: '6px',
                          fontSize: '0.8rem',
                          color: isDarkMode ? '#e2e8f0' : '#1a202c'
                        }}>
                          צבע ראשי
                        </label>
                        <input
                          type="color"
                          value={project.settings.colors.primary}
                          onChange={(e) => setProject(prev => ({
                            ...prev,
                            settings: {
                              ...prev.settings,
                              colors: { ...prev.settings.colors, primary: e.target.value }
                            }
                          }))}
                          style={{
                            width: '100%',
                            height: '40px',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{
                          display: 'block',
                          marginBottom: '6px',
                          fontSize: '0.8rem',
                          color: isDarkMode ? '#e2e8f0' : '#1a202c'
                        }}>
                          צבע משני
                        </label>
                        <input
                          type="color"
                          value={project.settings.colors.secondary}
                          onChange={(e) => setProject(prev => ({
                            ...prev,
                            settings: {
                              ...prev.settings,
                              colors: { ...prev.settings.colors, secondary: e.target.value }
                            }
                          }))}
                          style={{
                            width: '100%',
                            height: '40px',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{
                      color: isDarkMode ? '#cbd5e1' : '#475569',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      marginBottom: '12px'
                    }}>
                      גופנים גלובליים
                    </h4>

                    <div style={{ display: 'grid', gap: '12px' }}>
                      <div>
                        <label style={{
                          display: 'block',
                          marginBottom: '6px',
                          fontSize: '0.8rem',
                          color: isDarkMode ? '#e2e8f0' : '#1a202c'
                        }}>
                          גופן כותרות
                        </label>
                        <select
                          value={project.settings.fonts.heading}
                          onChange={(e) => setProject(prev => ({
                            ...prev,
                            settings: {
                              ...prev.settings,
                              fonts: { ...prev.settings.fonts, heading: e.target.value }
                            }
                          }))}
                          style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '6px',
                            border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                            background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'white',
                            color: isDarkMode ? '#e2e8f0' : '#1a202c',
                            fontSize: '0.9rem'
                          }}
                        >
                          {googleFonts.map(font => (
                            <option key={font.name} value={font.name}>
                              {font.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label style={{
                          display: 'block',
                          marginBottom: '6px',
                          fontSize: '0.8rem',
                          color: isDarkMode ? '#e2e8f0' : '#1a202c'
                        }}>
                        </label>
                        <select
                          value={project.settings.fonts.body}
                          onChange={(e) => setProject(prev => ({
                            ...prev,
                            settings: {
                              ...prev.settings,
                              fonts: { ...prev.settings.fonts, body: e.target.value }
                            }
                          }))}
                          style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '6px',
                            border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                            background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'white',
                            color: isDarkMode ? '#e2e8f0' : '#1a202c',
                            fontSize: '0.9rem'
                          }}
                        >
                          {googleFonts.map(font => (
                            <option key={font.name} value={font.name}>
                              {font.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Canvas Area */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
          background: isDarkMode ? '#1e293b' : '#f1f5f9'
        }}>
          
          {/* Canvas Container */}
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            overflow: 'auto'
          }}>
            <div
              ref={canvasRef}
              style={{
                width: `${devices[currentDevice].width}px`,
                minHeight: '600px',
                background: '#ffffff',
                borderRadius: '12px',
                boxShadow: isDarkMode 
                  ? '0 25px 50px rgba(0,0,0,0.5)' 
                  : '0 25px 50px rgba(0,0,0,0.15)',
                position: 'relative',
                transform: `scale(${currentZoom / 100})`,
                transformOrigin: 'center top',
                transition: 'all 0.3s ease'
              }}
              onClick={(e) => {
                if (e.target === canvasRef.current) {
                  setSelectedElement(null);
                }
              }}
            >
              {getCurrentPage()?.elements.map(element => (
                <div
                  key={element.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedElement(element);
                  }}
                  className={selectedElement?.id === element.id ? 'element-selected' : ''}
                  style={{
                    position: 'absolute',
                    left: `${element.position.x}px`,
                    top: `${element.position.y}px`,
                    ...element.styles,
                    cursor: isPreviewMode ? 'default' : 'pointer',
                    whiteSpace: 'pre-wrap'
                  }}
                  title={`${element.type} - לחץ לעריכה`}
                >
                  {element.content}
                </div>
              ))}

              {/* Empty State */}
              {getCurrentPage()?.elements.length === 0 && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  color: '#94a3b8',
                  fontSize: '1.2rem'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎨</div>
                  <div style={{ fontWeight: '600', marginBottom: '8px' }}>
                    התחל לבנות את האתר שלך
                  </div>
                  <div style={{ fontSize: '0.9rem' }}>
                    לחץ על רכיב מהסיידבר כדי להתחיל
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Canvas Footer Info */}
          <div style={{
            padding: '12px 24px',
            background: isDarkMode 
              ? 'rgba(15, 23, 42, 0.7)' 
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.8rem',
            color: isDarkMode ? '#94a3b8' : '#64748b'
          }}>
            <div>
              🎯 {getCurrentPage()?.elements.length || 0} אלמנטים
            </div>
            <div>
              📐 {devices[currentDevice].width}px × {currentZoom}%
            </div>
            <div>
              💾 נשמר אוטומטית
            </div>
          </div>
        </div>

        {/* Right Properties Panel */}
        {!isPreviewMode && selectedElement && <PropertiesPanel />}
      </div>
    </div>
  );
}
