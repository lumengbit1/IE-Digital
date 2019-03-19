import React from 'react';
import CSSModules from 'react-css-modules';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import styles from './home.less';

function Home({ rootStore }) {
    const updateProperty = e => {
        rootStore.formStore.updateProperty(e.target.value);
    };
    return (
        <div styleName='homePage'>
            <div styleName='resultsArea'>
                <div styleName='title'>Input</div>
                <div styleName='block'>
                    <textarea
                        rows='10'
                        cols='30'
                        name='position'
                        styleName='input'
                        onChange={updateProperty}
                    />
                    <p>{rootStore.formStore.output}</p>
                    <button onClick={() => rootStore.formStore.calculate()}>Start</button>
                </div>
            </div>
            <div styleName='savedPropertiesArea'>
                <div styleName='title'>Ouput</div>
                <div styleName='block' />
            </div>
        </div>
    );
}
export default inject('rootStore')(observer(CSSModules(Home, styles)));
