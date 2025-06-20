'use client';

import React, { useState } from 'react';
import { Brain, Layout, Sparkles, Video, Image, Type, Save, Download } from 'lucide-react';

export default function AdvancedEditor() {
  const [selectedTab, setSelectedTab] = useState('ai');
  const [aiPrompt, setAiPrompt] = useState('');
  const [elements, setElements] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // רכיבים בסיסיים
  const components = [
    { id: 'hero', name: 'Hero עם וידאו', icon: Video },
    { id: 'gallery', name: 'גלריה', icon: Image },
    { id: 'text', name: 'טקסט', icon: Type }
  ];

  // תבניות
  const templates = [
    { id: 'barber', name: 'מספרה יוקרתית', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=300' },
    { id: 'gym', name: 'חדר כושר', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300' },
    { id: 'lawyer', name: 'עורך דין', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300' }
  ];

  // הוספת אלמנט
  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type: type,
      content: `אלמנט ${type} חדש`
    };
    setElements([...elements, newElement]);
  };

  // AI Generator
  const generateWithAI = () => {
    if (!aiPrompt.trim()) return;
    
    setIsGenerating(true);
    setTimeout(() => {
      const newElement = {
        id: Date.now(),
        type: 'ai-generated',
        content: `תוכן שנוצר עם AI: ${aiPrompt}`
      };
      setElements([...elements, newElement]);
      setIsGenerating(false);
      setAiPrompt('');
    }, 2000);
  };

  // טעינת תבנית
  const loadTemplate = (templateId) => {
    const templateElements = [
      { id: Date.now(), type: 'hero', content: `Hero Section - ${templateId}` },
      { id: Date.now() + 1, type: 'gallery', content: `גלריה - ${templateId}` }
    ];
    setElements(templateElements);
  };

  return (
    <div className="h-screen flex bg-slate-900 text-white">
      {/* Left Panel */}
      <div className="w-80 bg-slate-800 border-r border-slate-700">
        {/* Header */}
        <div className="p-4 border-b border-slate-700">
          <h1 className="text-xl font-bold flex items-center">
            <Sparkles className="mr-2 text-blue-500" size={24} />
            WebMaster Pro
          </h1>
          <p className="text-sm opacity-70">Advanced Builder</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-700">
          {[
            { id: 'ai', label: 'AI', icon: Brain },
            { id: 'components', label: 'רכיבים', icon: Layout },
            { id: 'templates', label: 'תבניות', icon: Sparkles }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex-1 p-3 text-center border-b-2 transition-colors ${
                selectedTab === tab.id 
                  ? 'border-blue-500 text-blue-500' 
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <tab.icon size={18} className="mx-auto mb-1" />
              <div className="text-xs">{tab.label}</div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-4 h-full overflow-y-auto">
          {/* AI Tab */}
          {selectedTab === 'ai' && (
            <div className="space-y-4">
              <div className="text-center">
                <Brain className="mx-auto mb-2 text-purple-500" size={32} />
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-sm opacity-70">יצירת תוכן עם AI</p>
              </div>
              
              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="תאר מה אתה רוצה ליצור..."
                className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 resize-none"
                rows={4}
              />
              
              <button
                onClick={generateWithAI}
                disabled={isGenerating || !aiPrompt.trim()}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white p-3 rounded-lg hover:from-purple-600 hover:to-pink-700 disabled:opacity-50"
              >
                {isGenerating ? 'יוצר...' : 'צור עם AI'}
              </button>

              <div className="space-y-2">
                <h4 className="font-medium">דוגמאות:</h4>
                {[
                  "צור hero section למספרה",
                  "הוסף גלריית תמונות",
                  "צור מקטע שירותים"
                ].map((example, idx) => (
                  <button
                    key={idx}
                    onClick={() => setAiPrompt(example)}
                    className="w-full text-left p-2 rounded text-sm hover:bg-slate-700"
                  >
                    • {example}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Components Tab */}
          {selectedTab === 'components' && (
            <div className="space-y-4">
              <div className="text-center">
                <Layout className="mx-auto mb-2 text-green-500" size={32} />
                <h3 className="font-semibold">רכיבים</h3>
                <p className="text-sm opacity-70">גרור והשחרר</p>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {components.map(component => (
                  <button
                    key={component.id}
                    onClick={() => addElement(component.id)}
                    className="p-4 rounded-lg border-2 border-dashed border-slate-600 hover:border-blue-500 hover:bg-slate-700 transition-all"
                  >
                    <component.icon className="mx-auto mb-2" size={24} />
                    <div className="text-sm font-medium">{component.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Templates Tab */}
          {selectedTab === 'templates' && (
            <div className="space-y-4">
              <div className="text-center">
                <Sparkles className="mx-auto mb-2 text-yellow-500" size={32} />
                <h3 className="font-semibold">תבניות</h3>
                <p className="text-sm opacity-70">ברמה עולמית</p>
              </div>
              
              <div className="space-y-3">
                {templates.map(template => (
                  <div
                    key={template.id}
                    onClick={() => loadTemplate(template.id)}
                    className="rounded-lg border border-slate-600 overflow-hidden cursor-pointer hover:border-yellow-500 transition-all"
                  >
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-3">
                      <h4 className="font-medium text-sm">{template.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Canvas */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="bg-slate-800 border-b border-slate-700 p-3 flex justify-between items-center">
          <h2 className="text-lg font-semibold">העורך המתקדם</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center space-x-2">
              <Save size={16} />
              <span>שמור</span>
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center space-x-2">
              <Download size={16} />
              <span>ייצא</span>
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl min-h-96 p-8">
            {elements.length === 0 ? (
              <div className="text-center text-gray-500 py-20">
                <Sparkles className="mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-2">התחל ליצור</h3>
                <p>השתמש ב-AI, רכיבים או תבניות כדי להתחיל</p>
              </div>
            ) : (
              <div className="space-y-6">
                {elements.map(element => (
                  <div
                    key={element.id}
                    className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">{element.type}</span>
                      <button
                        onClick={() => setElements(elements.filter(el => el.id !== element.id))}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        מחק
                      </button>
                    </div>
                    <div className="text-gray-800">{element.content}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
