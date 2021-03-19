function myFunction() {
    debugger
    var x = document.getElementById("navegacion");
    if (x.style.display === "flex") {
        x.style.flexDirection = "column";
        x.style.display = "none";
    } else {
        x.style.display = "flex";
        x.style.flexDirection = "column";

        x.style.justifyContent = "flex-end"
    }



    if (x.style.maxWidth === "800px") {

        x.style.flexDirection = "row"
    }
}



// $(document).ready(function() {
//     debugger
//     const menuBurger = document.getElementById('mobile-menu');

//     const nav = document.getElementById('nav');


//     if (menuBurger) {
//         menuBurger.addEventListener('click', () => {
//             nav.classList.add('show');
//             console.log('click')
//         });
//     }

// });