       /*===== Resize Navbar on Scroll =====*/
       var navbar = document.querySelector(".navbar");
       // when the scroll is higher than 20 viewport height, add the sticky classs to the tag with a class navbar 
       window.onscroll = () =>{
       this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
     }
      /*===== Nav Toggler =====*/
      const navMenu = document.querySelector(".menu");
      navToggle = document.querySelector(".menu-btn");
      if(navToggle)
      {
          navToggle.addEventListener("click", () =>
          {
              navMenu.classList.toggle("active");
          })
      }
      // closing menu when link is clicked
      const navLink = document.querySelectorAll(".nav-link");
      function linkAction()
      {
          const navMenu = document.querySelector(".menu");
          navMenu.classList.remove("active")
      }
      navLink.forEach(n => n.addEventListener("click", linkAction))




  

                