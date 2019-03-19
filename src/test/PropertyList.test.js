import React from 'react';
import RootStore from '../stores/RootStore';
import { Provider } from 'mobx-react';
import PropertyList from '../components/PropertyList';
import Property from '../components/Property';
import sinon from 'sinon';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const rootStore = new RootStore();
afterEach(cleanup);
describe('Render Test', function () {
    it('case: expect rendering correct', () => {
        const { container } = render(
            <Provider rootStore={rootStore}>
                <PropertyList />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
describe('Function Test', function () {
    it('case: expect getData becalled', () => {
        const getData = sinon.stub(rootStore.formStore, 'getData');
        const { rerender } = render(
            <Provider rootStore={rootStore}>
                <PropertyList />
            </Provider>
        );
        rerender(
            <Provider rootStore={rootStore}>
                <PropertyList />
            </Provider>
        );

        expect(getData.calledOnce).toBe(true);
        getData.restore();
    });

    it('renders Property correctly', async () => {
        const { getByText } = render(<Property price="add" />);
        const price = await waitForElement(() => getByText('add'));
        expect(price).toBeInTheDocument;
    });

    const mockData = {
        results: [
            {
                price: '$726,500',
                agency: {
                    brandingColors: {
                        primary: '#ffe512'
                    },
                    logo: 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
                },
                id: '1',
                mainImage:
                    'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
            }
        ],

        saved: [
            {
                price: '$526,500',
                agency: {
                    brandingColors: {
                        primary: '#000000'
                    },
                    logo: 'http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif'
                },
                id: '4',
                mainImage:
                    'http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg'
            }
        ]
    };

    it('case: expect results button onclick event', async () => {
        const props = {
            area: 'results'
        };

        const mock = new MockAdapter(axios);
        mock.onGet('/test_data/data.json').reply(200, mockData);
        const { getByTestId } = render(
            <Provider rootStore={rootStore}>
                <PropertyList {...props} />
            </Provider>
        );
        await waitForElement(() => getByTestId('test'));
        fireEvent.click(getByTestId('test'));
        expect(rootStore.formStore.savedData.length).toBe(2);
    });

    it('case: expect saved button onclick event', async () => {
        const props = {
            area: 'saved'
        };

        const mock = new MockAdapter(axios);
        mock.onGet('/test_data/data.json').reply(200, mockData);
        const { getByTestId } = render(
            <Provider rootStore={rootStore}>
                <PropertyList {...props} />
            </Provider>
        );
        await waitForElement(() => getByTestId('test'));
        fireEvent.click(getByTestId('test'));
        expect(rootStore.formStore.savedData.length).toBe(1);
    });
});

describe('Error Test', function () {
    it('case:Axios Error Test', async () => {
        const mock = new MockAdapter(axios);
        mock.onGet('/test_data/data.json').timeout();
        render(
            <Provider rootStore={rootStore}>
                <PropertyList />
            </Provider>
        );
        await rootStore.formStore.getData();
        expect(rootStore.formStore.state).toBe('error');
    });
});
