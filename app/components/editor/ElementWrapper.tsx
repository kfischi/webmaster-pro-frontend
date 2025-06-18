import { useEditorStore } from '../store/editorStore'
import { useEffect, useState } from 'react'

const animationClasses = {
  'fade-in': 'animate-fadeIn',
  'slide-in-left': 'animate-slideInLeft',
  'slide-in-right': 'animate-slideInRight',
  'zoom-in': 'animate-zoomIn',
  none: '',
}

export default function ElementWrapper({ el }) {
  const updateElement = useEditorStore((s) => s.updateElement)
  const selectElement = useEditorStore((s) => s.selectElement)

  // For animation trigger on mount
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    setAnimate(true)
  }, [])

  const animClass = animate ? animationClasses[el.animation || 'none'] : ''

  switch (el.type) {
    case 'text':
      return (
        <textarea
          className={`w-full h-full p-2 text-lg border resize-none focus:outline-none ${animClass}`}
          value={el.content}
          onChange={(e) => updateElement(el.id, { content: e.target.value })}
          onClick={() => selectElement(el.id)}
        />
      )
    case 'image':
      return el.src ? (
        <img
          src={el.src}
          alt="Uploaded"
          className={`w-full h-full object-cover cursor-pointer ${animClass}`}
          onClick={() => selectElement(el.id)}
        />
      ) : (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0]
            if (file) {
              const reader = new FileReader()
              reader.onloadend = () => updateElement(el.id, { src: reader.result })
              reader.readAsDataURL(file)
            }
          }}
        />
      )
    case 'video':
      return el.src ? (
        <video
          controls
          className={`w-full h-full cursor-pointer ${animClass}`}
          onClick={() => selectElement(el.id)}
          src={el.src}
        />
      ) : (
        <input
          type="file"
          accept="video/*"
          onChange={(e) => {
            const file = e.target.files[0]
            if (file) {
              const reader = new FileReader()
              reader.onloadend = () => updateElement(el.id, { src: reader.result })
              reader.readAsDataURL(file)
            }
          }}
        />
      )
    case 'form':
      return (
        <form className={`flex flex-col p-2 space-y-2 border ${animClass}`}>
          {el.fields?.map((field, idx) => (
            <input
              key={idx}
              type={field.type}
              placeholder={field.placeholder}
              className="p-1 border rounded"
              onChange={(e) => {
                const newFields = [...el.fields]
                newFields[idx].value = e.target.value
                updateElement(el.id, { fields: newFields })
              }}
              value={field.value || ''}
            />
          ))}
          <button type="submit" className="bg-blue-600 text-white p-2 rounded">
            {el.submitText || 'שלח'}
          </button>
        </form>
      )
    default:
      return null
  }
}
