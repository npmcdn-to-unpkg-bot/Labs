$(document).ready(function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET','https://pixabay.com/api/?key=2717787-691d61cdcb6847f3180471c5d&min_width=640&min_height=400&image_type=photo&pretty=true&q="fun holiday"',true);
	xhr.send();
	var parsed;
	xhr.onreadystatechange = function() { // (3)
	  if (xhr.readyState != 4) return;


	  if (xhr.status != 200) {
		alert(xhr.status + ': ' + xhr.statusText);
	  } else {
		parsed = JSON.parse(xhr.responseText);
		console.log(parsed);
		render(parsed);
	  }
	};
	
	//console.log('hits', parsed);
	function render(data) {
		console.log('data.hits', data.hits);
		var html = $('#template').html();
		var tmpl = _.template(html);
		var result = tmpl({
			count: data.hits.length-1, 
			img: data.hits
			});
		
		$('.jcarousel-wrapper').html(result);
		$('.jcarousel').jcarousel({
			width: '640px', 
			height: '400px'
		});
		
	}
    
    
});

