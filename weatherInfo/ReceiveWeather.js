function Weather(){
	this.address= "https://www.metaweather.com/api/";
	
	//console.log(this.address);
}
Weather.prototype.getTextboxVal= function(searched_city){
							var l =this;

			 return  $.ajax({
                    url: l.address +'location/search/?query='+searched_city
						
						//var firstElement=data.shift();
						//console.log(firstElement);
						});
					
					
}
Weather.prototype.getWoeid= function(cities){
	var topCity=cities.shift();
					var b =this;
							// console.log(topOneWoeid);


	return $.ajax({
		
		 url: b.address+'location/'+topCity.woeid+'/'
		});



}
