'use client';

export default function ThemeButton() {
  const setTheme = () => {
    const theme = localStorage.getItem('theme');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };
  return <button onClick={setTheme}>테마 변경</button>;
}
