import *as components from"./components/indexHijo"
import {objectWithImages} from "./Data/data"
import Component, {Attribute} from "./components/Component/Component"

class AppContainer extends HTMLElement {
    divs: HTMLDivElement[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        objectWithImages.images.forEach((array) => {
            const arrayDiv = this.ownerDocument.createElement("div");
            arrayDiv.classList.add("arrayDiv");
            array.forEach((line) => {
                const lineDiv = this.ownerDocument.createElement("div");
                lineDiv.classList.add("lineDiv");
                line.forEach((number) => {
                    const divColor = this.ownerDocument.createElement("my-component");
                    if(number === 0){
                        divColor.setAttribute(Attribute.backgroundcolor, "white")
                    }else{
                        divColor.setAttribute(Attribute.backgroundcolor, "black")
                    };
                    lineDiv.appendChild(divColor);
                })
                arrayDiv.appendChild(lineDiv)
            })
            this.divs.push(arrayDiv)
        })

}
connectedCallback(){
    this.render();
}

render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML=`<link rel="stylesheet" href="./index.css">`

        this.divs.forEach((div: HTMLDivElement) => {
            this.shadowRoot?.appendChild(div)
        })
}
}

}
customElements.define("app-container", AppContainer);