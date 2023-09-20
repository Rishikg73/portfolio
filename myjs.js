const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLengt = menuItem.length;
for(let i=0; i< menuLengt; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className ="active"
    }
}