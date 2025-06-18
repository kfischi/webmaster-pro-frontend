'use client';
import React, { useState, useRef, useCallback } from 'react';

export default function EditorPage() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [viewport, setViewport] = useState('desktop');
  const [showGrid, setShowGrid] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
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
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        backgroundColor: 'transparent',
        padding: '8px',
        border: 'none',
        borderRadius: '0px',
        textAlign: 'right'
      }
    },
    paragraph: {
      type: 'text',
      content: 'זהו פסקת טקסט. ניתן לערוך את התוכן, הגופן, הצבע ועוד מאפיינים רבים.',
      width: 300,
      height: 80,
      style: {
        fontSize: '16px',
        fontWeight: '400',
        color: '#4b5563',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        backgroundColor: 'transparent',
        padding: '12px',
        border: 'none',
        borderRadius: '0px',
        textAlign: 'right'
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
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        backgroundColor: '#3b82f6',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 24px',
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }
    },
    image: {
      type: 'image',
      content: '',
      width: 200,
      height: 150,
      style: {
        backgroundColor: '#f3f4f6',
        border: '2px dashed #d1d5db',
        borderRadius: '8px',
        objectFit: 'cover'
      }
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
        padding: '24px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
      }
    }
  };

  const generateId = () => `element_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const snapToGrid = (value) => Math.round(value / 10) * 10;

  const saveToHistory = useCallback(() => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(elements)));
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [elements, history, historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setElements(history[historyIndex - 1]);
      setSelectedElement(null);
    }
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setElements(history[historyIndex + 1]);
      setSelectedElement(null);
    }
  }, [history, historyIndex]);

  const createElement = useCallback((templateKey) => {
    const template = elementTemplates[templateKey];
    const viewportConfig = viewports[viewport];
    const newElement = {
      ...template,
      id: generateId(),
      x: snapToGrid(Math.random() * (viewportConfig.width - template.width - 100) + 50),
      y: snapToGrid(Math.random() * 200 + 100),
      zIndex: elements.length + 1,
      name: `${templateKey}_${elements.length + 1}`
    };

    setElements(prev => [...prev, newElement]);
    setSelectedElement(newElement);
    saveToHistory();
  }, [elements, viewport, saveToHistory]);

  const updateElement = useCallback((id, updates) => {
    setElements(prev => prev.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
    
    if (selectedElement?.id === id) {
      setSelectedElement(prev => ({ ...prev, ...updates }));
    }
  }, [selectedElement]);

  const deleteElement = useCallback((id) => {
    setElements(prev => prev.filter(el => el.id !== id));
    if (selectedElement?.id === id) {
      setSelectedElement(null);
    }
    saveToHistory();
  }, [selectedElement, saveToHistory]);

  const duplicateElement = useCallback((element) => {
    const newElement = {
      ...element,
      id: generateId(),
      x: element.x + 20,
      y: element.y + 20,
      name: `${element.name}_copy`
    };
    setElements(prev => [...prev, newElement]);
    saveToHistory();
  }, [saveToHistory]);

  const handleMouseDown = useCallback((e, element) => {
    e.preventDefault();
    e.stopPropagation();

    const rect = canvasRef.current.getBoundingClientRect();
    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;

    setSelectedElement(element);
    setIsDragging(true);
    setDragOffset({
      x: startX - element.x,
      y: startY - element.y
    });
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !selectedElement) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    const newX = snapToGrid(currentX - dragOffset.x);
    const newY = snapToGrid(currentY - dragOffset.y);

    updateElement(selectedElement.id, {
      x: Math.max(0, newX),
      y: Math.max(0, newY)
    });
  }, [isDragging, selectedElement, dragOffset, updateElement]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      saveToHistory();
    }
  }, [isDragging, saveToHistory]);

  const exportHTML = useCallback(() => {
    const viewportConfig = viewports[viewport];
    
    const css = `
* { box-sizing: border-box; }
body { 
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; 
  margin: 0; 
  padding: 20px; 
  background: #f9fafb;
  direction: rtl;
}
.container { 
  position: relative; 
  width: ${viewportConfig.width}px; 
  margin: 0 auto; 
  background: white;
  min-height: ${viewportConfig.height}px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.element {
  position: absolute;
  transition: all 0.2s ease;
}
@media (max-width: 768px) {
  .container { width: 100%; }
}`;

    const html = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>אתר שנוצר ב-WebMaster Pro</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>${css}</style>
</head>
<body>
    <div class="container">
        ${elements.map(el => {
          const styleString = Object.entries(el.style)
            .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
            .join('; ');
          
          return `<div class="element" style="
            left: ${el.x}px;
            top: ${el.y}px;
            width: ${el.width}px;
            height: ${el.height}px;
            z-index: ${el.zIndex};
            ${styleString};
          ">${el.content}</div>`;
        }).join('')}
    </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `website-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [elements, viewport]);

  const exportProject = useCallback(() => {
    const projectData = {
      version: '1.0.0',
      created: new Date().toISOString(),
      viewport,
      elements
    };

    const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `webmaster-project-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [elements, viewport]);

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">WebMaster Pro</h1>
              <p className="text-sm text-gray-500">Professional Editor</p>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            🛠️ כלי עיצוב
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(elementTemplates).map(([key, template]) => {
              const icons = {
                text: '📝',
                paragraph: '📄',
                button: '🔘',
                image: '🖼️',
                form: '📋'
              };
              
              const labels = {
                text: 'כותרת',
                paragraph: 'פסקה',
                button: 'כפתור',
                image: 'תמונה',
                form: 'טופס'
              };

              return (
                <button
                  key={key}
                  onClick={() => createElement(key)}
                  className="p-3 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-gray-200 rounded-lg transition-all duration-200 flex flex-col items-center gap-1 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{icons[key]}</span>
                  <span className="text-xs font-medium text-gray-700 group-hover:text-blue-700">
                    {labels[key]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Properties Panel */}
        <div className="flex-1 p-4 overflow-y-auto">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            ⚙️ מאפיינים
          </h3>
          
          {selectedElement ? (
            <div className="space-y-4">
              {/* Content */}
              {selectedElement.type !== 'image' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">תוכן</label>
                  {selectedElement.type === 'paragraph' ? (
                    <textarea
                      value={selectedElement.content}
                      onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      value={selectedElement.content}
                      onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  )}
                </div>
              )}

              {/* Position & Size */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">X</label>
                  <input
                    type="number"
                    value={selectedElement.x}
                    onChange={(e) => updateElement(selectedElement.id, { x: parseInt(e.target.value) || 0 })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Y</label>
                  <input
                    type="number"
                    value={selectedElement.y}
                    onChange={(e) => updateElement(selectedElement.id, { y: parseInt(e.target.value) || 0 })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">רוחב</label>
                  <input
                    type="number"
                    value={selectedElement.width}
                    onChange={(e) => updateElement(selectedElement.id, { width: parseInt(e.target.value) || 20 })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">גובה</label>
                  <input
                    type="number"
                    value={selectedElement.height}
                    onChange={(e) => updateElement(selectedElement.id, { height: parseInt(e.target.value) || 20 })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>

              {/* Colors */}
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">צבע רקע</label>
                  <input
                    type="color"
                    value={selectedElement.style?.backgroundColor || '#ffffff'}
                    onChange={(e) => updateElement(selectedElement.id, { 
                      style: { ...selectedElement.style, backgroundColor: e.target.value }
                    })}
                    className="w-full h-10 border border-gray-300 rounded cursor-pointer"
                  />
                </div>

                {selectedElement.type !== 'image' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">צבע טקסט</label>
                    <input
                      type="color"
                      value={selectedElement.style?.color || '#000000'}
                      onChange={(e) => updateElement(selectedElement.id, { 
                        style: { ...selectedElement.style, color: e.target.value }
                      })}
                      className="w-full h-10 border border-gray-300 rounded cursor-pointer"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">גופן</label>
                  <select
                    value={selectedElement.style?.fontSize || '16px'}
                    onChange={(e) => updateElement(selectedElement.id, { 
                      style: { ...selectedElement.style, fontSize: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="12px">12px</option>
                    <option value="14px">14px</option>
                    <option value="16px">16px</option>
                    <option value="18px">18px</option>
                    <option value="20px">20px</option>
                    <option value="24px">24px</option>
                    <option value="32px">32px</option>
                    <option value="40px">40px</option>
                  </select>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-gray-100">
                <button
                  onClick={() => duplicateElement(selectedElement)}
                  className="flex-1 py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm font-medium transition-colors"
                >
                  📄 שכפל
                </button>
                <button
                  onClick={() => deleteElement(selectedElement.id)}
                  className="flex-1 py-2 px-3 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg text-sm font-medium transition-colors"
                >
                  🗑️ מחק
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <div className="text-4xl mb-4">👆</div>
              <p className="text-sm">בחר אלמנט לעריכה</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Toolbar */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm">
          {/* Viewport Controls */}
          <div className="flex items-center gap-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {Object.entries(viewports).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => setViewport(key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewport === key 
                      ? 'bg-white shadow text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {config.icon} {config.label}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                showGrid ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
              }`}
            >
              ⚏ רשת
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <button
                onClick={undo}
                disabled={historyIndex <= 0}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm font-medium transition-colors"
              >
                ↶ ביטול
              </button>
              <button
                onClick={redo}
                disabled={historyIndex >= history.length - 1}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm font-medium transition-colors"
              >
                ↷ חזרה
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={exportProject}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors"
              >
                💾 שמור פרויקט
              </button>
              <button
                onClick={exportHTML}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
              >
                📤 ייצא HTML
              </button>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 overflow-auto bg-gray-100 p-8">
          <div
            className="mx-auto bg-white shadow-xl relative"
            style={{
              width: viewports[viewport].width,
              height: Math.max(viewports[viewport].height, 600)
            }}
          >
            <div
              ref={canvasRef}
              className="relative w-full h-full overflow-hidden"
              style={{
                backgroundImage: showGrid ? 
                  'radial-gradient(circle, #e5e7eb 1px, transparent 1px)' : 'none',
                backgroundSize: showGrid ? '10px 10px' : 'none'
              }}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {elements.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 pointer-events-none">
                  <div className="text-center">
                    <div className="text-8xl mb-6">🎨</div>
                    <h3 className="text-2xl font-bold mb-2">התחל ליצור!</h3>
                    <p className="text-lg">בחר כלי מהצד השמאלי ותתחיל לעצב</p>
                    <div className="mt-6 text-sm text-gray-500">
                      <p>💡 טיפים מהירים:</p>
                      <p>• גרור אלמנטים להזזה</p>
                      <p>• Ctrl+Z לביטול</p>
                      <p>• Ctrl+D לשכפול</p>
                    </div>
                  </div>
                </div>
              )}

              {elements
                .sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0))
                .map((element) => (
                  <div
                    key={element.id}
                    className={`absolute cursor-move select-none transition-all duration-150 ${
                      selectedElement?.id === element.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                    }`}
                    style={{
                      left: element.x,
                      top: element.y,
                      width: element.width,
                      height: element.height,
                      zIndex: element.zIndex || 0,
                      ...element.style,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onMouseDown={(e) => handleMouseDown(e, element)}
                  >
                    {element.type === 'image' ? (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 rounded">
                        <div className="text-center">
                          <div className="text-2xl mb-2">🖼️</div>
                          <p className="text-sm">תמונה</p>
                        </div>
                      </div>
                    ) : element.type === 'form' ? (
                      <div className="w-full h-full p-4">
                        <h3 className="font-semibold mb-4">{element.content}</h3>
                        <div className="space-y-3">
                          <input type="text" placeholder="שם מלא" className="w-full p-2 border rounded text-sm" readOnly />
                          <input type="email" placeholder="אימייל" className="w-full p-2 border rounded text-sm" readOnly />
                          <textarea placeholder="הודעה" className="w-full p-2 border rounded text-sm h-16 resize-none" readOnly />
                          <button className="w-full p-2 bg-blue-500 text-white rounded text-sm">שלח</button>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center px-2 text-center">
                        {element.content}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
