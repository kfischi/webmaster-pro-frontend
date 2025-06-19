'use client';
import { useState, useEffect } from 'react';

export default function AppleLevelEditor() {
  const [currentDevice, setCurrentDevice] = useState('desktop');
  const [currentZoom, setCurrentZoom] = useState(100);
  const [previewContent, setPreviewContent] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [selectedTool, setSelectedTool] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const templateContent = `
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); color: white; padding: 120px 60px; text-align: center; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2220%22 cy=%2220%22 r=%222%22 fill=%22rgba(255,255,255,0.1)%22/><circle cx=%2280%22 cy=%2280%22 r=%223%22 fill=%22rgba(255,255,255,0.1)%22/></svg>'); animation: float 8s ease-in-out infinite;"></div>
      <div style="backdrop-filter: blur(20px); background: rgba(255,255,255,0.1); border-radius: 30px; padding: 60px; border: 1px solid rgba(255,255,255,0.2); position: relative; z-index: 2;">
        <h1 style="font-size: 4rem; margin-bottom: 24px; font-weight: 200; text-shadow: 0 8px 32px rgba(0,0,0,0.3); letter-spacing: -2px; line-height: 1.1;">
          ✂️ סלון עופר
        </h1>
        <div style="height: 2px; width: 80px; background: linear-gradient(90deg, rgba(255,255,255,0.8), transparent); margin: 32px auto;"></div>
        <p style="font-size: 1.5rem; margin-bottom: 40px; opacity: 0.95; font-weight: 300; line-height: 1.6;">
          החוויה הכי מקצועית בעיר<br/>
          <span style="font-size: 1.2rem; opacity: 0.8;">תספורות טרנדיות • שירות VIP • מקצועיות ללא פשרות</span>
        </p>
        <button style="background: rgba(255,255,255,0.2); backdrop-filter: blur(20px); color: white; padding: 20px 40px; border: 1px solid rgba(255,255,255,0.3); border-radius: 50px; font-weight: 500; cursor: pointer; font-size: 1.1rem; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
          📞 הזמן תור עכשיו
        </button>
      </div>
    </div>
    
    <div style="padding: 120px 60px; background: linear-gradient(180deg, #fafbfc 0%, #f8fafc 100%); position: relative;">
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 30% 70%, rgba(103, 126, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(240, 147, 251, 0.05) 0%, transparent 50%);"></div>
      <div style="position: relative; z-index: 2; max-width: 1400px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <h2 style="font-size: 3.5rem; margin-bottom: 24px; color: #1a202c; font-weight: 200; letter-spacing: -1px;">השירותים שלנו</h2>
          <div style="height: 2px; width: 100px; background: linear-gradient(90deg, #667eea, #764ba2); margin: 0 auto;"></div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 40px;">
          <div style="background: rgba(255,255,255,0.7); backdrop-filter: blur(40px); padding: 48px 40px; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.8); border: 1px solid rgba(255,255,255,0.8); text-align: center; transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #667eea, #764ba2);"></div>
            <div style="font-size: 3.5rem; margin-bottom: 24px; filter: drop-shadow(0 8px 16px rgba(103, 126, 234, 0.2));">✂️</div>
            <h3 style="margin-bottom: 16px; font-size: 1.5rem; color: #1a202c; font-weight: 600; letter-spacing: -0.5px;">תספורת מקצועית</h3>
            <p style="color: #64748b; line-height: 1.7; margin-bottom: 32px; font-size: 1rem;">תספורת מותאמת אישית עם ייעוץ מקצועי וסטיילינג מתקדם לתוצאה מושלמת</p>
            <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 12px 24px; border-radius: 20px; font-weight: 600; font-size: 1.1rem; display: inline-block; box-shadow: 0 8px 24px rgba(103, 126, 234, 0.3);">החל מ-₪80</div>
          </div>
          
          <div style="background: rgba(255,255,255,0.7); backdrop-filter: blur(40px); padding: 48px 40px; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.8); border: 1px solid rgba(255,255,255,0.8); text-align: center; transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #f093fb, #f441a5);"></div>
            <div style="font-size: 3.5rem; margin-bottom: 24px; filter: drop-shadow(0 8px 16px rgba(240, 147, 251, 0.2));">🧔</div>
            <h3 style="margin-bottom: 16px; font-size: 1.5rem; color: #1a202c; font-weight: 600; letter-spacing: -0.5px;">עיצוב זקן</h3>
            <p style="color: #64748b; line-height: 1.7; margin-bottom: 32px; font-size: 1rem;">עיצוב מדויק ומקצועי של הזקן עם טכניקות מתקדמות וכלים איכותיים</p>
            <div style="background: linear-gradient(135deg, #f093fb, #f441a5); color: white; padding: 12px 24px; border-radius: 20px; font-weight: 600; font-size: 1.1rem; display: inline-block; box-shadow: 0 8px 24px rgba(240, 147, 251, 0.3);">החל מ-₪60</div>
          </div>
          
          <div style="background: rgba(255,255,255,0.7); backdrop-filter: blur(40px); padding: 48px 40px; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.8); border: 1px solid rgba(255,255,255,0.8); text-align: center; transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #06d6a0, #1dd1a1);"></div>
            <div style="font-size: 3.5rem; margin-bottom: 24px; filter: drop-shadow(0 8px 16px rgba(6, 214, 160, 0.2));">💆‍♂️</div>
            <h3 style="margin-bottom: 16px; font-size: 1.5rem; color: #1a202c; font-weight: 600; letter-spacing: -0.5px;">טיפוח VIP</h3>
            <p style="color: #64748b; line-height: 1.7; margin-bottom: 32px; font-size: 1rem;">חוויה מלאה הכוללת תספורת, זקן, טיפוח פנים ועיסוי ראש מרגיע</p>
            <div style="background: linear-gradient(135deg, #06d6a0, #1dd1a1); color: white; padding: 12px 24px; border-radius: 20px; font-weight: 600; font-size: 1.1rem; display: inline-block; box-shadow: 0 8px 24px rgba(6, 214, 160, 0.3);">₪150 במקום ₪200</div>
          </div>
        </div>
      </div>
    </div>

    <div style="background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%); color: white; padding: 120px 60px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><polygon points=%220,0 100,0 50,100%22 fill=%22rgba(103,126,234,0.03)%22/></svg>') repeat; opacity: 0.1;"></div>
      <div style="max-width: 1200px; margin: 0 auto; text-align: center; position: relative; z-index: 2;">
        <h2 style="font-size: 3rem; margin-bottom: 32px; font-weight: 200; letter-spacing: -1px;">בואו להכיר אותנו</h2>
        <div style="height: 2px; width: 100px; background: linear-gradient(90deg, #667eea, #764ba2); margin: 0 auto 48px;"></div>
        <p style="font-size: 1.3rem; margin-bottom: 64px; opacity: 0.9; line-height: 1.7; font-weight: 300; max-width: 800px; margin-left: auto; margin-right: auto;">מספרה מודרנית בלב העיר עם 15 שנות ניסיון, צוות מקצועי ולקוחות מרוצים. אנחנו לא רק חותכים שיער - אנחנו יוצרים סטייל!</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 48px;">
          <div style="text-align: center; background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); padding: 40px 32px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; margin: 0 auto 24px; box-shadow: 0 12px 32px rgba(103, 126, 234, 0.3);">📍</div>
            <h4 style="margin-bottom: 12px; font-weight: 600; font-size: 1.2rem;">המיקום שלנו</h4>
            <p style="opacity: 0.8; line-height: 1.6;">רחוב הרצל 25, תל אביב<br/>חניה חינם • נגיש לנכים</p>
          </div>
          <div style="text-align: center; background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); padding: 40px 32px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #f093fb, #f441a5); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; margin: 0 auto 24px; box-shadow: 0 12px 32px rgba(240, 147, 251, 0.3);">🕐</div>
            <h4 style="margin-bottom: 12px; font-weight: 600; font-size: 1.2rem;">שעות פתיחה</h4>
            <p style="opacity: 0.8; line-height: 1.6;">א'-ו' 9:00-20:00<br/>שבת 10:00-16:00</p>
          </div>
          <div style="text-align: center; background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); padding: 40px 32px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #06d6a0, #1dd1a1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; margin: 0 auto 24px; box-shadow: 0 12px 32px rgba(6, 214, 160, 0.3);">📞</div>
            <h4 style="margin-bottom: 12px; font-weight: 600; font-size: 1.2rem;">צרו קשר</h4>
            <p style="opacity: 0.8; line-height: 1.6;">054-123-4567<br/>WhatsApp זמין 24/7</p>
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
    setTimeout(() => setShowToast(false), 4000);
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
      text: '<div style="padding: 32px; margin: 20px; background: rgba(255,255,255,0.8); backdrop-filter: blur(20px); border-radius: 20px; border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 20px 60px rgba(0,0,0,0.06);"><h3 style="font-size: 1.8rem; margin-bottom: 16px; color: #1a202c; font-weight: 600;">כותרת חדשה</h3><p style="color: #64748b; line-height: 1.7;">טקסט לדוגמה עם עיצוב מתקדם</p></div>',
      button: '<div style="margin: 32px; text-align: center;"><button style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 18px 36px; border: none; border-radius: 25px; font-weight: 600; font-size: 1.1rem; box-shadow: 0 12px 32px rgba(103, 126, 234, 0.3); transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer;">כפתור מתקדם</button></div>',
      image: '<div style="margin: 32px; text-align: center;"><div style="width: 400px; height: 240px; background: linear-gradient(135deg, #f8fafc, #e2e8f0); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 2px dashed rgba(100, 116, 139, 0.3); backdrop-filter: blur(20px);"><div style="text-align: center; color: #64748b;"><div style="font-size: 3rem; margin-bottom: 16px;">🖼️</div><div style="font-size: 1.1rem; font-weight: 500;">לחץ להוספת תמונה</div></div></div></div>'
    };
    
    if (components[type]) {
      setPreviewContent(prev => prev + components[type]);
      showToastMessage(`${type === 'text' ? 'טקסט' : type === 'button' ? 'כפתור' : 'תמונה'} נוסף בהצלחה!`);
    }
  };

  const tools = [
    { id: 'text', icon: '📝', name: 'טקסט', color: '#667eea' },
    { id: 'button', icon: '🔘', name: 'כפתור', color: '#f093fb' },
    { id: 'image', icon: '🖼️', name: 'תמונה', color: '#06d6a0' },
    { id: 'form', icon: '📋', name: 'טופס', color: '#f59e0b' },
    { id: 'gallery', icon: '🎨', name: 'גלריה', color: '#8b5cf6' },
    { id: 'map', icon: '🗺️', name: 'מפה', color: '#06b6d4' }
  ];

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', 
      height: '100vh', 
      background: isDarkMode ? 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)' : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      {/* Floating Particles Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(103, 126, 234, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(6, 214, 160, 0.02) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      {/* Header */}
      <header style={{ 
        background: isDarkMode 
          ? 'rgba(26, 32, 44, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)', 
        backdropFilter: 'blur(40px)', 
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
        padding: '16px 32px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
        position: 'relative',
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ 
            fontSize: '1.6rem', 
            fontWeight: '600',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🚀 WebMaster Pro
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '8px 20px', 
            background: isDarkMode 
              ? 'rgba(255,255,255,0.05)' 
              : 'rgba(255,255,255,0.6)', 
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)'}`
          }}>
            <span style={{ fontSize: '1.2rem' }}>✂️</span>
            <span style={{ 
              fontWeight: '500', 
              color: isDarkMode ? '#e2e8f0' : '#1a202c' 
            }}>מספרה מודרנית</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button 
            style={{ 
              padding: '10px 20px', 
              background: isDarkMode 
                ? 'rgba(255,255,255,0.05)' 
                : 'rgba(255,255,255,0.6)', 
              backdropFilter: 'blur(20px)',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)'}`, 
              borderRadius: '12px', 
              color: isDarkMode ? '#e2e8f0' : '#1a202c', 
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '0.9rem',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? '☀️' : '🌙'} {isDarkMode ? 'Light' : 'Dark'}
          </button>
          <button 
            style={{ 
              padding: '10px 20px', 
              background: isDarkMode 
                ? 'rgba(255,255,255,0.05)' 
                : 'rgba(255,255,255,0.6)', 
              backdropFilter: 'blur(20px)',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)'}`, 
              borderRadius: '12px', 
              color: isDarkMode ? '#e2e8f0' : '#1a202c', 
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '0.9rem',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
            onClick={() => showToastMessage('תצוגה מקדימה נפתחת בחלון חדש...')}
          >
            👁️ Preview
          </button>
          <button 
            style={{ 
              padding: '10px 20px', 
              background: isDarkMode 
                ? 'rgba(255,255,255,0.05)' 
                : 'rgba(255,255,255,0.6)', 
              backdropFilter: 'blur(20px)',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)'}`, 
              borderRadius: '12px', 
              color: isDarkMode ? '#e2e8f0' : '#1a202c', 
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '0.9rem',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
            onClick={() => showToastMessage('פרויקט נשמר בענן!')}
          >
            💾 Save
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
              fontSize: '0.9rem',
              boxShadow: '0 8px 24px rgba(103, 126, 234, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onClick={() => showToastMessage('האתר מתפרסם! יגיע לינק תוך דקות')}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            🚀 Publish
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ display: 'flex', height: 'calc(100vh - 84px)' }}>
        
        {/* Sidebar */}
        <div style={{ 
          width: '320px', 
          background: isDarkMode 
            ? 'rgba(26, 32, 44, 0.6)' 
            : 'rgba(255, 255, 255, 0.6)', 
          backdropFilter: 'blur(40px)',
          borderRight: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
          padding: '32px 24px',
          overflowY: 'auto',
          boxShadow: '4px 0 24px rgba(0,0,0,0.04)'
        }}>
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              marginBottom: '8px', 
              color: isDarkMode ? '#e2e8f0' : '#1a202c', 
              fontSize: '1.3rem',
              fontWeight: '600',
              letterSpacing: '-0.5px'
            }}>Design Tools</h3>
            <p style={{ 
              color: isDarkMode ? '#94a3b8' : '#64748b', 
              fontSize: '0.9rem',
              fontWeight: '400'
            }}>Drag or click to add elements</p>
          </div>
          
          <div style={{ display: 'grid', gap: '16px', marginBottom: '40px' }}>
            {tools.map((tool, index) => (
              <div 
                key={tool.id}
                style={{ 
                  padding: '20px', 
                  background: selectedTool === tool.id 
                    ? `linear-gradient(135deg, ${tool.color}15, ${tool.color}25)`
                    : isDarkMode 
                      ? 'rgba(255,255,255,0.03)' 
                      : 'rgba(255,255,255,0.4)', 
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px', 
                  cursor: 'pointer',
                  border: selectedTool === tool.id 
                    ? `2px solid ${tool.color}40`
                    : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.6)'}`,
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onClick={() => {
                  setSelectedTool(tool.id);
                  if (['text', 'button', 'image'].includes(tool.id)) {
                    addComponent(tool.id);
                  } else {
                    showToastMessage(`${tool.name} בקרוב!`);
                  }
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow = `0 12px 40px ${tool.color}20`;
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px' 
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: `linear-gradient(135deg, ${tool.color}, ${tool.color}cc)`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    boxShadow: `0 8px 24px ${tool.color}30`
                  }}>
                    {tool.icon}
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      fontSize: '1rem',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      marginBottom: '2px'
                    }}>
                      {tool.name}
                    </div>
                    <div style={{ 
                      fontSize: '0.8rem', 
                      color: isDarkMode ? '#94a3b8' : '#64748b'
                    }}>
                      {tool.id === 'text' && 'Headers & paragraphs'}
                      {tool.id === 'button' && 'Call-to-action buttons'}
                      {tool.id === 'image' && 'Pictures & graphics'}
                      {tool.id === 'form' && 'Contact forms'}
                      {tool.id === 'gallery' && 'Image galleries'}
                      {tool.id === 'map' && 'Location maps'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            padding: '24px 20px', 
            background: isDarkMode 
              ? 'rgba(255,255,255,0.03)' 
              : 'rgba(255,255,255,0.4)', 
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.6)'}`,
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎨</div>
            <h4 style={{ 
              marginBottom: '8px', 
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              fontSize: '1rem',
              fontWeight: '600'
            }}>Templates</h4>
            <p style={{ 
              color: isDarkMode ? '#94a3b8' : '#64748b', 
              fontSize: '0.8rem',
              marginBottom: '16px'
            }}>Pre-built designs</p>
            <button 
              style={{
                width: '100%',
                padding: '12px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontWeight: '500',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
              onClick={() => showToastMessage('More templates coming soon!')}
            >
              Browse Templates
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div style={{ 
          flex: 1, 
          background: isDarkMode 
            ? 'linear-gradient(135deg, #0f172a, #1e293b)' 
            : 'linear-gradient(135deg, #e2e8f0, #cbd5e1)', 
          display: 'flex', 
          flexDirection: 'column',
          position: 'relative'
        }}>
          
          {/* Canvas Toolbar */}
          <div style={{ 
            background: isDarkMode 
              ? 'rgba(26, 32, 44, 0.6)' 
              : 'rgba(255, 255, 255, 0.6)', 
            backdropFilter: 'blur(40px)',
            padding: '20px 32px', 
            borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.04)'
          }}>
            
            {/* Device Switcher */}
            <div style={{ 
              display: 'flex', 
              background: isDarkMode 
                ? 'rgba(255,255,255,0.05)' 
                : 'rgba(255,255,255,0.4)', 
              backdropFilter: 'blur(20px)',
              borderRadius: '16px', 
              padding: '4px',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.6)'}`,
              boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.04)'
            }}>
              {['desktop', 'tablet', 'mobile'].map((device) => (
                <button 
                  key={device}
                  style={{ 
                    padding: '12px 20px', 
                    border: 'none', 
                    background: currentDevice === device 
                      ? isDarkMode 
                        ? 'rgba(255,255,255,0.1)' 
                        : 'rgba(255,255,255,0.8)'
                      : 'transparent', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    color: currentDevice === device 
                      ? isDarkMode 
                        ? '#e2e8f0' 
                        : '#1a202c'
                      : isDarkMode 
                        ? '#94a3b8' 
                        : '#64748b',
                    fontWeight: currentDevice === device ? '600' : '500',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    boxShadow: currentDevice === device 
                      ? '0 4px 12px rgba(0,0,0,0.08)' 
                      : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onClick={() => switchDevice(device)}
                >
                  {device === 'desktop' && '🖥️ Desktop'}
                  {device === 'tablet' && '📱 Tablet'}
                  {device === 'mobile' && '📱 Mobile'}
                </button>
              ))}
            </div>
            
            {/* Zoom Controls */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '16px',
              background: isDarkMode 
                ? 'rgba(255,255,255,0.05)' 
                : 'rgba(255,255,255,0.4)', 
              backdropFilter: 'blur(20px)',
              borderRadius: '16px',
              padding: '8px 16px',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.6)'}`,
            }}>
              <button 
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  border: 'none',
                  background: isDarkMode 
                    ? 'rgba(255,255,255,0.08)' 
                    : 'rgba(255,255,255,0.6)', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={zoomOut}
                onMouseOver={(e) => e.target.style.background = isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.8)'}
                onMouseOut={(e) => e.target.style.background = isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.6)'}
              >
                −
              </button>
              <span style={{ 
                minWidth: '60px', 
                textAlign: 'center', 
                fontWeight: '600',
                fontSize: '0.9rem',
                color: isDarkMode ? '#e2e8f0' : '#1a202c'
              }}>
                {currentZoom}%
              </span>
              <button 
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  border: 'none',
                  background: isDarkMode 
                    ? 'rgba(255,255,255,0.08)' 
                    : 'rgba(255,255,255,0.6)', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={zoomIn}
                onMouseOver={(e) => e.target.style.background = isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.8)'}
                onMouseOut={(e) => e.target.style.background = isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.6)'}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Preview Area */}
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'flex-start', 
            padding: '48px', 
            overflow: 'auto',
            position: 'relative'
          }}>
            
            {/* Floating Grid Background */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                linear-gradient(rgba(103, 126, 234, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(103, 126, 234, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
              opacity: 0.3,
              pointerEvents: 'none'
            }} />
            
            <div 
              style={{ 
                background: isDarkMode 
                  ? 'rgba(255, 255, 255, 0.03)' 
                  : 'rgba(255, 255, 255, 0.8)', 
                backdropFilter: 'blur(40px)',
                borderRadius: '20px', 
                boxShadow: isDarkMode 
                  ? '0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)' 
                  : '0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.8)', 
                overflow: 'hidden',
                transform: `scale(${currentZoom / 100})`,
                transformOrigin: 'top center',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                width: currentDevice === 'desktop' ? '1200px' : currentDevice === 'tablet' ? '768px' : '375px',
                height: currentDevice === 'desktop' ? '800px' : currentDevice === 'tablet' ? '1024px' : '667px',
                border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)'}`,
                position: 'relative'
              }}
            >
              {/* macOS-style window controls */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                display: 'flex',
                gap: '8px',
                zIndex: 1000
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#ff5f57',
                  border: '0.5px solid rgba(0,0,0,0.1)'
                }} />
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#ffbd2e',
                  border: '0.5px solid rgba(0,0,0,0.1)'
                }} />
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#28ca42',
                  border: '0.5px solid rgba(0,0,0,0.1)'
                }} />
              </div>

              <div 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  overflow: 'auto',
                  paddingTop: '44px'
                }}
                dangerouslySetInnerHTML={{ 
                  __html: previewContent || `
                    <div style="display: flex; align-items: center; justify-content: center; height: calc(100% - 44px); color: ${isDarkMode ? '#94a3b8' : '#64748b'}; font-size: 1.2rem; background: linear-gradient(135deg, rgba(103, 126, 234, 0.05), rgba(240, 147, 251, 0.05));">
                      <div style="text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 16px; opacity: 0.6;">✨</div>
                        <div style="font-weight: 500;">Loading your masterpiece...</div>
                      </div>
                    </div>
                  `
                }}
              />
            </div>
          </div>
        </div>

        {/* Properties Panel */}
        <div style={{ 
          width: '320px', 
          background: isDarkMode 
            ? 'rgba(26, 32, 44, 0.6)' 
            : 'rgba(255, 255, 255, 0.6)', 
          backdropFilter: 'blur(40px)',
          borderLeft: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
          padding: '32px 24px',
          overflowY: 'auto',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.04)'
        }}>
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              marginBottom: '8px', 
              color: isDarkMode ? '#e2e8f0' : '#1a202c', 
              fontSize: '1.3rem',
              fontWeight: '600',
              letterSpacing: '-0.5px'
            }}>Properties</h3>
            <p style={{ 
              color: isDarkMode ? '#94a3b8' : '#64748b', 
              fontSize: '0.9rem'
            }}>Customize selected element</p>
          </div>
          
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 24px', 
            background: isDarkMode 
              ? 'rgba(255,255,255,0.03)' 
              : 'rgba(255,255,255,0.4)', 
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.6)'}`,
          }}>
            <div style={{ 
              fontSize: '3rem', 
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.7
            }}>⚡</div>
            <h4 style={{ 
              marginBottom: '12px', 
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>Ready to Design</h4>
            <p style={{ 
              color: isDarkMode ? '#94a3b8' : '#64748b', 
              lineHeight: 1.6,
              fontSize: '0.9rem'
            }}>
              Select any element in your design to customize its properties, colors, and styling.
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed',
          top: '24px',
          right: '24px',
          background: isDarkMode 
            ? 'rgba(26, 32, 44, 0.9)' 
            : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(40px)',
          color: isDarkMode ? '#e2e8f0' : '#1a202c',
          padding: '16px 24px',
          borderRadius: '16px',
          boxShadow: isDarkMode 
            ? '0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)' 
            : '0 16px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.8)',
          zIndex: 9999,
          fontWeight: '500',
          fontSize: '0.9rem',
          border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)'}`,
          transform: 'translateY(0)',
          animation: 'slideInDown 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              boxShadow: '0 0 12px rgba(103, 126, 234, 0.5)'
            }} />
            {toastMessage}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'};
        }
      `}</style>
    </div>
  );
}
