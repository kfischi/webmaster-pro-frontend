'use client';
import { useState, useEffect } from 'react';

export default function WorkingEditor() {
  const [currentDevice, setCurrentDevice] = useState('desktop');
  const [currentZoom, setCurrentZoom] = useState(100);
  const [previewContent, setPreviewContent] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const templateContent = `
    <div style="background: linear-gradient(135deg, #d69e2e, #ecc94b); color: white; padding: 80px 40px; text-align: center;">
      <h1 style="font-size: 3.5rem; margin-bottom: 20px; font-weight: 300; text-shadow: 0 4px 20px rgba(0,0,0,0.3);">
        ✂️ סלון עופר - מספרה מודרנית
      </h1>
      <p style="font-size: 1.4rem; margin-bottom: 30px; opacity: 0.95;">
        החוויה הכי מקצועית בעיר • תספורות טרנדיות • שירות VIP
      </p>
      <button style="background: white; color: #d69e2e; padding: 18px 35px; border: none; border-radius: 30px; font-weight: 700; cursor: pointer; font-size: 1.1rem; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
        📞 הזמן תור עכשיו - 054-123-4567
      </button>
    </div>
    
    <div style="padding: 80px 40px; background: linear-gradient(135deg, #f8fafc, #edf2f7);">
      <h2 style="font-size: 3rem; margin-bottom: 50px; color: #2d3748; text-align: center; font-weight: 300;">
        השירותים הבלעדיים שלנו
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto;">
        <div style="background: white; padding: 40px 30px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.08); text-align: center; border: 1px solid rgba(214, 158, 46, 0.1);">
          <div style="font-size: 3rem; margin-bottom: 20px;">✂️</div>
          <h3 style="margin-bottom: 15px; font-size: 1.4rem; color: #2d3748; font-weight: 600;">תספורת גברים מקצועית</h3>
          <p style="color: #718096; line-height: 1.6; margin-bottom: 20px;">תספורת מקצועית עם ייעוץ אישי וסטיילינג</p>
          <div style="background: linear-gradient(135deg, #d69e2e, #ecc94b); color: white; padding: 8px 20px; border-radius: 15px; font-weight: 700; font-size: 1.1rem; display: inline-block;">החל מ-₪80</div>
        </div>
        
        <div style="background: white; padding: 40px 30px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.08); text-align: center; border: 1px solid rgba(214, 158, 46, 0.1);">
          <div style="font-size: 3rem; margin-bottom: 20px;">🧔</div>
          <h3 style="margin-bottom: 15px; font-size: 1.4rem; color: #2d3748; font-weight: 600;">עיצוב וטיפוח זקן</h3>
          <p style="color: #718096; line-height: 1.6; margin-bottom: 20px;">עיצוב מדויק של הזקן וגילוח מקצועי</p>
          <div style="background: linear-gradient(135deg, #d69e2e, #ecc94b); color: white; padding: 8px 20px; border-radius: 15px; font-weight: 700; font-size: 1.1rem; display: inline-block;">החל מ-₪60</div>
        </div>
        
        <div style="background: white; padding: 40px 30px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.08); text-align: center; border: 1px solid rgba(214, 158, 46, 0.1);">
          <div style="font-size: 3rem; margin-bottom: 20px;">💆‍♂️</div>
          <h3 style="margin-bottom: 15px; font-size: 1.4rem; color: #2d3748; font-weight: 600;">חבילת טיפוח VIP</h3>
          <p style="color: #718096; line-height: 1.6; margin-bottom: 20px;">חוויה מלאה עם תספורת, זקן וטיפוח פנים</p>
          <div style="background: linear-gradient(135deg, #d69e2e, #ecc94b); color: white; padding: 8px 20px; border-radius: 15px; font-weight: 700; font-size: 1.1rem; display: inline-block;">₪150 במקום ₪200</div>
        </div>
      </div>
    </div>

    <div style="background: linear-gradient(135deg, #2d3748, #4a5568); color: white; padding: 80px 40px;">
      <div style="max-width: 1000px; margin: 0 auto; text-align: center;">
        <h2 style="font-size: 2.5rem; margin-bottom: 30px; font-weight: 300;">בואו להכיר אותנו</h2>
        <p style="font-size: 1.2rem; margin-bottom: 40px; opacity: 0.9; line-height: 1.7;">מספרה מודרנית בלב העיר עם 15 שנות ניסיון ולקוחות מרוצים</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; margin-top: 50px;">
          <div style="text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 10px;">📍</div>
            <h4 style="margin-bottom: 8px; font-weight: 600;">המיקום שלנו</h4>
            <p style="opacity: 0.8;">רחוב הרצל 25, תל אביב</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 10px;">🕐</div>
            <h4 style="margin-bottom: 8px; font-weight: 600;">שעות פתיחה</h4>
            <p style="opacity: 0.8;">א'-ו' 9:00-20:00</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 10px;">📞</div>
            <h4 style="margin-bottom: 8px; font-weight: 600;">צרו קשר</h4>
            <p style="opacity: 0.8;">054-123-4567</p>
          </div>
        </div>
      </div>
    </div>
  `;

  useEffect(() => {
    setTimeout(() => {
      setPreviewContent(templateContent);
    }, 1000);
  }, []);

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
      text: '<div style="padding: 20px; margin: 10px; background: #f7fafc; border-radius: 15px; border: 2px dashed #e2e8f0;"><h3>כותרת חדשה</h3><p>טקסט לדוגמה</p></div>',
      button: '<div style="margin: 20px; text-align: center;"><button style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 15px 30px; border: none; border-radius: 25px; font-weight: 600;">כפתור חדש</button></div>',
      image: '<div style="margin: 20px; text-align: center;"><div style="width: 300px; height: 200px; background: linear-gradient(45deg, #f0f0f0, #e0e0e0); border-radius: 15px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px dashed #d1d5db;">🖼️ תמונה חדשה</div></div>'
    };
    
    if (components[type]) {
      setPreviewContent(prev => prev + components[type]);
      showToastMessage(`${type === 'text' ? 'טקסט' : type === 'button' ? 'כפתור' : 'תמונה'} נוסף בהצלחה!`);
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ 
        background: 'linear-gradient(135deg, #667eea, #764ba2)', 
        color: 'white', 
        padding: '15px 30px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>🚀 WebMaster Pro</div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            padding: '8px 16px', 
            background: 'rgba(255,255,255,0.15)', 
            borderRadius: '20px' 
          }}>
            <span>✂️</span>
            <span>מספרה מודרנית</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            style={{ 
              padding: '10px 20px', 
              background: 'rgba(255,255,255,0.1)', 
              border: '1px solid rgba(255,255,255,0.2)', 
              borderRadius: '20px', 
              color: 'white', 
              cursor: 'pointer' 
            }}
            onClick={() => showToastMessage('תצוגה מקדימה נפתחת...')}
          >
            👁️ תצוגה מקדימה
          </button>
          <button 
            style={{ 
              padding: '10px 20px', 
              background: 'rgba(255,255,255,0.1)', 
              border: '1px solid rgba(255,255,255,0.2)', 
              borderRadius: '20px', 
              color: 'white', 
              cursor: 'pointer' 
            }}
            onClick={() => showToastMessage('האתר נשמר!')}
          >
            💾 שמירה
          </button>
          <button 
            style={{ 
              padding: '10px 20px', 
              background: 'white', 
              border: 'none', 
              borderRadius: '20px', 
              color: '#667eea', 
              fontWeight: '600', 
              cursor: 'pointer' 
            }}
            onClick={() => showToastMessage('האתר מתפרסם!')}
          >
            🚀 פרסום
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ 
          width: '280px', 
          background: 'white', 
          borderLeft: '1px solid #e2e8f0', 
          padding: '20px',
          boxShadow: '2px 0 10px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ marginBottom: '20px', color: '#2d3748' }}>רכיבים</h3>
          
          <div style={{ display: 'grid', gap: '10px' }}>
            <div 
              style={{ 
                padding: '15px', 
                background: '#f7fafc', 
                borderRadius: '10px', 
                cursor: 'pointer', 
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease'
              }}
              onClick={() => addComponent('text')}
              onMouseOver={(e) => e.target.style.background = '#667eea'}
              onMouseOut={(e) => e.target.style.background = '#f7fafc'}
            >
              📝 טקסט
            </div>
            <div 
              style={{ 
                padding: '15px', 
                background: '#f7fafc', 
                borderRadius: '10px', 
                cursor: 'pointer', 
                border: '1px solid #e2e8f0' 
              }}
              onClick={() => addComponent('button')}
              onMouseOver={(e) => e.target.style.background = '#667eea'}
              onMouseOut={(e) => e.target.style.background = '#f7fafc'}
            >
              🔘 כפתור
            </div>
            <div 
              style={{ 
                padding: '15px', 
                background: '#f7fafc', 
                borderRadius: '10px', 
                cursor: 'pointer', 
                border: '1px solid #e2e8f0' 
              }}
              onClick={() => addComponent('image')}
              onMouseOver={(e) => e.target.style.background = '#667eea'}
              onMouseOut={(e) => e.target.style.background = '#f7fafc'}
            >
              🖼️ תמונה
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div style={{ flex: 1, background: '#e2e8f0', display: 'flex', flexDirection: 'column' }}>
          {/* Toolbar */}
          <div style={{ 
            background: 'white', 
            padding: '15px 20px', 
            borderBottom: '1px solid #e2e8f0', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <div style={{ display: 'flex', background: '#f7fafc', borderRadius: '15px', padding: '3px' }}>
              <button 
                style={{ 
                  padding: '8px 15px', 
                  border: 'none', 
                  background: currentDevice === 'desktop' ? 'white' : 'transparent', 
                  borderRadius: '12px', 
                  cursor: 'pointer',
                  color: currentDevice === 'desktop' ? '#667eea' : '#4a5568'
                }}
                onClick={() => switchDevice('desktop')}
              >
                🖥️ דסקטופ
              </button>
              <button 
                style={{ 
                  padding: '8px 15px', 
                  border: 'none', 
                  background: currentDevice === 'tablet' ? 'white' : 'transparent', 
                  borderRadius: '12px', 
                  cursor: 'pointer',
                  color: currentDevice === 'tablet' ? '#667eea' : '#4a5568'
                }}
                onClick={() => switchDevice('tablet')}
              >
                📱 טאבלט
              </button>
              <button 
                style={{ 
                  padding: '8px 15px', 
                  border: 'none', 
                  background: currentDevice === 'mobile' ? 'white' : 'transparent', 
                  borderRadius: '12px', 
                  cursor: 'pointer',
                  color: currentDevice === 'mobile' ? '#667eea' : '#4a5568'
                }}
                onClick={() => switchDevice('mobile')}
              >
                📱 נייד
              </button>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  border: '1px solid #e2e8f0', 
                  background: 'white', 
                  borderRadius: '50%', 
                  cursor: 'pointer' 
                }}
                onClick={zoomOut}
              >
                −
              </button>
              <span style={{ minWidth: '50px', textAlign: 'center', fontWeight: '600' }}>{currentZoom}%</span>
              <button 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  border: '1px solid #e2e8f0', 
                  background: 'white', 
                  borderRadius: '50%', 
                  cursor: 'pointer' 
                }}
                onClick={zoomIn}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Preview */}
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'flex-start', 
            padding: '40px', 
            overflow: 'auto' 
          }}>
            <div 
              style={{ 
                background: 'white', 
                borderRadius: '10px', 
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)', 
                overflow: 'hidden',
                transform: `scale(${currentZoom / 100})`,
                width: currentDevice === 'desktop' ? '1200px' : currentDevice === 'tablet' ? '768px' : '375px',
                height: currentDevice === 'desktop' ? '800px' : currentDevice === 'tablet' ? '1024px' : '667px'
              }}
            >
              <div 
                style={{ width: '100%', height: '100%', overflow: 'auto' }}
                dangerouslySetInnerHTML={{ 
                  __html: previewContent || '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #718096; font-size: 1.2rem;">טוען תבנית...</div>' 
                }}
              />
            </div>
          </div>
        </div>

        {/* Properties Panel */}
        <div style={{ 
          width: '320px', 
          background: 'white', 
          borderRight: '1px solid #e2e8f0',
          padding: '20px',
          boxShadow: '-2px 0 10px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ marginBottom: '20px', color: '#2d3748' }}>מאפיינים</h3>
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#718096' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🎨</div>
            <div>בחר רכיב לעריכה</div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div style={{
          position: 'fixed',
          top: '90px',
          right: '30px',
          background: 'linear-gradient(135deg, #10b981, #34d399)',
          color: 'white',
          padding: '15px 25px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
          zIndex: 9999,
          fontWeight: '600'
        }}>
          {toastMessage}
        </div>
      )}
    </div>
  );
}
