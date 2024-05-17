/*

       LEARNING A FEW THINGS ABOUT JAVASCRIPT 

JavaScript is the Programming Language for the Web.
JavaScript can update and change both HTML and CSS.
JavaScript can calculate, manipulate and validate data.


Objects are variables too. But objects can contain many values.
This code assigns many values (Fiat, 500, white) to a variable named car:
var car = {type:"Fiat", model:"500", color:"white"};

JavaScript arrays are used to store multiple values in a single variable.
var cars = ["Saab", "Volvo", "BMW"];

A Javascript function looks like this :- 
function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}

Javascript works with HTML & CSS by using their id(s) and class(es) name.
*/











// MY CODES STARTS HERE





let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
/*The querySelector() method returns the first element that matches a CSS selector.
To return all matches (not only the first), use the querySelectorAll() instead.*/


menu.onclick = () => {

    /*what is classList? The classList property returns the CSS classnames of an element.
    It has many properties and methods that we can use to edit an elemen't class. */
    menu.classList.toggle('fa-times'); 
    
    navbar.classList.toggle('active'); 
    /*what is toggle? It is a method of ClassList property*/
}

window.onscroll = () => 
    {
    menu.classList.remove('fa-times'); 
    navbar.classList.remove('active'); 
    }



/*End of Document*/