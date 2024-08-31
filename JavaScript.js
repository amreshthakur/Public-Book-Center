    
var navbars = document.getElementsByClassName("navbar-menubar");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (navbar of navbars) {
        navbar.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add("active-tab");
};




