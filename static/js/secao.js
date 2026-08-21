export class Secao extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.shadow.innerHTML = `

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

            <link rel="stylesheet" href="../static/css/base.css">


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
                crossorigin="anonymous"></script>

            <div part="secao" class="d-flex flex-column w-100 z-0 border border-2 rounded overflow-hidden">
                
                <div class="d-flex align-items-center z-1 px-3 py-3 w-100 h-100 border-bottom border-2" style="background-color: #f2f3fa;"><slot name="header">oi</slot></div>                

                <div style="background-color: #FFFF;">
                  <slot></slot>
                </div>
                
            </div>








`;
    }
}