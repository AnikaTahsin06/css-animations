document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('mouseleave', () => {
      item.querySelector('.dropdown-menu').style.display = 'none';
    });
    item.addEventListener('mouseenter', () => {
      item.querySelector('.dropdown-menu').style.display = 'block';
    });
  });
  