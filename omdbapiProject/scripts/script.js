function getanswer(q) {
	$.ajax({
		type: 'GET',
		url: "https://www.omdbapi.com/?s="+q+"&apikey=6ff8e449",
		success: function(data) {
			var movieurl = "https://www.imdb.com/title/" + data.Search[0].imdbID ;
			document.getElementById('results').innerHTML="<h1>" +data.Search[0].Title+ "</h1><br><img src = '"+data.Search[0].Poster+"'/> <br><p> Year Released: " + data.Search[0].Year+ "</p><br><p> <a href ="+movieurl+" target ='_blank'>" + "IMDB page" + "</a></p>";
			window.scrollTo(0,document.body.scrollHeight);
		}

	});

}


// getanswer function without ajax
// function getanswer(q) {
// 	$.get("https://www.omdbapi.com/?s="+q+"&apikey=6ff8e449", function(rawdata) {
// 		var rawstring = JSON.stringify(rawdata);
// 		data = JSON.parse(rawstring);
// 		var title = data.Search[0].Title;
// 		var year = data.Search[0].Year;
// 		var imdburl = "https://www.imdb.com/title/" + data.Search[0].imdbID+"/";
// 		var posterurl = data.Search[0].Poster;
// 		// document.getElementById('answer').innerHTML="<h1>" +title+ "</h1><br><img src = "'+posterurl+'"/><br><p> Year Released: " + year+ "</p><br><p> IMDB page: <a href ="'+imdburl+'"taget ='_blank'>" + imdburl + "</a></p>";
// 	});
// }

function JAVAprint() {
	console.log(data)
}
