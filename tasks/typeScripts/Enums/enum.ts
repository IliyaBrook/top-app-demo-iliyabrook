// num enum
enum DirectionNum {
    Up,
    Down,
    Left,
    Right
}
// string enum
enum DirectionStr {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

// Generate its enum with numbers and strings

enum Decision {
    Yes = 1,
    No = 'No'
}

enum Decision2 {
    Yes = 1,
    No = calcEnum()
}

// calculate enum [can be only number not string]

function calcEnum() {
    return 1;
}

// object enum

function funEnum(obj:{Up: string}) {

}

funEnum(DirectionStr);

enum Test {
    A
}

let test = Test.A;

let nameA = Test[test]; // A

const enum ConstEnum {
    A,
    B
}

let C = ConstEnum.A

/// never example

enum Dice {
    One = 1,
    Two,
    Tree
}

function rollDice(dice: Dice) {
    switch (dice) {
        case Dice.One:
            return 'один'
        case Dice.Two:
            return 'два'
        case Dice.Tree:
            return 'три'
        default:
            const a: never = dice;
    }
}
