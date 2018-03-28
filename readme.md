# ⚕️ DnaElement

A tiny back store for apps using webcomponents (Polymer).

## installation

```bash
$ yarn add dna-element
```

## usage

```javascript
import { DnaElement, html } from 'dna-element'

class MyApp extends DnaElement {

    constructor() {
        super();

        this.setData('appMainColor', 'red');
    }

    static get template() {
        return html`
            <h1 style="color:{{data.appMainColor}}">My App</h1>
        `
    }
}

...

class DashBoard extends DnaElement {
    static get template() {
        return html`
            <p>Current App Color is : {{data.appMainColor}}</p>
        `;
    }
}

...
```


## run the demo

```bash
$ git clone https://github.com/vdegenne/dna-element.git
$ cd dna-element
$ cd yarn run serve
```

and access [http://localhost:8000/demo](http://localhost:8000/demo)
(change the port if polymer couldn't use 8000 by default)