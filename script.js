function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }



const links = document.querySelectorAll('a[href*="#"]');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const blockID = link.getAttribute('href').substring(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
    })
    })
})