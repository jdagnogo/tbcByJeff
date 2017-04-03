# tbcByJeff
An ionic 2 app talking with navitia.io's API

The navitia API : https://www.navitia.io/
you can get stop with coordinate or with stop-area code.
First you have to get a API key when registered.
I implemented the navitia service so you just have to put your url.I implemented this app to help me when I am mooving in Bordeaux (France). 

For example this is Line 1 at Bordeaux and the stop is next to where I live(try it on your navigator and enter as username the api key):
https://api.navitia.io/v1/coverage/fr-sw/lines/line:OBO:01/stop_areas/stop_area:O33:SA:11332/stop_schedules

you have to start like this : https://api.navitia.io/v1/coverage
fr-sw means that it is in France

lines/line:OBO:01 means that I looking for a bus line where the id is OBO:01 
you can find the id with dataSet https://www.navitia.io/datasets (That is the hardest part) 

stop_areas/stop_area:O33:SA:11332 means that in that line I am looking for a specific stop witch is O33:SA:11332

stop_schedules means i want the next stop schedules (you will get the theoric hours so it will not tell you if there are some delays)


