function feetToMile(foot) {
    var mile = (foot / 5280);
    return mile;
}
var mile = feetToMile(5280);
console.log(mile);


function woodCalculator(chair, table, bed) {
    var numOfWood = chair + (table * 3) + (bed * 5);
    return numOfWood;
}
var numOfWood = woodCalculator(10, 15, 5);
console.log(numOfWood);


function brickCalculator(numOfFloor) {
    //1 feet = 1000 brick
    var foot;
    if (numOfFloor <= 10)
        foot = (numOfFloor * 15);
    else if (numOfFloor <= 20)
        foot = ((numOfFloor - 10) * 12) + (10 * 15);
    else
        foot = ((numOfFloor - 20) * 10) + ((10 - 10) * 12) + (10 * 15);

    var brick = foot * 1000;
    return brick;
}
var brick = brickCalculator(29);
console.log(brick);


function tinyFriend(names) {
    var friendName = names[0];
    var minLength = names[0].length;
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        if (minLength > name.length) {
            friendName = name;
            minLength = name.length;
        }
    }
    return friendName;
}
var names = ["Mehedi","Hasan","Mithun","Sabuj","Monir","Mamun","Anik","Tusher"];
var friendName = tinyFriend(names);
console.log(friendName);