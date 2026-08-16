export class Appbar extends HTMLElement {
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

          <div class="" style="margin: 0 0 0 265px; z-index: 0; position: relative;">

        </div>


        
        `;
    }
}
