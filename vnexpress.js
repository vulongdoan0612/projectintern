$(document).ready(function(){
  $('.slideshow').slick({
    
  variableWidth: true,
        arrows:true,
     prevArrow:'<i class="bi bi-arrow-left-square"></i>',
      nextArrow:'<i class="bi bi-arrow-right-square"></i>',

  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows:true,
      }

    },
    {

      breakpoint: 600,
      settings: {
                arrows:true,

        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
                arrows:false,

        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
 
    
  $('.main-bottom-bottom-2').slick({
     autoplay: false,
  autoplaySpeed: 1500,
        
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left-square-fill' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right-square-fill' aria-hidden='true'></i></button>"
    });

});


window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById('navbar')



// Get the offset position of the navbar
const nav = document.querySelector('.navigation');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');    
  }
}




window.addEventListener('scroll', fixedNav);
	


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-bottom") {
    x.className += " responsive";
  } else {
    x.className = "nav-bottom";
  }
}
// FORM DANG KY

const usernameEle = document.getElementById('username');
const emailEle = document.getElementById('email');
const phoneEle = document.getElementById('phone');

const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    if (isValid) {
        alert('Gửi đăng ký thành công');
    }
});

function checkValidate() {
    let usernameValue = usernameEle.value;
    let emailValue = emailEle.value;
    let phoneValue = phoneEle.value;

    let isCheck = true;

    if (usernameValue == '') {
        setError(usernameEle, 'Tên không được để trống');
        isCheck = false;
    } else {
        setSuccess(usernameEle);
    }

    if (emailValue == '') {
        setError(emailEle, 'Email không được để trống');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    if (phoneValue == '') {
        setError(phoneEle, 'Số điện thoại không được để trống');
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(phoneEle, 'Số điện thoại không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(phoneEle);
    }

    return isCheck;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}

var formLogin = document.querySelector('.register-form')
var backgroundLogin = document.querySelector('.background-image')
var backgroundLogin2  = document.querySelector('.navigation')
var backgroundLogin3=document.querySelector('.header')
var btnLogin = document.querySelector('.sign-up')
var Login=document.querySelector('.nav-item-mobile')
btnLogin.addEventListener('click', function () {
  formLogin.style.top = '20%';
 
  
})
Login.addEventListener('click', function () {
  formLogin.style.top = '20%';
 
  
})
var btnLoginOut = document.querySelector('.form-title h3')

btnLoginOut.addEventListener('click', function () {
  formLogin.style.top = '-100%';
})

