import { configure } from 'mobx';

import FormStore from './FormStore/FormStore';

configure({ enforceActions: 'always' });

class RootStore {
    constructor() {
        this.formStore = new FormStore(this);
    }
}

export default RootStore;
