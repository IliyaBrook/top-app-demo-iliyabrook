let c: 'test' = 'test';

// literal type
type actionType = 'up' | 'down';

function performAction(direction: actionType | ComplexAction) {
    switch (direction) {
        case 'down':
            return -1
        case 'up':
            return 1
    }
}

interface ComplexAction {
    s: string;
}
