'use client';

import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export default function Editor() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [activeTab, setActiveTab] = useState('🧩 רכיבים');
  const [draggedElement, setDraggedElement] = useState(null);
  const canvasRef = useRef(null);

  const handleDragStart = (e, type) => {
    setDraggedElement(type);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (!draggedElement) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newElement = {
      id: Date.now(),
      type: draggedElement,
      x,
      y,
      width: 200,
      height: 100,
      content: getDefaultContent(draggedElement),
      style: getDefaultStyle(draggedElement)
    };

    setElements([...elements, newElement]);
    setDraggedElement(null);
    toast.success(`רכיב ${draggedElement} נוסף בהצלחה!`);
  };

  const getDefaultContent = (type) => {
    const defaults = {
      'Hero Section': 'כותרת ראשית מרשימה',
      'Text Block': 'כאן יבוא הטקסט שלכם...',
      'Button': 'לחץ כאן',
      'Image': 'תמונה',
      'Gallery': 'גלריה',
      'Video': 'וידאו',
      'Contact Form': 'טופס יצירת קשר'
    };
    return defaults[type] || 'תוכן';
  };

  const getDefaultStyle = (type) => {
    const styles = {
      'Hero Section': {
        backgroundColor: '#667eea',
        color: 'white',
        fontSize: '24px',
        padding: '40px',
        textAlign: 'center',
        borderRadius: '10px'
      },
      'Text Block': {
        fontSize: '16px',
        color: '#333',
        padding: '20px',
        lineHeight: '1.6'
      },
      'Button': {
        backgroundColor: '#667eea',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px'
      },
      'Image': {
        border: '2px dashed #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa'
      },
      'Gallery': {
        border: '2px solid #667eea',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      'Video': {
        backgroundColor: '#000',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      'Contact Form': {
        backgroundColor: '#f8f9fa',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }
    };
    return styles[type] || {};
  };

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const updateElement = (id, updates) => {
    setElements(elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
  };

  const deleteElement = (id) => {
    setElements(elements.filter(el => el.id !== id));
    setSelectedElement(null);
    toast.success('הרכיב נמחק בהצלחה!');
  };

  const exportToHTML = () => {
    const html = `
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>האתר שלי</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        ${elements.map(el => `
        .element-${el.id} {
            position: absolute;
            left: ${el.x}px;
            top: ${el.y}px;
            width: ${el.width}px;
            height: ${el.height}px;
            ${Object.entries(el.style).map(([key, value]) => 
                `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`
            ).join(' ')}
        }
        `).join('')}
    </style>
</head>
<body>
    <div class="container">
        ${elements.map(el => `
        <div class="element-${el.id}">
            ${el.content}
        </div>
        `).join('')}
    </div>
</body>
</html>`;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-website.html';
    a.click();
    URL.revokeObjectURL(url);
    toast.success('הקובץ HTML יוצא בהצלחה!');
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* סרגל כלים */}
      <div style={{ 
        width: '300px', 
        backgroundColor: '#1e293b', 
        borderRight: '1px solid #334155',
        overflowY: 'auto'
      }}>
        <div style={{ padding: '20px' }}>
          <h2 style={{ margin: '0 0 20px 0', fontSize: '1.5rem', color: '#f8fafc' }}>
            🎨 עורך אתרים
          </h2>
          
          {/* טאבים */}
          <div style={{ marginBottom: '20px' }}>
            {['🧩 רכיבים', '⚙️ מאפיינים', '🎨 עיצוב'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '12px',
                  marginBottom: '8px',
                  backgroundColor: activeTab === tab ? '#3b82f6' : '#374151',
                  color: '#f8fafc',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.2s'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* תוכן הטאבים */}
          {activeTab === '🧩 רכיבים' && (
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#f8fafc' }}>ספריית רכיבים</h3>
              {['Hero Section', 'Text Block', 'Button', 'Image', 'Gallery', 'Video', 'Contact Form'].map((component) => (
                <div
                  key={component}
                  draggable
                  onDragStart={(e) => handleDragStart(e, component)}
                  style={{
                    padding: '15px',
                    marginBottom: '10px',
                    backgroundColor: '#374151',
                    borderRadius: '8px',
                    cursor: 'grab',
                    transition: 'all 0.2s',
                    border: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#4b5563';
                    e.target.style.borderColor = '#3b82f6';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#374151';
                    e.target.style.borderColor = 'transparent';
                  }}
                >
                  <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    {component === 'Hero Section' && '🦸‍♂️'} 
                    {component === 'Text Block' && '📝'} 
                    {component === 'Button' && '🔘'} 
                    {component === 'Image' && '🖼️'} 
                    {component === 'Gallery' && '🎨'} 
                    {component === 'Video' && '🎬'} 
                    {component === 'Contact Form' && '📧'} 
                    {component}
                  </div>
                  <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                    גרור לתוך העמוד
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === '⚙️ מאפיינים' && selectedElement && (
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#f8fafc' }}>
                עריכת {selectedElement.type}
              </h3>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#f8fafc' }}>תוכן:</label>
                <textarea
                  value={selectedElement.content}
                  onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #374151',
                    backgroundColor: '#374151',
                    color: '#f8fafc',
                    resize: 'vertical',
                    minHeight: '80px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#f8fafc' }}>רוחב:</label>
                <input
                  type="number"
                  value={selectedElement.width}
                  onChange={(e) => updateElement(selectedElement.id, { width: parseInt(e.target.value) })}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '6px',
                    border: '1px solid #374151',
                    backgroundColor: '#374151',
                    color: '#f8fafc'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#f8fafc' }}>גובה:</label>
                <input
                  type="number"
                  value={selectedElement.height}
                  onChange={(e) => updateElement(selectedElement.id, { height: parseInt(e.target.value) })}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '6px',
                    border: '1px solid #374151',
                    backgroundColor: '#374151',
                    color: '#f8fafc'
                  }}
                />
              </div>

              <button
                onClick={() => deleteElement(selectedElement.id)}
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                🗑️ מחק רכיב
              </button>
            </div>
          )}

          {activeTab === '🎨 עיצוב' && selectedElement && (
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#f8fafc' }}>עיצוב הרכיב</h3>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#f8fafc' }}>צבע רקע:</label>
                <input
                  type="color"
                  value={selectedElement.style.backgroundColor || '#ffffff'}
                  onChange={(e) => updateElement(selectedElement.id, { 
                    style: { ...selectedElement.style, backgroundColor: e.target.value }
                  })}
                  style={{
                    width: '100%',
                    height: '40px',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#f8fafc' }}>צבע טקסט:</label>
                <input
                  type="color"
                  value={selectedElement.style.color || '#000000'}
                  onChange={(e) => updateElement(selectedElement.id, { 
                    style: { ...selectedElement.style, color: e.target.value }
                  })}
                  style={{
                    width: '100%',
                    height: '40px',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#f8fafc' }}>גודל פונט:</label>
                <input
                  type="range"
                  min="12"
                  max="48"
                  value={parseInt(selectedElement.style.fontSize) || 16}
                  onChange={(e) => updateElement(selectedElement.id, { 
                    style: { ...selectedElement.style, fontSize: e.target.value + 'px' }
                  })}
                  style={{ width: '100%' }}
                />
                <div style={{ textAlign: 'center', color: '#9ca3af', fontSize: '12px' }}>
                  {parseInt(selectedElement.style.fontSize) || 16}px
                </div>
              </div>
            </div>
          )}
        </div>

        {/* כפתורי פעולה */}
        <div style={{ 
          position: 'absolute', 
          bottom: '20px', 
          left: '20px', 
          right: '20px' 
        }}>
          <button
            onClick={exportToHTML}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}
          >
            📥 ייצא לHTML
          </button>
          
          <button
            onClick={() => {
              setElements([]);
              setSelectedElement(null);
              toast.success('העמוד נוקה בהצלחה!');
            }}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#374151',
              color: '#f8fafc',
              border: '1px solid #4b5563',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            🗑️ נקה עמוד
          </button>
        </div>
      </div>

      {/* אזור העבודה */}
      <div style={{ flex: 1, position: 'relative', overflow: 'auto' }}>
        <div
          ref={canvasRef}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          style={{
            width: '100%',
            minHeight: '100%',
            backgroundColor: '#ffffff',
            position: 'relative',
            backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        >
          {elements.map(element => (
            <div
              key={element.id}
              onClick={() => handleElementClick(element)}
              style={{
                position: 'absolute',
                left: element.x,
                top: element.y,
                width: element.width,
                height: element.height,
                cursor: 'pointer',
                border: selectedElement?.id === element.id ? '2px solid #3b82f6' : '1px solid transparent',
                ...element.style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                userSelect: 'none'
              }}
            >
              {element.content}
              {selectedElement?.id === element.id && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: 'white',
                  cursor: 'move'
                }}>
                  ✋
                </div>
              )}
            </div>
          ))}
          
          {elements.length === 0 && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#6b7280',
              fontSize: '18px'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎨</div>
              <div>גרור רכיבים מהסרגל הצדדי לכאן</div>
              <div style={{ fontSize: '14px', marginTop: '10px' }}>
                התחל לבנות את האתר שלך עכשיו!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
