<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🚀 Ultimate Website Editor</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #0f172a;
            color: white;
            overflow: hidden;
            height: 100vh;
        }

        .editor-container {
            display: flex;
            height: 100vh;
        }

        /* Header */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #1e293b;
            border-bottom: 1px solid #374151;
            padding: 12px 20px;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
        }

        .logo {
            font-size: 20px;
            font-weight: bold;
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .viewport-selector {
            display: flex;
            background: #374151;
            border-radius: 8px;
            padding: 4px;
        }

        .viewport-btn {
            padding: 8px 16px;
            border: none;
            background: transparent;
            color: #9ca3af;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 12px;
        }

        .viewport-btn.active {
            background: #3b82f6;
            color: white;
        }

        .export-btn {
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: transform 0.2s;
        }

        .export-btn:hover {
            transform: scale(1.05);
        }

        /* Sidebar */
        .sidebar {
            width: 280px;
            background: #1e293b;
            border-right: 1px solid #374151;
            padding: 20px;
            overflow-y: auto;
            margin-top: 60px;
        }

        .sidebar h3 {
            margin-bottom: 15px;
            color: #e5e7eb;
            font-size: 16px;
        }

        .tool-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 30px;
        }

        .tool-btn {
            background: #374151;
            border: 1px solid #4b5563;
            color: white;
            padding: 15px 10px;
            border-radius: 8px;
            cursor: pointer;
            text-align: center;
            transition: all 0.2s;
            font-size: 12px;
        }

        .tool-btn:hover {
            background: #4b5563;
            transform: translateY(-2px);
        }

        .template-btn {
            width: 100%;
            background: #1f2937;
            border: 1px solid #374151;
            color: white;
            padding: 15px;
            border-radius: 8px;
            cursor: pointer;
            text-align: right;
            margin-bottom: 10px;
            transition: all 0.2s;
        }

        .template-btn:hover {
            background: #374151;
        }

        /* Canvas */
        .canvas-area {
            flex: 1;
            background: #f1f5f9;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 60px;
            overflow: auto;
            padding: 20px;
        }

        .canvas {
            background: white;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            position: relative;
            transition: all 0.3s;
            background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
            background-size: 20px 20px;
        }

        .canvas.desktop { width: 1200px; height: 800px; }
        .canvas.tablet { width: 768px; height: 1024px; }
        .canvas.mobile { width: 375px; height: 667px; }

        /* Elements */
        .element {
            position: absolute;
            cursor: move;
            user-select: none;
            transition: all 0.1s;
            border: 2px solid transparent;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .element:hover {
            border-color: #93c5fd;
        }

        .element.selected {
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }

        /* Properties Panel */
        .properties {
            width: 280px;
            background: #1e293b;
            border-left: 1px solid #374151;
            padding: 20px;
            overflow-y: auto;
            margin-top: 60px;
        }

        .prop-group {
            margin-bottom: 20px;
        }

        .prop-group h4 {
            color: #e5e7eb;
            margin-bottom: 10px;
            font-size: 14px;
        }

        .prop-input {
            width: 100%;
            background: #374151;
            border: 1px solid #4b5563;
            color: white;
            padding: 8px 10px;
            border-radius: 4px;
            margin-bottom: 8px;
            font-size: 12px;
        }

        .prop-input:focus {
            outline: none;
            border-color: #3b82f6;
        }

        .color-input-group {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .color-picker {
            width: 40px;
            height: 32px;
            border: 1px solid #4b5563;
            border-radius: 4px;
            cursor: pointer;
        }

        .range-input {
            width: 100%;
            margin: 8px 0;
        }

        .delete-btn {
            width: 100%;
            background: #dc2626;
            border: none;
            color: white;
            padding: 10px;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 15px;
        }

        .delete-btn:hover {
            background: #b91c1c;
        }

        /* Empty State */
        .empty-state {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #6b7280;
            pointer-events: none;
        }

        .empty-state h3 {
            font-size: 24px;
            margin-bottom: 10px;
        }

        /* Video Element */
        .video-placeholder {
            background: linear-gradient(135deg, #1f2937, #000);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            font-size: 14px;
        }

        .video-placeholder .video-icon {
            font-size: 32px;
            margin-bottom: 8px;
        }

        /* Image Placeholder */
        .image-placeholder {
            background: #f3f4f6;
            border: 2px dashed #d1d5db;
            color: #6b7280;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
        }

        .image-placeholder .image-icon {
            font-size: 32px;
            margin-bottom: 8px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .editor-container {
                flex-direction: column;
            }
            .sidebar, .properties {
                width: 100%;
                height: 200px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">🚀 Ultimate Website Editor</div>
        <div class="viewport-selector">
            <button class="viewport-btn active" data-viewport="desktop">🖥️ Desktop</button>
            <button class="viewport-btn" data-viewport="tablet">📱 Tablet</button>
            <button class="viewport-btn" data-viewport="mobile">📱 Mobile</button>
        </div>
        <button class="export-btn" onclick="exportHTML()">📤 ייצא אתר</button>
    </div>

    <div class="editor-container">
        <!-- Sidebar -->
        <div class="sidebar">
            <h3>🛠️ כלי עיצוב</h3>
            <div class="tool-grid">
                <button class="tool-btn" onclick="createElement('heading')">
                    📝<br>כותרת
                </button>
                <button class="tool-btn" onclick="createElement('text')">
                    📄<br>טקסט
                </button>
                <button class="tool-btn" onclick="createElement('button')">
                    🔘<br>כפתור
                </button>
                <button class="tool-btn" onclick="createElement('image')">
                    🖼️<br>תמונה
                </button>
                <button class="tool-btn" onclick="createElement('video')">
                    🎬<br>וידאו
                </button>
                <button class="tool-btn" onclick="createElement('shape')">
                    ⬜<br>צורה
                </button>
            </div>

            <h3>🎨 תבניות מוכנות</h3>
            <button class="template-btn" onclick="loadHeroTemplate()">
                🎯 Hero Section מושלם
            </button>
            <button class="template-btn" onclick="loadContactTemplate()">
                📧 טופס יצירת קשר
            </button>
            <button class="template-btn" onclick="loadGalleryTemplate()">
                🖼️ גלריית תמונות
            </button>
        </div>

        <!-- Canvas -->
        <div class="canvas-area">
            <div class="canvas desktop" id="canvas">
                <div class="empty-state">
                    <div style="font-size: 48px; margin-bottom: 15px;">🎨</div>
                    <h3>האדיטור הכי מטורף!</h3>
                    <p>בחר כלי או תבנית כדי להתחיל</p>
                    <div style="margin-top: 15px; font-size: 12px;">
                        <p>💡 גרור אלמנטים למיקום</p>
                        <p>🎯 לחץ לבחירה ועריכה</p>
                        <p>📱 רספונסיבי לכל מכשיר</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Properties Panel -->
        <div class="properties">
            <h3>⚙️ מאפיינים</h3>
            <div id="properties-content">
                <div style="text-align: center; padding: 40px 0; color: #6b7280;">
                    <div style="font-size: 32px; margin-bottom: 10px;">🎯</div>
                    <p>בחר אלמנט לעריכה</p>
                    <div style="margin-top: 10px; font-size: 11px;">
                        <p>💡 טיפים:</p>
                        <p>• גרור כדי להזיז</p>
                        <p>• לחץ לבחירה</p>
                        <p>• עדכן תוכן ועיצוב</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        let elements = [];
        let selectedElement = null;
        let currentViewport = 'desktop';
        let isDragging = false;
        let dragOffset = { x: 0, y: 0 };
        let elementCounter = 0;

        // Element Templates
        const templates = {
            heading: {
                type: 'text',
                content: 'כותרת ראשית',
                width: 400,
                height: 60,
                style: {
                    fontSize: '32px',
                    fontWeight: '700',
                    color: '#1f2937',
                    backgroundColor: 'transparent',
                    padding: '15px',
                    borderRadius: '0px',
                    textAlign: 'center'
                }
            },
            text: {
                type: 'text',
                content: 'טקסט חדש',
                width: 300,
                height: 50,
                style: {
                    fontSize: '16px',
                    fontWeight: '400',
                    color: '#374151',
                    backgroundColor: 'transparent',
                    padding: '10px',
                    borderRadius: '0px',
                    textAlign: 'right'
                }
            },
            button: {
                type: 'button',
                content: 'לחץ כאן',
                width: 150,
                height: 50,
                style: {
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#ffffff',
                    backgroundColor: '#3b82f6',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    cursor: 'pointer'
                }
            },
            image: {
                type: 'image',
                content: '',
                src: '',
                width: 300,
                height: 200,
                style: {
                    backgroundColor: '#f3f4f6',
                    borderRadius: '8px'
                }
            },
            video: {
                type: 'video',
                content: '',
                videoUrl: '',
                width: 560,
                height: 315,
                style: {
                    backgroundColor: '#000000',
                    borderRadius: '12px'
                }
            },
            shape: {
                type: 'shape',
                content: '',
                width: 200,
                height: 100,
                style: {
                    backgroundColor: '#3b82f6',
                    borderRadius: '8px'
                }
            }
        };

        // Create Element
        function createElement(type) {
            const template = templates[type];
            const canvas = document.getElementById('canvas');
            const canvasRect = canvas.getBoundingClientRect();
            
            const element = {
                ...JSON.parse(JSON.stringify(template)),
                id: `element_${++elementCounter}`,
                x: 50 + Math.random() * 200,
                y: 50 + Math.random() * 200,
                zIndex: elements.length + 1
            };

            elements.push(element);
            renderElement(element);
            selectElement(element);
            hideEmptyState();
        }

        // Render Element
        function renderElement(element) {
            const canvas = document.getElementById('canvas');
            const div = document.createElement('div');
            div.className = 'element';
            div.id = element.id;
            div.style.left = element.x + 'px';
            div.style.top = element.y + 'px';
            div.style.width = element.width + 'px';
            div.style.height = element.height + 'px';
            div.style.zIndex = element.zIndex;
            
            // Apply styles
            Object.assign(div.style, element.style);

            // Content based on type
            if (element.type === 'video') {
                if (element.videoUrl) {
                    const videoId = extractYouTubeId(element.videoUrl);
                    if (videoId) {
                        div.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" 
                            style="width: 100%; height: 100%; border: none; border-radius: ${element.style.borderRadius};"
                            allowfullscreen></iframe>`;
                    } else {
                        div.innerHTML = `<video src="${element.videoUrl}" style="width: 100%; height: 100%; border-radius: ${element.style.borderRadius};" controls></video>`;
                    }
                } else {
                    div.innerHTML = `<div class="video-placeholder"><div class="video-icon">🎬</div><div>הוסף URL וידאו</div></div>`;
                }
            } else if (element.type === 'image') {
                if (element.src) {
                    div.innerHTML = `<img src="${element.src}" style="width: 100%; height: 100%; object-fit: cover; border-radius: ${element.style.borderRadius};" alt="תמונה">`;
                } else {
                    div.innerHTML = `<div class="image-placeholder"><div class="image-icon">🖼️</div><div>הוסף תמונה</div></div>`;
                }
            } else {
                div.textContent = element.content;
            }

            // Event listeners
            div.addEventListener('mousedown', (e) => handleMouseDown(e, element));
            div.addEventListener('click', (e) => {
                e.stopPropagation();
                selectElement(element);
            });

            canvas.appendChild(div);
        }

        // Mouse Events
        function handleMouseDown(e, element) {
            e.preventDefault();
            e.stopPropagation();
            
            isDragging = true;
            const rect = document.getElementById('canvas').getBoundingClientRect();
            dragOffset.x = e.clientX - rect.left - element.x;
            dragOffset.y = e.clientY - rect.top - element.y;
            
            selectElement(element);
        }

        document.addEventListener('mousemove', (e) => {
            if (!isDragging || !selectedElement) return;
            
            const canvas = document.getElementById('canvas');
            const rect = canvas.getBoundingClientRect();
            const newX = e.clientX - rect.left - dragOffset.x;
            const newY = e.clientY - rect.top - dragOffset.y;
            
            const maxX = canvas.offsetWidth - selectedElement.width;
            const maxY = canvas.offsetHeight - selectedElement.height;
            
            selectedElement.x = Math.max(0, Math.min(newX, maxX));
            selectedElement.y = Math.max(0, Math.min(newY, maxY));
            
            updateElementPosition(selectedElement);
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Select Element
        function selectElement(element) {
            // Remove previous selection
            document.querySelectorAll('.element').forEach(el => el.classList.remove('selected'));
            
            selectedElement = element;
            document.getElementById(element.id).classList.add('selected');
            renderProperties(element);
        }

        // Update Element Position
        function updateElementPosition(element) {
            const div = document.getElementById(element.id);
            div.style.left = element.x + 'px';
            div.style.top = element.y + 'px';
        }

        // Render Properties Panel
        function renderProperties(element) {
            const content = document.getElementById('properties-content');
            content.innerHTML = `
                <div class="prop-group">
                    <h4>🎯 אלמנט נבחר</h4>
                    <p style="color: #9ca3af; font-size: 12px;">${element.type} - ${element.id}</p>
                </div>

                ${element.type !== 'image' && element.type !== 'video' && element.type !== 'shape' ? `
                <div class="prop-group">
                    <h4>📝 תוכן</h4>
                    <textarea class="prop-input" rows="3" onchange="updateElement('content', this.value)">${element.content}</textarea>
                </div>
                ` : ''}

                ${element.type === 'video' ? `
                <div class="prop-group">
                    <h4>🎬 URL וידאו</h4>
                    <input type="url" class="prop-input" placeholder="https://www.youtube.com/watch?v=..." 
                           value="${element.videoUrl || ''}" onchange="updateElement('videoUrl', this.value)">
                    <small style="color: #6b7280; font-size: 10px;">תומך ב-YouTube, Vimeo וקבצי וידאו</small>
                </div>
                ` : ''}

                ${element.type === 'image' ? `
                <div class="prop-group">
                    <h4>🖼️ URL תמונה</h4>
                    <input type="url" class="prop-input" placeholder="https://example.com/image.jpg" 
                           value="${element.src || ''}" onchange="updateElement('src', this.value)">
                </div>
                ` : ''}

                <div class="prop-group">
                    <h4>📐 מיקום וגודל</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                        <div>
                            <label style="font-size: 10px; color: #9ca3af;">X</label>
                            <input type="number" class="prop-input" value="${Math.round(element.x)}" 
                                   onchange="updateElement('x', parseInt(this.value))">
                        </div>
                        <div>
                            <label style="font-size: 10px; color: #9ca3af;">Y</label>
                            <input type="number" class="prop-input" value="${Math.round(element.y)}" 
                                   onchange="updateElement('y', parseInt(this.value))">
                        </div>
                        <div>
                            <label style="font-size: 10px; color: #9ca3af;">רוחב</label>
                            <input type="number" class="prop-input" value="${element.width}" 
                                   onchange="updateElement('width', parseInt(this.value))">
                        </div>
                        <div>
                            <label style="font-size: 10px; color: #9ca3af;">גובה</label>
                            <input type="number" class="prop-input" value="${element.height}" 
                                   onchange="updateElement('height', parseInt(this.value))">
                        </div>
                    </div>
                </div>

                <div class="prop-group">
                    <h4>🎨 צבעים</h4>
                    <div style="margin-bottom: 10px;">
                        <label style="font-size: 11px; color: #9ca3af;">צבע רקע</label>
                        <div class="color-input-group">
                            <input type="color" class="color-picker" value="${element.style.backgroundColor || '#ffffff'}" 
                                   onchange="updateElementStyle('backgroundColor', this.value)">
                            <input type="text" class="prop-input" value="${element.style.backgroundColor || '#ffffff'}" 
                                   onchange="updateElementStyle('backgroundColor', this.value)" style="flex: 1;">
                        </div>
                    </div>
                    ${element.type !== 'image' && element.type !== 'video' && element.type !== 'shape' ? `
                    <div>
                        <label style="font-size: 11px; color: #9ca3af;">צבע טקסט</label>
                        <div class="color-input-group">
                            <input type="color" class="color-picker" value="${element.style.color || '#000000'}" 
                                   onchange="updateElementStyle('color', this.value)">
                            <input type="text" class="prop-input" value="${element.style.color || '#000000'}" 
                                   onchange="updateElementStyle('color', this.value)" style="flex: 1;">
                        </div>
                    </div>
                    ` : ''}
                </div>

                ${element.type !== 'image' && element.type !== 'video' && element.type !== 'shape' ? `
                <div class="prop-group">
                    <h4>🔤 טיפוגרפיה</h4>
                    <div style="margin-bottom: 8px;">
                        <label style="font-size: 11px; color: #9ca3af;">גודל גופן</label>
                        <select class="prop-input" onchange="updateElementStyle('fontSize', this.value)">
                            <option value="12px" ${element.style.fontSize === '12px' ? 'selected' : ''}>12px - קטן</option>
                            <option value="14px" ${element.style.fontSize === '14px' ? 'selected' : ''}>14px - רגיל קטן</option>
                            <option value="16px" ${element.style.fontSize === '16px' ? 'selected' : ''}>16px - רגיל</option>
                            <option value="20px" ${element.style.fontSize === '20px' ? 'selected' : ''}>20px - גדול קטן</option>
                            <option value="24px" ${element.style.fontSize === '24px' ? 'selected' : ''}>24px - גדול</option>
                            <option value="32px" ${element.style.fontSize === '32px' ? 'selected' : ''}>32px - כותרת</option>
                            <option value="48px" ${element.style.fontSize === '48px' ? 'selected' : ''}>48px - כותרת גדולה</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size: 11px; color: #9ca3af;">עובי גופן</label>
                        <select class="prop-input" onchange="updateElementStyle('fontWeight', this.value)">
                            <option value="300" ${element.style.fontWeight === '300' ? 'selected' : ''}>300 - דק</option>
                            <option value="400" ${element.style.fontWeight === '400' ? 'selected' : ''}>400 - רגיל</option>
                            <option value="600" ${element.style.fontWeight === '600' ? 'selected' : ''}>600 - בולט</option>
                            <option value="700" ${element.style.fontWeight === '700' ? 'selected' : ''}>700 - עבה</option>
                        </select>
                    </div>
                </div>
                ` : ''}

                <div class="prop-group">
                    <h4>🔘 עיצוב</h4>
                    <label style="font-size: 11px; color: #9ca3af;">עיגול פינות</label>
                    <input type="range" class="range-input" min="0" max="50" 
                           value="${parseInt(element.style.borderRadius) || 0}"
                           onchange="updateElementStyle('borderRadius', this.value + 'px')">
                    <div style="text-align: center; font-size: 10px; color: #6b7280;">
                        ${element.style.borderRadius || '0px'}
                    </div>
                </div>

                <button class="delete-btn" onclick="deleteElement('${element.id}')">
                    🗑️ מחק אלמנט
                </button>
            `;
        }

        // Update Element
        function updateElement(property, value) {
            if (!selectedElement) return;
            
            selectedElement[property] = value;
            
            if (property === 'width' || property === 'height') {
                const div = document.getElementById(selectedElement.id);
                div.style[property] = value + 'px';
            } else if (property === 'x' || property === 'y') {
                updateElementPosition(selectedElement);
            } else {
                // Re-render element for content changes
                const div = document.getElementById(selectedElement.id);
                div.remove();
                renderElement(selectedElement);
                selectElement(selectedElement);
            }
        }

        // Update Element Style
        function updateElementStyle(property, value) {
            if (!selectedElement) return;
            
            selectedElement.style[property] = value;
            const div = document.getElementById(selectedElement.id);
            div.style[property] = value;
        }

        // Delete Element
        function deleteElement(id) {
            elements = elements.filter(el => el.id !== id);
            document.getElementById(id).remove();
            selectedElement = null;
            document.getElementById('properties-content').innerHTML = `
                <div style="text-align: center; padding: 40px 0; color: #6b7280;">
                    <div style="font-size: 32px; margin-bottom: 10px;">🎯</div>
                    <p>בחר אלמנט לעריכה</p>
                </div>
            `;
            
            if (elements.length === 0) {
                showEmptyState();
            }
        }

        // Viewport Selection
        document.querySelectorAll('.viewport-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.viewport-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentViewport = btn.dataset.viewport;
                
                const canvas = document.getElementById('canvas');
                canvas.className = `canvas ${currentViewport}`;
            });
        });

        // Templates
        function loadHeroTemplate() {
            const heroElements = [
                {
                    ...JSON.parse(JSON.stringify(templates.heading)),
                    id: `element_${++elementCounter}`,
                    content: 'ברוכים הבאים לאתר שלנו',
                    x: 100,
                    y: 100,
                    width: 600,
                    height: 80,
                    zIndex: 1,
                    style: {
                        ...templates.heading.style,
                        fontSize: '48px',
                        textAlign: 'center'
                    }
                },
                {
                    ...JSON.parse(JSON.stringify(templates.text)),
                    id: `element_${++elementCounter}`,
                    content: 'פתרונות מתקדמים ומקצועיים לעסק שלך',
                    x: 100,
                    y: 200,
                    width: 600,
                    height: 50,
                    zIndex: 2,
                    style: {
                        ...templates.text.style,
                        fontSize: '20px',
                        textAlign: 'center',
                        color: '#6b7280'
                    }
                },
                {
                    ...JSON.parse(JSON.stringify(templates.button)),
                    id: `element_${++elementCounter}`,
                    content: 'התחל עכשיו',
                    x: 300,
                    y: 280,
                    width: 200,
                    height: 60,
                    zIndex: 3,
                    style: {
                        ...templates.button.style,
                        fontSize: '18px',
                        backgroundColor: '#10b981'
                    }
                }
            ];

            heroElements.forEach(element => {
                elements.push(element);
                renderElement(element);
            });
            hideEmptyState();
        }

        function loadContactTemplate() {
            const contactElements = [
                {
                    ...JSON.parse(JSON.stringify(templates.heading)),
                    id: `element_${++elementCounter}`,
                    content: 'צור קשר',
                    x: 50,
                    y: 50,
                    width: 300,
                    height: 60,
                    zIndex: 1,
                    style: {
                        ...templates.heading.style,
                        fontSize: '32px'
                    }
                },
                {
                    ...JSON.parse(JSON.stringify(templates.shape)),
                    id: `element_${++elementCounter}`,
                    x: 50,
                    y: 130,
                    width: 350,
                    height: 40,
                    zIndex: 2,
                    style: {
                        backgroundColor: '#ffffff',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px'
                    }
                },
                {
                    ...JSON.parse(JSON.stringify(templates.shape)),
                    id: `element_${++elementCounter}`,
                    x: 50,
                    y: 180,
                    width: 350,
                    height: 40,
                    zIndex: 3,
                    style: {
                        backgroundColor: '#ffffff',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px'
                    }
                },
                {
                    ...JSON.parse(JSON.stringify(templates.button)),
                    id: `element_${++elementCounter}`,
                    content: 'שלח הודעה',
                    x: 50,
                    y: 240,
                    width: 150,
                    height: 45,
                    zIndex: 4
                }
            ];

            contactElements.forEach(element => {
                elements.push(element);
                renderElement(element);
            });
            hideEmptyState();
        }

        function loadGalleryTemplate() {
            const galleryElements = [
                {
                    ...JSON.parse(JSON.stringify(templates.heading)),
                    id: `element_${++elementCounter}`,
                    content: 'הגלריה שלנו',
                    x: 100,
                    y: 50,
                    width: 400,
                    height: 60,
                    zIndex: 1
                }
            ];

            // Add 6 image placeholders
            for (let i = 0; i < 6; i++) {
                const row = Math.floor(i / 3);
                const col = i % 3;
                galleryElements.push({
                    ...JSON.parse(JSON.stringify(templates.image)),
                    id: `element_${++elementCounter}`,
                    x: 50 + col * 180,
                    y: 130 + row * 160,
                    width: 160,
                    height: 140,
                    zIndex: i + 2
                });
            }

            galleryElements.forEach(element => {
                elements.push(element);
                renderElement(element);
            });
            hideEmptyState();
        }

        // Utility Functions
        function extractYouTubeId(url) {
            const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
            return match ? match[1] : null;
        }

        function hideEmptyState() {
            const emptyState = document.querySelector('.empty-state');
            if (emptyState) emptyState.style.display = 'none';
        }

        function showEmptyState() {
            const emptyState = document.querySelector('.empty-state');
            if (emptyState) emptyState.style.display = 'block';
        }

        // Export HTML
        function exportHTML() {
            const viewportSizes = {
                desktop: { width: 1200, height: 800 },
                tablet: { width: 768, height: 1024 },
                mobile: { width: 375, height: 667 }
            };

            const size = viewportSizes[currentViewport];
            
            const html = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>אתר נוצר עם Ultimate Editor</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #ffffff;
            overflow-x: hidden;
        }
        .container { 
            position: relative; 
            width: ${size.width}px; 
            height: ${size.height}px;
            margin: 0 auto;
            background: #ffffff;
        }
        .element { position: absolute; }
        @media (max-width: 768px) {
            .container { width: 100%; }
            .element { position: relative !important; margin: 10px 0; }
        }
    </style>
</head>
<body>
    <div class="container">
        ${elements.map(el => {
            if (el.type === 'video' && el.videoUrl) {
                const videoId = extractYouTubeId(el.videoUrl);
                if (videoId) {
                    return `<iframe class="element" src="https://www.youtube.com/embed/${videoId}" style="
                        left: ${el.x}px; top: ${el.y}px; 
                        width: ${el.width}px; height: ${el.height}px;
                        border: none; border-radius: ${el.style.borderRadius};
                    " allowfullscreen></iframe>`;
                } else {
                    return `<video class="element" src="${el.videoUrl}" style="
                        left: ${el.x}px; top: ${el.y}px;
                        width: ${el.width}px; height: ${el.height}px;
                        border-radius: ${el.style.borderRadius};
                    " controls></video>`;
                }
            }
            
            if (el.type === 'image' && el.src) {
                return `<img class="element" src="${el.src}" style="
                    left: ${el.x}px; top: ${el.y}px;
                    width: ${el.width}px; height: ${el.height}px;
                    ${Object.entries(el.style).map(([k,v]) => 
                        `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${v}`
                    ).join('; ')};
                " alt="${el.content || 'תמונה'}" />`;
            }
            
            return `<div class="element" style="
                left: ${el.x}px; top: ${el.y}px;
                width: ${el.width}px; height: ${el.height}px;
                ${Object.entries(el.style).map(([k,v]) => 
                    `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${v}`
                ).join('; ')};
                display: flex; align-items: center; justify-content: center;
            ">${el.content || ''}</div>`;
        }).join('')}
    </div>
</body>
</html>`;
            
            const blob = new Blob([html], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ultimate-website-${Date.now()}.html`;
            a.click();
            URL.revokeObjectURL(url);
            
            alert('🎉 האתר יוצא בהצלחה! הקובץ הורד למחשב שלך.');
        }

        // Canvas Click to Deselect
        document.getElementById('canvas').addEventListener('click', (e) => {
            if (e.target.id === 'canvas') {
                selectedElement = null;
                document.querySelectorAll('.element').forEach(el => el.classList.remove('selected'));
                document.getElementById('properties-content').innerHTML = `
                    <div style="text-align: center; padding: 40px 0; color: #6b7280;">
                        <div style="font-size: 32px; margin-bottom: 10px;">🎯</div>
                        <p>בחר אלמנט לעריכה</p>
                        <div style="margin-top: 10px; font-size: 11px;">
                            <p>💡 טיפים:</p>
                            <p>• גרור כדי להזיז</p>
                            <p>• לחץ לבחירה</p>
                            <p>• עדכן תוכן ועיצוב</p>
                        </div>
                    </div>
                `;
            }
        });

        // Keyboard Shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Delete' && selectedElement) {
                deleteElement(selectedElement.id);
            }
        });

        console.log('🚀 Ultimate Website Editor נטען בהצלחה!');
        console.log('💡 טיפים: גרור אלמנטים, לחץ לבחירה, Delete למחיקה');
    </script>
</body>
</html>
