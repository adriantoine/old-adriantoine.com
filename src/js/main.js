
var $ = require('jquery'),
    Pjax = require('pjax');

$(function() {

    $('#menu-link').on('click', function() {

        $('body').addClass('has-left-menu-open');

        setTimeout(function() {
            $('.wrapper').one('click', function() {
                $('body').removeClass('has-left-menu-open');
            });
        }, 500);

    });

});

new Pjax({
  elements: 'a.is-internal-link',
  selectors: ['.site-body']
});
