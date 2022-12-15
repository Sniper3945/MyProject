const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".navlinks-container");
const navbar = document.querySelector(".navbar");
const about = document.querySelector(".About");         // about me               
const skills = document.querySelector(".skills");       // skills         
const Project = document.querySelector(".Project");     // Project
const Contact = document.querySelector(".Contact");     // contact us       
const MyProject = document.querySelector(".MyProject"); // myproject
const navlinks = document.querySelector(".navlinks-container");
const hamburger = document.querySelector(".hamburger");
const main = document.querySelector(".main");
const section1 = document.querySelector(".about");       //section 1 about 
const section2 = document.querySelector(".service");     // section 2 skills
const section3 = document.querySelector(".contact-me");  // section3 contact me
const section4 = document.querySelector(".footer");      // section 4 footer
const navlinks1 = [about,skills,Project,Contact,MyProject]
const sections = [section1,section2,section3,section4]
let sectionsPosition;
let height = main.clientHeight;
const toggleNav = () => {
  hamburgerToggler.classList.toggle("open")

  const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ?  "false" : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

  navLinksContainer.classList.toggle("open")
}
hamburgerToggler.addEventListener("click", toggleNav)

new ResizeObserver(entries => {
  if(entries[0].contentRect.width <= 900){
    navLinksContainer.style.transition = "transform 0.3s ease-out"
  } else {
    navLinksContainer.style.transition = "none"
  }
}).observe(document.body)
window.addEventListener('scroll',()=>{
  if(window.scrollY > height){
    navbar.classList.add("scroll");
    about.classList.add("scroll");
    Project.classList.add("scroll");
    skills.classList.add("scroll");
    Contact.classList.add("scroll");
    MyProject.classList.add("scroll");
    navlinks.classList.add("scroll");
    hamburger.classList.add("scroll");
  }
  else{
    navbar.classList.remove("scroll");
    about.classList.remove("scroll");
    Project.classList.remove("scroll");
    skills.classList.remove("scroll");
    Contact.classList.remove("scroll");
    MyProject.classList.remove("scroll");
    navlinks.classList.remove("scroll");
    hamburger.classList.remove("scroll");

  }    
});  
function positionCalculation(){
  sectionsPosition = sections.map(section => section.offsetTop)
}
positionCalculation()
console.log(sectionsPosition);

navlinks1.forEach(link => link.addEventListener("click", addScrollSmooth))

function addScrollSmooth(e){
  const linkIndex = navlinks1.indexOf(e.target);
  window.scrollTo({
    top: sectionsPosition[linkIndex],
    behavior: "smooth"
  })
}
window.addEventListener("resize", positionCalculation)
