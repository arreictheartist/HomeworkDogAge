/* You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.*/

function calculateDogAge(age) {
    var dogYears = 7 * age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(2);
calculateDogAge(14);
calculateDogAge(1);