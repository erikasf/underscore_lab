#Underscore Lab Part 1

You're going to recreate some of the functionality of the popular JS library Underscore.js.  Write all of the following methods inside of an `_` object.

**Fork this repo, push your code to your fork, and submit the link to your fork on students.gschool**

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

* max - returns the maximum value in an array


```
max : function (x) {
+		var myArray = x;
+		var arrayLength = x.length;
+		var maxItem = myArray[0];
+		// console.log(maxItem);
+		for (var i = 0; i <= (arrayLength - 1); i++) {
+			if (myArray[i] >= maxItem) {
+				maxItem = myArray[i];
+				//	console.log(maxItem);
+			} else {
+				maxItem = maxItem;
+			}
+		}
+		return maxItem;
+	}
+	
var numbers = [10, 5, 100, 2, 1000];
_.max(numbers);
=> 1000
```

* min - returns the minimum value in an array

```
	min : function (x) {
+		var myArray = x;
+		var arrayLength = x.length;
+		var minItem = myArray[0];
+		// console.log(minItem);
+		for (var i = 0; i <= (arrayLength - 1); i++) {
+			if (myArray[i] <= minItem) {
+				minItem = myArray[i];
+				// console.log(minItem);
+			} else {
+				minItem = minItem;
+			}
+		}
+		return minItem;
var numbers = [10, 5, 100, 2, 1000];
_.min(numbers);
=> 2
```

* shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.  Don't worry about implementing that exact shuffle alogrithm.  Start by creating your own simple shuffle.

```
_.shuffle([1, 2, 3, 4, 5, 6]);
=> [4, 1, 6, 3, 5, 2]
```


* sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.


```
_.sample([1, 2, 3, 4, 5, 6]);
=> 4

_.sample([1, 2, 3, 4, 5, 6], 3);
=> [1, 6, 2]
```

* difference - returns the values from array that are not present in the other array.

```
_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
=> [1, 3, 4]
```

* indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.

```
_.indexOf([1, 2, 3], 2);
=> 1
```


* pluck - extracts a list of property values and returns them in an array.

```
  var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
=> ["moe", "larry", "curly"]
```

+

+//		...
+	}
+	
+	pluck : function () {
+//		...
+	}
+	
+};
+
