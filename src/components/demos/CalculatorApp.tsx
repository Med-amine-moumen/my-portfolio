'use client';

import { useState, type ReactNode } from 'react';
import { Delete } from 'lucide-react';

/**
 * Safe left-to-right arithmetic evaluator with * / precedence.
 * Replaces the original `eval()` (faithful behaviour, no `eval`/`Function`).
 */
function evaluate(expr: string): number {
  const tokens = expr.match(/(\d+\.?\d*|[+\-*/])/g);
  if (!tokens || tokens.length === 0) throw new Error('empty');

  // pass 1: * and /
  const pass1: (number | string)[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const tk = tokens[i];
    if (tk === '*' || tk === '/') {
      const prev = pass1.pop();
      const next = Number(tokens[++i]);
      if (typeof prev !== 'number' || Number.isNaN(next)) {
        throw new Error('bad expression');
      }
      pass1.push(tk === '*' ? prev * next : prev / next);
    } else if (tk === '+' || tk === '-') {
      pass1.push(tk);
    } else {
      pass1.push(Number(tk));
    }
  }

  // pass 2: + and -
  let acc = pass1[0];
  if (typeof acc !== 'number') throw new Error('bad expression');
  for (let i = 1; i < pass1.length; i += 2) {
    const op = pass1[i];
    const val = pass1[i + 1];
    if (typeof val !== 'number') throw new Error('bad expression');
    acc = op === '+' ? acc + val : acc - val;
  }
  return acc;
}

export default function CalculatorApp() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (num: string) => {
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const calculate = () => {
    try {
      const result = evaluate(equation + display);
      setDisplay(String(result));
      setEquation('');
    } catch {
      setDisplay('Error');
      setEquation('');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  const backspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const Button = ({
    value,
    onClick,
    className = '',
  }: {
    value: ReactNode;
    onClick: () => void;
    className?: string;
  }) => (
    <button
      onClick={onClick}
      type="button"
      className={`p-6 text-xl font-semibold rounded-xl transition-all hover:scale-105 ${className}`}
    >
      {value}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          🔢 Calculator
        </h1>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl">
          <div className="bg-black/40 rounded-xl p-6 mb-6">
            <div className="text-white/60 text-sm mb-2 h-6">{equation}</div>
            <div className="text-white text-4xl font-bold text-right">
              {display}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <Button
              value="C"
              onClick={clear}
              className="bg-red-500 hover:bg-red-600 text-white col-span-2"
            />
            <Button
              value={<Delete className="w-6 h-6 mx-auto" />}
              onClick={backspace}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            />
            <Button
              value="÷"
              onClick={() => handleOperator('/')}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            />

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

            <Button
              value="0"
              onClick={() => handleNumber('0')}
              className="bg-white/20 hover:bg-white/30 text-white col-span-2"
            />
            <Button value="." onClick={() => handleNumber('.')} className="bg-white/20 hover:bg-white/30 text-white" />
            <Button
              value="="
              onClick={calculate}
              className="bg-green-500 hover:bg-green-600 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
