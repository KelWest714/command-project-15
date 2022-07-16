var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
    itemSelector: '.grid__item',
    stamp: '.grid__stamp',
    gutter: '.grid__gutter-sizer',
    horizontalOrder: true,
});
