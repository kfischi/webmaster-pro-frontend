'use client';
import { useState, useEffect, useRef } from 'react';

export default function FunctionalAppleEditor() {
  const [currentDevice, setCurrentDevice] = useState('desktop');
  const [currentZoom, setCurrentZoom] = useState(100);
  const [previewContent, setPreviewContent] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [selectedTool, setSelectedTool] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isElementSelected, setIsElementSelected] = useState(false);
  const [elementText, setElementText] = useState('');
  const [elementColor, setElementColor] = useState('#1a202c');
  const [elementSize, setElementSize] = useState('16');
  const previewRef = useRef(null);

  const templateContent = `
    <div class="hero-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); color: white; padding: 120px 60px; text-align: center; position: relative; overflow: hidden;">
      <div style="backdrop-filter: blur(20px); background: rgba(255,255,255,0.1); border-radius: 30px; padding: 60px; border: 1px solid rgba(255,255,255,0.2);">
        <h1 class="editable-text" style="font-size: 4rem; margin-bottom: 24px; font-weight: 200; letter-spacing: -2px; cursor: pointer;">✂️ סלון עופר</h1>
        <p class="editable-text" style="font-size: 1.5rem; margin-bottom: 40px; opacity: 0.95; font-weight: 300; cursor: pointer;">החוויה הכי מקצועית בעיר</p>
        <button class="editable-button" style="background: rgba(255,255,255,0.2); backdrop-filter: blur(20px); color: white; padding: 20px 40px; border: 1px solid rgba(255,255,255,0.3); border-radius: 50px; font-weight: 500; cursor: pointer; font-size: 1.1rem;">📞 הזמן תור עכשיו</button>
      </div>
    </div>
    
    <div class="services-section" style="padding: 120px 60px; background: linear-gradient(180deg, #fafbfc 0%, #f8fafc 100%);">
      <div style="max-width: 1400px; margin: 0 auto;">
        <h2 class="editable-text" style="font-size: 3.5rem; margin-bottom: 80px; color: #1a202c; font-weight: 200; letter-spacing: -1px; text-align: center; cursor: pointer;">השירותים שלנו</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 40px;">
          <div class="service-card" style="background: rgba(255,255,255,0.7); backdrop-filter: blur(40px); padding: 48px 40px; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.06); border: 1px solid rgba(255,255,255,0.8); text-align: center; cursor: pointer;">
            <div style="font-size: 3.5rem; margin-bottom: 24px;">✂️</div>
            <h3 class="editable-text" style="font-size: 1.5rem; color: #1a202c; font-weight: 600; margin-bottom: 16px; cursor: pointer;">תספורת מקצועית</h3>
            <p class="editable-text" style="color: #64748b; line-height: 1.7; margin-bottom: 32px; cursor: pointer;">תספורת מותאמת אישית עם ייעוץ מקצועי</p>
          </div>
          <div class="service-card" style="background: rgba(255,255,255,0.7); backdrop-filter: blur(40px); padding: 48px 40px; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.06); border: 1px solid rgba(255,255,255,0.8); text-align: center; cursor: pointer;">
            <div style="font-size: 3.5rem; margin-bottom: 24px;">🧔</div>
            <h3 class="editable-text" style="font-size: 1.5rem; color: #1a202c; font-weight: 600; margin-bottom: 16px; cursor: pointer;">עיצוב זקן</h3>
            <p class="editable-text" style="color: #64748b; line-height: 1.7; margin-bottom: 32px; cursor: pointer;">עיצוב מדויק ומקצועי של הזקן</p>
          </div>
        </div>
      </div>
    </div>
  `;

  useEffect(() => {
    setPreviewContent(templateContent);
  }, []);

  useEffect(() => {
    // Add click handlers to all editable elements
    const addClickHandlers = () => {
      const editableElements = document.querySelectorAll('.editable-text, .editable-button, .service-card, .hero-section, .services-section');
      editableElements.forEach(element => {
        element.addEventListener('click', (e) => {
          e.stopPropagation();
          selectElement(element);
        });
      });
    };

    setTimeout(addClickHandlers, 500);
  }, [previewContent]);

  const selectElement = (element) => {
    // Remove previous selection
    document.querySelectorAll('.selected-element').forEach(el => {
      el.classList.remove('selected-element');
    });
    
    // Add selection to new element
    element.classList.add('selected-element');
    setSelectedElement(element);
    setIsElementSelected(true);
    
    // Get current values
    setElementText(element.textContent || '');
    const computedStyle = window.getComputedStyle(element);
    setElementColor(computedStyle.color || '#1a202c');
    setElementSize(parseInt(computedStyle.fontSize) || 16);
    
    showToastMessage('אלמנט נבחר לעריכה');
  };

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const switchDevice = (device) => {
    setCurrentDevice(device);
    showToastMessage(`עברת לתצוגת ${device === 'desktop' ? 'דסקטופ' : device === 'tablet' ? 'טאבלט' : 'נייד'}`);
  };

  const zoomIn = () => {
    if (currentZoom < 200) {
      setCurrentZoom(prev => prev + 10);
      showToastMessage(`זום: ${currentZoom + 10}%`);
    }
  };

  const zoomOut = () => {
    if (currentZoom > 50) {
      setCurrentZoom(prev => prev - 10);
      showToastMessage(`זום: ${currentZoom - 10}%`);
    }
  };

  const addComponent = (type) => {
    const components = {
      text: `
        <div class="new-component" style="padding: 32px; margin: 20px; background: rgba(255,255,255,0.8); backdrop-filter: blur(20px); border-radius: 20px; border: 3px dashed #667eea; text-align: center;">
          <h3 class="editable-text" style="font-size: 1.8rem; margin-bottom: 16px; color: #1a202c; font-weight: 600; cursor: pointer;">כותרת חדשה</h3>
          <p class="editable-text" style="color: #64748b; line-height: 1.7; cursor: pointer;">טקסט לדוגמה. לחץ לעריכה.</p>
        </div>
      `,
      button: `
        <div class="new-component" style="margin: 32px; text-align: center; padding: 20px; border: 3px dashed #f093fb; border-radius: 20px;">
          <button class="editable-button" style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 18px 36px; border: none; border-radius: 25px; font-weight: 600; font-size: 1.1rem; cursor: pointer;">כפתור חדש</button>
        </div>
      `,
      image: `
        <div class="new-component" style="margin: 32px; text-align: center; padding: 20px; border: 3px dashed #06d6a0; border-radius: 20px;">
          <div style="width: 300px; height: 200px; background: linear-gradient(135deg, #f8fafc, #e2e8f0); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px dashed rgba(100, 116, 139, 0.3);">
            <div style="text-align: center; color: #64748b;">
              <div style="font-size: 3rem; margin-bottom: 16px;">🖼️</div>
              <div style="font-size: 1.1rem; font-weight: 500;">תמונה חדשה</div>
            </div>
          </div>
        </div>
      `,
      form: `
        <div class="new-component" style="margin: 32px; padding: 40px; background: rgba(255,255,255,0.8); backdrop-filter: blur(40px); border-radius: 24px; border: 3px dashed #f59e0b;">
          <h3 class="editable-text" style="margin-bottom: 25px; text-align: center; color: #1a202c; font-size: 1.5rem; cursor: pointer;">צור קשר</h3>
          <div style="display: grid; gap: 20px;">
            <input type="text" placeholder="שם מלא" style="padding: 15px; border: 2px solid #e2e8f0; border-radius: 12px;">
            <input type="email" placeholder="אימייל" style="padding: 15px; border: 2px solid #e2e8f0; border-radius: 12px;">
            <textarea placeholder="הודעה" rows="4" style="padding: 15px; border: 2px solid #e2e8f0; border-radius: 12px;"></textarea>
            <button style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 15px; border: none; border-radius: 12px; font-weight: 600;">שלח הודעה</button>
          </div>
        </div>
      `
    };
    
    if (components[type]) {
      setPreviewContent(prev => prev + components[type]);
      showToastMessage(`${type === 'text' ? 'טקסט' : type === 'button' ? 'כפתור' : type === 'image' ? 'תמונה' : 'טופס'} נוסף בהצלחה!`);
      
      // Add click handlers to new elements
      setTimeout(() => {
        const newElements = document.querySelectorAll('.new-component');
        newElements.forEach(element => {
          element.classList.remove('new-component');
          const editableElements = element.querySelectorAll('.editable-text, .editable-button');
          editableElements.forEach(editable => {
            editable.addEventListener('click', (e) => {
              e.stopPropagation();
              selectElement(editable);
            });
          });
        });
      }, 100);
    }
  };

  const updateElementText = () => {
    if (selectedElement && elementText.trim()) {
      selectedElement.textContent = elementText;
      showToastMessage('טקסט עודכן!');
    }
  };

  const updateElementColor = () => {
    if (selectedElement) {
      selectedElement.style.color = elementColor;
      showToastMessage('צבע עודכן!');
    }
  };

  const updateElementSize = () => {
    if (selectedElement) {
      selectedElement.style.fontSize = elementSize + 'px';
      showToastMessage('גודל עודכן!');
    }
  };

  const deleteElement = () => {
    if (selectedElement) {
      selectedElement.remove();
      setSelectedElement(null);
      setIsElementSelected(false);
      showToastMessage('אלמנט נמחק!');
    }
  };

  const duplicateElement = () => {
    if (selectedElement) {
      const clone = selectedElement.cloneNode(true);
      selectedElement.parentNode.insertBefore(clone, selectedElement.nextSibling);
      
      // Add click handler to cloned element
      setTimeout(() => {
        clone.addEventListener('click', (e) => {
          e.stopPropagation();
          selectElement(clone);
        });
      }, 100);
      
      showToastMessage('אלמנט שוכפל!');
    }
  };

  const tools = [
    { id: 'text', icon: '📝', name: 'טקסט', color: '#667eea', desc: 'כותרות ופסקאות' },
    { id: 'button', icon: '🔘', name: 'כפתור', color: '#f093fb', desc: 'כפתורי פעולה' },
    { id: 'image', icon: '🖼️', name: 'תמונה', color: '#06d6a0', desc: 'תמונות וגרפיקה' },
    { id: 'form', icon: '📋', name: 'טופס', color: '#f59e0b', desc: 'טפסי יצירת קשר' },
    { id: 'gallery', icon: '🎨', name: 'גלריה', color: '#8b5cf6', desc: 'גלריית תמונות' },
    { id: 'map', icon: '🗺️', name: 'מפה', color: '#06b6d4', desc: 'מפות מיקום' }
  ];

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
      height: '100vh', 
      background: isDarkMode ? 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)' : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      overflow: 'hidden'
    }}>
      
      <style jsx global>{`
        .selected-element {
          outline: 3px solid #667eea !important;
          outline-offset: 2px;
          position: relative;
        }
        
        .selected-element::after {
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
          z-index: 1000;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.12) !important;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .editable-text:hover, .editable-button:hover {
          background: rgba(103, 126, 234, 0.1) !important;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed',
          top: '100px',
          right: '32px',
          background: isDarkMode ? 'rgba(26, 32, 44, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(40px)',
          padding: '16px 24px',
          borderRadius: '16px',
          border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
          color: isDarkMode ? '#e2e8f0' : '#1a202c',
          zIndex: 10000,
          animation: 'slideIn 0.3s ease-out',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          ✅ {toastMessage}
        </div>
      )}

      {/* Header */}
      <header style={{ 
        background: isDarkMode ? 'rgba(26, 32, 44, 0.8)' : 'rgba(255, 255, 255, 0.8)', 
        backdropFilter: 'blur(40px)', 
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
        padding: '16px 32px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ 
            fontSize: '1.6rem', 
            fontWeight: '600',
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
            padding: '8px 20px', 
            background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.6)', 
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)'}`
          }}>
            <span>✂️</span>
            <span style={{ color: isDarkMode ? '#e2e8f0' : '#1a202c' }}>מספרה מודרנית</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            style={{ 
              padding: '10px 20px', 
              background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.6)', 
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)'}`, 
              borderRadius: '12px', 
              color: isDarkMode ? '#e2e8f0' : '#1a202c', 
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button 
            style={{ 
              padding: '12px 24px', 
              background: 'linear-gradient(135deg, #667eea, #764ba2)', 
              border: 'none', 
              borderRadius: '12px', 
              color: 'white', 
              fontWeight: '600', 
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
            onClick={() => showToastMessage('האתר מתפרסם!')}
          >
            🚀 Publish
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', height: 'calc(100vh - 84px)' }}>
        
        {/* Tools Sidebar */}
        <div style={{ 
          width: '320px', 
          background: isDarkMode ? 'rgba(26, 32, 44, 0.6)' : 'rgba(255, 255, 255, 0.6)', 
          backdropFilter: 'blur(40px)',
          borderRight: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
          padding: '32px 24px',
          overflowY: 'auto'
        }}>
          <h3 style={{ 
            marginBottom: '24px', 
            color: isDarkMode ? '#e2e8f0' : '#1a202c', 
            fontSize: '1.3rem',
            fontWeight: '600'
          }}>כלי עיצוב</h3>
          
          <div style={{ display: 'grid', gap: '16px' }}>
            {tools.map((tool) => (
              <div 
                key={tool.id}
                style={{ 
                  padding: '20px', 
                  background: selectedTool === tool.id 
                    ? `linear-gradient(135deg, ${tool.color}15, ${tool.color}25)`
                    : isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.4)', 
                  borderRadius: '16px', 
                  cursor: 'pointer',
                  border: selectedTool === tool.id 
                    ? `2px solid ${tool.color}40`
                    : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.6)'}`,
                  transition: 'all 0.3s ease'
                }}
                onClick={() => {
                  setSelectedTool(tool.id);
                  if (['text', 'button', 'image', 'form'].includes(tool.id)) {
                    addComponent(tool.id);
                  } else {
                    showToastMessage(`${tool.name} בקרוב!`);
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: `linear-gradient(135deg, ${tool.color}, ${tool.color}cc)`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem'
                  }}>
                    {tool.icon}
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      marginBottom: '2px'
                    }}>
                      {tool.name}
                    </div>
                    <div style={{ 
                      fontSize: '0.8rem', 
                      color: isDarkMode ? '#94a3b8' : '#64748b'
                    }}>
                      {tool.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Canvas */}
        <div style={{ 
          flex: 1, 
          background: isDarkMode ? 'linear-gradient(135deg, #0f172a, #1e293b)' : 'linear-gradient(135deg, #e2e8f0, #cbd5e1)', 
          display: 'flex', 
          flexDirection: 'column'
        }}>
          
          {/* Canvas Toolbar */}
          <div style={{ 
            background: isDarkMode ? 'rgba(26, 32, 44, 0.6)' : 'rgba(255, 255, 255, 0.6)', 
            backdropFilter: 'blur(40px)',
            padding: '20px 32px', 
            borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.4)', borderRadius: '16px', padding: '4px' }}>
              {['desktop', 'tablet', 'mobile'].map((device) => (
                <button 
                  key={device}
                  style={{ 
                    padding: '12px 20px', 
                    border: 'none', 
                    background: currentDevice === device 
                      ? isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)'
                      : 'transparent', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    color: currentDevice === device 
                      ? isDarkMode ? '#e2e8f0' : '#1a202c'
                      : isDarkMode ? '#94a3b8' : '#64748b',
                    fontWeight: currentDevice === device ? '600' : '500',
                    fontSize: '0.9rem'
                  }}
                  onClick={() => switchDevice(device)}
                >
                  {device === 'desktop' && '🖥️ Desktop'}
                  {device === 'tablet' && '📱 Tablet'}
                  {device === 'mobile' && '📱 Mobile'}
                </button>
              ))}
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button onClick={zoomOut} style={{ width: '36px', height: '36px', border: 'none', background: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.6)', borderRadius: '8px', cursor: 'pointer', color: isDarkMode ? '#e2e8f0' : '#1a202c' }}>−</button>
              <span style={{ fontWeight: '600', color: isDarkMode ? '#e2e8f0' : '#1a202c' }}>{currentZoom}%</span>
              <button onClick={zoomIn} style={{ width: '36px', height: '36px', border: 'none', background: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.6)', borderRadius: '8px', cursor: 'pointer', color: isDarkMode ? '#e2e8f0' : '#1a202c' }}>+</button>
            </div>
          </div>
          
          {/* Preview */}
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'flex-start', 
            padding: '48px', 
            overflow: 'auto'
          }}>
            <div 
              ref={previewRef}
              style={{ 
                background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.8)', 
                backdropFilter: 'blur(40px)',
                borderRadius: '20px', 
                boxShadow: isDarkMode ? '0 32px 80px rgba(0,0,0,0.4)' : '0 32px 80px rgba(0,0,0,0.12)', 
                overflow: 'hidden',
                transform: `scale(${currentZoom / 100})`,
                width: currentDevice === 'desktop' ? '1200px' : currentDevice === 'tablet' ? '768px' : '375px',
                height: currentDevice === 'desktop' ? '800px' : currentDevice === 'tablet' ? '1024px' : '667px',
                border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)'}`,
                position: 'relative'
              }}
            >
              <div 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  overflow: 'auto'
                }}
                dangerouslySetInnerHTML={{ 
                  __html: previewContent || '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #718096;">טוען תבנית...</div>'
                }}
              />
            </div>
          </div>
        </div>

        {/* Properties Panel */}
        <div style={{ 
          width: '320px', 
          background: isDarkMode ? 'rgba(26, 32, 44, 0.6)' : 'rgba(255, 255, 255, 0.6)', 
          backdropFilter: 'blur(40px)',
          borderLeft: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
          padding: '32px 24px',
          overflowY: 'auto'
        }}>
          <h3 style={{ 
            marginBottom: '24px', 
            color: isDarkMode ? '#e2e8f0' : '#1a202c', 
            fontSize: '1.3rem',
            fontWeight: '600'
          }}>מאפיינים</h3>
          
          {isElementSelected ? (
            <div style={{ display: 'grid', gap: '24px' }}>
              
              {/* Text Editor */}
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontWeight: '500'
                }}>
                  ✏️ טקסט
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input 
                    type="text" 
                    value={elementText}
                    onChange={(e) => setElementText(e.target.value)}
                    style={{ 
                      flex: 1,
                      padding: '12px', 
                      border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`, 
                      borderRadius: '12px',
                      background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontSize: '0.9rem'
                    }}
                    placeholder="הכנס טקסט..."
                  />
                  <button 
                    onClick={updateElementText}
                    style={{ 
                      padding: '12px 16px', 
                      background: 'linear-gradient(135deg, #667eea, #764ba2)', 
                      border: 'none', 
                      borderRadius: '12px', 
                      color: 'white', 
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    ✓
                  </button>
                </div>
              </div>

              {/* Color Picker */}
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontWeight: '500'
                }}>
                  🎨 צבע טקסט
                </label>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input 
                    type="color" 
                    value={elementColor}
                    onChange={(e) => setElementColor(e.target.value)}
                    style={{ 
                      width: '48px',
                      height: '48px',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer'
                    }}
                  />
                  <button 
                    onClick={updateElementColor}
                    style={{ 
                      flex: 1,
                      padding: '12px', 
                      background: 'linear-gradient(135deg, #667eea, #764ba2)', 
                      border: 'none', 
                      borderRadius: '12px', 
                      color: 'white', 
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    החל צבע
                  </button>
                </div>
              </div>

              {/* Font Size */}
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontWeight: '500'
                }}>
                  📏 גודל גופן
                </label>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input 
                    type="range" 
                    min="12"
                    max="72"
                    value={elementSize}
                    onChange={(e) => setElementSize(e.target.value)}
                    style={{ 
                      flex: 1,
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ 
                    minWidth: '40px',
                    color: isDarkMode ? '#e2e8f0' : '#1a202c',
                    fontWeight: '600'
                  }}>
                    {elementSize}px
                  </span>
                  <button 
                    onClick={updateElementSize}
                    style={{ 
                      padding: '8px 12px', 
                      background: 'linear-gradient(135deg, #667eea, #764ba2)', 
                      border: 'none', 
                      borderRadius: '8px', 
                      color: 'white', 
                      cursor: 'pointer',
                      fontSize: '0.8rem'
                    }}
                  >
                    ✓
                  </button>
                </div>
              </div>

              {/* Quick Colors */}
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '12px', 
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontWeight: '500'
                }}>
                  🌈 צבעים מהירים
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {['#1a202c', '#667eea', '#f093fb', '#06d6a0', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'].map(color => (
                    <button 
                      key={color}
                      onClick={() => {
                        setElementColor(color);
                        if (selectedElement) {
                          selectedElement.style.color = color;
                          showToastMessage('צבע עודכן!');
                        }
                      }}
                      style={{ 
                        width: '40px',
                        height: '40px',
                        background: color,
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'grid', gap: '12px' }}>
                <button 
                  onClick={duplicateElement}
                  style={{ 
                    padding: '14px', 
                    background: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.8)', 
                    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, 
                    borderRadius: '12px', 
                    color: isDarkMode ? '#e2e8f0' : '#1a202c', 
                    cursor: 'pointer',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  📋 שכפל אלמנט
                </button>
                <button 
                  onClick={deleteElement}
                  style={{ 
                    padding: '14px', 
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)', 
                    border: 'none', 
                    borderRadius: '12px', 
                    color: 'white', 
                    cursor: 'pointer',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  🗑️ מחק אלמנט
                </button>
              </div>
            </div>
          ) : (
            <div style={{ 
              textAlign: 'center', 
              color: isDarkMode ? '#94a3b8' : '#64748b',
              padding: '40px 20px'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>👆</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '8px' }}>
                בחר אלמנט לעריכה
              </div>
              <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                לחץ על כל אלמנט באתר כדי לערוך אותו
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
