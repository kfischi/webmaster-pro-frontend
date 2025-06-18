'use client';
import { useState } from 'react';

export default function SimpleEditor() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [viewport, setViewport] = useState('desktop');

  const viewports = {
    desktop: { width: 1200, height: 800, label: 'Desktop 🖥️' },
    tablet: { width: 768, height: 1024, label: 'Tablet 📱' },
    mobile: { width: 375, height: 667, label: 'Mobile 📱' }
  };

  const createElement = (type) => {
    const templates = {
      text: { content: 'טקסט חדש', fontSize: '16px', color: '#1f2937', backgroundColor: 'transparent' },
      heading: { content: 'כותרת ראשית', fontSize: '32px', color: '#1f2937', backgroundColor: 'transparent' },
      button: { content: 'לחץ כאן', fontSize: '16px', color: '#ffffff', backgroundColor: '#3b82f6' },
      video: { content: '', videoUrl: '', fontSize: '16px', color: '#ffffff', backgroundColor: '#000000' },
      image: { content: '', src: '', fontSize: '16px', color: '#1f2937', backgroundColor: '#f3f4f6' }
    };

    const template = templates[type];
    const newElement = {
      id: Date.now(),
      type,
      ...template,
      x: 100 + Math.random() * 200,
      y: 100 + Math.random() * 200,
      width: type === 'video' ? 400 : type === 'image' ? 300 : 200,
      height: type === 'video' ? 225 : type === 'image' ? 200 : type === 'heading' ? 60 : 40
    };

    setElements([...elements, newElement]);
    setSelectedElement(newElement);
  };

  const updateElement = (field, value) => {
    if (!selectedElement) return;
    
    const updated = { ...selectedElement, [field]: value };
    setElements(elements.map(el => el.id === selectedElement.id ? updated : el));
    setSelectedElement(updated);
  };

  const deleteElement = () => {
    if (!selectedElement) return;
    setElements(elements.filter(el => el.id !== selectedElement.id));
    setSelectedElement(null);
  };

  const exportHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>אתר נוצר עם Simple Editor</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
        .container { position: relative; width: ${viewports[viewport].width}px; height: ${viewports[viewport].height}px; margin: 0 auto; background: white; border: 1px solid #ccc; }
        .element { position: absolute; display: flex; align-items: center; justify-content: center; }
    </style>
</head>
<body>
    <div class="container">
        ${elements.map(el => {
          if (el.type === 'video' && el.videoUrl) {
            const youtubeId = el.videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
            const embedUrl = youtubeId ? `https://www.youtube.com/embed/${youtubeId[1]}` : el.videoUrl;
            return `<iframe src="${embedUrl}" style="left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px; position: absolute; border: none;" allowfullscreen></iframe>`;
          }
          if (el.type === 'image' && el.src) {
            return `<img src="${el.src}" style="left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px; position: absolute;" alt="תמונה">`;
          }
          return `<div class="element" style="left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px; font-size: ${el.fontSize}; color: ${el.color}; background-color: ${el.backgroundColor}; padding: 8px; border-radius: 4px;">${el.content}</div>`;
        }).join('')}
    </div>
</body>
</html>`;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'website.html';
    a.click();
  };

  return (
    <div style={{ background: '#0f172a', color: 'white', minHeight: '100vh', padding: '20px' }}>
      {/* Header */}
      <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '24px', margin: 0 }}>🚀 Simple Editor</h1>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          {Object.entries(viewports).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setViewport(key)}
              style={{
                padding: '8px 16px',
                background: viewport === key ? '#3b82f6' : '#374151',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              {config.label}
            </button>
          ))}
        </div>

        <button
          onClick={exportHTML}
          style={{
            padding: '10px 20px',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          📤 ייצא אתר
        </button>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Tools Sidebar */}
        <div style={{ width: '250px', background: '#1e293b', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '15px' }}>🛠️ כלי עיצוב</h3>
          
          {['heading', 'text', 'button', 'image', 'video'].map(type => {
            const icons = { heading: '📝', text: '📄', button: '🔘', image: '🖼️', video: '🎬' };
            const labels = { heading: 'כותרת', text: 'טקסט', button: 'כפתור', image: 'תמונה', video: 'וידאו' };
            
            return (
              <button
                key={type}
                onClick={() => createElement(type)}
                style={{
                  width: '100%',
                  padding: '15px',
                  background: '#374151',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginBottom: '10px',
                  textAlign: 'right',
                  fontSize: '14px'
                }}
              >
                {icons[type]} {labels[type]}
              </button>
            );
          })}

          {/* Hero Template */}
          <button
            onClick={() => {
              const heroElements = [
                { id: Date.now() + 1, type: 'heading', content: 'ברוכים הבאים', x: 100, y: 100, width: 600, height: 80, fontSize: '48px', color: '#1f2937', backgroundColor: 'transparent' },
                { id: Date.now() + 2, type: 'text', content: 'פתרונות מתקדמים לעסק', x: 100, y: 200, width: 600, height: 50, fontSize: '20px', color: '#6b7280', backgroundColor: 'transparent' },
                { id: Date.now() + 3, type: 'button', content: 'התחל עכשיו', x: 300, y: 280, width: 200, height: 60, fontSize: '18px', color: '#ffffff', backgroundColor: '#10b981' }
              ];
              setElements([...elements, ...heroElements]);
            }}
            style={{
              width: '100%',
              padding: '15px',
              background: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '20px',
              textAlign: 'right'
            }}
          >
            🎯 Hero Section
          </button>
        </div>

        {/* Canvas */}
        <div style={{ flex: 1, background: '#f1f5f9', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              width: viewports[viewport].width,
              height: viewports[viewport].height,
              background: 'white',
              position: 'relative',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          >
            {/* Empty State */}
            {elements.length === 0 && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: '#6b7280'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎨</div>
                <h3>Simple Editor</h3>
                <p>בחר כלי כדי להתחיל</p>
              </div>
            )}

            {/* Elements */}
            {elements.map(element => (
              <div
                key={element.id}
                onClick={() => setSelectedElement(element)}
                style={{
                  position: 'absolute',
                  left: element.x,
                  top: element.y,
                  width: element.width,
                  height: element.height,
                  fontSize: element.fontSize,
                  color: element.color,
                  backgroundColor: element.backgroundColor,
                  padding: '8px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  border: selectedElement?.id === element.id ? '2px solid #3b82f6' : '1px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {element.type === 'video' && element.videoUrl ? (
                  element.videoUrl.includes('youtube.com') ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${element.videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]}`}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      allowFullScreen
                    />
                  ) : (
                    <video src={element.videoUrl} style={{ width: '100%', height: '100%' }} controls />
                  )
                ) : element.type === 'image' && element.src ? (
                  <img src={element.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="תמונה" />
                ) : element.type === 'video' ? (
                  <div style={{ color: 'white', textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎬</div>
                    <div style={{ fontSize: '12px' }}>הוסף URL וידאו</div>
                  </div>
                ) : element.type === 'image' ? (
                  <div style={{ color: '#6b7280', textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>🖼️</div>
                    <div style={{ fontSize: '12px' }}>הוסף תמונה</div>
                  </div>
                ) : (
                  element.content
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Properties */}
        <div style={{ width: '250px', background: '#1e293b', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '15px' }}>⚙️ מאפיינים</h3>
          
          {selectedElement ? (
            <div>
              <div style={{ background: '#374151', padding: '10px', borderRadius: '4px', marginBottom: '15px' }}>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>נבחר: {selectedElement.type}</div>
              </div>

              {/* Content */}
              {selectedElement.type !== 'image' && selectedElement.type !== 'video' && (
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>תוכן</label>
                  <textarea
                    value={selectedElement.content}
                    onChange={(e) => updateElement('content', e.target.value)}
                    style={{
                      width: '100%',
                      background: '#374151',
                      color: 'white',
                      border: '1px solid #4b5563',
                      borderRadius: '4px',
                      padding: '8px',
                      resize: 'none',
                      height: '60px'
                    }}
                  />
                </div>
              )}

              {/* Video URL */}
              {selectedElement.type === 'video' && (
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>URL וידאו</label>
                  <input
                    type="url"
                    value={selectedElement.videoUrl || ''}
                    onChange={(e) => updateElement('videoUrl', e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    style={{
                      width: '100%',
                      background: '#374151',
                      color: 'white',
                      border: '1px solid #4b5563',
                      borderRadius: '4px',
                      padding: '8px'
                    }}
                  />
                </div>
              )}

              {/* Image URL */}
              {selectedElement.type === 'image' && (
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>URL תמונה</label>
                  <input
                    type="url"
                    value={selectedElement.src || ''}
                    onChange={(e) => updateElement('src', e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    style={{
                      width: '100%',
                      background: '#374151',
                      color: 'white',
                      border: '1px solid #4b5563',
                      borderRadius: '4px',
                      padding: '8px'
                    }}
                  />
                </div>
              )}

              {/* Colors */}
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>צבע רקע</label>
                <input
                  type="color"
                  value={selectedElement.backgroundColor}
                  onChange={(e) => updateElement('backgroundColor', e.target.value)}
                  style={{ width: '100%', height: '30px', border: 'none', borderRadius: '4px' }}
                />
              </div>

              {selectedElement.type !== 'image' && selectedElement.type !== 'video' && (
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>צבע טקסט</label>
                  <input
                    type="color"
                    value={selectedElement.color}
                    onChange={(e) => updateElement('color', e.target.value)}
                    style={{ width: '100%', height: '30px', border: 'none', borderRadius: '4px' }}
                  />
                </div>
              )}

              <button
                onClick={deleteElement}
                style={{
                  width: '100%',
                  padding: '10px',
                  background: '#dc2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                🗑️ מחק
              </button>
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#6b7280', padding: '40px 0' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>🎯</div>
              <p>בחר אלמנט לעריכה</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
