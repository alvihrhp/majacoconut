$(document).ready(() => {

    $('#nav-mobile').click(function() {
        $('body').css('overflow-y', 'hidden');
        $('.navbar-list').show().animate({width: '308.8px'}, 500);
    })

    $('#close-nav-mobile').click(function() {
        $('body').css('overflow-y', 'scroll');
        $('.navbar-list').hide().animate({width: '0px'}, 1000);;
    })

    $(window).resize(checkPosition);

    function checkPosition() {
        const videoHeight = $('#home-video').height();

        const positionTop = $('#home-video').position();

        if(window.matchMedia('(min-width:75em)')) {
            $('.slider-container').css('height', (videoHeight - Math.abs(positionTop.top)) + 'px');
        } else {
            // $('.video-text-container').css('height', videoHeight);
        }
    }

    let time = 0;
    let changeText = 0;

    setInterval(function () {

        changeText += 1000;
        checkPosition();
        
        if((changeText % 4000) === 0) {
            time += 1;
            if((time % 2) === 1) {
                $('#video-text').fadeOut(100, function() {
                    $(this).html(`
                    Producing Top Quality
                        <div class="coconut-box">Coconut</div> 
                    for the Best Price`).fadeIn(400)
                })
            } else {
                $('#video-text').fadeOut(100, function() {
                    $(this).html(`
                    Indonesia's Leading Source of 
                        <div class="coconut-box">Coconut</div> 
                    Products`).fadeIn(400)
                })
            }
        }
        
        

    }, 1000)

    

})