const bubble = () => {
    const el = document.querySelectorAll(".bubble");
    const random = (min, max) => Math.round(Math.random() * (max - min) + min);
  
    el.forEach((item) => {
      window.requestAnimationFrame(() =>
        setInterval(() => {
          const top = random(50, 80);
          const bottom = random(50, 80);
          const left = random(50, 80);
          const right = random(50, 80);
  
          item.style.borderRadius = '${top}% ${top + 30}% ${bottom}% ${bottom + 30}% ${left}% ${right}% ${right + 30}% ${left + 30}%';
        }, 1000)
      );
    });
  };
  
  bubble();
//   while (true) {
//       bubble();
//   }
  
  