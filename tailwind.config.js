const plugin = require('tailwindcss/plugin');

// Custom plugin for container queries
const containerQueriesPlugin = plugin(function ({ addVariant, theme }) {
  // Define your container breakpoints
  const containerBreakpoints = {
    'sm': '330px', // Small breakpoint
    'md': '480px', // Medium breakpoint
    'lg': '640px', // Large breakpoint
    'xl': '768px', // Extra large breakpoint
    '2xl': '1024px', // 2X large breakpoint
  };

  // Add min-width variants
  Object.entries(containerBreakpoints).forEach(([key, value]) => {
    addVariant(`@${key}`, `@container (min-width: ${value})`);
  });

  // Add max-width variants
  Object.entries(containerBreakpoints).forEach(([key, value]) => {
    addVariant(`@max-${key}`, `@container (max-width: ${value})`);
  });
});

module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: '',
  theme: {
    extend: {
      colors: {
        primary: '#F9A51A',
        secondery: '#09396F',
        secondery2: '#1e1f4b',

        bg1 : "var(--primary-color)",
        bg2 : "var(--primary-color-2)",
        bg3 : "var(--primary-color-3)",
        bg4 : "var(--primary-color-4)",
        border1 : "var(--border)",
      },
      // Define your viewport-based breakpoints (optional)
      screens: {
        sm: '330px',
        md: '480px',
        lg: '640px',
        xl: '768px',
        '2xl': '1024px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'), // Enable container queries
    containerQueriesPlugin, // Add custom container query variants
  ],
};