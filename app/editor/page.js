import React, { useState, useEffect, createContext, useContext, useReducer } from 'react';

// ✅ React Context + useReducer לניהול מצב גלובלי
const EditorContext = createContext();

const editorReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return {
        ...state,
        elements: [...state.elements, action.payload]
      };
    
    case 'UPDATE_ELEMENT':
      return {
        ...state,
        elements: state.elements.map(el => 
          el.id === action.payload.id ? { ...el, ...action.payload.updates } : el
        )
      };
    
    case 'SELECT_ELEMENT':
      return {
        ...state,
        selectedElement: action.payload
      };
    
    case 'DELETE_ELEMENT':
      return {
        ...state,
        elements: state.elements.filter(el => el.id !== action.payload),
        selectedElement: state.selectedElement === action.payload ? null : state.selectedElement
      };
    
    case 'SET_VIEW_MODE':
      return {
        ...state,
        viewMode: action.payload
      };
    
    case 'TOGGLE_GRID':
      return {
        ...state,
        gridEnabled: !state.gridEnabled
      };
    
    case 'LOAD_ELEMENTS':
      return {
        ...state,
        elements: action.payload
      };
    
    default:
      return state;
  }
};

const EditorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(editorReducer, {
    elements: [],
    selectedElement: null,
    viewMode: 'desktop',
    gridEnabled: true
  });

  const addElement = (element) => {
    dispatch({ type: 'ADD_ELEMENT', payload: element });
  };

  const updateElement = (id, updates) => {
    dispatch({ type: 'UPDATE_ELEMENT', payload: { id, updates } });
  };

  const selectElement = (id) => {
    dispatch({ type: 'SELECT_ELEMENT', payload: id });
  };

  const deleteElement = (id) => {
    dispatch({ type: 'DELETE_ELEMENT', payload: id });
  };

  const setViewMode = (mode) => {
    dispatch({ type: 'SET_VIEW_MODE', payload: mode });
  };

  const toggleGrid = () => {
    dispatch({ type: 'TOGGLE_GRID' });
  };

  const exportProject = () => {
    const data = JSON.stringify(state.elements, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'webmaster-project.json';
    a.click();
  };

  const importProject = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const elements = JSON.parse(e.target.result);
        dispatch({ type: 'LOAD_ELEMENTS', payload: elements });
      } catch (error) {
        alert('שגיאה בטעינת הקובץ');
      }
    };
    reader.readAsText(file);
  };

  const exportToHTML = () => {
    const html = `
<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebMaster Pro - Generated Site</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Arial', sans-serif; }
    .container { position: relative; width: 100%; min-height: 100vh; }
    .element { position: absolute; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideInLeft { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes zoomIn { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .fade-in { animation: fadeIn 0.5s ease forwards; }
    .slide-in-left { animation: slideInLeft 0.5s ease forwards; }
    .slide-in-right { animation: slideInRight 0.5s ease forwards; }
    .zoom-in { animation: zoomIn 0.5s ease forwards; }
  </style>
</head>
<body>
  <div class="container">
    ${state.elements.map(el => {
      const animClass = el.animation && el.animation !== 'none' ? el.animation : '';
      switch(el.type) {
        case 'text':
          return `<div class="element ${animClass}" style="left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px; padding: 8px; font-size: ${el.fontSize || 16}px; color: ${el.color || '#000'}; background: ${el.background || 'transparent'};">${el.content}</div>`;
        case 'image':
          return `<img class="element ${animClass}" src="${el.src}" style="left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px; object-fit: cover;" />`;
        case 'video':
          return `<video class="element ${animClass}" controls style="left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px;" src="${el.src}"></video>`;
        case 'contact':
          return `<div class="element ${animClass}" style="left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
            ${el.fields?.map(field => `<input type="${field.type}" placeholder="${field.placeholder}" style="width: 100%; margin-bottom: 8px; padding: 4px; border: 1px solid #ccc; border-radius: 4px;" />`).join('')}
            <button type="button" style="background: #3b82f6; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">${el.submitText || 'שלח'}</button>
          </div>`;
        default:
          return '';
      }
    }).join('')}
  </div>
</body>
</html>`;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'webmaster-site.html';
    a.click();
  };

  return (
    <EditorContext.Provider value={{
      ...state,
      addElement,
      updateElement,
      selectElement,
      deleteElement,
      setViewMode,
      toggleGrid,
      exportProject,
      importProject,
      exportToHTML
    }}>
      {children}
    </EditorContext.Provider>
  );
};

const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within EditorProvider');
  }
  return context;
};

// ✅ Grid Overlay Component
const GridOverlay = () => {
  const { gridEnabled } = useEditor();
  
  if (!gridEnabled) return null;
  
  const GRID_SIZE = 20;
  const lines = [];
  
  for (let i = 0; i < 100; i++) {
    lines.push(
      <div key={`v${i}`} 
        style={{
          position: 'absolute',
          top: 0,
          left: i * GRID_SIZE,
          width: 1,
          height: '100%',
          backgroundColor: '#e5e7eb',
          pointerEvents: 'none'
        }} 
      />,
      <div key={`h${i}`}
        style={{
          position: 'absolute',
          left: 0,
          top: i * GRID_SIZE,
          height: 1,
          width: '100%',
          backgroundColor: '#e5e7eb',
          pointerEvents: 'none'
        }}
      />
    );
  }
  
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0 }}>
      {lines}
    </div>
  );
};

// ✅ Element Wrapper Component
const ElementWrapper = ({ element, onUpdate, onSelect, isSelected }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const GRID_SIZE = 20;
  const snap = (value) => Math.round(value / GRID_SIZE) * GRID_SIZE;

  const handleMouseDown = (e) => {
    if (e.target.closest('.resize-handle')) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - element.x,
      y: e.clientY - element.y
    });
    onSelect(element.id);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = snap(e.clientX - dragStart.x);
      const newY = snap(e.clientY - dragStart.y);
      onUpdate(element.id, { x: Math.max(0, newX), y: Math.max(0, newY) });
    }
    if (isResizing) {
      const newWidth = snap(Math.max(50, e.clientX - element.x));
      const newHeight = snap(Math.max(30, e.clientY - element.y));
      onUpdate(element.id, { width: newWidth, height: newHeight });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart]);

  const elementStyle = {
    position: 'absolute',
    left: element.x,
    top: element.y,
    width: element.width,
    height: element.height,
    border: isSelected ? '2px solid #3b82f6' : '1px solid transparent',
    cursor: isDragging ? 'grabbing' : 'grab',
    zIndex: isSelected ? 10 : 1
  };

  const renderContent = () => {
    switch (element.type) {
      case 'text':
        return isEditing ? (
          <textarea
            value={element.content}
            onChange={(e) => onUpdate(element.id, { content: e.target.value })}
            onBlur={() => setIsEditing(false)}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              outline: 'none',
              resize: 'none',
              fontSize: element.fontSize || 16,
              color: element.color || '#000',
              background: element.background || 'transparent',
              padding: '8px'
            }}
            autoFocus
          />
        ) : (
          <div
            onDoubleClick={() => setIsEditing(true)}
            style={{
              width: '100%',
              height: '100%',
              padding: '8px',
              fontSize: element.fontSize || 16,
              color: element.color || '#000',
              background: element.background || 'transparent',
              wordWrap: 'break-word'
            }}
          >
            {element.content}
          </div>
        );
      
      case 'image':
        return element.src ? (
          <img src={element.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: '#f3f4f6', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '14px',
            color: '#6b7280'
          }}>
            📷 תמונה
          </div>
        );
      
      case 'video':
        return element.src ? (
          <video controls style={{ width: '100%', height: '100%' }} src={element.src} />
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: '#f3f4f6', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '14px',
            color: '#6b7280'
          }}>
            🎥 וידאו
          </div>
        );
      
      case 'contact':
        return (
          <div style={{ padding: '8px', height: '100%' }}>
            {element.fields?.map((field, idx) => (
              <input
                key={idx}
                type={field.type}
                placeholder={field.placeholder}
                style={{
                  width: '100%',
                  marginBottom: '8px',
                  padding: '4px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
            ))}
            <button
              style={{
                background: '#3b82f6',
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={() => alert('טופס נשלח!')}
            >
              {element.submitText || 'שלח'}
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div
      style={elementStyle}
      onMouseDown={handleMouseDown}
    >
      {renderContent()}
      
      {/* Resize Handle */}
      {isSelected && (
        <div
          className="resize-handle"
          style={{
            position: 'absolute',
            bottom: -5,
            right: -5,
            width: 10,
            height: 10,
            background: '#3b82f6',
            cursor: 'se-resize',
            borderRadius: '2px'
          }}
          onMouseDown={(e) => {
            setIsResizing(true);
            e.stopPropagation();
          }}
        />
      )}
    </div>
  );
};

// ✅ Canvas Component
const Canvas = () => {
  const { elements, selectedElement, viewMode, updateElement, selectElement } = useEditor();
  
  const canvasStyle = {
    width: viewMode === 'desktop' ? 1024 : 375,
    height: viewMode === 'desktop' ? 768 : 667,
    margin: '20px auto',
    position: 'relative',
    background: 'white',
    border: '1px solid #d1d5db',
    borderRadius: viewMode === 'mobile' ? '20px' : '4px',
    overflow: 'hidden'
  };

  return (
    <div className="flex-1 p-4 overflow-auto" style={{ background: '#f9fafb' }}>
      <div style={canvasStyle}>
        <GridOverlay />
        {elements.map(element => (
          <ElementWrapper
            key={element.id}
            element={element}
            onUpdate={updateElement}
            onSelect={selectElement}
            isSelected={selectedElement === element.id}
          />
        ))}
      </div>
    </div>
  );
};

// ✅ Sidebar Component
const Sidebar = () => {
  const { addElement } = useEditor();

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addTextElement = () => {
    addElement({
      id: generateId(),
      type: 'text',
      content: 'טקסט חדש',
      x: 100,
      y: 100,
      width: 200,
      height: 80,
      fontSize: 16,
      color: '#000',
      background: 'transparent'
    });
  };

  const addImageElement = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          addElement({
            id: generateId(),
            type: 'image',
            src: e.target.result,
            x: 150,
            y: 150,
            width: 300,
            height: 200
          });
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const addVideoElement = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          addElement({
            id: generateId(),
            type: 'video',
            src: e.target.result,
            x: 150,
            y: 150,
            width: 400,
            height: 250
          });
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const addContactElement = () => {
    addElement({
      id: generateId(),
      type: 'contact',
      x: 150,
      y: 150,
      width: 300,
      height: 200,
      submitText: 'שלח',
      fields: [
        { type: 'text', placeholder: 'שם מלא' },
        { type: 'email', placeholder: 'כתובת אימייל' },
        { type: 'tel', placeholder: 'טלפון' }
      ]
    });
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4 text-gray-800">אלמנטים</h2>
      
      <div className="space-y-3">
        <button
          onClick={addTextElement}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors"
        >
          📝 הוסף טקסט
        </button>
        
        <button
          onClick={addImageElement}
          className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors"
        >
          🖼️ הוסף תמונה
        </button>
        
        <button
          onClick={addVideoElement}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg transition-colors"
        >
          🎥 הוסף וידאו
        </button>
        
        <button
          onClick={addContactElement}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg transition-colors"
        >
          📋 הוסף טופס יצירת קשר
        </button>
      </div>
    </div>
  );
};

// ✅ Properties Panel Component
const PropertiesPanel = () => {
  const { elements, selectedElement, updateElement, deleteElement } = useEditor();
  
  const element = elements.find(el => el.id === selectedElement);
  
  if (!element) {
    return (
      <div className="w-64 bg-white border-l border-gray-200 p-4">
        <h3 className="text-lg font-bold mb-4 text-gray-800">מאפיינים</h3>
        <p className="text-gray-500">בחר אלמנט לעריכה</p>
      </div>
    );
  }

  return (
    <div className="w-64 bg-white border-l border-gray-200 p-4">
      <h3 className="text-lg font-bold mb-4 text-gray-800">מאפיינים</h3>
      
      {/* Position & Size */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">מיקום וגודל</label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="X"
            value={element.x}
            onChange={(e) => updateElement(element.id, { x: parseInt(e.target.value) || 0 })}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Y"
            value={element.y}
            onChange={(e) => updateElement(element.id, { y: parseInt(e.target.value) || 0 })}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="רוחב"
            value={element.width}
            onChange={(e) => updateElement(element.id, { width: parseInt(e.target.value) || 100 })}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="גובה"
            value={element.height}
            onChange={(e) => updateElement(element.id, { height: parseInt(e.target.value) || 100 })}
            className="p-2 border rounded"
          />
        </div>
      </div>

      {/* Text Properties */}
      {element.type === 'text' && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">עיצוב טקסט</label>
          <div className="space-y-2">
            <input
              type="number"
              placeholder="גודל גופן"
              value={element.fontSize || 16}
              onChange={(e) => updateElement(element.id, { fontSize: parseInt(e.target.value) || 16 })}
              className="w-full p-2 border rounded"
            />
            <input
              type="color"
              value={element.color || '#000000'}
              onChange={(e) => updateElement(element.id, { color: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="color"
              value={element.background || '#ffffff'}
              onChange={(e) => updateElement(element.id, { background: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      )}

      {/* Animation */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">אנימציה</label>
        <select
          value={element.animation || 'none'}
          onChange={(e) => updateElement(element.id, { animation: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="none">ללא</option>
          <option value="fade-in">הופעה הדרגתית</option>
          <option value="slide-in-left">החלקה משמאל</option>
          <option value="slide-in-right">החלקה מימין</option>
          <option value="zoom-in">זום פנימה</option>
        </select>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => deleteElement(element.id)}
        className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded transition-colors"
      >
        🗑️ מחק אלמנט
      </button>
    </div>
  );
};

// ✅ Toolbar Component
const Toolbar = () => {
  const { viewMode, setViewMode, toggleGrid, exportProject, exportToHTML, importProject } = useEditor();

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        importProject(file);
      }
    };
    input.click();
  };

  return (
    <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-800">WebMaster Pro Editor</h1>
      </div>
      
      <div className="flex items-center space-x-2">
        {/* View Mode Toggle */}
        <button
          onClick={() => setViewMode(viewMode === 'desktop' ? 'mobile' : 'desktop')}
          className={`px-4 py-2 rounded ${
            viewMode === 'desktop' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {viewMode === 'desktop' ? '🖥️ דסקטופ' : '📱 מובייל'}
        </button>
        
        {/* Grid Toggle */}
        <button
          onClick={toggleGrid}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
        >
          📏 רשת
        </button>
        
        {/* Import */}
        <button
          onClick={handleImport}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
        >
          📥 יבוא
        </button>
        
        {/* Export JSON */}
        <button
          onClick={exportProject}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          💾 שמור
        </button>
        
        {/* Export HTML */}
        <button
          onClick={exportToHTML}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded"
        >
          🌐 ייצא HTML
        </button>
      </div>
    </div>
  );
};

// ✅ Main Editor Component
export default function EditorPage() {
  return (
    <EditorProvider>
      <div className="h-screen flex flex-col bg-gray-50" dir="rtl">
        <Toolbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <Canvas />
          <PropertiesPanel />
        </div>
      </div>
    </EditorProvider>
  );
}
