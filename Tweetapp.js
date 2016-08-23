
var Twit = require('twit');
var readline = require('readline');

var Tweetpull = function(){
	this.client = new Twit({
		consumer_key: 'TXyXe0Xflb7787yLKWO1Ux8Vw',
		consumer_secret:'SCVl9IBUwqLRqYW4PqcM82e4bBF7Hg6A8ucL0J1l90Hp2qxUqA',
		access_token: '92459786-ljSWwj7gQ101O7fnEqSc4UUpPMY1ICIZaL3zyUw5L',
  	access_token_secret: 'LARvh9CsfVsnkfnvMmMgyVqyp1ABKKEKtRnRGQLqnVPeS'
	});

	this.interface = readline.createInterface({
		input: process.stdin,
  		output: process.stdout
	});	

	Tweetpull.prototype.read = function(){
		this.interface.question('What is your username? ', function(username){
			var params = {user_id: username, count:2};
			this.client.get('statuses/home_timeline', params, function(error, data, response){
				if (!error){
					console.log(data);	
				}
			}.bind(this));
  		this.interface.close();
		}.bind(this));
	}
}



var twitter = new Tweetpull();
twitter.read();
