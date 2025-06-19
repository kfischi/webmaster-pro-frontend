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
      fullHTML: `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ברבר סטודיו - מספרת מקצועית</title>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary-color: #d4af37;
            --secondary-color: #1a1a2e;
            --accent-color: #c9a96e;
            --text-dark: #2c3e50;
            --text-light: #ecf0f1;
            --bg-light: #f8f9fa;
            --shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        body { font-family: 'Heebo', sans-serif; line-height: 1.6; color: var(--text-dark); }
        .header {
            background: rgba(26, 26, 46, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
        }
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }
        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            text-decoration: none;
        }
        .hero {
            height: 100vh;
            background: linear-gradient(135deg, rgba(26, 26, 46, 0.8), rgba(212, 175, 55, 0.1));
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
        }
        .hero-content { max-width: 800px; position: relative; z-index: 2; }
        .hero h1 {
            font-family: 'Playfair Display', serif;
            font-size: clamp(3rem, 6vw, 6rem);
            font-weight: 700;
            color: var(--text-light);
            margin-bottom: 1.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .hero .subtitle {
            font-size: 1.5rem;
            color: var(--primary-color);
            margin-bottom: 2rem;
            font-weight: 300;
            letter-spacing: 2px;
        }
        .hero .description {
            font-size: 1.2rem;
            color: var(--text-light);
            margin-bottom: 3rem;
            opacity: 0.9;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        .btn-primary {
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            color: var(--secondary-color);
            padding: 1rem 2rem;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        .services {
            padding: 8rem 2rem;
            background: var(--bg-light);
        }
        .container { max-width: 1200px; margin: 0 auto; }
        .section-title {
            font-family: 'Playfair Display', serif;
            font-size: 3.5rem;
            font-weight: 700;
            color: var(--secondary-color);
            margin-bottom: 1rem;
            text-align: center;
        }
        .section-subtitle {
            font-size: 1.3rem;
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            font-weight: 300;
            text-align: center;
        }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
            margin-top: 4rem;
        }
        .service-card {
            background: white;
            padding: 3rem 2rem;
            border-radius: 20px;
            box-shadow: var(--shadow);
            transition: all 0.3s ease;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        .service-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
            font-size: 2rem;
            color: var(--secondary-color);
        }
        .service-card h3 {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--secondary-color);
            margin-bottom: 1rem;
        }
        .service-card p {
            color: var(--text-dark);
            margin-bottom: 1.5rem;
            opacity: 0.8;
            line-height: 1.8;
        }
        .service-price {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 1.5rem;
        }
        .contact {
            padding: 8rem 2rem;
            background: var(--secondary-color);
            color: var(--text-light);
            text-align: center;
        }
        .contact h2 {
            font-family: 'Playfair Display', serif;
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 2rem;
        }
        .contact-item {
            display: inline-block;
            margin: 1rem 2rem;
            font-size: 1.1rem;
        }
        .contact-item i {
            color: var(--primary-color);
            margin-left: 0.5rem;
        }
        .footer {
            background: #0d0d1a;
            padding: 3rem 2rem 1rem;
            text-align: center;
            color: #bdc3c7;
        }
        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        .social-links a {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary-color);
            text-decoration: none;
            transition: transform 0.3s ease;
        }
        .social-links a:hover { transform: translateY(-3px); }
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.5rem; }
            .section-title { font-size: 2.5rem; }
            .services-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <header class="header">
        <nav class="nav-container">
            <a href="#home" class="logo">ברבר סטודיו</a>
            <a href="#contact" style="background: linear-gradient(135deg, var(--primary-color), var(--accent-color)); color: var(--secondary-color); padding: 0.8rem 1.5rem; border: none; border-radius: 30px; font-weight: 600; text-decoration: none;">קביעת תור</a>
        </nav>
    </header>

    <section id="home" class="hero">
        <div class="hero-content">
            <h1>ברבר סטודיו</h1>
            <p class="subtitle">מספרת מקצועית בתל אביב</p>
            <p class="description">
                חוויית עיצוב שיער יוקרתית המשלבת מסורת קלאסית עם טכניקות מודרניות. 
                הצוות המקצועי שלנו יעניק לך מראה מושלם ותחושה של פינוק מלא.
            </p>
            <a href="#contact" class="btn-primary">
                <i class="fas fa-calendar-alt"></i>
                קביעת תור
            </a>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">השירותים שלנו</h2>
            <p class="section-subtitle">מגוון שירותי עיצוב ברמה הגבוהה ביותר</p>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-cut"></i>
                    </div>
                    <h3>תספורת מקצועית</h3>
                    <p>תספורות מותאמות אישית עם הכלים המתקדמים ביותר והטכניקות העדכניות</p>
                    <div class="service-price">₪120</div>
                    <a href="#contact" class="btn-primary">הזמן עכשיו</a>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <h3>עיצוב זקן מקצועי</h3>
                    <p>עיצוב וטיפוח זקן ברמה מקצועית עם מוצרים איכותיים וטכניקות מתקדמות</p>
                    <div class="service-price">₪80</div>
                    <a href="#contact" class="btn-primary">הזמן עכשיו</a>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-spa"></i>
                    </div>
                    <h3>טיפוח פנים יוקרתי</h3>
                    <p>טיפול פנים מרגיע ומחדש עם מוצרי יוקרה בטכנולוגיה מתקדמת</p>
                    <div class="service-price">₪200</div>
                    <a href="#contact" class="btn-primary">הזמן עכשיו</a>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2>צור קשר וקביעת תור</h2>
            <p style="margin-bottom: 3rem; font-size: 1.2rem; opacity: 0.9;">
                מוזמנים לקבוע תור או לפנות אלינו לכל שאלה
            </p>
            
            <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                רחוב דיזנגוף 123, תל אביב
            </div>
            
            <div class="contact-item">
                <i class="fas fa-phone"></i>
                03-1234567
            </div>
            
            <div class="contact-item">
                <i class="fas fa-envelope"></i>
                info@barberstudio.co.il
            </div>
            
            <div class="contact-item">
                <i class="fas fa-clock"></i>
                ראשון-חמישי: 9:00-21:00
            </div>
            
            <div style="margin-top: 3rem;">
                <a href="#" class="btn-primary" style="font-size: 1.2rem; padding: 1.2rem 2.5rem;">
                    <i class="fas fa-calendar-check"></i>
                    קבע תור עכשיו
                </a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
            <a href="#"><i class="fab fa-google"></i></a>
        </div>
        <p>&copy; 2025 ברבר סטודיו. כל הזכויות שמורות.</p>
        <p style="margin-top: 0.5rem; font-size: 0.9rem;">
            עוצב ופותח על ידי <span style="color: var(--primary-color);">בונה אתרים מקצועי</span>
        </p>
    </footer>
</body>
</html>`,
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
        { id: 3003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'קבע פגישת ייעוץ', style: { backgroundColor: '#c9b037', color: '#1a1a2e', fontSize: '18px', fontFamily: 'Times New Roman', textAlign: 'center', borderRadius: '5px' }}
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
      description: 'תבנית למורים פרטיים עם מערכת הזמנת שיעורים',
      features: ['מערכת הזמנות', 'מעקב התקדמות', 'חומרי לימוד', 'הורים ותלמידים'],
      fullHTML: `
        <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; direction: rtl;">
          <header style="background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%); color: white; padding: 80px 20px; text-align: center;">
            <h1 style="font-size: 3rem; margin: 0; font-weight: bold;">אקדמיה פרטית</h1>
            <p style="font-size: 1.3rem; margin: 20px 0;">הוראה פרטית מקצועית לכל הגילאים</p>
            <button style="background: white; color: #6c5ce7; padding: 15px 40px; border: none; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; margin-top: 30px;">קבע שיעור ניסיון</button>
          </header>
          
          <section style="padding: 80px 20px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 60px; color: #2c3e50;">המקצועות שלנו</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid #6c5ce7;">
                  <h3 style="color: #2c3e50; margin-bottom: 20px; font-size: 1.4rem;">מתמטיקה</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">חשבון, אלגברה, גיאומטריה וחדו"א</p>
                  <div style="font-size: 1.8rem; color: #6c5ce7; font-weight: bold;">₪120/שעה</div>
                </div>
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid #6c5ce7;">
                  <h3 style="color: #2c3e50; margin-bottom: 20px; font-size: 1.4rem;">אנגלית</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">דקדוק, קריאה, כתיבה ודיבור</p>
                  <div style="font-size: 1.8rem; color: #6c5ce7; font-weight: bold;">₪100/שעה</div>
                </div>
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid #6c5ce7;">
                  <h3 style="color: #2c3e50; margin-bottom: 20px; font-size: 1.4rem;">מדעים</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">פיזיקה, כימיה וביולוגיה</p>
                  <div style="font-size: 1.8rem; color: #6c5ce7; font-weight: bold;">₪130/שעה</div>
                </div>
              </div>
            </div>
          </section>
          
          <footer style="background: #2c3e50; color: white; padding: 50px 20px; text-align: center;">
            <h3 style="margin-bottom: 20px;">צור קשר לקביעת שיעור</h3>
            <p style="margin-bottom: 30px;">טלפון: 052-9876543 | אימייל: info@academy.co.il</p>
            <button style="background: #6c5ce7; color: white; padding: 15px 30px; border: none; border-radius: 30px; font-size: 1.1rem; cursor: pointer;">הזמן שיעור עכשיו</button>
          </footer>
        </div>
      `,
      editorElements: [
        { id: 4001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'אקדמיה פרטית', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '48px', fontFamily: 'Arial', textAlign: 'center', fontWeight: 'bold' }},
        { id: 4002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'הוראה פרטית מקצועית לכל הגילאים', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '20px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 4003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'קבע שיעור ניסיון', style: { backgroundColor: '#ffffff', color: '#6c5ce7', fontSize: '18px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px' }}
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
      description: 'תבנית למטפלים ופסיכולוגים עם מערכת הזמנות',
      features: ['הזמנת פגישות', 'ייעוץ אונליין', 'חומרי עזר', 'פרטיות מלאה'],
      fullHTML: `
        <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; direction: rtl;">
          <header style="background: linear-gradient(135deg, #0984e3 0%, #74b9ff 100%); color: white; padding: 80px 20px; text-align: center;">
            <h1 style="font-size: 3rem; margin: 0; font-weight: 300;">מרכז הטיפול</h1>
            <p style="font-size: 1.3rem; margin: 20px 0;">טיפול נפשי מקצועי באווירה חמה ותומכת</p>
            <button style="background: white; color: #0984e3; padding: 15px 40px; border: none; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; margin-top: 30px;">קבע פגישה</button>
          </header>
          
          <section style="padding: 80px 20px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 60px; color: #2c3e50;">שירותי הטיפול</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;">
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid #0984e3;">
                  <h3 style="color: #2c3e50; margin-bottom: 20px; font-size: 1.4rem;">טיפול אישי</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">טיפול פסיכולוגי אישי בגישות מגוונות</p>
                  <div style="font-size: 1.8rem; color: #0984e3; font-weight: bold;">₪250/פגישה</div>
                </div>
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid #0984e3;">
                  <h3 style="color: #2c3e50; margin-bottom: 20px; font-size: 1.4rem;">טיפול זוגי</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">ייעוץ זוגי ומשפחתי מקצועי</p>
                  <div style="font-size: 1.8rem; color: #0984e3; font-weight: bold;">₪350/פגישה</div>
                </div>
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid #0984e3;">
                  <h3 style="color: #2c3e50; margin-bottom: 20px; font-size: 1.4rem;">ייעוץ אונליין</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">פגישות וידאו בטוחות ונוחות</p>
                  <div style="font-size: 1.8rem; color: #0984e3; font-weight: bold;">₪200/פגישה</div>
                </div>
              </div>
            </div>
          </section>
          
          <footer style="background: #2c3e50; color: white; padding: 50px 20px; text-align: center;">
            <h3 style="margin-bottom: 20px;">לקביעת פגישה</h3>
            <p style="margin-bottom: 30px;">טלפון: 03-5551234 | אימייל: therapy@center.co.il</p>
            <p style="font-size: 0.9rem; margin-bottom: 30px;">פרטיות מלאה ושמירה על סודיות המטופל</p>
            <button style="background: #0984e3; color: white; padding: 15px 30px; border: none; border-radius: 30px; font-size: 1.1rem; cursor: pointer;">צור קשר עכשיו</button>
          </footer>
        </div>
      `,
      editorElements: [
        { id: 5001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'מרכז הטיפול', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '48px', fontFamily: 'Arial', textAlign: 'center', fontWeight: '300' }},
        { id: 5002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'טיפול נפשי מקצועי באווירה חמה ותומכת', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '20px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 5003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'קבע פגישה', style: { backgroundColor: '#ffffff', color: '#0984e3', fontSize: '18px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px' }}
      ]
    },
    {
      id: 6,
      name: 'סטודיו יוגה ומדיטציה',
      category: 'בריאות ורווחה',
      image: '/images/templates/yoga-studio-thumbnail.jpg',
      price: 'חינם',
      rating: 4.9,
      downloads: 2341,
      description: 'תבנית לסטודיו יוגה ומדיטציה עם הרשמה לשיעורים',
      features: ['לוח שיעורים', 'הרשמה אונליין', 'מדיטציות מודרכות', 'קהילת תרגול'],
      fullHTML: `
        <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; direction: rtl;">
          <header style="background: linear-gradient(135deg, #00b894 0%, #55efc4 100%); color: white; padding: 80px 20px; text-align: center;">
            <h1 style="font-size: 3rem; margin: 0; font-weight: 300; letter-spacing: 3px;">SERENITY</h1>
            <p style="font-size: 1.3rem; margin: 20px 0;">סטודיו יוגה ומדיטציה</p>
            <button style="background: white; color: #00b894; padding: 15px 40px; border: none; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; margin-top: 30px;">הצטרף אלינו</button>
          </header>
          
          <section style="padding: 80px 20px;">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 60px; color: #2c3e50;">השיעורים שלנו</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;">
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid #00b894;">
                  <h3 style="color: #2c3e50; margin-bottom: 20px; font-size: 1.4rem;">יוגה למתחילים</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">שיעורים עדינים המתאימים לכל רמה</p>
                  <div style="font-size: 1.8rem; color: #00b894; font-weight: bold;">₪80/שיעור</div>
                </div>
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid #00b894;">
                  <h3 style="color: #2c3e50; margin-bottom: 20px; font-size: 1.4rem;">וינייסה פלו</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">תנועה דינמית וזרימה רציפה</p>
                  <div style="font-size: 1.8rem; color: #00b894; font-weight: bold;">₪100/שיעור</div>
                </div>
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border-top: 4px solid #00b894;">
                  <h3 style="color: #2c3e50; margin-bottom: 20px; font-size: 1.4rem;">מדיטציה מודרכת</h3>
                  <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 25px;">פרקטיקת מיינדפולנס ורגיעה עמוקה</p>
                  <div style="font-size: 1.8rem; color: #00b894; font-weight: bold;">₪60/שיעור</div>
                </div>
              </div>
            </div>
          </section>
          
          <footer style="background: #2c3e50; color: white; padding: 50px 20px; text-align: center;">
            <h3 style="margin-bottom: 20px;">בואו לתרגל יחד</h3>
            <p style="margin-bottom: 30px;">טלפון: 054-7777777 | כתובת: רחוב השקט 789, תל אביב</p>
            <button style="background: #00b894; color: white; padding: 15px 30px; border: none; border-radius: 30px; font-size: 1.1rem; cursor: pointer;">הרשמה לשיעור ניסיון</button>
          </footer>
        </div>
      `,
      editorElements: [
        { id: 6001, type: 'text', x: 50, y: 30, width: 500, height: 60, content: 'SERENITY', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '48px', fontFamily: 'Arial', textAlign: 'center', fontWeight: '300', letterSpacing: '3px' }},
        { id: 6002, type: 'text', x: 50, y: 100, width: 500, height: 40, content: 'סטודיו יוגה ומדיטציה', style: { backgroundColor: 'transparent', color: '#ffffff', fontSize: '20px', fontFamily: 'Arial', textAlign: 'center' }},
        { id: 6003, type: 'button', x: 200, y: 160, width: 200, height: 50, content: 'הצטרף אלינו', style: { backgroundColor: '#ffffff', color: '#00b894', fontSize: '18px', fontFamily: 'Arial', textAlign: 'center', borderRadius: '25px' }}
      ]
    }
  ];

  const categories = ['הכל', 'יופי ואסתטיקה', 'ספורט וכושר', 'משפטים ויעוץ', 'חינוך והוראה', 'בריאות ורווחה'];

  const filteredTemplates = selectedCategory === 'הכל' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
      direction: 'rtl'
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>
            גלריית תבניות
          </h1>
          <a 
            href="/editor" 
            style={{
              background: 'rgba(0, 0, 0, 0.9)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setPreviewTemplate(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                zIndex: 10001
              }}
            >
              ×
            </button>

            {/* Preview Content */}
            <div 
              dangerouslySetInnerHTML={{ __html: previewTemplate.fullHTML }}
              style={{ width: '100%', height: '100%' }}
            />

            {/* Edit Button in Preview */}
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10001
            }}>
              <a
                href={`/editor?template=${previewTemplate.id}`}
                style={{
                  background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                ערוך תבנית זו ✏️
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}255, 255, 255, 0.2)',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            אדיטור מתקדם
          </a>
        </div>
      </header>

      {/* Categories Filter */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '1rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                background: selectedCategory === category 
                  ? 'rgba(255, 255, 255, 0.9)' 
                  : 'rgba(255, 255, 255, 0.2)',
                color: selectedCategory === category ? '#667eea' : 'white',
                border: 'none',
                padding: '0.8rem 1.5rem',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div style={{ padding: '0 2rem 4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {filteredTemplates.map(template => (
            <div
              key={template.id}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
            >
              {/* Template Image */}
              <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                <img 
                  src={template.image} 
                  alt={template.name}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: template.price === 'חינם' ? '#2ecc71' : '#e74c3c',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '15px',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  {template.price}
                </div>
              </div>

              {/* Template Info */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  margin: '0 0 0.5rem 0',
                  color: '#2c3e50'
                }}>
                  {template.name}
                </h3>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{ color: '#f39c12', fontWeight: 'bold' }}>
                    ⭐ {template.rating}
                  </span>
                  <span style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
                    {template.downloads.toLocaleString()} הורדות
                  </span>
                </div>

                <p style={{ 
                  color: '#7f8c8d', 
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  {template.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#2c3e50', fontSize: '0.9rem' }}>תכונות:</strong>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem',
                    marginTop: '0.5rem'
                  }}>
                    {template.features.map((feature, index) => (
                      <span
                        key={index}
                        style={{
                          background: '#ecf0f1',
                          color: '#2c3e50',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '15px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem' 
                }}>
                  <button
                    onClick={() => setPreviewTemplate(template)}
                    style={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #3498db, #2980b9)',
                      color: 'white',
                      border: 'none',
                      padding: '0.8rem',
                      borderRadius: '10px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    תצוגה מקדימה
                  </button>
                  <a
                    href={`/editor?template=${template.id}`}
                    style={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                      color: 'white',
                      border: 'none',
                      padding: '0.8rem',
                      borderRadius: '10px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      textAlign: 'center',
                      display: 'block',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    ערוך תבנית זו
                  </a>
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
          background: 'rgba(
