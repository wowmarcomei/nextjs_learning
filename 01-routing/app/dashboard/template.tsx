'use client'

import { useState } from 'react'

export default function Template({ children }
    : { children: React.ReactNode }
) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Template {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
 
      {children}
    </div>
  )
}