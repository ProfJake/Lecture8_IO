var events = require("events");
var Exercise = require("Exercise");
/*trackerService.js

Improved Tracker Functionality.
In this lab, I've added the ability for the tracker to emit an event when
a new exercise is set.  In a fully-featured application we could respond to
this event in a variety of ways. For now we are just going to re-

Activities:  Walk/Run/Swim
Input:  Exercise type
        Distance (miles)
        Weight (lbs)
        Time (minutes)
Output: Calories Burned

 Formula Sources:

 https://lovandy.com/wellness/physical/calories-burned-by-walking.html AND
 https://lovandy.com/wellness/physical/calories-burned-running.html
*/

//requires weight in lbs
//Time in minutes
//distance in miles
//Constructor for the tracker Class.  
var tracker = function(exercise, weight, distance, time) {
    try{

	this.exercise=new Exercise(exercise);
	
	this.weight = Number(weight);
	this.distance = Number(distance);
	this.time = Number(time);
	events.EventEmitter.call(this);
    } catch (err){
	console.err("Error recieved during service creation");
	throw err;
    }
};


tracker.prototype={    


    //updated to accomodate swimming
    calculate: function() {
	return this.exercise.calculate(this.weight, this.distance, this.time);
    },
    
    //speed is consistently calculated for all exercise times (distance/time)
    calcSpeed: function(){
	return this.distance/(this.time/60);//miles per hour
    },

    setExercise: function(exercise){
	this.exercise=new Exercise(exercise);
	this.emit('exerciseChanged');
    },
    setWeight: function(weight){
	this.weight=weight;
	this.emit('weightChanged');
    },
    setTime: function(time){
	this.time=time;
	this.emit('timeChanged');
    },
    setDistance: function(distance){
	this.distance=distance;
	this.emit('distanceChanged');
};

module.exports = tracker;
