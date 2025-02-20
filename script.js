
if (Drupal.jsEnabled) {
    $(document).ready(function() {
		
		// Show / hide toggle hedlines
        $('#js-hide-show').click(function() {
            $('.toggle').slideToggle();
        });
		
		// Mouseover map
		$('#map area').hover(
			function(event) {
				$('#map-container ul a[title*="'+ event.target.title +'"] h3').animate({fontSize: '+=1em'}, 300, function()
					{ $(this).css({'color': '#000', 'text-decoration': 'underline'});});
				
				$('#map-container img[alt*="'+ $(this).attr('alt') +'"]').css({'opacity': 1, 'display': 'inline'});

				//var area = $(this).attr('title');
				//var selectedImg = $('#big-map img[alt*="'+ area +'"]');
				//selectedImg.css({'display': 'inline', 'opacity': 0}).fadeTo(400, 1);
			},
			function(event) {
				$('#map-container ul a[title*="'+ event.target.title +'"] h3').animate({fontSize: '-=1em'}, 300, function()
					{ $(this).css({'color': '', 'text-decoration': 'none'});});
				
				$('#map-container img[alt*="'+ $(this).attr('alt') +'"]').css({'opacity': 0, 'display': 'none'});
				
				//var area = $(this).attr('title');
				//var selectedImg = $('#big-map img[alt*="'+ area +'"]');
				//selectedImg.css({'display': 'none', 'opacity': 0});
		});
		
		// Map highlight
		$("#map-container ul a").hover(function() {
				var area = $(this).attr('title');
				var selectedImg = $('#map-container img[alt*="'+ area +'"]');
				selectedImg.css({'display': 'inline', 'opacity': 0}).fadeTo(400, 1);
		},
			function() {
				var area = $(this).attr('title');
				var selectedImg = $('#map-container img[alt*="'+ area +'"]');
				selectedImg.css({'display': 'none', 'opacity': 0});
		});
    });
}