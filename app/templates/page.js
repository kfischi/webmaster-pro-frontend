<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔥 גלריית תבניות ברמה הכי גבוהה</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 30%, #f093fb 70%, #f5576c 100%);
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }

        /* Animated Background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.4) 0%, transparent 50%);
            animation: float 20s ease-in-out infinite;
            z-index: -1;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(2deg); }
            66% { transform: translateY(10px) rotate(-2deg); }
        }

        /* Glassmorphism Container */
        .glass-container {
            backdrop-filter: blur(20px);
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            min-height: 100vh;
        }

        /* Header */
        .header {
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(30px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-content {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header h1 {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 4px 20px rgba(255,255,255,0.3);
            letter-spacing: -0.02em;
        }

        .header-stats {
            display: flex;
            gap: 30px;
            color: rgba(255,255,255,0.9);
            font-size: 1.2rem;
            font-weight: 600;
        }

        .stat-item {
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(255,255,255,0.15);
            padding: 12px 20px;
            border-radius: 25px;
            backdrop-filter: blur(10px);
        }

        /* Search Section */
        .search-section {
            padding: 50px 40px;
            background: rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .search-content {
            max-width: 1400px;
            margin: 0 auto;
        }

        .search-bar {
            width: 100%;
            max-width: 600px;
            margin: 0 auto 40px;
            display: block;
            padding: 20px 30px;
            font-size: 1.2rem;
            border: none;
            border-radius: 50px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            color: white;
            outline: none;
            border: 2px solid rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
        }

        .search-bar::placeholder {
            color: rgba(255,255,255,0.7);
        }

        .search-bar:focus {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
            border-color: rgba(255,255,255,0.5);
        }

        .categories {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .category-btn {
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            background: rgba(255, 255, 255, 0.15);
            color: white;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            position: relative;
            overflow: hidden;
        }

        .category-btn:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 10px 30px rgba(255,255,255,0.2);
            border-color: rgba(255,255,255,0.4);
        }

        .category-btn.active {
            background: rgba(255, 255, 255, 0.3);
            border-color: rgba(255, 255, 255, 0.6);
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(255,255,255,0.3);
        }

        /* Templates Grid */
        .templates-section {
            padding: 80px 40px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .templates-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
            gap: 50px;
        }

        .template-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(25px);
            border-radius: 30px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
            cursor: pointer;
            position: relative;
            transform-origin: center bottom;
        }

        .template-card:hover {
            transform: translateY(-20px) scale(1.02) rotateX(5deg);
            box-shadow: 0 40px 80px rgba(0,0,0,0.4);
            background: rgba(255, 255, 255, 0.25);
            border-color: rgba(255, 255, 255, 0.4);
        }

        .template-preview {
            height: 320px;
            position: relative;
            overflow: hidden;
        }

        .template-card:nth-child(1) .template-preview {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .template-card:nth-child(2) .template-preview {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .template-card:nth-child(3) .template-preview {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .template-card:nth-child(4) .template-preview {
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }

        .template-card:nth-child(5) .template-preview {
            background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
        }

        .template-card:nth-child(6) .template-preview {
            background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
        }

        /* Floating Particles */
        .template-preview::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 2px, transparent 2px),
                radial-gradient(circle at 80% 40%, rgba(255,255,255,0.2) 1px, transparent 1px),
                radial-gradient(circle at 40% 80%, rgba(255,255,255,0.25) 1.5px, transparent 1.5px);
            background-size: 60px 60px, 40px 40px, 50px 50px;
            animation: float 20s ease-in-out infinite;
        }

        .price-tag {
            position: absolute;
            top: 25px;
            right: 25px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 1rem;
            font-weight: 700;
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
            backdrop-filter: blur(10px);
        }

        .price-tag.paid {
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        }

        .rating-badge {
            position: absolute;
            top: 25px;
            left: 25px;
            background: rgba(0,0,0,0.5);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            backdrop-filter: blur(15px);
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .template-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .template-card:hover .template-overlay {
            opacity: 1;
        }

        .overlay-buttons {
            display: flex;
            gap: 20px;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        }

        .template-card:hover .overlay-buttons {
            transform: scale(1);
        }

        .btn {
            padding: 15px 25px;
            border: none;
            border-radius: 30px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(20px);
        }

        .btn-preview {
            background: rgba(255,255,255,0.2);
            color: white;
            border: 2px solid white;
        }

        .btn-preview:hover {
            background: white;
            color: #667eea;
            transform: scale(1.05);
        }

        .btn-edit {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }

        .btn-edit:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.6);
        }

        .template-info {
            padding: 40px;
        }

        .template-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
        }

        .template-title {
            font-size: 1.6rem;
            font-weight: 700;
            color: white;
            margin-bottom: 10px;
            text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .template-category {
            background: rgba(255,255,255,0.2);
            color: white;
            padding: 6px 15px;
            border-radius: 15px;
            font-size: 0.9rem;
            font-weight: 500;
            backdrop-filter: blur(10px);
        }

        .template-description {
            color: rgba(255,255,255,0.95);
            font-size: 1.1rem;
            line-height: 1.7;
            margin-bottom: 25px;
            text-shadow: 0 1px 5px rgba(0,0,0,0.3);
        }

        .template-tags {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 25px;
        }

        .tag {
            background: rgba(255,255,255,0.2);
            color: white;
            padding: 6px 12px;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: 500;
            backdrop-filter: blur(10px);
        }

        .template-stats {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: rgba(255,255,255,0.9);
            font-size: 1rem;
        }

        .stats-left {
            display: flex;
            gap: 20px;
        }

        .stats-right {
            background: rgba(255,255,255,0.2);
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 600;
            backdrop-filter: blur(10px);
        }

        /* Modal */
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.95);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            padding: 20px;
            backdrop-filter: blur(20px);
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            background: white;
            border-radius: 25px;
            width: 95%;
            height: 95%;
            position: relative;
            overflow: hidden;
            box-shadow: 0 30px 60px rgba(0,0,0,0.5);
            animation: modalSlideIn 0.4s ease-out;
        }

        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: scale(0.9) translateY(20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        .modal-header {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 25px 35px;
            z-index: 2001;
            display: flex;
            justify-content: space-between;
            align-items: center;
            backdrop-filter: blur(20px);
        }

        .modal-title {
            font-size: 1.4rem;
            font-weight: 600;
        }

        .modal-subtitle {
            opacity: 0.9;
            font-size: 1rem;
            margin-top: 5px;
        }

        .modal-buttons {
            display: flex;
            gap: 15px;
        }

        .modal iframe {
            width: 100%;
            height: 100%;
            border: none;
            padding-top: 90px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .header h1 { font-size: 2rem; }
            .header-stats { flex-direction: column; gap: 15px; }
            .templates-grid { grid-template-columns: 1fr; gap: 30px; }
            .template-card { margin: 0 10px; }
            .categories { flex-direction: column; align-items: center; }
        }

        /* Animation Classes */
        .fade-in {
            animation: fadeInUp 0.8s ease-out forwards;
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
    </style>
</head>
<body>
    <div class="glass-container">
        <!-- Header -->
        <header class="header">
            <div class="header-content">
                <h1>🎨 גלריית תבניות פרימיום</h1>
                <div class="header-stats">
                    <div class="stat-item">
                        <span>⭐</span>
                        <span>4.8</span>
                    </div>
                    <div class="stat-item">
                        <span>📥</span>
                        <span>12,847</span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Search Section -->
        <div class="search-section">
            <div class="search-content">
                <input type="text" class="search-bar" placeholder="🔍 חפש תבניות מתקדמות..." id="searchInput">
                
                <div class="categories">
                    <button class="category-btn active" data-category="הכל">הכל</button>
                    <button class="category-btn" data-category="עסקים">עסקים</button>
                    <button class="category-btn" data-category="מסעדות">מסעדות</button>
                    <button class="category-btn" data-category="חנויות">חנויות</button>
                    <button class="category-btn" data-category="עיצוב">עיצוב</button>
                    <button class="category-btn" data-category="שירותים">שירותים</button>
                    <button class="category-btn" data-category="בריאות">בריאות</button>
                </div>
            </div>
        </div>

        <!-- Templates Grid -->
        <div class="templates-section">
            <div class="templates-grid" id="templatesGrid">
                <!-- Template 1 -->
                <div class="template-card fade-in" data-category="עסקים">
                    <div class="template-preview">
                        <div class="price-tag">חינם</div>
                        <div class="rating-badge">⭐ 4.9</div>
                        <div class="template-overlay">
                            <div class="overlay-buttons">
                                <button class="btn btn-preview" onclick="openPreview('business')">👁️ תצוגה מקדימה</button>
                                <button class="btn btn-edit" onclick="editTemplate('business')">🚀 התחל עריכה</button>
                            </div>
                        </div>
                    </div>
                    <div class="template-info">
                        <div class="template-header">
                            <div>
                                <h3 class="template-title">עסק מקומי מודרני</h3>
                                <div class="template-category">עסקים</div>
                            </div>
                        </div>
                        <p class="template-description">תבנית מתקדמת עם אנימציות וחוויית משתמש מושלמת לעסקים מקומיים</p>
                        <div class="template-tags">
                            <span class="tag">רספונסיבי</span>
                            <span class="tag">SEO מותאם</span>
                            <span class="tag">מהיר</span>
                        </div>
                        <div class="template-stats">
                            <div class="stats-left">
                                <span>📥 2,847</span>
                                <span>⭐ 4.9</span>
                            </div>
                            <div class="stats-right">חינם</div>
                        </div>
                    </div>
                </div>

                <!-- Template 2 -->
                <div class="template-card fade-in" data-category="מסעדות" style="animation-delay: 0.1s">
                    <div class="template-preview">
                        <div class="price-tag paid">₪149</div>
                        <div class="rating-badge">⭐ 4.8</div>
                        <div class="template-overlay">
                            <div class="overlay-buttons">
                                <button class="btn btn-preview" onclick="openPreview('restaurant')">👁️ תצוגה מקדימה</button>
                                <button class="btn btn-edit" onclick="editTemplate('restaurant')">🚀 התחל עריכה</button>
                            </div>
                        </div>
                    </div>
                    <div class="template-info">
                        <div class="template-header">
                            <div>
                                <h3 class="template-title">מסעדה אלגנטית</h3>
                                <div class="template-category">מסעדות</div>
                            </div>
                        </div>
                        <p class="template-description">חוויית קולינרית מושלמת עם עיצוב יוקרתי ותפריט דיגיטלי מתקדם</p>
                        <div class="template-tags">
                            <span class="tag">תפריט דיגיטלי</span>
                            <span class="tag">הזמנות</span>
                            <span class="tag">גלריה</span>
                        </div>
                        <div class="template-stats">
                            <div class="stats-left">
                                <span>📥 1,923</span>
                                <span>⭐ 4.8</span>
                            </div>
                            <div class="stats-right">₪149</div>
                        </div>
                    </div>
                </div>

                <!-- Template 3 -->
                <div class="template-card fade-in" data-category="חנויות" style="animation-delay: 0.2s">
                    <div class="template-preview">
                        <div class="price-tag paid">₪199</div>
                        <div class="rating-badge">⭐ 4.9</div>
                        <div class="template-overlay">
                            <div class="overlay-buttons">
                                <button class="btn btn-preview" onclick="openPreview('shop')">👁️ תצוגה מקדימה</button>
                                <button class="btn btn-edit" onclick="editTemplate('shop')">🚀 התחל עריכה</button>
                            </div>
                        </div>
                    </div>
                    <div class="template-info">
                        <div class="template-header">
                            <div>
                                <h3 class="template-title">חנות אופנה טרנדית</h3>
                                <div class="template-category">חנויות</div>
                            </div>
                        </div>
                        <p class="template-description">קטלוג מוצרים אינטראקטיבי עם חוויית קנייה מתקדמת וסל קניות חכם</p>
                        <div class="template-tags">
                            <span class="tag">סל קניות</span>
                            <span class="tag">תשלומים</span>
                            <span class="tag">מלאי</span>
                        </div>
                        <div class="template-stats">
                            <div class="stats-left">
                                <span>📥 3,156</span>
                                <span>⭐ 4.9</span>
                            </div>
                            <div class="stats-right">₪199</div>
                        </div>
                    </div>
                </div>

                <!-- Template 4 -->
                <div class="template-card fade-in" data-category="עיצוב" style="animation-delay: 0.3s">
                    <div class="template-preview">
                        <div class="price-tag">חינם</div>
                        <div class="rating-badge">⭐ 4.7</div>
                        <div class="template-overlay">
                            <div class="overlay-buttons">
                                <button class="btn btn-preview" onclick="openPreview('design')">👁️ תצוגה מקדימה</button>
                                <button class="btn btn-edit" onclick="editTemplate('design')">🚀 התחל עריכה</button>
                            </div>
                        </div>
                    </div>
                    <div class="template-info">
                        <div class="template-header">
                            <div>
                                <h3 class="template-title">סטודיו לעיצוב</h3>
                                <div class="template-category">עיצוב</div>
                            </div>
                        </div>
                        <p class="template-description">פורטפוליו אינטראקטיבי עם גלריית עבודות מתקדמת ועיצוב מינימלי</p>
                        <div class="template-tags">
                            <span class="tag">פורטפוליו</span>
                            <span class="tag">גלריה</span>
                            <span class="tag">מינימלי</span>
                        </div>
                        <div class="template-stats">
                            <div class="stats-left">
                                <span>📥 1,456</span>
                                <span>⭐ 4.7</span>
                            </div>
                            <div class="stats-right">חינם</div>
                        </div>
                    </div>
                </div>

                <!-- Template 5 -->
                <div class="template-card fade-in" data-category="שירותים" style="animation-delay: 0.4s">
                    <div class="template-preview">
                        <div class="price-tag paid">₪89</div>
                        <div class="rating-badge">⭐ 4.8</div>
                        <div class="template-overlay">
                            <div class="overlay-buttons">
                                <button class="btn btn-preview" onclick="openPreview('consulting')">👁️ תצוגה מקדימה</button>
                                <button class="btn btn-edit" onclick="editTemplate('consulting')">🚀 התחל עריכה</button>
                            </div>
                        </div>
                    </div>
                    <div class="template-info">
                        <div class="template-header">
                            <div>
                                <h3 class="template-title">שירותי ייעוץ מתקדמים</h3>
                                <div class="template-category">שירותים</div>
                            </div>
                        </div>
                        <p class="template-description">פלטפורמה מקצועית לייעוץ עסקי ופיננסי עם מערכת CRM מובנית</p>
                        <div class="template-tags">
                            <span class="tag">CRM</span>
                            <span class="tag">לקוחות</span>
                            <span class="tag">דוחות</span>
                        </div>
                        <div class="template-stats">
                            <div class="stats-left">
                                <span>📥 2,134</span>
                                <span>⭐ 4.8</span>
                            </div>
                            <div class="stats-right">₪89</div>
                        </div>
                    </div>
                </div>

                <!-- Template 6 -->
                <div class="template-card fade-in" data-category="בריאות" style="animation-delay: 0.5s">
                    <div class="template-preview">
                        <div class="price-tag paid">₪249</div>
                        <div class="rating-badge">⭐ 4.9</div>
                        <div class="template-overlay">
                            <div class="overlay-buttons">
                                <button class="btn btn-preview" onclick="openPreview('clinic')">👁️ תצוגה מקדימה</button>
                                <button class="btn
