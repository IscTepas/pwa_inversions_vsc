import { useEffect, useState } from 'react'
import { Dashboard } from '@/components'

export default function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log('🚀 PWA Inversions v1.0 - App loaded')
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark-bg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">PWA Inversions</h1>
          <p className="text-gray-400">Initializing...</p>
        </div>
      </div>
    )
  }

  return <Dashboard />
}
