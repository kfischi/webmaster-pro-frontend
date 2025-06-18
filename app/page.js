export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-8">
          🚀 WebMaster Pro
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          צור אתרים מקצועיים עם AI מתקדם
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="/editor" 
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            🎨 לאדיטור
          </a>
          <a 
            href="#" 
            className="bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-medium border-2 border-gray-200 hover:border-blue-300 transition-all"
          >
            📞 צור קשר
          </a>
        </div>
      </div>
    </div>
  );
}
