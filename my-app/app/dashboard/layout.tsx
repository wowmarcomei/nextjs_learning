// export default function DashboardLayout({ children } : 
//     { children: React.ReactNode }
// ){
//   return (
//     <section>
//         <h1>Greeting from `Root/Dashboard` Layout!</h1>
//         {children}
//     </section>
//   );
// }

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Layout({ children }
    : { children: React.ReactNode }
) {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Link href="/dashboard/about">About</Link>
        <br/>
        <Link href="/dashboard/settings">Settings</Link>
      </div>

      <div>
        <h1>Layout {count}</h1>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>

      {children}
    </>
  )
}