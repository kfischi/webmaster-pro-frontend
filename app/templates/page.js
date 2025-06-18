import React, { useState } from 'react';
import { Search, Filter, Eye, Edit3, Star, ArrowRight, Globe, Smartphone, Monitor } from 'lucide-react';

export default function TemplatesGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'הכל', icon: '🌟', count: 24 },
    { id: 'business', name: 'עסקים', icon: '🏢', count: 8 },
    { id: 'restaurant', name: 'מסעדות', icon: '🍽️', count: 4 },
    { id: 'shop', name: 'חנויות', icon: '🛍️', count: 5 },
    { id: 'services', name: 'שירותים', icon: '⚙️', count: 4 },
    { id: 'portfolio', name: 'פורטפוליו', icon: '🎨', count: 3 }
  ];

  const templates = [
    {
      id: 1,
      name: 'עסק מקומי מודרני',
      category: 'business',
      description: 'תבנית נקייה ומקצועית לעסקים מקומיים עם דגש על אמינות',
      image: '/api/placeholder/400/300',
      rating: 4.9,
      downloads: 1247,
      features: ['רספונסיבי', 'SEO אופטימלי', 'טפסי יצירת קשר'],
      tags: ['עסקי', 'מינימלי', 'מודרני'],
      price: 'חינם',
      premium: false,
      preview: `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 60px 20px; text-align: center; color: white;">
          <h1 style="font-size: 3rem; margin-bottom: 20px; font-weight: bold;">העסק שלכם</h1>
          <p style="font-size: 1.2rem; margin-bottom: 30px;">פתרונות מקצועיים ואמינים</p>
          <button style="background: white; color: #667eea; padding: 15px 30px; border: none; border-radius: 25px; font-weight: bold; font-size: 1.1rem;">צרו קשר עכשיו</button>
        </div>
        <div style="padding: 60px 20px; max-width: 1200px; margin: 0 auto;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; text-align: center;">
            <div style="padding: 30px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-radius: 10px;">
              <div style="font-size: 3rem; margin-bottom: 20px;">🎯</div>
              <h3 style="margin-bottom: 15px; color: #333;">שירות מקצועי</h3>
              <p style="color: #666;">אנו מספקים שירות ברמה הגבוהה ביותר</p>
            </div>
            <div style="padding: 30px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-radius: 10px;">
              <div style="font-size: 3rem; margin-bottom: 20px;">⚡</div>
              <h3 style="margin-bottom: 15px; color: #333;">מהירות</h3>
              <p style="color: #666;">זמני תגובה מהירים ופתרונות יעילים</p>
            </div>
            <div style="padding: 30px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-radius: 10px;">
              <div style="font-size: 3rem; margin-bottom: 20px;">🏆</div>
              <h3 style="margin-bottom: 15px; color: #333;">איכות</h3>
              <p style="color: #666;">תוצאות מעולות ושביעות רצון גבוהה</p>
            </div>
          </div>
        </div>`
    },
    {
      id: 2,
      name: 'מסעדה אלגנטית',
      category: 'restaurant',
      description: 'עיצוב יוקרתי למסעדות עם גלריית תמונות ותפריט מקוון',
      image: '/api/placeholder/400/300',
      rating: 4.8,
      downloads: 892,
      features: ['תפריט דיגיטלי', 'הזמנות אונליין', 'גלריה'],
      tags: ['מסעדה', 'יוקרתי', 'כהה'],
      price: '₪99',
      premium: true,
      preview: `
        <div style="background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/api/placeholder/1200/600'); background-size: cover; background-position: center; padding: 100px 20px; text-align: center; color: white;">
          <h1 style="font-size: 4rem; margin-bottom: 20px; font-family: serif; font-weight: normal;">מסעדת השף</h1>
          <p style="font-size: 1.3rem; margin-bottom: 30px; font-style: italic;">חוויה קולינרית בלתי נשכחת</p>
          <button style="background: #d4af37; color: black; padding: 15px 40px; border: none; border-radius: 5px; font-weight: bold; margin: 10px;">הזמינו מקום</button>
          <button style="background: transparent; color: white; padding: 15px 40px; border: 2px solid white; border-radius: 5px; font-weight: bold; margin: 10px;">עיינו בתפריט</button>
        </div>
        <div style="padding: 80px 20px; background: #1a1a1a; color: white; text-align: center;">
          <h2 style="font-size: 2.5rem; margin-bottom: 50px; color: #d4af37;">התפריט שלנו</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; max-width: 1000px; margin: 0 auto;">
            <div style="text-align: center;">
              <h3 style="color: #d4af37; margin-bottom: 15px;">מנות ראשונות</h3>
              <p style="margin-bottom: 10px;">סלט ים תיכוני - ₪45</p>
              <p style="margin-bottom: 10px;">קרפצ'יו סלמון - ₪65</p>
              <p style="margin-bottom: 10px;">מרק דלעת - ₪35</p>
            </div>
            <div style="text-align: center;">
              <h3 style="color: #d4af37; margin-bottom: 15px;">מנות עיקריות</h3>
              <p style="margin-bottom: 10px;">סטייק אנטריקוט - ₪120</p>
              <p style="margin-bottom: 10px;">דג ים ברוטב - ₪95</p>
              <p style="margin-bottom: 10px;">ריזוטו פטריות - ₪75</p>
            </div>
          </div>
        </div>`
    },
    {
      id: 3,
      name: 'חנות אופנה טרנדית',
      category: 'shop',
      description: 'תבנית מודרנית לחנויות אופנה עם קטלוג מוצרים וסל קניות',
      image: '/api/placeholder/400/300',
      rating: 4.7,
      downloads: 1055,
      features: ['קטלוג מוצרים', 'סל קניות', 'תשלומים'],
      tags: ['חנות', 'אופנה', 'צעיר'],
      price: '₪149',
      premium: true,
      preview: `
        <div style="background: linear-gradient(45deg, #ff6b6b, #ee5a24); padding: 80px 20px; text-align: center; color: white;">
          <h1 style="font-size: 3.5rem; margin-bottom: 20px; font-weight: bold;">FASHION STORE</h1>
          <p style="font-size: 1.4rem; margin-bottom: 30px;">הקולקציה החדשה כבר כאן</p>
          <button style="background: white; color: #ff6b6b; padding: 18px 35px; border: none; border-radius: 30px; font-weight: bold; font-size: 1.1rem;">גלו עכשיו</button>
        </div>
        <div style="padding: 60px 20px; max-width: 1200px; margin: 0 auto;">
          <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 50px; color: #333;">מוצרים פופולריים</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
            <div style="text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-radius: 10px; overflow: hidden;">
              <div style="height: 200px; background: #f8f9fa; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 3rem;">👗</span>
              </div>
              <div style="padding: 20px;">
                <h3 style="margin-bottom: 10px;">שמלת קיץ</h3>
                <p style="color: #ff6b6b; font-weight: bold; font-size: 1.2rem;">₪199</p>
                <button style="background: #ff6b6b; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin-top: 10px;">הוסף לסל</button>
              </div>
            </div>
            <div style="text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-radius: 10px; overflow: hidden;">
              <div style="height: 200px; background: #f8f9fa; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 3rem;">👕</span>
              </div>
              <div style="padding: 20px;">
                <h3 style="margin-bottom: 10px;">חולצת טי</h3>
                <p style="color: #ff6b6b; font-weight: bold; font-size: 1.2rem;">₪89</p>
                <button style="background: #ff6b6b; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin-top: 10px;">הוסף לסל</button>
              </div>
            </div>
          </div>
        </div>`
    },
    {
      id: 4,
      name: 'סטודיו לעיצוב',
      category: 'portfolio',
      description: 'פורטפוליו מינימליסטי למעצבים וקריאייטיבים',
      image: '/api/placeholder/400/300',
      rating: 4.9,
      downloads: 743,
      features: ['גלריית עבודות', 'קורות חיים', 'אנימציות'],
      tags: ['פורטפוליו', 'מינימלי', 'אמנות'],
      price: 'חינם',
      premium: false,
      preview: `
        <div style="background: #f8f9fa; padding: 100px 20px; text-align: center;">
          <h1 style="font-size: 4rem; margin-bottom: 20px; font-weight: 100; color: #2c3e50;">יעל כהן</h1>
          <p style="font-size: 1.5rem; color: #7f8c8d; margin-bottom: 40px;">מעצבת גרפית ואמנית דיגיטלית</p>
          <div style="width: 60px; height: 2px; background: #3498db; margin: 0 auto;"></div>
        </div>
        <div style="padding: 80px 20px; max-width: 1000px; margin: 0 auto;">
          <h2 style="text-align: center; font-size: 2rem; margin-bottom: 50px; color: #2c3e50; font-weight: 300;">עבודות נבחרות</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
            <div style="position: relative; height: 250px; background: linear-gradient(45deg, #3498db, #9b59b6); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
              פרויקט מיתוג
            </div>
            <div style="position: relative; height: 250px; background: linear-gradient(45deg, #e74c3c, #f39c12); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
              עיצוב אתר
            </div>
            <div style="position: relative; height: 250px; background: linear-gradient(45deg, #1abc9c, #27ae60); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
              עיצוב אפליקציה
            </div>
          </div>
        </div>`
    },
    {
      id: 5,
      name: 'שירותי ייעוץ',
      category: 'services',
      description: 'תבנית מקצועית לחברות ייעוץ ושירותים עסקיים',
      image: '/api/placeholder/400/300',
      rating: 4.6,
      downloads: 634,
      features: ['אזור לקוחות', 'תיאום פגישות', 'המלצות'],
      tags: ['ייעוץ', 'עסקי', 'רציני'],
      price: '₪79',
      premium: true,
      preview: `
        <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 100px 20px; color: white; text-align: center;">
          <h1 style="font-size: 3rem; margin-bottom: 20px; font-weight: bold;">ייעוץ עסקי מתקדם</h1>
          <p style="font-size: 1.3rem; margin-bottom: 30px; max-width: 600px; margin-left: auto; margin-right: auto;">אנו מובילים עסקים להצלחה עם פתרונות מותאמים אישית ומקצועיות ללא פשרות</p>
          <button style="background: #3498db; color: white; padding: 18px 40px; border: none; border-radius: 5px; font-weight: bold; font-size: 1.1rem; margin: 10px;">קבעו ייעוץ חינם</button>
        </div>
        <div style="padding: 80px 20px; max-width: 1100px; margin: 0 auto;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; text-align: center;">
            <div>
              <div style="width: 80px; height: 80px; background: #3498db; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: white;">📊</div>
              <h3 style="margin-bottom: 15px; color: #2c3e50;">ניתוח עסקי</h3>
              <p style="color: #7f8c8d;">בחינה מעמיקה של המצב הנוכחי וזיהוי הזדמנויות</p>
            </div>
            <div>
              <div style="width: 80px; height: 80px; background: #27ae60; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: white;">🎯</div>
              <h3 style="margin-bottom: 15px; color: #2c3e50;">אסטרטגיה</h3>
              <p style="color: #7f8c8d;">פיתוח תוכנית פעולה מדויקת להשגת יעדים</p>
            </div>
            <div>
              <div style="width: 80px; height: 80px; background: #e74c3c; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: white;">🚀</div>
              <h3 style="margin-bottom: 15px; color: #2c3e50;">יישום</h3>
              <p style="color: #7f8c8d;">ליווי צמוד בתהליך המימוש והטמעה</p>
            </div>
          </div>
        </div>`
    },
    {
      id: 6,
      name: 'קליניקה רפואית',
      category: 'services',
      description: 'תבנית נקייה ומקצועית לקליניקות רפואיות ומרפאות',
      image: '/api/placeholder/400/300',
      rating: 4.8,
      downloads: 521,
      features: ['תיאום תורים', 'מידע רפואי', 'צוות רפואי'],
      tags: ['רפואה', 'נקי', 'מקצועי'],
      price: '₪119',
      premium: true,
      preview: `
        <div style="background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%); padding: 80px 20px; color: white; text-align: center;">
          <h1 style="font-size: 3rem; margin-bottom: 20px; font-weight: bold;">קליניקת בריאות פלוס</h1>
          <p style="font-size: 1.3rem; margin-bottom: 30px;">טיפול רפואי מתקדם באווירה חמה ומקצועית</p>
          <div style="margin-top: 40px;">
            <button style="background: white; color: #0984e3; padding: 15px 30px; border: none; border-radius: 25px; font-weight: bold; margin: 10px;">קבעו תור</button>
            <button style="background: transparent; color: white; padding: 15px 30px; border: 2px solid white; border-radius: 25px; font-weight: bold; margin: 10px;">הצוות שלנו</button>
          </div>
        </div>
        <div style="padding: 80px 20px; max-width: 1100px; margin: 0 auto; text-align: center;">
          <h2 style="font-size: 2.5rem; margin-bottom: 50px; color: #2d3436;">השירותים שלנו</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
            <div style="padding: 40px 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-radius: 15px; border-top: 5px solid #00b894;">
              <div style="font-size: 3rem; margin-bottom: 20px;">👨‍⚕️</div>
              <h3 style="margin-bottom: 15px; color: #2d3436;">רפואה כללית</h3>
              <p style="color: #636e72;">בדיקות ומעקב רפואי מתמשך</p>
            </div>
            <div style="padding: 40px 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-radius: 15px; border-top: 5px solid #fd79a8;">
              <div style="font-size: 3rem; margin-bottom: 20px;">❤️</div>
              <h3 style="margin-bottom: 15px; color: #2d3436;">קרדיולוגיה</h3>
              <p style="color: #636e72;">בדיקות לב ומערכת דם מתקדמות</p>
            </div>
            <div style="padding: 40px 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-radius: 15px; border-top: 5px solid #fdcb6e;">
              <div style="font-size: 3rem; margin-bottom: 20px;">🩺</div>
              <h3 style="margin-bottom: 15px; color: #2d3436;">רפואת ילדים</h3>
              <p style="color: #636e72;">טיפול מיוחד לילדים ובני נוער</p>
            </div>
          </div>
        </div>`
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const [previewTemplate, setPreviewTemplate] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🎨 גלריית תבניות</h1>
              <p className="text-gray-600 mt-1">בחרו את התבנית המושלמת לעסק שלכם</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                התחברות
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-6">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="חפש תבניות..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="w-4 h-4 ml-2" />
                קטגוריות
              </h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-right px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">({category.count})</span>
                      <div className="flex items-center">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-lg mr-2">{category.icon}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">סטטיסטיקות</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">סה"כ תבניות</span>
                  <span className="font-bold text-blue-600">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">הורדות השבוע</span>
                  <span className="font-bold text-green-600">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">דירוג ממוצע</span>
                  <span className="font-bold text-yellow-600">4.8 ⭐</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredTemplates.length} תבניות נמצאו
                </h2>
                <p className="text-gray-600">
                  {selectedCategory !== 'all' && `בקטגוריה: ${categories.find(c => c.id === selectedCategory)?.name}`}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
                >
                  <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                    <div className="bg-current"></div>
                    <div className="bg-current"></div>
                    <div className="bg-current"></div>
                    <div className="bg-current"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
                >
                  <div className="w-4 h-4 flex flex-col space-y-1">
                    <div className="h-0.5 bg-current"></div>
                    <div className="h-0.5 bg-current"></div>
                    <div className="h-0.5 bg-current"></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Templates Grid */}
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              : "space-y-4"
            }>
              {filteredTemplates.map(template => (
                <div
                  key={template.id}
                  className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Template Preview */}
                  <div className={`relative ${viewMode === 'list' ? 'w-48 h-32' : 'h-48'} bg-gray-100`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl mb-2">
                          {template.category === 'business' && '🏢'}
                          {template.category === 'restaurant' && '🍽️'}
                          {template.category === 'shop' && '🛍️'}
                          {template.category === 'services' && '⚙️'}
                          {template.category === 'portfolio' && '🎨'}
                        </div>
                        <div className="text-xs text-gray-500">תצוגה מקדימה</div>
                      </div>
                    </div>
                    
                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setPreviewTemplate(template)}
                          className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center"
                        >
                          <Eye className="w-4 h-4 ml-2" />
                          תצוגה מקדימה
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
                          <Edit3 className="w-4 h-4 ml-2" />
                          ערוך
                        </button>
                      </div>
                    </div>

                    {/* Premium Badge */}
                    {template.premium && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        פרימיום
                      </div>
                    )}

                    {/* Rating Badge */}
                    <div className="absolute top-3 left-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 ml-1 fill-current" />
                      {template.rating}
                    </div>
                  </div>

                  {/* Template Info */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">{template.name}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{template.description}</p>
                      </div>
                      <div className="text-left mr-4">
                        <div className={`font-bold ${template.premium ? 'text-blue-600' : 'text-green-600'} text-lg`}>
                          {template.price}
                        </div>
                        <div className="text-xs text-gray-500">
                          {template.downloads.toLocaleString()} הורדות
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {template.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                        {template.features.length > 3 && (
                          <span className="text-xs text-gray-500 px-2 py-1">
                            +{template.features.length - 3} עוד
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {template.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setPreviewTemplate(template)}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium flex items-center justify-center"
                      >
                        <Eye className="w-4 h-4 ml-2" />
                        תצוגה מקדימה
                      </button>
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center">
                        <Edit3 className="w-4 h-4 ml-2" />
                        {template.premium ? 'רכישה ועריכה' : 'התחל עריכה'}
                      </button>
                    </div>

                    {/* Responsive Preview Icons */}
                    <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-xs text-gray-500">
                        <Monitor className="w-3 h-3 ml-1" />
                        Desktop
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Tablet className="w-3 h-3 ml-1" />
                        Tablet
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Smartphone className="w-3 h-3 ml-1" />
                        Mobile
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">לא נמצאו תבניות</h3>
                <p className="text-gray-600 mb-4">נסו לשנות את מושגי החיפוש או הקטגוריה</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  איפוס החיפוש
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{previewTemplate.name}</h2>
                <p className="text-gray-600">{previewTemplate.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  <Edit3 className="w-4 h-4 ml-2" />
                  {previewTemplate.premium ? `רכישה (${previewTemplate.price})` : 'התחל עריכה'}
                </button>
                <button
                  onClick={() => setPreviewTemplate(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div 
                  className="transform scale-75 origin-top-right"
                  dangerouslySetInnerHTML={{ __html: previewTemplate.preview }}
                />
              </div>

              {/* Template Details */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">תכונות כלולות</h4>
                  <ul className="space-y-2">
                    {previewTemplate.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">פרטי תבנית</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">קטגוריה:</span>
                      <span className="font-medium">
                        {categories.find(c => c.id === previewTemplate.category)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">דירוג:</span>
                      <span className="font-medium flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 ml-1 fill-current" />
                        {previewTemplate.rating}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">הורדות:</span>
                      <span className="font-medium">{previewTemplate.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">מחיר:</span>
                      <span className={`font-medium ${previewTemplate.premium ? 'text-blue-600' : 'text-green-600'}`}>
                        {previewTemplate.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">תגיות</h4>
                  <div className="flex flex-wrap gap-2">
                    {previewTemplate.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">🚀 WebMaster Pro</h3>
              <p className="text-gray-600 text-sm">
                פלטפורמת בניית אתרים מתקדמת עם תבניות מקצועיות ואדיטור חכם
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">תבניות</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">עסקים</a></li>
                <li><a href="#" className="hover:text-blue-600">מסעדות</a></li>
                <li><a href="#" className="hover:text-blue-600">חנויות</a></li>
                <li><a href="#" className="hover:text-blue-600">פורטפוליו</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">תמיכה</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">מרכז עזרה</a></li>
                <li><a href="#" className="hover:text-blue-600">צור קשר</a></li>
                <li><a href="#" className="hover:text-blue-600">מדריכים</a></li>
                <li><a href="#" className="hover:text-blue-600">קהילה</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">חברה</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">אודות</a></li>
                <li><a href="#" className="hover:text-blue-600">בלוג</a></li>
                <li><a href="#" className="hover:text-blue-600">קריירה</a></li>
                <li><a href="#" className="hover:text-blue-600">תנאי שימוש</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2024 WebMaster Pro. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
