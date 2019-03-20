import RootStore from '../stores/RootStore';

const rootStore = new RootStore();
describe('Function Test', function () {
    it('case: updateProperty function test', () => {
        const input = 'test';
        const output = 'TEST';
        rootStore.formStore.updateProperty(input);
        expect(rootStore.formStore.input).toBe(output);
    });

    it('case: clearOutput function test', () => {
        const input = 'TEST';
        const output = '';
        rootStore.formStore.updateProperty(input);
        rootStore.formStore.clearOutput();
        expect(rootStore.formStore.output).toBe(output);
    });

    it('case: calculate function test', () => {
        const input = 'PLACE 1,2,EAST MOVE MOVE LEFT MOVE RIGHT MOVE REPORT';
        const output = 'Output: 4,3,EAST';
        rootStore.formStore.updateProperty(input);
        rootStore.formStore.calculate();
        expect(rootStore.formStore.output).toBe(output);
    });
});

describe('Edge Test', function () {
    it('case: Not type in Place test', () => {
        const input = 'TEST';
        const output = 'Pleas type in "PLACE" first.';
        rootStore.formStore.updateProperty(input);
        rootStore.formStore.calculate();
        expect(rootStore.formStore.output).toBe(output);
    });

    it('case: Not type in orientation test', () => {
        const input = 'PLACE 1,2';
        const output = 'Please type in correct PLACE values.';
        rootStore.formStore.updateProperty(input);
        rootStore.formStore.calculate();
        expect(rootStore.formStore.output).toBe(output);
    });

    it('case: Place out of border test', () => {
        const input = 'PLACE 1,6 NORTH';
        const output = 'Out of border.';
        rootStore.formStore.updateProperty(input);
        rootStore.formStore.calculate();
        expect(rootStore.formStore.output).toBe(output);
    });

    it('case: Move out of border test', () => {
        const input = 'PLACE 1,4 NORTH MOVE REPORT';
        const output = 'Out of border.';
        rootStore.formStore.updateProperty(input);
        rootStore.formStore.calculate();
        expect(rootStore.formStore.output).toBe(output);
    });

    it('case: NO REPORT test', () => {
        const input = 'PLACE 1,1 NORTH MOVE';
        const output = 'Please type in REPORT.';
        rootStore.formStore.updateProperty(input);
        rootStore.formStore.calculate();
        expect(rootStore.formStore.output).toBe(output);
    });

    it('case: Wrong command test', () => {
        const input = 'PLACE 1,1 NORTH RUN';
        const output = 'Please type in corrent command.';
        rootStore.formStore.updateProperty(input);
        rootStore.formStore.calculate();
        expect(rootStore.formStore.output).toBe(output);
    });
});
