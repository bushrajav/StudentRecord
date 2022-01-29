$(document).ready(function(){
	
	function displayWeather(alldata){
		console.log(alldata);
		$.each(alldata.consolidated_weather,function(index,value){

				var printWeather='<li><img src="https://www.metaweather.com/static/img/weather/'+value.weather_state_abbr+'.svg" width="40px" height="40px"/></br>'+value.weather_state_name+'</br>'+"Min :"+parseFloat(value.min_temp).toFixed()+"&#8457"+'</br>'+"Max :"+parseFloat(value.max_temp).toFixed()+"&#8457"+'</br>'+parseFloat(value.wind_speed).toFixed()+"mph"+'</br>'+"&#8594"+'</li>';
		
		
		$('#list_items').append(printWeather);
		});
	}
	$('#search_here').click(function(){
var object1 = new Weather();
var text_value=$('#text_box').val();
console.log(text_value);


object1.getTextboxVal(text_value) //this function returns woeid
.done(function(woeid){
object1.getWoeid(woeid)//return website with full weather info 
.done(displayWeather);
});
});
});
