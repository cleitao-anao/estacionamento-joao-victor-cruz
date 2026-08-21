export class CardR extends HTMLElement {
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

            <style>
                @media (max-width: 768px) {

                    .card{
                        max-width: 240px;
                    }
                }

            </style>




            <div class="card d-flex flex-column justify-content-start p-4 border border-2 rounded-4"
                style="background-color: #fff; min-width: 210px; max-width: 400px;"> <!-- * cards info-->
                <div class="d-flex flex-row justify-content-between ">
                    <div class="d-flex" style="width: 40px; height: 40px;">
                        <slot name="icon">
                            <p class="m-0 fs-4 fw-bold text-center w-100 h-100" style=" background-color: #005AA91A; color: #004380;">P</p>
                        </slot>
                    </div>

                    <div class="" style="font-size: 12px;"><slot name="status"><span class="p-1 text-bg-success rounded">
                            ESTÁVEL
                        </span></slot></div>
                </div>
                <p class="mt-2 mb-0">
                    <slot name="nome" style="font-size: 14px !important;">TOTAL DE VAGAS LIVRES</slot>
                </p>
                <p class="m-0 fs-2 fw-bold text-primary">
                    <slot name="numero">42</slot>
                </p>
            </div>






`;
    }
}