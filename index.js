import { PolymerElement, html } from '@polymer/polymer/polymer-element';



let _data = {};
let registered = [];


const _applyData = () => {
    let r;
    for (r of registered) {
        r.data = _data;
    }
}

const _notifyAll = (path) => {
    let r;
    for (r of registered) {
        r.notify(path);
    }
}


export class DnaElement extends PolymerElement {
    
    static get properties() {
        return {
            data: {
                type: Object,
                value: _data
            }
        }
    }
    
    
    connectedCallback() {
        super.connectedCallback();
        registered.push(this);
    }
    
    disconnectedCallback() {
        super.disconnectedCallback();
        registered.splice(registered.indexOf(this), 1);
    }
    
    notify(path) {
        this.notifyPath(`data.${path}`);
    }
    
    setData(path, value) {
        
        const crumbs = path.split('.');
        let currentCrumb = this.data;
        
        let i, count;
        for (i = 0, count = crumbs.length; i < count - 1; ++i) {
            if (currentCrumb[crumbs[i]] === undefined) {
                currentCrumb[crumbs[i]] = {};
            }
            currentCrumb = currentCrumb[crumbs[i]];
        }
        
        currentCrumb[crumbs[i]] = value;
        
        _notifyAll(path);
        
    }
}

export {html};