import { observable, configure, action } from 'mobx';

configure({ enforceActions: 'always' });
class FormStore {
    @observable
    table = {
        tableMin_x: 0,
        tableMin_y: 0,
        tableMax_x: 5,
        tableMax_y: 5
    }
    @observable
    input = '';

    @observable
    output = '';

    location = null;

    facing = {
        x: 0,
        y: 0
    };
    orientation = {
        NORTH: { x: 0, y: 1 },
        SOUTH: { x: 0, y: -1 },
        WEST: { x: -1, y: 0 },
        EAST: { x: 1, y: 0 }
    };

    direction = {
        x: {
            '0': {
                y: {
                    '1': 'NORTH',
                    '-1': 'SOUTH'
                }
            },
            '1': {
                y: {
                    '0': 'EAST'
                }
            },
            '-1': {
                y: {
                    '0': 'WEST'
                }
            }
        }
    };



    @action
    updateProperty(value) {
        this.input = value.toUpperCase();
    }

    @action
    clearOutput() {
        this.output = '';
    }

    @action
    calculate() {
        const inputLine = this.input.split(/[\s,]+/);
        const command = inputLine[0];
        if (command === 'PLACE') {
            if (inputLine[3] === 'NORTH'
                || inputLine[3] === 'SOUTH'
                || inputLine[3] === 'EAST'
                || inputLine[3] === 'WEST') {
                const x = parseInt(inputLine[1], 10);
                const y = parseInt(inputLine[2], 10);
                const f = inputLine[3];
                const facing = this.orientation[f];
                if (x >= this.table.tableMin_x
                    && x < this.table.tableMax_x
                    && y >= this.table.tableMin_y
                    && y < this.table.tableMax_y
                    && facing) {
                    this.location = { x, y };
                    this.facing = facing;
                }
                else {
                    this.output = 'Out of border.';
                    return;
                }
            }
            else {
                this.output = 'Please type in correct PLACE values.';
                return;
            }

            for (let i = 4; i < inputLine.length; i++) {
                if (inputLine[i] === 'MOVE') {
                    const moveX = this.facing.x;
                    const moveY = this.facing.y;
                    const nextX = this.location.x + moveX;
                    const nextY = this.location.y + moveY;
                    if (nextX >= this.table.tableMin_x
                        && nextX < this.table.tableMax_x
                        && nextY >= this.table.tableMin_y
                        && nextY < this.table.tableMax_y) {

                        this.location = { x: nextX, y: nextY };
                    }
                    else {
                        this.output = 'Out of border.';
                        break;
                    }
                }
                else if (inputLine[i] === 'LEFT') {
                    const x = this.facing.x;
                    const y = this.facing.y;
                    this.facing = { x: -y, y: x };
                }
                else if (inputLine[i] === 'RIGHT') {
                    const x = this.facing.x;
                    const y = this.facing.y;
                    this.facing = { x: y, y: -x };
                }
                else if (inputLine[i] === 'REPORT') {
                    let report = `Output: ${this.location.x},${this.location.y},${
                        this.direction.x[this.facing.x.toString()].y[
                        this.facing.y.toString()
                        ]
                        }`;
                    this.output = report;
                }
            }
        }
        else {
            this.output = 'Pleas type in "PLACE" first.';
            return;
        }
    }
}

export default FormStore;
