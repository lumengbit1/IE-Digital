import { observable, configure, action } from 'mobx';

configure({ enforceActions: 'always' });
class FormStore {
    @observable
    position = {
        pos_x: '',
        pos_y: '',
        direction: ''
    }
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



    @action
    updateProperty(value) {
        this.input = value.toUpperCase();
    }

    @action
    calculate() {
        const inputLine = this.input.split(/[\s,]+/);
        let command = inputLine[0];
        if (command === 'PLACE') {
            if (inputLine.length >= 4) {
                const x = parseInt(inputLine[1], 10);
                const y = parseInt(inputLine[2], 10);
                const f = inputLine[3];
                const facing = this.orientation[f];
                if (x > -1 && x < 5 && y > -1 && y < 5 && facing) {
                    this.location = { x, y };
                    this.facing = facing;
                }
                else {
                    this.output = 'Out of border.';
                }
            }



        }
        else {
            this.output = 'Pleas type in "PLACE" first.';
        }


    }
}

export default FormStore;
