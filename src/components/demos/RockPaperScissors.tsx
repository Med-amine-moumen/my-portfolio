'use client';

import { useState } from 'react';

type Choice = 'rock' | 'paper' | 'scissors' | '';

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState<Choice>('');
  const [computerChoice, setComputerChoice] = useState<Choice>('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const choices: Choice[] = ['rock', 'paper', 'scissors'];

  const getRandomChoice = (): Choice =>
    choices[Math.floor(Math.random() * choices.length)];

  const playGame = (choice: Choice) => {
    const computer = getRandomChoice();
    let outcome = '';

    if (choice === computer) {
      outcome = "It's a tie!";
    } else if (
      (choice === 'rock' && computer === 'scissors') ||
      (choice === 'paper' && computer === 'rock') ||
      (choice === 'scissors' && computer === 'paper')
    ) {
      outcome = 'You win!';
      setScore((prev) => ({ ...prev, player: prev.player + 1 }));
    } else {
      outcome = 'Computer wins!';
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }

    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(outcome);
  };

  const resetGame = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
    setScore({ player: 0, computer: 0 });
  };

  const getEmoji = (choice: Choice): string => {
    switch (choice) {
      case 'rock':
        return '🪨';
      case 'paper':
        return '📄';
      case 'scissors':
        return '✂️';
      default:
        return '❓';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          🎮 Rock Paper Scissors
        </h1>

        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <div className="flex justify-between items-center mb-8 bg-white/20 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-white/80 mb-2">Player</div>
              <div className="text-4xl font-bold text-white">
                {score.player}
              </div>
            </div>
            <div className="text-6xl">🏆</div>
            <div className="text-center">
              <div className="text-white/80 mb-2">Computer</div>
              <div className="text-4xl font-bold text-white">
                {score.computer}
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-12 mb-6">
              <div className="text-center">
                <div className="text-white/80 mb-4">You</div>
                <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center text-5xl mb-2">
                  {getEmoji(playerChoice)}
                </div>
                <div className="text-white font-semibold">{playerChoice}</div>
              </div>

              <div className="text-4xl text-white/60">VS</div>

              <div className="text-center">
                <div className="text-white/80 mb-4">Computer</div>
                <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center text-5xl mb-2">
                  {getEmoji(computerChoice)}
                </div>
                <div className="text-white font-semibold">{computerChoice}</div>
              </div>
            </div>

            {result && (
              <div
                className={`text-2xl font-bold mb-6 ${
                  result.includes('win')
                    ? 'text-green-300'
                    : result.includes('Computer')
                      ? 'text-red-300'
                      : 'text-yellow-300'
                }`}
              >
                {result}
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {choices.map((choice) => (
              <button
                key={choice}
                onClick={() => playGame(choice)}
                type="button"
                className="bg-white/30 hover:bg-white/40 rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">
                  {getEmoji(choice)}
                </div>
                <div className="text-white font-semibold capitalize text-lg">
                  {choice}
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={resetGame}
              type="button"
              className="px-8 py-3 bg-white/30 hover:bg-white/40 text-white rounded-xl font-semibold transition-colors"
            >
              Reset Game
            </button>
          </div>

          <div className="mt-8 text-center text-white/60 text-sm">
            Python • Random Library • CLI Game Logic
          </div>
        </div>
      </div>
    </div>
  );
}
