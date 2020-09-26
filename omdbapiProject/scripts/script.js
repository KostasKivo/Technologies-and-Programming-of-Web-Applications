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

function login(username,password) {
	if(username==="" || password ==="") {
		document.getElementById('username-input').value="";
		document.getElementById('password-input').value="";
		alert("Please fill all fields to login!");
		return;
	} 


	$.ajax({
		type:'POST',
		url:'localhost:8090/api/v1/user',
		data: JSON.stringify(document.getElementById('username-input').value),
		function success() {
			alert("Its successful");
	});
}


function JAVAprint() {
	console.log(data)
}
