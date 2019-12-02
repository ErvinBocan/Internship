AOS.init({
    offset:250,
    duration:1200
});
// jQuery Smooth Scrolling
$('.nav a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(hash).offset().top
            }, 800);
    }
});


//slide menu open //
function openSlideMenu(){
    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
    document.getElementById('hamburger').style.visibility = 'hidden';
    
}
//slide menu close //
function closeSlideMenu(){
    document.getElementById('menu').style.width = '0px';
    document.getElementById('content').style.marginLeft = '0px';
    document.getElementById('hamburger').style.visibility = 'visible';
}

// progress bar counter//
var count = $(('#count'));
$({ Counter: 0 }).animate({ Counter: count.text() }, {
  duration: 5000,
  easing: 'linear',
  step: function () {
    count.text(Math.ceil(this.Counter)+ "%");
  }
});

var s = Snap('#animated');
var progress = s.select('#progress');

progress.attr({strokeDasharray: '0, 251.2'});
Snap.animate(0,251.2, function( value ) {
    progress.attr({ 'stroke-dasharray':value+',251.2'});
}, 5000);














