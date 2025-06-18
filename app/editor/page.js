'use client';

import { useState } from 'react';

export default function EditorPage() {
  const [message, setMessage] = useState("האדיטור עובד!");

  return (
    <div className="min-h-screen bg-gray-50 p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4 rounded-lg mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            🎨 WebMaster Pro Editor
          </h1>
          <p className="text-gray-600 mt-2">
            אדיטור מתקדם לבניית אתרים
          </p>
        </div>

        {/* Main Editor Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Sidebar */}
          <div className="bg-white p-4 rounded-lg border">
            <h2 className="font-bold text-gray-800 mb-4">אלמנטים</h2>
            <div className="space-y-3">
              <button 
                onClick={() => setMessage("הוספת טקסט!")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors"
              >
                📝 הוסף טקסט
              </button>
              <button 
                onClick={() => setMessage("הוספת תמונה!")}
                className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors"
              >
                🖼️ הוסף תמונה
              </button>
              <button 
                onClick={() => setMessage("הוספת וידאו!")}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg transition-colors"
              >
                🎥 הוסף וידאו
              </button>
            </div>
          </div>

          {/* Canvas */}
          <div className="lg:col-span-2 bg-white rounded-lg border min-h-96 p-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold text-gray-700">אזור העבודה</h3>
                <p className="text-gray-500 mt-2">{message}</p>
                <div className="mt-4">
                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 inline-block">
                    <p className="text-blue-800">דוגמה לאלמנט שניתן לגרור</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Properties Panel */}
          <div className="bg-white p-4 rounded-lg border">
            <h2 className="font-bold text-gray-800 mb-4">מאפיינים</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">צבע</label>
                <input type="color" className="w-full h-10 rounded border" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">גודל</label>
                <input type="range" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">טקסט</label>
                <textarea className="w-full p-2 border rounded" rows="3" placeholder="הקלד טקסט..."></textarea>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="bg-white border-t border-gray-200 p-4 rounded-lg mt-6">
          <div className="flex justify-between items-center">
            <div className="text-gray-600">מוכן לעבודה!</div>
            <div className="flex space-x-2">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                💾 שמור
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
                🌐 ייצא
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
