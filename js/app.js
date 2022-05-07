/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



// making nav-bar

let sections = document.querySelectorAll('section'); // select all sections
let ul = document.querySelector('#navbar__list');

for (const section of sections) {
       let navName =  section.getAttribute('data-nav'); // get the name of the li
       let id = section.getAttribute('id');

       let li =  document.createElement('li');    // creat an li element 
       let links = document.createElement('a')    // creat an a element 

       links.setAttribute("href" , "#" + id);    // give the a elemen href with the name of section

       li.appendChild(links);  // add a element to li   

       links.textContent = navName; // giving the li the same name as the section
       ul.appendChild(li);
}

// scroll to top button
let ScrollToTop = document.querySelector(".scroll-to-top");
ScrollToTop.addEventListener("click" , function () {
       window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });// i found theis method in MDN https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
})
window.addEventListener("scroll" , function () {
       if (window.scrollY < 1000) {
              ScrollToTop.style.display = "none"; // to hide the btn while scrollY is less then 1000
       } else {
              ScrollToTop.style.display = "block";            
       }
})

// add section button

let AddBtn = document.querySelector('.primary-btn');
let removeBtn = document.querySelector('.secondery-btn'); 
let main = document.querySelector('main');
let sectionNum = sections.length + 1; 
AddBtn.addEventListener('click' , function () {
       let addedSection = document.createElement('section');
       addedSection.setAttribute('id' , 'section' + sectionNum)
       addedSection.setAttribute('data-nav' , 'section '+ sectionNum)
       let myDiv =document.createElement('div');
       myDiv.setAttribute('class' , 'landing__container');
       let sectionHeading = document.createElement('h2');
       let paragraph = document.createElement('p');
       paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod';
       let paragraph_2 = document.createElement('p');
       paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod';
       let showHideBtn = document.createElement('div');
       showHideBtn.textContent = 'Hide ^';
       showHideBtn.setAttribute('class' , 'show-hide');
       sectionHeading.textContent = 'section ' + sectionNum;
       sectionNum += 1; 
       myDiv.appendChild(sectionHeading);
       myDiv.appendChild(paragraph);
       myDiv.appendChild(paragraph_2);
       myDiv.appendChild(showHideBtn);
       addedSection.appendChild(myDiv);
       main.appendChild(addedSection);

       let navName =  addedSection.getAttribute('data-nav'); // get the name of the li
       let id = addedSection.getAttribute('id');

       let li =  document.createElement('li');    // creat an li element 
       let links = document.createElement('a')    // creat an a element 

       links.setAttribute("href" , "#" + id);    // give the a elemen href with the name of section

       li.appendChild(links);  // add a element to li   

       links.textContent = navName; // giving the li the same name as the section
       ul.appendChild(li);

}) 
// remove section button 
removeBtn.addEventListener('click' , function () {
              let lastSection = document.querySelector('section:last-of-type');
              let lastLi = document.querySelector('ul li:last-of-type');
              lastSection.remove();
              lastLi.remove();
              sectionNum -= 1;
})

// add active class to the section viewed 
window.addEventListener('scroll' , function () {
              sections.forEach(function(ele) {
                     let denstance = ele.getBoundingClientRect();
                     // i used this to compare when i will add and remove active class
                     // console.log(window.scrollY);
                     // console.log('the top is '+ denstance.top + 'the y is ' + denstance.bottom) ;
                     if (denstance.y <= 0 && denstance.bottom > 0) {
                            ele.classList.add('active')
                     }else {
                            ele.classList.remove('active') 
                     }
})
}      
);

// collapsible section 

let paragraphs = document.querySelectorAll('section p');
paragraphs.forEach(function (para) {
       para.style.display = 'block';
})
let hideShowButttons = document.querySelectorAll('section .show-hide');
hideShowButttons.forEach(function (element) {
       element.addEventListener('click' , function () {
              if (this.previousElementSibling.style.display === "block") {
              this.previousElementSibling.style.display = 'none';
              this.previousElementSibling.previousElementSibling.style.display = 'none';
              this.textContent = 'Show v';
              }else {
              this.previousElementSibling.style.display = 'block';
              this.previousElementSibling.previousElementSibling.style.display = 'block';
              this.textContent = 'Hide ^';
              }
});
})

// collapse of nav-bar 
let header = document.querySelector('.page__header');
let beforescroll = window.scrollY; 
let headerHeight = header.getBoundingClientRect();
window.onscroll = function () {
       let currentscroll = window.scrollY; 
       if (currentscroll > beforescroll ) {
              header.style.transform = `translateY(0px)`;
       } else {
              header.style.transform = `translateY(-${headerHeight.height + 10}px)`;
       } 
       beforescroll = currentscroll;
       // i found this in https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp 
} 

// this just my name 
let myName = "Hosny Ahmed";
let span = document.querySelector('footer p span');
span.textContent = myName; 
span.style.cssText = "text-decoration: underline; color: rgb(136,203,171); "; 