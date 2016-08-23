
var Twit = require('twit');
var readline = require('readline');
var config = require('./config');

	var Tweetpull = function(){

		this.client = new Twit(config);//config module contains the authentication tokens

		this.interface = readline.createInterface({
			input: process.stdin,
	  	output: process.stdout
		});	

		Tweetpull.prototype.read = function(){
			this.interface.question('What is your username? ', function(username){
				var params = {user_id: username, count:10};
				this.client.get('statuses/home_timeline', params, function(error, data, response){
					if (!error){
						var tweet = data;
						for(var i = 0; i < tweet.length; i++){
								console.log(tweet[i].text);
						}	
					}
				}.bind(this));
	  		this.interface.close();
			}.bind(this));
		}

		Tweetpull.prototype.post = function(){
			this.interface.question('What is your new status: ', function(tweet){
				var params = {status: tweet};
				this.client.post('statuses/update', params, function(error, data, response){
					if(!error){
						console.log(data["text"]);
					}
				}.bind(this));
				this.interface.close();
			}.bind(this));
		}
}

	

var twitter = new Tweetpull();
twitter.read();
twitter.post();