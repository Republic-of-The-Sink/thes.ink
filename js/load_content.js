$(document).ready(function () {
    var navLinks = [
        ['/', 'Home'],
        ['/pages/news/', 'News'],
        ['/pages/archives/', 'The Archives'],
        ['/pages/faq.html', 'FAQs']
    ];

    // TODO: Replace all selectors to nav class with nav tag
    $('body').prepend(`<nav class="nav"></nav>`);
    $('head').prepend(`<link rel="stylesheet" href="/style.css"><link rel="icon" href="/assets/icon.png">`);
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0"><meta charset="UTF-8">');
    $('head').append(`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Science+Gothic:wght@100..900&display=swap" rel="stylesheet">`);
    $('title').append(' - Republic of The Sink');

    // console.log(window.location.pathname);

    const pathSplit = window.location.pathname.split('/');
    var path = '';

    // Add the back button
    if (pathSplit.length > 2 && pathSplit[1] == 'pages') {
        if (window.location.pathname.includes('.html')) {
            $('main').prepend(`<a id="back" href="${window.location.pathname + "/.." }">Go Back</a>`);
        } else {
            $('main').prepend(`<a id="back" href="${window.location.pathname + ".." }">Go Back</a>`);
        }

    }

    // Handle adding navigation path breadcrumb
    $('main').prepend('<p id="path"></p>');
    console.log(pathSplit);
    if (pathSplit[pathSplit.length - 1] == '') {
        pathSplit.pop();
    }
    if (pathSplit.length <= 1) {
        $('#path').append(`<a href="/">Home</a>`);
    }
    else {
        $('#path').append(`<a href="/">Home</a> &gt;`);
    }
    for (var i = 1; i < pathSplit.length; i++) {
        if (pathSplit[i] != '/') {
            path += '/' + pathSplit[i];
        }

        if (pathSplit[i] == 'pages') {
            continue;
        }

        if ((i < pathSplit.length - 1)) {
            $('#path').append(`<a href=${path}> ${pathSplit[i].split('.')[0]}</a>  &gt; `);
        }
        else {
            $('#path').append(`<a href=${path}> ${pathSplit[i].split('.')[0]}</a>`);

        }

        console.log(path);
    }

    for (var i = 0; i < navLinks.length; i++) {
        // Append navbar links
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
    $('body').append('<footer><p>Website made with <3 by <s>jirachifan12</s> xad1561<br>No generative AI was used in the making of this website.</p><p>Text is available under the CC-BY-SA 4.0 License, unless otherwise specified.<br>Source code available at <a href="https://github.com/Republic-of-The-Sink/thes.ink">github.com/Republic-of-The-Sink/thes.ink</a><br>Reach us at <a href="mailto:contact@thes.ink">contact@thes.ink</a></p></footer>');
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