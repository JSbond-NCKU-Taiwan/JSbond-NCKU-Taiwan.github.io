$('.youtube_btn1').magnificPopup({
  items: {
       src: "https://www.youtube.com/watch?v=29pKi6O3mFo"
     },
  type: 'iframe',
  iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>',
        patterns: {
            youtube: {
                index: 'youtube.com/',
                id: 'v=',
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            }
         },
         srcAction: 'iframe_src',
     }
});
