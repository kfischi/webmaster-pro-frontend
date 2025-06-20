'use client';

import React, { useState } from 'react';

// נתוני התבניות המשופרים
const templates = [
  {
    id: 'barbershop',
    title: 'מספרה יוקרתית',
    description: 'עיצוב מודרני ושירות ברמה הגבוהה ביותר.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop',
    features: ['וידאו ברקע', 'הזמנת תורים', 'גלריית עבודות']
  },
  {
    id: 'gym',
    title: 'חדר כושר מתקדם',
    description: 'ציוד חדיש ואימונים מותאמים אישית.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    features: ['מונים אנימטיים', 'מערכת הרשמה', 'לוח אימונים']
  },
  {
    id: 'lawfirm',
    title: 'משרד עורכי דין',
    description: 'ייצוג משפטי מקצועי ואמין.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
    features: ['עיצוב קלאסי', 'אזור לקוחות', 'יצירת קשר מאובטח']
  },
  {
    id: 'restaurant',
    title: 'מסעדת גורמה',
    description: 'חוויית טעמים בלתי נשכחת.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    features: ['תפריט דיגיטלי', 'הזמנות אונליין', 'גלריית מנות']
  },
  {
    id: 'clinic',
    title: 'קליניקה רפואית',
    description: 'טיפול אישי ומקצועי בסטנדרטים הגבוהים ביותר.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
    features: ['הזמנת תורים', 'מידע רפואי', 'פורטל מטופלים']
  },
  {
    id: 'yoga',
    title: 'סטודיו יוגה',
    description: 'איזון גוף ונפש בסביבה שלווה.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    features: ['שיעורים אונליין', 'מדיטציה מודרכת', 'חנות יוגה']
  },
];

const tabs = ['AI Assistant', 'רכיבים', 'תבניות', 'אנימציות'];
const devices = ['Desktop', 'Tablet', 'Mobile'];

const EditorWithTemplates = () => {
  const [activeTab, setActiveTab] = useState('תבניות'); // מתחילים בתבניות
  const [selectedDevice, setSelectedDevice] = useState('Desktop');
  const [elements, setElements] = useState([]);
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [aiPrompt, setAiPrompt] = useState('');
  const [loadingTemplateId, setLoadingTemplateId] = useState(null);

  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      content: `${type} חדש`,
      styles: {}
    };
    setElements([...elements, newElement]);
    setSelectedElementId(newElement.id);
  };

  const selectElement = (id) => {
    setSelectedElementId(id);
  };

  const deleteElement = () => {
    setElements(elements.filter((el) => el.id !== selectedElementId));
    setSelectedElementId(null);
  };

  const duplicateElement = () => {
    const el = elements.find((e) => e.id === selectedElementId);
    if (el) {
      const copy = { ...el, id: Date.now() };
      setElements([...elements, copy]);
    }
  };

  const loadTemplate = (templateId) => {
    setLoadingTemplateId(templateId);
    setTimeout(() => {
      console.log(`Template loaded: ${templateId}`);
      // כאן נוסיף לוגיקה לטעינת התבנית לקנבס
      const templateElements = [
        { id: Date.now(), type: 'Hero', content: `Hero של תבנית ${templateId}` },
        { id: Date.now() + 1, type: 'Text', content: 'טקסט מהתבנית' }
      ];
      setElements(templateElements);
      setLoadingTemplateId(null);
      setActiveTab('רכיבים'); // עבור לטאב רכיבים אחרי טעינה
    }, 1500);
  };

  const selectedElement = elements.find((e) => e.id === selectedElementId);

  // רכיב גלריית התבניות
  const TemplatesContent = () => (
    <div style={templateStyles.container}>
      <div style={templateStyles.header}>
        <h3 style={templateStyles.title}>🎨 תבניות ברמה עולמית</h3>
        <p style={templateStyles.subtitle}>בחר תבנית מקצועית</p>
      </div>
      
      <div style={templateStyles.grid}>
        {templates.map((template) => (
          <div
            key={template.id}
            style={{
              ...templateStyles.card,
              ...(loadingTemplateId === template.id ? templateStyles.loadingCard : {}),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img 
              src={template.image} 
              alt={template.title}
              style={templateStyles.image}
            />
            <h4 style={templateStyles.cardTitle}>{template.title}</h4>
            <p style={templateStyles.description}>{template.description}</p>
            
            <div style={templateStyles.features}>
              {template.features.map((feature, index) => (
                <span key={index} style={templateStyles.feature}>
                  {feature}
                </span>
              ))}
            </div>

            <button
              style={{
                ...templateStyles.button,
                ...(loadingTemplateId === template.id ? templateStyles.loadingButton : {})
              }}
              onClick={() => loadTemplate(template.id)}
              disabled={loadingTemplateId === template.id}
            >
              {loadingTemplateId === template.id ? '⏳ טוען...' : '🚀 טען תבנית'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={styles.editor}>
      {/* Left Panel */}
      <div style={styles.leftPanel}>
        <div style={styles.logo}>
          <h2 style={styles.logoText}>WebMaster Pro</h2>
        </div>
        
        <div style={styles.tabs}>
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.tab,
                backgroundColor: activeTab === tab ? '#3b82f6' : 'transparent',
                borderLeft: activeTab === tab ? '3px solid #60a5fa' : 'none'
              }}
            >
              {tab === 'AI Assistant' && '🧠 '}
              {tab === 'רכיבים' && '🧩 '}
              {tab === 'תבניות' && '🎨 '}
              {tab === 'אנימציות' && '✨ '}
              {tab}
            </div>
          ))}
        </div>
        
        <div style={styles.tabContent}>
          {activeTab === 'AI Assistant' && (
            <div>
              <h3 style={styles.sectionTitle}>🧠 AI Assistant Pro</h3>
              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="תאר מה אתה רוצה ליצור... למשל: 'צור hero section למספרה עם וידאו ברקע'"
                style={styles.textarea}
              />
              <button style={styles.primaryButton}>✨ צור עם AI</button>
              
              <div style={styles.quickActions}>
                <h4 style={styles.quickTitle}>דוגמאות מהירות:</h4>
                <button style={styles.quickButton} onClick={() => setAiPrompt('צור hero section מרשים')}>
                  Hero Section
                </button>
                <button style={styles.quickButton} onClick={() => setAiPrompt('הוסף גלריית תמונות')}>
                  גלריה
                </button>
                <button style={styles.quickButton} onClick={() => setAiPrompt('צור טופס יצירת קשר')}>
                  טופס קשר
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'רכיבים' && (
            <div>
              <h3 style={styles.sectionTitle}>🧩 רכיבים</h3>
              {['Hero', 'Text', 'Button', 'Image', 'Gallery', 'Video', 'Form'].map((type) => (
                <button 
                  key={type} 
                  style={styles.componentButton} 
                  onClick={() => addElement(type)}
                >
                  ➕ הוסף {type}
                </button>
              ))}
            </div>
          )}
          
          {activeTab === 'תבניות' && <TemplatesContent />}
          
          {activeTab === 'אנימציות' && (
            <div>
              <h3 style={styles.sectionTitle}>✨ אנימציות</h3>
              <label style={styles.checkboxLabel}>
                <input type="checkbox" style={styles.checkbox} /> Fade In
              </label>
              <label style={styles.checkboxLabel}>
                <input type="checkbox" style={styles.checkbox} /> Slide Up
              </label>
              <label style={styles.checkboxLabel}>
                <input type="checkbox" style={styles.checkbox} /> Parallax
              </label>
              <label style={styles.checkboxLabel}>
                <input type="checkbox" style={styles.checkbox} /> Bounce
              </label>
            </div>
          )}
        </div>
      </div>

      {/* Center Canvas */}
      <div style={styles.center}>
        <div style={styles.toolbar}>
          <div style={styles.toolbarLeft}>
            {devices.map((device) => (
              <button
                key={device}
                style={{
                  ...styles.deviceButton,
                  backgroundColor: selectedDevice === device ? '#3b82f6' : '#1e293b',
                }}
                onClick={() => setSelectedDevice(device)}
              >
                {device === 'Desktop' && '🖥️ '}
                {device === 'Tablet' && '📱 '}
                {device === 'Mobile' && '📱 '}
                {device}
              </button>
            ))}
          </div>
          
          <div style={styles.toolbarRight}>
            <button style={styles.toolButton}>↶ Undo</button>
            <button style={styles.toolButton}>↷ Redo</button>
            <button style={styles.toolButton}>💾 Save</button>
          </div>
        </div>
        
        <div style={styles.canvas}>
          {elements.length === 0 ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>🎨</div>
              <h3 style={styles.emptyTitle}>התחל ליצור</h3>
              <p style={styles.emptyText}>
                בחר תבנית מהצד השמאלי או הוסף רכיבים כדי להתחיל לעצב
              </p>
            </div>
          ) : (
            elements.map((el) => (
              <div
                key={el.id}
                onClick={() => selectElement(el.id)}
                style={{
                  ...styles.element,
                  border: el.id === selectedElementId ? '2px solid #3b82f6' : '1px solid #475569',
                  backgroundColor: el.id === selectedElementId ? '#1e3a8a' : '#334155'
                }}
              >
                <div style={styles.elementType}>{el.type}</div>
                <div style={styles.elementContent}>{el.content}</div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div style={styles.rightPanel}>
        {selectedElement ? (
          <div>
            <h3 style={styles.panelTitle}>⚙️ מאפייני רכיב</h3>
            <div style={styles.propertyGroup}>
              <label style={styles.label}>סוג רכיב:</label>
              <div style={styles.value}>{selectedElement.type}</div>
            </div>
            
            <div style={styles.propertyGroup}>
              <label style={styles.label}>תוכן:</label>
              <input
                style={styles.input}
                value={selectedElement.content}
                onChange={(e) =>
                  setElements(
                    elements.map((el) =>
                      el.id === selectedElement.id ? { ...el, content: e.target.value } : el
                    )
                  )
                }
              />
            </div>
            
            <div style={styles.actionButtons}>
              <button style={styles.actionButton} onClick={duplicateElement}>
                📋 שכפל
              </button>
              <button style={styles.deleteButton} onClick={deleteElement}>
                🗑️ מחק
              </button>
            </div>
          </div>
        ) : (
          <div style={styles.noSelection}>
            <div style={styles.noSelectionIcon}>👆</div>
            <h4 style={styles.noSelectionTitle}>בחר רכיב לעריכה</h4>
            <p style={styles.noSelectionText}>
              לחץ על רכיב בקנבס כדי לערוך את המאפיינים שלו
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Styles for templates
const templateStyles = {
  container: {
    maxHeight: '70vh',
    overflowY: 'auto',
    padding: '10px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  title: {
    fontSize: '1.2rem',
    margin: '0 0 5px 0',
    color: '#f8fafc'
  },
  subtitle: {
    fontSize: '0.9rem',
    margin: 0,
    color: '#cbd5e1'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px'
  },
  card: {
    background: 'rgba(51, 65, 85, 0.8)',
    borderRadius: '8px',
    padding: '12px',
    transition: 'all 0.3s ease',
    border: '1px solid #475569'
  },
  loadingCard: {
    opacity: 0.6,
    pointerEvents: 'none',
  },
  image: {
    width: '100%',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '8px',
  },
  cardTitle: {
    fontSize: '0.9rem',
    margin: '0 0 4px',
    color: '#f8fafc',
    fontWeight: 'bold'
  },
  description: {
    fontSize: '0.75rem',
    color: '#cbd5e1',
    marginBottom: '8px',
    lineHeight: 1.3
  },
  features: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
    marginBottom: '8px'
  },
  feature: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white',
    padding: '2px 6px',
    borderRadius: '10px',
    fontSize: '0.6rem',
    fontWeight: 'bold'
  },
  button: {
    background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
    border: 'none',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    width: '100%'
  },
  loadingButton: {
    background: '#6b7280',
    cursor: 'not-allowed'
  }
};

// Main styles
const styles = {
  editor: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#0f172a',
    color: '#fff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  leftPanel: {
    width: '280px',
    backgroundColor: '#1e293b',
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #334155'
  },
  logo: {
    padding: '20px',
    borderBottom: '1px solid #334155',
    textAlign: 'center'
  },
  logoText: {
    margin: 0,
    background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  tabs: {
    padding: '16px 0',
    borderBottom: '1px solid #334155'
  },
  tab: {
    padding: '12px 20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  tabContent: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto'
  },
  sectionTitle: {
    fontSize: '1.1rem',
    marginBottom: '15px',
    color: '#f8fafc'
  },
  center: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0f172a',
  },
  toolbar: {
    padding: '12px 20px',
    backgroundColor: '#1e293b',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #334155'
  },
  toolbarLeft: {
    display: 'flex',
    gap: '8px'
  },
  toolbarRight: {
    display: 'flex',
    gap: '8px'
  },
  deviceButton: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease'
  },
  toolButton: {
    padding: '8px 12px',
    border: '1px solid #475569',
    borderRadius: '6px',
    backgroundColor: '#334155',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.8rem'
  },
  canvas: {
    flex: 1,
    backgroundImage: `
      linear-gradient(rgba(51, 65, 85, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(51, 65, 85, 0.1) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
    padding: '20px',
    overflowY: 'auto',
    position: 'relative'
  },
  emptyState: {
    textAlign: 'center',
    marginTop: '100px',
    color: '#64748b'
  },
  emptyIcon: {
    fontSize: '4rem',
    marginBottom: '20px'
  },
  emptyTitle: {
    fontSize: '1.5rem',
    margin: '0 0 10px 0',
    color: '#94a3b8'
  },
  emptyText: {
    fontSize: '1rem',
    margin: 0,
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.5
  },
  element: {
    backgroundColor: '#334155',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative'
  },
  elementType: {
    fontSize: '0.8rem',
    color: '#94a3b8',
    marginBottom: '4px',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  elementContent: {
    fontSize: '1rem',
    color: '#f8fafc'
  },
  rightPanel: {
    width: '280px',
    backgroundColor: '#1e293b',
    padding: '20px',
    borderLeft: '1px solid #334155',
    overflowY: 'auto'
  },
  panelTitle: {
    marginBottom: '20px',
    fontSize: '1.1rem',
    color: '#f8fafc'
  },
  propertyGroup: {
    marginBottom: '16px'
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontSize: '0.9rem',
    color: '#cbd5e1',
    fontWeight: '500'
  },
  value: {
    padding: '8px',
    backgroundColor: '#334155',
    borderRadius: '4px',
    fontSize: '0.9rem',
    color: '#f8fafc'
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #475569',
    backgroundColor: '#334155',
    color: '#f8fafc',
    fontSize: '0.9rem'
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #475569',
    backgroundColor: '#334155',
    color: '#f8fafc',
    fontSize: '0.9rem',
    resize: 'vertical',
    marginBottom: '12px'
  },
  primaryButton: {
    background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
    border: 'none',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    width: '100%',
    marginBottom: '20px'
  },
  componentButton: {
    background: '#374151',
    border: '1px solid #475569',
    color: '#f9fafb',
    padding: '10px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    width: '100%',
    marginBottom: '8px',
    textAlign: 'left'
  },
  quickActions: {
    marginTop: '20px'
  },
  quickTitle: {
    fontSize: '0.9rem',
    marginBottom: '10px',
    color: '#cbd5e1'
  },
  quickButton: {
    background: '#475569',
    border: 'none',
    color: '#e2e8f0',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.8rem',
    marginRight: '8px',
    marginBottom: '6px'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '0.9rem',
    color: '#e2e8f0',
    cursor: 'pointer'
  },
  checkbox: {
    marginRight: '8px'
  },
  actionButtons: {
    display: 'flex',
    gap: '8px',
    marginTop: '20px'
  },
  actionButton: {
    flex: 1,
    padding: '8px 12px',
    border: '1px solid #475569',
    borderRadius: '4px',
    backgroundColor: '#374151',
    color: '#f9fafb',
    cursor: 'pointer',
    fontSize: '0.8rem'
  },
  deleteButton: {
    flex: 1,
    padding: '8px 12px',
    border: '1px solid #dc2626',
    borderRadius: '4px',
    backgroundColor: '#dc2626',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.8rem'
  },
  noSelection: {
    textAlign: 'center',
    marginTop: '40px',
    color: '#64748b'
  },
  noSelectionIcon: {
    fontSize: '3rem',
    marginBottom: '16px'
  },
  noSelectionTitle: {
    fontSize: '1.1rem',
    margin: '0 0 8px 0',
    color: '#94a3b8'
  },
  noSelectionText: {
    fontSize: '0.9rem',
    margin: 0,
    lineHeight: 1.4
  }
};

export default EditorWithTemplates;
