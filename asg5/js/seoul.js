$(document).ready(function() {
    $('h1').hide().delay(1000).fadeIn(1500);
	$('nav').hide().delay(1500).fadeIn(1500);
	$('.links').eq(0).on('click', function() {
		$('section').empty();
		let $video = '<iframe width="500" height="500" src="https://www.youtube.com/watch?v=F8wI5ZosdRA" autoplay></iframe>';
		$('section').html($video);
	})
	$('.links').eq(1).on('click', function() {
		$('section').empty();
		let $hanriver = '<img src="images/hanriver.jpg">';
		$('section').html($hanriver);
	})
	$('.links').eq(2).on('click', function() {
		$('section').empty();
		let $sights = ' <p>Seoul Tower <br> Namdaemun Market <br> Bongeunsa <br> <Maple Tree House <br> Gyeongbokgung Palace</p>';
        $('section').html($sights);
        $('section').hide().delay(1000).fadeIn(1500);
	})
});