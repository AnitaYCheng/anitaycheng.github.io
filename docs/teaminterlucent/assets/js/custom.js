//  COMMENT 

jQuery('.nav-collapse .nav > li > a').click(function(){
			
			jQuery('.collapse.in').removeClass('in').css('height', '0');

		});


//  COMMENT 
//  COMMENT 
jQuery("a[data-gal^='prettyPhoto']").prettyPhoto();
//  COMMENT 

//  COMMENT 
		jQuery.noConflict()(function($){
			var $container = $('#container-folio');
					
			if($container.length) {
				$container.waitForImages(function() {
					
					// initialize isotope
					$container.isotope({
					  itemSelector : '.box',
					  layoutMode : 'fitRows'
					});
					
					// filter items when filter link is clicked
					$('#filters a').click(function(){
					  var selector = $(this).attr('data-filter');
					  $container.isotope({ filter: selector });
					  $(this).removeClass('active').addClass('active').siblings().removeClass('active all');
					  
					  return false;
					});
					
				},null,true);
			}});

//  COMMENT 


jQuery(document).ready(function(){
	jQuery('#nav').localScroll(3000);
	jQuery('.hero-unit').localScroll(3000);

	jQuery('#main-nav select').localScroll(400);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	jQuery('#team-section').parallax("50%", 0.1);
	jQuery('.bg').parallax("50%", 0.4);
	jQuery('#portfolio-section').parallax("50%", 0.1);
	jQuery('#contact-section ').parallax("50%", 0.1);
})
//  COMMENT 
	


