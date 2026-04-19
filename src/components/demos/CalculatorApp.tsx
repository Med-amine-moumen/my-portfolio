import { useState } from 'react'
import { Delete } from 'lucide-react'

const CalculatorApp = () => {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')

  const handleNumber = (num) => {
    if (display === '0') {
      setDisplay(num)
    } else {
      setDisplay(display + num)
    }
  }

  const handleOperator = (op) => {
    setEquation(display + ' ' + op + ' ')
    setDisplay('0')
  }

  const calculate = () => {
    try {
      const result = eval(equation + display)
      setDisplay(String(result))
      setEquation('')
    } catch {
      setDisplay('Error')
      setEquation('')
    }
  }

  const clear = () => {
    setDisplay('0')
    setEquation('')
  }

  const backspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay('0')
    }
  }

  const Button = ({ value, onClick, className = '' }) => (
    <button
      onClick={onClick}
      className={`p-6 text-xl font-semibold rounded-xl transition-all hover:scale-105 ${className}`}
    >
      {value}
    </button>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">🔢 Calculator</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl">
          <div className="bg-black/40 rounded-xl p-6 mb-6">
            <div className="text-white/60 text-sm mb-2 h-6">{equation}</div>
            <div className="text-white text-4xl font-bold text-right">{display}</div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <Button value="C" onClick={clear} className="bg-red-500 hover:bg-red-600 text-white col-span-2" />
            <Button value={<Delete className="w-6 h-6 mx-auto" />} onClick={backspace} className="bg-orange-500 hover:bg-orange-600 text-white" />
            <Button value="÷" onClick={() => handleOperator('/')} className="bg-blue-500 hover:bg-blue-600 text-white" />

            <Button value="7" onClick={() => handleNumber('7')} className="bg-white/20 hover:bg-white/30 text-white" />
            <Button value="8" onClick={() => handleNumber('8')} className="bg-white/20 hover:bg-white/30 text-white" />
            <Button value="9" onClick={() => handleNumber('9')} className="bg-white/20 hover:bg-white/30 text-white" />
            <Button value="×" onClick={() => handleOperator('*')} className="bg-blue-500 hover:bg-blue-600 text-white" />

            <Button value="4" onClick={() => handleNumber('4')} className="bg-white/20 hover:bg-white/30 text-white" />
            <Button value="5" onClick={() => handleNumber('5')} className="bg-white/20 hover:bg-white/30 text-white" />
            <Button value="6" onClick={() => handleNumber('6')} className="bg-white/20 hover:bg-white/30 text-white" />
            <Button value="-" onClick={() => handleOperator('-')} className="bg-blue-500 hover:bg-blue-600 text-white" />

            <Button value="1" onClick={() => handleNumber('1')} className="bg-white/20 hover:bg-white/30 text-white" />
            <Button value="2" onClick={() => handleNumber('2')} className="bg-white/20 hover:bg-white/30 text-white" />
            <Button value="3" onClick={() => handleNumber('3')} className="bg-white/20 hover:bg-white/30 text-white" />
            <Button value="+" onClick={() => handleOperator('+')} className="bg-blue-500 hover:bg-blue-600 text-white" />

            <Button value="0" onClick={() => handleNumber('0')} className="bg-white/20 hover:bg-white/30 text-white col-span-2" />
            <Button value="." onClick={() => handleNumber('.')} className="bg-white/20 hover:bg-white/30 text-white" />
            <Button value="=" onClick={calculate} className="bg-green-500 hover:bg-green-600 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatorApp
