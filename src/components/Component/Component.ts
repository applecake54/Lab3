export enum Attribute {
    "backgroundcolor" = "backgroundcolor"
}

class Component extends HTMLElement{
    backgroundcolor?: string;
    
    
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            backgroundcolor: null
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="./Div.css">
            <div class="${this.backgroundcolor}">
        
            </div>
            `
        }
    }
}

customElements.define("my-component",Component);
export default Component;
