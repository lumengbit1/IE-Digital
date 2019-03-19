import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Root from '../router/Routers';
import RootStore from '../stores/RootStore';
import { Provider } from 'mobx-react';

const rootStore = new RootStore();
describe('Route Test', () => {
    it('Route Test', () => {
        const component = renderer
            .create(
                <Provider rootStore={rootStore}>
                    <MemoryRouter>
                        <Root />
                    </MemoryRouter>
                </Provider>
            )
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});
