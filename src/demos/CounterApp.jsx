import { useState } from 'react'
import { Plus, Minus, RotateCcw } from 'lucide-react'

const CounterApp = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 flex items-center justify-center">
      <div className="max-w-lg w-full">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">🔢 Counter App</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-2xl text-center">
          <div className="mb-8">
            <div className="text-8xl font-bold text-white mb-4">{count}</div>
            <div className="text-white/60 text-lg">Current Count</div>
          </div>

          <div className="flex gap-4 justify-center mb-6">
            <button
              onClick={decrement}
              className="p-6 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all hover:scale-110 shadow-lg"
            >
              <Minus className="w-8 h-8" />
            </button>
            
            <button
              onClick={reset}
              className="p-6 bg-gray-500 hover:bg-gray-600 text-white rounded-xl transition-all hover:scale-110 shadow-lg"
            >
              <RotateCcw className="w-8 h-8" />
            </button>
            
            <button
              onClick={increment}
              className="p-6 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all hover:scale-110 shadow-lg"
            >
              <Plus className="w-8 h-8" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-white/80">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-400">-1</div>
              <div className="text-sm">Decrease</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-400">0</div>
              <div className="text-sm">Reset</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">+1</div>
              <div className="text-sm">Increase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterApp
