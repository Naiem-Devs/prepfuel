(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
  
 // menu 
  $('.rv_btn').click( function (){ 
    $('.rev-menu').toggleClass('rv_sitevar');   
  }); 

  $('.selecttwo').niceSelect();
  $('.select_three').niceSelect();






// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.SemiCircle(ck_time, {
strokeWidth: 6,
color: '#fff',
trailColor: '#eee',
trailWidth: 6,
easing: 'easeInOut',
duration: 1400,
svgStyle: null,
text: {
value: '70',
alignToBottom: false
},

// Set default step function for all animate calls
step: (state, bar) => {
bar.path.setAttribute('stroke', state.color);
var value = Math.round(bar.value() * 100);
if (value === 0) {
bar.setText('70');
} else {
bar.setText(value+"%");
}

bar.text.style.color = state.color;
}
});
bar.text.style.fontSize = '2rem';

bar.animate(0.45);
  
 
})(jQuery);
