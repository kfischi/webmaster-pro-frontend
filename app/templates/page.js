<div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }} onClick={closePreview}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            width: '90%',
            height: '90%',
            position: 'relative',
            overflow: 'hidden'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 1001,
              display: 'flex',
              gap: '10px'
            }}>
              <button
                onClick={() => editTemplate(previewTemplate)}
                style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                ערוך תבנית
              </button>
              <button
                onClick={closePreview}
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                סגור
              </button>
            </div>
            <iframe
              srcDoc={previewTemplate.html}
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              title="תצוגה מקדימה"
            />
          </div>
        </div>
