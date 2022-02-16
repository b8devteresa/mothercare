document.addEventListener('DOMContentLoaded', function () {
    var link = ''
    $('a.map-btn').click(function () {
        link = $(this).attr('href');
        $(link).toggleClass('show-map');
    })
    $('.map-frame').click(function () {
        $(link).toggleClass('show-map');
    })
    

});


MutationObserver = window.MutationObserver || window.WebKitMutationObserver;


var dataGift = document.querySelectorAll("tbody[data-md-cart-free-items]")[0];
if(dataGift !=  undefined ){
  var observer1 = new MutationObserver(function(mutations, observer1) {
    $('tbody[data-md-cart-free-items]').closest('table').prev().show();
  });
  observer1.observe(dataGift, {
    subtree: true,
    childList: true,
    attributes: true
  });
}
var dataOffer = document.querySelectorAll("[data-md-cart-possible-offer-items]")[0];
if(dataOffer !=  undefined ){
  var observer = new MutationObserver(function(mutations, observer) {
    $('tbody[data-md-cart-possible-offer-items]').closest('table').prev().show();

	});
  observer.observe(dataOffer, {
    subtree: true,
    childList: true,
    attributes: true
  });
}

var dataShipping = document.querySelectorAll("[data-md-shipping]")[0];
if(typeof dataShipping !=  'undefined' ){
  var observerShipping = new MutationObserver(function(mutations, observer) {
    
	var htmlShipping = $('.cart__shipping').html().trim();
    if(htmlShipping.indexOf('Taxes calculated at checkout')!= -1){
      	var shippingLabel = htmlShipping.replace('Taxes calculated at checkout','shipping fee calculated at checkout');
    	 $('.cart__shipping').html(shippingLabel)
    }
    if(htmlShipping == 'Taxes calculated at checkout'){
    	 $('.cart__shipping').html('shipping fee calculated at checkout')
    }
  });
  observerShipping.observe(dataShipping, {
    subtree: true,
    childList: true,
    attributes: true
  });
}

// prefill customer register
if( typeof CF != 'undefined'){
  var $form = document.querySelector('form[data-cf-form="ewt0De"]');
  // // Alternatively, we provide a short-hand function for this:
  CF.ready(function() {
     if (typeof customer_info != 'undefined') {
      if(typeof customer_info.first_name != 'undefined')
          $form.cfForm.setFieldValue('first_name', customer_info.first_name);
      if(typeof customer_info.last_name != 'undefined')
          $form.cfForm.setFieldValue('last_name', customer_info.last_name);
      if(typeof customer_info.email != 'undefined')
          $form.cfForm.setFieldValue('email', customer_info.email);
      if(typeof customer_info.phone != 'undefined')
          $form.cfForm.setFieldValue('email', customer_info.phone);
     }
  });
}else{
  if (typeof customer_info != 'undefined') {
    if(typeof customer_info.first_name != 'undefined')
      $('#RegisterForm-FirstName').val(customer_info.first_name);
    if(typeof customer_info.last_name != 'undefined')
      $('#RegisterForm-LastName').val(customer_info.last_name);
    if(typeof customer_info.email != 'undefined')
      $('#RegisterForm-email').val(customer_info.email);
  }
}