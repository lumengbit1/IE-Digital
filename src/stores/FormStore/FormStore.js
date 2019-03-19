import { observable, configure, flow, action } from 'mobx';
import axios from 'axios';

configure({ enforceActions: 'always' });
class FormStore {
    @observable
    resultsData = [];

    @observable
    savedData = [];

    @observable
    state = 'pending';

    @action
    addProperty(id) {
        let selectedData = this.resultsData.find(item => item.id === id);
        this.savedData.push(selectedData);
    }

    @action
    removeProperty(id) {
        this.savedData.splice(this.savedData.indexOf(this.savedData.find(item => item.id === id)), 1);
    }

    getData = flow(function*() {
        const api = '/test_data/data.json';
        try {
            const res = yield axios.get(api);
            this.resultsData = res.data.results;
            this.savedData = res.data.saved;
            this.state = 'done';
        }
 catch (error) {
            this.state = 'error';
        }
    });
}

export default FormStore;
