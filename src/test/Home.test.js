import React from 'react';
import RootStore from '../stores/RootStore';
import { Provider } from 'mobx-react';
import Home from '../components/Home';
import { render, fireEvent, cleanup } from 'react-testing-library';
import sinon from 'sinon';

const rootStore = new RootStore();
afterEach(cleanup);
describe('Render Test', function () {
    it('case: expect rendering correct', () => {
        const { container } = render(
            <Provider rootStore={rootStore}>
                <Home />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});

describe('Button Click Test', function () {
    it('case: expect calculate be called when Start button be clicked', () => {
        const calculate = sinon.stub(rootStore.formStore, 'calculate');
        const { getByText } = render(
            <Provider rootStore={rootStore}>
                <Home />
            </Provider>
        );
        fireEvent.click(getByText('Start'));
        expect(calculate.called).toEqual(true);
    });

    it('case: expect clearOutput be called when Start button be clicked', () => {
        const clearOutput = sinon.stub(rootStore.formStore, 'clearOutput');
        const { getByText } = render(
            <Provider rootStore={rootStore}>
                <Home />
            </Provider>
        );
        fireEvent.click(getByText('Reset'));
        expect(clearOutput.called).toEqual(true);
    });
    it('case: expect updateProperty be called when input onChange event be triggered', () => {
        const updateProperty = sinon.stub(rootStore.formStore, 'updateProperty');
        const { getByTestId } = render(
            <Provider rootStore={rootStore}>
                <Home />
            </Provider>
        );
        fireEvent.change(getByTestId('test_textarea'), { target: { value: 'TEST VALUE' } });
        expect(updateProperty.called).toEqual(true);
    });
});
