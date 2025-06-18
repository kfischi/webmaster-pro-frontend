'use client';
import { useState } from 'react';

export default function SimpleEditor() {
  const [elements, setElements] = useState([]);

  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      content: type === 'text' ? 'טקסט חדש' : type === 'button' ? 'כפתור' : 'אלמנט',
      x: 100,
      y: 100,
      width: 200,
      height: 50
    };
    setElements([...elements, newElement]);
  };

  return (
    <div style={{ background: '#1a1a1a', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>🚀 Simple Editor - עובד!</h1>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={() => addElement('text')}
          style={{ padding: '10px 20px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          📝 הוסף טקסט
        </button>
        <button 
          onClick={() => addElement('button')}
          style={{ padding: '10px 20px', background: '#10b981', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          🔘 הוסף כפתור
        </button>
      </div>

      <div style={{ 
        background: 'white', 
        width: '800px', 
        height: '600px', 
        position: 'relative',
        border: '1px solid #ccc'
      }}>
        {elements.length === 0 && (
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#666'
          }}>
            <h2>🎨 אדיטור פשוט</h2>
            <p>לחץ על הכפתורים למעלה כדי להוסיף אלמנטים</p>
          </div>
        )}
        
        {elements.map(element => (
          <div
            key={element.id}
            style={{
              position: 'absolute',
              left: element.x,
              top: element.y,
              width: element.width,
              height: element.height,
              background: element.type === 'button' ? '#3b82f6' : '#f3f4f6',
              color: element.type === 'button' ? 'white' : 'black',
              border: '1px solid #ccc',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {element.content}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <p>✅ אלמנטים: {elements.length}</p>
        <p>✅ סטטוס: עובד מעולה!</p>
      </div>
    </div>
  );
}
