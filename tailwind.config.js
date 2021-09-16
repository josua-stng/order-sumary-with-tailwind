module.exports = {
  // mengaktifkan mode JIT  
  mode: 'jit',
  // pastikan tetap mengkonfigurasi purge, karena jit akan menggunakannya untuk prosesnya
  purge: ['build/**/*.html', 'build/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily:{
        redoorz:"'Red Hat Display', serif"
      },
      colors:{
        verypaleblue:"#f5f7ff",
        desaturedblue:"#f9f9fb",
        darkblue:"#1f2f56"

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};