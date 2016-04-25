	$('#query').on('paste', function() { if($('#query').val() == 'Enter Search...'){$ ('#query').val(''); } });
	
	
	$(function(){
$("#price_swap").bind("click",function(){
if($.cookie('VSVatPrices') == 'inc')
{
$('#price_swap_link').attr('class','price_swap_inc');
}
else
{
$('#price_swap_link').attr('class','price_swap_ex');
}
return false;
});
if($.cookie('VSVatPrices') == 'inc')
{
$('#price_swap_link').attr('class','price_swap_inc');
}
else
{
$('#price_swap_link').attr('class','price_swap_ex');
}
});
//-->
	
	
	
	
	

<!--
function updateBasketHover(productid, quantity)
{
//alert(productid);
$.getJSON('/ajax/addtobasket/true/?product_id=' + productid + '&quantity=' + quantity, function(strJSON)
{
if(typeof(strJSON.error) != 'undefined' && strJSON.error == 'no_stock')
{
alert(strJSON.title+'\n\nSorry, we currently only have '+strJSON.stock+' of this item in stock and it is already in your basket');
}
else
{
updateMiniBasket(strJSON);
}


});
}


 var origionalPaImage = null;
  var rememberOrigionalSelection = false;
  // unbind existing events and set actions
  var initAttributeImageSwap = function()
  {
    //Do not show a swatch if we have the seeting turned on and there is no image relating to the colour
    
    $('img.attribute_swatch_icon').unbind('mouseover');
    $('img.attribute_swatch_icon').unbind('mouseout');
    // update attriobute image based on current swatch
    $('img.attribute_swatch_icon').mouseover(function(){

      intProductParentID = $(this).attr('id').replace(/pid-([0-9]+)-+.*/,'$1');
      strAttributeValue = $(this).attr('id').replace(/pid-[0-9]+-+([a-z|0-9]+)/i,'$1');
      strAttributeValue = strAttributeValue.replace(/_/g,' ');
      eval('objProductImages = ' + $('#arrAttributeImages_'+intProductParentID).val());
      eval('objProductEnlargeImages = ' + $('#arrAttributeEnlargeImages_'+intProductParentID).val());

      if (typeof(objProductImages) != 'undefined' && typeof(objProductImages[strAttributeValue]) == 'undefined') {
        if (typeof($('#attrib_val_orig_' + $(this).attr('id'))) != 'undefined') {
          if (typeof(objProductImages[$('#attrib_val_orig_' + $(this).attr('id')).val()]) != 'undefined') {
            strAttributeValue = $('#attrib_val_orig_' + $(this).attr('id')).val();
            strAttributeValue = strAttributeValue.replace(/pid-[0-9]+-+([a-z|0-9]+)/i,'$1');
            strAttributeValue = strAttributeValue.replace(/_/g,' ');
          }
        }
      }

      if(typeof(objProductImages)!='undefined' && objProductImages[strAttributeValue]!='undefined')
      {

        objTarget = '#product_'+intProductParentID;
        origionalPaImage = $('li.product_image img:first, li.related_product_image img:first',objTarget).attr('src');
        origionalPaEnlargeImage = $('li.product_image a.listing_enlarge, li.related_product_image a.listing_enlarge',objTarget).attr('href');

        $('li.product_image img:first, li.related_product_image img:first',objTarget).attr('src',objProductImages[strAttributeValue]);
        if (objProductEnlargeImages != undefined)
        {
          $('li.product_image a.listing_enlarge, li.related_product_image a.listing_enlarge',objTarget).attr('href',objProductEnlargeImages[strAttributeValue]);
        }
        $('li.product_image a:first, li.related_product_image a:first',objTarget).attr('href',$(this).parent().attr('href'));
      }
            return true;
    });
    // restore origional attribute image if rememberOrigionalSelection is true
    $('img.attribute_swatch_icon').mouseout(function(){
      if(origionalPaImage!=null && rememberOrigionalSelection==true){
        intProductParentID = $(this).attr('id').replace(/pid-([0-9]+)-+.*/,'$1');
        objTarget = '#product_'+intProductParentID;
        $('li.product_image img:first',objTarget).attr('src',origionalPaImage);
        origionalPaImage=null;
        $('li.product_image a.listing_enlarge',objTarget).attr('href',origionalPaEnlargeImage);
        origionalPaEnlargeImage=null;
        return true;
      }
    });

    $('div.product').each(function(){
      objTarget = this;
      blnHaveGotImage = true;
      $('img.attribute_swatch_icon',this).each(function(){
        if (!blnHaveGotImage)
        {
          intProductParentID = $(this).attr('id').replace(/pid-([0-9]+)-+.*/,'$1');
          strAttributeValue = $(this).attr('id').replace(/pid-[0-9]+-+([a-z|0-9]+)/i,'$1');
          strAttributeValue = strAttributeValue.replace(/_/g,' ');

          eval('objProductImages = ' + $('#arrAttributeImages_'+intProductParentID).val());
          eval('objProductEnlargeImages = ' + $('#arrAttributeEnlargeImages_'+intProductParentID).val());
          if(objProductImages[strAttributeValue]!='undefined')
          {
            if(objProductImages[strAttributeValue]=='/images/no_image.jpg')return false;

            $('li.product_image img:first',objTarget).attr('src',objProductImages[strAttributeValue]);
            if (objProductEnlargeImages != undefined)
            {
              $('li.product_image a.listing_enlarge',objTarget).attr('href',objProductEnlargeImages[strAttributeValue]);
            }
            $('li.product_image a:first',objTarget).attr('href',$(this).parent().attr('href'));

            blnHaveGotImage = true;
          }
        }
      });
    });
  }
  // callback function called by filters.js on ajax update
  var fnPostFilterCallback = function()
  {
    var blnSwatchesShown = true;
    $('.attribute_swatches_box').each(function(){
      if ($(this).is(':hidden'))
      {
        blnSwatchesShown = false;
      }
    });
    if ($('#product_listings_image script').length > 0 && location.hash != '') eval($('#product_listings_image script').text());
    if (blnSwatchesShown)
    {
      initAttributeImageSwap();
    }
      }
  // bund events on entry
  $(function(){
    fnPostFilterCallback();
  });
  
  
  
  function show_more_or_less(e, el) {
    e.preventDefault();
    el.expand = !el.expand;
    $(el).text(el.expand?"Read Less...":"Read More...");
    $(el).closest('.wrapper').find('.small_description, .big_description').toggleClass('small_description big_description');
  }

  //$(function(){
    //  if($('#category_description').length < 360)
      //{
         //$('.description_expand').hide();
      //}
  //})
 
 (function($, window, undefined){$(document).ready(function()
{
  
  var $sticky_header = $('#header_top_menu'),
    $sticky_header_bar = $('#sticky_header_bar'),
    $header_btm_menu = $('#header_btm_menu'),
    blnAnimating = false,
    blnForceClose = false;

  if( ! $sticky_header_bar.length )
  {
    $sticky_header_bar = $( "<div />" )
      .attr( 'id', 'sticky_header_bar' )
      .appendTo( 'body' )
      .hide();
  }

  if($sticky_header.length)
  {
    var header_top = $sticky_header.offset().top + 80;

    $(window).scroll(function ()
    {
      if (!blnAnimating && !$sticky_header.hasClass('sticky_header') && scrollTop() > header_top)
      {
        showStickyHeader();
      }
      else if (!blnAnimating && $sticky_header.hasClass('sticky_header') && scrollTop() <= (header_top) )
      {
        hideStickyHeader();
      }
      else if(blnAnimating && !blnForceClose && scrollTop() <= (header_top))
      {
        blnForceClose = true;

        hideStickyHeader();
      }
    });
  }

  function showStickyHeader()
  {
    $sticky_header.addClass('sticky_header').css({position: 'fixed', top: '-50px'});
    $sticky_header_bar.length && $sticky_header_bar.show().css({position: 'fixed', top: '-50px'});
    $header_btm_menu.css({marginTop: '43px'});

    blnAnimating = true;

    $('#header_top_menu, #sticky_header_bar').stop().animate({
      top: 0
    }, {
      duration: 1000,
      step: function( now, slideDown ){
        $(this).css( "top", now );
      },
      complete: function() {
        blnAnimating = false;
      }
    });
  }

  function hideStickyHeader()
  {
    blnAnimating = true;

    $('#header_top_menu, #sticky_header_bar').stop().animate(
      {
        top: '-50px'
      },
      {
        duration: 500,
        step: function( now, slideUp )
        {
          $(this).css( "top", now );
        },
        complete: function() {
          $sticky_header.removeClass('sticky_header').css({position: '', top: ''});
          $sticky_header_bar.length && $sticky_header_bar.hide();
          $header_btm_menu.css({marginTop: ''});
          blnAnimating = false;
          blnForceClose = false;

                  }
      }
    );
  }

  function scrollTop()
  {
    return document.body.scrollTop || document.documentElement.scrollTop;
  }

});}(jQuery, window));
//]]>
	
	
	
	
	window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));
	
	
	initCurrency("GBP");
initVat();
$("#vat_basket_row").show();
	
	
	