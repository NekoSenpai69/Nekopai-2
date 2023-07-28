    const fo = document.querySelector('.form');
    const email = document.querySelector('#email');
    const number = document.querySelector('#number');
    const message = document.querySelector('#message');
    const namee = document.querySelector('#name');
    const subject = document.querySelector('#title');
    let menuicon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a')

menuicon.onclick = () => {
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset= sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height)
    {
      navlinks.forEach(li => {
       li.classList.remove('active');
       document.querySelector('header nav a[href *='+ id +']').classList.add('active');
      })
    }
  })
  
  let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

  menuicon.classList.remove('bx-x');
  navbar.classList.remove('active');
}



          /*---Back End---*/
    fo.addEventListener('submit', e => {
      
     e.preventDefault();
      fetch(
        `https://nekopai-comment-api.nekosenpai69.repl.co/message?email=${email.value}&&name=${namee.value}&&number=${number.value}&&message=${message.value}&&subject=${subject.value}&&user=nekosenpai269@gmail.com&&password=fvylevcjvagwoszz`
                  )
      
    })
  