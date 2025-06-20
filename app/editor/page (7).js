import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Search, Plus, Image, Video, Type, Square, Circle, Download, Upload, Undo, Redo, Play, Pause, Volume2, Settings, Layers, Eye, EyeOff, Lock, Unlock, Copy, Trash2, Move, RotateCw, Palette, Grid, Smartphone, Monitor, Tablet, Sun, Moon, Users, Save, FolderOpen, Share2, Code, Zap, Star, Filter, Tag, ChevronDown, ChevronRight, MessageSquare, Brain, Wand2, Sparkles, MousePointer2, PanelLeftOpen, PanelLeftClose, Layout, MoreHorizontal } from 'lucide-react';

const AdvancedWebsiteBuilder = () => {
  const [isDark, setIsDark] = useState(true);
  const [viewport, setViewport] = useState('desktop');
  const [selectedElement, setSelectedElement] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [leftPanelTab, setLeftPanelTab] = useState('components');
  const [rightPanelTab, setRightPanelTab] = useState('properties');
  const [mediaCategory, setMediaCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [canvasElements, setCanvasElements] = useState([]);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentProject, setCurrentProject] = useState('פרויקט חדש');
  const [showMediaPanel, setShowMediaPanel] = useState(false);
  const [dragging, setDragging] = useState(null);
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false);
  const canvasRef = useRef(null);
  const [showGrid, setShowGrid] = useState(true);
  const [snapToGrid, setSnapToGrid] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);

  // מאגר תמונות מורחב
  const stockImages = [
    // עסקים ומשרדים
    { id: 1, url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800', category: 'business', tags: ['office', 'laptop', 'work'] },
    { id: 2, url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800', category: 'business', tags: ['startup', 'team', 'office'] },
    { id: 3, url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800', category: 'business', tags: ['workspace', 'minimal', 'desk'] },
    { id: 4, url: 'https://images.unsplash.com/photo-1664475450299-ceaefb4651a8?w=800', category: 'business', tags: ['meeting', 'corporate'] },
    
    // טכנולוגיה
    { id: 5, url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800', category: 'technology', tags: ['coding', 'developer', 'screen'] },
    { id: 6, url: 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?w=800', category: 'technology', tags: ['server', 'data', 'cloud'] },
    { id: 7, url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800', category: 'technology', tags: ['mobile', 'app', 'design'] },
    { id: 8, url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800', category: 'technology', tags: ['ai', 'robot', 'future'] },
    
    // בריאות ורפואה
    { id: 9, url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800', category: 'health', tags: ['medical', 'doctor', 'hospital'] },
    { id: 10, url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800', category: 'health', tags: ['wellness', 'meditation', 'yoga'] },
    { id: 11, url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800', category: 'health', tags: ['fitness', 'gym', 'sport'] },
    
    // חינוך
    { id: 12, url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800', category: 'education', tags: ['classroom', 'learning', 'books'] },
    { id: 13, url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800', category: 'education', tags: ['library', 'study', 'knowledge'] },
    { id: 14, url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800', category: 'education', tags: ['graduation', 'university', 'diploma'] },
    
    // יצירתיות ועיצוב
    { id: 15, url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800', category: 'creative', tags: ['design', 'art', 'creative'] },
    { id: 16, url: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800', category: 'creative', tags: ['colors', 'palette', 'painting'] },
    { id: 17, url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800', category: 'creative', tags: ['studio', 'workspace', 'art'] },
    
    // טבע ונוף
    { id: 18, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', category: 'nature', tags: ['mountain', 'landscape', 'view'] },
    { id: 19, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', category: 'nature', tags: ['forest', 'trees', 'peaceful'] },
    { id: 20, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', category: 'nature', tags: ['beach', 'ocean', 'sunset'] },
    
    // אנשים וקהילה
    { id: 21, url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800', category: 'people', tags: ['team', 'collaboration', 'diverse'] },
    { id: 22, url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800', category: 'people', tags: ['woman', 'professional', 'portrait'] },
    { id: 23, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', category: 'people', tags: ['man', 'business', 'suit'] },
    
    // אוכל ומסעדות
    { id: 24, url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800', category: 'food', tags: ['restaurant', 'dining', 'gourmet'] },
    { id: 25, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800', category: 'food', tags: ['cooking', 'kitchen', 'chef'] },
    
    // נדל"ן ואדריכלות
    { id: 26, url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800', category: 'architecture', tags: ['house', 'modern', 'home'] },
    { id: 27, url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', category: 'architecture', tags: ['building', 'city', 'urban'] },
    
    // רכב ותחבורה
    { id: 28, url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800', category: 'transport', tags: ['car', 'luxury', 'vehicle'] },
    { id: 29, url: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800', category: 'transport', tags: ['bike', 'city', 'eco'] },
    
    // תיירות ונסיעות
    { id: 30, url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800', category: 'travel', tags: ['city', 'europe', 'architecture'] },
    { id: 31, url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800', category: 'travel', tags: ['tropical', 'beach', 'vacation'] }
  ];

  // מאגר וידאו מורחב
  const stockVideos = [
    { id: 1, url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4', category: 'business', title: 'Business Meeting', duration: '0:30' },
    { id: 2, url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4', category: 'technology', title: 'Tech Innovation', duration: '1:00' },
    { id: 3, url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4', category: 'nature', title: 'Nature Documentary', duration: '2:00' },
    { id: 4, url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_1mb.mp4', category: 'creative', title: 'Creative Process', duration: '0:45' },
    { id: 5, url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_2mb.mp4', category: 'people', title: 'Team Collaboration', duration: '1:15' },
    { id: 6, url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_5mb.mp4', category: 'health', title: 'Fitness Training', duration: '1:30' }
  ];

  // תבניות AI מתקדמות
  const aiTemplates = [
    {
      id: 'hero-business',
      title: 'Hero Section עסקי',
      description: 'יוצר מקטע פתיחה מרשים לעסק',
      category: 'business',
      template: {
        type: 'section',
        style: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' },
        content: [
          { type: 'h1', text: 'הפתרון העסקי שלך מתחיל כאן', style: { fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' } },
          { type: 'p', text: 'אנו מובילים בתחום שלנו ומספקים שירותים ברמה הגבוהה ביותר', style: { fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 } },
          { type: 'button', text: 'התחל עכשיו', style: { padding: '1rem 2rem', fontSize: '1.2rem', background: 'white', color: '#667eea', border: 'none', borderRadius: '8px', cursor: 'pointer' } }
        ]
      }
    },
    {
      id: 'services-grid',
      title: 'רשת שירותים',
      description: 'יוצר רשת של שירותים עם אייקונים',
      category: 'business',
      template: {
        type: 'section',
        style: { padding: '4rem 2rem', background: '#f8fafc' },
        content: [
          { type: 'h2', text: 'השירותים שלנו', style: { textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#334155' } },
          { type: 'div', style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }, content: [
            { type: 'div', style: { background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }, content: [
              { type: 'h3', text: 'שירות ראשון', style: { fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' } },
              { type: 'p', text: 'תיאור מפורט של השירות הראשון שאנו מספקים' }
            ]},
            { type: 'div', style: { background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }, content: [
              { type: 'h3', text: 'שירות שני', style: { fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' } },
              { type: 'p', text: 'תיאור מפורט של השירות השני שאנו מספקים' }
            ]},
            { type: 'div', style: { background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }, content: [
              { type: 'h3', text: 'שירות שלישי', style: { fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' } },
              { type: 'p', text: 'תיאור מפורט של השירות השלישי שאנו מספקים' }
            ]}
          ]}
        ]
      }
    },
    {
      id: 'contact-form',
      title: 'טופס יצירת קשר',
      description: 'יוצר טופס יצירת קשר מעוצב ופונקציונלי',
      category: 'contact',
      template: {
        type: 'section',
        style: { padding: '4rem 2rem', background: '#1e293b', color: 'white' },
        content: [
          { type: 'h2', text: 'צור קשר', style: { textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' } },
          { type: 'form', style: { maxWidth: '600px', margin: '0 auto', display: 'grid', gap: '1.5rem' }, content: [
            { type: 'input', placeholder: 'שם מלא', style: { padding: '1rem', borderRadius: '8px', border: 'none', fontSize: '1rem' } },
            { type: 'input', placeholder: 'אימייל', style: { padding: '1rem', borderRadius: '8px', border: 'none', fontSize: '1rem' } },
            { type: 'textarea', placeholder: 'הודעה', style: { padding: '1rem', borderRadius: '8px', border: 'none', fontSize: '1rem', minHeight: '120px', resize: 'vertical' } },
            { type: 'button', text: 'שלח הודעה', style: { padding: '1rem 2rem', fontSize: '1.1rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' } }
          ]}
        ]
      }
    },
    {
      id: 'gallery-modern',
      title: 'גלריה מודרנית',
      description: 'יוצר גלריית תמונות רספונסיבית ומרשימה',
      category: 'gallery',
      template: {
        type: 'section',
        style: { padding: '4rem 2rem' },
        content: [
          { type: 'h2', text: 'הגלריה שלנו', style: { textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#1e293b' } },
          { type: 'div', style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }, content: [
            { type: 'img', src: stockImages[0].url, style: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' } },
            { type: 'img', src: stockImages[1].url, style: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' } },
            { type: 'img', src: stockImages[2].url, style: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' } },
            { type: 'img', src: stockImages[3].url, style: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' } }
          ]}
        ]
      }
    }
  ];

  // רכיבים זמינים
  const components = [
    { id: 'text', name: 'טקסט', icon: Type, defaultProps: { text: 'טקסט חדש', fontSize: '16px', color: '#333' } },
    { id: 'heading', name: 'כותרת', icon: Type, defaultProps: { text: 'כותרת חדשה', fontSize: '32px', fontWeight: 'bold', color: '#333' } },
    { id: 'button', name: 'כפתור', icon: Square, defaultProps: { text: 'לחץ כאן', background: '#3b82f6', color: 'white', padding: '12px 24px', borderRadius: '6px' } },
    { id: 'image', name: 'תמונה', icon: Image, defaultProps: { src: stockImages[0].url, width: '300px', height: '200px', objectFit: 'cover' } },
    { id: 'video', name: 'וידאו', icon: Video, defaultProps: { src: stockVideos[0].url, width: '400px', height: '225px', controls: true } },
    { id: 'container', name: 'מיכל', icon: Square, defaultProps: { background: '#f1f5f9', padding: '20px', borderRadius: '8px', minHeight: '100px' } },
    { id: 'section', name: 'מקטע', icon: Layout, defaultProps: { background: '#ffffff', padding: '40px 20px', minHeight: '200px' } }
  ];

  // פונקציות עזר
  const addElement = useCallback((elementType, props = {}) => {
    const newElement = {
      id: Date.now(),
      type: elementType,
      ...components.find(c => c.id === elementType)?.defaultProps,
      ...props,
      x: Math.random() * 200,
      y: Math.random() * 200,
      zIndex: canvasElements.length
    };
    
    setCanvasElements(prev => [...prev, newElement]);
    saveToHistory([...canvasElements, newElement]);
  }, [canvasElements]);

  const saveToHistory = useCallback((elements) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(elements)));
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setCanvasElements(history[historyIndex - 1]);
    }
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setCanvasElements(history[historyIndex + 1]);
    }
  }, [history, historyIndex]);

  // AI Generator מתקדם
  const generateWithAI = useCallback(async () => {
    if (!aiPrompt.trim()) return;
    
    setIsGenerating(true);
    
    // סימולציה של AI generation
    setTimeout(() => {
      const prompt = aiPrompt.toLowerCase();
      
      if (prompt.includes('hero') || prompt.includes('פתיחה')) {
        const template = aiTemplates.find(t => t.id === 'hero-business');
        if (template) {
          addElement('section', template.template);
        }
      } else if (prompt.includes('שירותים') || prompt.includes('services')) {
        const template = aiTemplates.find(t => t.id === 'services-grid');
        if (template) {
          addElement('section', template.template);
        }
      } else if (prompt.includes('קשר') || prompt.includes('contact')) {
        const template = aiTemplates.find(t => t.id === 'contact-form');
        if (template) {
          addElement('section', template.template);
        }
      } else if (prompt.includes('גלריה') || prompt.includes('gallery')) {
        const template = aiTemplates.find(t => t.id === 'gallery-modern');
        if (template) {
          addElement('section', template.template);
        }
      } else {
        // יצירת תוכן כללי
        addElement('text', { text: `תוכן שנוצר על ידי AI: ${aiPrompt}` });
      }
      
      setIsGenerating(false);
      setAiPrompt('');
    }, 2000);
  }, [aiPrompt, addElement]);

  // סינון מדיה
  const filteredImages = stockImages.filter(img => {
    const matchesCategory = mediaCategory === 'all' || img.category === mediaCategory;
    const matchesSearch = searchTerm === '' || 
      img.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      img.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredVideos = stockVideos.filter(video => {
    const matchesCategory = mediaCategory === 'all' || video.category === mediaCategory;
    const matchesSearch = searchTerm === '' || 
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // גריד רקע
  const gridStyle = showGrid ? {
    backgroundImage: `
      linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
      linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px'
  } : {};

  return (
    <div className={`h-screen flex ${isDark ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      {/* Left Panel */}
      <div className={`${leftPanelCollapsed ? 'w-16' : 'w-80'} ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border-r transition-all duration-300 flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-current">
          <div className="flex items-center justify-between">
            {!leftPanelCollapsed && (
              <div>
                <h1 className="text-xl font-bold">WebMaster Pro</h1>
                <p className="text-sm opacity-70">{currentProject}</p>
              </div>
            )}
            <button
              onClick={() => setLeftPanelCollapsed(!leftPanelCollapsed)}
              className="p-2 rounded hover:bg-opacity-20 hover:bg-gray-500"
            >
              {leftPanelCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
            </button>
          </div>
        </div>

        {!leftPanelCollapsed && (
          <>
            {/* Tabs */}
            <div className="flex border-b border-current">
              {[
                { id: 'ai', label: 'AI', icon: Brain },
                { id: 'components', label: 'רכיבים', icon: Layout },
                { id: 'media', label: 'מדיה', icon: Image },
                { id: 'templates', label: 'תבניות', icon: Sparkles }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setLeftPanelTab(tab.id)}
                  className={`flex-1 p-3 text-center border-b-2 transition-colors ${
                    leftPanelTab === tab.id 
                      ? 'border-blue-500 text-blue-500' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <tab.icon size={18} className="mx-auto mb-1" />
                  <div className="text-xs">{tab.label}</div>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* AI Assistant */}
              {leftPanelTab === 'ai' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <Brain className="mx-auto mb-2 text-blue-500" size={32} />
                    <h3 className="font-semibold">AI Assistant Pro</h3>
                    <p className="text-sm opacity-70">צור תוכן מתקדם עם AI</p>
                  </div>
                  
                  <div className="space-y-3">
                    <textarea
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="תאר מה אתה רוצה ליצור... למשל: 'צור hero section לחברת טכנולוגיה'"
                      className={`w-full p-3 rounded-lg border resize-none ${
                        isDark ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-300'
                      }`}
                      rows={4}
                    />
                    
                    <button
                      onClick={generateWithAI}
                      disabled={isGenerating || !aiPrompt.trim()}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          <span>יוצר...</span>
                        </>
                      ) : (
                        <>
                          <Wand2 size={18} />
                          <span>צור עם AI</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">דוגמא
