export class Alert extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open'})
    }
    connectedCallback() {
        this.shadow.innerHTML = `
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

        <link rel="stylesheet" href="../static/css/base.css">
        <link rel="stylesheet" href="../static/css/corpo.css">

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
    crossorigin="anonymous"></script>


        <style>
            p{
                margin: 0;
            }
            
            .alert{
                border: 1px solid #c2c6d3;
                background-color:  #fff;
            }

            

            :host([tipo="alto"]) .alert {
                --color-alert: #ba1a1a;
                --back-alert: color-mix(in srgb, var(--color-alert) 20%);
                border-left: 7px solid;
                border-color: var(--color-alert);
                
            }
            :host([tipo="medio"]) {
                --color-alert: #ff8928;
                --back-alert: color-mix(in srgb, var(--color-alert) 20%);
            }
            :host([tipo="medio"]) .alert {
                border-left: 7px solid;
                border-color: var(--color-alert);
                
            }


            :host([tipo="baixo"]) {
                --color-alert: #005aa9;
                --back-alert: color-mix(in srgb, var(--color-alert) 20%);
            }
            :host([tipo="baixo"]) .alert {
                border-left: 7px solid;
                border-color: var(--color-alert);
                
            }


            :host([tipo="resolvido"]) .alert {

                --color-alert: #929294;
                --back-alert: color-mix(in srgb, var(--color-alert) 20%);

                opacity: 40%;
                border-left: 7px solid;
                border-color: var(--color-alert);
                
            }

            :host([tipo="sucesso"]) .alert {

                --color-alert: #15803d;
                --back-alert: color-mix(in srgb, var(--color-alert) 20%);

                border-left: 7px solid;
                border-color: var(--color-alert);
                
            }

        </style>

        <div part="alert" class="alert">
            <slot></slot>
        </div>



        
        `;
    }
}
