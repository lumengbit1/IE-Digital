import React from 'react';
import RootStore from '../stores/RootStore';
import { Provider } from 'mobx-react';
import Home from '../components/Home';
import { render } from 'react-testing-library';

const rootStore = new RootStore();
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
