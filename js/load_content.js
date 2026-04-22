$(document).ready(function () {
    var navLinks = [
        ['/', '⌂Home'],
        ['/pages/fumo.html', 'ᗜˬᗜ'],
        ['/pages/museum.html', 'Museum'],
        ['/pages/archives.html', 'The Archives'],
        ['/pages/faq.html', 'FAQs']
    ];

    // TODO: Replace all selectors to nav class with nav tag
    // $('body').prepend('<div class="nav" id="nav"></div>');
    $('body').prepend(`<nav class="nav" id="nav"></nav>`);

    // $('head').append();
    // $('#nav').load('/templates/nav.html');

    console.log(window.location.pathname);

    for (var i = 0; i < navLinks.length; i++) {
        // console.log(navLinks[i][0].split('.')[0]);


        // if ((window.location.pathname.includes(navLinks[i][0].split('.')[0]) && navLinks[i][0] !== '/') || (window.location.pathname == '/') )

        //if (((window.location.pathname.includes(navLinks[i][0].split('.')[0]) && window.location.pathname.trim() != '/')) || (window.location.pathname == navLinks[i][0])) {
        if (((window.location.pathname.includes(navLinks[i][0].split('.')[0]) && navLinks[i][0] != '/' || (window.location.pathname == navLinks[i][0])))) { 
            $('.nav').append(`<a class=\"active\" href=\"${navLinks[i][0]}\">${navLinks[i][1]}</a >`);
        }
        else {
            $('.nav').append(`<a class=\"inactive\" href=\"${navLinks[i][0]}\">${navLinks[i][1]}</a >`);
        }
       
    }
    // Append navigation menu toggle
    $('.nav').prepend(`<a href=\"javascript:void(0);\" class="navToggle" id="navToggle" onClick="toggleMenu()">Navigation☰</a >`);

    // Put a <br/> at the end of each main div to pad it
    $('main').append('<br/>');
    // Footer
    $('body').append('<footer><p>Website made with <3 by xad1561 <br> No generative AI was used in the making of this website</p></footer>');
});

function toggleMenu() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += "responsive";
    } else {
        x.className = "nav";
    }
    return x;
}