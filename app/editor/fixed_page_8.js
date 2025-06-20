
import dynamic from 'next/dynamic';

const LucideReact = dynamic(() => import('lucide-react').catch(() => {
  console.error('lucide-react module not found');
  return {};
}), { ssr: false });

const { Search, Plus, Image, Video, Type, ...rest } = LucideReact;

'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Search, Plus, Image, Video, Type, Square, Circle, Download, Upload, Undo, Redo, Play, Pause, Volume2, Settings, Layers, Eye, EyeOff, Lock, Unlock, Copy, Trash2, Move, RotateCw, Palette, Grid, Smartphone, Monitor, Tablet, Sun, Moon, Users, Save, FolderOpen, Share2, Code, Zap, Star, Filter, Tag, ChevronDown, ChevronRight, MessageSquare, Brain, Wand2, Sparkles, MousePointer2, PanelLeftOpen, PanelLeftClose, Layout, MoreHorizontal, Camera, Music, MapPin, Calendar, Mail, Phone, Globe, Heart } from 'lucide-react';

const AdvancedWebsiteBuilder = () => {
  const [isDark, setIsDark] = useState(true);
  const [viewport, setViewport] = useState('desktop');
  const [selectedElement, setSelectedElement] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [leftPanelTab, setLeftPanelTab] = useState('components');
  const [rightPanelTab, setRightPanelTab] = useState('properties');
  const [canvasElements, setCanvasElements] = useState([]);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [snapToGrid, setSnapToGrid] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAnimations, setShowAnimations] = useState(true);
  const canvasRef = useRef(null);

  // מנוע קומפוננטים מתקדם
  const advancedComponents = [
    {
      id: 'hero-video',
      name: 'Hero עם וידאו',
      icon: Video,
      category: 'sections',
      defaultProps: {
        backgroundVideo: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        title: 'ברוכים הבאים לעסק שלנו',
        subtitle: 'אנחנו כאן כדי להגשים את החלומות שלכם',
        buttonText: 'צור קשר',
        overlay: 'rgba(0,0,0,0.4)',
        height: '100vh',
        animation: 'parallax'
      }
    },
    {
      id: 'interactive-gallery',
      name: 'גלריה אינטראקטיבית',
      icon: Image,
      category: 'sections',
      defaultProps: {
        images: [
          'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
          'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
        ],
        layout: 'masonry',
        hoverEffect: 'zoom',
        animation: 'fadeInUp'
      }
    },
    {
      id: 'animated-counter',
      name: 'מונה אנימטי',
      icon: Star,
      category: 'elements',
      defaultProps: {
        number: 1000,
        label: 'לקוחות מרוצים',
        duration: 2000,
        animation: 'countUp'
      }
    },
    {
      id: 'scroll-trigger-text',
      name: 'טקסט עם Scroll Trigger',
      icon: Type,
      category: 'elements',
      defaultProps: {
        text: 'הטקסט הזה יופיע כשתגלול',
        animation: 'slideInFromLeft',
        trigger: 'scroll'
      }
    },
    {
      id: 'floating-contact',
      name: 'טופס צף',
      icon: MessageSquare,
      category: 'forms',
      defaultProps: {
        position: 'bottom-right',
        fields: ['name', 'email', 'message'],
        animation: 'slideUp'
      }
    },
    {
      id: 'parallax-section',
      name: 'מקטע Parallax',
      icon: Layout,
      category: 'sections',
      defaultProps: {
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        speed: 0.5,
        content: 'תוכן עם רקע פרלקס'
      }
    },
    {
      id: 'testimonial-slider',
      name: 'המלצות עם סליידר',
      icon: Users,
      category: 'sections',
      defaultProps: {
        testimonials: [
          { name: 'יוסי כהן', text: 'שירות מעולה!', rating: 5 },
          { name: 'רחל לוי', text: 'ממליצה בחום', rating: 5 }
        ],
        autoplay: true,
        animation: 'fade'
      }
    },
    {
      id: 'pricing-table',
      name: 'טבלת מחירים',
      icon: Tag,
      category: 'sections',
      defaultProps: {
        plans: [
          { name: 'בסיסי', price: '₹99', features: ['תכונה 1', 'תכונה 2'] },
          { name: 'מתקדם', price: '₹199', features: ['תכונה 1', 'תכונה 2', 'תכונה 3'] }
        ],
        highlight: 1
      }
    }
  ];

  // אנימציות מוגדרות מראש
  const animations = {
    fadeIn: 'opacity 1s ease-in-out',
    fadeInUp: 'transform 1s ease-out, opacity 1s ease-out',
    slideInFromLeft: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    slideInFromRight: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    bounce: 'animation: bounce 2s infinite',
    pulse: 'animation: pulse 2s infinite',
    parallax: 'transform: translateY(var(--scroll-offset, 0))',
    countUp: 'transition: all 2s ease-out',
    zoom: 'transform: scale(1.05)',
    rotate: 'transform: rotate(5deg)',
    slideUp: 'transform: translateY(100%) to translateY(0)'
  };

  // מערכת תבניות מתקדמת
  const professionalTemplates = [
    {
      id: 'luxury-barber',
      name: 'מספרה יוקרתית',
      category: 'business',
      description: 'עיצוב מודרני ויוקרתי למספרות ברמה גבוהה',
      features: ['וידאו ברקע', 'הזמנת תורים', 'גלריית עבודות', 'המלצות לקוחות'],
      preview: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400',
      elements: [
        {
          type: 'hero-video',
          props: {
            backgroundVideo: '/videos/barber-hero.mp4',
            title: 'ברבר סטייל - המספרה המובילה',
            subtitle: 'חוויית גילוח וסטיילינג ברמה הגבוהה ביותר',
            overlay: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3))'
          }
        },
        {
          type: 'interactive-gallery',
          props: {
            title: 'גלריית העבודות שלנו',
            images: [
              'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600',
              'https://images.unsplash.com/photo-1622286346003-c1c7a7c1bb7d?w=600'
            ]
          }
        }
      ]
    },
    {
      id: 'fitness-studio',
      name: 'סטודיו כושר מתקדם',
      category: 'health',
      description: 'אתר מרשים למאמני כושר ומרכזי ספורט',
      features: ['אנימציות 3D', 'מעקב התקדמות', 'מערכת הרשמה', 'לוח זמנים'],
      preview: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      elements: [
        {
          type: 'hero-video',
          props: {
            backgroundVideo: '/videos/fitness-hero.mp4',
            title: 'גיים צ\'יינג פיטנס',
            subtitle: 'שנה את החיים שלך עם האימונים הכי מתקדמים'
          }
        },
        {
          type: 'animated-counter',
          props: {
            counters: [
              { number: 500, label: 'חברי מועדון' },
              { number: 15, label: 'מאמנים מקצועיים' },
              { number: 1000, label: 'אימונים שבועיים' }
            ]
          }
        }
      ]
    },
    {
      id: 'law-firm-premium',
      name: 'משרד עורכי דין יוקרתי',
      category: 'professional',
      description: 'עיצוב קלאסי ומקצועי למשרדי עורכי דין',
      features: ['עיצוב קלאסי', 'אזור לקוחות', 'מאמרים משפטיים', 'יצירת קשר מאובטח'],
      preview: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400',
      elements: [
        {
          type: 'parallax-section',
          props: {
            backgroundImage: 'https://images.unsplash.com/photo-1589578662737-24369df8a1bb?w=1920',
            title: 'משרד עורכי דין כהן ושות\'',
            subtitle: 'מקצועיות, יושרה והצלחה משפטית'
          }
        }
      ]
    }
  ];

  // פונקציות עזר
  const addElement = useCallback((elementType, props = {}) => {
    const component = advancedComponents.find(c => c.id === elementType);
    if (!component) return;

    const newElement = {
      id: Date.now(),
      type: elementType,
      ...component.defaultProps,
      ...props,
      x: Math.random() * 200,
      y: Math.random() * 200,
      zIndex: canvasElements.length,
      animation: showAnimations ? component.defaultProps.animation : 'none'
    };
    
    setCanvasElements(prev => [...prev, newElement]);
    saveToHistory([...canvasElements, newElement]);
  }, [canvasElements, showAnimations]);

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

  // AI מתקדם לשיפור תוכן
  const generateWithAI = useCallback(async () => {
    if (!aiPrompt.trim()) return;
    
    setIsGenerating(true);
    
    // סימולציה של AI מתקדם
    setTimeout(() => {
      const prompt = aiPrompt.toLowerCase();
      
      if (prompt.includes('מספרה') || prompt.includes('barber')) {
        addElement('hero-video', {
          title: 'מספרה מקצועית',
          subtitle: 'גילוח וסטיילינג ברמה הגבוהה ביותר',
          backgroundVideo: '/videos/barber-demo.mp4'
        });
      } else if (prompt.includes('כושר') || prompt.includes('gym') || prompt.includes('fitness')) {
        addElement('hero-video', {
          title: 'מרכז כושר מתקדם',
          subtitle: 'אימונים שיובילו אותך להצלחה',
          backgroundVideo: '/videos/gym-demo.mp4'
        });
        addElement('animated-counter', {
          number: 500,
          label: 'חברי מועדון מאושרים'
        });
      } else if (prompt.includes('עורך דין') || prompt.includes('law') || prompt.includes('משפטי')) {
        addElement('parallax-section', {
          title: 'משרד עורכי דין מוביל',
          subtitle: 'ייצוג משפטי ברמה הגבוהה ביותר'
        });
      } else {
        addElement('scroll-trigger-text', {
          text: `תוכן חכם שנוצר על ידי AI: ${aiPrompt}`
        });
      }
      
      setIsGenerating(false);
      setAiPrompt('');
    }, 2500);
  }, [aiPrompt, addElement]);

  // טעינת תבנית מקצועית
  const loadTemplate = useCallback((templateId) => {
    const template = professionalTemplates.find(t => t.id === templateId);
    if (!template) return;

    const newElements = template.elements.map((element, index) => ({
      id: Date.now() + index,
      type: element.type,
      ...element.props,
      x: 0,
      y: index * 100,
      zIndex: index
    }));

    setCanvasElements(newElements);
    saveToHistory(newElements);
  }, [saveToHistory]);

  // רכיב Hero עם וידאו
  const HeroVideoComponent = ({ element }) => (
    <div 
      className="relative w-full overflow-hidden"
      style={{ height: element.height || '80vh' }}
    >
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted
        src={element.backgroundVideo}
      />
      <div 
        className="absolute inset-0"
        style={{ background: element.overlay }}
      />
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl">
          <h1 
            className="text-5xl font-bold mb-6 animate-fade-in-up"
            style={{ 
              animationDelay: '0.3s',
              fontFamily: 'inherit'
            }}
          >
            {element.title}
          </h1>
          <p 
            className="text-xl mb-8 animate-fade-in-up opacity-90"
            style={{ animationDelay: '0.6s' }}
          >
            {element.subtitle}
          </p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '0.9s' }}
          >
            {element.buttonText || 'צור קשר'}
          </button>
        </div>
      </div>
    </div>
  );

  // רכיב גלריה אינטראקטיבית
  const InteractiveGallery = ({ element }) => (
    <div className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">{element.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {element.images?.map((image, index) => (
          <div 
            key={index}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
            }}
          >
            <img 
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                צפה בפרטים
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // רכיב מונה אנימטי
  const AnimatedCounter = ({ element }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setCount(element.number);
      }, 500);
      return () => clearTimeout(timer);
    }, [element.number]);

    return (
      <div className="text-center p-8">
        <div 
          className="text-4xl font-bold text-blue-600 mb-2"
          style={{ 
            transition: 'all 2s ease-out',
            transform: count > 0 ? 'scale(1)' : 'scale(0.8)'
          }}
        >
          {count.toLocaleString()}+
        </div>
        <div className="text-lg text-gray-600">{element.label}</div>
      </div>
    );
  };

  // סגנונות CSS מתקדמים
  const advancedStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out both;
    }
    
    .parallax-bg {
      transform: translateY(var(--scroll-offset, 0));
    }
  `;

  // רינדור רכיב לפי סוג
  const renderElement = (element) => {
    switch (element.type) {
      case 'hero-video':
        return <HeroVideoComponent element={element} />;
      case 'interactive-gallery':
        return <InteractiveGallery element={element} />;
      case 'animated-counter':
        return <AnimatedCounter element={element} />;
      case 'scroll-trigger-text':
        return (
          <div className="py-8 px-4 text-center">
            <h2 className="text-2xl font-bold animate-fade-in-up">{element.text}</h2>
          </div>
        );
      case 'parallax-section':
        return (
          <div 
            className="relative py-32 bg-cover bg-center parallax-bg"
            style={{ backgroundImage: `url(${element.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 text-center text-white px-4">
              <h2 className="text-4xl font-bold mb-4">{element.title}</h2>
              <p className="text-xl">{element.subtitle}</p>
            </div>
          </div>
        );
      default:
        return <div className="p-4 border border-gray-300 rounded">אלמנט לא מזוהה</div>;
    }
  };

  return (
    <div className={`h-screen flex ${isDark ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <style>{advancedStyles}</style>
      
      {/* Left Panel */}
      <div className={`${leftPanelCollapsed ? 'w-16' : 'w-80'} ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border-r transition-all duration-300 flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-current">
          <div className="flex items-center justify-between">
            {!leftPanelCollapsed && (
              <div>
                <h1 className="text-xl font-bold flex items-center">
                  <Zap className="mr-2 text-blue-500" size={24} />
                  WebMaster Pro
                </h1>
                <p className="text-sm opacity-70">Advanced Builder</p>
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
                { id: 'ai', label: 'AI Pro', icon: Brain },
                { id: 'components', label: 'רכיבים', icon: Layout },
                { id: 'templates', label: 'תבניות', icon: Sparkles },
                { id: 'animations', label: 'אנימציות', icon: Zap }
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
              {/* AI Assistant Pro */}
              {leftPanelTab === 'ai' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <Brain className="mx-auto mb-2 text-purple-500" size={32} />
                    <h3 className="font-semibold">AI Assistant Pro</h3>
                    <p className="text-sm opacity-70">יצירת תוכן מתקדם עם בינה מלאכותית</p>
                  </div>
                  
                  <div className="space-y-3">
                    <textarea
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="תאר מה אתה רוצה ליצור... למשל: 'צור hero section למספרה יוקרתית עם וידאו ברקע'"
                      className={`w-full p-3 rounded-lg border resize-none ${
                        isDark ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-300'
                      }`}
                      rows={4}
                    />
                    
                    <button
                      onClick={generateWithAI}
                      disabled={isGenerating || !aiPrompt.trim()}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white p-3 rounded-lg hover:from-purple-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
                    <h4 className="font-medium mb-3">דוגמאות מהירות:</h4>
                    <div className="space-y-2">
                      {[
                        "צור hero section למספרה עם וידאו ברקע",
                        "הוסף גלריה אינטראקטיבית לסטודיו כושר",
                        "צור מקטע parallax לעורך דין",
                        "הוסף מונים אנימטיים למרכז רפואי"
                      ].map((example, idx) => (
                        <button
                          key={idx}
                          onClick={() => setAiPrompt(example)}
                          className={`w-full text-left p-2 rounded text-sm transition-colors ${
                            isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                          }`}
                        >
                          • {example}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Advanced Components */}
              {leftPanelTab === 'components' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <Layout className="mx-auto mb-2 text-green-500" size={32} />
                    <h3 className="font-semibold">רכיבים מתקדמים</h3>
                    <p className="text-sm opacity-70">גרור והשחרר לקנווס</p>
                  </div>
                  
                  {/* קטגוריות רכיבים */}
                  {['sections', 'elements', 'forms'].map(category => (
                    <div key={category} className="space-y-2">
                      <h4 className="font-medium text-sm opacity-80 capitalize">
                        {category === 'sections' ? 'מקטעים' : category === 'elements' ? 'אלמנטים' : 'טפסים'}
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {advancedComponents
                          .filter(comp => comp.category === category)
                          .map(component => (
                            <button
                              key={component.id}
                              onClick={() => addElement(component.id)}
                              className={`p-3 rounded-lg border-2 border-dashed transition-all hover:scale-105 text-left ${
                                isDark ? 'border-slate-600 hover:border-blue-500 hover:bg-slate-700' : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                <component.icon size={20} />
                                <span className="text-sm font-medium">{component.name}</span>
                              </div>
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Professional Templates */}
              {leftPanelTab === 'templates' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <Sparkles className="mx-auto mb-2 text-yellow-500" size={32} />
                    <h3 className="font-semibold">תבניות מקצועיות</h3>
                    <p className="text-sm opacity-70">תבניות ברמה עולמית</p>
                  </div>
                  
                  <div className="space-y-3">
                    {professionalTemplates.map(template => (
                      <div
                        key={template.id}
                        className={`rounded-lg border overflow-hidden cursor-pointer transition-all hover:scale-105 ${
                          isDark ? 'border-slate-600 hover:border-yellow-500' : 'border-gray-300 hover:border-yellow-500'
                        }`}
                        onClick={() => loadTemplate(template.id)}
                      >
                        <img 
                          src={template.preview} 
                          alt={template.name}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-3">
                          <h4 className="font-medium text-sm mb-1">{template.name}</h4>
                          <p className="text-xs opacity-70 mb-2">{template.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {template.features.slice(0, 2).map((feature, idx) => (
                              <span 
                                key={idx}
                                className={`inline-block px-2 py-1 rounded-full text-xs ${
                                  isDark ? 'bg-slate-600' : 'bg-gray-200'
                                }`}
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Animation Controls */}
              {leftPanelTab === 'animations' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <Zap className="mx-auto mb-2 text-orange-500" size={32} />
                    <h3 className="font-semibold">אנימציות</h3>
                    <p className="text-sm opacity-70">שליטה באנימציות</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">הצג אנימציות</span>
                      <button
                        onClick={() => setShowAnimations(!showAnimations)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          showAnimations ? 'bg-blue-500' : 'bg-gray-400'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          showAnimations ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm">הפעל תצוגה</span>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`p-2 rounded-full transition-colors ${
                          isPlaying ? 'bg-green-500 text-white' : 'bg-gray-400'
                        }`}
                      >
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                    </div>

                    <div className="border-t pt-3">
                      <h4 className="font-medium mb-2">אנימציות זמינות:</h4>
                      <div className="space-y-1">
                        {Object.keys(animations).map(animName => (
                          <div 
                            key={animName}
                            className={`p-2 rounded text-sm cursor-pointer transition-colors ${
                              isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                            }`}
                          >
                            {animName}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Toolbar */}
        <div className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border-b p-3`}>
          <div className="flex items-center justify-between">
            {/* Left Controls */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={undo}
                  disabled={historyIndex <= 0}
                  className="p-2 rounded hover:bg-opacity-20 hover:bg-gray-500 disabled:opacity-50"
                  title="ביטול (Ctrl+Z)"
                >
                  <Undo size={18} />
                </button>
                <button
                  onClick={redo}
                  disabled={historyIndex >= history.length - 1}
                  className="p-2 rounded hover:bg-opacity-20 hover:bg-gray-500 disabled:opacity-50"
                  title="חזרה (Ctrl+Y)"
                >
                  <Redo size={18} />
                </button>
              </div>

              <div className="h-6 w-px bg-gray-300"></div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowGrid(!showGrid)}
                  className={`p-2 rounded transition-colors ${showGrid ? 'bg-blue-500 text-white' : 'hover:bg-opacity-20 hover:bg-gray-500'}`}
                  title="הצג רשת"
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setSnapToGrid(!snapToGrid)}
                  className={`p-2 rounded transition-colors ${snapToGrid ? 'bg-blue-500 text-white' : 'hover:bg-opacity-20 hover:bg-gray-500'}`}
                  title="הצמד לרשת"
                >
                  <MousePointer2 size={18} />
                </button>
              </div>
            </div>

            {/* Center Controls - Viewport */}
            <div className="flex items-center space-x-2 bg-gray-200 dark:bg-slate-700 rounded-lg p-1">
              {[
                { id: 'desktop', icon: Monitor, width: '1920px' },
                { id: 'tablet', icon: Tablet, width: '768px' },
                { id: 'mobile', icon: Smartphone, width: '375px' }
              ].map(device => (
                <button
                  key={device.id}
                  onClick={() => setViewport(device.id)}
                  className={`px-3 py-2 rounded flex items-center space-x-2 transition-colors ${
                    viewport === device.id
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-opacity-20 hover:bg-gray-500'
                  }`}
                >
                  <device.icon size={16} />
                  <span className="text-sm">{device.width}</span>
                </button>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className="text-sm">זום:</span>
                <select
                  value={zoomLevel}
                  onChange={(e) => setZoomLevel(Number(e.target.value))}
                  className={`px-2 py-1 rounded border ${
                    isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'
                  }`}
                >
                  <option value={50}>50%</option>
                  <option value={75}>75%</option>
                  <option value={100}>100%</option>
                  <option value={125}>125%</option>
                  <option value={150}>150%</option>
                </select>
              </div>

              <div className="h-6 w-px bg-gray-300"></div>

              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded hover:bg-opacity-20 hover:bg-gray-500"
                title="החלף מצב"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center space-x-2">
                  <Save size={16} />
                  <span>שמור</span>
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center space-x-2">
                  <Download size={16} />
                  <span>ייצא</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 overflow-auto">
          <div
            ref={canvasRef}
            className={`min-h-full transition-all duration-300 ${
              isDark ? 'bg-slate-900' : 'bg-white'
            }`}
            style={{
              width: viewport === 'desktop' ? '1920px' : viewport === 'tablet' ? '768px' : '375px',
              margin: '0 auto',
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: 'top center',
              backgroundImage: showGrid ? `
                linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
                linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)
              ` : 'none',
              backgroundSize: showGrid ? '20px 20px' : 'none'
            }}
          >
            {/* Canvas Elements */}
            {canvasElements.map(element => (
              <div
                key={element.id}
                onClick={() => setSelectedElement(element)}
                className={`${selectedElement?.id === element.id ? 'ring-2 ring-blue-500' : ''}`}
                style={{
                  position: element.type.includes('hero') || element.type.includes('section') ? 'relative' : 'absolute',
                  left: element.type.includes('hero') || element.type.includes('section') ? 'auto' : element.x,
                  top: element.type.includes('hero') || element.type.includes('section') ? 'auto' : element.y,
                  zIndex: element.zIndex
                }}
              >
                {renderElement(element)}
              </div>
            ))}

            {/* Empty State */}
            {canvasElements.length === 0 && (
              <div className="flex items-center justify-center h-screen text-center">
                <div className="max-w-md">
                  <div className="mb-6">
                    <Sparkles className="mx-auto text-gray-400" size={64} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">ברוכים הבאים לעורך המתקדם</h3>
                  <p className="text-gray-500 mb-6">
                    התחל לבנות אתרים ברמה עולמית עם רכיבים מתקדמים, אנימציות, ו-AI
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => setLeftPanelTab('ai')}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 flex items-center justify-center space-x-2"
                    >
                      <Brain size={20} />
                      <span>התחל עם AI</span>
                    </button>
                    <button
                      onClick={() => setLeftPanelTab('templates')}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-700 flex items-center justify-center space-x-2"
                    >
                      <Sparkles size={20} />
                      <span>בחר תבנית מקצועית</span>
                    </button>
                    <button
                      onClick={() => setLeftPanelTab('components')}
                      className="w-full bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 flex items-center justify-center space-x-2"
                    >
                      <Layout size={20} />
                      <span>הוסף רכיבים</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className={`${rightPanelCollapsed ? 'w-16' : 'w-80'} ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border-l transition-all duration-300 flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-current">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setRightPanelCollapsed(!rightPanelCollapsed)}
              className="p-2 rounded hover:bg-opacity-20 hover:bg-gray-500"
            >
              {rightPanelCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
            </button>
            {!rightPanelCollapsed && (
              <div className="text-right">
                <h3 className="font-semibold">מאפיינים מתקדמים</h3>
                <p className="text-sm opacity-70">ערוך ושפר את האלמנט</p>
              </div>
            )}
          </div>
        </div>

        {!rightPanelCollapsed && (
          <div className="flex-1 overflow-y-auto p-4">
            {selectedElement ? (
              <div className="space-y-4">
                <div className="text-center">
                  <Settings className="mx-auto mb-2 text-orange-500" size={32} />
                  <h4 className="font-semibold">{selectedElement.type}</h4>
                  <p className="text-sm opacity-70">ID: {selectedElement.id}</p>
                </div>

                {/* Advanced Properties */}
                <div className="space-y-4">
                  {selectedElement.type === 'hero-video' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2">כותרת</label>
                        <input
                          type="text"
                          value={selectedElement.title}
                          onChange={(e) => {
                            const newElements = canvasElements.map(el =>
                              el.id === selectedElement.id ? { ...el, title: e.target.value } : el
                            );
                            setCanvasElements(newElements);
                            setSelectedElement({ ...selectedElement, title: e.target.value });
                          }}
                          className={`w-full px-3 py-2 rounded border ${
                            isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'
                          }`}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">כתובית</label>
                        <textarea
                          value={selectedElement.subtitle}
                          onChange={(e) => {
                            const newElements = canvasElements.map(el =>
                              el.id === selectedElement.id ? { ...el, subtitle: e.target.value } : el
                            );
                            setCanvasElements(newElements);
                            setSelectedElement({ ...selectedElement, subtitle: e.target.value });
                          }}
                          className={`w-full px-3 py-2 rounded border ${
                            isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'
                          }`}
                          rows={3}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">וידאו ברקע</label>
                        <input
                          type="url"
                          value={selectedElement.backgroundVideo}
                          onChange={(e) => {
                            const newElements = canvasElements.map(el =>
                              el.id === selectedElement.id ? { ...el, backgroundVideo: e.target.value } : el
                            );
                            setCanvasElements(newElements);
                            setSelectedElement({ ...selectedElement, backgroundVideo: e.target.value });
                          }}
                          className={`w-full px-3 py-2 rounded border ${
                            isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'
                          }`}
                        />
                      </div>
                    </>
                  )}

                  {selectedElement.type === 'animated-counter' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2">מספר</label>
                        <input
                          type="number"
                          value={selectedElement.number}
                          onChange={(e) => {
                            const newElements = canvasElements.map(el =>
                              el.id === selectedElement.id ? { ...el, number: Number(e.target.value) } : el
                            );
                            setCanvasElements(newElements);
                            setSelectedElement({ ...selectedElement, number: Number(e.target.value) });
                          }}
                          className={`w-full px-3 py-2 rounded border ${
                            isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'
                          }`}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">תווית</label>
                        <input
                          type="text"
                          value={selectedElement.label}
                          onChange={(e) => {
                            const newElements = canvasElements.map(el =>
                              el.id === selectedElement.id ? { ...el, label: e.target.value } : el
                            );
                            setCanvasElements(newElements);
                            setSelectedElement({ ...selectedElement, label: e.target.value });
                          }}
                          className={`w-full px-3 py-2 rounded border ${
                            isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'
                          }`}
                        />
                      </div>
                    </>
                  )}

                  {/* Animation Controls */}
                  <div className="border-t pt-4">
                    <h5 className="font-medium mb-2">אנימציה</h5>
                    <select
                      value={selectedElement.animation || 'none'}
                      onChange={(e) => {
                        const newElements = canvasElements.map(el =>
                          el.id === selectedElement.id ? { ...el, animation: e.target.value } : el
                        );
                        setCanvasElements(newElements);
                        setSelectedElement({ ...selectedElement, animation: e.target.value });
                      }}
                      className={`w-full px-3 py-2 rounded border ${
                        isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'
                      }`}
                    >
                      <option value="none">ללא אנימציה</option>
                      {Object.keys(animations).map(anim => (
                        <option key={anim} value={anim}>{anim}</option>
                      ))}
                    </select>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-4 border-t">
                    <button
                      onClick={() => {
                        const newElement = { 
                          ...selectedElement, 
                          id: Date.now(), 
                          x: selectedElement.x + 20, 
                          y: selectedElement.y + 20 
                        };
                        setCanvasElements([...canvasElements, newElement]);
                      }}
                      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 flex items-center justify-center space-x-2"
                    >
                      <Copy size={16} />
                      <span>שכפל</span>
                    </button>
                    <button
                      onClick={() => {
                        const newElements = canvasElements.filter(el => el.id !== selectedElement.id);
                        setCanvasElements(newElements);
                        setSelectedElement(null);
                      }}
                      className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 flex items-center justify-center space-x-2"
                    >
                      <Trash2 size={16} />
                      <span>מחק</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center pt-20">
                <MousePointer2 className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-gray-500">בחר אלמנט לעריכה מתקדמת</p>
                <p className="text-sm text-gray-400 mt-2">
                  לחץ על רכיב בקנבס כדי לערוך את המאפיינים שלו
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedWebsiteBuilder;
