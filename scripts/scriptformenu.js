function chpok(id){
    elem = document.getElementById(id); 
    state = elem.style.display; 
    if (state =='') elem.style.display='none'; 
    else elem.style.display=''; 
}