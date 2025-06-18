import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Download, Upload, Undo, Redo, Play, Pause, Monitor, Tablet, Smartphone, Eye, Layers, Settings, Palette, Type, Image, Video, Square, Circle, MousePointer, Move, RotateCcw, Copy, Trash2, ZoomIn, ZoomOut, Grid, AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from 'lucide-react';

export default function UltimateWebsiteEditor() {
  const [elements, setElements] = useState([]);
  const [selectedElements, setSelectedElements] = useState([]);
  const [viewport, setViewport] = useState('desktop');
  const [zoom, setZoom] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [activePanel, setActivePanel] = useState('layers');
  const [gridSize, setGridSize] = useState(20);
  const [snapToGrid, setSnapToGrid] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [previewMode, setPreviewMode] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [currentTool, setCurrentTool] = useState('select');
  const canvasRef = useRef(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const viewports = {
    desktop: { width: 1440, height: 900, icon: Monitor, label: 'Desktop' },
    tablet: { width: 768, height: 1024, icon: Tablet, label: 'Tablet' },
    mobile: { width: 375, height: 812, icon: Smartphone, label: 'Mobile' }
  };

  const tools = [
    { id: 'select', icon: MousePointer, label: 'בחירה' },
    { id: 'text', icon: Type, label: 'טקסט' },
    { id: 'image', icon: Image, label: 'תמונה' },
    { id: 'video', icon: Video, label: 'וידאו' },
    { id: 'rectangle', icon: Square, label: 'ריבוע' },
    { id: 'circle', icon: Circle, label: 'עיגול' }
  ];

  const elementTemplates = {
    text: {
      type: 'text',
      content: 'טקסט חדש',
      width: 200,
      height: 40,
      style: {
        fontSize: '16px',
        fontWeight: '400',
        color: '#000000',
        backgroundColor: 'transparent',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'right',
        lineHeight: '1.4',
        padding: '8px',
        borderRadius: '0px',
        border: 'none',
        opacity: 1,
        transform: 'rotate(0deg)'
      }
    },
    heading: {
      type: 'text',
      content: 'כותרת ראשית',
      width: 300,
      height: 60,
      style: {
        fontSize: '32px',
        fontWeight: '700',
        color: '#1a1a1a',
        backgroundColor: 'transparent',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'right',
        lineHeight: '1.2',
        padding: '12px',
        borderRadius: '0px',
        border: 'none',
        opacity: 1,
        transform: 'rotate(0deg)'
      }
    },
    button: {
      type: 'button',
      content: 'לחץ כאן',
      width: 160,
      height: 48,
      style: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#ffffff',
        backgroundColor: '#3b82f6',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        lineHeight: '1',
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        opacity: 1,
        transform: 'rotate(0deg)',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
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
        borderRadius: '8px',
        opacity: 1,
        transform: 'rotate(0deg)',
        objectFit: 'cover'
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
        borderRadius: '12px',
        opacity: 1,
        transform: 'rotate(0deg)'
      },
      controls: true,
      autoplay: false,
      muted: true,
      loop: false
    },
    rectangle: {
      type: 'shape',
      shapeType: 'rectangle',
      content: '',
      width: 200,
      height: 100,
      style: {
        backgroundColor: '#3b82f6',
        border: '1px solid #2563eb',
        borderRadius: '8px',
        opacity: 1,
        transform: 'rotate(0deg)'
      }
    },
    circle: {
      type: 'shape',
      shapeType: 'circle',
      content: '',
      width: 100,
      height: 100,
      style: {
        backgroundColor: '#ef4444',
        border: '1px solid #dc2626',
        borderRadius: '50%',
        opacity: 1,
        transform: 'rotate(0deg)'
      }
    }
  };

  const predefinedTemplates = [
    {
      id: 'hero-section',
      name: 'Hero Section',
      thumbnail: '🎯',
      elements: [
        {
          ...elementTemplates.heading,
          id: 'hero-title',
          x: 100,
          y: 100,
          content: 'ברוכים הבאים לאתר שלנו',
          style: { ...elementTemplates.heading.style, fontSize: '48px', textAlign: 'center' }
        },
        {
          ...elementTemplates.text,
          id: 'hero-subtitle',
          x: 100,
          y: 180,
          width: 400,
          content: 'אנחנו מספקים פתרונות מתקדמים לעסקים',
          style: { ...elementTemplates.text.style, fontSize: '18px', textAlign: 'center' }
        },
        {
          ...elementTemplates.button,
          id: 'hero-cta',
          x: 220,
          y: 240,
          content: 'התחל עכשיו'
        }
      ]
    },
    {
      id: 'contact-form',
      name: 'טופס יצירת קשר',
      thumbnail: '📧',
      elements: [
        {
          ...elementTemplates.heading,
          id: 'form-title',
          x: 50,
          y: 50,
          content: 'צור קשר',
          style: { ...elementTemplates.heading.style, fontSize: '28px' }
        },
        {
          ...elementTemplates.rectangle,
          id: 'name-field',
          x: 50,
          y: 120,
          width: 300,
          height: 40,
          style: { ...elementTemplates.rectangle.style, backgroundColor: '#ffffff', border: '1px solid #d1d5db' }
        },
        {
          ...elementTemplates.rectangle,
          id: 'email-field',
          x: 50,
          y: 180,
          width: 300,
          height: 40,
          style: { ...elementTemplates.rectangle.style, backgroundColor: '#ffffff', border: '1px solid #d1d5db' }
        },
        {
          ...elementTemplates.button,
          id: 'submit-btn',
          x: 50,
          y: 240,
          content: 'שלח הודעה'
        }
      ]
    }
  ];

  const saveToHistory = useCallback(() => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(elements)));
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [elements, history, historyIndex]);

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setElements(history[historyIndex - 1]);
      setSelectedElements([]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setElements(history[historyIndex + 1]);
      setSelectedElements([]);
    }
  };

  const snap = (value) => {
    return snapToGrid ? Math.round(value / gridSize) * gridSize : value;
  };

  const createElement = (templateKey) => {
    const template = elementTemplates[templateKey];
    const viewport_info = viewports[viewport];
    
    const newElement = {
      ...template,
      id: `element_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      x: snap(Math.random() * (viewport_info.width - template.width - 100) + 50),
      y: snap(Math.random() * (viewport_info.height - template.height - 100) + 50),
      zIndex: elements.length + 1,
      locked: false,
      visible: true,
      name: `${templateKey}_${elements.length + 1}`
    };
    
    setElements(prev => [...prev, newElement]);
    setSelectedElements([newElement.id]);
    saveToHistory();
  };

  const loadTemplate = (template) => {
    const templateElements = template.elements.map(el => ({
      ...el,
      id: `element_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      zIndex: elements.length + el.zIndex || 1
    }));
    
    setElements(prev => [...prev, ...templateElements]);
    saveToHistory();
  };

  const updateElement = (id, updates) => {
    setElements(prev => prev.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
  };

  const updateSelectedElements = (updates) => {
    selectedElements.forEach(id => {
      updateElement(id, updates);
    });
  };

  const deleteSelectedElements = () => {
    setElements(prev => prev.filter(el => !selectedElements.includes(el.id)));
    setSelectedElements([]);
    saveToHistory();
  };

  const duplicateSelectedElements = () => {
    const selectedElementsData = elements.filter(el => selectedElements.includes(el.id));
    const duplicated = selectedElementsData.map(el => ({
      ...el,
      id: `element_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      x: el.x + 20,
      y: el.y + 20,
      zIndex: elements.length + 1
    }));
    
    setElements(prev => [...prev, ...duplicated]);
    setSelectedElements(duplicated.map(el => el.id));
    saveToHistory();
  };

  const handleMouseDown = (e, element) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (currentTool !== 'select') return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / (zoom / 100) - element.x;
    const offsetY = (e.clientY - rect.top) / (zoom / 100) - element.y;
    
    if (!selectedElements.includes(element.id)) {
      if (e.ctrlKey || e.metaKey) {
        setSelectedElements(prev => [...prev, element.id]);
      } else {
        setSelectedElements([element.id]);
      }
    }
    
    setIsDragging(true);
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || selectedElements.length === 0) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const newX = (e.clientX - rect.left) / (zoom / 100) - dragOffset.x;
    const newY = (e.clientY - rect.top) / (zoom / 100) - dragOffset.y;
    
    const snappedX = snap(newX);
    const snappedY = snap(newY);
    
    selectedElements.forEach(id => {
      const element = elements.find(el => el.id === id);
      if (element && !element.locked) {
        updateElement(id, {
          x: Math.max(0, Math.min(snappedX, viewports[viewport].width - element.width)),
          y: Math.max(0, Math.min(snappedY, viewports[viewport].height - element.height))
        });
      }
    });
  }, [isDragging, selectedElements, dragOffset, zoom, elements, viewport, snap]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      saveToHistory();
    }
  }, [isDragging, saveToHistory]);

  const handleToolClick = (tool) => {
    setCurrentTool(tool.id);
    if (tool.id === 'text') {
      createElement('text');
    } else if (tool.id === 'image') {
      createElement('image');
    } else if (tool.id === 'video') {
      createElement('video');
    } else if (tool.id === 'rectangle') {
      createElement('rectangle');
    } else if (tool.id === 'circle') {
      createElement('circle');
    }
  };

  const exportHTML = () => {
    const viewport_info = viewports[viewport];
    
    const html = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>אתר נוצר עם WebMaster Pro</title>
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
        ${elements.sort((a, b) => a.zIndex - b.zIndex).map(el => {
          const transform = el.style.transform || 'rotate(0deg)';
          
          if (el.type === 'video' && el.videoUrl) {
            const getYouTubeId = (url) => {
              const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
              return match ? match[1] : null;
            };
            
            const youtubeId = getYouTubeId(el.videoUrl);
            const embedUrl = youtubeId ? 
              `https://www.youtube.com/embed/${youtubeId}` : el.videoUrl;
            
            return `<iframe class="element" src="${embedUrl}" style="
              left: ${el.x}px; top: ${el.y}px; 
              width: ${el.width}px; height: ${el.height}px;
              border: none; border-radius: ${el.style.borderRadius};
              opacity: ${el.style.opacity}; transform: ${transform};
            " allowfullscreen></iframe>`;
          }
          
          if (el.type === 'image' && el.src) {
            return `<img class="element" src="${el.src}" style="
              left: ${el.x}px; top: ${el.y}px;
              width: ${el.width}px; height: ${el.height}px;
              ${Object.entries(el.style).map(([k,v]) => 
                `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${v}`
              ).join('; ')};
              transform: ${transform};
            " alt="${el.content || 'תמונה'}" />`;
          }
          
          return `<div class="element" style="
            left: ${el.x}px; top: ${el.y}px;
            width: ${el.width}px; height: ${el.height}px;
            ${Object.entries(el.style).map(([k,v]) => 
              `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${v}`
            ).join('; ')};
            display: flex; align-items: center; justify-content: center;
            transform: ${transform};
          ">${el.content || ''}</div>`;
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

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'z':
            e.preventDefault();
            if (e.shiftKey) {
              redo();
            } else {
              undo();
            }
            break;
          case 'd':
            e.preventDefault();
            duplicateSelectedElements();
            break;
          case 'a':
            e.preventDefault();
            setSelectedElements(elements.map(el => el.id));
            break;
        }
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        deleteSelectedElements();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedElements, elements]);

  // Mouse events
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const selectedElement = selectedElements.length === 1 ? 
    elements.find(el => el.id === selectedElements[0]) : null;

  return (
    <div className="h-screen bg-gray-900 flex text-white">
      {/* Left Sidebar - Tools & Templates */}
      <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Ultimate Editor
          </h1>
          <p className="text-gray-400 text-sm">האדיטור הכי מטורף ומקצועי</p>
        </div>

        {/* Tools */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="font-semibold mb-3 text-gray-200">🛠️ כלים</h3>
          <div className="grid grid-cols-3 gap-2">
            {tools.map(tool => {
              const IconComponent = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => handleToolClick(tool)}
                  className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center gap-1 ${
                    currentTool === tool.id
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <IconComponent size={16} />
                  <span className="text-xs">{tool.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Elements */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="font-semibold mb-3 text-gray-200">⚡ אלמנטים מהירים</h3>
          <div className="space-y-2">
            <button
              onClick={() => createElement('heading')}
              className="w-full p-2 bg-gray-700 hover:bg-gray-600 rounded text-sm text-right"
            >
              📝 כותרת ראשית
            </button>
            <button
              onClick={() => createElement('text')}
              className="w-full p-2 bg-gray-700 hover:bg-gray-600 rounded text-sm text-right"
            >
              📄 פסקת טקסט
            </button>
            <button
              onClick={() => createElement('button')}
              className="w-full p-2 bg-gray-700 hover:bg-gray-600 rounded text-sm text-right"
            >
              🔘 כפתור פעולה
            </button>
          </div>
        </div>

        {/* Templates */}
        <div className="p-4 flex-1 overflow-y-auto">
          <h3 className="font-semibold mb-3 text-gray-200">🎨 תבניות מוכנות</h3>
          <div className="space-y-2">
            {predefinedTemplates.map(template => (
              <button
                key={template.id}
                onClick={() => loadTemplate(template)}
                className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-right transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{template.thumbnail}</span>
                  <span className="text-sm font-medium">{template.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Toolbar */}
        <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Undo/Redo */}
            <div className="flex items-center gap-1">
              <button
                onClick={undo}
                disabled={historyIndex <= 0}
                className="p-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded"
              >
                <Undo size={16} />
              </button>
              <button
                onClick={redo}
                disabled={historyIndex >= history.length - 1}
                className="p-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded"
              >
                <Redo size={16} />
              </button>
            </div>

            {/* Viewport Selection */}
            <div className="flex bg-gray-700 rounded-lg p-1">
              {Object.entries(viewports).map(([key, config]) => {
                const IconComponent = config.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setViewport(key)}
                    className={`px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-2 text-sm ${
                      viewport === key 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-600'
                    }`}
                  >
                    <IconComponent size={16} />
                    {config.label}
                    <span className="text-xs opacity-75">
                      {config.width}×{config.height}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom(Math.max(25, zoom - 25))}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded"
              >
                <ZoomOut size={16} />
              </button>
              <span className="text-sm min-w-[60px] text-center">{zoom}%</span>
              <button
                onClick={() => setZoom(Math.min(300, zoom + 25))}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded"
              >
                <ZoomIn size={16} />
              </button>
            </div>

            {/* Grid Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowGrid(!showGrid)}
                className={`p-2 rounded ${showGrid ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setSnapToGrid(!snapToGrid)}
                className={`p-2 rounded text-xs ${snapToGrid ? 'bg-green-600' : 'bg-gray-700 hover:bg-gray-600'}`}
              >
                SNAP
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Preview Mode */}
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                previewMode ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <Eye size={16} />
              {previewMode ? 'עריכה' : 'תצוגה מקדימה'}
            </button>

            {/* Export */}
            <button
              onClick={exportHTML}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium flex items-center gap-2 transition-all duration-200"
            >
              <Download size={16} />
              ייצא אתר
            </button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 flex">
          {/* Canvas */}
          <div className="flex-1 overflow-auto bg-gray-100 relative">
            <div className="flex items-center justify-center min-h-full p-8">
              <div
                ref={canvasRef}
                className="bg-white shadow-2xl relative transition-all duration-300"
                style={{
                  width: viewports[viewport].width * (zoom / 100),
                  height: viewports[viewport].height * (zoom / 100),
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'top left',
                  backgroundImage: showGrid ? 
                    `radial-gradient(circle, #e5e7eb 1px, transparent 1px)` : 'none',
                  backgroundSize: showGrid ? `${gridSize}px ${gridSize}px` : 'none'
                }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setSelectedElements([]);
                  }
                }}
              >
                {/* Rulers */}
                {!previewMode && (
                  <>
                    {/* Horizontal Ruler */}
                    <div className="absolute -top-6 left-0 right-0 h-6 bg-gray-200 border-b flex">
                      {Array.from({ length: Math.ceil(viewports[viewport].width / 50) }).map((_, i) => (
                        <div key={i} className="relative" style={{ width: '50px' }}>
                          <div className="absolute bottom-0 left-0 w-px h-2 bg-gray-400"></div>
                          <span className="absolute bottom-0 left-1 text-xs text-gray-600">
                            {i * 50}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Vertical Ruler */}
                    <div className="absolute -left-6 top-0 bottom-0 w-6 bg-gray-200 border-r flex flex-col">
                      {Array.from({ length: Math.ceil(viewports[viewport].height / 50) }).map((_, i) => (
                        <div key={i} className="relative" style={{ height: '50px' }}>
                          <div className="absolute right-0 top-0 h-px w-2 bg-gray-400"></div>
                          <span className="absolute right-1 top-1 text-xs text-gray-600 transform -rotate-90 origin-top-right">
                            {i * 50}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Empty State */}
                {elements.length === 0 && !previewMode && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center text-gray-400">
                      <div className="text-6xl mb-4">🎨</div>
                      <h3 className="text-2xl font-bold mb-2">האדיטור הכי מטורף!</h3>
                      <p className="text-lg mb-4">בחר כלי או תבנית כדי להתחיל</p>
                      <div className="text-sm space-y-1">
                        <p>💡 גרור אלמנטים למיקום</p>
                        <p>🎯 Ctrl+Click לבחירה מרובה</p>
                        <p>⌨️ Ctrl+Z/Y לביטול/חזרה</p>
                        <p>📋 Ctrl+D לשכפול</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Elements */}
                {elements.map((element) => (
                  <div
                    key={element.id}
                    className={`absolute select-none transition-all duration-200 ${
                      previewMode ? '' : 'cursor-move'
                    } ${
                      selectedElements.includes(element.id) && !previewMode
                        ? 'ring-2 ring-blue-500 ring-offset-2 shadow-xl z-50' 
                        : !previewMode ? 'hover:ring-1 hover:ring-gray-300' : ''
                    } ${element.locked ? 'cursor-not-allowed' : ''}`}
                    style={{
                      left: element.x,
                      top: element.y,
                      width: element.width,
                      height: element.height,
                      zIndex: element.zIndex + (selectedElements.includes(element.id) ? 1000 : 0),
                      opacity: element.visible ? element.style.opacity : 0.5,
                      transform: element.style.transform || 'rotate(0deg)',
                      ...element.style,
                      display: 'flex',
                      alignItems: element.type === 'text' ? 'flex-start' : 'center',
                      justifyContent: element.style.textAlign === 'center' ? 'center' : 
                                    element.style.textAlign === 'left' ? 'flex-start' : 'flex-end'
                    }}
                    onMouseDown={!previewMode ? (e) => handleMouseDown(e, element) : undefined}
                    onClick={!previewMode ? (e) => {
                      e.stopPropagation();
                      if (!selectedElements.includes(element.id)) {
                        if (e.ctrlKey || e.metaKey) {
                          setSelectedElements(prev => [...prev, element.id]);
                        } else {
                          setSelectedElements([element.id]);
                        }
                      }
                    } : undefined}
                  >
                    {element.type === 'video' ? (
                      <div className="w-full h-full rounded overflow-hidden">
                        {element.videoUrl ? (
                          (() => {
                            const getYouTubeId = (url) => {
                              const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
                              return match ? match[1] : null;
                            };
                            
                            const youtubeId = getYouTubeId(element.videoUrl);
                            const embedUrl = youtubeId ? 
                              `https://www.youtube.com/embed/${youtubeId}` : element.videoUrl;
                            
                            return (
                              <iframe
                                src={embedUrl}
                                className="w-full h-full"
                                frameBorder="0"
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                style={{ pointerEvents: previewMode ? 'auto' : 'none' }}
                              />
                            );
                          })()
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black text-white rounded">
                            <div className="text-center p-4">
                              <Video size={32} className="mx-auto mb-2" />
                              <p className="text-sm font-medium">הוסף URL וידאו</p>
                              <p className="text-xs mt-1 opacity-75">YouTube, Vimeo או וידאו ישיר</p>
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
                          style={{ objectFit: element.style.objectFit || 'cover' }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded bg-gray-50">
                          <div className="text-center text-gray-500">
                            <Image size={32} className="mx-auto mb-2" />
                            <p className="text-sm">לחץ להוספת תמונה</p>
                          </div>
                        </div>
                      )
                    ) : element.type === 'shape' ? (
                      <div className="w-full h-full"></div>
                    ) : (
                      <div 
                        className="w-full h-full flex items-center"
                        style={{
                          fontSize: element.style.fontSize,
                          fontWeight: element.style.fontWeight,
                          color: element.style.color,
                          fontFamily: element.style.fontFamily,
                          lineHeight: element.style.lineHeight,
                          textAlign: element.style.textAlign,
                          padding: element.style.padding,
                          justifyContent: element.style.textAlign === 'center' ? 'center' : 
                                         element.style.textAlign === 'left' ? 'flex-start' : 'flex-end'
                        }}
                      >
                        {element.content}
                      </div>
                    )}

                    {/* Selection Handles */}
                    {selectedElements.includes(element.id) && !previewMode && (
                      <>
                        {/* Corner Handles */}
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-500 border border-white rounded-full cursor-nw-resize"></div>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 border border-white rounded-full cursor-ne-resize"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500 border border-white rounded-full cursor-sw-resize"></div>
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500 border border-white rounded-full cursor-se-resize"></div>
                        
                        {/* Element Label */}
                        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {element.name || element.type} - {element.width}×{element.height}
                        </div>
                      </>
                    )}
                  </div>
                ))}

                {/* Multi-selection Box */}
                {selectedElements.length > 1 && !previewMode && (
                  <div className="absolute border-2 border-blue-500 bg-blue-500 bg-opacity-10 pointer-events-none"></div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Properties */}
          <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
            {/* Panel Tabs */}
            <div className="flex border-b border-gray-700">
              <button
                onClick={() => setActivePanel('layers')}
                className={`flex-1 p-3 text-sm font-medium transition-colors ${
                  activePanel === 'layers' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Layers size={16} className="mx-auto mb-1" />
                שכבות
              </button>
              <button
                onClick={() => setActivePanel('properties')}
                className={`flex-1 p-3 text-sm font-medium transition-colors ${
                  activePanel === 'properties' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Settings size={16} className="mx-auto mb-1" />
                מאפיינים
              </button>
            </div>

            {/* Layers Panel */}
            {activePanel === 'layers' && (
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-200">🗂️ שכבות</h3>
                  <div className="flex gap-1">
                    <button
                      onClick={duplicateSelectedElements}
                      disabled={selectedElements.length === 0}
                      className="p-1 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 rounded"
                    >
                      <Copy size={14} />
                    </button>
                    <button
                      onClick={deleteSelectedElements}
                      disabled={selectedElements.length === 0}
                      className="p-1 bg-red-600 hover:bg-red-700 disabled:opacity-50 rounded"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-1">
                  {elements
                    .sort((a, b) => b.zIndex - a.zIndex)
                    .map((element) => (
                      <div
                        key={element.id}
                        className={`p-2 rounded cursor-pointer transition-colors ${
                          selectedElements.includes(element.id)
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                        }`}
                        onClick={() => setSelectedElements([element.id])}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium truncate">
                            {element.name || `${element.type}_${element.id.slice(-4)}`}
                          </span>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateElement(element.id, { visible: !element.visible });
                              }}
                              className={`p-1 rounded ${element.visible ? 'text-white' : 'text-gray-500'}`}
                            >
                              <Eye size={12} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateElement(element.id, { locked: !element.locked });
                              }}
                              className={`p-1 rounded ${element.locked ? 'text-yellow-400' : 'text-gray-500'}`}
                            >
                              🔒
                            </button>
                          </div>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {element.type} • {element.width}×{element.height}
                        </div>
                      </div>
                    ))}
                  
                  {elements.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <div className="text-3xl mb-2">📋</div>
                      <p className="text-sm">אין שכבות עדיין</p>
                      <p className="text-xs">הוסף אלמנט כדי להתחיל</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Properties Panel */}
            {activePanel === 'properties' && (
              <div className="flex-1 p-4 overflow-y-auto">
                {selectedElement ? (
                  <div className="space-y-6">
                    {/* Element Info */}
                    <div className="bg-gray-700 p-3 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">🎯 אלמנט נבחר</h3>
                      <p className="text-gray-300 text-sm">
                        {selectedElement.name || selectedElement.type}
                      </p>
                      <input
                        type="text"
                        value={selectedElement.name || ''}
                        onChange={(e) => updateElement(selectedElement.id, { name: e.target.value })}
                        placeholder="שם האלמנט"
                        className="w-full mt-2 px-2 py-1 bg-gray-600 border border-gray-500 rounded text-sm text-white"
                      />
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
                        <div className="mt-2 p-2 bg-gray-600 rounded text-xs text-gray-300">
                          <p>🎥 תומך ב:</p>
                          <p>• YouTube: youtube.com/watch?v=...</p>
                          <p>• Vimeo: vimeo.com/...</p>
                          <p>• וידאו ישיר: .mp4, .webm</p>
                        </div>
                      </div>
                    )}

                    {/* Image Source */}
                    {selectedElement.type === 'image' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">🖼️ מקור תמונה</label>
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

                    {/* Styling */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-200">🎨 עיצוב</h4>
                      
                      {/* Colors */}
                      <div className="grid grid-cols-2 gap-3">
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
                        
                        {selectedElement.type !== 'image' && selectedElement.type !== 'video' && selectedElement.type !== 'shape' && (
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

                      {/* Typography */}
                      {selectedElement.type !== 'image' && selectedElement.type !== 'video' && selectedElement.type !== 'shape' && (
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
                              <option value="64px">64px - כותרת ענקית</option>
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
                              <option value="500">500 - בינוני</option>
                              <option value="600">600 - בולט</option>
                              <option value="700">700 - עבה</option>
                              <option value="800">800 - עבה מאוד</option>
                              <option value="900">900 - הכי עבה</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs text-gray-400 mb-2">יישור טקסט</label>
                            <div className="flex gap-1">
                              {[
                                { value: 'right', icon: AlignRight },
                                { value: 'center', icon: AlignCenter },
                                { value: 'left', icon: AlignLeft }
                              ].map(({ value, icon: Icon }) => (
                                <button
                                  key={value}
                                  onClick={() => updateElement(selectedElement.id, { 
                                    style: { ...selectedElement.style, textAlign: value }
                                  })}
                                  className={`flex-1 p-2 rounded ${
                                    selectedElement.style?.textAlign === value
                                      ? 'bg-blue-600 text-white'
                                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                  }`}
                                >
                                  <Icon size={14} className="mx-auto" />
                                </button>
                              ))}
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

                      {/* Opacity */}
                      <div>
                        <label className="block text-xs text-gray-400 mb-2">שקיפות</label>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={selectedElement.style?.opacity || 1}
                          onChange={(e) => updateElement(selectedElement.id, { 
                            style: { ...selectedElement.style, opacity: parseFloat(e.target.value) }
                          })}
                          className="w-full"
                        />
                        <div className="text-xs text-gray-400 mt-1 text-center">
                          {Math.round((selectedElement.style?.opacity || 1) * 100)}%
                        </div>
                      </div>

                      {/* Z-Index */}
                      <div>
                        <label className="block text-xs text-gray-400 mb-2">רובד (Z-Index)</label>
                        <div className="flex gap-2">
                          <button
                            onClick={() => updateElement(selectedElement.id, { 
                              zIndex: Math.max(1, selectedElement.zIndex - 1)
                            })}
                            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs"
                          >
                            🔽
                          </button>
                          <input
                            type="number"
                            value={selectedElement.zIndex}
                            onChange={(e) => updateElement(selectedElement.id, { zIndex: parseInt(e.target.value) || 1 })}
                            className="flex-1 px-2 py-1 bg-gray-700 border border-gray-600 rounded text-xs text-white text-center"
                          />
                          <button
                            onClick={() => updateElement(selectedElement.id, { 
                              zIndex: selectedElement.zIndex + 1
                            })}
                            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs"
                          >
                            🔼
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-gray-700">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={duplicateSelectedElements}
                          className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm flex items-center justify-center gap-2"
                        >
                          <Copy size={14} />
                          שכפל
                        </button>
                        <button
                          onClick={deleteSelectedElements}
                          className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded text-sm flex items-center justify-center gap-2"
                        >
                          <Trash2 size={14} />
                          מחק
                        </button>
                      </div>
                    </div>
                  </div>
                ) : selectedElements.length > 1 ? (
                  <div className="space-y-4">
                    <div className="bg-gray-700 p-3 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">🎯 בחירה מרובה</h3>
                      <p className="text-gray-300 text-sm">
                        {selectedElements.length} אלמנטים נבחרו
                      </p>
                    </div>

                    {/* Multi-selection Actions */}
                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          const newColor = prompt('הכנס צבע רקע (HEX):', '#3b82f6');
                          if (newColor) {
                            updateSelectedElements({ 
                              style: { backgroundColor: newColor }
                            });
                          }
                        }}
                        className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
                      >
                        🎨 שנה צבע רקע
                      </button>
                      
                      <button
                        onClick={() => {
                          const minZ = Math.min(...selectedElements.map(id => 
                            elements.find(el => el.id === id)?.zIndex || 1
                          ));
                          selectedElements.forEach(id => {
                            updateElement(id, { zIndex: minZ + 100 });
                          });
                        }}
                        className="w-full px-3 py-2 bg-green-600 hover:bg-green-700 rounded text-sm"
                      >
                        🔼 הבא לחזית
                      </button>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={duplicateSelectedElements}
                          className="px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm flex items-center justify-center gap-2"
                        >
                          <Copy size={14} />
                          שכפל
                        </button>
                        <button
                          onClick={deleteSelectedElements}
                          className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded text-sm flex items-center justify-center gap-2"
                        >
                          <Trash2 size={14} />
                          מחק
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">בחר אלמנט</h3>
                    <p className="text-gray-400 text-sm mb-4">לחץ על אלמנט כדי לערוך את המאפיינים שלו</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>💡 טיפים:</p>
                      <p>• לחץ + Ctrl לבחירה מרובה</p>
                      <p>• גרור כדי להזיז</p>
                      <p>• Delete למחיקה</p>
                      <p>• Ctrl+D לשכפול</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-gray-800 border-t border-gray-700 px-4 py-2 text-xs text-gray-400 flex justify-between items-center">
          <div className="flex gap-6">
            <span>🎨 אלמנטים: {elements.length}</span>
            <span>📐 Canvas: {viewports[viewport].width}×{viewports[viewport].height}</span>
            <span>🔍 זום: {zoom}%</span>
            {selectedElements.length > 0 && (
              <span>🎯 נבחרו: {selectedElements.length}</span>
            )}
          </div>
          <div className="flex gap-4 text-xs">
            <span>💾 שמור אוטומטי: פעיל</span>
            <span>⌨️ קיצורי דרך: Ctrl+Z/Y, Ctrl+D, Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
