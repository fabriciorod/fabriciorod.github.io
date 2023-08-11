(function($) {

    var settings = {

        // Parallax background effect?
        parallax: true,

        // Parallax factor (lower = more intense, higher = less intense).
        parallaxFactor: 20

    };

    skel.breakpoints({
        xlarge: '(max-width: 1800px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function() {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header'),
            $footer = $('#footer'),
            $main = $('#main');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            $body.removeClass('is-loading');
        });

        // Touch?
        if (skel.vars.mobile) {

            // Turn on touch mode.
            $body.addClass('is-touch');

            // Height fix (mostly for iOS).
            window.setTimeout(function() {
                $window.scrollTop($window.scrollTop() + 1);
            }, 0);

        }

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Footer.
        skel.on('+medium', function() {
            $footer.insertAfter($main);
        });

        skel.on('-medium !medium', function() {
            $footer.appendTo($header);
        });


    });

})(jQuery);