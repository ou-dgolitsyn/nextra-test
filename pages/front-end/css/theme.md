# Application theme

:::{note}
Here is going to be description on how to set up application's theme based on theme.js concept with tailwind & interactions with component libraries
:::


:::{code-block} typescript
   :caption: "A plugin exposes theme colors as css variables like --color-secondary-900" 
module.exports = {
  theme: {
    ...
  },
  plugins: [
    function({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
:::