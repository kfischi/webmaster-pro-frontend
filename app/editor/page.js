'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function PremiumEditor() {
  const [currentDevice, setCurrentDevice] = useState('desktop');
  const [currentZoom, setCurrentZoom] = useState(100);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('elements');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [canvasContent, setCanvasContent] = useState('');
  const canvasRef = useRef(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Advanced state management
  const [elementProperties, setElementProperties] = useState({
    text: '',
    fontSize: 16,
    fontWeight: 400,
    color: '#ffffff',
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
    borderRadius: 0,
    opacity: 100,
    rotation: 0,
    x: 0,
    y: 0,
    width: 'auto',
    height: 'auto'
  });

  const premiumTemplate = `
    <div class="hero-section" id="hero" style="
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    ">
      <div class="hero-particles" style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
        animation: float 6s ease-in-out infinite;
      "></div>
      
      <div class="hero-content editable-container" style="
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(40px);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 32px;
        padding: 80px 60px;
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        box-shadow: 0 32px 80px rgba(0,0,0,0.1);
        position: relative;
        z-index: 2;
      ">
        <h1 class="editable-text hero-title" style="
          font-size: 4.5rem;
          font-weight: 200;
          color: #ffffff;
          margin-bottom: 32px;
          letter-spacing: -3px;
          line-height: 1.1;
          cursor: pointer;
          transition: all 0.3s ease;
        " data-element-type="heading">
          ✂️ סלון עופר המודרני
        </h1>
        
        <p class="editable-text hero-subtitle" style="
          font-size: 1.8rem;
          color: rgba(255,255,255,0.9);
          margin-bottom: 48px;
          font-weight: 300;
          cursor: pointer;
          transition: all 0.3s ease;
        " data-element-type="text">
          החוויה הכי מקצועית והכי מתקדמת בעיר
        </p>
        
        <div class="hero-buttons" style="display: flex; gap: 24px; justify-content: center; flex-wrap: wrap;">
          <button class="editable-button primary-btn" style="
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(20px);
            color: #ffffff;
            padding: 20px 40px;
            borderRadius: '24px',
            border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)'}`,
            boxShadow: '0 8px 24px rgba(0,0,0,0.05)'
          }}>
            <span style={{ fontSize: '1.2rem' }}>✂️</span>
            <span style={{ 
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              מספרה מודרנית
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              padding: '12px 20px',
              background: isDarkMode 
                ? 'rgba(255,255,255,0.08)' 
                : 'rgba(255,255,255,0.7)',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)'}`,
              borderRadius: '16px',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(20px)'
            }}
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
          
          <button
            onClick={() => showToastMessage('פרויקט נשמר!')}
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #06d6a0, #0891b2)',
              border: 'none',
              borderRadius: '16px',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(6, 214, 160, 0.3)'
            }}
          >
            💾 Save
          </button>
          
          <button
            onClick={() => showToastMessage('האתר מתפרסם!')}
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: 'none',
              borderRadius: '16px',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(103, 126, 234, 0.3)'
            }}
          >
            🚀 Publish
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', height: 'calc(100vh - 84px)' }}>
        
        {/* Left Sidebar - Tools */}
        <div style={{
          width: '360px',
          background: isDarkMode 
            ? 'rgba(15, 23, 42, 0.7)' 
            : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(40px)',
          borderRight: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
          display: 'flex',
          flexDirection: 'column'
        }}>
          
          {/* Tabs */}
          <div style={{
            display: 'flex',
            padding: '24px 24px 0 24px',
            gap: '8px'
          }}>
            {[
              { id: 'elements', label: 'Elements', icon: '🧩' },
              { id: 'design', label: 'Design', icon: '🎨' },
              { id: 'settings', label: 'Settings', icon: '⚙️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  padding: '16px 12px',
                  background: activeTab === tab.id
                    ? (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)')
                    : 'transparent',
                  border: 'none',
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                fontWeight: '700',
                fontSize: '1rem',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)'}`,
                minWidth: '80px',
                textAlign: 'center'
              }}>
                {currentZoom}%
              </div>
              
              <button
                onClick={() => {
                  if (currentZoom < 200) {
                    setCurrentZoom(prev => prev + 10);
                    showToastMessage(`Zoom: ${currentZoom + 10}%`);
                  }
                }}
                style={{
                  width: '44px',
                  height: '44px',
                  border: 'none',
                  background: isDarkMode 
                    ? 'rgba(255,255,255,0.08)' 
                    : 'rgba(255,255,255,0.8)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(20px)'
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Canvas */}
          <div style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '60px',
            overflow: 'auto',
            position: 'relative'
          }}>
            
            {/* Canvas Background Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: isDarkMode ? 0.03 : 0.06,
              backgroundImage: `radial-gradient(circle, ${isDarkMode ? '#ffffff' : '#1a202c'} 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
              pointerEvents: 'none'
            }} />

            {/* Loading State */}
            {isLoading && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
                color: isDarkMode ? '#e2e8f0' : '#1a202c'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  border: `4px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                  borderTop: '4px solid #667eea',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
                <div style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  textAlign: 'center'
                }}>
                  🚀 Loading Premium Editor...
                </div>
              </div>
            )}

            {/* Canvas Container */}
            {!isLoading && (
              <div
                ref={canvasRef}
                style={{
                  background: isDarkMode 
                    ? 'rgba(255, 255, 255, 0.02)' 
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(40px)',
                  borderRadius: '24px',
                  boxShadow: isDarkMode 
                    ? '0 40px 120px rgba(0,0,0,0.5)' 
                    : '0 40px 120px rgba(0,0,0,0.15)',
                  overflow: 'hidden',
                  transform: `scale(${currentZoom / 100})`,
                  transformOrigin: 'top center',
                  width: deviceSizes[currentDevice].width,
                  minHeight: deviceSizes[currentDevice].height,
                  border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)'}`,
                  position: 'relative',
                  transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  cursor: 'default'
                }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    // Clicked on canvas background, deselect element
                    document.querySelectorAll('.element-selected').forEach(el => {
                      el.classList.remove('element-selected');
                    });
                    setSelectedElement(null);
                  }
                }}
                dangerouslySetInnerHTML={{ __html: canvasContent }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Additional Animations */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .canvas-element {
          animation: slideInUp 0.4s ease-out;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'};
        }
        
        /* Smooth focus states */
        input:focus, button:focus {
          outline: 2px solid #667eea;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
                  color: activeTab === tab.id
                    ? (isDarkMode ? '#ffffff' : '#1a202c')
                    : (isDarkMode ? '#94a3b8' : '#64748b'),
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: activeTab === tab.id ? '600' : '500',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ flex: 1, padding: '32px 24px', overflowY: 'auto' }}>
            
            {activeTab === 'elements' && (
              <div>
                <h3 style={{
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '32px',
                  letterSpacing: '-0.5px'
                }}>
                  🧩 Elements
                </h3>
                
                <div style={{ display: 'grid', gap: '20px' }}>
                  {tools.map((tool) => (
                    <div
                      key={tool.id}
                      onClick={() => addElement(tool.id)}
                      style={{
                        padding: '24px 20px',
                        background: isDarkMode 
                          ? 'rgba(255,255,255,0.04)' 
                          : 'rgba(255,255,255,0.6)',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.8)'}`,
                        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        backdropFilter: 'blur(20px)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-4px)';
                        e.target.style.boxShadow = isDarkMode 
                          ? '0 20px 60px rgba(0,0,0,0.3)' 
                          : '0 20px 60px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{
                          width: '56px',
                          height: '56px',
                          background: `linear-gradient(135deg, ${tool.color}, ${tool.color}dd)`,
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.6rem',
                          boxShadow: `0 8px 24px ${tool.color}40`
                        }}>
                          {tool.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{
                            fontWeight: '700',
                            color: isDarkMode ? '#e2e8f0' : '#1a202c',
                            marginBottom: '4px',
                            fontSize: '1.1rem'
                          }}>
                            {tool.name}
                          </div>
                          <div style={{
                            fontSize: '0.85rem',
                            color: isDarkMode ? '#94a3b8' : '#64748b',
                            lineHeight: '1.4'
                          }}>
                            {tool.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'design' && selectedElement && (
              <div>
                <h3 style={{
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '32px',
                  letterSpacing: '-0.5px'
                }}>
                  🎨 Design
                </h3>

                <div style={{ display: 'grid', gap: '32px' }}>
                  
                  {/* Text Content */}
                  {(selectedElement.classList.contains('editable-text') || selectedElement.classList.contains('editable-button')) && (
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '12px',
                        color: isDarkMode ? '#e2e8f0' : '#1a202c',
                        fontWeight: '600',
                        fontSize: '0.95rem'
                      }}>
                        ✏️ Text Content
                      </label>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <input
                          type="text"
                          value={elementProperties.text}
                          onChange={(e) => setElementProperties(prev => ({ ...prev, text: e.target.value }))}
                          style={{
                            flex: 1,
                            padding: '16px',
                            border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                            borderRadius: '16px',
                            background: isDarkMode 
                              ? 'rgba(255,255,255,0.05)' 
                              : 'rgba(255,255,255,0.9)',
                            color: isDarkMode ? '#e2e8f0' : '#1a202c',
                            fontSize: '0.95rem',
                            backdropFilter: 'blur(10px)'
                          }}
                          placeholder="הכנס טקסט..."
                        />
                        <button
                          onClick={() => updateElement('text', elementProperties.text)}
                          style={{
                            padding: '16px 20px',
                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                            border: 'none',
                            borderRadius: '16px',
                            color: 'white',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                          }}
                        >
                          ✓
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Font Size */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '12px',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontWeight: '600',
                      fontSize: '0.95rem'
                    }}>
                      📏 Font Size
                    </label>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <input
                        type="range"
                        min="12"
                        max="72"
                        value={elementProperties.fontSize}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          setElementProperties(prev => ({ ...prev, fontSize: value }));
                          updateElement('fontSize', value);
                        }}
                        style={{
                          flex: 1,
                          cursor: 'pointer',
                          height: '8px',
                          borderRadius: '4px',
                          background: isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0',
                          outline: 'none'
                        }}
                      />
                      <div style={{
                        minWidth: '60px',
                        padding: '8px 16px',
                        background: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.9)',
                        borderRadius: '12px',
                        color: isDarkMode ? '#e2e8f0' : '#1a202c',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        textAlign: 'center'
                      }}>
                        {elementProperties.fontSize}px
                      </div>
                    </div>
                  </div>

                  {/* Color Picker */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '12px',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontWeight: '600',
                      fontSize: '0.95rem'
                    }}>
                      🎨 Text Color
                    </label>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <input
                        type="color"
                        value={elementProperties.color}
                        onChange={(e) => {
                          const value = e.target.value;
                          setElementProperties(prev => ({ ...prev, color: value }));
                          updateElement('color', value);
                        }}
                        style={{
                          width: '56px',
                          height: '56px',
                          border: 'none',
                          borderRadius: '16px',
                          cursor: 'pointer',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                          {['#1a202c', '#667eea', '#f093fb', '#06d6a0', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'].map(color => (
                            <button
                              key={color}
                              onClick={() => {
                                setElementProperties(prev => ({ ...prev, color }));
                                updateElement('color', color);
                              }}
                              style={{
                                width: '36px',
                                height: '36px',
                                background: color,
                                border: 'none',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                transition: 'all 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Background Color */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '12px',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontWeight: '600',
                      fontSize: '0.95rem'
                    }}>
                      🎯 Background
                    </label>
                    <input
                      type="color"
                      value={elementProperties.backgroundColor === 'transparent' ? '#ffffff' : elementProperties.backgroundColor}
                      onChange={(e) => {
                        const value = e.target.value;
                        setElementProperties(prev => ({ ...prev, backgroundColor: value }));
                        updateElement('backgroundColor', value);
                      }}
                      style={{
                        width: '100%',
                        height: '56px',
                        border: 'none',
                        borderRadius: '16px',
                        cursor: 'pointer',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                      }}
                    />
                  </div>

                  {/* Border Radius */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '12px',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontWeight: '600',
                      fontSize: '0.95rem'
                    }}>
                      📐 Border Radius
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={elementProperties.borderRadius}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        setElementProperties(prev => ({ ...prev, borderRadius: value }));
                        updateElement('borderRadius', value);
                      }}
                      style={{
                        width: '100%',
                        cursor: 'pointer',
                        height: '8px',
                        borderRadius: '4px',
                        background: isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Opacity */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '12px',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontWeight: '600',
                      fontSize: '0.95rem'
                    }}>
                      👁️ Opacity ({elementProperties.opacity}%)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={elementProperties.opacity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        setElementProperties(prev => ({ ...prev, opacity: value }));
                        updateElement('opacity', value);
                      }}
                      style={{
                        width: '100%',
                        cursor: 'pointer',
                        height: '8px',
                        borderRadius: '4px',
                        background: isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'grid', gap: '16px', marginTop: '24px' }}>
                    <button
                      onClick={() => {
                        if (selectedElement && selectedElement.parentNode) {
                          const clone = selectedElement.cloneNode(true);
                          selectedElement.parentNode.insertBefore(clone, selectedElement.nextSibling);
                          
                          setTimeout(() => {
                            clone.addEventListener('click', (e) => {
                              e.stopPropagation();
                              selectElement(clone);
                            });
                          }, 100);
                          
                          showToastMessage('אלמנט שוכפל!');
                        }
                      }}
                      style={{
                        padding: '16px',
                        background: isDarkMode 
                          ? 'rgba(255,255,255,0.08)' 
                          : 'rgba(255,255,255,0.9)',
                        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                        borderRadius: '16px',
                        color: isDarkMode ? '#e2e8f0' : '#1a202c',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(20px)'
                      }}
                    >
                      📋 Duplicate Element
                    </button>
                    
                    <button
                      onClick={() => {
                        if (selectedElement) {
                          selectedElement.remove();
                          setSelectedElement(null);
                          showToastMessage('אלמנט נמחק!');
                        }
                      }}
                      style={{
                        padding: '16px',
                        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                        border: 'none',
                        borderRadius: '16px',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 24px rgba(239, 68, 68, 0.3)'
                      }}
                    >
                      🗑️ Delete Element
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'design' && !selectedElement && (
              <div style={{
                textAlign: 'center',
                color: isDarkMode ? '#94a3b8' : '#64748b',
                padding: '60px 20px'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '24px' }}>👆</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '12px' }}>
                  Select an element
                </div>
                <div style={{ fontSize: '1rem', lineHeight: '1.5', opacity: 0.8 }}>
                  Click on any element in the canvas to start editing its design properties
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h3 style={{
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '32px',
                  letterSpacing: '-0.5px'
                }}>
                  ⚙️ Settings
                </h3>
                
                <div style={{ display: 'grid', gap: '24px' }}>
                  <div style={{
                    padding: '24px',
                    background: isDarkMode 
                      ? 'rgba(255,255,255,0.04)' 
                      : 'rgba(255,255,255,0.6)',
                    borderRadius: '20px',
                    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.8)'}`
                  }}>
                    <h4 style={{
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '16px'
                    }}>
                      🎯 Page Settings
                    </h4>
                    <p style={{
                      color: isDarkMode ? '#94a3b8' : '#64748b',
                      fontSize: '0.9rem',
                      marginBottom: '20px'
                    }}>
                      Configure global page settings
                    </p>
                    <button style={{
                      width: '100%',
                      padding: '12px',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      border: 'none',
                      borderRadius: '12px',
                      color: 'white',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}>
                      Page Settings
                    </button>
                  </div>
                  
                  <div style={{
                    padding: '24px',
                    background: isDarkMode 
                      ? 'rgba(255,255,255,0.04)' 
                      : 'rgba(255,255,255,0.6)',
                    borderRadius: '20px',
                    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.8)'}`
                  }}>
                    <h4 style={{
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '16px'
                    }}>
                      📤 Export
                    </h4>
                    <p style={{
                      color: isDarkMode ? '#94a3b8' : '#64748b',
                      fontSize: '0.9rem',
                      marginBottom: '20px'
                    }}>
                      Export your design as HTML/CSS
                    </p>
                    <button 
                      onClick={() => showToastMessage('HTML exported!')}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: 'linear-gradient(135deg, #06d6a0, #0891b2)',
                        border: 'none',
                        borderRadius: '12px',
                        color: 'white',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Export HTML
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Canvas Area */}
        <div style={{
          flex: 1,
          background: isDarkMode 
            ? 'linear-gradient(135deg, #0f172a, #1e293b)' 
            : 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          
          {/* Canvas Toolbar */}
          <div style={{
            background: isDarkMode 
              ? 'rgba(15, 23, 42, 0.7)' 
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(40px)',
            padding: '24px 40px',
            borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            
            {/* Device Switcher */}
            <div style={{
              display: 'flex',
              background: isDarkMode 
                ? 'rgba(255,255,255,0.05)' 
                : 'rgba(255,255,255,0.6)',
              borderRadius: '20px',
              padding: '6px',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)'}`,
              boxShadow: '0 8px 24px rgba(0,0,0,0.05)'
            }}>
              {['desktop', 'tablet', 'mobile'].map((device) => (
                <button
                  key={device}
                  onClick={() => {
                    setCurrentDevice(device);
                    showToastMessage(`Switched to ${device} view`);
                  }}
                  style={{
                    padding: '14px 24px',
                    border: 'none',
                    background: currentDevice === device
                      ? (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)')
                      : 'transparent',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    color: currentDevice === device
                      ? (isDarkMode ? '#ffffff' : '#1a202c')
                      : (isDarkMode ? '#94a3b8' : '#64748b'),
                    fontWeight: currentDevice === device ? '700' : '500',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {device === 'desktop' && '🖥️'}
                  {device === 'tablet' && '📱'}
                  {device === 'mobile' && '📱'}
                  {device.charAt(0).toUpperCase() + device.slice(1)}
                </button>
              ))}
            </div>

            {/* Zoom Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <button
                onClick={() => {
                  if (currentZoom > 50) {
                    setCurrentZoom(prev => prev - 10);
                    showToastMessage(`Zoom: ${currentZoom - 10}%`);
                  }
                }}
                style={{
                  width: '44px',
                  height: '44px',
                  border: 'none',
                  background: isDarkMode 
                    ? 'rgba(255,255,255,0.08)' 
                    : 'rgba(255,255,255,0.8)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  color: isDarkMode ? '#e2e8f0' : '#1a202c',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(20px)'
                }}
              >
                −
              </button>
              
              <div style={{
                padding: '12px 20px',
                background: isDarkMode 
                  ? 'rgba(255,255,255,0.05)' 
                  : 'rgba(255,255,255,0.8)',
                borderRadius: '16px',: 2px solid rgba(255,255,255,0.3);
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.4s ease;
            box-shadow: 0 16px 40px rgba(0,0,0,0.1);
          " data-element-type="button">
            📞 הזמן תור עכשיו
          </button>
          
          <button class="editable-button secondary-btn" style="
            background: transparent;
            color: #ffffff;
            padding: 20px 40px;
            border: 2px solid rgba(255,255,255,0.4);
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.4s ease;
          " data-element-type="button">
            💼 גלריית עבודות
          </button>
        </div>
      </div>
    </div>

    <section class="services-section editable-container" style="
      padding: 160px 80px;
      background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%);
      position: relative;
    ">
      <div class="container" style="max-width: 1400px; margin: 0 auto;">
        <div class="section-header" style="text-align: center; margin-bottom: 100px;">
          <h2 class="editable-text section-title" style="
            font-size: 4rem;
            color: #1a202c;
            font-weight: 200;
            letter-spacing: -2px;
            margin-bottom: 32px;
            cursor: pointer;
            transition: all 0.3s ease;
          " data-element-type="heading">
            השירותים המקצועיים שלנו
          </h2>
          
          <p class="editable-text section-subtitle" style="
            font-size: 1.4rem;
            color: #64748b;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
            cursor: pointer;
            transition: all 0.3s ease;
          " data-element-type="text">
            חוויה מותאמת אישית עם הטכנולוגיות והטכניקות הכי מתקדמות
          </p>
        </div>

        <div class="services-grid" style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
          gap: 48px;
          margin-bottom: 80px;
        ">
          <div class="service-card editable-container" style="
            background: rgba(255,255,255,0.8);
            backdrop-filter: blur(40px);
            padding: 60px 48px;
            border-radius: 32px;
            box-shadow: 0 32px 80px rgba(0,0,0,0.06);
            border: 1px solid rgba(255,255,255,0.9);
            text-align: center;
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            overflow: hidden;
          " data-element-type="card">
            <div class="service-icon" style="
              font-size: 4rem;
              margin-bottom: 32px;
              filter: drop-shadow(0 8px 16px rgba(0,0,0,0.1));
            ">✂️</div>
            
            <h3 class="editable-text service-title" style="
              font-size: 1.8rem;
              color: #1a202c;
              font-weight: 700;
              margin-bottom: 20px;
              cursor: pointer;
              transition: all 0.3s ease;
            " data-element-type="heading">
              תספורת מקצועית
            </h3>
            
            <p class="editable-text service-description" style="
              color: #64748b;
              line-height: 1.7;
              font-size: 1.1rem;
              margin-bottom: 32px;
              cursor: pointer;
              transition: all 0.3s ease;
            " data-element-type="text">
              תספורת מותאמת אישית עם ייעוץ מקצועי וטכניקות מתקדמות
            </p>
            
            <div class="service-price" style="
              background: linear-gradient(135deg, #667eea, #764ba2);
              color: white;
              padding: 12px 32px;
              border-radius: 25px;
              font-weight: 700;
              font-size: 1.1rem;
              display: inline-block;
            ">
              החל מ-₪80
            </div>
          </div>

          <div class="service-card editable-container" style="
            background: rgba(255,255,255,0.8);
            backdrop-filter: blur(40px);
            padding: 60px 48px;
            border-radius: 32px;
            box-shadow: 0 32px 80px rgba(0,0,0,0.06);
            border: 1px solid rgba(255,255,255,0.9);
            text-align: center;
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            overflow: hidden;
          " data-element-type="card">
            <div class="service-icon" style="
              font-size: 4rem;
              margin-bottom: 32px;
              filter: drop-shadow(0 8px 16px rgba(0,0,0,0.1));
            ">🧔</div>
            
            <h3 class="editable-text service-title" style="
              font-size: 1.8rem;
              color: #1a202c;
              font-weight: 700;
              margin-bottom: 20px;
              cursor: pointer;
              transition: all 0.3s ease;
            " data-element-type="heading">
              עיצוב זקן מקצועי
            </h3>
            
            <p class="editable-text service-description" style="
              color: #64748b;
              line-height: 1.7;
              font-size: 1.1rem;
              margin-bottom: 32px;
              cursor: pointer;
              transition: all 0.3s ease;
            " data-element-type="text">
              עיצוב מדויק ומקצועי של הזקן עם כלים מתקדמים
            </p>
            
            <div class="service-price" style="
              background: linear-gradient(135deg, #f093fb, #f59e0b);
              color: white;
              padding: 12px 32px;
              border-radius: 25px;
              font-weight: 700;
              font-size: 1.1rem;
              display: inline-block;
            ">
              החל מ-₪60
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Performance optimized functions
  const showToastMessage = useCallback((message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  }, []);

  const selectElement = useCallback((element) => {
    if (!element) return;
    
    // Remove previous selection
    document.querySelectorAll('.element-selected').forEach(el => {
      el.classList.remove('element-selected');
    });
    
    // Add selection to new element
    element.classList.add('element-selected');
    setSelectedElement(element);
    
    // Get element properties
    const computedStyle = window.getComputedStyle(element);
    setElementProperties({
      text: element.textContent || '',
      fontSize: parseInt(computedStyle.fontSize) || 16,
      fontWeight: parseInt(computedStyle.fontWeight) || 400,
      color: computedStyle.color || '#000000',
      backgroundColor: computedStyle.backgroundColor || 'transparent',
      padding: parseInt(computedStyle.padding) || 0,
      margin: parseInt(computedStyle.margin) || 0,
      borderRadius: parseInt(computedStyle.borderRadius) || 0,
      opacity: Math.round(parseFloat(computedStyle.opacity || 1) * 100),
      rotation: 0,
      x: element.offsetLeft,
      y: element.offsetTop,
      width: element.offsetWidth,
      height: element.offsetHeight
    });
    
    showToastMessage(`נבחר: ${element.getAttribute('data-element-type') || 'אלמנט'}`);
  }, [showToastMessage]);

  const updateElement = useCallback((property, value) => {
    if (!selectedElement) return;
    
    const element = selectedElement;
    
    switch(property) {
      case 'text':
        element.textContent = value;
        break;
      case 'fontSize':
        element.style.fontSize = value + 'px';
        break;
      case 'fontWeight':
        element.style.fontWeight = value;
        break;
      case 'color':
        element.style.color = value;
        break;
      case 'backgroundColor':
        element.style.backgroundColor = value;
        break;
      case 'padding':
        element.style.padding = value + 'px';
        break;
      case 'margin':
        element.style.margin = value + 'px';
        break;
      case 'borderRadius':
        element.style.borderRadius = value + 'px';
        break;
      case 'opacity':
        element.style.opacity = value / 100;
        break;
      case 'rotation':
        element.style.transform = `rotate(${value}deg)`;
        break;
    }
    
    setElementProperties(prev => ({ ...prev, [property]: value }));
    showToastMessage('עודכן בהצלחה!');
  }, [selectedElement, showToastMessage]);

  const addElement = useCallback((type) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const elements = {
      heading: `
        <h2 class="editable-text new-element" style="
          font-size: 2.5rem;
          font-weight: 600;
          color: #1a202c;
          margin: 32px 0;
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(103, 126, 234, 0.1);
          padding: 24px;
          border-radius: 16px;
          border: 2px dashed #667eea;
          text-align: center;
        " data-element-type="heading">
          כותרת חדשה
        </h2>
      `,
      text: `
        <p class="editable-text new-element" style="
          font-size: 1.2rem;
          color: #64748b;
          line-height: 1.6;
          margin: 24px 0;
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(103, 126, 234, 0.1);
          padding: 20px;
          border-radius: 12px;
          border: 2px dashed #667eea;
        " data-element-type="text">
          טקסט חדש. לחץ לעריכה.
        </p>
      `,
      button: `
        <button class="editable-button new-element" style="
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 20px;
          box-shadow: 0 8px 24px rgba(103, 126, 234, 0.3);
          border: 2px dashed #667eea;
        " data-element-type="button">
          כפתור חדש
        </button>
      `,
      image: `
        <div class="editable-image new-element" style="
          width: 300px;
          height: 200px;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 24px auto;
          border: 2px dashed #667eea;
          cursor: pointer;
          transition: all 0.3s ease;
        " data-element-type="image">
          <div style="text-align: center; color: #64748b;">
            <div style="font-size: 3rem; margin-bottom: 12px;">🖼️</div>
            <div style="font-size: 1.1rem; font-weight: 500;">תמונה חדשה</div>
          </div>
        </div>
      `,
      section: `
        <section class="editable-container new-element" style="
          padding: 80px 40px;
          background: rgba(255,255,255,0.8);
          border-radius: 24px;
          margin: 40px 0;
          border: 2px dashed #667eea;
          cursor: pointer;
          transition: all 0.3s ease;
        " data-element-type="section">
          <h3 class="editable-text" style="
            font-size: 2rem;
            color: #1a202c;
            text-align: center;
            margin-bottom: 24px;
            cursor: pointer;
          " data-element-type="heading">
            סקשן חדש
          </h3>
          <p class="editable-text" style="
            color: #64748b;
            text-align: center;
            font-size: 1.1rem;
            cursor: pointer;
          " data-element-type="text">
            תוכן הסקשן החדש
          </p>
        </section>
      `
    };

    if (elements[type]) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = elements[type];
      const newElement = tempDiv.firstElementChild;
      
      canvas.appendChild(newElement);
      
      // Add event listeners
      setTimeout(() => {
        const editableElements = newElement.querySelectorAll('.editable-text, .editable-button, .editable-image, .editable-container');
        editableElements.forEach(el => {
          el.addEventListener('click', (e) => {
            e.stopPropagation();
            selectElement(el);
          });
        });
        
        newElement.addEventListener('click', (e) => {
          e.stopPropagation();
          selectElement(newElement);
        });
        
        newElement.classList.remove('new-element');
        selectElement(newElement);
      }, 100);
      
      showToastMessage(`${type === 'heading' ? 'כותרת' : type === 'text' ? 'טקסט' : type === 'button' ? 'כפתור' : type === 'image' ? 'תמונה' : 'סקשן'} נוסף!`);
    }
  }, [selectElement, showToastMessage]);

  const deviceSizes = {
    desktop: { width: '1200px', height: '800px' },
    tablet: { width: '768px', height: '1024px' },
    mobile: { width: '375px', height: '667px' }
  };

  useEffect(() => {
    setIsLoading(true);
    setCanvasContent(premiumTemplate);
    
    setTimeout(() => {
      setIsLoading(false);
      
      // Add event listeners to all editable elements
      const editableElements = document.querySelectorAll('.editable-text, .editable-button, .editable-image, .editable-container');
      editableElements.forEach(element => {
        element.addEventListener('click', (e) => {
          e.stopPropagation();
          selectElement(element);
        });
      });
      
      showToastMessage('אדיטור מוכן לעבודה!');
    }, 1000);
  }, [selectElement, showToastMessage]);

  const tools = [
    { id: 'heading', icon: '📝', name: 'כותרת', color: '#667eea', desc: 'כותרות ראשיות' },
    { id: 'text', icon: '📄', name: 'טקסט', color: '#06d6a0', desc: 'פסקאות וטקסט' },
    { id: 'button', icon: '🔘', name: 'כפתור', color: '#f093fb', desc: 'כפתורי פעולה' },
    { id: 'image', icon: '🖼️', name: 'תמונה', color: '#f59e0b', desc: 'תמונות וגרפיקה' },
    { id: 'section', icon: '📦', name: 'סקשן', color: '#8b5cf6', desc: 'מקטעי תוכן' },
    { id: 'form', icon: '📋', name: 'טופס', color: '#06b6d4', desc: 'טפסי יצירת קשר' }
  ];

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
      height: '100vh',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
      overflow: 'hidden',
      position: 'relative'
    }}>

      {/* Advanced Styling */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        .element-selected {
          outline: 3px solid #667eea !important;
          outline-offset: 4px;
          position: relative;
          z-index: 1000;
        }
        
        .element-selected::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          background: rgba(103, 126, 234, 0.1);
          border-radius: 12px;
          z-index: -1;
        }
        
        .element-selected::after {
          content: '✏️';
          position: absolute;
          top: -16px;
          right: -16px;
          background: #667eea;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          z-index: 1001;
        }
        
        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 48px 120px rgba(0,0,0,0.15) !important;
        }
        
        .primary-btn:hover {
          background: rgba(255,255,255,0.3) !important;
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.2) !important;
        }
        
        .secondary-btn:hover {
          background: rgba(255,255,255,0.1) !important;
          transform: translateY(-4px);
        }
        
        .editable-text:hover,
        .editable-button:hover,
        .editable-image:hover,
        .editable-container:hover {
          background: rgba(103, 126, 234, 0.08) !important;
          backdrop-filter: blur(10px);
          border-radius: 8px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .loading-shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed',
          top: '24px',
          right: '24px',
          background: isDarkMode 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(40px)',
          padding: '20px 32px',
          borderRadius: '20px',
          border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
          color: isDarkMode ? '#e2e8f0' : '#1a202c',
          zIndex: 10000,
          animation: 'slideInRight 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          boxShadow: isDarkMode 
            ? '0 32px 80px rgba(0,0,0,0.4)' 
            : '0 32px 80px rgba(0,0,0,0.12)',
          fontWeight: '500',
          fontSize: '0.95rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '24px',
              height: '24px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px'
            }}>
              ✓
            </div>
            {toastMessage}
          </div>
        </div>
      )}

      {/* Header */}
      <header style={{
        background: isDarkMode 
          ? 'rgba(15, 23, 42, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(40px)',
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
        padding: '20px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        boxShadow: isDarkMode 
          ? '0 8px 32px rgba(0,0,0,0.2)' 
          : '0 8px 32px rgba(0,0,0,0.04)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={{
            fontSize: '1.8rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px'
          }}>
            🚀 WebMaster Pro
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '12px 24px',
            background: isDarkMode 
              ? 'rgba(255,255,255,0.05)' 
              : 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(20px)',
            border
