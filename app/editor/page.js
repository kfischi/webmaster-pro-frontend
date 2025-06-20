'use client';

import React, { useState } from 'react';

export default function AdvancedEditor() {
  const [selectedTab, setSelectedTab] = useState('ai');
  const [aiPrompt, setAiPrompt] = useState('');
  const [elements, setElements] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // רכיבים בסיסיים
  const components = [
    { id: 'hero', name: 'Hero עם וידאו', icon: '🎬' },
    { id: 'gallery', name: 'גלריה', icon: '🖼️' },
    { id: 'text', name: 'טקסט', icon: '📝' },
    { id: 'button', name: 'כפתור', icon: '🔘' },
    { id: 'form', name: 'טופס', icon: '📋' }
  ];

  // תבניות מקצועיות
  const templates = [
    { 
      id: 'barber', 
      name: 'מספרה יוקרתית', 
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=300&h=200&fit=crop',
      description: 'עיצוב מודרני עם וידאו ברקע'
    },
    { 
      id: 'gym', 
      name: 'חדר כושר מתקדם', 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
      description: 'אנימציות ומונים דינמיים'
    },
    { 
      id: 'lawyer', 
      name: 'משרד עורכי דין', 
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop',
      description: 'עיצוב קלאסי ומקצועי'
    },
    { 
      id: 'restaurant', 
      name: 'מסעדה גורמה', 
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      description: 'תפריט דיגיטלי והזמנות'
    },
    { 
      id: 'clinic', 
      name: 'קליניקה רפואית', 
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop',
      description: 'הזמנת תורים ומידע רפואי'
    },
    { 
      id: 'studio', 
      name: 'סטודיו יוגה', 
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      description: 'שיעורים ומדיטציה'
    }
  ];

  // AI דוגמאות
  const aiExamples = [
    "צור hero section למספרה יוקרתית עם וידאו ברקע",
    "הוסף גלריית עבודות אינטראקטיבית",
    "צור מקטע שירותים עם מחירון",
    "הוסף טופס יצירת קשר מעוצב",
    "צור מקטע המלצות לקוחות",
    "הוסף מונים אנימטיים להישגים"
  ];

  // הוספת אלמנט
  const addElement = (type) => {
    const elementTypes = {
      hero: {
        content: '🎬 Hero Section עם וידאו ברקע',
        style: 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; padding: 60px 20px; border-radius: 12px;'
      },
      gallery: {
        content: '🖼️ גלריית תמונות אינטראקטיבית',
        style: 'background: #f8fafc; padding: 40px 20px; border-radius: 12px; border: 2px dashed #cbd5e1;'
      },
      text: {
        content: '📝 כותרת או פסקת טקסט',
        style: 'background: #ffffff; padding: 30px; border-radius: 8px; border-left: 4px solid #3b82f6;'
      },
      button: {
        content: '🔘 כפתור פעולה',
        style: 'background: #3b82f6; color: white; padding: 15px 30px; border-radius: 8px; text-align: center; cursor: pointer;'
      },
      form: {
        content: '📋 טופס יצירת קשר',
        style: 'background: #f1f5f9; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;'
      }
    };

    const newElement = {
      id: Date.now(),
      type: type,
      content: elementTypes[type]?.content || `אלמנט ${type}`,
      style: elementTypes[type]?.style || 'padding: 20px; border: 1px solid #ccc; border-radius: 8px;'
    };
    setElements([...elements, newElement]);
  };

  // AI Generator
  const generateWithAI = () => {
    if (!aiPrompt.trim()) return;
    
    setIsGenerating(true);
    setTimeout(() => {
      const prompt = aiPrompt.toLowerCase();
      let elementType = 'text';
      let content = `🤖 תוכן שנוצר עם AI: ${aiPrompt}`;
      let style = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px;';

      // זיהוי סוג תוכן לפי הפרומפט
      if (prompt.includes('hero') || prompt.includes('פתיחה')) {
        elementType = 'hero';
        content = '🎬 Hero Section מותאם אישית';
        style = 'background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%); color: white; text-align: center; padding: 60px 20px; border-radius: 12px;';
      } else if (prompt.includes('גלריה') || prompt.includes('תמונות')) {
        elementType = 'gallery';
        content = '🖼️ גלריה מותאמת אישית';
        style = 'background: #f8fafc; padding: 40px 20px; border-radius: 12px; border: 2px dashed #10b981;';
      } else if (prompt.includes('טופס') || prompt.includes('קשר')) {
        elementType = 'form';
        content = '📋 טופס מותאם אישית';
        style = 'background: #f0fdf4; padding: 30px; border-radius: 12px; border: 1px solid #10b981;';
      }

      const newElement = {
        id: Date.now(),
        type: elementType,
        content: content,
        style: style
      };
      setElements([...elements, newElement]);
      setIsGenerating(false);
      setAiPrompt('');
    }, 2000);
  };

  // טעינת תבנית
  const loadTemplate = (templateId) => {
    const templateConfigs = {
      barber: [
        { type: 'hero', content: '💈 ברבר סטייל - המספרה המובילה', style: 'background: linear-gradient(135deg, #000000 0%, #434343 100%); color: #d4af37; text-align: center; padding: 80px 20px; border-radius: 12px;' },
        { type: 'gallery', content: '✂️ גלריית העבודות שלנו', style: 'background: #1f2937; color: white; padding: 40px 20px; border-radius: 12px;' },
        { type: 'form', content: '📅 הזמנת תור', style: 'background: #d4af37; color: black; padding: 30px; border-radius: 12px;' }
      ],
      gym: [
        { type: 'hero', content: '🏋️ גיים צ\'יינג פיטנס', style: 'background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); color: white; text-align: center; padding: 80px 20px; border-radius: 12px;' },
        { type: 'text', content: '💪 500+ חברי מועדון מרוצים', style: 'background: #fff5f5; padding: 30px; border-radius: 8px; border-left: 4px solid #ff6b6b; text-align: center; font-weight: bold;' },
        { type: 'form', content: '📋 הצטרפות למועדון', style: 'background: #fff5f5; padding: 30px; border-radius: 12px; border: 2px solid #ff6b6b;' }
      ],
      lawyer: [
        { type: 'hero', content: '⚖️ משרד עורכי דין כהן ושות\'', style: 'background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; text-align: center; padding: 80px 20px; border-radius: 12px;' },
        { type: 'text', content: '🏛️ מקצועיות, יושרה והצלחה משפטית', style: 'background: #eff6ff; padding: 30px; border-radius: 8px; border-left: 4px solid #1e40af;' },
        { type: 'form', content: '📞 יעוץ משפטי ראשוני', style: 'background: #eff6ff; padding: 30px; border-radius: 12px; border: 1px solid #1e40af;' }
      ],
      restaurant: [
        { type: 'hero', content: '🍽️ מסעדת גורמה פרימיום', style: 'background: linear-gradient(135deg, #92400e 0%, #78350f 100%); color: white; text-align: center; padding: 80px 20px; border-radius: 12px;' },
        { type: 'gallery', content: '👨‍🍳 התפריט המיוחד שלנו', style: 'background: #fef3c7; padding: 40px 20px; border-radius: 12px;' },
        { type: 'form', content: '🍷 הזמנת שולחן', style: 'background: #fef3c7; padding: 30px; border-radius: 12px; border: 2px solid #92400e;' }
      ],
      clinic: [
        { type: 'hero', content: '🏥 קליניקה רפואית מתקדמת', style: 'background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white; text-align: center; padding: 80px 20px; border-radius: 12px;' },
        { type: 'text', content: '👨‍⚕️ צוות רפואי מקצועי ומנוסה', style: 'background: #f0fdf4; padding: 30px; border-radius: 8px; border-left: 4px solid #059669;' },
        { type: 'form', content: '📋 הזמנת תור לרופא', style: 'background: #f0fdf4; padding: 30px; border-radius: 12px; border: 1px solid #059669;' }
      ],
      studio: [
        { type: 'hero', content: '🧘 סטודיו יוגה ומדיטציה', style: 'background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); color: white; text-align: center; padding: 80px 20px; border-radius: 12px;' },
        { type: 'text', content: '🌸 איזון גוף ונפש במקום אחד', style: 'background: #faf5ff; padding: 30px; border-radius: 8px; border-left: 4px solid #7c3aed;' },
        { type: 'form', content: '🕉️ הרשמה לשיעור', style: 'background: #faf5ff; padding: 30px; border-radius: 12px; border: 1px solid #7c3aed;' }
      ]
    };

    const templateElements = templateConfigs[templateId] || [];
    const newElements = templateElements.map((template, index) => ({
      id: Date.now() + index,
      type: template.type,
      content: template.content,
      style: template.style
    }));
    
    setElements(newElements);
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      background: '#0f172a', 
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Left Panel */}
      <div style={{ 
        width: '350px', 
        background: '#1e293b', 
        borderRight: '1px solid #334155',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{ 
          padding: '20px', 
          borderBottom: '1px solid #334155',
          background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '24px', 
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            ⚡ WebMaster Pro
          </h1>
          <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.8 }}>
            Advanced Builder
          </p>
        </div>

        {/* Tabs */}
        <div style={{ 
          display: 'flex', 
          borderBottom: '1px solid #334155'
        }}>
          {[
            { id: 'ai', label: 'AI', icon: '🧠' },
            { id: 'components', label: 'רכיבים', icon: '🧩' },
            { id: 'templates', label: 'תבניות', icon: '✨' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              style={{
                flex: 1,
                padding: '15px 10px',
                background: selectedTab === tab.id ? '#3b82f6' : 'transparent',
                color: selectedTab === tab.id ? 'white' : '#94a3b8',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '18px', marginBottom: '4px' }}>{tab.icon}</div>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ 
          padding: '20px', 
          flex: 1, 
          overflowY: 'auto'
        }}>
          {/* AI Tab */}
          {selectedTab === 'ai' && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>🧠</div>
                <h3 style={{ margin: 0, fontSize: '18px' }}>AI Assistant Pro</h3>
                <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.7 }}>
                  יצירת תוכן מתקדם עם בינה מלאכותית
                </p>
              </div>
              
              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="תאר מה אתה רוצה ליצור... למשל: 'צור hero section למספרה יוקרתית'"
                style={{
                  width: '100%',
                  padding: '15px',
                  borderRadius: '8px',
                  background: '#334155',
                  border: '1px solid #475569',
                  color: 'white',
                  resize: 'none',
                  fontSize: '14px',
                  minHeight: '100px'
                }}
                rows={4}
              />
              
              <button
                onClick={generateWithAI}
                disabled={isGenerating || !aiPrompt.trim()}
                style={{
                  width: '100%',
                  marginTop: '15px',
                  padding: '15px',
                  background: isGenerating 
                    ? '#6b7280' 
                    : 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: isGenerating ? 'not-allowed' : 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                {isGenerating ? '🔄 יוצר...' : '✨ צור עם AI'}
              </button>

              <div style={{ marginTop: '20px' }}>
                <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>דוגמאות מהירות:</h4>
                {aiExamples.map((example, idx) => (
                  <button
                    key={idx}
                    onClick={() => setAiPrompt(example)}
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      padding: '10px',
                      margin: '5px 0',
                      background: 'transparent',
                      color: '#cbd5e1',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      transition: 'background 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#334155'}
                    onMouseLeave={(e) => e.target.style.background = 'transparent'}
                  >
                    • {example}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Components Tab */}
          {selectedTab === 'components' && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>🧩</div>
                <h3 style={{ margin: 0, fontSize: '18px' }}>רכיבים מתקדמים</h3>
                <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.7 }}>
                  לחץ כדי להוסיף לקנבס
                </p>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {components.map(component => (
                  <button
                    key={component.id}
                    onClick={() => addElement(component.id)}
                    style={{
                      padding: '15px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
                      border: '2px dashed #4b5563',
                      color: 'white',
                      cursor: 'pointer',
                      textAlign: 'right',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.background = 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = '#4b5563';
                      e.target.style.background = 'linear-gradient(135deg, #374151 0%, #1f2937 100%)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '20px' }}>{component.icon}</span>
                      <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{component.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Templates Tab */}
          {selectedTab === 'templates' && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>✨</div>
                <h3 style={{ margin: 0, fontSize: '18px' }}>תבניות ברמה עולמית</h3>
                <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.7 }}>
                  {templates.length} תבניות מקצועיות
                </p>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
                {templates.map(template => (
                  <div
                    key={template.id}
                    onClick={() => loadTemplate(template.id)}
                    style={{
                      borderRadius: '12px',
                      border: '1px solid #374151',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      background: '#1f2937'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#fbbf24';
                      e.target.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = '#374151';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <img 
                      src={template.image} 
                      alt={template.name}
                      style={{
                        width: '100%',
                        height: '120px',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{ padding: '15px' }}>
                      <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: 'bold' }}>
                        {template.name}
                      </h4>
                      <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>
                        {template.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Canvas */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Toolbar */}
        <div style={{
          background: '#1e293b',
          borderBottom: '1px solid #334155',
          padding: '15px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
            🎨 העורך המתקדם
          </h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{
              padding: '10px 20px',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              💾 שמור
            </button>
            <button style={{
              padding: '10px 20px',
              background: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              📤 ייצא
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div style={{
          flex: 1,
          padding: '30px',
          overflowY: 'auto',
          background: '#0f172a'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            minHeight: '600px',
            padding: '40px',
            color: '#1f2937'
          }}>
            {elements.length === 0 ? (
              <div style={{
                textAlign: 'center',
                color: '#6b7280',
                padding: '100px 20px'
              }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>✨</div>
                <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
                  ברוכים הבאים לעורך המתקדם
                </h3>
                <p style={{ fontSize: '16px', marginBottom: '30px' }}>
                  התחל לבנות אתרים ברמה עולמית עם AI, רכיבים מתקדמים ותבניות מקצועיות
                </p>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setSelectedTab('ai')}
                    style={{
                      padding: '15px 25px',
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }}
                  >
                    🧠 התחל עם AI
                  </button>
                  <button
                    onClick={() => setSelectedTab('templates')}
                    style={{
                      padding: '15px 25px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }}
                  >
                    ✨ בחר תבנית
                  </button>
                  <button
                    onClick={() => setSelectedTab('components')}
                    style={{
                      padding: '15px 25px',
                      background: '#6b7280',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }}
                  >
                    🧩 הוסף רכיבים
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {elements.map(element => (
                  <div
                    key={element.id}
                    style={{
                      ...element.style ? {} : { padding: '20px', border: '2px dashed #d1d5db', borderRadius: '8px' },
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.02)';
                      e.target.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <div style={element.style ? { cssText: element.style } : {}}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px'
                      }}>
                        <span style={{
                          fontSize: '12px',
                          fontWeight: 'bold',
                          color: '#6b7280',
                          background: '#f3f4f6',
                          padding: '4px 8px',
                          borderRadius: '4px'
                        }}>
                          {element.type}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setElements(elements.filter(el => el.id !== element.id));
                          }}
                          style={{
                            background: '#ef4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                        >
                          🗑️ מחק
                        </button>
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                        {element.content}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Summary Stats */}
                <div style={{
                  marginTop: '30px',
                  padding: '20px',
                  background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                  borderRadius: '12px',
                  border: '1px solid #0ea5e9'
                }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#0c4a6e' }}>
                    📊 סטטיסטיקות הדף
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0ea5e9' }}>
                        {elements.length}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>רכיבים</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>
                        {elements.filter(el => el.type === 'hero').length}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Hero Sections</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>
                        {elements.filter(el => el.type === 'form').length}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>טפסים</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#8b5cf6' }}>
                        {elements.filter(el => el.content.includes('AI')).length}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>AI Generated</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Footer Info */}
          <div style={{
            textAlign: 'center',
            marginTop: '20px',
            color: '#64748b',
            fontSize: '14px'
          }}>
            <p>🚀 WebMaster Pro - פלטפורמת בניית אתרים מתקדמת עם AI</p>
            <p style={{ fontSize: '12px', opacity: 0.7 }}>
              גרסה 2.0 | ללא תלויות חיצוניות | מוכן לפרודקשן
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
