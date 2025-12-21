window.onload = function() {
      const levels = document.querySelectorAll('.skill-level');
      levels.forEach(bar => {
        const percent = bar.getAttribute('data-level');
        bar.style.width = percent;   // anima até o valor certo
      });
    }; 