
var $ = require('jquery');

$(function() {

    $('#menu-link').on('click', function() {

        $('body').addClass('left-menu-open');

        setTimeout(function() {
            $('.wrapper').one('click', function() {
                $('body').removeClass('left-menu-open');
            });
        }, 500);

    });

});
