import React from 'react'

const GRID_SIZE = 20

export default function GridOverlay() {
  const lines = []

  for (let i = 0; i < 100; i++) {
    lines.push(
      <React.Fragment key={i}>
        {/* Vertical lines */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: i * GRID_SIZE,
            width: 1,
            height: '100%',
            backgroundColor: '#eee',
            pointerEvents: 'none',
          }}
        />
        {/* Horizontal lines */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: i * GRID_SIZE,
            height: 1,
            width: '100%',
            backgroundColor: '#eee',
            pointerEvents: 'none',
          }}
        />
      </React.Fragment>
    )
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {lines}
    </div>
  )
}
