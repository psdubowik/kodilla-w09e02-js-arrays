var femaleNames = ["Anna", "Zosia", "Ola", "Marysia"];
var maleNames = ["Jasiek", "Filip", "Piotr"];

var allNames = femaleNames.concat(maleNames);

var newName = "Zygfryd"

if(allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}

console.log(allNames);
