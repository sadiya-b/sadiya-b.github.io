let intro = document.querySelector(".intro");
let introParent = document.querySelector(".intro-header");
let introSpan = document.querySelectorAll(".myname");

window.addEventListener("DOMContentLoaded", ()=>{
  setTimeout(()=>{
    introSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add("active");
      },(idx +1)*400);
    });
  });

  setTimeout(()=>{
    introSpan.forEach((span,idx)=>{
      setTimeout(()=>{
        span.classList.remove("active");
        span.classList.add("fade");
      }, (idx+1)*400);
    });
  },2000);

  setTimeout(()=>{
    intro.style.top = "-100vh";
  },3000);

});

