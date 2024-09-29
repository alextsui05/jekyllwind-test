document.addEventListener('DOMContentLoaded', () => {
  const setDarkMode = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  };

  const darkModeToggle = document.querySelector('[data-toggle-dark]');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', (ev) => {
      ev.preventDefault();

      // toggle dark mode
      if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
      } else {
        localStorage.theme = 'dark';
      }

      setDarkMode();
    });
  }

  setDarkMode();
});
