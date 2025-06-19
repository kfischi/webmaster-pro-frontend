'use client';

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', margin: 0, padding: 0 }}>
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '4rem', 
            margin: '0 0 30px 0', 
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            lineHeight: '1.2'
          }}>
            🚀 בונה אתרים מקצועי
          </h1>
          
          <p style={{ 
            fontSize: '1.5rem', 
            margin: '0 0 40px 0', 
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            צור אתרים מקצועיים בדקות ספורות עם התבניות המתקדמות שלנו
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.location.href = '/templates'}
              style={{
                padding: '20px 40px',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                background: '#ffffff',
                color: '#667eea',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.3s',
                minWidth: '200px'
              }}
            >
              🎨 גלריית תבניות
            </button>
            
            <button
              onClick={() => window.location.href = '/editor'}
              style={{
                padding: '20px 40px',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid white',
                borderRadius: '50px',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s',
                minWidth: '200px'
              }}
            >
              ✏️ אדיטור מתקדם
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 20px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            margin: '0 0 60px 0', 
            color: '#2c3e50' 
          }}>
            למה לבחור בנו?
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px' 
          }}>
            
            <div style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '15px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>⚡</div>
              <h3 style={{ fontSize: '1.5rem', margin: '0 0 15px 0', color: '#2c3e50' }}>
                מהיר וקל
              </h3>
              <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                צור אתר מקצועי תוך דקות ספורות עם הכלים המתקדמים שלנו
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '15px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎨</div>
              <h3 style={{ fontSize: '1.5rem', margin: '0 0 15px 0', color: '#2c3e50' }}>
                עיצוב מקצועי
              </h3>
              <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                תבניות מעוצבות ברמה הגבוהה ביותר על ידי מעצבים מקצועיים
              </p>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '15px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📱</div>
              <h3 style={{ fontSize: '1.5rem', margin: '0 0 15px 0', color: '#2c3e50' }}>
                רספונסיבי
              </h3>
              <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                האתר שלך ייראה מושלם בכל מכשיר - מחשב, טאבלט ונייד
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            margin: '0 0 20px 0', 
            color: '#2c3e50' 
          }}>
            התבניות הפופולריות שלנו
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.2rem', 
            margin: '0 0 60px 0', 
            color: '#7f8c8d' 
          }}>
            למעלה מ-6 תבניות מקצועיות לכל סוג עסק
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px',
            marginBottom: '50px'
          }}>
            
            {/* Template Cards */}
            {[
              { name: 'מספרת מקצועית', category: 'יופי ואסתטיקה', icon: '💇‍♂️', color: '#e74c3c' },
              { name: 'מכון כושר', category: 'ספורט וכושר', icon: '💪', color: '#ff6b6b' },
              { name: 'עורך דין', category: 'משפטים', icon: '⚖️', color: '#c9b037' },
              { name: 'מורה פרטי', category: 'חינוך', icon: '📚', color: '#667eea' },
              { name: 'פסיכולוג', category: 'בריאות', icon: '🧘‍♀️', color: '#74b9ff' },
              { name: 'יוגה', category: 'רווחה', icon: '🧘', color: '#2e7d32' }
            ].map((template, index) => (
              <div key={index} style={{ 
                background: '#f8f9fa', 
                padding: '30px', 
                borderRadius: '15px', 
                textAlign: 'center',
                border: `3px solid ${template.color}`,
                transition: 'transform 0.3s'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{template.icon}</div>
                <h3 style={{ fontSize: '1.3rem', margin: '0 0 10px 0', color: '#2c3e50' }}>
                  {template.name}
                </h3>
                <p style={{ color: '#7f8c8d', fontSize: '0.9rem', margin: 0 }}>
                  {template.category}
                </p>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => window.location.href = '/templates'}
              style={{
                padding: '15px 40px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                boxShadow: '0 5px 20px rgba(102, 126, 234, 0.3)'
              }}
            >
              🎨 צפה בכל התבניות
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            margin: '0 0 60px 0', 
            color: '#2c3e50' 
          }}>
            איך זה עובד?
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '40px' 
          }}>
            
            <div style={{ padding: '20px' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: '#667eea', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 20px auto',
                fontSize: '2rem'
              }}>
                1️⃣
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: '0 0 15px 0', color: '#2c3e50' }}>
                בחר תבנית
              </h3>
              <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                עבור לגלריה ובחר את התבנית המתאימה לעסק שלך
              </p>
            </div>

            <div style={{ padding: '20px' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: '#27ae60', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 20px auto',
                fontSize: '2rem'
              }}>
                2️⃣
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: '0 0 15px 0', color: '#2c3e50' }}>
                ערוך ועצב
              </h3>
              <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                השתמש באדיטור המתקדם כדי להתאים את האתר לצרכים שלך
              </p>
            </div>

            <div style={{ padding: '20px' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: '#e74c3c', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 20px auto',
                fontSize: '2rem'
              }}>
                3️⃣
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: '0 0 15px 0', color: '#2c3e50' }}>
                פרסם באינטרנט
              </h3>
              <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                ייצא את האתר המוכן ופרסם אותו באינטרנט
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '80px 20px', 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            margin: '0 0 20px 0', 
            fontWeight: 'bold'
          }}>
            מוכן להתחיל?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            margin: '0 0 40px 0', 
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            צור את האתר המקצועי שלך עוד היום עם הכלים המתקדמים שלנו
          </p>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.location.href = '/templates'}
              style={{
                padding: '18px 35px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                minWidth: '180px'
              }}
            >
              🚀 התחל עכשיו
            </button>
            
            <button
              onClick={() => window.location.href = '/editor'}
              style={{
                padding: '18px 35px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '30px',
                cursor: 'pointer',
                minWidth: '180px'
              }}
            >
              💡 נסה את האדיטור
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: '#1a1a1a', 
        color: '#bdc3c7', 
        padding: '40px 20px', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            margin: '0 0 20px 0', 
            color: '#667eea' 
          }}>
            🚀 בונה אתרים מקצועי
          </h3>
          <p style={{ margin: '0 0 30px 0', lineHeight: '1.6' }}>
            הפלטפורמה המתקדמת ביותר לבניית אתרים מקצועיים בישראל
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            marginBottom: '30px',
            flexWrap: 'wrap'
          }}>
            <a href="/templates" style={{ color: '#667eea', textDecoration: 'none' }}>גלריית תבניות</a>
            <a href="/editor" style={{ color: '#667eea', textDecoration: 'none' }}>אדיטור</a>
            <span style={{ color: '#7f8c8d' }}>צור קשר</span>
            <span style={{ color: '#7f8c8d' }}>תמיכה</span>
          </div>
          
          <div style={{ 
            borderTop: '1px solid #34495e', 
            paddingTop: '20px', 
            fontSize: '0.9rem',
            color: '#7f8c8d'
          }}>
            © 2025 בונה אתרים מקצועי. כל הזכויות שמורות.
          </div>
        </div>
      </footer>

    </div>
  );
}
