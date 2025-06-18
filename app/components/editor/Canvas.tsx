import { useEditorStore } from '../store/editorStore'
import { Rnd } from 'react-rnd'
import ElementWrapper from './ElementWrapper'
import GridOverlay from './GridOverlay'
import { useState } from 'react'

const GRID_SIZE = 20

export default function Canvas() {
  const elements = useEditorStore((s) => s.elements)
  const updateElement = useEditorStore((s) => s.updateElement)
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop')

  // Snap function helper:
  const snap = (value) => Math.round(value / GRID_SIZE) * GRID_SIZE

  // Canvas size changes based on mode:
  const canvasStyle =
    viewMode === 'desktop'
      ? { width: 1024, height: 768, margin: 'auto', position: 'relative', backgroundColor: 'white' }
      : { width: 375, height: 667, margin: 'auto', position: 'relative', backgroundColor: 'white', border: '1px solid #ccc' }

  return (
    <div className="flex-1 relative" style={canvasStyle}>
      <GridOverlay />
      {elements.map((el) => (
        <Rnd
          key={el.id}
          size={{ width: el.width || 200, height: el.height || 100 }}
          position={{ x: el.x, y: el.y }}
          bounds="parent"
          dragGrid={[GRID_SIZE, GRID_SIZE]}
          resizeGrid={[GRID_SIZE, GRID_SIZE]}
          onDragStop={(_, d) =>
            updateElement(el.id, { x: snap(d.x), y: snap(d.y) })
          }
          onResizeStop={(_, __, ref, ____, pos) =>
            updateElement(el.id, {
              width: snap(parseInt(ref.style.width)),
              height: snap(parseInt(ref.style.height)),
              x: snap(pos.x),
              y: snap(pos.y),
            })
          }
        >
          <ElementWrapper el={el} />
        </Rnd>
      ))}

      {/* Toggle view mode button */}
      <button
        className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded z-10"
        onClick={() => setViewMode(viewMode === 'desktop' ? 'mobile' : 'desktop')}
      >
        {viewMode === 'desktop' ? 'Mobile View' : 'Desktop View'}
      </button>
    </div>
  )
}
