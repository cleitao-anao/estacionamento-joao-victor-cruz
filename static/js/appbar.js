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
  
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
    crossorigin="anonymous"></script>

        <style>

            .appbar {
            width: 100%;
            height: 64px;
            z-index: 9;
            background-color: var(--bs-body-bg);

            }

            .appbar p, h2 {
            margin: 0;
            }



            @media (max-width: 768px) {

                .appbar {
                    margin: 0;
                }



            }

        </style>


        <div class="appbar d-flex position-sticky sticky-top border-bottom border-2">
            <div class="d-flex h-100 w-100 px-4 justify-content-between align-items-center">

            <h2 class="fw-bold" style="font-size: 22px;">
                <slot></slot>
            </h2>

            <div class="d-flex ps-4 flex-row align-items-center border-start gap-2">
                <div class="d-flex align-items-end flex-column" style="line-height: 14px;">

                <p class="fw-bold" style="font-size: 14px;">
                     <slot name="conta">Admin Portaria</slot>
                </p>
                <p class="text-body-secondary" style="font-size: 11px;">
                  <slot name="cargo">OPERADOR</slot>
                </p>

                </div>
                <div class="foto-perfil rounded-circle border border-2" style="padding: 1px;">
                <img src="../static/Assets - projeto estacionamento/Foto de Perfil do Administrador.png" alt="">
                </div>


            </div>
            </div>



        
        `;
    }
}
