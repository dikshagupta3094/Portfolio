const sidebar = document.querySelector("header");
    const iconContainer = document.getElementById('hamburger');
   
    iconContainer.addEventListener('click',()=>{
        if(sidebar.style.left !="0px"){
            sidebar.style.left = "0px"
            iconContainer.classList.add('clicked')
            iconContainer.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        }
        else{ 
            sidebar.style.left = "-120%"
            iconContainer.classList.remove('clicked')
            iconContainer.innerHTML = '<i class="fa-solid fa-bars"></i>'
        } 
    })