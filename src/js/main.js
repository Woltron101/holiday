jQuery(document).ready(function($) {

	$('.show-modal').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).closest('.advanced-search').hide();
		$($(this).data('target')).show();
	});
});

$('select, [type="checkbox"]').styler();
$('#all').closest('label').click(function(event) {
	if ($('#all').is(':checked')) {
		$('.jq-checkbox').each(function(index, el) {
			if (index === 0) return;
			if (!$(el).is('.checked')) $(el).trigger('click');
		});
	} else {
		$('.jq-checkbox').each(function(index, el) {
			if (index === 0) return;
			if (!$(el).is('.checked')) return;
			else $(el).trigger('click');

		});
	}


});
$("#placeSelect").on('change', function() {
	var place = $("#placeSelect option:selected").val();
	if (place == 0) $('.first-screen__search-form__all-btn').css('display', 'none');
	else $('.first-screen__search-form__all-btn').css('display', 'block');
})
$(".first-screen__search-form__all-btn").on('click', function(event) {
	event.preventDefault()
	$(".select-box").slideToggle(333);
})
$('.form-label').click(function(event) {
	$(this).next('.elem').slideToggle(333);
});

$('#mapToggle').click(function(event) {
	event.preventDefault();
	$('.map').slideToggle(333);
	$('.s-form').slideToggle(333);

});
