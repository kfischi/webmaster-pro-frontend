import { useState, useEffect } from 'react'
import { Rnd } from 'react-rnd'
import { v4 as uuidv4 } from 'uuid'

const GRID_SIZE = 20

const animationClasses = {
  'fade-in': 'animate-fadeIn',
  'slide-in-left': 'animate-slideInLeft',
  'slide-in-right': 'animate-slideInRight',
  'zoom-in': 'animate-zoomIn',
  none: '',
}

export default function Editor() {
  const [elements, setElements] = useState([])
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop')

  const snap = (val: number) => Math.round(val / GRID_SIZE) * GRID_SIZE

  const addElement = (type: string) => {
    const id = uuidv4()
    const base = { id, x: 100, y: 100, width: 300, height: 100, type, animation: 'none' }
    if (type === 'text') return setElements([...elements, { ...base, content: 'כותרת חדשה' }])
    if (type === 'image') return setElements([...elements, { ...base, src: '' }])
    if (type === 'video') return setElements([...elements, { ...base, src: '' }])
    if (type === 'form')
      return setElements([
        ...elements,
        {
          ...base,
          fields: [
            { type: 'text', placeholder: 'שם' },
            { type: 'email', placeholder: 'אימייל' },
          ],
          submitText: 'שלח',
        },
      ])
  }

  const updateElement = (id: string, data: any) => {
    setElements((prev) => prev.map((el) => (el.id === id ? { ...el, ...data } : el)))
  }

  const canvasStyle =
    viewMode === 'desktop'
      ? { width: 1024, height: 768, margin: 'auto', position: 'relative', backgroundColor: 'white' }
      : { width: 375, height: 667, margin: 'auto', position: 'relative', backgroundColor: 'white', borderRadius: 16 }

  return (
    <div className="flex h-screen">
      <aside className="w-60 bg-gray-100 p-4 space-y-2">
        <button className="w-full bg-blue-500 text-white p-2 rounded" onClick={() => addElement('text')}>
          הוסף טקסט
        </button>
        <button className="w-full bg-green-600 text-white p-2 rounded" onClick={() => addElement('image')}>
          הוסף תמונה
        </button>
        <button className="w-full bg-purple-600 text-white p-2 rounded" onClick={() => addElement('video')}>
          הוסף וידאו
        </button>
        <button className="w-full bg-pink-600 text-white p-2 rounded" onClick={() => addElement('form')}>
          הוסף טופס
        </button>
      </aside>

      <main className="flex-1 relative">
        <div className="absolute top-2 right-2 z-10">
          <button
            className="bg-black text-white px-3 py-1 rounded"
            onClick={() => setViewMode(viewMode === 'desktop' ? 'mobile' : 'desktop')}
          >
            {viewMode === 'desktop' ? 'Mobile' : 'Desktop'} View
          </button>
        </div>

        <div className="border m-4 shadow relative" style={canvasStyle}>
          {/* Grid Overlay */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-gray-200"
              style={{ left: i * GRID_SIZE }}
            ></div>
          ))}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-px bg-gray-200"
              style={{ top: i * GRID_SIZE }}
            ></div>
          ))}

          {elements.map((el) => (
            <Rnd
              key={el.id}
              size={{ width: el.width, height: el.height }}
              position={{ x: el.x, y: el.y }}
              onDragStop={(_, d) => updateElement(el.id, { x: snap(d.x), y: snap(d.y) })}
              onResizeStop={(_, __, ref, ___, pos) =>
                updateElement(el.id, {
                  width: snap(parseInt(ref.style.width)),
                  height: snap(parseInt(ref.style.height)),
                  x: snap(pos.x),
                  y: snap(pos.y),
                })
              }
              bounds="parent"
              dragGrid={[GRID_SIZE, GRID_SIZE]}
              resizeGrid={[GRID_SIZE, GRID_SIZE]}
            >
              <Element el={el} update={updateElement} />
            </Rnd>
          ))}
        </div>
      </main>
    </div>
  )
}

function Element({ el, update }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const anim = mounted ? animationClasses[el.animation || 'none'] : ''

  if (el.type === 'text') {
    return (
      <textarea
        className={`w-full h-full p-2 text-lg border resize-none focus:outline-none ${anim}`}
        value={el.content}
        onChange={(e) => update(el.id, { content: e.target.value })}
      />
    )
  }

  if (el.type === 'image') {
    return el.src ? (
      <img src={el.src} className={`w-full h-full object-cover ${anim}`} alt="img" />
    ) : (
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0]
          if (!file) return
          const reader = new FileReader()
          reader.onloadend = () => update(el.id, { src: reader.result })
          reader.readAsDataURL(file)
        }}
      />
    )
  }

  if (el.type === 'video') {
    return el.src ? (
      <video controls className={`w-full h-full ${anim}`} src={el.src} />
    ) : (
      <input
        type="file"
        accept="video/*"
        onChange={(e) => {
          const file = e.target.files[0]
          if (!file) return
          const reader = new FileReader()
          reader.onloadend = () => update(el.id, { src: reader.result })
          reader.readAsDataURL(file)
        }}
      />
    )
  }

  if (el.type === 'form') {
    return (
      <form
        className={`p-2 border rounded space-y-2 bg-white ${anim}`}
        onSubmit={(e) => {
          e.preventDefault()
          alert('נשלח!')
        }}
      >
        {el.fields?.map((field, idx) => (
          <input
            key={idx}
            type={field.type}
            placeholder={field.placeholder}
            className="w-full border p-2 rounded"
            onChange={(e) => {
              const fields = [...el.fields]
              fields[idx].value = e.target.value
              update(el.id, { fields })
            }}
          />
        ))}
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          {el.submitText || 'שלח'}
        </button>
      </form>
    )
  }

  return null
}
