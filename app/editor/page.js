'use client';
import { useState, useRef, useEffect } from 'react';

export default function EnhancedEditor() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [dragState, setDragState] = useState({ isDragging: false, startPos: null, elementId: null });
  const [viewMode, setViewMode] = useState('desktop');
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [canvasBackground, setCanvasBackground] = useState('#ffffff');
  const canvasRef = useRef();

  // Load template on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const templateId = urlParams.get('template');
    
    if (templateId) {
      loadTemplate(parseInt(templateId));
    }
  }, []);

  // Enhanced template presets with editor elements
  const templateData = {
    1: {
      name: 'מספרת מקצועית',
      background: '#f8f9fa',
      elements: [
        { id: 1001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'מספרת מקצועית', style: { backgroundColor: 'transparent', color: '#2c3e50', fontSize: '48px', fontFamily: 'Arial', textAlign: 'center', fontWeight: 'bold' }},
        { id: 1002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'עיצוב שיער מקצועי ברמה הגבוהה ביותר', style: { backgroundColor: 'transparent', color: '#7f8c8d', fontSize: '18px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 1003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'קבע תור עכשיו', style: { backgroundColor: '#e74c3c', color: '#ffffff', fontSize: '18px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px' }},
        { id: 1004, type: 'text', x: 50, y: 250, width: 600, height: 40, content: 'השירותים שלנו', style: { backgroundColor: 'transparent', color: '#2c3e50', fontSize: '32px', fontFamily: 'Arial', textAlign: 'center', fontWeight: 'bold' }}
      ]
    },
    2: {
      name: 'מכון כושר אישי',
      background: '#fff5f5',
      elements: [
        { id: 2001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'FIT POWER', style: { backgroundColor: 'transparent', color: '#ff6b6b', fontSize: '56px', fontFamily: 'Arial', textAlign: 'center', fontWeight: 'bold' }},
        { id: 2002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'אימונים אישיים ברמה הגבוהה ביותר', style: { backgroundColor: 'transparent', color: '#2c3e50', fontSize: '20px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 2003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'התחל עכשיו', style: { backgroundColor: '#ff6b6b', color: '#ffffff', fontSize: '18px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px' }},
        { id: 2004, type: 'text', x: 50, y: 250, width: 600, height: 40, content: 'השירותים שלנו', style: { backgroundColor: 'transparent', color: '#2c3e50', fontSize: '32px', fontFamily: 'Arial', textAlign: 'center', fontWeight: 'bold' }}
      ]
    },
    3: {
      name: 'משרד עורכי דין',
      background: '#f8f9fa',
      elements: [
        { id: 3001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'משרד עורכי דין כהן ושות\'', style: { backgroundColor: 'transparent', color: '#1a1a2e', fontSize: '36px', fontFamily: 'Times New Roman', textAlign: 'center', fontWeight: 'bold' }},
        { id: 3002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'מומחים בדיני מסחר, נזיקין ומשפט אזרחי', style: { backgroundColor: 'transparent', color: '#666666', fontSize: '16px', fontFamily: 'Times New Roman', textAlign: 'center' }},
        { id: 3003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'קבע פגישת ייעוץ', style: { backgroundColor: '#c9b037', color: '#1a1a2e', fontSize: '16px', fontFamily: 'Times New Roman', textAlign: 'center', borderRadius: '5px' }},
        { id: 3004, type: 'text', x: 50, y: 250, width: 600, height: 40, content: 'תחומי התמחות', style: { backgroundColor: 'transparent', color: '#1a1a2e', fontSize: '32px', fontFamily: 'Times New Roman', textAlign: 'center', fontWeight: 'bold' }}
      ]
    },
    4: {
      name: 'מורה פרטי מקצועי',
      background: '#f9f9ff',
      elements: [
        { id: 4001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'ד"ר שרה לוי - מורה פרטי', style: { backgroundColor: 'transparent', color: '#667eea', fontSize: '36px', fontFamily: 'Arial', textAlign: 'center', fontWeight: 'bold' }},
        { id: 4002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'מתמטיקה • פיזיקה • כימיה', style: { backgroundColor: 'transparent', color: '#764ba2', fontSize: '20px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 4003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'קבע שיעור ניסיון', style: { backgroundColor: '#ff6b6b', color: '#ffffff', fontSize: '16px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px' }},
        { id: 4004, type: 'text', x: 50, y: 250, width: 600, height: 40, content: 'המקצועות שלי', style: { backgroundColor: 'transparent', color: '#2c3e50', fontSize: '32px', fontFamily: 'Arial', textAlign: 'center', fontWeight: 'bold' }}
      ]
    },
    5: {
      name: 'מטפל פסיכולוגי',
      background: '#f8fbff',
      elements: [
        { id: 5001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'ד"ר מיכל רוזן', style: { backgroundColor: 'transparent', color: '#74b9ff', fontSize: '42px', fontFamily: 'Arial', textAlign: 'center', fontWeight: '300' }},
        { id: 5002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'פסיכולוגית קלינית מוסמכת', style: { backgroundColor: 'transparent', color: '#2d3436', fontSize: '20px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 5003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'קבע פגישת היכרות', style: { backgroundColor: '#74b9ff', color: '#ffffff', fontSize: '16px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px' }},
        { id: 5004, type: 'text', x: 50, y: 250, width: 600, height: 40, content: 'תחומי הטיפול', style: { backgroundColor: 'transparent', color: '#2d3436', fontSize: '32px', fontFamily: 'Arial', textAlign: 'center', fontWeight: 'bold' }}
      ]
    },
    6: {
      name: 'סטודיו יוגה ומדיטציה',
      background: '#f8fdf8',
      elements: [
        { id: 6001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: '🧘‍♀️ SERENITY', style: { backgroundColor: 'transparent', color: '#2e7d32', fontSize: '56px', fontFamily: 'Arial', textAlign: 'center', fontWeight: '300' }},
        { id: 6002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'סטודיו יוגה ומדיטציה', style: { backgroundColor: 'transparent', color: '#2e7d32', fontSize: '24px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 6003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'התחל את המסע שלך', style: { backgroundColor: '#2e7d32', color: '#ffffff', fontSize: '16px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px' }},
        { id: 6004, type: 'text', x: 50, y: 250, width: 600, height: 40, content: 'השיעורים שלנו', style: { backgroundColor: 'transparent', color: '#2e7d32', fontSize: '32px', fontFamily: 'Arial', textAlign: 'center', fontWeight: '300' }}
      ]
    }
  };

  const loadTemplate = (templateId) => {
    const template = templateData[templateId];
    if (template) {
      setElements(template.elements);
      setCurrentTemplate(template);
      setCanvasBackground(template.background);
      setSelectedElement(null);
    }
  };

  // Viewport sizes
  const viewportSizes = {
    desktop: { width: '100%', maxWidth: '1200px' },
    tablet: { width: '768px', maxWidth: '768px' },
    mobile: { width: '375px', maxWidth: '375px' }
  };

  // Add new element
  const addElement = (type) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    const newElement = {
      id: Date.now(),
      type,
      x: 50,
      y: 50,
      width: type === 'text' ? 200 : type === 'button' ? 150 : type === 'video' ? 400 : 300,
      height: type === 'text' ? 40 : type === 'button' ? 40 : type === 'video' ? 225 : 200,
      content: type === 'text' ? 'טקסט חדש' : 
               type === 'button' ? 'לחץ כאן' : 
               type === 'video' ? '' : 
               type === 'image' ? '' : 'תוכן',
      style: {
        backgroundColor: type === 'button' ? '#3498db' : 'transparent',
        color: type === 'button' || type === 'text' ? '#ffffff' : '#000000',
        fontSize: '16px',
        fontFamily: 'Arial',
        textAlign: 'center',
        borderRadius: type === 'button' ? '5px' : '0px',
        border: type === 'image' || type === 'video' ? '2px dashed #ccc' : 'none'
      },
      videoUrl: '',
      imageUrl: ''
    };
    
    setElements([...elements, newElement]);
    setSelectedElement(newElement.id);
  };

  // Mouse handlers for dragging
  const handleMouseDown = (e, elementId) => {
    e.preventDefault();
    e.stopPropagation();
    
    const element = elements.find(el => el.id === elementId);
    if (!element) return;

    setSelectedElement(elementId);
    
    const rect = canvasRef.current.getBoundingClientRect();
    const startPos = {
      x: e.clientX - rect.left - element.x,
      y: e.clientY - rect.top - element.y
    };
    
    setDragState({ isDragging: true, startPos, elementId });
  };

  const handleMouseMove = (e) => {
    if (!dragState.isDragging) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const newX = Math.max(0, e.clientX - rect.left - dragState.startPos.x);
    const newY = Math.max(0, e.clientY - rect.top - dragState.startPos.y);
    
    setElements(elements.map(el => 
      el.id === dragState.elementId 
        ? { ...el, x: newX, y: newY }
        : el
    ));
  };

  const handleMouseUp = () => {
    setDragState({ isDragging: false, startPos: null, elementId: null });
  };

  // Update element properties
  const updateElement = (id, updates) => {
    setElements(elements.map(el => el.id === id ? { ...el, ...updates } : el));
  };

  const updateElementStyle = (id, styleUpdates) => {
    setElements(elements.map(el => 
      el.id === id ? { ...el, style: { ...el.style, ...styleUpdates } } : el
    ));
  };

  // Delete element
  const deleteElement = (id) => {
    setElements(elements.filter(el => el.id !== id));
    setSelectedElement(null);
  };

  // Export HTML
  const exportHTML = () => {
    const html = `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${currentTemplate ? currentTemplate.name : 'האתר שלי'}</title>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial, sans-serif; background: ${canvasBackground}; }
        .container { max-width: 1200px; margin: 0 auto; background: white; min-height: 500px; position: relative; }
        ${elements.map(el => `
        .element-${el.id} {
            position: absolute;
            left: ${el.x}px;
            top: ${el.y}px;
            width: ${el.width}px;
            height: ${el.height}px;
            background-color: ${el.style.backgroundColor};
            color: ${el.style.color};
            font-size: ${el.style.fontSize};
            font-family: ${el.style.fontFamily};
            text-align: ${el.style.textAlign};
            border-radius: ${el.style.borderRadius};
            border: ${el.style.border};
            display: flex;
            align-items: center;
            justify-content: center;
            ${el.type === 'button' ? 'cursor: pointer;' : ''}
            padding: ${el.style.padding || '0'};
            font-weight: ${el.style.fontWeight || 'normal'};
        }`).join('')}
    </style>
</head>
<body>
    <div class="container">
        ${elements.map(el => {
          if (el.type === 'video' && el.videoUrl) {
            const videoId = el.videoUrl.includes('youtube.com') || el.videoUrl.includes('youtu.be') 
              ? el.videoUrl.split('v=')[1]?.split('&')[0] || el.videoUrl.split('/').pop()
              : null;
            
            if (videoId) {
              return `<iframe class="element-${el.id}" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
            }
          }
          if (el.type === 'image' && el.imageUrl) {
            return `<img class="element-${el.id}" src="${el.imageUrl}" alt="תמונה" style="object-fit: cover;" />`;
          }
          return `<div class="element-${el.id}">${el.content}</div>`;
        }).join('')}
    </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentTemplate ? currentTemplate.name : 'my-website'}.html`;
    a.click();
  };

  const selectedEl = elements.find(el => el.id === selectedElement);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', height: '100vh', display: 'flex', flexDirection: 'column', background: '#1a1a1a', color: 'white' }}>
      
      {/* Header */}
      <header style={{ background: '#2d2d2d', padding: '15px 25px', borderBottom: '1px solid #444', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#ffffff' }}>🎨 אדיטור מקצועי</h1>
          {currentTemplate && (
            <div style={{ background: '#667eea', color: 'white', padding: '5px 15px', borderRadius: '15px', fontSize: '0.9rem' }}>
              📋 {currentTemplate.name}
            </div>
          )}
        </div>
        
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {/* Viewport Controls */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {Object.keys(viewportSizes).map(mode => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                style={{
                  padding: '8px 15px',
                  border: 'none',
                  borderRadius: '5px',
                  background: viewMode === mode ? '#667eea' : '#444',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                {mode === 'desktop' ? '🖥️ Desktop' : mode === 'tablet' ? '📱 Tablet' : '📱 Mobile'}
              </button>
            ))}
          </div>
          
          <button
            onClick={exportHTML}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              background: '#27ae60',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            📤 ייצא HTML
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Left Panel - Tools */}
        <div style={{ width: '250px', background: '#2d2d2d', borderLeft: '1px solid #444', padding: '20px', overflowY: 'auto' }}>
          <h3 style={{ margin: '0 0 20px 0', color: '#ffffff' }}>🛠️ כלים</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button 
              onClick={() => window.location.href = '/templates'}
              style={{ padding: '10px', background: '#95a5a6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '0.9rem', marginBottom: '10px' }}
            >
              ← חזור לגלריה
            </button>
            
            <button onClick={() => addElement('text')} style={{ padding: '12px', background: '#667eea', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              📝 טקסט
            </button>
            <button onClick={() => addElement('button')} style={{ padding: '12px', background: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              🔘 כפתור
            </button>
            <button onClick={() => addElement('image')} style={{ padding: '12px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              🖼️ תמונה
            </button>
            <button onClick={() => addElement('video')} style={{ padding: '12px', background: '#f39c12', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              🎬 וידאו
            </button>
          </div>

          {/* Quick Templates */}
          <div style={{ marginTop: '30px' }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#ffffff' }}>⚡ תבניות מהירות</h4>
            <button 
              onClick={() => {
                const heroElements = [
                  { id: Date.now() + 1, type: 'text', x: 50, y: 50, width: 400, height: 60, content: 'ברוכים הבאים לאתר שלנו', style: { backgroundColor: 'transparent', color: '#2c3e50', fontSize: '32px', fontFamily: 'Arial', textAlign: 'center' }},
                  { id: Date.now() + 2, type: 'text', x: 50, y: 120, width: 500, height: 40, content: 'אנחנו מציעים שירותים מקצועיים ואיכותיים', style: { backgroundColor: 'transparent', color: '#7f8c8d', fontSize: '18px', fontFamily: 'Arial', textAlign: 'center' }},
                  { id: Date.now() + 3, type: 'button', x: 200, y: 180, width: 200, height: 50, content: 'צור קשר עכשיו', style: { backgroundColor: '#3498db', color: '#ffffff', fontSize: '18px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px' }}
                ];
                setElements([...elements, ...heroElements]);
              }}
              style={{ padding: '10px', background: '#8e44ad', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}
            >
              🏠 Hero Section
            </button>
          </div>
        </div>

        {/* Center - Canvas */}
        <div style={{ flex: 1, padding: '20px', background: '#f5f5f5', overflow: 'auto', display: 'flex', justifyContent: 'center' }}>
          <div 
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              width: viewportSizes[viewMode].width,
              maxWidth: viewportSizes[viewMode].maxWidth,
              minHeight: '600px',
              background: canvasBackground,
              position: 'relative',
              boxShadow: '0 0 20px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              cursor: 'crosshair'
            }}
          >
            {elements.length === 0 && (
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                textAlign: 'center', 
                color: '#bdc3c7',
                fontSize: '1.2rem'
              }}>
                🎨 בחר כלי מהתפריט והתחל לעצב!
              </div>
            )}
            
            {elements.map(element => (
              <div
                key={element.id}
                onMouseDown={(e) => handleMouseDown(e, element.id)}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedElement(element.id);
                }}
                style={{
                  position: 'absolute',
                  left: element.x,
                  top: element.y,
                  width: element.width,
                  height: element.height,
                  backgroundColor: element.style.backgroundColor,
                  color: element.style.color,
                  fontSize: element.style.fontSize,
                  fontFamily: element.style.fontFamily,
                  textAlign: element.style.textAlign,
                  borderRadius: element.style.borderRadius,
                  border: selectedElement === element.id ? '2px solid #3498db' : element.style.border,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'move',
                  userSelect: 'none',
                  boxSizing: 'border-box',
                  padding: element.style.padding || '0',
                  fontWeight: element.style.fontWeight || 'normal'
                }}
              >
                {element.type === 'video' && element.videoUrl ? (
                  (() => {
                    const videoId = element.videoUrl.includes('youtube.com') || element.videoUrl.includes('youtu.be') 
                      ? element.videoUrl.split('v=')[1]?.split('&')[0] || element.videoUrl.split('/').pop()
                      : null;
                    
                    return videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
                        allowFullScreen
                      />
                    ) : (
                      <div style={{ color: '#e74c3c' }}>🔗 URL וידאו לא תקין</div>
                    );
                  })()
                ) : element.type === 'image' && element.imageUrl ? (
                  <img 
                    src={element.imageUrl} 
                    alt="תמונה" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                  />
                ) : element.type === 'video' ? (
                  <div style={{ color: '#95a5a6' }}>🎬 הוסף URL וידאו</div>
                ) : element.type === 'image' ? (
                  <div style={{ color: '#95a5a6' }}>🖼️ הוסף URL תמונה</div>
                ) : (
                  element.content
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Properties */}
        <div style={{ width: '300px', background: '#2d2d2d', borderRight: '1px solid #444', padding: '20px', overflowY: 'auto' }}>
          <h3 style={{ margin: '0 0 20px 0', color: '#ffffff' }}>⚙️ מאפיינים</h3>
          
          {selectedEl ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              
              {/* Element Info */}
              <div style={{ background: '#3d3d3d', padding: '15px', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '10px', color: '#ffffff' }}>
                  {selectedEl.type === 'text' ? '📝 טקסט' : 
                   selectedEl.type === 'button' ? '🔘 כפתור' : 
                   selectedEl.type === 'image' ? '🖼️ תמונה' : 
                   selectedEl.type === 'video' ? '🎬 וידאו' : 'אלמנט'}
                </div>
                
                {/* Content */}
                {(selectedEl.type === 'text' || selectedEl.type === 'button') && (
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#bdc3c7' }}>תוכן:</label>
                    <textarea
                      value={selectedEl.content}
                      onChange={(e) => updateElement(selectedEl.id, { content: e.target.value })}
                      style={{ width: '100%', padding: '8px', border: '1px solid #555', borderRadius: '4px', background: '#555', color: 'white', minHeight: '60px', resize: 'vertical' }}
                    />
                  </div>
                )}
                
                {/* Video URL */}
                {selectedEl.type === 'video' && (
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#bdc3c7' }}>URL וידאו (YouTube):</label>
                    <input
                      type="text"
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={selectedEl.videoUrl}
                      onChange={(e) => updateElement(selectedEl.id, { videoUrl: e.target.value })}
                      style={{ width: '100%', padding: '8px', border: '1px solid #555', borderRadius: '4px', background: '#555', color: 'white' }}
                    />
                  </div>
                )}
                
                {/* Image URL */}
                {selectedEl.type === 'image' && (
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#bdc3c7' }}>URL תמונה:</label>
                    <input
                      type="text"
                      placeholder="https://example.com/image.jpg"
                      value={selectedEl.imageUrl}
                      onChange={(e) => updateElement(selectedEl.id, { imageUrl: e.target.value })}
                      style={{ width: '100%', padding: '8px', border: '1px solid #555', borderRadius: '4px', background: '#555', color: 'white' }}
                    />
                  </div>
                )}
              </div>

              {/* Position & Size */}
              <div style={{ background: '#3d3d3d', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 15px 0', color: '#ffffff' }}>📐 מיקום וגודל</h4>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#bdc3c7' }}>X:</label>
                    <input
                      type="number"
                      value={selectedEl.x}
                      onChange={(e) => updateElement(selectedEl.id, { x: parseInt(e.target.value) })}
                      style={{ width: '100%', padding: '6px', border: '1px solid #555', borderRadius: '4px', background: '#555', color: 'white' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#bdc3c7' }}>Y:</label>
                    <input
                      type="number"
                      value={selectedEl.y}
                      onChange={(e) => updateElement(selectedEl.id, { y: parseInt(e.target.value) })}
                      style={{ width: '100%', padding: '6px', border: '1px solid #555', borderRadius: '4px', background: '#555', color: 'white' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#bdc3c7' }}>רוחב:</label>
                    <input
                      type="number"
                      value={selectedEl.width}
                      onChange={(e) => updateElement(selectedEl.id, { width: parseInt(e.target.value) })}
                      style={{ width: '100%', padding: '6px', border: '1px solid #555', borderRadius: '4px', background: '#555', color: 'white' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#bdc3c7' }}>גובה:</label>
                    <input
                      type="number"
                      value={selectedEl.height}
                      onChange={(e) => updateElement(selectedEl.id, { height: parseInt(e.target.value) })}
                      style={{ width: '100%', padding: '6px', border: '1px solid #555', borderRadius: '4px', background: '#555', color: 'white' }}
                    />
                  </div>
                </div>
              </div>

              {/* Style */}
              <div style={{ background: '#3d3d3d', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 15px 0', color: '#ffffff' }}>🎨 עיצוב</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#bdc3c7' }}>צבע רקע:</label>
                    <input
                      type="color"
                      value={selectedEl.style.backgroundColor === 'transparent' ? '#ffffff' : selectedEl.style.backgroundColor}
                      onChange={(e) => updateElementStyle(selectedEl.id, { backgroundColor: e.target.value })}
                      style={{ width: '100%', height: '40px', border: 'none', borderRadius: '4px' }}
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#bdc3c7' }}>צבע טקסט:</label>
                    <input
                      type="color"
                      value={selectedEl.style.color}
                      onChange={(e) => updateElementStyle(selectedEl.id, { color: e.target.value })}
                      style={{ width: '100%', height: '40px', border: 'none', borderRadius: '4px' }}
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#bdc3c7' }}>גודל פונט:</label>
                    <input
                      type="range"
                      min="12"
                      max="72"
                      value={parseInt(selectedEl.style.fontSize)}
                      onChange={(e) => updateElementStyle(selectedEl.id, { fontSize: e.target.value + 'px' })}
                      style={{ width: '100%' }}
                    />
                    <span style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>{selectedEl.style.fontSize}</span>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#bdc3c7' }}>יישור טקסט:</label>
                    <select
                      value={selectedEl.style.textAlign}
                      onChange={(e) => updateElementStyle(selectedEl.id, { textAlign: e.target.value })}
                      style={{ width: '100%', padding: '8px', border: '1px solid #555', borderRadius: '4px', background: '#555', color: 'white' }}
                    >
                      <option value="center">מרכז</option>
                      <option value="right">ימין</option>
                      <option value="left">שמאל</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#bdc3c7' }}>עיגול פינות:</label>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={parseInt(selectedEl.style.borderRadius)}
                      onChange={(e) => updateElementStyle(selectedEl.id, { borderRadius: e.target.value + 'px' })}
                      style={{ width: '100%' }}
                    />
                    <span style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>{selectedEl.style.borderRadius}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <button
                onClick={() => deleteElement(selectedEl.id)}
                style={{
                  padding: '12px',
                  background: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                🗑️ מחק אלמנט
              </button>
              
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#7f8c8d', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👆</div>
              <p>בחר אלמנט לעריכת המאפיינים שלו</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
