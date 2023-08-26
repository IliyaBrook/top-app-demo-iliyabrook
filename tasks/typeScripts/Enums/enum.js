"use strict";
// num enum
var DirectionNum;
(function (DirectionNum) {
    DirectionNum[DirectionNum["Up"] = 0] = "Up";
    DirectionNum[DirectionNum["Down"] = 1] = "Down";
    DirectionNum[DirectionNum["Left"] = 2] = "Left";
    DirectionNum[DirectionNum["Right"] = 3] = "Right";
})(DirectionNum || (DirectionNum = {}));
// string enum
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["Up"] = "UP";
    DirectionStr["Down"] = "DOWN";
    DirectionStr["Left"] = "LEFT";
    DirectionStr["Right"] = "RIGHT";
})(DirectionStr || (DirectionStr = {}));
// Generate its enum with numbers and strings
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision["No"] = "No";
})(Decision || (Decision = {}));
var Decision2;
(function (Decision2) {
    Decision2[Decision2["Yes"] = 1] = "Yes";
    Decision2[Decision2["No"] = calcEnum()] = "No";
})(Decision2 || (Decision2 = {}));
// calculate enum [can be only number not string]
function calcEnum() {
    return 1;
}
// object enum
function funEnum(obj) {
}
funEnum(DirectionStr);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let test = Test.A;
let nameA = Test[test]; // A
let C = 0 /* ConstEnum.A */;
/// never example
var Dice;
(function (Dice) {
    Dice[Dice["One"] = 1] = "One";
    Dice[Dice["Two"] = 2] = "Two";
    Dice[Dice["Tree"] = 3] = "Tree";
})(Dice || (Dice = {}));
function rollDice(dice) {
    switch (dice) {
        case Dice.One:
            return 'один';
        case Dice.Two:
            return 'два';
        case Dice.Tree:
            return 'три';
        default:
            const a = dice;
    }
}
