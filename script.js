<script>

function toggleDark(){

const btn = document.querySelector(".theme-btn");

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
btn.textContent = "☀";
}
else{
localStorage.setItem("theme","light");
btn.textContent = "☾";
}

}

/* Load saved theme */
 if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
document.querySelector(".theme-btn").textContent="☀";
}


const sections=document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

sections.forEach(sec=>{
observer.observe(sec);
});

function togglePub(btn){
let content = btn.nextElementSibling;
content.classList.toggle("open");
}

function toggleQuote(book){
let quote = book.querySelector(".book-quote");
quote.classList.toggle("open");
}

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){
nav.classList.add("scrolled");
}else{
nav.classList.remove("scrolled");
}

});

window.addEventListener("scroll",()=>{
let scrollTop = document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (scrollTop / height) * 100;

document.querySelector(".scroll-progress").style.width = scrolled + "%";
});

function toggleMenu(){

const drawer = document.getElementById("navDrawer");
const overlay = document.getElementById("menuOverlay");

drawer.classList.toggle("open");
overlay.classList.toggle("open");

}

document.querySelectorAll(".nav-drawer a").forEach(link=>{
link.addEventListener("click",()=>{
document.getElementById("navDrawer").classList.remove("open");
document.getElementById("menuOverlay").classList.remove("open");
});
});

</script>
