'use client';
import React, { useState, useRef } from 'react';

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
        padding: '8px'
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
        padding: '12px 24px'
      }
    },
    image: {
      type: 'image',
      content: 'תמונה',
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
      controls: true
    },
    form: {
      type: 'form',
      content: 'טופס יצירת קשר',
      width: 320,
      height: 250,
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
    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(youtubeRegex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  const createElement = (templateKey) => {
    const template = elementTemplates[templateKey];
    const newElement = {
      ...template,
      id: Date.now(),
      x: Math.random() * 300 + 100,
      y: Math.random() * 200 + 100,
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
    if (selectedElement && selectedElement.id === id) {
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

  const handleMouseMove = (e) => {
    if (!isDragging || !selectedElement) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragOffset.x;
    const newY = e.clientY - rect.top - dragOffset.y;
    updateElement(selectedElement.id, {
      x: Math.max(0, newX),
      y: Math.max(0, newY)
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const exportHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>אתר עם וידאו - WebMaster Pro</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
        .container { position: relative; width: ${viewports[viewport].width}px; margin: 0 auto; min-height: 600px; background: white; }
        .element { position: absolute; }
    </style>
</head>
<body>
    <div class="container">
        ${elements.map(el => {
          if (el.type === 'video' && el.videoUrl) {
            const embedUrl = getYouTubeEmbedUrl(el.videoUrl);
            return `<iframe src="${embedUrl}" style="
              left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px;
              position: absolute; border: none; border-radius: ${el.style.borderRadius};
            " allowfullscreen></iframe>`;
          }
          return `<div class="element" style="
            left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px;
            ${Object.entries(el.style).map(([k,v]) => `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${v}`).join('; ')};
            position: absolute; display: flex; align-items: center; justify-content: center;
          ">${el.content}</div>`;
        }).join('')}
    </div>
</body>
</html>`;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'website-with-video.html';
    a.click();
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      <div className="w-80 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            🎬 WebMaster Pro Video Editor
          </h1>
        </div>

        <div className="p-4 border-b">
          <h3 className="font-semibold text-gray-900 mb-3">כלי עיצוב</h3>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(elementTemplates).map(([key, template]) => {
              const icons = { text: '📝', button: '🔘', image: '🖼️', video: '🎬', form: '📋' };
              const labels = { text: 'טקסט', button: 'כפתור', image: 'תמונה', video: 'וידאו', form: 'טופס' };
              
              return (
                <button
                  key={key}
                  onClick={() => createElement(key)}
                  className="p-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-lg transition-colors flex flex-col items-center gap-1"
                >
                  <span className="text-lg">{icons[key]}</span>
                  <span className="text-xs font-medium">{labels[key]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <h3 className="font-semibold text-gray-900 mb-3">מאפיינים</h3>
          
          {selectedElement ? (
            <div className="space-y-4">
              {selectedElement.type !== 'image' && selectedElement.type !== 'video' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">תוכן</label>
                  <input
                    type="text"
                    value={selectedElement.content}
                    onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              )}

              {selectedElement.type === 'video' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">🎬 URL וידאו</label>
                  <input
                    type="url"
                    value={selectedElement.videoUrl || ''}
                    onChange={(e) => updateElement(selectedElement.id, { videoUrl: e.target.value })}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-3 py-2 border rounded-md text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    🎥 תומך ב-YouTube, Vimeo או קבצי וידאו ישירים
                  </p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">צבע רקע</label>
                <input
                  type="color"
                  value={selectedElement.style.backgroundColor || '#ffffff'}
                  onChange={(e) => updateElement(selectedElement.id, { 
                    style: { ...selectedElement.style, backgroundColor: e.target.value }
                  })}
                  className="w-full h-10 border rounded"
                />
              </div>

              {selectedElement.type !== 'image' && selectedElement.type !== 'video' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">צבע טקסט</label>
                  <input
                    type="color"
                    value={selectedElement.style.color || '#000000'}
                    onChange={(e) => updateElement(selectedElement.id, { 
                      style: { ...selectedElement.style, color: e.target.value }
                    })}
                    className="w-full h-10 border rounded"
                  />
                </div>
              )}

              <button
                onClick={() => deleteElement(selectedElement.id)}
                className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
              >
                🗑️ מחק אלמנט
              </button>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">בחר אלמנט לעריכה</p>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b p-4 flex items-center justify-between">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {Object.entries(viewports).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setViewport(key)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  viewport === key ? 'bg-white shadow text-blue-600' : 'text-gray-600'
                }`}
              >
                {config.icon} {config.label}
              </button>
            ))}
          </div>
          
          <button
            onClick={exportHTML}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            📤 ייצא HTML עם וידאו
          </button>
        </div>

        <div className="flex-1 overflow-auto bg-gray-100 p-8">
          <div
            ref={canvasRef}
            className="mx-auto bg-white shadow-lg relative"
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
            {elements.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-xl font-bold mb-2">אדיטור וידאו חדש!</h3>
                  <p className="text-sm">בחר כלי וצור אתר עם וידאו</p>
                </div>
              </div>
            )}

            {elements.map((element) => (
              <div
                key={element.id}
                className={`absolute cursor-move select-none ${
                  selectedElement && selectedElement.id === element.id ? 'ring-2 ring-blue-500' : ''
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
              >
                {element.type === 'video' ? (
                  <div className="w-full h-full rounded overflow-hidden">
                    {element.videoUrl ? (
                      getYouTubeEmbedUrl(element.videoUrl).includes('youtube.com') ? (
                        <iframe
                          src={getYouTubeEmbedUrl(element.videoUrl)}
                          className="w-full h-full"
                          frameBorder="0"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          src={element.videoUrl}
                          className="w-full h-full object-cover"
                          controls={element.controls}
                        />
                      )
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white rounded">
                        <div className="text-center">
                          <div className="text-3xl mb-2">🎬</div>
                          <p className="text-sm">הוסף URL וידאו</p>
                          <p className="text-xs mt-1">YouTube או וידאו ישיר</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : element.type === 'form' ? (
                  <div className="w-full h-full p-4">
                    <h3 className="font-semibold mb-3">{element.content}</h3>
                    <input type="text" placeholder="שם" className="w-full p-2 border rounded mb-2 text-sm" />
                    <input type="email" placeholder="אימייל" className="w-full p-2 border rounded mb-2 text-sm" />
                    <button className="w-full p-2 bg-blue-500 text-white rounded text-sm">שלח</button>
                  </div>
                ) : (
                  element.content
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
