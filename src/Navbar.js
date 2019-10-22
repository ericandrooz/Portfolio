import React from 'react';

function Navbar() {
  var lastScrollTop = 0;

  window.addEventListener(
    'scroll',
    function() {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // downscroll code
        setTimeout(() => {
          document.getElementById('navbar').classList.add('nopacity');
        }, 500);
      } else {
        // upscroll code
        document.getElementById('navbar').classList.remove('nopacity');
      }

      if (st === 0) {
        document.getElementById('navbar').classList.remove('colored');
      } else {
        document.getElementById('navbar').classList.add('colored');
      }

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    false
  );

  return (
    <section id="navbar" className="section section__navbar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#connect">Connect</a>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
