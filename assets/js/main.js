let drpdwn=document.querySelector(".drpdwn")
let drpdwnsecond=document.querySelector(".drpdwn-second")
let drpdwnmenu=document.querySelector(".drpdwn-menu")
let drpdwnmenusecond=document.querySelector(".drpdwn-menu-second")

drpdwn.onmouseover=function DropDown() {
    drpdwnmenu.style.display="block";
    drpdwnmenu.style.marginTop=0;

}
drpdwnmenu.onmouseover=function() {
    drpdwnmenu.style.display="block";
    
}
drpdwnmenu.onmouseout=function() {
    drpdwnmenu.style.display="none";
    
}
drpdwn.onmouseout=function DropDown() {
    drpdwnmenu.style.display="none";
    drpdwnmenu.style.marginTop=0;

}
drpdwnsecond.onmouseover=function DropDownSecond() {
    drpdwnmenusecond.style.display="block";
}
drpdwnmenusecond.onmouseover=function() {
    drpdwnmenusecond.style.display="block";
    
}
drpdwnmenusecond.onmouseout=function() {
    drpdwnmenusecond.style.display="none";
    
}
drpdwnsecond.onmouseout=function DropDownSecond() {
    drpdwnmenusecond.style.display="none";
}
