$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000);

 })

})

//facebook messenger 
window.fbMessengerPlugins = window.fbMessengerPlugins || {
  init: function () {
    FB.init({
      appId            : '1678638095724206',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });
  }, callable: []
};
window.fbAsyncInit = window.fbAsyncInit || function () {
  window.fbMessengerPlugins.callable.forEach(function (item) { item(); });
  window.fbMessengerPlugins.init();
};
setTimeout(function () {
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}, 0);
