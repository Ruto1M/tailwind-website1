
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');

    if (isHidden) {
      // Show
      mobileMenu.classList.remove('hidden', 'opacity-0');
      mobileMenu.classList.add('opacity-100');
      menuToggle.setAttribute('aria-expanded', 'true');
    } else {
      // Hide (fade out, then fully hide)
      mobileMenu.classList.add('opacity-0');
      menuToggle.setAttribute('aria-expanded', 'false');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300); // match duration-300
    }
  });
});


function togglePayment(method) {
    const cardFields = document.getElementById('card-fields');
    const paypalFields = document.getElementById('paypal-fields');

    if (method === 'card') {
      cardFields.classList.remove('hidden');
      paypalFields.classList.add('hidden');
      document.querySelector('input[value="card"]').checked = true;
    } else if (method === 'paypal') {
      paypalFields.classList.remove('hidden');
      cardFields.classList.add('hidden');
      document.querySelector('input[value="paypal"]').checked = true;
    }
  }

  // Set default
  document.addEventListener("DOMContentLoaded", () => {
    togglePayment('card');
  });

 
 //Counter
  //a function returns it's element by it's id
function $(id){
    return document.getElementById(id);
}
//initialize GUI
window.onload=function(){
    $('counter_scr').value = 0
}

//counter variable
let counter = 0;

//update textbox
    function UpdateCounterScr(){
        $('counter_scr').value = counter;
    }
// increment operation
$('increment').addEventListener('click', function(){
    counter++;
    if(counter >= 99){
        counter = 99;
    }
    UpdateCounterScr();
});
//decrement operation
$('decrement').addEventListener('click', function(){
    counter--;
    if (counter <= 0)
        counter = 0;
    UpdateCounterScr();
}); 