'use client';
import React, { useState, useRef, useCallback } from 'react';

export default function VideoEditor() {
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

  const elementTemplates = {
    text: {
      type: 'text',
      content: 'כותרת חדשה',
      width: 200,
      height: 40,
      style: {
        fontSize: '24px',
        fontWeight: '600',
        color: '#1f2937',
        backgroundColor: 'transparent',
        padding: '8px',
        borderRadius: '0px'
      }
    },
    paragraph: {
      type: 'paragraph',
      content: 'פסקה חדשה עם טקסט מעניין',
      width: 300,
      height: 80,
      style: {
        fontSize: '16px',
        fontWeight: '400',
        color: '#374151',
        backgroundColor: 'transparent',
        padding: '12px',
        borderRadius: '0px',
        lineHeight: '1.6'
      }
    },
    button: {
      type: 'button',
      content: 'לחץ כאן',
      width: 140,
      height: 48,
      style: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#ffffff',
        backgroundColor: '#3b82f6',
        borderRadius: '8px',
        padding: '12px 24px',
        border: 'none'
      }
    },
    image: {
      type: 'image',
      content: '🖼️ תמונה',
      width: 200,
      height: 150,
      style: {
        backgroundColor: '#f3f4f6',
        border: '2px dashed #d1d5db',
        borderRadius: '8px'
      }
    },
    video: {
      type: 'video',
      content: '',
      width: 400,
      height: 225,
      style: {
        backgroundColor: '#1f2937',
        borderRadius: '12px'
      },
      videoUrl: '',
      controls: true,
      autoplay: false,
      muted: true,
      loop: false
    },
    form: {
      type: 'form',
      content: 'טופס יצירת קשר',
      width: 320,
      height: 280,
      style: {
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '20px'
      }
    }
  };

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    
    // YouTube URL patterns
    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(youtubeRegex);
    
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    
    // Vimeo URL pattern
    const vimeoRegex = /(?:vimeo\.com\/)([0-9]+)/;
    const vimeoMatch = url.match(vimeoRegex);
    
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }
    
    // Return original URL for direct video files
    return url;
  };

  const createElement = (templateKey) => {
    const template = elementTemplates[templateKey];
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    const canvasWidth = viewports[viewport].width;
    const canvasHeight = viewports[viewport].height;
    
    const newElement = {
      ...template,
      id: Date.now() + Math.random(),
      x: Math.min(Math.random() * 300 + 100, canvasWidth - template.width - 50),
      y: Math.min(Math.random() * 200 + 100, canvasHeight - template.height - 50),
      zIndex: elements.length + 1
    };
    
    setElements(prev => [...prev, newElement]);
    setSelectedElement(newElement);
  };

  const updateElement = (id, updates) => {
    setElements(prev => prev.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
    if (selectedElement?.id === id) {
      setSelectedElement(prev => ({ ...prev, ...updates }));
    }
  };

  const deleteElement = (id) => {
    setElements(prev => prev.filter(el => el.id !== id));
    if (selectedElement?.id === id) {
      setSelectedElement(null);
    }
  };

  const handleMouseDown = (e, element) => {
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    setSelectedElement(element);
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - rect.left - element.x,
      y: e.clientY - rect.top - element.y
    });
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !selectedElement) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragOffset.x;
    const newY = e.clientY - rect.top - dragOffset.y;
    
    // Snap to grid (20px)
    const snappedX = Math.round(newX / 20) * 20;
    const snappedY = Math.round(newY / 20) * 20;
    
    const canvasWidth = viewports[viewport].width;
    const canvasHeight = viewports[viewport].height;
    
    updateElement(selectedElement.id, {
      x: Math.max(0, Math.min(snappedX, canvasWidth - selectedElement.width)),
      y: Math.max(0, Math.min(snappedY, canvasHeight - selectedElement.height))
    });
  }, [isDragging, selectedElement, dragOffset, viewport]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const exportHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>אתר עם וידאו - WebMaster Pro</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            background: #f9fafb;
            min-height: 100vh;
        }
        .container { 
            position: relative; 
            width: ${viewports[viewport].width}px; 
            margin: 0 auto; 
            min-height: ${viewports[viewport].height}px; 
            background: white; 
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .element { position: absolute; }
        .video-element { position: absolute; }
        @media (max-width: 768px) {
            .container { width: 100%; margin: 0; }
            .element { transform: scale(0.8); transform-origin: top right; }
        }
    </style>
</head>
<body>
    <div class="container">
        ${elements.map(el => {
          if (el.type === 'video' && el.videoUrl) {
            const embedUrl = getYouTubeEmbedUrl(el.videoUrl);
            const isYouTubeOrVimeo = embedUrl.includes('youtube.com') || embedUrl.includes('vimeo.com');
            
            if (isYouTubeOrVimeo) {
              return `<iframe class="video-element" src="${embedUrl}" style="
                left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px;
                border: none; border-radius: ${el.style.borderRadius};
              " allowfullscreen></iframe>`;
            } else {
              return `<video class="video-element" style="
                left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px;
                border-radius: ${el.style.borderRadius};
              " ${el.controls ? 'controls' : ''} ${el.autoplay ? 'autoplay' : ''} ${el.muted ? 'muted' : ''} ${el.loop ? 'loop' : ''}>
                <source src="${el.videoUrl}" type="video/mp4">
                הדפדפן שלך לא תומך בתגי וידאו.
              </video>`;
            }
          }
          
          if (el.type === 'form') {
            return `<form class="element" style="
              left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px;
              ${Object.entries(el.style).map(([k,v]) => `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${v}`).join('; ')};
            ">
              <h3 style="margin-bottom: 15px; font-size: 18px; color: #1f2937;">${el.content}</h3>
              <input type="text" placeholder="שם מלא" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
              <input type="email" placeholder="כתובת אימייל" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
              <textarea placeholder="הודעה" style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #d1d5db; border-radius: 6px; height: 80px; resize: vertical;"></textarea>
              <button type="submit" style="width: 100%; padding: 12px; background: #3b82f6; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">שלח הודעה</button>
            </form>`;
          }
          
          return `<div class="element" style="
            left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px;
            ${Object.entries(el.style).map(([k,v]) => `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${v}`).join('; ')};
            display: flex; align-items: center; justify-content: center;
          ">${el.content}</div>`;
        }).join('')}
    </div>
    
    <script>
        // Add form submission handling
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('הטופס נשלח בהצלחה! (זוהי הדגמה)');
            });
        });
    </script>
</body>
</html>`;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `website-with-video-${new Date().toISOString().slice(0,10)}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            🎬 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WebMaster Pro</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">אדיטור וידאו מתקדם</p>
        </div>

        {/* Tools */}
        <div className="p-4 border-b">
          <h3 className="font-semibold text-gray-900 mb-3">🛠️ כלי עיצוב</h3>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(elementTemplates).map(([key, template]) => {
              const icons = { 
                text: '📝', 
                paragraph: '📄', 
                button: '🔘', 
                image: '🖼️', 
                video: '🎬', 
                form: '📋' 
              };
              const labels = { 
                text: 'כותרת', 
                paragraph: 'פסקה', 
                button: 'כפתור', 
                image: 'תמונה', 
                video: 'וידאו', 
                form: 'טופס' 
              };
              
              return (
                <button
                  key={key}
                  onClick={() => createElement(key)}
                  className="p-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-lg transition-all duration-200 flex flex-col items-center gap-1 hover:scale-105 hover:border-blue-300"
                >
                  <span className="text-lg">{icons[key]}</span>
                  <span className="text-xs font-medium text-gray-700">{labels[key]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Properties */}
        <div className="flex-1 p-4 overflow-y-auto">
          <h3 className="font-semibold text-gray-900 mb-3">⚙️ מאפיינים</h3>
          
          {selectedElement ? (
            <div className="space-y-4">
              {/* Element Info */}
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-blue-900">
                  🎯 נבחר: {selectedElement.type === 'video' ? '🎬 וידאו' : selectedElement.content?.substring(0, 20) + '...'}
                </p>
              </div>

              {/* Content */}
              {selectedElement.type !== 'image' && selectedElement.type !== 'video' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">📝 תוכן</label>
                  <textarea
                    value={selectedElement.content}
                    onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
                    rows="3"
                  />
                </div>
              )}

              {/* Video URL */}
              {selectedElement.type === 'video' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">🎬 URL וידאו</label>
                    <input
                      type="url"
                      value={selectedElement.videoUrl || ''}
                      onChange={(e) => updateElement(selectedElement.id, { videoUrl: e.target.value })}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <div className="mt-2 p-2 bg-gray-50 rounded text-xs text-gray-600">
                      <p>🎥 תומך ב:</p>
                      <p>• YouTube: youtube.com/watch?v=...</p>
                      <p>• Vimeo: vimeo.com/...</p>
                      <p>• וידאו ישיר: .mp4, .webm</p>
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-700">🎛️ בקרות וידאו</h4>
                    
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedElement.controls}
                        onChange={(e) => updateElement(selectedElement.id, { controls: e.target.checked })}
                        className="rounded"
                      />
                      <span className="text-sm">הצג פקדים</span>
                    </label>
                    
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedElement.autoplay}
                        onChange={(e) => updateElement(selectedElement.id, { autoplay: e.target.checked })}
                        className="rounded"
                      />
                      <span className="text-sm">הפעלה אוטומטית</span>
                    </label>
                    
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedElement.muted}
                        onChange={(e) => updateElement(selectedElement.id, { muted: e.target.checked })}
                        className="rounded"
                      />
                      <span className="text-sm">השתק בהתחלה</span>
                    </label>
                    
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedElement.loop}
                        onChange={(e) => updateElement(selectedElement.id, { loop: e.target.checked })}
                        className="rounded"
                      />
                      <span className="text-sm">חזרה בלולאה</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Position & Size */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">📍 X</label>
                  <input
                    type="number"
                    value={selectedElement.x}
                    onChange={(e) => updateElement(selectedElement.id, { x: parseInt(e.target.value) || 0 })}
                    className="w-full px-2 py-1 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">📍 Y</label>
                  <input
                    type="number"
                    value={selectedElement.y}
                    onChange={(e) => updateElement(selectedElement.id, { y: parseInt(e.target.value) || 0 })}
                    className="w-full px-2 py-1 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">📏 רוחב</label>
                  <input
                    type="number"
                    value={selectedElement.width}
                    onChange={(e) => updateElement(selectedElement.id, { width: parseInt(e.target.value) || 100 })}
                    className="w-full px-2 py-1 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">📏 גובה</label>
                  <input
                    type="number"
                    value={selectedElement.height}
                    onChange={(e) => updateElement(selectedElement.id, { height: parseInt(e.target.value) || 100 })}
                    className="w-full px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>

              {/* Colors */}
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">🎨 צבע רקע</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={selectedElement.style?.backgroundColor || '#ffffff'}
                      onChange={(e) => updateElement(selectedElement.id, { 
                        style: { ...selectedElement.style, backgroundColor: e.target.value }
                      })}
                      className="w-12 h-8 border rounded"
                    />
                    <input
                      type="text"
                      value={selectedElement.style?.backgroundColor || '#ffffff'}
                      onChange={(e) => updateElement(selectedElement.id, { 
                        style: { ...selectedElement.style, backgroundColor: e.target.value }
                      })}
                      className="flex-1 px-2 py-1 border rounded text-sm"
                    />
                  </div>
                </div>

                {selectedElement.type !== 'image' && selectedElement.type !== 'video' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">✏️ צבע טקסט</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={selectedElement.style?.color || '#000000'}
                        onChange={(e) => updateElement(selectedElement.id, { 
                          style: { ...selectedElement.style, color: e.target.value }
                        })}
                        className="w-12 h-8 border rounded"
                      />
                      <input
                        type="text"
                        value={selectedElement.style?.color || '#000000'}
                        onChange={(e) => updateElement(selectedElement.id, { 
                          style: { ...selectedElement.style, color: e.target.value }
                        })}
                        className="flex-1 px-2 py-1 border rounded text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Typography */}
              {selectedElement.type !== 'image' && selectedElement.type !== 'video' && (
                <div className="space-y-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">🔤 גודל גופן</label>
                    <select
                      value={selectedElement.style?.fontSize || '16px'}
                      onChange={(e) => updateElement(selectedElement.id, { 
                        style: { ...selectedElement.style, fontSize: e.target.value }
                      })}
                      className="w-full px-2 py-1 border rounded text-sm"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">💪 עובי גופן</label>
                    <select
                      value={selectedElement.style?.fontWeight || '400'}
                      onChange={(e) => updateElement(selectedElement.id, { 
                        style: { ...selectedElement.style, fontWeight: e.target.value }
                      })}
                      className="w-full px-2 py-1 border rounded text-sm"
                    >
                      <option value="300">300 - דק</option>
                      <option value="400">400 - רגיל</option>
                      <option value="600">600 - בולט</option>
                      <option value="700">700 - עבה</option>
                      <option value="900">900 - עבה מאוד</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Border Radius */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">🔘 עיגול פינות</label>
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
                <div className="text-xs text-gray-500 mt-1">
                  {selectedElement.style?.borderRadius || '0px'}
                </div>
              </div>

              <button
                onClick={() => deleteElement(selectedElement.id)}
                className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors flex items-center justify-center gap-2"
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
        {/* Toolbar */}
        <div className="bg-white border-b p-4 flex items-center justify-between">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {Object.entries(viewports).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setViewport(key)}
                className={`px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                  viewport === key 
                    ? 'bg-white shadow text-blue-600 transform scale-105' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {config.icon} {config.label}
                <span className="text-xs block text-gray-400">
                  {config.width}×{config.height}
                </span>
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setElements([])}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm"
            >
              🗑️ נקה הכל
            </button>
            <button
              onClick={exportHTML}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              📤 ייצא HTML עם וידאו
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 overflow-auto bg-gray-100 p-8">
          <div
            ref={canvasRef}
            className="mx-auto bg-white shadow-lg relative transition-all duration-300"
            style={{
              width: viewports[viewport].width,
              height: Math.max(viewports[viewport].height, 600),
              backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Empty State */}
            {elements.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-bounce">🎬</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-600">אדיטור וידאו מתקדם!</h3>
                  <p className="text-xs text-gray-400 mt-1">🎯 הוסף טקסט, כפתורים, תמונות ווידאו!</p>
                </div>
              </div>
            )}

            {/* Elements */}
            {elements.map((element) => (
              <div
                key={element.id}
                className={`absolute cursor-move select-none transition-all duration-200 ${
                  selectedElement?.id === element.id 
                    ? 'ring-2 ring-blue-500 ring-offset-2 shadow-lg transform scale-105' 
                    : 'hover:ring-1 hover:ring-gray-300'
                }`}
                style={{
                  left: element.x,
                  top: element.y,
                  width: element.width,
                  height: element.height,
                  ...element.style,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: element.zIndex + (selectedElement?.id === element.id ? 1000 : 0)
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
                      (() => {
                        const embedUrl = getYouTubeEmbedUrl(element.videoUrl);
                        if (embedUrl.includes('youtube.com') || embedUrl.includes('vimeo.com')) {
                          return (
                            <iframe
                              src={embedUrl}
                              className="w-full h-full"
                              frameBorder="0"
                              allowFullScreen
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                          );
                        } else {
                          return (
                            <video
                              src={element.videoUrl}
                              className="w-full h-full object-cover"
                              controls={element.controls}
                              autoPlay={element.autoplay}
                              muted={element.muted}
                              loop={element.loop}
                            />
                          );
                        }
                      })()
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded">
                        <div className="text-center p-4">
                          <div className="text-3xl mb-2 animate-pulse">🎬</div>
                          <p className="text-sm font-medium">הוסף URL וידאו</p>
                          <p className="text-xs mt-1 text-gray-300">YouTube, Vimeo או וידאו ישיר</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : element.type === 'form' ? (
                  <div className="w-full h-full p-4">
                    <h3 className="font-semibold mb-3 text-gray-800">{element.content}</h3>
                    <input 
                      type="text" 
                      placeholder="שם מלא" 
                      className="w-full p-2 border border-gray-300 rounded mb-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      readOnly
                    />
                    <input 
                      type="email" 
                      placeholder="כתובת אימייל" 
                      className="w-full p-2 border border-gray-300 rounded mb-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      readOnly
                    />
                    <textarea 
                      placeholder="הודעה" 
                      className="w-full p-2 border border-gray-300 rounded mb-3 text-sm h-16 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      readOnly
                    />
                    <button className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-medium transition-colors">
                      שלח הודעה
                    </button>
                  </div>
                ) : element.type === 'button' ? (
                  <button 
                    className="w-full h-full transition-all duration-200 hover:transform hover:scale-105 cursor-pointer"
                    style={{
                      fontSize: element.style.fontSize,
                      fontWeight: element.style.fontWeight,
                      color: element.style.color,
                      backgroundColor: element.style.backgroundColor,
                      borderRadius: element.style.borderRadius,
                      border: element.style.border || 'none'
                    }}
                  >
                    {element.content}
                  </button>
                ) : element.type === 'image' ? (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-300 rounded bg-gray-50">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🖼️</div>
                      <p className="text-xs">תמונה</p>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      fontSize: element.style.fontSize,
                      fontWeight: element.style.fontWeight,
                      color: element.style.color,
                      lineHeight: element.style.lineHeight || '1.4',
                      textAlign: element.type === 'paragraph' ? 'right' : 'center',
                      padding: element.style.padding
                    }}
                  >
                    {element.content}
                  </div>
                )}
              </div>
            ))}

            {/* Selection indicator */}
            {selectedElement && (
              <div
                className="absolute pointer-events-none"
                style={{
                  left: selectedElement.x - 2,
                  top: selectedElement.y - 2,
                  width: selectedElement.width + 4,
                  height: selectedElement.height + 4,
                  border: '2px solid #3b82f6',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)'
                }}
              >
                <div className="absolute -top-6 -left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  {selectedElement.type === 'video' ? '🎬' : ''} 
                  {selectedElement.type} - {selectedElement.width}×{selectedElement.height}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-white border-t px-4 py-2 text-xs text-gray-500 flex justify-between items-center">
          <div className="flex gap-4">
            <span>🎨 אלמנטים: {elements.length}</span>
            <span>📐 Canvas: {viewports[viewport].width}×{viewports[viewport].height}</span>
            {selectedElement && (
              <span>🎯 נבחר: {selectedElement.type} ({selectedElement.x}, {selectedElement.y})</span>
            )}
          </div>
          <div className="flex gap-2 text-xs">
            <span>💡 טיפים: גרור לתזוזה • לחץ לבחירה • כפלול עם Ctrl+D</span>
          </div>
        </div>
      </div>
    </div>
  );
}sm text-gray-500">בחר כלי מהסרגל השמאלי כדי להתחיל</p>
                  <p className="text-
