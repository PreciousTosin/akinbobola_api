
var Twitter = require('twitter');
var readline = require('readline');
//creating a ReadTweet App

/*var client = new Twitter({
	consumer_key: 'mgkWhDuPTDyN8ROnLM9XrkUx5' ,
	consumer_secret:'BsZPvOeHtjiv3WBn2qZUi35zWlqxn1TlKymG8XzbGijc0TjB3E,'
	bearer_token:'92459786-v5aHqXUFBehWAaawKWwQVMO339DmlkDxR8BmtGeJx'
})*/

var TweetPull = function(){
	this.client = new Twitter({
		consumer_key: 'mgkWhDuPTDyN8ROnLM9XrkUx5',
		consumer_secret:'BsZPvOeHtjiv3WBn2qZUi35zWlqxn1TlKymG8XzbGijc0TjB3E',
		bearer_token:'92459786-v5aHqXUFBehWAaawKWwQVMO339DmlkDxR8BmtGeJx'

	});

	this.interface = readline.createInterface({
  						input: process.stdin,
  						output: process.stdout

					});

	TweetPull.prototype.read = function(){
		this.interface.question('What is your username? ',function (username) {
  			var params = {screen_name: username};
			this.client.get('statuses/user_timeline', params, function(error, tweets, response) {
  			if (!error) {
	    		console.log(tweets);
	  		}
	  	});
  		console.log('Thank you for your valuable feedback:', answer);
  		rl.close();
	});

		var params = {screen_name: username};
		this.client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
    		console.log(tweets);
  		}

	});
	
	TweetPull.prototype.post = function(){
		this.postTweets = "I posted this";
		console.log(this.postTweets);

	}
}


var twitter = new TweetPull();
twitter.read();
