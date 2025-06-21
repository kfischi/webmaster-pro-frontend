'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('הכל');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // כל התבניות - 17 תבניות מקצועיות
  const templates = [
    // קטגוריה: בריאות וכושר
    {
      id: 1,
      title: 'אלון כהן - מאמן כושר אישי',
      category: 'בריאות וכושר',
      description: 'תבנית מקצועית למאמני כושר אישיים עם גלריית תמונות, מערכת הזמנות ותכניות אימון.',
      image: '/images/templates/fitness-trainer.jpg',
      demoUrl: '/demos/fitness-trainer',
      price: 1500,
      features: ['תכניות אימון', 'הזמנת מפגשים', 'מעקב התקדמות', 'גלריית תמונות'],
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
      rating: 4.9,
      sales: 156
    },
    {
      id: 2,
      title: 'ד"ר נועה רוזן - פסיכולוגיה קלינית',
      category: 'בריאות וכושר',
      description: 'אתר מקצועי לפסיכולוגים עם מערכת הזמנות, מאמרים ויצירת קשר דיסקרטית.',
      image: '/images/templates/psychology.jpg',
      demoUrl: '/demos/psychology',
      price: 1800,
      features: ['הזמנת פגישות', 'מאמרים מקצועיים', 'אזור מוגן', 'טפסי צור קשר'],
      colors: ['#667eea', '#764ba2', '#f093fb'],
      rating: 4.8,
      sales: 89
    },
    {
      id: 3,
      title: 'נשימה בתנועה - סטודיו יוגה',
      category: 'בריאות וכושר',
      description: 'תבנית שלווה וזורמת לסטודיו יוגה עם לוח שיעורים, הרשמה אונליין ובלוג.',
      image: '/images/templates/yoga-studio.jpg',
      demoUrl: '/demos/yoga-studio',
      price: 1400,
      features: ['לוח שיעורים', 'הרשמה אונליין', 'בלוג יוגה', 'גלריית וידאו'],
      colors: ['#43cea2', '#185a9d', '#f093fb'],
      rating: 4.9,
      sales: 134
    },
    {
      id: 4,
      title: 'לירון ברק - תזונאית קלינית',
      category: 'בריאות וכושר',
      description: 'אתר מקצועי לתזונאים עם מחשבון קלוריות, תפריטים ויעוץ אונליין.',
      image: '/images/templates/nutritionist.jpg',
      demoUrl: '/demos/nutritionist',
      price: 1600,
      features: ['מחשבון קלוריות', 'תפריטים מותאמים', 'יעוץ וידאו', 'מעקב משקל'],
      colors: ['#a8edea', '#fed6e3', '#d299c2'],
      rating: 4.7,
      sales: 78
    },
    {
      id: 5,
      title: 'ד"ר מיכל גרין - קלינאית תקשורת',
      category: 'בריאות וכושר',
      description: 'אתר מותאם לקלינאי תקשורת עם כלי הערכה, משחקים ומשאבי הורים.',
      image: '/images/templates/speech-therapy.jpg',
      demoUrl: '/demos/speech-therapy',
      price: 1700,
      features: ['כלי הערכה', 'משחקים אינטראקטיביים', 'משאבי הורים', 'מעקב התקדמות'],
      colors: ['#ff9a9e', '#fecfef', '#fecfef'],
      rating: 4.8,
      sales: 67
    },
    {
      id: 6,
      title: 'דן רווח - מאמן מנטלי',
      category: 'בריאות וכושר',
      description: 'פלטפורמה לאימון מנטלי עם כלי חשיבה, מדיטציות ותוכניות פיתוח אישי.',
      image: '/images/templates/mental-coach.jpg',
      demoUrl: '/demos/mental-coach',
      price: 1650,
      features: ['כלי חשיבה', 'מדיטציות מודרכות', 'תוכניות פיתוח', 'מעקב יומי'],
      colors: ['#667eea', '#764ba2', '#667eea'],
      rating: 4.9,
      sales: 45
    },

    // קטגוריה: חינוך ולימודים
    {
      id: 7,
      title: 'מיכל רוזן - מורה פרטי',
      category: 'חינוך ולימודים',
      description: 'פלטפורמה ללימודים פרטיים עם לוח זמנים, חומרי לימוד ומעקב התקדמות.',
      image: '/images/templates/private-tutor.jpg',
      demoUrl: '/demos/private-tutor',
      price: 1300,
      features: ['לוח זמנים', 'חומרי לימוד', 'מבחנים אונליין', 'התקשרות עם הורים'],
      colors: ['#11998e', '#38ef7d', '#11998e'],
      rating: 4.8,
      sales: 112
    },
    {
      id: 8,
      title: 'פרופ\' יוסי כהן - מורה למדעים',
      category: 'חינוך ולימודים',
      description: 'אתר מתקדם להוראת מדעים עם סימולציות, ניסויים וירטואליים ותוכן אינטראקטיבי.',
      image: '/images/templates/science-teacher.jpg',
      demoUrl: '/demos/science-teacher',
      price: 1900,
      features: ['סימולציות מדעיות', 'ניסויים וירטואליים', 'תוכן אינטראקטיבי', 'פורום תלמידים'],
      colors: ['#667eea', '#764ba2', '#667eea'],
      rating: 4.9,
      sales: 67
    },

    // קטגוריה: יופי ועיצוב
    {
      id: 9,
      title: 'סלון נועה - מספרה מקצועית',
      category: 'יופי ועיצוב',
      description: 'אתר אלגנטי למספרה עם גלריית עבודות, הזמנת תורים ומחירון.',
      image: '/images/templates/hair-salon.jpg',
      demoUrl: '/demos/hair-salon',
      price: 1200,
      features: ['הזמנת תורים', 'גלריית עבודות', 'מחירון שירותים', 'ביקורות לקוחות'],
      colors: ['#f093fb', '#f5576c', '#f093fb'],
      rating: 4.7,
      sales: 189
    },
    {
      id: 10,
      title: 'אמילי דיזיין - מעצבת פנים',
      category: 'יופי ועיצוב',
      description: 'פורטפוליו מקצועי למעצבי פנים עם גלריית פרויקטים, שירותים ויצירת קשר.',
      image: '/images/templates/interior-design.jpg',
      demoUrl: '/demos/interior-design',
      price: 1800,
      features: ['פורטפוליו פרויקטים', 'תהליך עיצוב', 'הצעת מחיר', 'בלוג עיצוב'],
      colors: ['#a8edea', '#fed6e3', '#a8edea'],
      rating: 4.8,
      sales: 98
    },

    // קטגוריה: עסקי ומשפטי
    {
      id: 11,
      title: 'כהן ושותפים - משרד עורכי דין',
      category: 'עסקי ומשפטי',
      description: 'אתר מקצועי למשרד עורכי דין עם מידע על התמחויות, צוות ויצירת קשר.',
      image: '/images/templates/law-firm.jpg',
      demoUrl: '/demos/law-firm',
      price: 2000,
      features: ['התמחויות משפטיות', 'פרופיל צוות', 'מאמרים משפטיים', 'יעוץ ראשוני'],
      colors: ['#2c3e50', '#34495e', '#2c3e50'],
      rating: 4.9,
      sales: 76
    },
    {
      id: 12,
      title: 'אופיר הנהלת חשבונות - שירותי שכר',
      category: 'עסקי ומשפטי',
      description: 'פלטפורמה לשירותי הנהלת חשבונות ושכר עם לוח בקרה ללקוחות.',
      image: '/images/templates/accounting.jpg',
      demoUrl: '/demos/accounting',
      price: 1700,
      features: ['לוח בקרה לקוחות', 'העלאת מסמכים', 'דוחות פיננסיים', 'יעוץ עסקי'],
      colors: ['#667eea', '#764ba2', '#667eea'],
      rating: 4.6,
      sales: 54
    },

    // קטגוריה: טכנולוגיה ומחשבים
    {
      id: 13,
      title: 'רון שילד - מומחה סייבר',
      category: 'טכנולוגיה ומחשבים',
      description: 'אתר מתקדם לשירותי אבטחת מידע עם סקירות אבטחה ויעוץ טכנולוגי.',
      image: '/images/templates/cyber-security.jpg',
      demoUrl: '/demos/cyber-security',
      price: 2200,
      features: ['סקירות אבטחה', 'יעוץ טכנולוגי', 'הדרכות סייבר', 'ניטור מתמיד'],
      colors: ['#0f0f23', '#1a1a2e', '#16213e'],
      rating: 4.9,
      sales: 43
    },
    {
      id: 14,
      title: 'דן גרין - יועץ אנרגיה סולארית',
      category: 'טכנולוגיה ומחשבים',
      description: 'פלטפורמה לשירותי אנרגיה סולארית עם מחשבון חיסכון ותכנון מערכות.',
      image: '/images/templates/solar-energy.jpg',
      demoUrl: '/demos/solar-energy',
      price: 1800,
      features: ['מחשבון חיסכון', 'תכנון מערכות', 'מעקב ייצור', 'יעוץ אנרגטי'],
      colors: ['#f7971e', '#ffd200', '#f7971e'],
      rating: 4.7,
      sales: 67
    },
    {
      id: 15,
      title: 'ביו-טק פתרונות - ביוטכנולוגיה',
      category: 'טכנולוגיה ומחשבים',
      description: 'אתר מדעי לחברת ביוטכנולוגיה עם מחקרים, פתרונות ויעוץ מקצועי.',
      image: '/images/templates/biotech.jpg',
      demoUrl: '/demos/biotech',
      price: 2500,
      features: ['מחקרים מדעיים', 'פתרונות טכנולוגיים', 'יעוץ מקצועי', 'פרסומים'],
      colors: ['#667eea', '#764ba2', '#667eea'],
      rating: 4.8,
      sales: 29
    },
    {
      id: 16,
      title: 'נגישות דיגיטלית - יועצת נגישות',
      category: 'טכנולוגיה ומחשבים',
      description: 'פלטפורמה ליועצת נגישות דיגיטלית עם כלי בדיקה והנחיות נגישות.',
      image: '/images/templates/accessibility.jpg',
      demoUrl: '/demos/accessibility',
      price: 1900,
      features: ['כלי בדיקת נגישות', 'הנחיות WCAG', 'יעוץ מקצועי', 'הדרכות'],
      colors: ['#11998e', '#38ef7d', '#11998e'],
      rating: 4.9,
      sales: 38
    },
    {
      id: 17,
      title: 'WebMaster Pro - פלטפורמת בניית אתרים',
      category: 'טכנולוגיה ומחשבים',
      description: 'פלטפורמה מתקדמת לבניית אתרים עם עורך ויזואלי, תבניות ותמיכה מלאה.',
      image: '/images/templates/webmaster-pro.jpg',
      demoUrl: '/demos/webmaster-pro',
      price: 3000,
      features: ['עורך ויזואלי', 'תבניות מקצועיות', 'אחסון ודומיין', 'תמיכה 24/7'],
      colors: ['#667eea', '#764ba2', '#667eea'],
      rating: 5.0,
      sales: 12
    }
  ];

  const categories = ['הכל', 'בריאות וכושר', 'חינוך ולימודים', 'יופי ועיצוב', 'עסקי ומשפטי', 'טכנולוגיה ומחשבים'];

  // סינון תבניות
  useEffect(() => {
    let filtered = templates;
    
    if (selectedCategory !== 'הכל') {
      filtered = filtered.filter(template => template.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(template => 
        template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredTemplates(filtered);
  }, [selectedCategory, searchTerm]);

  // פתיחת מודל
  const openTemplateModal = (template) => {
    setSelectedTemplate(template);
  };

  // סגירת מודל
  const closeTemplateModal = () => {
    setSelectedTemplate(null);
  };

  // פונקציה ליצירת קשר
  const handleContactClick = (templateTitle) => {
    const message = `שלום, אני מעוניין/ת לבנות אתר בסגנון "${templateTitle}". אשמח לקבל פרטים נוספים ותמחור.`;
    const whatsappUrl = `https://wa.me/972501234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="templates-page" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          גלריית תבניות מקצועיות
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          17 תבניות אתרים מתקדמות לעסקים שונים. כל תבנית נבנית במיוחד עבור התחום הספציפי
        </p>
        
        {/* סטטיסטיקות */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '3rem', 
          marginTop: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>17</div>
            <div style={{ opacity: 0.8 }}>תבניות מקצועיות</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>1,247</div>
            <div style={{ opacity: 0.8 }}>לקוחות מרוצים</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>4.8</div>
            <div style={{ opacity: 0.8 }}>דירוג ממוצע</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* חיפוש וסינון */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          {/* שדה חיפוש */}
          <input
            type="text"
            placeholder="חפש תבנית..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '0.75rem',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              fontSize: '1rem',
              flex: '1',
              minWidth: '250px'
            }}
          />
          
          {/* כפתורי קטגוריות */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '20px',
                  backgroundColor: selectedCategory === category ? '#667eea' : '#e9ecef',
                  color: selectedCategory === category ? 'white' : '#333',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* תוצאות חיפוש */}
        <div style={{ marginBottom: '2rem', color: '#666' }}>
          נמצאו {filteredTemplates.length} תבניות
        </div>

        {/* רשת תבניות */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          <AnimatePresence>
            {filteredTemplates.map((template) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onClick={() => openTemplateModal(template)}
              >
                {/* תמונת תבנית */}
                <div style={{ 
                  height: '200px', 
                  background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}>
                  {template.title.split(' - ')[1] || template.title}
                </div>
                
                {/* תוכן כרטיס */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '1rem'
                  }}>
                    <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#333' }}>
                      {template.title}
                    </h3>
                    <span style={{
                      backgroundColor: template.colors[0],
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.8rem'
                    }}>
                      {template.category}
                    </span>
                  </div>
                  
                  <p style={{ 
                    color: '#666', 
                    marginBottom: '1rem', 
                    lineHeight: '1.5',
                    fontSize: '0.95rem'
                  }}>
                    {template.description}
                  </p>
                  
                  {/* פיצ'רים */}
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '0.5rem' 
                    }}>
                      {template.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          style={{
                            backgroundColor: '#f8f9fa',
                            color: '#666',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            border: '1px solid #e9ecef'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                      {template.features.length > 3 && (
                        <span style={{ color: '#666', fontSize: '0.8rem' }}>
                          +{template.features.length - 3} נוספים
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* מידע נוסף */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '1rem',
                    fontSize: '0.9rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#ffc107' }}>★</span>
                      <span>{template.rating}</span>
                      <span style={{ color: '#666' }}>({template.sales} מכירות)</span>
                    </div>
                    <div style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 'bold', 
                      color: template.colors[0] 
                    }}>
                      ₪{template.price.toLocaleString()}
                    </div>
                  </div>
                  
                  {/* כפתורי פעולה */}
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(template.demoUrl, '_blank');
                      }}
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        border: `2px solid ${template.colors[0]}`,
                        backgroundColor: 'transparent',
                        color: template.colors[0],
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = template.colors[0];
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = template.colors[0];
                      }}
                    >
                      תצוגה מקדימה
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleContactClick(template.title);
                      }}
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        border: 'none',
                        backgroundColor: template.colors[0],
                        color: 'white',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = template.colors[1];
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = template.colors[0];
                      }}
                    >
                      בניתי לך אתר כזה
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* מודל פרטי תבנית */}
        <AnimatePresence>
          {selectedTemplate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
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
                padding: '2rem'
              }}
              onClick={closeTemplateModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  maxWidth: '800px',
                  width: '100%',
                  maxHeight: '90vh',
                  overflow: 'auto',
                  position: 'relative'
                }}
              >
                {/* כפתור סגירה */}
                <button
                  onClick={closeTemplateModal}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'none',
                    border: 'none',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    zIndex: 1001,
                    color: '#666'
                  }}
                >
                  ×
                </button>
                
                {/* תוכן מודל */}
                <div style={{ padding: '2rem' }}>
                  <div style={{ 
                    height: '300px', 
                    background: `linear-gradient(135deg, ${selectedTemplate.colors[0]}, ${selectedTemplate.colors[1]})`,
                    borderRadius: '8px',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                    {selectedTemplate.title.split(' - ')[1] || selectedTemplate.title}
                  </div>
                  
                  <h2 style={{ marginBottom: '1rem', color: selectedTemplate.colors[0] }}>
                    {selectedTemplate.title}
                  </h2>
                  
                  <p style={{ 
                    color: '#666', 
                    marginBottom: '2rem', 
                    lineHeight: '1.6',
                    fontSize: '1.1rem'
                  }}>
                    {selectedTemplate.description}
                  </p>
                  
                  {/* כל הפיצ'רים */}
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>מה כלול בתבנית:</h3>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1rem'
                    }}>
                      {selectedTemplate.features.map((feature, index) => (
                        <div
                          key={index}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            border: `2px solid ${selectedTemplate.colors[0]}20`
                          }}
                        >
                          <span style={{ color: selectedTemplate.colors[0] }}>✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* מחיר ופעולות */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '1.5rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    marginBottom: '2rem'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.9rem', color: '#666' }}>מחיר בניית אתר:</div>
                      <div style={{ 
                        fontSize: '2rem', 
                        fontWeight: 'bold', 
                        color: selectedTemplate.colors[0] 
                      }}>
                        ₪{selectedTemplate.price.toLocaleString()}
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button
                        onClick={() => window.open(selectedTemplate.demoUrl, '_blank')}
                        style={{
                          padding: '1rem 2rem',
                          border: `2px solid ${selectedTemplate.colors[0]}`,
                          backgroundColor: 'transparent',
                          color: selectedTemplate.colors[0],
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        תצוגה מקדימה
                      </button>
                      
                      <button
                        onClick={() => handleContactClick(selectedTemplate.title)}
                        style={{
                          padding: '1rem 2rem',
                          border: 'none',
                          backgroundColor: selectedTemplate.colors[0],
                          color: 'white',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        בניתי לך אתר כזה
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer CTA */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center',
        marginTop: '4rem'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          מוכן להתחיל?
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
          בחר תבנית ואנחנו נבנה לך אתר מקצועי תוך 7-14 ימי עבודה
        </p>
        <button
          onClick={() => handleContactClick('שיחת ייעוץ כללית')}
          style={{
            padding: '1rem 3rem',
            fontSize: '1.2rem',
            backgroundColor: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
        >
          קבע שיחת ייעוץ חינם
        </button>
      </div>
    </div>
  );
}
