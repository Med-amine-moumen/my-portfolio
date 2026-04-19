import { useState } from 'react'
import { Plus, Trash2, Check } from 'lucide-react'

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Portfolio', completed: true },
  ])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">✅ Task Manager</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
          <form onSubmit={addTodo} className="flex gap-2 mb-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Plus className="w-5 h-5" /> Add
            </button>
          </form>

          <div className="space-y-3">
            {todos.map(todo => (
              <div
                key={todo.id}
                className="flex items-center gap-3 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
              >
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    todo.completed ? 'bg-green-500 border-green-500' : 'border-white/50'
                  }`}
                >
                  {todo.completed && <Check className="w-4 h-4 text-white" />}
                </button>
                <span className={`flex-1 text-white ${todo.completed ? 'line-through opacity-60' : ''}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                >
                  <Trash2 className="w-5 h-5 text-red-400" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/20 text-center text-white/60">
            {todos.filter(t => !t.completed).length} tasks remaining
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoApp
