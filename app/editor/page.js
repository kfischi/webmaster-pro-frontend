'use client';
import { useState, useEffect } from 'react';

export default function EditorPage() {
  const [currentDevice, setCurrentDevice] = useState('desktop');
  const [currentZoom, setCurrentZoom] = useState(100);
  const [selectedElement, setSelectedElement] = useState(null);
  const [currentTemplate, setCurrentTemplate] = useState('barber');

  // Template configurations
  const templates = {
    barber: {
      name: 'מספרה מודרנית',
      icon: '✂️',
      content: `
        <div style="background: linear-gradient(135deg, #d69e2e, #ecc94b); color: white; padding: 80px 40px; text-align: center;">
          <h1 style="font-size: 3rem; margin-bottom: 20px; font-weight: 300;">סלון עופר - מספרה מודרנית</h1>
          <p style="font-size: 1.3rem; margin-bottom: 30px;">החוויה הכי מקצועית בעיר</p>
          <button style="background: white; color: #d69e2e; padding: 15px 30px; border: none; border-radius: 25px; font-weight: 600; cursor: pointer;">📞 הזמן תור עכשיו</button>
        </div>
        
        <div style="padding: 60px 40px; text-align: center;">
          <h2 style="font-size: 2.5rem; margin-bottom: 40px; color: #2d3748;">השירותים שלנו</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
            <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
              <div style="font-size: 2rem; margin-bottom: 15px;">✂️</div>
              <h3 style="margin-bottom: 10px;">תספורת גברים</h3>
              <p style="color: #718096;">תספורת מקצועית עם היעוץ הטוב ביותר</p>
              <div style="font-weight: 600; color: #d69e2e; margin-top: 15px;">₪80</div>
            </div>
            <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
              <div style="font-size: 2rem; margin-bottom: 15px;">🧔</div>
              <h3 style="margin-bottom: 10px;">עיצוב זקן</h3>
              <p style="color: #718096;">עיצוב מקצועי לזקן מושלם</p>
              <div style="font-weight: 600; color: #d69e2e; margin-top: 15px;">₪60</div>
            </div>
            <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
              <div style="font-size: 2rem; margin-bottom: 15px;">💆‍♂️</div>
              <h3 style="margin-bottom: 10px;">טיפוח מלא</h3>
              <p style="color: #718096;">חבילת טיפוח מקיפה</p>
              <div style="font-weight: 600; color: #d69e2e; margin-top: 15px;">₪120</div>
            </div>
          </div>
        </div>
      `
    }
  };

  useEffect(() => {
    // Load template content after component mounts
    const timer = setTimeout(() => {
      const previewContent = document.getElementById('previewContent');
      if (previewContent) {
        previewContent.innerHTML = templates[currentTemplate].content;
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentTemplate]);

  const switchDevice = (device) => {
    setCurrentDevice(device);
  };

  const zoomIn = () => {
    if (currentZoom < 200) {
      setCurrentZoom(prev => prev + 10);
    }
  };

  const zoomOut = () => {
    if (currentZoom > 50) {
      setCurrentZoom(prev => prev - 10);
    }
  };

  const showSuccess = (message) => {
    alert(message);
  };

  return (
    <div style={{ fontFamily: 'Heebo, sans-serif', background: '#f8fafc', overflow: 'hidden' }}>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .editor-container {
          height: 100vh;
          display: grid;
          grid-template-areas: 
            "header header header"
            "sidebar canvas properties";
          grid-template-columns: 280px 1fr 320px;
          grid-template-rows: 60px 1fr;
        }

        .editor-header {
          grid-area: header;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          z-index: 1000;
        }

        .logo {
          font-size: 1.4rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .template-info {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 15px;
          background: #f7fafc;
          border-radius: 20px;
        }

        .header-actions {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .action-btn {
          padding: 10px 20px;
          border: none;
          border-radius: 20px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-secondary {
          background: #f7fafc;
          color: #4a5568;
          border: 1px solid #e2e8f0;
        }

        .sidebar {
          grid-area: sidebar;
          background: white;
          border-left: 1px solid #e2e8f0;
          overflow-y: auto;
          box-shadow: 2px 0 10px rgba(0,0,0,0.05);
        }

        .canvas-container {
          grid-area: canvas;
          background: #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .canvas-toolbar {
          background: white;
          padding: 15px 20px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .device-switcher {
          display: flex;
          background: #f7fafc;
          border-radius: 15px;
          padding: 3px;
        }

        .device-btn {
          padding: 8px 15px;
          border: none;
          background: transparent;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          color: #4a5568;
        }

        .device-btn.active {
          background: white;
          color: #667eea;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .zoom-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .zoom-btn {
          width: 32px;
          height: 32px;
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .canvas-frame {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 40px 20px;
          overflow: auto;
        }

        .website-preview {
          background: white;
          border-radius: 10px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          width: 1200px;
          height: 800px;
        }

        .preview-content {
          width: 100%;
          height: 100%;
          padding: 40px;
          overflow-y: auto;
        }

        .properties-panel {
          grid-area: properties;
          background: white;
          border-right: 1px solid #e2e8f0;
          overflow-y: auto;
          box-shadow: -2px 0 10px rgba(0,0,0,0.05);
          padding: 20px;
        }

        .sidebar-section {
          padding: 20px;
          border-bottom: 1px solid #f1f5f9;
        }

        .section-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .component-list {
          display: grid;
          gap: 10px;
        }

        .component-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .component-item:hover {
          background: #edf2f7;
          border-color: #667eea;
          transform: translateX(-2px);
        }

        @media (max-width: 768px) {
          .editor-container {
            grid-template-areas: 
              "header"
              "canvas";
            grid-template-columns: 1fr;
            grid-template-rows: 60px 1fr;
          }
          
          .sidebar,
          .properties-panel {
            display: none;
          }
        }
      `}</style>

      <div className="editor-container">
        {/* Header */}
        <header className="editor-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div className="logo">🚀 WebMaster Pro</div>
            <div className="template-info">
              <span style={{ fontSize: '1.2rem' }}>{templates[currentTemplate].icon}</span>
              <span style={{ fontWeight: 600, color: '#2d3748' }}>{templates[currentTemplate].name}</span>
            </div>
          </div>
          
          <div className="header-actions">
            <button className="action-btn btn-secondary" onClick={() => showSuccess('תצוגה מקדימה נפתחת...')}>
              👁️ תצוגה מקדימה
            </button>
            <button className="action-btn btn-secondary" onClick={() => showSuccess('האתר נשמר!')}>
              💾 שמירה
            </button>
            <button className="action-btn btn-primary" onClick={() => showSuccess('האתר מתפרסם!')}>
              🚀 פרסום
            </button>
          </div>
        </header>

        {/* Sidebar */}
        <aside className="sidebar">
          <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0', background: '#f7fafc' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#2d3748', marginBottom: '5px' }}>רכיבים</div>
            <div style={{ fontSize: '0.9rem', color: '#718096' }}>גרור רכיבים לתוך האתר</div>
          </div>
          
          <div className="sidebar-section">
            <div className="section-title">רכיבים בסיסיים</div>
            <div className="component-list">
              <div className="component-item">
                <span style={{ fontSize: '1.2rem' }}>📝</span>
                <span>טקסט</span>
              </div>
              <div className="component-item">
                <span style={{ fontSize: '1.2rem' }}>🖼️</span>
                <span>תמונה</span>
              </div>
              <div className="component-item">
                <span style={{ fontSize: '1.2rem' }}>🔘</span>
                <span>כפתור</span>
              </div>
              <div className="component-item">
                <span style={{ fontSize: '1.2rem' }}>🎥</span>
                <span>וידאו</span>
              </div>
            </div>
          </div>
          
          <div className="sidebar-section">
            <div className="section-title">אלמנטים מתקדמים</div>
            <div className="component-list">
              <div className="component-item">
                <span style={{ fontSize: '1.2rem' }}>📋</span>
                <span>טופס יצירת קשר</span>
              </div>
              <div className="component-item">
                <span style={{ fontSize: '1.2rem' }}>🖼️</span>
                <span>גלריה</span>
              </div>
              <div className="component-item">
                <span style={{ fontSize: '1.2rem' }}>🗺️</span>
                <span>מפה</span>
              </div>
              <div className="component-item">
                <span style={{ fontSize: '1.2rem' }}>💰</span>
                <span>מחירון</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Canvas */}
        <main className="canvas-container">
          <div className="canvas-toolbar">
            <div className="device-switcher">
              <button 
                className={`device-btn ${currentDevice === 'desktop' ? 'active' : ''}`}
                onClick={() => switchDevice('desktop')}
              >
                🖥️ דסקטופ
              </button>
              <button 
                className={`device-btn ${currentDevice === 'tablet' ? 'active' : ''}`}
                onClick={() => switchDevice('tablet')}
              >
                📱 טאבלט
              </button>
              <button 
                className={`device-btn ${currentDevice === 'mobile' ? 'active' : ''}`}
                onClick={() => switchDevice('mobile')}
              >
                📱 נייד
              </button>
            </div>
            
            <div className="zoom-controls">
              <button className="zoom-btn" onClick={zoomOut}>−</button>
              <span style={{ fontSize: '0.9rem', color: '#4a5568', minWidth: '50px', textAlign: 'center' }}>
                {currentZoom}%
              </span>
              <button className="zoom-btn" onClick={zoomIn}>+</button>
            </div>
          </div>
          
          <div className="canvas-frame">
            <div 
              className="website-preview" 
              style={{ 
                transform: `scale(${currentZoom / 100})`,
                width: currentDevice === 'desktop' ? '1200px' : currentDevice === 'tablet' ? '768px' : '375px',
                height: currentDevice === 'desktop' ? '800px' : currentDevice === 'tablet' ? '1024px' : '667px'
              }}
            >
              <div 
                className="preview-content" 
                id="previewContent"
                dangerouslySetInnerHTML={{ __html: 'טוען תבנית...' }}
              />
            </div>
          </div>
        </main>

        {/* Properties Panel */}
        <aside className="properties-panel">
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#2d3748', marginBottom: '5px' }}>מאפיינים</div>
            <div style={{ fontSize: '0.9rem', color: '#718096' }}>ערוך את הרכיב הנבחר</div>
          </div>
          
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#718096' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🎨</div>
            <div>בחר רכיב לעריכה</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
