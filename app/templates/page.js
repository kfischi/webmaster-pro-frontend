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
      title: 'ביו-טק פתרונות - ביוטכנולוג
