'use client';
import React, { useState } from 'react';

export default function VideoEditor() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

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
        borderRadius: '8px'
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
    </style>
</head>
<body>
    <div class="container">
        ${elements.map(el => {
          if (el.type === 'video' && el.videoUrl) {
            const embedUrl = getYouTubeEmbedUrl(el.videoUrl);
            return `<iframe src="${embedUrl}" style="left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px; position: absolute; border: none; border-radius: 8px;" allowfullscreen></iframe>`;
          }
          return `<div class="element" style="left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px; background: ${el.style.backgroundColor}; color: ${el.style.color}; padding: ${el.style.padding}; border-radius: ${el.style.borderRadius}; position: absolute; display: flex; align-items: center; justify-content: center;">${el.content}</div>`;
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
              className="p-3 bg-gray-50 hover:bg-blue-50 border rounded-lg flex flex-col items-center gap-1"
            >
              <span className="text-lg">📝</span>
              <span className="text-xs">טקסט</span>
            </button>
            <button
              onClick={() => createElement('button')}
              className="p-3 bg-gray-50 hover:bg-blue-50 border rounded-lg flex flex-col items-center gap-1"
            >
              <span className="text-lg">🔘</span>
              <span className="text-xs">כפתור</span>
            </button>
            <button
              onClick={() => createElement('image')}
              className="p-3 bg-gray-50 hover:bg-blue-50 border rounded-lg flex flex-col items-center gap-1"
            >
              <span className="text-lg">🖼️</span>
              <span className="text-xs">תמונה</span>
            </button>
            <button
              onClick={() => createElement('video')}
              className="p-3 bg-gray-50 hover:bg-blue-50 border rounded-lg flex flex-col items-center gap-1"
            >
              <span className="text-lg">🎬</span>
              <span className="text-xs">וידאו</span>
            </button>
          </div>
        </div>

        {/* Properties */}
        <div className="flex-1 p-4">
          <h3 className="font-semibold text-gray-900 mb-3">מאפיינים</h3>
          
          {selectedElement ? (
            <div className="space-y-4">
              {selectedElement.type !== 'video' && (
                <div>
                  <label className="block text-sm font-medium mb-2">תוכן</label>
                  <input
                    type="text"
                    value={selectedElement.content}
                    onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                    className="w-full px-3 py-2 border rounded"
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
                  <p className="text-xs text-gray-500 mt-1">תומך ב-YouTube</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">צבע רקע</label>
                <input
                  type="color"
                  value={selectedElement.style.backgroundColor}
                  onChange={(e) => updateElement(selectedElement.id, { 
                    style: { ...selectedElement.style, backgroundColor: e.target.value }
                  })}
                  className="w-full h-10 border rounded"
                />
              </div>

              <button
                onClick={() => deleteElement(selectedElement.id)}
                className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                🗑️ מחק
              </button>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">בחר אלמנט לעריכה</p>
          )}
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Canvas</h2>
          <button
            onClick={exportHTML}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            📤 ייצא HTML
          </button>
        </div>

        <div className="flex-1 overflow-auto bg-gray-100 p-8">
          <div
            className="mx-auto bg-white shadow-lg relative"
            style={{
              width: 1200,
              height: 800,
              backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          >
            {elements.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-xl font-bold mb-2">אדיטור וידאו!</h3>
                  <p className="text-sm">בחר כלי והתחל לעצב</p>
                </div>
              </div>
            )}

            {elements.map((element) => (
              <div
                key={element.id}
                className={`absolute cursor-pointer select-none ${
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
                onClick={() => setSelectedElement(element)}
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
