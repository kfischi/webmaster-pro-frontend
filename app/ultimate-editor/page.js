'use client';
import React, { useState, useRef } from 'react';

export default function UltimateEditor() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [viewport, setViewport] = useState('desktop');
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const viewports = {
    desktop: { width: 1200, height: 800, icon: '🖥️', label: 'Desktop' },
    tablet: { width: 768, height: 1024, icon: '📱', label: 'Tablet' },
    mobile: { width: 375, height: 667, icon: '📱', label: 'Mobile' }
  };

  const createElement = (type) => {
    const templates = {
      text: {
        type: 'text',
        content: 'טקסט חדש',
        width: 200,
        height: 50,
        style: {
          fontSize: '18px',
          fontWeight: '400',
          color: '#1f2937',
          backgroundColor: 'transparent',
          padding: '10px',
          borderRadius: '4px'
        }
      },
      heading: {
        type: 'text',
        content: 'כותרת ראשית',
        width: 400,
        height: 60,
        style: {
          fontSize: '32px',
          fontWeight: '700',
          color: '#1f2937',
          backgroundColor: 'transparent',
          padding: '15px',
          borderRadius: '4px'
        }
      },
      button: {
        type: 'button',
        content: 'לחץ כאן',
        width: 150,
        height: 50,
        style: {
          fontSize: '16px',
          fontWeight: '600',
          color: '#ffffff',
          backgroundColor: '#3b82f6',
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer'
        }
      },
      image: {
        type: 'image',
        content: '',
        src: '',
        width: 300,
        height: 200,
        style: {
          backgroundColor: '#f3f4f6',
          border: '2px dashed #d1d5db',
          borderRadius: '8px'
        }
      },
      video: {
        type: 'video',
        content: '',
        videoUrl: '',
        width: 560,
        height: 315,
        style: {
          backgroundColor: '#000000',
          borderRadius: '12px'
        }
      }
    };

    const template = templates[type];
    const newElement = {
      ...template,
      id: `${type}_${Date.now()}`,
      x: 100 + Math.random() * 200,
      y: 100 + Math.random() * 200,
      zIndex: elements.length + 1
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
    
    const maxX = viewports[viewport].width - selectedElement.width;
    const maxY = viewports[viewport].height - selectedElement.height;
    
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
    const viewport_info = viewports[viewport];
    
    const html = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>אתר נוצר עם WebMaster Pro Ultimate</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #ffffff;
            overflow-x: hidden;
        }
        .container { 
            position: relative; 
            width: ${viewport_info.width}px; 
            height: ${viewport_info.height}px;
            margin: 0 auto;
            background: #ffffff;
        }
        .element { position: absolute; }
        @media (max-width: 768px) {
            .container { width: 100%; }
            .element { position: relative !important; margin: 10px 0; }
        }
    </style>
</head>
<body>
    <div class="container">
        ${elements.map(el => {
          if (el.type === 'video' && el.videoUrl) {
            const embedUrl = getYouTubeEmbedUrl(el.videoUrl);
            return `<iframe class="element" src="${embedUrl}" style="
              left: ${el.x}px; top: ${el.y}px; 
              width: ${el.width}px; height: ${el.height}px;
              border: none; border-radius: ${el.style.borderRadius};
            " allowfullscreen></iframe>`;
          }
          
          if (el.type === 'image' && el.src) {
            return `<img class="element" src="${el.src}" style="
              left: ${el.x}px; top: ${el.y}px;
              width: ${el.width}px; height: ${el.height}px;
              ${Object.entries(el.style).map(([k,v]) => 
                `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${v}`
              ).join('; ')};
            " alt="${el.content || 'תמונה'}" />`;
          }
          
          return `<div class="element" style="
            left: ${el.x}px; top: ${el.y}px;
            width: ${el.width}px; height: ${el.height}px;
            ${Object.entries(el.style).map(([k,v]) => 
              `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${v}`
            ).join('; ')};
            display: flex; align-items: center; justify-content: center;
          ">${el.content || ''}</div>`;
        }).join('')}
    </div>
</body>
</html>`;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ultimate-website-${Date.now()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              🚀 Ultimate Editor
            </h1>
            <p className="text-gray-400 text-sm">האדיטור הכי מטורף ומקצועי</p>
          </div>
          
          {/* Viewport Selection */}
          <div className="flex bg-gray-700 rounded-lg p-1">
            {Object.entries(viewports).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setViewport(key)}
                className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-2 text-sm ${
                  viewport === key 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-600'
                }`}
              >
                <span>{config.icon}</span>
                {config.label}
                <span className="text-xs opacity-75">
                  {config.width}×{config.height}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={exportHTML}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium flex items-center gap-2 transition-all duration-200"
          >
            📤 ייצא אתר מושלם
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar - Tools */}
        <div className="w-80 bg-gray-800 border-r border-gray-700 p-4">
          <h3 className="font-semibold mb-4 text-gray-200">🛠️ כלי בניית אתרים</h3>
          
          {/* Quick Tools */}
          <div className="space-y-2 mb-6">
            <button
              onClick={() => createElement('heading')}
              className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-right transition-all duration-200 hover:scale-105"
            >
              📝 כותרת ראשית
            </button>
            <button
              onClick={() => createElement('text')}
              className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-right transition-all duration-200 hover:scale-105"
            >
              📄 פסקת טקסט
            </button>
            <button
              onClick={() => createElement('button')}
              className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-right transition-all duration-200 hover:scale-105"
            >
              🔘 כפתור פעולה
            </button>
            <button
              onClick={() => createElement('image')}
              className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-right transition-all duration-200 hover:scale-105"
            >
              🖼️ תמונה
            </button>
            <button
              onClick={() => createElement('video')}
              className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-right transition-all duration-200 hover:scale-105"
            >
              🎬 וידאו
            </button>
          </div>

          {/* Templates */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-200">🎨 תבניות מוכנות</h4>
            <button
              onClick={() => {
                // Hero Section Template
                const heroElements = [
                  {
                    id: 'hero-title',
                    type: 'text',
                    content: 'ברוכים הבאים לאתר שלנו',
                    x: 100,
                    y: 100,
                    width: 800,
                    height: 80,
                    zIndex: 1,
                    style: {
                      fontSize: '48px',
                      fontWeight: '700',
                      color: '#1f2937',
                      backgroundColor: 'transparent',
                      padding: '20px',
                      borderRadius: '0px'
                    }
                  },
                  {
                    id: 'hero-subtitle',
                    type: 'text',
                    content: 'פתרונות מתקדמים לעסק שלך',
                    x: 100,
                    y: 200,
                    width: 800,
                    height: 50,
                    zIndex: 2,
                    style: {
                      fontSize: '24px',
                      fontWeight: '400',
                      color: '#666666',
                      backgroundColor: 'transparent',
                      padding: '10px',
                      borderRadius: '0px'
                    }
                  },
                  {
                    id: 'hero-button',
                    type: 'button',
                    content: 'התחל עכשיו',
                    x: 400,
                    y: 300,
                    width: 200,
                    height: 60,
                    zIndex: 3,
                    style: {
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#ffffff',
                      backgroundColor: '#3b82f6',
                      padding: '15px 30px',
                      borderRadius: '12px',
                      border: 'none',
                      cursor: 'pointer'
                    }
                  }
                ];
                setElements([...elements, ...heroElements]);
              }}
              className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-right transition-all duration-200"
            >
              🎯 Hero Section מושלם
            </button>
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-auto bg-gray-100 p-8">
            <div className="flex items-center justify-center min-h-full">
              <div
                ref={canvasRef}
                className="bg-white shadow-2xl relative transition-all duration-300"
                style={{
                  width: viewports[viewport].width,
                  height: viewports[viewport].height,
                  backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setSelectedElement(null);
                  }
                }}
              >
                {/* Empty State */}
                {elements.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center text-gray-400">
                      <div className="text-6xl mb-4">🚀</div>
                      <h3 className="text-2xl font-bold mb-2">האדיטור הכי מטורף!</h3>
                      <p className="text-lg mb-4">בחר כלי או תבנית כדי להתחיל</p>
                      <div className="text-sm space-y-1">
                        <p>💡 גרור אלמנטים למיקום</p>
                        <p>🎯 לחץ לבחירה ועריכה</p>
                        <p>📱 רספונסיבי לכל מכשיר</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Elements */}
                {elements.map((element) => (
                  <div
                    key={element.id}
                    className={`absolute select-none cursor-move transition-all duration-200 ${
                      selectedElement && selectedElement.id === element.id
                        ? 'ring-2 ring-blue-500 ring-offset-2 shadow-xl z-50' 
                        : 'hover:ring-1 hover:ring-gray-300'
                    }`}
                    style={{
                      left: element.x,
                      top: element.y,
                      width: element.width,
                      height: element.height,
                      zIndex: element.zIndex + (selectedElement && selectedElement.id === element.id ? 1000 : 0),
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
                      <div className="w-full h-full rounded overflow-hidden">
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
                            </div>
                          </div>
                        )}
                      </div>
                    ) : element.type === 'image' ? (
                      element.src ? (
                        <img
                          src={element.src}
                          alt={element.content || 'תמונה'}
                          className="w-full h-full object-cover rounded"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded bg-gray-50">
                          <div className="text-center text-gray-500">
                            <div className="text-2xl mb-2">🖼️</div>
                            <p className="text-sm">לחץ להוספת תמונה</p>
                          </div>
                        </div>
                      )
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-medium">
                        {element.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 p-4">
          <h3 className="font-semibold mb-4 text-gray-200">⚙️ מאפיינים</h3>
          
          {selectedElement ? (
            <div className="space-y-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                <h4 className="font-semibold text-white mb-2">🎯 אלמנט נבחר</h4>
                <p className="text-gray-300 text-sm">{selectedElement.type}</p>
              </div>

              {/* Content */}
              {(selectedElement.type === 'text' || selectedElement.type === 'button') && (
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">📝 תוכן</label>
                  <textarea
                    value={selectedElement.content}
                    onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded resize-none text-white"
                    rows="3"
                  />
                </div>
              )}

              {/* Video URL */}
              {selectedElement.type === 'video' && (
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">🎬 URL וידאו</label>
                  <input
                    type="url"
                    value={selectedElement.videoUrl || ''}
                    onChange={(e) => updateElement(selectedElement.id, { videoUrl: e.target.value })}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm text-white"
                  />
                </div>
              )}

              {/* Image URL */}
              {selectedElement.type === 'image' && (
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">🖼️ URL תמונה</label>
                  <input
                    type="url"
                    value={selectedElement.src || ''}
                    onChange={(e) => updateElement(selectedElement.id, { src: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm text-white"
                  />
                </div>
              )}

              {/* Position & Size */}
              <div>
                <h4 className="font-medium text-gray-200 mb-3">📐 מיקום וגודל</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">X</label>
                    <input
                      type="number"
                      value={Math.round(selectedElement.x)}
                      onChange={(e) => updateElement(selectedElement.id, { x: parseInt(e.target.value) || 0 })}
                      className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Y</label>
                    <input
                      type="number"
                      value={Math.round(selectedElement.y)}
                      onChange={(e) => updateElement(selectedElement.id, { y: parseInt(e.target.value) || 0 })}
                      className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">רוחב</label>
                    <input
                      type="number"
                      value={selectedElement.width}
                      onChange={(e) => updateElement(selectedElement.id, { width: parseInt(e.target.value) || 100 })}
                      className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">גובה</label>
                    <input
                      type="number"
                      value={selectedElement.height}
                      onChange={(e) => updateElement(selectedElement.id, { height: parseInt(e.target.value) || 100 })}
                      className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-sm text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div>
                <h4 className="font-medium text-gray-200 mb-3">🎨 צבעים</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-2">צבע רקע</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={selectedElement.style?.backgroundColor || '#ffffff'}
                        onChange={(e) => updateElement(selectedElement.id, { 
                          style: { ...selectedElement.style, backgroundColor: e.target.value }
                        })}
                        className="w-10 h-8 border border-gray-600 rounded"
                      />
                      <input
                        type="text"
                        value={selectedElement.style?.backgroundColor || '#ffffff'}
                        onChange={(e) => updateElement(selectedElement.id, { 
                          style: { ...selectedElement.style, backgroundColor: e.target.value }
                        })}
                        className="flex-1 px-2 py-1 bg-gray-700 border border-gray-600 rounded text-xs text-white"
                      />
                    </div>
                  </div>
                  
                  {selectedElement.type !== 'image' && selectedElement.type !== 'video' && (
                    <div>
                      <label className="block text-xs text-gray-400 mb-2">צבע טקסט</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={selectedElement.style?.color || '#000000'}
                          onChange={(e) => updateElement(selectedElement.id, { 
                            style: { ...selectedElement.style, color: e.target.value }
                          })}
                          className="w-10 h-8 border border-gray-600 rounded"
                        />
                        <input
                          type="text"
                          value={selectedElement.style?.color || '#000000'}
                          onChange={(e) => updateElement(selectedElement.id, { 
                            style: { ...selectedElement.style, color: e.target.value }
                          })}
                          className="flex-1 px-2 py-1 bg-gray-700 border border-gray-600 rounded text-xs text-white"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Typography */}
              {selectedElement.type !== 'image' && selectedElement.type !== 'video' && (
                <div>
                  <h4 className="font-medium text-gray-200 mb-3">🔤 טיפוגרפיה</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-2">גודל גופן</label>
                      <select
                        value={selectedElement.style?.fontSize || '16px'}
                        onChange={(e) => updateElement(selectedElement.id, { 
                          style: { ...selectedElement.style, fontSize: e.target.value }
                        })}
                        className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-sm text-white"
                      >
                        <option value="12px">12px - קטן</option>
                        <option value="14px">14px - רגיל קטן</option>
                        <option value="16px">16px - רגיל</option>
                        <option value="18px">18px - בינוני</option>
                        <option value="20px">20px - גדול קטן</option>
                        <option value="24px">24px - גדול</option>
                        <option value="32px">32px - כותרת</option>
                        <option value="48px">48px - כותרת גדולה</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-xs text-gray-400 mb-2">עובי גופן</label>
                      <select
                        value={selectedElement.style?.fontWeight || '400'}
                        onChange={(e) => updateElement(selectedElement.id, { 
                          style: { ...selectedElement.style, fontWeight: e.target.value }
                        })}
                        className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-sm text-white"
                      >
                        <option value="300">300 - דק</option>
                        <option value="400">400 - רגיל</option>
                        <option value="600">600 - בולט</option>
                        <option value="700">700 - עבה</option>
                        <option value="900">900 - עבה מאוד</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Border Radius */}
              <div>
                <label className="block text-xs text-gray-400 mb-2">עיגול פינות</label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={parseInt(selectedElement.style?.borderRadius) || 0}
                  onChange={(e) => updateElement(selectedElement.id, { 
                    style: { ...selectedElement.style, borderRadius: `${e.target.value}px` }
                  })}
                  className="w-full"
                />
                <div className="text-xs text-gray-400 mt-1 text-center">
                  {selectedElement.style?.borderRadius || '0px'}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-gray-700">
                <button
                  onClick={() => deleteElement(selectedElement.id)}
                  className="w-full py-2 bg-red-600 hover:bg-red-700 rounded text-sm flex items-center justify-center gap-2"
                >
                  🗑️ מחק אלמנט
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">בחר אלמנט</h3>
              <p className="text-gray-400 text-sm mb-4">לחץ על אלמנט כדי לערוך את המאפיינים שלו</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>💡 טיפים:</p>
                <p>• גרור כדי להזיז</p>
                <p>• לחץ לבחירה</p>
                <p>• עדכן תוכן ועיצוב</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-800 border-t border-gray-700 px-4 py-2 text-xs text-gray-400 flex justify-between items-center">
        <div className="flex gap-6">
          <span>🎨 אלמנטים: {elements.length}</span>
          <span>📐 Canvas: {viewports[viewport].width}×{viewports[viewport].height}</span>
          {selectedElement && (
            <span>🎯 נבחר: {selectedElement.type}</span>
          )}
        </div>
        <div className="flex gap-4 text-xs">
          <span>🚀 Ultimate Editor v2.0</span>
          <span>💾 מוכן לייצוא</span>
        </div>
      </div>
    </div>
  );
}
