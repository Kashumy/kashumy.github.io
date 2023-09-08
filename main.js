console.log('Hello World!');
    /*  for (var i = 0; i < 20; i++) {
        var particle = document.createElement("div"); // tworzenie nowego elementu div
        
        particle.className = "particle"; // dodanie klasy CSS
        particle.style.top = Math.random() * 500 + "px"; // losowe położenie top
        particle.style.left = Math.random() * 500 + "px"; // losowe położenie left
        particle.speed = 0.9; 
        particle.direction = Math.random() * 360; // losowy kierunek ruchu
        particle.move = function() {
          // funkcja przesuwająca cząstkę
          this.direction+=0.1
          if(this.speed>9){
            this.speed-=5
          }
          var posX = parseFloat(this.style.left);
          var posY = parseFloat(this.style.top);
          var radians = this.direction * Math.PI / 180;
          posX += this.speed * Math.cos(radians);
          posY += this.speed * Math.sin(radians);
          if (posX < 0) {
            posX = window.innerWidth;
          } else if (posX > window.innerWidth) {
            posX = 0;
          }
          if (posY < 0) {
            posY = window.innerHeight;
          } else if (posY > window.innerHeight) {
            posY = 0;
          }
          this.style.left = posX + "px";
          this.style.top = posY + "px";
        }
        document.body.appendChild(particle); // dodanie elementu do body
      }*/
      // animacja cząstek
      loop()
      function anim() {
       /* var particles = document.getElementsByClassName("particle");
        for (var i = 0; i < particles.length; i++) {
          particles[i].move();
        }*/
      }
      function loop(){
      requestAnimationFrame(anim)
      requestAnimationFrame(loop)
     } 
      elem=document.documentElement;
      function openFullscreen() {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
          start = true;
        }
      
        else if (elem.webkitRequestFullscreen) {
          /* Safari */
          elem.webkitRequestFullscreen();
        }
      
        else if (elem.msRequestFullscreen) {
          /* IE11 */
          elem.msRequestFullscreen();
        }
      }
      
      setTimeout(toggleDarkMode ,100)
      
  function toggleDarkMode() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
 }
