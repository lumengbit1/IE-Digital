import React, { useState } from 'react';
import CSSModules from 'react-css-modules';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import styles from './home.less';

function Home({ rootStore }) {
    const updateProperty = e => {
        rootStore.formStore.updateProperty(e.target.value);
        setValue(e.target.value);
    };

    const btnClick = () => {
        setValue('');
        rootStore.formStore.clearOutput();
    };
    const [value, setValue] = useState();
    return (
        <div styleName="homePage">
            <div styleName="block">
                <textarea
                    rows="10"
                    cols="30"
                    data-testid="test_textarea"
                    name="position"
                    styleName="input"
                    onChange={updateProperty}
                    value={value}
                />
                <p>{rootStore.formStore.output}</p>
                <div styleName="button">
                    <button onClick={() => rootStore.formStore.calculate()}>Start</button>
                    <button onClick={() => btnClick()}>Reset</button>
                </div>
            </div>
        </div>
    );
}
export default inject('rootStore')(observer(CSSModules(Home, styles)));
