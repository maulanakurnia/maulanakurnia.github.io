jQuery(document).ready(function(){
	jQuery('.progress-horizontal').each(function(){
		jQuery(this).find('.progress-horizontal__progress ').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});