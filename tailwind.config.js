/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        paper: '#fdfdfe',
        ink: '#191a20',
        body: '#565866',
        muted: '#6f7180',
        faint: '#9a9ba8',
        line: '#e7e7ee',
        'line-strong': '#d9d9e2',
        surface: '#f6f6fa',
        chip: '#f0f0f4',
        accent: '#544a8f',
        online: '#3fa36c',
      },
      fontFamily: {
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
