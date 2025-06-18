'use client';
import React, { useState, useRef } from 'react';

export default function VideoEditor() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const createElement = (type) => {
    const newElement = {
      id: Date.now(),
      type: type,
      x: 100 + Math.random() * 200,
      y: 100 + Math.random() * 200,
      width: type === 'video' ? 400 : 200,
      height: type === 'video' ? 225 : 50,
      content: type === 'video' ? '' : 'תוכן חדש',
      videoUrl: type === 'video' ? '' : null,
      style: {
        backgroundColor: type === 'video' ? '#1f2937' : '#3b82f6',
        color: '#ffffff',
        padding: '8px',
        borderRadius: '8px',
        border: 'none'
      }
    };
    setElements([...elements, newElement]);
    setSelectedElement(newElement);
  };

  const updateElement = (id, updates) => {
    setElements(prev => prev.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
    if (selectedElement && selectedElement.id === id) {
      setSelectedElement(prev => ({ ...prev, ...updates }));
    }
  };

  const deleteElement = (id) => {
    setElements(prev => prev.filter(el => el.id !== id));
    setSelectedElement(null);
  };

  const handleMouseDown = (e, element) => {
    e.preventDefault();
    e.stopPropagation();
    
    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - element.x;
    const offsetY = e.clientY - rect.top - element.y;
    
    setSelectedElement(element);
    setIsDragging(true);
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !selectedElement) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragOffset.x;
    const newY = e.clientY - rect.top - dragOffset.y;
    
    // Boundaries check
    const maxX = 1200 - selectedElement.width;
    const maxY = 800 - selectedElement.height;
    
    updateElement(selectedElement.id, {
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  const exportHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>אתר עם וידאו - WebMaster Pro</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f9fafb; }
        .container { position: relative; width: 1200px; height: 800px; margin: 0 auto; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .element { position: absolute; }
        @media (max-width: 768px) {
            .container { width: 100%; height: auto; }
            .element { position: relative !important; margin: 10px 0; }
        }
    </style>
</head>
<body>
    <div class="container">
        ${elements.map(el => {
          if (el.type === 'video' && el.videoUrl) {
            const embedUrl = getYouTubeEmbedUrl(el.videoUrl);
            return `<iframe src="${embedUrl}" style="left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px; position: absolute; border: none; border-radius: 8px;" allowfullscreen></iframe>`;
          }
          return `<div class="element" style="left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px; background: ${el.style.backgroundColor}; color: ${el.style.color}; padding: ${el.style.padding}; border-radius: ${el.style.borderRadius}; position: absolute; display: flex; align-items: center; justify-content: center; font-weight: 600;">${el.content}</div>`;
        }).join('')}
    </div>
</body>
</html>`;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `website-${Date.now()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-900">
            🎬 WebMaster Pro
          </h1>
          <p className="text-sm text-gray-500">אדיטור וידאו</p>
        </div>

        {/* Tools */}
        <div className="p-4 border-b">
          <h3 className="font-semibold text-gray-900 mb-3">כלי עיצוב</h3>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => createElement('text')}
              className="p-3 bg-gray-50 hover:bg-blue-50 border rounded-lg flex flex-col items-center gap-1 transition-all hover:scale-105"
            >
              <span className="text-lg">📝</span>
              <span className="text-xs">טקסט</span>
            </button>
            <button
              onClick={() => createElement('button')}
              className="p-3 bg-gray-50 hover:bg-blue-50 border rounded-lg flex flex-col items-center gap-1 transition-all hover:scale-105"
            >
              <span className="text-lg">🔘</span>
              <span className="text-xs">כפתור</span>
            </button>
            <button
              onClick={() => createElement('image')}
              className="p-3 bg-gray-50 hover:bg-blue-50 border rounded-lg flex flex-col items-center gap-1 transition-all hover:scale-105"
            >
              <span className="text-lg">🖼️</span>
              <span className="text-xs">תמונה</span>
            </button>
            <button
              onClick={() => createElement('video')}
              className="p-3 bg-gray-50 hover:bg-blue-50 border rounded-lg flex flex-col items-center gap-1 transition-all hover:scale-105"
            >
              <span className="text-lg">🎬</span>
              <span className="text-xs">וידאו</span>
            </button>
            <button
              onClick={() => createElement('form')}
              className="p-3 bg-gray-50 hover:bg-blue-50 border rounded-lg flex flex-col items-center gap-1 transition-all hover:scale-105"
            >
              <span className="text-lg">📋</span>
              <span className="text-xs">טופס</span>
            </button>
          </div>
        </div>

        {/* Properties */}
        <div className="flex-1 p-4 overflow-y-auto">
          <h3 className="font-semibold text-gray-900 mb-3">מאפיינים</h3>
          
          {selectedElement ? (
            <div className="space-y-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-blue-900">
                  🎯 נבחר: {selectedElement.type}
                </p>
              </div>

              {selectedElement.type !== 'video' && selectedElement.type !== 'image' && (
                <div>
                  <label className="block text-sm font-medium mb-2">📝 תוכן</label>
                  <textarea
                    value={selectedElement.content}
                    onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                    className="w-full px-3 py-2 border rounded resize-none"
                    rows="3"
                  />
                </div>
              )}

              {selectedElement.type === 'video' && (
                <div>
                  <label className="block text-sm font-medium mb-2">🎬 URL וידאו</label>
                  <input
                    type="url"
                    value={selectedElement.videoUrl || ''}
                    onChange={(e) => updateElement(selectedElement.id, { videoUrl: e.target.value })}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    🎥 תומך ב-YouTube ו-Vimeo
                  </p>
                </div>
              )}

              {/* Position & Size */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium mb-1">📍 X</label>
                  <input
                    type="number"
                    value={Math.round(selectedElement.x)}
                    onChange={(e) => updateElement(selectedElement.id, { x: parseInt(e.target.value) || 0 })}
                    className="w-full px-2 py-1 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">📍 Y</label>
                  <input
                    type="number"
                    value={Math.round(selectedElement.y)}
                    onChange={(e) => updateElement(selectedElement.id, { y: parseInt(e.target.value) || 0 })}
                    className="w-full px-2 py-1 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">📏 רוחב</label>
                  <input
                    type="number"
                    value={selectedElement.width}
                    onChange={(e) => updateElement(selectedElement.id, { width: parseInt(e.target.value) || 100 })}
                    className="w-full px-2 py-1 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">📏 גובה</label>
                  <input
                    type="number"
                    value={selectedElement.height}
                    onChange={(e) => updateElement(selectedElement.id, { height: parseInt(e.target.value) || 100 })}
                    className="w-full px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">🎨 צבע רקע</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={selectedElement.style.backgroundColor}
                    onChange={(e) => updateElement(selectedElement.id, { 
                      style: { ...selectedElement.style, backgroundColor: e.target.value }
                    })}
                    className="w-12 h-8 border rounded"
                  />
                  <input
                    type="text"
                    value={selectedElement.style.backgroundColor}
                    onChange={(e) => updateElement(selectedElement.id, { 
                      style: { ...selectedElement.style, backgroundColor: e.target.value }
                    })}
                    className="flex-1 px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>

              {selectedElement.type !== 'video' && selectedElement.type !== 'image' && (
                <div>
                  <label className="block text-sm font-medium mb-2">✏️ צבע טקסט</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={selectedElement.style.color}
                      onChange={(e) => updateElement(selectedElement.id, { 
                        style: { ...selectedElement.style, color: e.target.value }
                      })}
                      className="w-12 h-8 border rounded"
                    />
                    <input
                      type="text"
                      value={selectedElement.style.color}
                      onChange={(e) => updateElement(selectedElement.id, { 
                        style: { ...selectedElement.style, color: e.target.value }
                      })}
                      className="flex-1 px-2 py-1 border rounded text-sm"
                    />
                  </div>
                </div>
              )}

              <button
                onClick={() => deleteElement(selectedElement.id)}
                className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
              >
                🗑️ מחק אלמנט
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-4xl mb-2">🎯</div>
              <p className="text-gray-500 text-sm">בחר אלמנט לעריכה</p>
              <p className="text-gray-400 text-xs mt-1">לחץ על אלמנט או צור חדש</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b p-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Canvas</h2>
            <p className="text-xs text-gray-500">גרור אלמנטים כדי להזיז אותם</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setElements([])}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded text-sm"
            >
              🗑️ נקה הכל
            </button>
            <button
              onClick={exportHTML}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              📤 ייצא HTML
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-gray-100 p-8">
          <div
            ref={canvasRef}
            className="mx-auto bg-white shadow-lg relative cursor-default"
            style={{
              width: 1200,
              height: 800,
              backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onClick={() => setSelectedElement(null)}
          >
            {elements.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 pointer-events-none">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-xl font-bold mb-2">אדיטור וידאו!</h3>
                  <p className="text-sm">בחר כלי והתחל לעצב</p>
                  <p className="text-xs mt-1">💡 גרור אלמנטים כדי להזיז אותם</p>
                </div>
              </div>
            )}

            {elements.map((element) => (
              <div
                key={element.id}
                className={`absolute select-none transition-all duration-200 ${
                  selectedElement && selectedElement.id === element.id 
                    ? 'ring-2 ring-blue-500 ring-offset-2 shadow-lg cursor-move' 
                    : 'hover:ring-1 hover:ring-gray-300 cursor-move'
                }`}
                style={{
                  left: element.x,
                  top: element.y,
                  width: element.width,
                  height: element.height,
                  ...element.style,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseDown={(e) => handleMouseDown(e, element)}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedElement(element);
                }}
              >
                {element.type === 'video' ? (
                  <div className="w-full h-full rounded overflow-hidden pointer-events-none">
                    {element.videoUrl ? (
                      <iframe
                        src={getYouTubeEmbedUrl(element.videoUrl)}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white rounded">
                        <div className="text-center">
                          <div className="text-3xl mb-2">🎬</div>
                          <p className="text-sm">הוסף URL וידאו</p>
                          <p className="text-xs mt-1">YouTube או Vimeo</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : element.type === 'form' ? (
                  <div className="w-full h-full p-4 pointer-events-none">
                    <h3 className="font-semibold mb-3 text-gray-800">טופס יצירת קשר</h3>
                    <input type="text" placeholder="שם מלא" className="w-full p-2 border rounded mb-2 text-sm" readOnly />
                    <input type="email" placeholder="אימייל" className="w-full p-2 border rounded mb-2 text-sm" readOnly />
                    <button className="w-full p-2 bg-blue-500 text-white rounded text-sm">שלח</button>
                  </div>
                ) : element.type === 'image' ? (
                  <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded bg-gray-50 pointer-events-none">
                    <div className="text-center text-gray-500">
                      <div className="text-2xl mb-1">🖼️</div>
                      <p className="text-xs">תמונה</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-semibold pointer-events-none">
                    {element.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
