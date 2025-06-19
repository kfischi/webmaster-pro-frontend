'use client';
import { useState, useEffect, useRef } from 'react';

export default function ModernEditor() {
  const [currentDevice, setCurrentDevice] = useState('desktop');
  const [currentZoom, setCurrentZoom] = useState(100);
  const [selectedElement, setSelectedElement] = useState(null);
  const [currentTemplate, setCurrentTemplate] = useState('barber');
  const [previewContent, setPreviewContent] = useState('');
  const [draggedComponent, setDraggedComponent] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [selectedElementProps, setSelectedElementProps] = useState({});

  // Template configurations
  const templates = {
    barber: {
      name: 'מספרה מודרנית',
      icon: '✂️',
      content: `
        <div class="hero-section" style="background: linear-gradient(135deg, #d69e2e, #ecc94b); color: white; padding: 80px 40px; text-align: center; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="3" fill="rgba(255,255,255,0.1)"/></svg>'); animation: float 6s ease-in-out infinite;"></div>
          <h1 class="editable-text" style="font-size: 3.5rem; margin-bottom: 20px; font-weight: 300; text-shadow: 0 4px 20px rgba(0,0,0,0.3); position: relative; z-index: 2;">✂️ סלון עופר - מספרה מודרנית</h1>
          <p class="editable-text" style="font-size: 1.4rem; margin-bottom: 30px; opacity: 0.95; position: relative; z-index: 2;">החוויה הכי מקצועית בעיר • תספורות טרנדיות • שירות VIP</p>
          <button class="editable-button" style="background: white; color: #d69e2e; padding: 18px 35px; border: none; border-radius: 30px; font-weight: 700; cursor: pointer; font-size: 1.1rem; box-shadow: 0 8px 25px rgba(0,0,0,0.2); transition: all 0.3s ease; position: relative; z-index: 2;">📞 הזמן תור עכשיו - 054-123-4567</button>
        </div>
        
        <div style="padding: 80px 40px; background: linear-gradient(135deg, #f8fafc, #edf2f7);">
          <h2 class="editable-text" style="font-size: 3rem; margin-bottom: 50px; color: #2d3748; text-align: center; font-weight: 300; letter-spacing: -1px;">השירותים הבלעדיים שלנו</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto;">
            <div class="service-card" style="background: white; padding: 40px 30px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.08); text-align: center; transition: all 0.3s ease; border: 1px solid rgba(214, 158, 46, 0.1); position: relative; overflow: hidden;">
              <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(135deg, #d69e2e, #ecc94b);"></div>
              <div style="font-size: 3rem; margin-bottom: 20px; filter: drop-shadow(0 4px 8px rgba(214, 158, 46, 0.3));">✂️</div>
              <h3 class="editable-text" style="margin-bottom: 15px; font-size: 1.4rem; color: #2d3748; font-weight: 600;">תספורת גברים מקצועית</h3>
              <p class="editable-text" style="color: #718096; line-height: 1.6; margin-bottom: 20px;">תספורת מקצועית עם ייעוץ אישי, סטיילינג וטיפוח שיגרמו לך להרגיש כמו מיליון דולר</p>
              <div class="price-tag" style="background: linear-gradient(135deg, #d69e2e, #ecc94b); color: white; padding: 8px 20px; border-radius: 15px; font-weight: 700; font-size: 1.1rem; display: inline-block;">החל מ-₪80</div>
            </div>
            
            <div class="service-card" style="background: white; padding: 40px 30px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.08); text-align: center; transition: all 0.3s ease; border: 1px solid rgba(214, 158, 46, 0.1); position: relative; overflow: hidden;">
              <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(135deg, #d69e2e, #ecc94b);"></div>
              <div style="font-size: 3rem; margin-bottom: 20px; filter: drop-shadow(0 4px 8px rgba(214, 158, 46, 0.3));">🧔</div>
              <h3 class="editable-text" style="margin-bottom: 15px; font-size: 1.4rem; color: #2d3748; font-weight: 600;">עיצוב וטיפוח זקן</h3>
              <p class="editable-text" style="color: #718096; line-height: 1.6; margin-bottom: 20px;">עיצוב מדויק של הזקן, גילוח מקצועי ומוצרי טיפוח איכותיים לזקן מושלם</p>
              <div class="price-tag" style="background: linear-gradient(135deg, #d69e2e, #ecc94b); color: white; padding: 8px 20px; border-radius: 15px; font-weight: 700; font-size: 1.1rem; display: inline-block;">החל מ-₪60</div>
            </div>
            
            <div class="service-card" style="background: white; padding: 40px 30px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.08); text-align: center; transition: all 0.3s ease; border: 1px solid rgba(214, 158, 46, 0.1); position: relative; overflow: hidden;">
              <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(135deg, #d69e2e, #ecc94b);"></div>
              <div style="font-size: 3rem; margin-bottom: 20px; filter: drop-shadow(0 4px 8px rgba(214, 158, 46, 0.3));">💆‍♂️</div>
              <h3 class="editable-text" style="margin-bottom: 15px; font-size: 1.4rem; color: #2d3748; font-weight: 600;">חבילת טיפוח VIP</h3>
              <p class="editable-text" style="color: #718096; line-height: 1.6; margin-bottom: 20px;">חוויה מלאה הכוללת תספורת, זקן, טיפוח פנים ועיסוי ראש מרגיע</p>
              <div class="price-tag" style="background: linear-gradient(135deg, #d69e2e, #ecc94b); color: white; padding: 8px 20px; border-radius: 15px; font-weight: 700; font-size: 1.1rem; display: inline-block;">₪150 במקום ₪200</div>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #2d3748, #4a5568); color: white; padding: 80px 40px; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="0,0 100,0 50,100" fill="rgba(214,158,46,0.05)"/></svg>') repeat; opacity: 0.1;"></div>
          <div style="max-width: 1000px; margin: 0 auto; text-align: center; position: relative; z-index: 2;">
            <h2 class="editable-text" style="font-size: 2.5rem; margin-bottom: 30px; font-weight: 300;">בואו להכיר אותנו</h2>
            <p class="editable-text" style="font-size: 1.2rem; margin-bottom: 40px; opacity: 0.9; line-height: 1.7;">מספרה מודרנית בלב העיר עם 15 שנות ניסיון ולקוחות מרוצים. אנחנו לא רק חותכים שיער - אנחנו יוצרים סטייל!</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; margin-top: 50px;">
              <div style="text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 10px;">📍</div>
                <h4 style="margin-bottom: 8px; font-weight: 600;">המיקום שלנו</h4>
                <p style="opacity: 0.8;">רחוב הרצל 25, תל אביב</p>
              </div>
              <div style="text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 10px;">🕐</div>
                <h4 style="margin-bottom: 8px; font-weight: 600;">שעות פתיחה</h4>
                <p style="opacity: 0.8;">א'-ו' 9:00-20:00<br/>שבת 10:00-16:00</p>
              </div>
              <div style="text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 10px;">📞</div>
                <h4 style="margin-bottom: 8px; font-weight: 600;">צרו קשר</h4>
                <p style="opacity: 0.8;">054-123-4567<br/>salon.ofer@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      `
    }
  };

  // Component templates
  const componentTemplates = {
    text: '<div class="editable-text" style="padding: 20px; margin: 10px; background: #f7fafc; border-radius: 15px; cursor: pointer; border: 2px dashed #e2e8f0; transition: all 0.3s ease;"><h3 style="margin-bottom: 10px; color: #2d3748;">כותרת חדשה</h3><p style="color: #718096;">טקסט לדוגמה. לחץ כדי לערוך את התוכן.</p></div>',
    button: '<div class="editable-button-container" style="margin: 20px; text-align: center; cursor: pointer;"><button class="editable-button" style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 15px 30px; border: none; border-radius: 25px; font-weight: 600; cursor: pointer; font-size: 1rem; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3); transition: all 0.3s ease;">כפתור חדש</button></div>',
    image: '<div class="editable-image" style="margin: 20px; text-align: center; cursor: pointer;"><div style="width: 300px; height: 200px; background: linear-gradient(45deg, #f0f0f0, #e0e0e0); border-radius: 15px; display: flex; align-items: center; justify-content: center; color: #666; font-size: 1.2rem; border: 2px dashed #d1d5db; margin: 0 auto;">🖼️ לחץ להוספת תמונה</div></div>',
    form: '<div class="editable-form" style="margin: 20px; padding: 40px; background: white; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.08); cursor: pointer; border: 1px solid #e2e8f0;"><h3 style="margin-bottom: 25px; text-align: center; color: #2d3748; font-size: 1.5rem;">צור קשר</h3><div style="display: grid; gap: 20px;"><input type="text" placeholder="שם מלא" style="padding: 15px; border: 2px solid #e2e8f0; border-radius: 10px; transition: all 0.3s ease;"><input type="email" placeholder="אימייל" style="padding: 15px; border: 2px solid #e2e8f0; border-radius: 10px; transition: all 0.3s ease;"><textarea placeholder="הודעה" rows="4" style="padding: 15px; border: 2px solid #e2e8f0; border-radius: 10px; resize: vertical; transition: all 0.3s ease;"></textarea><button style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 15px; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; font-size: 1rem;">שלח הודעה</button></div></div>'
  };

  useEffect(() => {
    // Load template content
    setTimeout(() => {
      setPreviewContent(templates[currentTemplate].content);
    }, 500);
  }, [currentTemplate]);

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

  const addComponent = (componentType) => {
    const newComponent = componentTemplates[componentType];
    if (newComponent) {
      setPreviewContent(prev => prev + newComponent);
      showToastMessage(`${getComponentDisplayName(componentType)} נוסף בהצלחה!`);
    }
  };

  const getComponentDisplayName = (type) => {
    const names = {
      text: 'טקסט',
      button: 'כפתור',
      image: 'תמונה',
      form: 'טופס יצירת קשר'
    };
    return names[type] || type;
  };

  const handleDragStart = (e, componentType) => {
    setDraggedComponent(componentType);
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedComponent) {
      addComponent(draggedComponent);
      setDraggedComponent(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const selectElement = (element) => {
    setSelectedElement(element);
    // Extract current properties
    const style = window.getComputedStyle(element);
    setSelectedElementProps({
      text: element.textContent || '',
      backgroundColor: style.backgroundColor,
      color: style.color,
      fontSize: style.fontSize,
      textAlign: style.textAlign
    });
  };

  const updateElementProperty = (property, value) => {
    if (selectedElement) {
      if (property === 'text') {
        selectedElement.textContent = value;
      } else {
        selectedElement.style[property] = value;
      }
      showToastMessage('השינוי נשמר!');
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', background: '#f8fafc', height: '100vh', overflow: 'hidden' }}>
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
          grid-template-columns: 300px 1fr 350px;
          grid-template-rows: 70px 1fr;
        }

        .editor-header {
          grid-area: header;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 30px;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
          z-index: 1000;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .template-info {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 25px;
          backdrop-filter: blur(10px);
        }

        .header-actions {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .action-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: white;
          color: #667eea;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .sidebar {
          grid-area: sidebar;
          background: white;
          border-left: 1px solid #e2e8f0;
          overflow-y: auto;
          box-shadow: 4px 0 20px rgba(0,0,0,0.05);
        }

        .sidebar-header {
          padding: 25px;
          background: linear-gradient(135deg, #f7fafc, #edf2f7);
          border-bottom: 1px solid #e2e8f0;
        }

        .sidebar-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 8px;
        }

        .sidebar-subtitle {
          font-size: 0.95rem;
          color: #718096;
        }

        .canvas-container {
          grid-area: canvas;
          background: linear-gradient(135deg, #e2e8f0, #edf2f7);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .canvas-toolbar {
          background: white;
          padding: 20px 30px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .device-switcher {
          display: flex;
          background: #f7fafc;
          border-radius: 20px;
          padding: 4px;
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.1);
        }

        .device-btn {
          padding: 10px 20px;
          border: none;
          background: transparent;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          color: #4a5568;
          font-weight: 500;
        }

        .device-btn.active {
          background: white;
          color: #667eea;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          font-weight: 600;
        }

        .zoom-controls {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .zoom-btn {
          width: 40px;
          height: 40px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 1.2rem;
        }

        .zoom-btn:hover {
          border-color: #667eea;
          color: #667eea;
          transform: scale(1.1);
        }

        .canvas-frame {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 40px;
          overflow: auto;
        }

        .website-preview {
          background: white;
          border-radius: 15px;
          box-shadow: 0 25px 80px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }

        .preview-content {
          width: 100%;
          height: 100%;
          overflow-y: auto;
        }

        .properties-panel {
          grid-area: properties;
          background: white;
          border-right: 1px solid #e2e8f0;
          overflow-y: auto;
          box-shadow: -4px 0 20px rgba(0,0,0,0.05);
        }

        .properties-header {
          padding: 25px;
          background: linear-gradient(135deg, #f7fafc, #edf2f7);
          border-bottom: 1px solid #e2e8f0;
        }

        .properties-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 8px;
        }

        .properties-subtitle {
          font-size: 0.95rem;
          color: #718096;
        }

        .sidebar-section {
          padding: 25px;
          border-bottom: 1px solid #f1f5f9;
        }

        .section-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #4a5568;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .component-list {
          display: grid;
          gap: 15px;
        }

        .component-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px;
          background: linear-gradient(135deg, #f7fafc, #edf2f7);
          border: 2px solid transparent;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .component-item:hover {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .component-icon {
          font-size: 1.5rem;
          width: 40px;
          text-align: center;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        .component-name {
          font-weight: 600;
          font-size: 1rem;
        }

        .toast {
          position: fixed;
          top: 90px;
          right: 30px;
          background: linear-gradient(135deg, #10b981, #34d399);
          color: white;
          padding: 15px 25px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
          z-index: 9999;
          transform: translateX(400px);
          transition: transform 0.3s ease;
          font-weight: 600;
        }

        .toast.show {
          transform: translateX(0);
        }

        .property-group {
          padding: 20px 25px;
          border-bottom: 1px solid #f1f5f9;
        }

        .property-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 12px;
          display: block;
        }

        .property-input {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          background: #f7fafc;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .property-input:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .color-picker {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 10px;
          margin-top: 10px;
        }

        .color-option {
          width: 35px;
          height: 35px;
          border-radius: 8px;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all 0.3s ease;
        }

        .color-option:hover {
          transform: scale(1.1);
          border-color: #667eea;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
        }

        .editable-text:hover {
          outline: 2px dashed #667eea;
          outline-offset: 4px;
        }

        .editable-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }

        @media (max-width: 1024px) {
          .editor-container {
            grid-template-areas: 
              "header"
              "canvas";
            grid-template-columns: 1fr;
            grid-template-rows: 70px 1fr;
          }
