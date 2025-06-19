'use client';
import { useState } from 'react';

export default function EnhancedTemplatesGallery() {
  const [selectedCategory, setSelectedCategory] = useState('הכל');
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      name: 'מספרת מקצועית',
      category: 'יופי ואסתטיקה',
      image: '/images/templates/barber-shop-thumbnail.jpg',
      price: 'חינם',
      rating: 4.9,
      downloads: 1200,
      description: 'תבנית מודרנה למספרות וברברים עם מערכת הזמנות',
      features: ['מערכת הזמנות', 'גלריית עבודות', 'צוות מקצועי', 'מחירון שירותים'],
      fullHTML: `
        <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; direction: rtl;">
          <header style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); color: white; padding: 60px 20px; text-align: center;">
            <h1 style="font-size: 3rem; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">מספרת מקצועית</h1>
            <p style="font-size: 1.2rem; margin: 20px 0;">עיצוב שיער מקצועי ברמה הגבוהה ביותר</p>
            <button style="background: #e74c3c; color: white; padding: 15px 30px; border: none; border-radius: 30px; font-size: 1.1rem; cursor: pointer; margin-top: 20px;">קבע תור עכשיו</button>
          </header>
          
          <section style="padding: 80px 20px; background: #f8f9fa;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 50px; color: #2c3e50;">השירותים שלנו</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center;">
                  <h3 style="color: #2c3e50; margin-bottom: 15px;">תספורת גברים</h3>
                  <p style="color: #7f8c8d; line-height: 1.6;">תספורות מודרניות וקלאסיות ברמה מקצועית</p>
                  <div style="font-size: 1.5rem; color: #e74c3c; font-weight: bold; margin-top: 20px;">₪80</div>
                </div>
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center;">
                  <h3 style="color: #2c3e50; margin-bottom: 15px;">עיצוב זקן</h3>
                  <p style="color: #7f8c8d; line-height: 1.6;">עיצוב וטיפוח זקן מקצועי</p>
                  <div style="font-size: 1.5rem; color: #e74c3c; font-weight: bold; margin-top: 20px;">₪60</div>
                </div>
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center;">
                  <h3 style="color: #2c3e50; margin-bottom: 15px;">טיפוח פנים</h3>
                  <p style="color: #7f8c8d; line-height: 1.6;">טיפול פנים מרגיע וממריץ</p>
                  <div style="font-size: 1.5rem; color: #e74c3c; font-weight: bold; margin-top: 20px;">₪120</div>
                </div>
              </div>
            </div>
          </section>
          
          <footer style="background: #2c3e50; color: white; padding: 40px 20px; text-align: center;">
            <h3>צור קשר</h3>
            <p>טלפון: 03-1234567 | כתובת: רחוב הראשי 123, תל אביב</p>
            <div style="margin-top: 20px;">
              <span style="margin: 0 10px;">📘 Facebook</span>
              <span style="margin: 0 10px;">📷 Instagram</span>
              <span style="margin: 0 10px;">📧 Email</span>
            </div>
          </footer>
        </div>
      `,
      editorElements: [
        { id: 1001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'מספרת מקצועית', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '48px', fontFamily: 'Arial', textAlign: 'center', fontWeight: 'bold' }},
        { id: 1002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'עיצוב שיער מקצועי ברמה הגבוהה ביותר', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '18px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 1003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'קבע תור עכשיו', style: { backgroundColor: '#e74c3c', color: '#ffffff', fontSize: '18px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px' }}
      ]
    },
    {
      id: 2,
      name: 'מכון כושר אישי',
      category: 'ספורט וכושר',
      image: '/images/templates/fitness-trainer-thumbnail.jpg',
      price: '₪149',
      rating: 4.8,
      downloads: 890,
      description: 'תבנית למאמנים אישיים ומכוני כושר עם מעקב התקדמות',
      features: ['מערכת אימונים', 'מעקב התקדמות', 'תוכניות תזונה', 'יעדים אישיים'],
      fullHTML: `
        <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; direction: rtl;">
          <header style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 80px 20px; text-align: center;">
            <h1 style="font-size: 3.5rem; margin: 0; font-weight: bold;">FIT POWER</h1>
            <p style="font-size: 1.3rem; margin: 20px 0;">אימונים אישיים ברמה הגבוהה ביותר</p>
            <button style="background: white; color: #ff6b6b; padding: 15px 40px; border: none; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; margin-top: 30px;">התחל עכשיו</button>
          </header>
          
          <section style="padding: 80px 20px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 60px; color: #2c3e50;">השירותים שלנו</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;">
                <div style="background: white; padding: 50px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.1); text-align: center; border-top: 5px solid #ff6b6b;">
                  <h3 style="color: #2c3e50; margin-bottom: 20px; font-size: 1.5rem;">אימון אישי</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">אימון מותאם אישית עם מאמן מקצועי</p>
                  <div style="font-size: 2rem; color: #ff6b6b; font-weight: bold;">₪200/שיעור</div>
                </div>
                <div style="background: white; padding: 50px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.1); text-align: center; border-top: 5px solid #ff6b6b;">
                  <h3 style="color: #2c3e50; margin-bottom: 20px; font-size: 1.5rem;">אימוני קבוצה</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">אימונים בקבוצות קטנות באווירה מהנה</p>
                  <div style="font-size: 2rem; color: #ff6b6b; font-weight: bold;">₪120/שיעור</div>
                </div>
                <div style="background: white; padding: 50px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.1); text-align: center; border-top: 5px solid #ff6b6b;">
                  <h3 style="color: #2c3e50; margin-bottom: 20px; font-size: 1.5rem;">תוכנית תזונה</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">תפריט מותאם אישית להשגת היעדים</p>
                  <div style="font-size: 2rem; color: #ff6b6b; font-weight: bold;">₪300/חודש</div>
                </div>
              </div>
            </div>
          </section>
          
          <footer style="background: #2c3e50; color: white; padding: 50px 20px; text-align: center;">
            <h3 style="margin-bottom: 20px;">בואו נתחיל את המסע שלכם</h3>
            <p style="margin-bottom: 30px;">טלפון: 054-1234567 | כתובת: רחוב הספורט 456, חיפה</p>
            <button style="background: #ff6b6b; color: white; padding: 15px 30px; border: none; border-radius: 30px; font-size: 1.1rem; cursor: pointer;">הזמן אימון ניסיון</button>
          </footer>
        </div>
      `,
      editorElements: [
        { id: 2001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'FIT POWER', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '56px', fontFamily: 'Arial', textAlign: 'center', fontWeight: 'bold' }},
        { id: 2002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'אימונים אישיים ברמה הגבוהה ביותר', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '20px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 2003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'התחל עכשיו', style: { backgroundColor: '#ffffff', color: '#ff6b6b', fontSize: '18px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px' }}
      ]
    },
    {
      id: 3,
      name: 'משרד עורכי דין',
      category: 'משפטים ויעוץ',
      image: '/images/templates/lawyer-thumbnail.jpg',
      price: '₪199',
      rating: 4.7,
      downloads: 654,
      description: 'תבנית מקצועית למשרדי עורכי דין עם מערכת הזמנת פגישות',
      features: ['מערכת הזמנות', 'תיקי לקוחות', 'ייעוץ אונליין', 'מסמכים משפטיים'],
      fullHTML: `
        <div style="font-family: 'Times New Roman', serif; margin: 0; padding: 0; direction: rtl;">
          <header style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 100px 20px; text-align: center;">
            <h1 style="font-size: 3rem; margin: 0; letter-spacing: 2px;">משרד עורכי דין כהן ושות'</h1>
            <p style="font-size: 1.2rem; margin: 30px 0; opacity: 0.9;">מומחים בדיני מסחר, נזיקין ומשפט אזרחי</p>
            <button style="background: #c9b037; color: #1a1a2e; padding: 15px 40px; border: none; border-radius: 5px; font-size: 1.1rem; cursor: pointer; font-weight: bold; margin-top: 20px;">קבע פגישת ייעוץ</button>
          </header>
          
          <section style="padding: 80px 20px; background: #f8f9fa;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 60px; color: #1a1a2e;">תחומי התמחות</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;">
                <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-right: 5px solid #c9b037;">
                  <h3 style="color: #1a1a2e; margin-bottom: 20px; font-size: 1.4rem;">דיני מסחר</h3>
                  <p style="color: #666; line-height: 1.8;">ייעוץ משפטי לעסקים, חוזים מסחריים ויישוב סכסוכים עסקיים</p>
                  <ul style="color: #666; margin-top: 20px; padding-right: 20px;">
                    <li>הקמת חברות</li>
                    <li>חוזים מסחריים</li>
                    <li>מיזוגים ורכישות</li>
                  </ul>
                </div>
                <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-right: 5px solid #c9b037;">
                  <h3 style="color: #1a1a2e; margin-bottom: 20px; font-size: 1.4rem;">דיני משפחה</h3>
                  <p style="color: #666; line-height: 1.8;">ליווי משפטי בנושאי משפחה עם רגישות והבנה</p>
                  <ul style="color: #666; margin-top: 20px; padding-right: 20px;">
                    <li>הליכי גירושין</li>
                    <li>משמורת ילדים</li>
                    <li>הסכמי ממון</li>
                  </ul>
                </div>
                <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-right: 5px solid #c9b037;">
                  <h3 style="color: #1a1a2e; margin-bottom: 20px; font-size: 1.4rem;">דיני נזיקין</h3>
                  <p style="color: #666; line-height: 1.8;">ייצוג בתביעות נזיקין ותאונות עבודה</p>
                  <ul style="color: #666; margin-top: 20px; padding-right: 20px;">
                    <li>תאונות דרכים</li>
                    <li>תאונות עבודה</li>
                    <li>רשלנות רפואית</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <footer style="background: #1a1a2e; color: white; padding: 60px 20px; text-align: center;">
            <h3 style="margin-bottom: 20px; color: #c9b037;">צור קשר לקביעת פגישה</h3>
            <p style="margin-bottom: 30px; font-size: 1.1rem;">טלפון: 03-7654321 | פקס: 03-7654322</p>
            <p style="margin-bottom: 30px;">כתובת: מגדל עזריאלי, קומה 25, תל אביב</p>
            <p style="font-size: 0.9rem; opacity: 0.7;">שעות פעילות: ימים א'-ה' 8:00-18:00</p>
          </footer>
        </div>
      `,
      editorElements: [
        { id: 3001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'משרד עורכי דין כהן ושות\'', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '36px', fontFamily: 'Times New Roman', textAlign: 'center', fontWeight: 'bold' }},
        { id: 3002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'מומחים בדיני מסחר, נזיקין ומשפט אזרחי', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '16px', fontFamily: 'Times New Roman', textAlign: 'center' }},
        { id: 3003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'קבע פגישת ייעוץ', style: { backgroundColor: '#c9b037', color: '#1a1a2e', fontSize: '16px', fontFamily: 'Times New Roman', textAlign: 'center', borderRadius: '5px' }}
      ]
    },
    {
      id: 4,
      name: 'מורה פרטי מקצועי',
      category: 'חינוך והוראה',
      image: '/images/templates/private-teacher-thumbnail.jpg',
      price: '₪99',
      rating: 4.9,
      downloads: 1456,
      description: 'תבנית למורים פרטיים עם מערכת תלמידים ותאומי שיעורים',
      features: ['לוח שנה חכם', 'מעקב התקדמות', 'חומרי לימוד', 'דיווחים להורים'],
      fullHTML: `
        <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; direction: rtl;">
          <header style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 80px 20px; text-align: center;">
            <h1 style="font-size: 3rem; margin: 0;">ד"ר שרה לוי - מורה פרטי</h1>
            <p style="font-size: 1.3rem; margin: 25px 0;">מתמטיקה • פיזיקה • כימיה</p>
            <p style="font-size: 1rem; margin: 15px 0; opacity: 0.9;">מומחית להוראה אישית ולהכנה לבחינות בגרות</p>
            <button style="background: #ff6b6b; color: white; padding: 15px 35px; border: none; border-radius: 30px; font-size: 1.1rem; cursor: pointer; margin-top: 25px;">קבע שיעור ניסיון</button>
          </header>
          
          <section style="padding: 80px 20px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 60px; color: #2c3e50;">המקצועות שלי</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid #667eea;">
                  <div style="font-size: 3rem; margin-bottom: 20px;">📊</div>
                  <h3 style="color: #2c3e50; margin-bottom: 20px;">מתמטיקה</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">3, 4, 5 יח"ל • אלגברה • גיאומטריה • הסתברות</p>
                  <div style="font-size: 1.8rem; color: #667eea; font-weight: bold;">₪150/שיעור</div>
                </div>
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid #764ba2;">
                  <div style="font-size: 3rem; margin-bottom: 20px;">⚛️</div>
                  <h3 style="color: #2c3e50; margin-bottom: 20px;">פיזיקה</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">3, 4, 5 יח"ל • מכניקה • חשמל • גלים</p>
                  <div style="font-size: 1.8rem; color: #764ba2; font-weight: bold;">₪160/שיעור</div>
                </div>
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid #ff6b6b;">
                  <div style="font-size: 3rem; margin-bottom: 20px;">🧪</div>
                  <h3 style="color: #2c3e50; margin-bottom: 20px;">כימיה</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">3, 4, 5 יח"ל • כימיה אורגנית • אנאליטית</p>
                  <div style="font-size: 1.8rem; color: #ff6b6b; font-weight: bold;">₪160/שיעור</div>
                </div>
              </div>
            </div>
          </section>
          
          <footer style="background: #2c3e50; color: white; padding: 60px 20px; text-align: center;">
            <h3 style="margin-bottom: 20px;">בואו נתחיל את המסע הלימודי</h3>
            <p style="margin-bottom: 30px; font-size: 1.1rem;">טלפון: 052-1234567 | אימייל: sarah.levi@email.com</p>
            <p style="margin-bottom: 30px;">מיקום: רמת גן, פתח תקווה, תל אביב</p>
            <button style="background: #667eea; color: white; padding: 15px 30px; border: none; border-radius: 30px; font-size: 1.1rem; cursor: pointer;">קבע שיעור ניסיון חינם</button>
          </footer>
        </div>
      `,
      editorElements: [
        { id: 4001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'ד"ר שרה לוי - מורה פרטי', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '36px', fontFamily: 'Arial', textAlign: 'center', fontWeight: 'bold' }},
        { id: 4002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'מתמטיקה • פיזיקה • כימיה', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '20px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 4003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'קבע שיעור ניסיון', style: { backgroundColor: '#ff6b6b', color: '#ffffff', fontSize: '16px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px' }}
      ]
    },
    {
      id: 5,
      name: 'מטפל פסיכולוגי',
      category: 'בריאות ורווחה',
      image: '/images/templates/psychology-thumbnail.jpg',
      price: '₪129',
      rating: 4.8,
      downloads: 743,
      description: 'תבנית למטפלים פסיכולוגיים עם מערכת הזמנות ופרטיות מלאה',
      features: ['הזמנות מקוונות', 'פרטיות מוחלטת', 'טיפול מרחוק', 'תיקי לקוחות'],
      fullHTML: `
        <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; direction: rtl;">
          <header style="background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%); color: white; padding: 100px 20px; text-align: center;">
            <h1 style="font-size: 2.8rem; margin: 0; font-weight: 300;">ד"ר מיכל רוזן</h1>
            <p style="font-size: 1.3rem; margin: 25px 0; font-weight: 300;">פסיכולוגית קלינית מוסמכת</p>
            <p style="font-size: 1rem; margin: 15px 0; opacity: 0.9;">טיפול פסיכולוגי בגישה הומניסטית-קוגניטיבית</p>
            <button style="background: rgba(255,255,255,0.2); color: white; padding: 15px 35px; border: 2px solid white; border-radius: 30px; font-size: 1.1rem; cursor: pointer; margin-top: 30px; backdrop-filter: blur(10px);">קבע פגישת היכרות</button>
          </header>
          
          <section style="padding: 80px 20px; background: white;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 60px; color: #2d3436;">תחומי הטיפול</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;">
                <div style="background: #f8f9fa; padding: 40px; border-radius: 20px; border-right: 5px solid #74b9ff;">
                  <h3 style="color: #2d3436; margin-bottom: 20px; font-size: 1.4rem;">טיפול אישי</h3>
                  <p style="color: #636e72; line-height: 1.8; margin-bottom: 20px;">טיפול פסיכולוגי אישי לטיפול בחרדות, דיכאון, קשיים רגשיים ואתגרי חיים</p>
                  <ul style="color: #636e72; padding-right: 20px;">
                    <li>טיפול בחרדות ופובים</li>
                    <li>טיפול בדיכאון</li>
                    <li>התמודדות עם משברי חיים</li>
                  </ul>
                </div>
                <div style="background: #f8f9fa; padding: 40px; border-radius: 20px; border-right: 5px solid #0984e3;">
                  <h3 style="color: #2d3436; margin-bottom: 20px; font-size: 1.4rem;">טיפול זוגי</h3>
                  <p style="color: #636e72; line-height: 1.8; margin-bottom: 20px;">ליווי זוגות בפתרון קונפליקטים ושיפור התקשורת הזוגית</p>
                  <ul style="color: #636e72; padding-right: 20px;">
                    <li>שיפור תקשורת זוגית</li>
                    <li>פתרון קונפליקטים</li>
                    <li>התמודדות עם משברים</li>
                  </ul>
                </div>
                <div style="background: #f8f9fa; padding: 40px; border-radius: 20px; border-right: 5px solid #6c5ce7;">
                  <h3 style="color: #2d3436; margin-bottom: 20px; font-size: 1.4rem;">טיפול משפחתי</h3>
                  <p style="color: #636e72; line-height: 1.8; margin-bottom: 20px;">ליווי משפחות בשיפור הדינמיקה המשפחתית והתקשורת</p>
                  <ul style="color: #636e72; padding-right: 20px;">
                    <li>יחסי הורים-ילדים</li>
                    <li>קשיים התנהגותיים</li>
                    <li>משברי גיל ההתבגרות</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <footer style="background: #2d3436; color: white; padding: 60px 20px; text-align: center;">
            <h3 style="margin-bottom: 20px;">זמני קבלה וקשר</h3>
            <p style="margin-bottom: 20px; font-size: 1.1rem;">טלפון: 050-1234567</p>
            <p style="margin-bottom: 20px;">אימייל: dr.michal.rosen@email.com</p>
            <p style="margin-bottom: 30px;">המרפאה: רחוב ביאליק 15, רמת השרון</p>
            <button style="background: #74b9ff; color: white; padding: 15px 30px; border: none; border-radius: 30px; font-size: 1.1rem; cursor: pointer;">קבע פגישה עכשיו</button>
          </footer>
        </div>
      `,
      editorElements: [
        { id: 5001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'ד"ר מיכל רוזן', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '42px', fontFamily: 'Arial', textAlign: 'center', fontWeight: '300' }},
        { id: 5002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'פסיכולוגית קלינית מוסמכת', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '20px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 5003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'קבע פגישת היכרות', style: { backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff', fontSize: '16px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px', border: '2px solid white' }}
      ]
    },
    {
      id: 6,
      name: 'סטודיו יוגה ומדיטציה',
      category: 'ספורט וכושר',
      image: '/images/templates/yoga-studio-thumbnail.jpg',
      price: 'חינם',
      rating: 4.9,
      downloads: 2341,
      description: 'תבנית לסטודיו יוגה ומדיטציה עם מערכת הרשמה לשיעורים',
      features: ['לוח שיעורים', 'הרשמה מקוונת', 'מדיטציות מוקלטות', 'מעקב התקדמות'],
      fullHTML: `
        <div style="font-family: 'Arial', sans-serif; margin: 0; padding: 0; direction: rtl; background: #f8f9fa;">
          <header style="background: linear-gradient(135deg, #a8e6cf 0%, #81c784 100%); color: #2e7d32; padding: 100px 20px; text-align: center; position: relative;">
            <div style="position: relative; z-index: 1;">
              <h1 style="font-size: 3.5rem; margin: 0; font-weight: 300; letter-spacing: 3px;">🧘‍♀️ SERENITY</h1>
              <p style="font-size: 1.5rem; margin: 25px 0; font-weight: 300;">סטודיו יוגה ומדיטציה</p>
              <p style="font-size: 1.1rem; margin: 15px 0; opacity: 0.8;">מקום לשלווה, איזון וחיבור לעצמי הפנימי</p>
              <button style="background: rgba(46,125,50,0.2); color: #2e7d32; padding: 18px 40px; border: 2px solid #2e7d32; border-radius: 50px; font-size: 1.1rem; cursor: pointer; margin-top: 30px;">התחל את המסע שלך</button>
            </div>
          </header>
          
          <section style="padding: 80px 20px; background: white;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 2.8rem; margin-bottom: 60px; color: #2e7d32; font-weight: 300;">השיעורים שלנו</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;">
                <div style="background: linear-gradient(135deg, #fff3e0 0%, #fff8e1 100%); padding: 40px; border-radius: 25px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                  <div style="font-size: 3.5rem; margin-bottom: 20px;">🧘‍♀️</div>
                  <h3 style="color: #e65100; margin-bottom: 20px; font-size: 1.5rem;">האתה יוגה</h3>
                  <p style="color: #6d4c41; line-height: 1.8; margin-bottom: 25px;">יוגה דינמית ומעצימה הבונה כוח וגמישות</p>
                  <div style="font-size: 1.5rem; color: #e65100; font-weight: bold;">₪120/שיעור</div>
                </div>
                <div style="background: linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%); padding: 40px; border-radius: 25px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                  <div style="font-size: 3.5rem; margin-bottom: 20px;">🌙</div>
                  <h3 style="color: #2e7d32; margin-bottom: 20px; font-size: 1.5rem;">יוגה רגועה</h3>
                  <p style="color: #4e342e; line-height: 1.8; margin-bottom: 25px;">יוגה עדינה ומרגיעה לשחרור מתח והרגעה</p>
                  <div style="font-size: 1.5rem; color: #2e7d32; font-weight: bold;">₪100/שיעור</div>
                </div>
                <div style="background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%); padding: 40px; border-radius: 25px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                  <div style="font-size: 3.5rem; margin-bottom: 20px;">🧘‍♂️</div>
                  <h3 style="color: #7b1fa2; margin-bottom: 20px; font-size: 1.5rem;">מדיטציה</h3>
                  <p style="color: #4a148c; line-height: 1.8; margin-bottom: 25px;">מדיטציה מודרכת לחיזוק הקשיבות והשלווה</p>
                  <div style="font-size: 1.5rem; color: #7b1fa2; font-weight: bold;">₪80/שיעור</div>
                </div>
              </div>
            </div>
          </section>
          
          <footer style="background: #2e7d32; color: white; padding: 60px 20px; text-align: center;">
            <h3 style="margin-bottom: 30px; font-weight: 300; font-size: 2rem;">בואו נתחיל את המסע יחד 🌸</h3>
            <div style="margin-bottom: 40px;">
              <p style="font-size: 1.1rem; margin-bottom: 10px;">📍 כתובת: רחוב הנשיא 45, הרצליה</p>
              <p style="font-size: 1.1rem; margin-bottom: 10px;">📞 טלפון: 09-9876543</p>
              <p style="font-size: 1.1rem; margin-bottom: 10px;">✉️ אימייל: info@serenity-studio.co.il</p>
            </div>
            <button style="background: rgba(255,255,255,0.2); color: white; padding: 15px 35px; border: 2px solid white; border-radius: 30px; font-size: 1.1rem; cursor: pointer;">הזמן שיעור ניסיון</button>
          </footer>
        </div>
      `,
      editorElements: [
        { id: 6001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: '🧘‍♀️ SERENITY', style: { backgroundColor: 'transparent', color: '#2e7d32', fontSize: '56px', fontFamily: 'Arial', textAlign: 'center', fontWeight: '300' }},
        { id: 6002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'סטודיו יוגה ומדיטציה', style: { backgroundColor: 'transparent', color: '#2e7d32', fontSize: '24px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 6003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'התחל את המסע שלך', style: { backgroundColor: 'rgba(46,125,50,0.2)', color: '#2e7d32', fontSize: '16px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px', border: '2px solid #2e7d32' }}
      ]
    }
  ];

  const categories = ['הכל', 'יופי ואסתטיקה', 'ספורט וכושר', 'משפטים ויעוץ', 'חינוך והוראה', 'בריאות ורווחה'];

  const filteredTemplates = selectedCategory === 'הכל' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const openPreview = (template) => {
    setPreviewTemplate(template);
  };

  const closePreview = () => {
    setPreviewTemplate(null);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Header */}
      <header style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 20px 0', fontWeight: 'bold' }}>🎨 גלריית תבניות מקצועיות</h1>
        <p style={{ fontSize: '1.2rem', margin: 0, opacity: 0.9 }}>בחר את התבנית המושלמת לעסק שלך</p>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Categories Filter */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#2c3e50' }}>קטגוריות</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '25px',
                  background: selectedCategory === category ? '#667eea' : 'white',
                  color: selectedCategory === category ? 'white' : '#667eea',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {filteredTemplates.map(template => (
            <div key={template.id} style={{ 
              background: 'white', 
              borderRadius: '15px', 
              overflow: 'hidden', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s'
            }}>
              {/* Template Image */}
              <div style={{ 
                height: '200px', 
                background: `url(${template.image}) center/cover`,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: template.price === 'חינם' ? '#27ae60' : '#3498db',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '15px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  {template.price}
                </div>
              </div>

              {/* Template Info */}
              <div style={{ padding: '25px' }}>
                <h3 style={{ fontSize: '1.4rem', margin: '0 0 10px 0', color: '#2c3e50' }}>{template.name}</h3>
                <p style={{ color: '#7f8c8d', fontSize: '0.9rem', margin: '0 0 15px 0' }}>{template.description}</p>
                
                {/* Rating and Downloads */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ color: '#f39c12' }}>⭐</span>
                    <span style={{ fontSize: '0.9rem', color: '#2c3e50' }}>{template.rating}</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>
                    📥 {template.downloads.toLocaleString()} הורדות
                  </div>
                </div>

                {/* Features */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {template.features.slice(0, 3).map((feature, index) => (
                      <span key={index} style={{
                        background: '#ecf0f1',
                        color: '#2c3e50',
                        padding: '4px 8px',
                        borderRadius: '10px',
                        fontSize: '0.8rem'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => openPreview(template)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      border: '2px solid #667eea',
                      background: 'white',
                      color: '#667eea',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    👁️ תצוגה מקדימה
                  </button>
                  <button
                    onClick={() => window.location.href = `/editor?template=${template.id}`}
                    style={{
                      flex: 1,
                      padding: '12px',
                      border: 'none',
                      background: '#667eea',
                      color: 'white',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    ✏️ ערוך
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            maxWidth: '95%',
            maxHeight: '95%',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Modal Header */}
            <div style={{ 
              padding: '20px', 
              borderBottom: '1px solid #eee', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              background: '#f8f9fa'
            }}>
              <h2 style={{ margin: 0, color: '#2c3e50' }}>
                {previewTemplate.name}
              </h2>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => window.location.href = `/editor?template=${previewTemplate.id}`}
                  style={{
                    background: '#27ae60',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}
                >
                  ✏️ ערוך תבנית זו
                </button>
                <button
                  onClick={closePreview}
                  style={{
                    background: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    fontSize: '1.2rem'
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
            
            {/* Website Preview */}
            <div style={{
              flex: 1,
              overflow: 'auto',
              background: '#f5f5f5'
            }}>
              <div 
                style={{ 
                  width: '100%', 
                  minHeight: '600px',
                  background: 'white',
                  margin: '20px auto',
                  maxWidth: '1000px',
                  boxShadow: '0 0 20px rgba(0,0,0,0.1)'
                }}
                dangerouslySetInnerHTML={{ __html: previewTemplate.fullHTML }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
