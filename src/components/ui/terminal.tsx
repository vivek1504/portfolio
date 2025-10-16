import React, { useEffect, useState } from 'react';

const Terminal = () => {
  const lines = [
    {
      text: 'vivek@root:~$ npx create-vivek-portfolio',
      color: 'dark:text-green-400 text-green-600',
    },
    { text: '✔ Installing dependencies...', color: 'text-foreground' },
    { text: '✔ Setting up project structure...', color: 'text-foreground' },
    { text: '✔ Launching development server', color: 'text-foreground' },
    {
      text: 'vivek@root:~$ npm run dev',
      color: 'dark:text-green-400 text-green-600',
    },
    {
      text: '➜ Local: http://localhost:3000',
      color: 'dark:text-blue-500 text-blue-800',
    },
    {
      text: '➜ Ready on vivek.dev',
      color: 'dark:text-purple-500 text-purple-800',
    },
  ];

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [typingLine, setTypingLine] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    if (currentIndex < lines.length) {
      const line = lines[currentIndex].text;
      let i = 0;

      const typeInterval = setInterval(() => {
        setTypingLine(line.slice(0, i + 1));
        i++;

        if (i === line.length) {
          clearInterval(typeInterval);
          setDisplayedLines((prev) => [...prev, line]);
          setTypingLine('');
          setCurrentIndex((prev) => prev + 1);
        }
      }, Math.random() * 40 + 20); // random speed between 20–60ms per char

      return () => clearInterval(typeInterval);
    }

    // when finished, restart loop after short delay
    if (currentIndex === lines.length && !isLooping) {
      setIsLooping(true);
      setTimeout(() => {
        setDisplayedLines([]);
        setCurrentIndex(0);
        setIsLooping(false);
      }, 3000);
    }
  }, [currentIndex, isLooping]);

  return (
    <aside
      className="
        relative p-6 rounded-xl w-full max-w-lg h-80 font-mono shadow-lg border 
        border-border overflow-hidden
        bg-white/70 text-gray-900 
        dark:bg-black/80 dark:text-white 
        backdrop-blur-sm transition-colors duration-500
      "
    >
      {/* Top bar */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <p className="text-xs text-gray-700 dark:text-gray-200">bash</p>
      </div>

      {/* Terminal content */}
      <div className="space-y-1 text-sm leading-relaxed">
        {displayedLines.map((line, i) => {
          const colorClass = lines[i].color;
          return (
            <p key={i} className={`${colorClass}`}>
              {line}
            </p>
          );
        })}

        {typingLine && (
          <p className={`${lines[currentIndex].color} whitespace-pre`}>
            {typingLine}
            <span className="inline-block w-[2px] h-4 dark:bg-green-400 bg-green-600 animate-pulse ml-1 align-middle" />
          </p>
        )}
      </div>
    </aside>
  );
};

export default Terminal;
