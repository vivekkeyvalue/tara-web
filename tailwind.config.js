/** @type {import('tailwindcss').Config} */

const borderRadius = require('./themes/borderRadius');
const fontSize = require('./themes/fontSizes');
const colors = require('./themes/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '480px' },
        tablet: { min: '481px', max: '1024px' },
        desktop: { min: '1025px' }
      },
      colors,
      borderRadius,
      fontSize,
      borderWidth: {
        1: '1px',
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px'
      },
      width: {
        72: '72px',
        270: '270px',
        352: '352px'
      },
      margin: {
        '5px': '5px',
        257: '257px'
      },
      spacing: {
        12.5: '50px',
        22: '88px',
        16: '64px',
        16.5: '66px',
        68.5: '274px'
      },
      boxShadow: {
        mediumBlur: '0px 4px 24px rgba(0, 0, 0, 0.1)',
        dropdownShadow: '0px 4px 24px rgba(10, 31, 68, 0.1)',
        borderShadow: '0px 4px 40px -2px rgba(65, 105, 184, 0.04)'
      },
      fontFamily: {
        inter: ['Inter']
      },
      maxWidth: {
        520: '520px'
      },
      minWidth: {
        520: '520px',
        257: '257px'
      }
    }
  },
  plugins: []
};
