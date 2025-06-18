'use client';

import React, { useState } from 'react';

// ✅ Export מפורש למניעת בעיות routing
export default function EditorPage() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      content: type === 'text' ? 'טקסט חדש' : '',
      x: Math.random() * 300 + 50,
      y: Math.random() * 200 + 50,
      width: 200,
      height: 100
    };
    setElements([...elements, newElement]);
  };

  const updateElement = (id, updates) => {
    setElements(elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">
            🎨 WebMaster Pro Editor
          </h1>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              💾 שמור
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              🌐 ייצא
            </button>
          </div>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 p-4 min-h-screen">
          <h2 className="text-lg font-bold mb-4 text-gray-800">אלמנטים</h2>
          <div className="space-y-3">
            <button
              onClick={() => addElement('text')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors"
            >
              📝 הוסף טקסט
            </button>
            <button
              onClick={() => addElement('image')}
              className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors"
            >
              🖼️ הוסף תמונה
            </button>
            <button
              onClick={() => addElement('video')}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg transition-colors"
            >
              🎥 הוסף וידאו
            </button>
            <button
              onClick={() => addElement('button')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg transition-colors"
            >
              🔘 הוסף כפתור
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 p-4">
          <div 
            className="relative bg-white border border-gray-300 rounded-lg mx-auto"
            style={{ width: '1024px', height: '768px' }}
          >
            {/* Grid Background */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #000 1px, transparent 1px),
                  linear-gradient(to bottom, #000 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            />

            {/* Elements */}
            {elements.map(element => (
              <div
                key={element.id}
                className={`absolute border-2 cursor-move ${
                  selectedElement === element.id 
                    ? 'border-blue-500' 
                    : 'border-transparent hover:border-gray-300'
                }`}
                style={{
                  left: element.x,
                  top: element.y,
                  width: element.width,
                  height: element.height
                }}
                onClick={() => setSelectedElement(element.id)}
              >
                {element.type === 'text' && (
                  <div className="w-full h-full p-2 bg-gray-50 flex items-center justify-center border border-gray-200 rounded">
                    <span className="text-gray-700">{element.content}</span>
                  </div>
                )}
                {element.type === 'image' && (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center border border-gray-300 rounded">
                    <span className="text-gray-500">📷 תמונה</span>
                  </div>
                )}
                {element.type === 'video' && (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center border border-gray-300 rounded">
                    <span className="text-white">🎥 וידאו</span>
                  </div>
                )}
                {element.type === 'button' && (
                  <div className="w-full h-full flex items-center justify-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      כפתור
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Empty State */}
            {elements.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold mb-2">התחל ליצור!</h3>
                  <p>בחר אלמנט מהתפריט השמאלי כדי להתחיל</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Properties Panel */}
        <div className="w-64 bg-white border-l border-gray-200 p-4 min-h-screen">
          <h3 className="text-lg font-bold mb-4 text-gray-800">מאפיינים</h3>
          
          {selectedElement ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">טקסט</label>
                <textarea
                  className="w-full p-2 border rounded"
                  rows={3}
                  value={elements.find(el => el.id === selectedElement)?.content || ''}
                  onChange={(e) => updateElement(selectedElement, { content: e.target.value })}
                  placeholder="הקלד טקסט..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">רוחב</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={elements.find(el => el.id === selectedElement)?.width || 200}
                  onChange={(e) => updateElement(selectedElement, { width: parseInt(e.target.value) })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">גובה</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={elements.find(el => el.id === selectedElement)?.height || 100}
                  onChange={(e) => updateElement(selectedElement, { height: parseInt(e.target.value) })}
                />
              </div>

              <button
                onClick={() => {
                  setElements(elements.filter(el => el.id !== selectedElement));
                  setSelectedElement(null);
                }}
                className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded"
              >
                🗑️ מחק אלמנט
              </button>
            </div>
          ) : (
            <p className="text-gray-500">בחר אלמנט לעריכה</p>
          )}
        </div>
      </div>
    </div>
  );
}
