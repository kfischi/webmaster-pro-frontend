import { useEditorStore } from '../store/editorStore'
import { v4 as uuidv4 } from 'uuid'

export default function Sidebar() {
  const addElement = useEditorStore((s) => s.addElement)

  return (
    <div className="w-60 p-4 bg-gray-100 border-r space-y-2">
      <button
        onClick={() =>
          addElement({ id: uuidv4(), type: 'text', content: 'כותרת חדשה', x: 100, y: 100, width: 250, height: 60 })
        }
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        הוסף טקסט
      </button>
      <button
        onClick={() =>
          addElement({ id: uuidv4(), type: 'image', src: '', x: 150, y: 150, width: 300, height: 200 })
        }
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        העלה תמונה
      </button>
      <button
        onClick={() =>
          addElement({ id: uuidv4(), type: 'video', src: '', x: 150, y: 150, width: 400, height: 250 })
        }
        className="w-full bg-purple-600 text-white p-2 rounded"
      >
        הוסף וידאו
      </button>
      <button
        onClick={() =>
          addElement({
            id: uuidv4(),
            type: 'form',
            x: 150,
            y: 150,
            width: 300,
            height: 200,
            submitText: 'שלח',
            fields: [
              { type: 'text', placeholder: 'שם' },
              { type: 'email', placeholder: 'אימייל' },
            ],
          })
        }
        className="w-full bg-pink-600 text-white p-2 rounded"
      >
        הוסף טופס
      </button>
    </div>
  )
}
