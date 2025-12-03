// Comportamentos do site: rolagem suave e menu ativo
document.addEventListener('DOMContentLoaded', function() {
  // Rolagem suave ao clicar nos links de âncora
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Marcar link do menu como ativo de acordo com a página atual
  const filename = (location.pathname.split('/').pop()) || 'index.html';
  document.querySelectorAll('nav.menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    // ignorar âncoras internas
    if (href.startsWith('#')) return;
    // considerar index.html quando a URL termina em '/'
    if (href === filename || (href === 'index.html' && (filename === '' || filename === 'index.html'))) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});
