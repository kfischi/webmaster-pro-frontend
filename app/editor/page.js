::-webkit-scrollbar-thumb:hover {
          background: ${isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'};
        }
      `}</style>

      <Toast />

      {/* Header */}
      <header style={{
        background: isDarkMode 
          ? 'rgba(15, 23, 42, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(40px)',
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        boxShadow: '0 8px 32px rgba(0,0,0,0.04)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px'
          }}>
            🚀 WebMaster Pro
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 16px',
            background: isDarkMode 
              ? 'rgba(255,255,255,0.05)' 
              : 'rgba(255,255,255,0.7)',
            borderRadius: '12px',
            border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)'}`,
            fontSize: '0.9rem',
            fontWeight: '500',
            color: isDarkMode ? '#e2e8f0' : '#1a202c'
          }}>
            📄 {getCurrentPage()?.name || 'טוען...'}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* Device Switcher */}
          <div style={{
            display: 'flex',
            background: isDarkMode 
              ? 'rgba(255,255,255,0.05)' 
              : 'rgba(255,255,255,0.6)',
            borderRadius: '12px',
            padding: '4px'
          }}>
            {Object.entries(devices).slice(0, 3).map(([deviceKey, device]) => (
              <button
                key={deviceKey}
                onClick={() => setCurrentDevice(deviceKey)}
                style={{
                  padding: '8px 12px',
                  border: 'none',
                  background: currentDevice === deviceKey
                    ? (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)')
                    : 'transparent',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: currentDevice === deviceKey
                    ? (isDarkMode ? '#ffffff' : '#1a202c')
                    : (isDarkMode ? '#94a3b8' : '#64748b'),
                  fontSize: '0.8rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {device.icon} {device.name}
              </button>
            ))}
          </div>

          {/* Zoom Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setCurrentZoom(Math.max(25, currentZoom - 25))}
              style={{
                width: '32px',
                height: '32px',
                border: 'none',
                background: isDarkMode 
                  ? 'rgba(255,255,255,0.08)' 
                  : 'rgba(255,255,255,0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                color: isDarkMode ? '#e2e8f0' : '#1a202c',
                fontSize: '1rem'
              }}
            >
              −
            </button>
            <span style={{
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              fontSize: '0.9rem',
              fontWeight: '500',
              minWidth: '50px',
              textAlign: 'center'
            }}>
              {currentZoom}%
            </span>
            <button
              onClick={() => setCurrentZoom(Math.min(200, currentZoom + 25))}
              style={{
                width: '32px',
                height: '32px',
                border: 'none',
                background: isDarkMode 
                  ? 'rgba(255,255,255,0.08)' 
                  : 'rgba(255,255,255,0.8)',
                borderRadius: '8px',
                cursor: 'pointer',
                color: isDarkMode ? '#e2e8f0' : '#1a202c',
                fontSize: '1rem'
              }}
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              padding: '8px 12px',
              background: isDarkMode 
                ? 'rgba(255,255,255,0.08)' 
                : 'rgba(255,255,255,0.7)',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)'}`,
              borderRadius: '8px',
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            style={{
              padding: '8px 16px',
              background: isPreviewMode 
                ? 'linear-gradient(135deg, #06d6a0, #0891b2)' 
                : (isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.7)'),
              border: 'none',
              borderRadius: '8px',
              color: isPreviewMode ? 'white' : (isDarkMode ? '#e2e8f0' : '#1a202c'),
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: '500'
            }}
          >
            {isPreviewMode ? '✏️ Edit' : '👁️ Preview'}
          </button>

          <button
            onClick={exportToHTML}
            style={{
              padding: '8px 16px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            💾 Export
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div style={{ display: 'flex', height: 'calc(100vh - 73px)' }}>
        
        {/* Left Sidebar */}
        {!isPreviewMode && (
          <div style={{
            width: '320px',
            background: isDarkMode 
              ? 'rgba(15, 23, 42, 0.7)' 
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(40px)',
            borderRight: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
            display: 'flex',
            flexDirection: 'column'
          }}>
            
            {/* Panel Tabs */}
            <div style={{
              display: 'flex',
              padding: '16px 16px 0 16px',
              gap: '4px'
            }}>
              {[
                { id: 'pages', label: 'דפים', icon: '📄' },
                { id: 'elements', label: 'רכיבים', icon: '🧩' },
                { id: 'design', label: 'עיצוב', icon: '🎨' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePanel(tab.id)}
                  style={{
                    flex: 1,
                    padding: '12px 8px',
                    background: activePanel === tab.id
                      ? (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)')
                      : 'transparent',
                    border: 'none',
                    borderRadius: '8px',
                    color: activePanel === tab.id
                      ? (isDarkMode ? '#ffffff' : '#1a202c')
                      : (isDarkMode ? '#94a3b8' : '#64748b'),
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: activePanel === tab.id ? '600' : '500',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Panel Content */}
            <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
              
              {/* Pages Panel */}
              {activePanel === 'pages' && (
                <div className="animate-fade-in">
                  <h3 style={{
                    color: isDarkMode ? '#e2e8f0' : '#1a202c',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    📄 ניהול דפים
                  </h3>

                  <button
                    onClick={() => createPage('page', 'דף חדש')}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginBottom: '16px',
                      fontSize: '0.9rem'
                    }}
                  >
                    ➕ הוסף דף חדש
                  </button>

                  <div style={{ display: 'grid', gap: '8px' }}>
                    {pages.map((page) => (
                      <div
                        key={page.id}
                        onClick={() => setCurrentPageId(page.id)}
                        style={{
                          padding: '12px',
                          background: currentPageId === page.id
                            ? (isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(103, 126, 234, 0.1)')
                            : (isDarkMode ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.6)'),
                          borderRadius: '8px',
                          cursor: 'pointer',
                          border: currentPageId === page.id
                            ? '2px solid #667eea'
                            : `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.8)'}`,
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div>
                            <div style={{
                              fontWeight: '600',
                              color: isDarkMode ? '#e2e8f0' : '#1a202c',
                              fontSize: '0.9rem'
                            }}>
                              {page.name}
                            </div>
                            <div style={{
                              fontSize: '0.75rem',
                              color: isDarkMode ? '#94a3b8' : '#64748b',
                              marginTop: '2px'
                            }}>
                              {page.url}
                            </div>
                          </div>
                          {pages.length > 1 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deletePage(page.id);
                              }}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: '#ef4444',
                                cursor: 'pointer',
                                padding: '4px',
                                borderRadius: '4px',
                                fontSize: '0.8rem'
                              }}
                            >
                              🗑️
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Elements Panel */}
              {activePanel === 'elements' && (
                <div className="animate-fade-in">
                  <h3 style={{
                    color: isDarkMode ? '#e2e8f0' : '#1a202c',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    🧩 רכיבים
                  </h3>

                  {Object.entries(componentLibrary).map(([category, components]) => (
                    <div key={category} style={{ marginBottom: '24px' }}>
                      <h4 style={{
                        color: isDarkMode ? '#cbd5e1' : '#475569',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '12px',
                        textTransform: 'capitalize'
                      }}>
                        {category === 'text' && '📝 טקסט'}
                        {category === 'media' && '🎬 מדיה'}
                        {category === 'layout' && '📐 פריסה'}
                        {category === 'interactive' && '🔘 אינטראקטיבי'}
                        {category === 'business' && '💼 עסקי'}
                      </h4>
                      
                      <div style={{ display: 'grid', gap: '8px' }}>
                        {components.map((component) => (
                          <div
                            key={component.id}
                            onClick={() => createElement(component.id)}
                            style={{
                              padding: '12px',
                              background: isDarkMode 
                                ? 'rgba(255,255,255,0.04)' 
                                : 'rgba(255,255,255,0.6)',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.8)'}`,
                              transition: 'all 0.2s ease',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = 'translateY(-2px)';
                              e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = 'none';
                            }}
                          >
                            <div style={{
                              width: '32px',
                              height: '32px',
                              background: 'linear-gradient(135deg, #667eea, #764ba2)',
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '1rem'
                            }}>
                              {component.icon}
                            </div>
                            <div>
                              <div style={{
                                fontWeight: '600',
                                color: isDarkMode ? '#e2e8f0' : '#1a202c',
                                fontSize: '0.9rem'
                              }}>
                                {component.name}
                              </div>
                              <div style={{
                                fontSize: '0.75rem',
                                color: isDarkMode ? '#94a3b8' : '#64748b'
                              }}>
                                {component.tag.toUpperCase()}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Design Panel */}
              {activePanel === 'design' && selectedElement && (
                <div className="animate-fade-in">
                  <h3 style={{
                    color: isDarkMode ? '#e2e8f0' : '#1a202c',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    🎨 עיצוב אלמנט
                  </h3>

                  <div style={{
                    padding: '12px',
                    background: isDarkMode 
                      ? 'rgba(255,255,255,0.05)' 
                      : 'rgba(255,255,255,0.8)',
                    borderRadius: '8px',
                    marginBottom: '16px',
                    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)'}`,
                    fontSize: '0.9rem',
                    color: isDarkMode ? '#e2e8f0' : '#1a202c'
                  }}>
                    <strong>נבחר:</strong> {selectedElement.type}
                  </div>

                  {/* Content Editor */}
                  {(selectedElement.type.includes('heading') || selectedElement.type === 'paragraph' || selectedElement.type === 'button') && (
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        color: isDarkMode ? '#e2e8f0' : '#1a202c',
                        fontWeight: '500',
                        fontSize: '0.9rem'
                      }}>
                        📝 תוכן
                      </label>
                      <textarea
                        value={selectedElement.content}
                        onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                          borderRadius: '8px',
                          background: isDarkMode 
                            ? 'rgba(255,255,255,0.05)' 
                            : 'rgba(255,255,255,0.9)',
                          color: isDarkMode ? '#e2e8f0' : '#1a202c',
                          fontSize: '0.9rem',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                          minHeight: '80px'
                        }}
                        placeholder="הכנס תוכן..."
                      />
                    </div>
                  )}

                  {/* Typography Controls */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      🔤 גופן
                    </label>
                    <select
                      value={selectedElement.styles?.fontFamily || 'Assistant'}
                      onChange={(e) => updateElement(selectedElement.id, {
                        styles: { ...selectedElement.styles, fontFamily: e.target.value }
                      })}
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                        borderRadius: '6px',
                        background: isDarkMode 
                          ? 'rgba(255,255,255,0.05)' 
                          : 'rgba(255,255,255,0.9)',
                        color: isDarkMode ? '#e2e8f0' : '#1a202c',
                        fontSize: '0.9rem'
                      }}
                    >
                      {googleFonts.map(font => (
                        <option key={font.name} value={font.name}>
                          {font.name} {font.hebrew ? '(עברית)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Font Size */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      📏 גודל ({selectedElement.styles?.fontSize || '1rem'})
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="6"
                      step="0.1"
                      value={parseFloat(selectedElement.styles?.fontSize) || 1}
                      onChange={(e) => updateElement(selectedElement.id, {
                        styles: { ...selectedElement.styles, fontSize: e.target.value + 'rem' }
                      })}
                      style={{
                        width: '100%',
                        cursor: 'pointer'
                      }}
                    />
                  </div>

                  {/* Font Weight */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      💪 עובי גופן
                    </label>
                    <select
                      value={selectedElement.styles?.fontWeight || '400'}
                      onChange={(e) => updateElement(selectedElement.id, {
                        styles: { ...selectedElement.styles, fontWeight: e.target.value }
                      })}
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                        borderRadius: '6px',
                        background: isDarkMode 
                          ? 'rgba(255,255,255,0.05)' 
                          : 'rgba(255,255,255,0.9)',
                        color: isDarkMode ? '#e2e8f0' : '#1a202c',
                        fontSize: '0.9rem'
                      }}
                    >
                      <option value="200">200 - דק מאוד</option>
                      <option value="300">300 - דק</option>
                      <option value="400">400 - רגיל</option>
                      <option value="500">500 - בינוני</option>
                      <option value="600">600 - מודגש</option>
                      <option value="700">700 - מודגש מאוד</option>
                      <option value="800">800 - עבה</option>
                    </select>
                  </div>

                  {/* Color Picker */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      🎨 צבע טקסט
                    </label>
                    <input
                      type="color"
                      value={selectedElement.styles?.color || '#000000'}
                      onChange={(e) => updateElement(selectedElement.id, {
                        styles: { ...selectedElement.styles, color: e.target.value }
                      })}
                      style={{
                        width: '100%',
                        height: '40px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}
                    />
                  </div>

                  {/* Text Align */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      📐 יישור טקסט
                    </label>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {['right', 'center', 'left', 'justify'].map((align) => (
                        <button
                          key={align}
                          onClick={() => updateElement(selectedElement.id, {
                            styles: { ...selectedElement.styles, textAlign: align }
                          })}
                          style={{
                            flex: 1,
                            padding: '8px',
                            border: 'none',
                            background: selectedElement.styles?.textAlign === align
                              ? 'linear-gradient(135deg, #667eea, #764ba2)'
                              : (isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.8)'),
                            color: selectedElement.styles?.textAlign === align
                              ? 'white'
                              : (isDarkMode ? '#e2e8f0' : '#1a202c'),
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.8rem'
                          }}
                        >
                          {align === 'right' && '→'}
                          {align === 'center' && '↔'}
                          {align === 'left' && '←'}
                          {align === 'justify' && '≡'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'grid', gap: '8px', marginTop: '24px' }}>
                    <button
                      onClick={() => duplicateElement(selectedElement.id)}
                      style={{
                        padding: '10px',
                        background: isDarkMode 
                          ? 'rgba(255,255,255,0.08)' 
                          : 'rgba(255,255,255,0.8)',
                        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                        borderRadius: '8px',
                        color: isDarkMode ? '#e2e8f0' : '#1a202c',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}
                    >
                      📋 שכפל אלמנט
                    </button>
                    
                    <button
                      onClick={() => deleteElement(selectedElement.id)}
                      style={{
                        padding: '10px',
                        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}
                    >
                      🗑️ מחק אלמנט
                    </button>
                  </div>
                </div>
              )}

              {/* No Element Selected */}
              {activePanel === 'design' && !selectedElement && (
                <div style={{
                  textAlign: 'center',
                  color: isDarkMode ? '#94a3b8' : '#64748b',
                  padding: '40px 20px'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>👆</div>
                  <div style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>
                    בחר אלמנט לעריכה
                  </div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                    לחץ על אלמנט בקנבס כדי לערוך את המאפיינים שלו
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Canvas Area */}
        <div style={{
          flex: 1,
          background: isDarkMode 
            ? 'linear-gradient(135deg, #0f172a, #1e293b)' 
            : 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: isPreviewMode ? '0' : '40px',
          overflow: 'auto'
        }}>

          {/* Canvas */}
          <div
            ref={canvasRef}
            style={{
              background: '#ffffff',
              borderRadius: isPreviewMode ? '0' : '16px',
              boxShadow: isPreviewMode 
                ? 'none' 
                : (isDarkMode 
                  ? '0 40px 120px rgba(0,0,0,0.5)' 
                  : '0 40px 120px rgba(0,0,0,0.15)'),
              overflow: isPreviewMode ? 'visible' : 'hidden',
              transform: isPreviewMode ? 'none' : `scale(${currentZoom / 100})`,
              transformOrigin: 'top center',
              width: isPreviewMode ? '100%' : devices[currentDevice].width,
              minHeight: isPreviewMode ? '100vh' : '600px',
              border: isPreviewMode 
                ? 'none' 
                : `2px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)'}`,
              position: 'relative',
              transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedElement(null);
              }
            }}
          >
            
            {/* Render Page Elements */}
            {getCurrentPage()?.elements.map((element) => {
              const Element = element.tag;
              const isSelected = selectedElement?.id === element.id;
              const responsiveStyles = element.responsive?.[currentDevice]?.styles || {};
              const isHidden = element.responsive?.[currentDevice]?.hidden;
              
              if (isHidden && !isPreviewMode) return null;
              
              return (
                <Element
                  key={element.id}
                  className={`${isSelected ? 'element-selected' : ''} ${!isPreviewMode ? 'draggable-element' : ''}`}
                  style={{
                    ...element.styles,
                    ...responsiveStyles,
                    position: 'absolute',
                    left: element.position?.x || 0,
                    top: element.position?.y || 0,
                    cursor: isPreviewMode ? 'default' : 'pointer',
                    userSelect: isPreviewMode ? 'text' : 'none',
                    opacity: isHidden ? 0.3 : (element.styles?.opacity || 1)
                  }}
                  onClick={(e) => {
                    if (!isPreviewMode) {
                      e.stopPropagation();
                      setSelectedElement(element);
                    }
                  }}
                  onDoubleClick={(e) => {
                    if (!isPreviewMode && (element.type.includes('heading') || element.type === 'paragraph' || element.type === 'button')) {
                      // Enable inline editing
                      e.target.contentEditable = true;
                      e.target.focus();
                      
                      const handleBlur = () => {
                        e.target.contentEditable = false;
                        updateElement(element.id, { content: e.target.textContent });
                        e.target.removeEventListener('blur', handleBlur);
                      };
                      
                      e.target.addEventListener('blur', handleBlur);
                    }
                  }}
                >
                  {element.type === 'image' ? (
                    element.content ? (
                      <img src={element.content} alt="" style={{ width: '100%', height: 'auto' }} />
                    ) : (
                      <div style={{
                        width: '200px',
                        height: '150px',
                        background: '#f1f5f9',
                        border: '2px dashed #cbd5e1',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#64748b',
                        fontSize: '0.9rem'
                      }}>
                        🖼️ הוסף תמונה
                      </div>
                    )
                  ) : element.type === 'video' ? (
                    element.content ? (
                      element.content.includes('youtube.com') || element.content.includes('youtu.be') ? (
                        <iframe
                          src={element.content.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                          width="560"
                          height="315"
                          frameBorder="0"
                          allowFullScreen
                        />
                      ) : element.content.includes('vimeo.com') ? (
                        <iframe
                          src={element.content.replace('vimeo.com/', 'player.vimeo.com/video/')}
                          width="560"
                          height="315"
                          frameBorder="0"
                          allowFullScreen
                        />
                      ) : (
                        <video controls style={{ width: '100%', maxWidth: '560px' }}>
                          <source src={element.content} type="video/mp4" />
                        </video>
                      )
                    ) : (
                      <div style={{
                        width: '300px',
                        height: '200px',
                        background: '#f1f5f9',
                        border: '2px dashed #cbd5e1',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#64748b',
                        fontSize: '0.9rem'
                      }}>
                        🎬 הוסף וידאו
                      </div>
                    )
                  ) : element.type === 'hero' ? (
                    <div style={{
                      background: element.styles?.background || 'linear-gradient(135deg, #667eea, #764ba2)',
                      color: element.styles?.color || '#ffffff',
                      padding: '4rem 2rem',
                      textAlign: 'center',
                      borderRadius: '12px',
                      width: '100%',
                      minHeight: '400px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <h1 style={{
                        fontSize: '3rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}>
                        {element.content}
                      </h1>
                      <p style={{
                        fontSize: '1.25rem',
                        opacity: 0.9,
                        marginBottom: '2rem'
                      }}>
                        הטקסט התומך של הHero
                      </p>
                      <button style={{
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        border: '2px solid rgba(255,255,255,0.3)',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}>
                        התחל עכשיו
                      </button>
                    </div>
                  ) : element.type === 'testimonial' ? (
                    <div style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '2rem',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                      maxWidth: '400px'
                    }}>
                      <div style={{
                        display: 'flex',
                        marginBottom: '1rem'
                      }}>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: '#fbbf24', fontSize: '1.2rem' }}>⭐</span>
                        ))}
                      </div>
                      <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        marginBottom: '1rem',
                        fontStyle: 'italic'
                      }}>
                        "{element.content}"
                      </p>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: '#e2e8f0',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          👤
                        </div>
                        <div>
                          <div style={{ fontWeight: '600' }}>שם הלקוח</div>
                          <div style={{ fontSize: '0.9rem', color: '#64748b' }}>תפקיד</div>
                        </div>
                      </div>
                    </div>
                  ) : element.type === 'team-member' ? (
                    <div style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      textAlign: 'center',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                      maxWidth: '300px'
                    }}>
                      <div style={{
                        width: '100px',
                        height: '100px',
                        background: '#e2e8f0',
                        borderRadius: '50%',
                        margin: '0 auto 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem'
                      }}>
                        👤
                      </div>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        marginBottom: '0.5rem'
                      }}>
                        {element.content}
                      </h3>
                      <p style={{
                        color: '#64748b',
                        marginBottom: '1rem'
                      }}>
                        תפקיד בחברה
                      </p>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{ cursor: 'pointer' }}>📧</span>
                        <span style={{ cursor: 'pointer' }}>💼</span>
                        <span style={{ cursor: 'pointer' }}>🐦</span>
                      </div>
                    </div>
                  ) : element.type === 'service-card' ? (
                    <div style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '2rem',
                      textAlign: 'center',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                      maxWidth: '350px',
                      transition: 'transform 0.3s ease'
                    }}>
                      <div style={{
                        fontSize: '3rem',
                        marginBottom: '1rem'
                      }}>
                        💼
                      </div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                      }}>
                        {element.content}
                      </h3>
                      <p style={{
                        color: '#64748b',
                        lineHeight: '1.6',
                        marginBottom: '1.5rem'
                      }}>
                        תיאור השירות והיתרונות שלו ללקוחות שלכם
                      </p>
                      <button style={{
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '500'
                      }}>
                        קרא עוד
                      </button>
                    </div>
                  ) : element.type === 'stats' ? (
                    <div style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '2rem',
                      textAlign: 'center',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                      minWidth: '200px'
                    }}>
                      <div style={{
                        fontSize: '3rem',
                        fontWeight: '700',
                        color: '#667eea',
                        marginBottom: '0.5rem'
                      }}>
                        {element.content}
                      </div>
                      <p style={{
                        color: '#64748b',
                        fontSize: '1.1rem',
                        fontWeight: '500'
                      }}>
                        לקוחות מרוצים
                      </p>
                    </div>
                  ) : element.type === 'form' ? (
                    <div style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '2rem',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                      maxWidth: '500px'
                    }}>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        textAlign: 'center'
                      }}>
                        צור קשר
                      </h3>
                      <form style={{ display: 'grid', gap: '1rem' }}>
                        <input
                          type="text"
                          placeholder="שם מלא"
                          style={{
                            padding: '0.75rem',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            fontSize: '1rem'
                          }}
                        />
                        <input
                          type="email"
                          placeholder="אימייל"
                          style={{
                            padding: '0.75rem',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            fontSize: '1rem'
                          }}
                        />
                        <textarea
                          placeholder="הודעה"
                          rows="4"
                          style={{
                            padding: '0.75rem',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            resize: 'vertical'
                          }}
                        />
                        <button
                          type="submit"
                          style={{
                            background: '#667eea',
                            color: 'white',
                            border: 'none',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                          }}
                        >
                          שלח הודעה
                        </button>
                      </form>
                    </div>
                  ) : (
                    element.content
                  )}
                </Element>
              );
            })}

            {/* Empty State */}
            {getCurrentPage()?.elements.length === 0 && !isPreviewMode && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: '#64748b'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎨</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>התחל לעצב!</h3>
                <p>גרור רכיבים מהסיידבר כדי להתחיל לבנות את האתר</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Advanced Properties */}
        {!isPreviewMode && selectedElement && (
          <div style={{
            width: '280px',
            background: isDarkMode 
              ? 'rgba(15, 23, 42, 0.7)' 
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(40px)',
            borderLeft: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
            padding: '20px',
            overflowY: 'auto'
          }}>
            <h3 style={{
              color: isDarkMode ? '#e2e8f0' : '#1a202c',
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '20px'
            }}>
              ⚙️ מאפיינים מתקדמים
            </h3>

            {/* Spacing Controls */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{
                color: isDarkMode ? '#cbd5e1' : '#475569',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                📐 רווחים
              </h4>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    color: isDarkMode ? '#94a3b8' : '#64748b',
                    marginBottom: '4px'
                  }}>
                    Padding
                  </label>
                  <input
                    type="text"
                    value={selectedElement.styles?.padding || '0'}
                    onChange={(e) => updateElement(selectedElement.id, {
                      styles: { ...selectedElement.styles, padding: e.target.value }
                    })}
                    style={{
                      width: '100%',
                      padding: '6px',
                      border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                      borderRadius: '4px',
                      background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontSize: '0.8rem'
                    }}
                    placeholder="12px"
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    color: isDarkMode ? '#94a3b8' : '#64748b',
                    marginBottom: '4px'
                  }}>
                    Margin
                  </label>
                  <input
                    type="text"
                    value={selectedElement.styles?.margin || '0'}
                    onChange={(e) => updateElement(selectedElement.id, {
                      styles: { ...selectedElement.styles, margin: e.target.value }
                    })}
                    style={{
                      width: '100%',
                      padding: '6px',
                      border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                      borderRadius: '4px',
                      background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontSize: '0.8rem'
                    }}
                    placeholder="12px"
                  />
                </div>
              </div>
            </div>

            {/* Background & Border */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{
                color: isDarkMode ? '#cbd5e1' : '#475569',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                🎨 רקע וגבולות
              </h4>
              
              <div style={{ marginBottom: '12px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: isDarkMode ? '#94a3b8' : '#64748b',
                  marginBottom: '4px'
                }}>
                  צבע רקע
                </label>
                <input
                  type="color"
                  value={selectedElement.styles?.backgroundColor || '#ffffff'}
                  onChange={(e) => updateElement(selectedElement.id, {
                    styles: { ...selectedElement.styles, backgroundColor: e.target.value }
                  })}
                  style={{
                    width: '100%',
                    height: '32px',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: isDarkMode ? '#94a3b8' : '#64748b',
                  marginBottom: '4px'
                }}>
                  עיגול פינות
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={parseInt(selectedElement.styles?.borderRadius) || 0}
                  onChange={(e) => updateElement(selectedElement.id, {
                    styles: { ...selectedElement.styles, borderRadius: e.target.value + 'px' }
                  })}
                  style={{
                    width: '100%',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>

            {/* Position & Size */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{
                color: isDarkMode ? '#cbd5e1' : '#475569',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                📍 מיקום וגודל
              </h4>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    color: isDarkMode ? '#94a3b8' : '#64748b',
                    marginBottom: '4px'
                  }}>
                    X
                  </label>
                  <input
                    type="number"
                    value={selectedElement.position?.x || 0}
                    onChange={(e) => updateElement(selectedElement.id, {
                      position: { ...selectedElement.position, x: parseInt(e.target.value) }
                    })}
                    style={{
                      width: '100%',
                      padding: '6px',
                      border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                      borderRadius: '4px',
                      background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontSize: '0.8rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    color: isDarkMode ? '#94a3b8' : '#64748b',
                    marginBottom: '4px'
                  }}>
                    Y
                  </label>
                  <input
                    type="number"
                    value={selectedElement.position?.y || 0}
                    onChange={(e) => updateElement(selectedElement.id, {
                      position: { ...selectedElement.position, y: parseInt(e.target.value) }
                    })}
                    style={{
                      width: '100%',
                      padding: '6px',
                      border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                      borderRadius: '4px',
                      background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
                      color: isDarkMode ? '#e2e8f0' : '#1a202c',
                      fontSize: '0.8rem'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Responsive Controls */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{
                color: isDarkMode ? '#cbd5e1' : '#475569',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                📱 Responsive
              </h4>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px',
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
                borderRadius: '6px',
                fontSize: '0.9rem'
              }}>
                <span style={{ color: isDarkMode ? '#e2e8f0' : '#1a202c' }}>
                  הסתר ב-{devices[currentDevice].name}
                </span>
                <input
                  type="checkbox"
                  checked={selectedElement.responsive?.[currentDevice]?.hidden || false}
                  onChange={(e) => updateElement(selectedElement.id, {
                    responsive: {
                      ...selectedElement.responsive,
                      [currentDevice]: {
                        ...selectedElement.responsive?.[currentDevice],
                        hidden: e.target.checked
                      }
                    }
                  })}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Element Info */}
            <div style={{
              padding: '12px',
              background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)',
              borderRadius: '8px',
              fontSize: '0.8rem',
              color: isDarkMode ? '#94a3b8' : '#64748b'
            }}>
              <div><strong>ID:</strong> {selectedElement.id}</div>
              <div><strong>Type:</strong> {selectedElement.type}</div>
              <div><strong>Tag:</strong> {selectedElement.tag}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}'use client';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

export default function WebMasterPro() {
  // ============================================
  // CORE STATE MANAGEMENT
  // ============================================
  
  // Project & Pages
  const [project, setProject] = useState({
    id: 'project-1',
    name: 'אתר חדש',
    domain: '',
    language: 'he',
    direction: 'rtl',
    createdAt: new Date().toISOString(),
    settings: {
      seoTitle: '',
      seoDescription: '',
      favicon: '',
      googleAnalytics: '',
      colors: {
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#f093fb',
        background: '#ffffff',
        text: '#1a202c'
      },
      fonts: {
        heading: 'Heebo',
        body: 'Assistant'
      }
    }
  });

  const [pages, setPages] = useState([
    {
      id: 'page-home',
      name: 'דף הבית',
      url: '/',
      type: 'home',
      seo: { title: 'דף הבית', description: 'ברוכים הבאים לאתר שלנו' },
      elements: []
    },
    {
      id: 'page-about',
      name: 'אודותינו',
      url: '/about',
      type: 'about',
      seo: { title: 'אודותינו', description: 'הכירו את הצוות והחזון שלנו' },
      elements: []
    },
    {
      id: 'page-contact',
      name: 'צור קשר',
      url: '/contact',
      type: 'contact',
      seo: { title: 'צור קשר', description: 'נשמח לשמוע מכם' },
      elements: []
    }
  ]);

  // Editor State
  const [currentPageId, setCurrentPageId] = useState('page-home');
  const [selectedElement, setSelectedElement] = useState(null);
  const [currentDevice, setCurrentDevice] = useState('desktop');
  const [currentZoom, setCurrentZoom] = useState(100);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activePanel, setActivePanel] = useState('pages');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // UI State
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [draggedElement, setDraggedElement] = useState(null);

  // Refs
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // ============================================
  // RESPONSIVE BREAKPOINTS
  // ============================================
  
  const devices = {
    mobile: { name: 'Mobile', width: '375px', icon: '📱' },
    tablet: { name: 'Tablet', width: '768px', icon: '📱' },
    desktop: { name: 'Desktop', width: '1024px', icon: '🖥️' },
    large: { name: 'Large', width: '1440px', icon: '🖥️' },
    xl: { name: 'XL', width: '1920px', icon: '🖥️' }
  };

  // ============================================
  // COMPONENT LIBRARY
  // ============================================
  
  const componentLibrary = {
    text: [
      { id: 'heading-1', name: 'כותרת ראשית', icon: '📝', tag: 'h1' },
      { id: 'heading-2', name: 'כותרת משנה', icon: '📝', tag: 'h2' },
      { id: 'heading-3', name: 'כותרת קטנה', icon: '📝', tag: 'h3' },
      { id: 'paragraph', name: 'פסקה', icon: '📄', tag: 'p' },
      { id: 'quote', name: 'ציטוט', icon: '💬', tag: 'blockquote' }
    ],
    media: [
      { id: 'image', name: 'תמונה', icon: '🖼️', tag: 'img' },
      { id: 'video', name: 'וידאו', icon: '🎬', tag: 'video' },
      { id: 'gallery', name: 'גלריה', icon: '🎨', tag: 'div' },
      { id: 'icon', name: 'אייקון', icon: '⭐', tag: 'i' }
    ],
    layout: [
      { id: 'container', name: 'מכולה', icon: '📦', tag: 'div' },
      { id: 'section', name: 'סקשן', icon: '📋', tag: 'section' },
      { id: 'grid', name: 'רשת', icon: '⚏', tag: 'div' },
      { id: 'spacer', name: 'רווח', icon: '⬜', tag: 'div' }
    ],
    interactive: [
      { id: 'button', name: 'כפתור', icon: '🔘', tag: 'button' },
      { id: 'form', name: 'טופס', icon: '📝', tag: 'form' },
      { id: 'link', name: 'קישור', icon: '🔗', tag: 'a' },
      { id: 'menu', name: 'תפריט', icon: '☰', tag: 'nav' }
    ],
    business: [
      { id: 'hero', name: 'Hero Section', icon: '🎯', tag: 'section' },
      { id: 'testimonial', name: 'המלצה', icon: '⭐', tag: 'div' },
      { id: 'team-member', name: 'איש צוות', icon: '👤', tag: 'div' },
      { id: 'service-card', name: 'כרטיס שירות', icon: '💼', tag: 'div' },
      { id: 'stats', name: 'סטטיסטיקות', icon: '📊', tag: 'div' },
      { id: 'timeline', name: 'ציר זמן', icon: '📅', tag: 'div' }
    ]
  };

  // ============================================
  // GOOGLE FONTS LIBRARY
  // ============================================
  
  const googleFonts = [
    { name: 'Heebo', category: 'sans-serif', hebrew: true },
    { name: 'Assistant', category: 'sans-serif', hebrew: true },
    { name: 'Rubik', category: 'sans-serif', hebrew: true },
    { name: 'Alef', category: 'sans-serif', hebrew: true },
    { name: 'Frank Ruhl Libre', category: 'serif', hebrew: true },
    { name: 'Secular One', category: 'sans-serif', hebrew: true },
    { name: 'Varela Round', category: 'sans-serif', hebrew: true },
    { name: 'Open Sans', category: 'sans-serif', hebrew: false },
    { name: 'Roboto', category: 'sans-serif', hebrew: false },
    { name: 'Lato', category: 'sans-serif', hebrew: false },
    { name: 'Montserrat', category: 'sans-serif', hebrew: false },
    { name: 'Poppins', category: 'sans-serif', hebrew: false },
    { name: 'Inter', category: 'sans-serif', hebrew: false },
    { name: 'Playfair Display', category: 'serif', hebrew: false },
    { name: 'Source Sans Pro', category: 'sans-serif', hebrew: false },
    { name: 'Nunito', category: 'sans-serif', hebrew: false }
  ];

  // ============================================
  // HELPER FUNCTIONS
  // ============================================
  
  const showToastMessage = useCallback((message, type = 'success') => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }, []);

  const getCurrentPage = useCallback(() => {
    return pages.find(page => page.id === currentPageId);
  }, [pages, currentPageId]);

  const generateId = useCallback(() => {
    return 'el-' + Math.random().toString(36).substr(2, 9);
  }, []);

  // ============================================
  // PAGE MANAGEMENT
  // ============================================
  
  const createPage = useCallback((type = 'page', name = 'דף חדש') => {
    const newPage = {
      id: `page-${Date.now()}`,
      name,
      url: `/${name.replace(/\s+/g, '-').toLowerCase()}`,
      type,
      seo: {
        title: name,
        description: `תיאור עבור ${name}`,
        keywords: ''
      },
      elements: []
    };
    
    setPages(prev => [...prev, newPage]);
    setCurrentPageId(newPage.id);
    showToastMessage(`דף "${name}" נוצר בהצלחה!`);
  }, [showToastMessage]);

  const deletePage = useCallback((pageId) => {
    if (pages.length <= 1) {
      showToastMessage('חייב להישאר לפחות דף אחד!', 'error');
      return;
    }
    
    setPages(prev => prev.filter(p => p.id !== pageId));
    if (currentPageId === pageId) {
      setCurrentPageId(pages[0].id);
    }
    showToastMessage('הדף נמחק בהצלחה!');
  }, [pages, currentPageId, showToastMessage]);

  const updatePage = useCallback((pageId, updates) => {
    setPages(prev => prev.map(page => 
      page.id === pageId ? { ...page, ...updates } : page
    ));
  }, []);

  // ============================================
  // ELEMENT MANAGEMENT
  // ============================================
  
  const createElement = useCallback((componentType, position = { x: 100, y: 100 }) => {
    const component = Object.values(componentLibrary)
      .flat()
      .find(comp => comp.id === componentType);
    
    if (!component) return;

    const elementId = generateId();
    const newElement = {
      id: elementId,
      type: componentType,
      tag: component.tag,
      content: getDefaultContent(componentType),
      styles: getDefaultStyles(componentType),
      position,
      responsive: {
        mobile: { hidden: false, styles: {} },
        tablet: { hidden: false, styles: {} },
        desktop: { hidden: false, styles: {} },
        large: { hidden: false, styles: {} },
        xl: { hidden: false, styles: {} }
      }
    };

    setPages(prev => prev.map(page => 
      page.id === currentPageId 
        ? { ...page, elements: [...page.elements, newElement] }
        : page
    ));

    setSelectedElement(newElement);
    showToastMessage(`${component.name} נוסף בהצלחה!`);
  }, [currentPageId, generateId, showToastMessage]);

  const updateElement = useCallback((elementId, updates) => {
    setPages(prev => prev.map(page => 
      page.id === currentPageId 
        ? {
            ...page,
            elements: page.elements.map(el => 
              el.id === elementId ? { ...el, ...updates } : el
            )
          }
        : page
    ));

    if (selectedElement?.id === elementId) {
      setSelectedElement(prev => ({ ...prev, ...updates }));
    }
  }, [currentPageId, selectedElement]);

  const deleteElement = useCallback((elementId) => {
    setPages(prev => prev.map(page => 
      page.id === currentPageId 
        ? { ...page, elements: page.elements.filter(el => el.id !== elementId) }
        : page
    ));
    
    if (selectedElement?.id === elementId) {
      setSelectedElement(null);
    }
    
    showToastMessage('האלמנט נמחק בהצלחה!');
  }, [currentPageId, selectedElement, showToastMessage]);

  const duplicateElement = useCallback((elementId) => {
    const page = getCurrentPage();
    const element = page?.elements.find(el => el.id === elementId);
    
    if (!element) return;

    const newElement = {
      ...element,
      id: generateId(),
      position: {
        x: element.position.x + 20,
        y: element.position.y + 20
      }
    };

    setPages(prev => prev.map(page => 
      page.id === currentPageId 
        ? { ...page, elements: [...page.elements, newElement] }
        : page
    ));

    showToastMessage('האלמנט שוכפל בהצלחה!');
  }, [currentPageId, getCurrentPage, generateId, showToastMessage]);

  // ============================================
  // DEFAULT CONTENT & STYLES
  // ============================================
  
  const getDefaultContent = (type) => {
    const defaults = {
      'heading-1': 'כותרת ראשית',
      'heading-2': 'כותרת משנה', 
      'heading-3': 'כותרת קטנה',
      'paragraph': 'זהו טקסט לדוגמה. לחץ כדי לערוך את התוכן.',
      'quote': 'זהו ציטוט מעורר השראה.',
      'button': 'לחץ כאן',
      'image': '',
      'video': '',
      'hero': 'ברוכים הבאים לעסק שלנו',
      'testimonial': 'שירות מעולה! אני ממליץ בחום.',
      'team-member': 'יוסי כהן',
      'service-card': 'השירות שלנו',
      'stats': '150+',
      'link': 'קישור'
    };
    return defaults[type] || 'תוכן חדש';
  };

  const getDefaultStyles = (type) => {
    const baseStyles = {
      'heading-1': {
        fontSize: '3rem',
        fontWeight: '700',
        lineHeight: '1.2',
        color: project.settings.colors.text,
        marginBottom: '1rem',
        textAlign: 'center'
      },
      'heading-2': {
        fontSize: '2.5rem',
        fontWeight: '600',
        lineHeight: '1.3',
        color: project.settings.colors.text,
        marginBottom: '1rem'
      },
      'heading-3': {
        fontSize: '2rem',
        fontWeight: '600',
        lineHeight: '1.4',
        color: project.settings.colors.text,
        marginBottom: '0.75rem'
      },
      'paragraph': {
        fontSize: '1.125rem',
        lineHeight: '1.6',
        color: project.settings.colors.text,
        marginBottom: '1rem'
      },
      'quote': {
        fontSize: '1.25rem',
        fontStyle: 'italic',
        borderLeft: `4px solid ${project.settings.colors.primary}`,
        paddingLeft: '1rem',
        marginLeft: '1rem',
        color: project.settings.colors.text
      },
      'button': {
        backgroundColor: project.settings.colors.primary,
        color: '#ffffff',
        padding: '0.75rem 2rem',
        borderRadius: '0.5rem',
        border: 'none',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      },
      'image': {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '0.5rem'
      },
      'hero': {
        padding: '4rem 2rem',
        textAlign: 'center',
        background: `linear-gradient(135deg, ${project.settings.colors.primary}, ${project.settings.colors.secondary})`,
        color: '#ffffff',
        fontSize: '3rem',
        fontWeight: '700'
      }
    };

    return baseStyles[type] || {};
  };

  // ============================================
  // EXPORT FUNCTIONALITY
  // ============================================
  
  const exportToHTML = useCallback(() => {
    const htmlContent = generateHTML();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.name}.html`;
    a.click();
    URL.revokeObjectURL(url);
    showToastMessage('האתר יוצא בהצלחה!');
  }, [project, showToastMessage]);

  const generateHTML = useCallback(() => {
    const currentPage = getCurrentPage();
    if (!currentPage) return '';

    return `<!DOCTYPE html>
<html lang="${project.language}" dir="${project.direction}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${currentPage.seo.title}</title>
    <meta name="description" content="${currentPage.seo.description}">
    <link href="https://fonts.googleapis.com/css2?family=${project.settings.fonts.heading.replace(' ', '+')}:wght@200;300;400;500;600;700;800&family=${project.settings.fonts.body.replace(' ', '+')}:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        ${generateCSS()}
    </style>
</head>
<body>
    ${generatePageHTML(currentPage)}
    <script>
        ${generateJavaScript()}
    </script>
</body>
</html>`;
  }, [project, getCurrentPage]);

  const generateCSS = useCallback(() => {
    return `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: '${project.settings.fonts.body}', sans-serif;
    line-height: 1.6;
    color: ${project.settings.colors.text};
    background: ${project.settings.colors.background};
}

h1, h2, h3, h4, h5, h6 {
    font-family: '${project.settings.fonts.heading}', sans-serif;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.btn {
    display: inline-block;
    padding: 0.75rem 2rem;
    background: ${project.settings.colors.primary};
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn:hover {
    background: ${project.settings.colors.secondary};
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
}
`;
  }, [project]);

  const generatePageHTML = useCallback((page) => {
    return page.elements.map(element => {
      const Tag = element.tag;
      const styles = Object.entries(element.styles)
        .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
        .join('; ');
      
      return `<${Tag} style="${styles}">${element.content}</${Tag}>`;
    }).join('\n');
  }, []);

  const generateJavaScript = useCallback(() => {
    return `
// WebMaster Pro Generated Code
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form handling
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('טופס נשלח בהצלחה! (דמו)');
        });
    });
});
`;
  }, []);

  // ============================================
  // UI COMPONENTS
  // ============================================

  const Toast = () => (
    showToast && (
      <div style={{
        position: 'fixed',
        top: '24px',
        right: '24px',
        background: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(40px)',
        padding: '16px 24px',
        borderRadius: '12px',
        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
        color: isDarkMode ? '#e2e8f0' : '#1a202c',
        zIndex: 10000,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        animation: 'slideInRight 0.3s ease-out'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '20px',
            height: '20px',
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
    )
  );

  // ============================================
  // MAIN RENDER
  // ============================================

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      height: '100vh',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400;500;600;700;800&family=Assistant:wght@200;300;400;500;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          font-family: 'Assistant', sans-serif;
          overflow: hidden;
        }
        
        .element-selected {
          outline: 3px solid #667eea !important;
          outline-offset: 2px;
          position: relative;
          z-index: 1000;
        }
        
        .element-selected::after {
          content: '✏️';
          position: absolute;
          top: -12px;
          right: -12px;
          background: #667eea;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          border: 2px solid white;
          z-index: 1001;
        }
        
        .draggable-element {
          cursor: move;
          transition: all 0.2s ease;
        }
        
        .draggable-element:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
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
          background: ${isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(
