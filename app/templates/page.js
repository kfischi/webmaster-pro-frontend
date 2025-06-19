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
     <!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ברבר סטודיו - מספרת מקצועית בתל אביב</title>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-color: #d4af37;
            --secondary-color: #1a1a2e;
            --accent-color: #c9a96e;
            --text-dark: #2c3e50;
            --text-light: #ecf0f1;
            --bg-light: #f8f9fa;
            --shadow: 0 10px 30px rgba(0,0,0,0.1);
            --shadow-hover: 0 20px 60px rgba(0,0,0,0.15);
        }

        body {
            font-family: 'Heebo', sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            overflow-x: hidden;
        }

        /* Header */
        .header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(26, 26, 46, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            transition: all 0.3s ease;
            padding: 1rem 0;
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
            transition: all 0.3s ease;
        }

        .logo:hover {
            color: var(--accent-color);
            transform: scale(1.05);
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: var(--text-light);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-color);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .cta-btn {
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            color: var(--secondary-color);
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 30px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-hover);
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            background: linear-gradient(135deg, rgba(26, 26, 46, 0.8), rgba(212, 175, 55, 0.1)),
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23f0f0f0" width="1200" height="800"/><defs><pattern id="barbershop" patternUnits="userSpaceOnUse" width="40" height="40"><rect fill="%23ffffff" width="40" height="40"/><circle fill="%23d4af37" cx="20" cy="20" r="3" opacity="0.1"/></pattern></defs><rect fill="url(%23barbershop)" width="1200" height="800"/></svg>');
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, transparent 20%, rgba(26, 26, 46, 0.9) 80%);
            animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .hero-content {
            max-width: 800px;
            position: relative;
            z-index: 2;
            animation: fadeInUp 1s ease-out;
        }

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

        .hero h1 {
            font-family: 'Playfair Display', serif;
            font-size: clamp(3rem, 6vw, 6rem);
            font-weight: 700;
            color: var(--text-light);
            margin-bottom: 1.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            line-height: 1.2;
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

        .hero-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
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

        .btn-secondary {
            background: transparent;
            color: var(--text-light);
            padding: 1rem 2rem;
            border: 2px solid var(--primary-color);
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

        .btn-primary:hover, .btn-secondary:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-hover);
        }

        .btn-secondary:hover {
            background: var(--primary-color);
            color: var(--secondary-color);
        }

        /* Services Section */
        .services {
            padding: 8rem 2rem;
            background: var(--bg-light);
            position: relative;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-header {
            text-align: center;
            margin-bottom: 5rem;
        }

        .section-title {
            font-family: 'Playfair Display', serif;
            font-size: 3.5rem;
            font-weight: 700;
            color: var(--secondary-color);
            margin-bottom: 1rem;
        }

        .section-subtitle {
            font-size: 1.3rem;
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            font-weight: 300;
        }

        .section-description {
            font-size: 1.1rem;
            color: var(--text-dark);
            max-width: 600px;
            margin: 0 auto;
            opacity: 0.8;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
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

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
            transition: left 0.6s ease;
        }

        .service-card:hover::before {
            left: 100%;
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-hover);
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

        .service-features {
            list-style: none;
            margin-bottom: 2rem;
        }

        .service-features li {
            padding: 0.5rem 0;
            color: var(--text-dark);
            position: relative;
            padding-right: 1.5rem;
        }

        .service-features li::before {
            content: '✓';
            position: absolute;
            right: 0;
            color: var(--primary-color);
            font-weight: bold;
        }

        /* About Section */
        .about {
            padding: 8rem 2rem;
            background: white;
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-text h2 {
            font-family: 'Playfair Display', serif;
            font-size: 3rem;
            font-weight: 700;
            color: var(--secondary-color);
            margin-bottom: 2rem;
        }

        .about-text p {
            font-size: 1.1rem;
            color: var(--text-dark);
            margin-bottom: 1.5rem;
            opacity: 0.8;
            line-height: 1.8;
        }

        .about-image {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .about-image img {
            width: 100%;
            height: 500px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .about-image:hover img {
            transform: scale(1.05);
        }

        /* Team Section */
        .team {
            padding: 8rem 2rem;
            background: var(--bg-light);
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
        }

        .team-member {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            box-shadow: var(--shadow);
            transition: all 0.3s ease;
        }

        .team-member:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-hover);
        }

        .member-photo {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            margin: 0 auto 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: var(--secondary-color);
        }

        .member-name {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--secondary-color);
            margin-bottom: 0.5rem;
        }

        .member-role {
            color: var(--primary-color);
            font-weight: 500;
            margin-bottom: 1rem;
        }

        .member-bio {
            color: var(--text-dark);
            opacity: 0.8;
            line-height: 1.6;
        }

        /* Gallery Section */
        .gallery {
            padding: 8rem 2rem;
            background: white;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .gallery-item {
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            height: 300px;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: var(--shadow);
            transition: all 0.3s ease;
        }

        .gallery-item:hover {
            transform: scale(1.02);
            box-shadow: var(--shadow-hover);
        }

        .gallery-item i {
            font-size: 3rem;
            color: var(--secondary-color);
        }

        /* Contact Section */
        .contact {
            padding: 8rem 2rem;
            background: var(--secondary-color);
            color: var(--text-light);
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }

        .contact-info h2 {
            font-family: 'Playfair Display', serif;
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 2rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .contact-item i {
            font-size: 1.5rem;
            color: var(--primary-color);
            width: 30px;
        }

        .booking-form {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 20px;
            backdrop-filter: blur(10px);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--primary-color);
            font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 1rem;
            border: none;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-light);
            font-size: 1rem;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: rgba(236, 240, 241, 0.7);
        }

        /* Footer */
        .footer {
            background: #0d0d1a;
            padding: 3rem 2rem 1rem;
            text-align: center;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
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
            font-size: 1.2rem;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow);
        }

        /* Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.6s ease-out forwards;
        }

        .fade-in:nth-child(1) { animation-delay: 0.1s; }
        .fade-in:nth-child(2) { animation-delay: 0.2s; }
        .fade-in:nth-child(3) { animation-delay: 0.3s; }

        /* Responsive */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
            }
            
            .section-title {
                font-size: 2.5rem;
            }
        }

        /* Scroll animations */
        .scroll-reveal {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.6s ease-out;
        }

        .scroll-reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav-container">
            <a href="#home" class="logo">ברבר סטודיו</a>
            <ul class="nav-links">
                <li><a href="#home">בית</a></li>
                <li><a href="#services">שירותים</a></li>
                <li><a href="#about">אודות</a></li>
                <li><a href="#team">הצוות</a></li>
                <li><a href="#gallery">גלריה</a></li>
                <li><a href="#contact">צור קשר</a></li>
            </ul>
            <a href="#contact" class="cta-btn">קביעת תור</a>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1 class="fade-in">ברבר סטודיו</h1>
            <p class="subtitle fade-in">מספרת מקצועית בתל אביב</p>
            <p class="description fade-in">
                חוויית עיצוב שיער יוקרתית המשלבת מסורת קלאסית עם טכניקות מודרניות. 
                הצוות המקצועי שלנו יעניק לך מראה מושלם ותחושה של פינוק מלא.
            </p>
            <div class="hero-buttons">
                <a href="#contact" class="btn-primary fade-in">
                    <i class="fas fa-calendar-alt"></i>
                    קביעת תור
                </a>
                <a href="#services" class="btn-secondary fade-in">
                    <i class="fas fa-cut"></i>
                    השירותים שלנו
                </a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services scroll-reveal">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">השירותים שלנו</h2>
                <p class="section-subtitle">מגוון שירותי עיצוב ברמה הגבוהה ביותר</p>
                <p class="section-description">
                    כל שירות מבוצע ברמה מקצועית עם התאמה אישית לסגנון ולאישיות שלך
                </p>
            </div>
            
            <div class="services-grid">
                <div class="service-card scroll-reveal">
                    <div class="service-icon">
                        <i class="fas fa-cut"></i>
                    </div>
                    <h3>תספורת מקצועית</h3>
                    <p>תספורות מותאמות אישית עם הכלים המתקדמים ביותר והטכניקות העדכניות</p>
                    <div class="service-price">₪120</div>
                    <ul class="service-features">
                        <li>ייעוץ מקצועי ואישי</li>
                        <li>שטיפת שיער עם מוצרים איכותיים</li>
                        <li>עיצוב וסטיילינג</li>
                        <li>טיפים לתחזוקה ביתית</li>
                    </ul>
                    <a href="#contact" class="btn-primary">הזמן עכשיו</a>
                </div>

                <div class="service-card scroll-reveal">
                    <div class="service-icon">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <h3>עיצוב זקן מקצועי</h3>
                    <p>עיצוב וטיפוח זקן ברמה מקצועית עם מוצרים איכותיים וטכניקות מתקדמות</p>
                    <div class="service-price">₪80</div>
                    <ul class="service-features">
                        <li>עיצוב זקן מדויק</li>
                        <li>גילוח מקצועי</li>
                        <li>טיפוח וחידוד</li>
                        <li>שמנים וקרמים איכותיים</li>
                    </ul>
                    <a href="#contact" class="btn-primary">הזמן עכשיו</a>
                </div>

                <div class="service-card scroll-reveal">
                    <div class="service-icon">
                        <i class="fas fa-spa"></i>
                    </div>
                    <h3>טיפוח פנים יוקרתי</h3>
                    <p>טיפול פנים מרגיע ומחדש עם מוצרי יוקרה בטכנולוגיה מתקדמת</p>
                    <div class="service-price">₪200</div>
                    <ul class="service-features">
                        <li>ניקוי עמוק של הפנים</li>
                        <li>מסכות מזינות</li>
                        <li>עיסוי פנים מרגיע</li>
                        <li>טיפול לחות מתקדם</li>
                    </ul>
                    <a href="#contact" class="btn-primary">הזמן עכשיו</a>
                </div>

                <div class="service-card scroll-reveal">
                    <div class="service-icon">
                        <i class="fas fa-crown"></i>
                    </div>
                    <h3>חבילת VIP מלאה</h3>
                    <p>חוויה מלאה ויוקרתית הכוללת את כל השירותים עם יחס אישי מלא</p>
                    <div class="service-price">₪350</div>
                    <ul class="service-features">
                        <li>תספורת + עיצוב זקן</li>
                        <li>טיפוח פנים מלא</li>
                        <li>משקאות איכותיים</li>
                        <li>ליווי אישי מלא</li>
                    </ul>
                    <a href="#contact" class="btn-primary">הזמן עכשיו</a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about scroll-reveal">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>הסיפור שלנו</h2>
                    <p>
                        ברבר סטודיו נוסד בשנת 2015 מתוך אהבה עמוקה לאומנות עיצוב השיער והרצון להעניק 
                        חוויה יוקרתית ומקצועית לכל לקוח. אנחנו משלבים מסורת קלאסית עם טכנולוגיה 
                        מתקדמת ומוצרים איכותיים מהמותגים המובילים בעולם.
                    </p>
                    <p>
                        הצוות המקצועי שלנו עבר הכשרות מתקדמות בחו"ל ומתעדכן באופן קבוע בטרנדים 
                        החדשים ובטכניקות החדשניות ביותר. אנחנו מאמינים שכל לקוח ראוי לחוויה אישית 
                        ומותאמת שתעניק לו ביטחון עצמי ומראה מושלם.
                    </p>
                    <p>
                        הסטודיו שלנו מעוצב ברמה הגבוהה ביותר ומצויד בכלים המתקדמים ביותר 
                        כדי להעניק לך חוויה נעימה ותוצאות מושלמות בכל ביקור.
                    </p>
                    <a href="#contact" class="btn-primary">בואו להכיר אותנו</a>
                </div>
                <div class="about-image">
                    <div style="width: 100%; height: 500px; background: linear-gradient(135deg, var(--primary-color), var(--accent-color)); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 4rem; color: var(--secondary-color);">
                        <i class="fas fa-store"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="team scroll-reveal">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">הצוות המקצועי</h2>
                <p class="section-subtitle">מומחים בעלי ניסיון רב שנים</p>
                <p class="section-description">
                    כל חבר בצוות עבר הכשרות מתקדמות ומתמחה בתחומים שונים של עיצוב השיער
                </p>
            </div>
            
            <div class="team-grid">
                <div class="team-member scroll-reveal">
                    <div class="member-photo">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <h3 class="member-name">דניאל כהן</h3>
                    <p class="member-role">מנהל ומעצב ראשי</p>
                    <p class="member-bio">
                        15+ שנות ניסיון, בוגר אקדמיה ללונדון. מתמחה בתספורות קלאסיות ומודרניות 
                        ועיצוב זקן ברמה הגבוהה ביותר.
                    </p>
                </div>

                <div class="team-member scroll-reveal">
                    <div class="member-photo">
                        <i class="fas fa-cut"></i>
                    </div>
                    <h3 class="member-name">אלון לוי</h3>
                    <p class="member-role">מעצב בכיר</p>
                    <p class="member-bio">
                        מומחה לטרנדים עכשוויים ותספורות מתקדמות. בוגר קורסי התמחות בפריז 
                        ומתמחה בסטיילינג לאירועים מיוחדים.
                    </p>
                </div>

                <div class="team-member scroll-reveal">
                    <div class="member-photo">
                        <i class="fas fa-spa"></i>
                    </div>
                    <h3 class="member-name">רון אברהם</h3>
                    <p class="member-role">מומחה טיפוח</p>
                    <p class="member-bio">
                        מתמחה בטיפוח פנים וגילוח מקצועי. בוגר קורסי התמחות באיטליה 
                        ובעל ידע נרחב במוצרי יוקרה ובטכניקות טיפוח מתקדמות.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery scroll-reveal">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">גלריית עבודות</h2>
                <p class="section-subtitle">דוגמאות מעבודותינו המקצועיות</p>
                <p class="section-description">
                    ראו דוגמאות מהעבודות המקצועיות שלנו ותיווכחו באיכות השירות הגבוהה
                </p>
            </div>
            
            <div class="gallery-grid">
                <div class="gallery-item scroll-reveal">
                    <i class="fas fa-camera"></i>
                </div>
                <div class="gallery-item scroll-reveal">
                    <i class="fas fa-cut"></i>
                </div>
                <div class="gallery-item scroll-reveal">
                    <i class="fas fa-user-tie"></i>
                </div>
                <div class="gallery-item scroll-reveal">
                    <i class="fas fa-spa"></i>
                </div>
                <div class="gallery-item scroll-reveal">
                    <i class="fas fa-crown"></i>
                </div>
                <div class="gallery-item scroll-reveal">
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact & Booking Section -->
    <section id="contact" class="contact scroll-reveal">
        <div class="container">
            <div class="contact-content">
                <div class="contact-info">
                    <h2>צור קשר וקביעת תור</h2>
                    <p style="margin-bottom: 3rem; font-size: 1.2rem; opacity: 0.9;">
                        מוזמנים לקבוע תור או לפנות אלינו לכל שאלה. אנחנו כאן כדי להעניק לכם 
                        את החוויה הטובה ביותר.
                    </p>
                    
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>כתובת</h4>
                            <p>רחוב דיזנגוף 123, תל אביב</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h4>טלפון</h4>
                            <p>03-1234567</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4>אימייל</h4>
                            <p>info@barberstudio.co.il</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <h4>שעות פתיחה</h4>
                            <p>ראשון-חמישי: 9:00-21:00<br>
                            שישי: 9:00-15:00<br>
                            שבת: סגור</p>
                        </div>
                    </div>
                </div>
                
                <div class="booking-form">
                    <h3 style="margin-bottom: 2rem; color: var(--primary-color); font-size: 1.8rem;">קביעת תור מקוון</h3>
                    <form>
                        <div class="form-group">
                            <label for="name">שם מלא</label>
                            <input type="text" id="name" placeholder="הכנס את שמך המלא" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">טלפון</label>
                            <input type="tel" id="phone" placeholder="050-1234567" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">אימייל</label>
                            <input type="email" id="email" placeholder="your@email.com">
                        </div>
                        
                        <div class="form-group">
                            <label for="service">סוג השירות</label>
                            <select id="service" required>
                                <option value="">בחר שירות</option>
                                <option value="haircut">תספורת מקצועית - ₪120</option>
                                <option value="beard">עיצוב זקן - ₪80</option>
                                <option value="facial">טיפוח פנים - ₪200</option>
                                <option value="vip">חבילת VIP - ₪350</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="date">תאריך מועדף</label>
                            <input type="date" id="date" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="time">שעה מועדפת</label>
                            <select id="time" required>
                                <option value="">בחר שעה</option>
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="notes">הערות נוספות</label>
                            <textarea id="notes" rows="3" placeholder="ספר לנו על העיצוב שאתה מחפש..."></textarea>
                        </div>
                        
                        <button type="submit" class="btn-primary" style="width: 100%; margin-top: 1rem;">
                            <i class="fas fa-calendar-check"></i>
                            קבע תור עכשיו
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="social-links">
                <a href="#" title="פייסבוק"><i class="fab fa-facebook-f"></i></a>
                <a href="#" title="אינסטגרם"><i class="fab fa-instagram"></i></a>
                <a href="#" title="וואטסאפ"><i class="fab fa-whatsapp"></i></a>
                <a href="#" title="גוגל"><i class="fab fa-google"></i></a>
            </div>
            
            <div style="border-top: 1px solid rgba(212, 175, 55, 0.2); padding-top: 2rem; color: rgba(236, 240, 241, 0.7);">
                <p>&copy; 2025 ברבר סטודיו. כל הזכויות שמורות.</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;">
                    עוצב ופותח על ידי <span style="color: var(--primary-color);">בונה אתרים מקצועי</span>
                </p>
            </div>
        </div>
    </footer>

    <!-- JavaScript for animations and interactions -->
    <script>
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(26, 26, 46, 0.98)';
                header.style.padding = '0.5rem 0';
            } else {
                header.style.background = 'rgba(26, 26, 46, 0.95)';
                header.style.padding = '1rem 0';
            }
        });

        // Scroll reveal animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            
            // Simple validation
            if (!name || !phone || !service || !date || !time) {
                alert('אנא מלא את כל השדות החובה');
                return;
            }
            
            // Success message
            alert(`תודה ${name}! התור שלך נקבע בהצלחה.\nנחזור אליך בקרוב לאישור הפרטים.`);
            
            // Reset form
            this.reset();
        });

        // Add some interactive hover effects
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-10px) scale(1)';
            });
        });

        // Dynamic year for copyright
        document.addEventListener('DOMContentLoaded', function() {
            const currentYear = new Date().getFullYear();
            const copyrightText = document.querySelector('footer p');
            if (copyrightText) {
                copyrightText.innerHTML = copyrightText.innerHTML.replace('2025', currentYear);
            }
        });

        // Add loading animation for images when they would be loaded
        document.querySelectorAll('.gallery-item, .about-image').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Mobile menu toggle (if needed in future)
        const mobileMenuToggle = () => {
            // Mobile menu functionality can be added here
            console.log('Mobile menu toggle');
        };

        // Performance optimization - lazy loading simulation
        const lazyElements = document.querySelectorAll('.gallery-item, .service-card');
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        lazyElements.forEach(el => lazyObserver.observe(el));
    </script>
</body>
</html>
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
