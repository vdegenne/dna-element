import { DnaElement, html } from '../index.js'

class ElementOne extends DnaElement {

    constructor() {
        super();

        // define some data
        this.setData('app-name', 'DemoApp');
    }


    static get template() {
        return html`
        <style>
        :host {
            background: red
        }
        </style>
        <b>{{data.app-name}}</b>
        `
    }
}

class ElementTwo extends DnaElement {

    static get template() {
        return html`
        <style>
        :host {
            background: green
        }
        </style>
        <b>{{data.app-name}}</b>
        `
    }
}


customElements.define('element-one', ElementOne);
customElements.define('element-two', ElementTwo);