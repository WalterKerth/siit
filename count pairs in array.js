const arr = [3,2,-3,8,-2,0];
	let map = {};
	let results = {};
const twoSum = (arr, target) => {
	let map{};
	results = [];
for (let i=0; i<arr.length; i++) {
	if (map[arr[i]] !== undefined) {
		results.push([map[arr[i]], arr[i]])
	} else {
		map[target - arr[i]] = arr[i];
	}
}
return results;
}

//varianta 2

const binarySearch = (sortedArr, target) => {
	let min = 0,
		max = sortedArr.length - 1,
		guess;
  
	while (min <= max) {
	  guess = Math.floor((min + max) / 2);
  
	  if (sortedArr[guess] === target) {
		return target;
	  } else {
		if (sortedArr[guess] < target) {
		  min = guess + 1;
		} else {
		  max = guess - 1;
		}
	  }
	}
	return false;