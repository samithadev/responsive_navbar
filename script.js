const nav_links = document.getElementById("nav-links")
const close_img = document.getElementById("close")
const open_img = document.getElementById("open")
const close_menu = document.getElementById("close_menu")
const open_menu = document.getElementById("open_menu")


open_menu.addEventListener("click", () =>{
    nav_links.style.display = "flex";
    open_img.style.display ="none"
    close_img.style.display ="block"
})

close_menu.addEventListener("click", () =>{
    nav_links.style.display = "none";
    open_img.style.display ="block"
    close_img.style.display ="none"
    nav_links.setAttribute("style" ,"")
})