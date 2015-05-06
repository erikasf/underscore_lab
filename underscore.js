// PUT YOUR CODE HERE!!!
* average - returns the average value in a given array

```
/*average value of array is taking the contents of an array and adding them together and then dividing them by their length*/
var array = avg[4,6,1,1];
sum = 0 
for( i = 0; i < avg.length; i++){
	sum = sum + avg[i];
	}
average = sum / avg.length;
document.write("The average is " = average);
=> 3
```

* contains - returns true is a given value is present in an array

```
/*in this method we are trying to match a given value to those in an array. we go about this by using regular expressions and testing the string tha we make from the array. So first things to do are turn an array into a string by utilizing Javascripts .toString() method*/
_.contains([7,55,99], 99);
var arr = new Array (7,55,99);
var aq = console.log(arr.toString());
/*now we will use the / /.test  regularexpressions method to find any matching values given to us in the arguments above that contain the array as the first argument and 99 as the value we wish to check for*/
/99/.test("7,55,99");
=> true
```

* first - returns the first element in an array

```
/*this is just going to use the findIndex method. it will be called upon the array and should return the 0 index which is five in this example*/
_.first([5, 4, 3, 2, 1]);
var first = [5,4,3,2,1];
console.log(first[0]);
=> 5
```

* last - returns the last element in an array

```
/*need to find the length of the array and then return the last one. so first thing is to find the length but you have to be careful not to just find out how many numbers are in it. i'm looking for the last index so i will be using length-1*/
var myArray = [5,4,3,2,1];
console.log(array.length-1);
/* this results in the value 4, indicating that there are five actual values in the array so the indexes run from 0 to 4. So now that I know how many are in the array, i can simply use the index value to get it*/

 console.log(myArray[4]);
 =>1c
_.last([5, 4, 3, 2, 1]);
=> 1
```
// /*first we need to find a way to make the index come up randomly. We also need 
                                       // version into and that we have a temp variable for the index that we are working with. 
// we will also have to switch . 
// My variables will be:*/

``` function doTheShuffle(){     
var temp;     //we need to define our 
function ShuffleArray(collection) {
  var currentIndex = collection.length;
  var randomIndex;
  var tempVal;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex += -1;

    tempVal = collection[currentIndex];
    collection[currentIndex] = collection[randomIndex];
    collection[randomIndex] = tempVal;
  }
console.log( collection);
}
     ]    } }3

_.shuffle([1, 2, 3, 4, 5, 6]);
=> [4, 1, 6, 3, 5, 2]
```


* sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.


```
	var sample = Math.floor(Math.random(1, 6)){
		var array = [];
		array.push[i];
		}	
console.log[i];
_.sample([1, 2, 3, 4, 5, 6]);
=> 4

_.sample([1, 2, 3, 4, 5, 6], 3);
=> [1, 6, 2]
```

* difference - returns the values from array that are not present in the other array.

``` function String diff(String str1, String str2) {
    int index = str1.lastIndexOf(str2);
    if (index > -1) {
      return str1.substring(str2.length());
    }
    return str1;
  }
}

_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
=> [1, 3, 4]
```

* indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.

```
function whereIsIt(){
	var value;
	for(var i = 0 ; i < array.length); i ++){
	if(array[i]== value;){
		console.log[i]}
		else (array[i] !== value){
			return (-1)
		}
	}
}
}
_.indexOf([1, 2, 3], 2);
=> 1
```


* pluck - extracts a list of property values and returns them in an array.

```
function pluck(obj, key) {
    return _.map(obj, _.property(key));
  };
  var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');+##Part 2
+
+* each - iterates over an array and calls a given function with each element
+
+```
+_.each([1, 2, 3], alert);
+=> alerts each number in turn...
+```
+
+* compact - returns a new array with all provided undefined values removed
+
+```
+_.compact([1, "hello", undefined, 3, undefined]);
+=> [1, "hello", 3]
+```
+
+* map - returns a new array of values produced by running each element of an array through a given function
+
+```
+_.map([1, 2, 3], function(num){ return num * 3; });
+=> [3, 6, 9]
+
+_.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); });
+=> ["DOGS", "BEFORE", "CATS"]
+
+```
+
+* filter - Looks through each value in the list, returning an array of all the values that pass a truth test
+
+```
+var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
+=> [2, 4, 6]

=> ["moe", "larry", "curly"]
}
