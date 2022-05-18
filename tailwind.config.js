module.exports = {
  content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.svelte",
      ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
