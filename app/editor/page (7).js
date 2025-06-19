
import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { FaBold, FaItalic, FaUndo, FaRedo, FaSun, FaMoon } from 'react-icons/fa';
import { createApi } from 'unsplash-js';
import { Configuration, OpenAIApi } from 'openai';
import { GoogleFontLoader } from 'react-google-font-loader';

const unsplash = createApi({ accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY });
const openai = new OpenAIApi(new Configuration({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY }));

const SuperEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [grid, setGrid] = useState(false);
  const [layers, setLayers] = useState([]);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [fonts, setFonts] = useState([]);
  const [selectedFont, setSelectedFont] = useState('Roboto');

  useEffect(() => {
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=' + process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY)
      .then(response => response.json())
      .then(data => setFonts(data.items.map(font => font.family)));
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const onChange = (newState) => {
    setEditorState(newState);
    setHistory([...history, editorState]);
  };

  const undo = () => {
    if (history.length > 0) {
      const previousState = history[history.length - 1];
      setRedoStack([editorState, ...redoStack]);
      setEditorState(previousState);
      setHistory(history.slice(0, -1));
    }
  };

  const redo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack[0];
      setHistory([...history, editorState]);
      setEditorState(nextState);
      setRedoStack(redoStack.slice(1));
    }
  };

  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const addLayer = (type) => {
    const newLayer = { id: layers.length, type, content: '' };
    setLayers([...layers, newLayer]);
    setSelectedLayer(newLayer.id);
  };

  const updateLayer = (id, content) => {
    setLayers(layers.map(layer => (layer.id === id ? { ...layer, content } : layer)));
  };

  const generateText = async () => {
    const response = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt: 'Generate a creative text for my website',
      max_tokens: 100,
    });
    const text = response.data.choices[0].text;
    setEditorState(EditorState.createWithContent(ContentState.createFromText(text)));
  };

  const searchImages = async (query) => {
    const response = await unsplash.search.getPhotos({ query });
    const images = response.response.results;
    // Handle images as needed
  };

  return (
    <div className={darkMode ? 'editor dark-mode' : 'editor'}>
      <GoogleFontLoader fonts={[{ font: selectedFont, weights: [400, 700] }]} />
      <div className="toolbar">
        <button onClick={() => toggleInlineStyle('BOLD')}><FaBold /></button>
        <button onClick={() => toggleInlineStyle('ITALIC')}><FaItalic /></button>
        <button onClick={undo}><FaUndo /></button>
        <button onClick={redo}><FaRedo /></button>
        <button onClick={toggleDarkMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
        <button onClick={() => setGrid(!grid)}>Grid</button>
        <button onClick={generateText}>Generate Text</button>
        <button onClick={() => searchImages('nature')}>Search Images</button>
        <select onChange={(e) => setSelectedFont(e.target.value)} value={selectedFont}>
          {fonts.map(font => <option key={font} value={font}>{font}</option>)}
        </select>
      </div>
      <div className="layers-panel">
        {layers.map(layer => (
          <div key={layer.id} onClick={() => setSelectedLayer(layer.id)}>
            {layer.type} - {layer.content}
          </div>
        ))}
        <button onClick={() => addLayer('Text')}>Add Text Layer</button>
        <button onClick={() => addLayer('Image')}>Add Image Layer</button>
      </div>
      <div className="editor-container" style={{ fontFamily: selectedFont }}>
        <Editor editorState={editorState} onChange={onChange} />
        {grid && <div className="grid-overlay"></div>}
      </div>
    </div>
  );
};

export default SuperEditor;
