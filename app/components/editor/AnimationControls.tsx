import { useEditorStore } from '../store/editorStore'

const animations = [
  'fade-in',
  'slide-in-left',
  'slide-in-right',
  'zoom-in',
  'none',
]

export default function AnimationControls({ selectedId }) {
  const updateElement = useEditorStore((s) => s.updateElement)
  const elements = useEditorStore((s) => s.elements)
  const el = elements.find((e) => e.id === selectedId)

  if (!el) return null

  const handleChange = (e) => {
    updateElement(selectedId, { animation: e.target.value })
  }

  return (
    <div className="p-2 border-t">
      <label className="block mb-1 font-semibold">אנימציית כניסה</label>
      <select
        value={el.animation || 'none'}
        onChange={handleChange}
        className="w-full p-1 border rounded"
      >
        {animations.map((anim) => (
          <option key={anim} value={anim}>
            {anim}
          </option>
        ))}
      </select>
    </div>
  )
}
