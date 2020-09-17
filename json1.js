var cat = {
	"name": "Fluffy",
	"activities": ["play", "eat cat food"],
	"catFriends": [{
			"name": "bar",
			"activities": ["be grumpy", "eat bread omblet"],
			"weight": 8,
			"furcolor": "white"
		},
		{
			"name": "foo",
			"activities": ["sleep", "pre - sleep naps"],
			"weight": 3
		}
	]
}
//Add height and weight to Fluffy
cat.height = "10inches";
cat.weight = "3Kgs";
//Update the name tp Fluffyy
cat.name = "Fluffyy";
console.log(cat);

//Print the catFriends names
const names = cat.catFriends.map((catFriend) => {
	return catFriend.name;
	});
console.log(names)

//List the activities of the Fluffy cat friends
const activities = cat.catFriends.map((catFriend) => {
	return catFriend.activities;
	});
console.log(activities)

//Print the total weight of catFriends
const weights = cat.catFriends.map((catFriend) =>{
	return catFriend.weight;
});
const actual_weight = weights.reduce((weight, currentTotal) => {
		return weight + currentTotal;
	}, 0);

console.log(actual_weight);

//Add 2 more activities to bar & foo cats
cat.catFriends[0]["activities"].push('jump','cry');
cat.catFriends[1]["activities"].push('speak','sit');

//Update the fur color of bar
cat.catFriends[0]["furColor"] = 'blue';

