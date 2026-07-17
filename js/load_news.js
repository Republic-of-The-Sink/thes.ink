$(document).ready(function () {
    // List of news articles
    var articles = [
            ['./bpm.html', 'How to *actually* get the BPM of songs', '/assets/images/sink.webp', 'July 17, 2026']
    ];

    for (var i = 0; i < articles.length; i++) {
        $('#news').append(`<a class="card" href="${articles[i][0]}" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${articles[i][2]});background-repeat: no-repeat;background-size: 100% auto;background-position: center;">${articles[i][1]}<br><span style="font-size: 50%;">${articles[i][3]}</span></a>`);
    }
}); 