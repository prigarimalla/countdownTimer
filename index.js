// Edit this time for the next live event. 
// Format is "YYYY-MM-DD <timezone> HH:MM:SS" where the time is in 24 hour time. 
// For example: April 28, 2016 at 4:30 PM central time would be:
// var time = "2016-04-28 CDT 16:30";
var time = "2016-04-26 CDT 04:38:00";

// Edit this for the URL of the livestream. Should be the full URL.
// For example:
// var link = "http://www.google.com";
var link = "http://www.google.com";



$("#linktext").attr("href", link);
var date = new Date(time);
var timedelta = (date.getTime()-Date.now())/1000;
if (timedelta<=0) {
	timedelta=0;
	window.location.replace(link);
}
var clock = $('.your-clock').FlipClock(timedelta,{
	countdown: true,
	callbacks: {
		stop: function () {
			window.location.replace(link);
		}
	}
});

clock.start();