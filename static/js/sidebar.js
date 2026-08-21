export class Sidebar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        <link rel="stylesheet" href="../static/css/base.css">
        <link rel="stylesheet" href="../static/css/sidebar.css">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
    crossorigin="anonymous"></script>

            <div class="side-bar d-flex vh-100 justify-content-start align-items-start position-fixed border-end">
                <div class="d-flex flex-column w-100 h-100 justify-content-start align-items-start">
                    <div class="d-flex flex-row w-100 px-4 py-3 gap-3">
                        <div class="logo-icon-car d-flex justify-content-center align-items-center rounded">
                            <img class="img-fluid" src="../static/Assets - projeto estacionamento/Icon-car-white.svg" alt="">
                        </div>

                        <div class="d-flex flex-column">
                            <h2 class="mb-1"><strong>Senac CEP</strong></h2>
                            <h3 class="text-body-secondary my-0"><strong>PAPALÉO PARKING</strong></h3>
                        </div>
                    </div>

                    <div class="d-flex flex-column align-items-start justify-content-start h-100 w-100 px-1">
                        <a href="/apps/Dashboard - Senac Parking.html">
                            <div class="opcao op-dashboard">
                                <img src="../static/Assets - projeto estacionamento/Icon-dashboard.svg" alt="">
                                <p class="m-0">Dashboard</p>
                            </div>
                        </a>

                        <a href="/">
                            <div class="opcao op-Usuário">
                                <img src="../static/Assets - projeto estacionamento/Icon-consultar-usuarios.svg" alt="">
                                <p class="m-0">Consulta de Usuário</p>
                            </div>
                        </a>

                        <a href="/">
                            <div class="opcao op-Entrada/Saída">
                                <img src="../static/Assets - projeto estacionamento/Icon-registrar-entradas-e-saidas.svg" alt="">
                                <p class="m-0">Registro de <br> Entrada/Saída</p>
                            </div>
                        </a>

                        <a href="/">
                            <div class="opcao dashboard">
                                <img src="../static/Assets - projeto estacionamento/Icon-cadastro-rapido.svg" alt="">
                                <p class="m-0">Cadastro Rápido</p>
                            </div>
                        </a>

                        <a href="/">
                            <div class="opcao dashboard">
                                <img src="../static/Assets - projeto estacionamento/Icon-historico.svg" alt="">
                                <p class="m-0">Histórico</p>
                            </div>
                        </a>

                        <a href="/">
                            <div class="opcao dashboard">
                                <img src="../static/Assets - projeto estacionamento/Icon-alertas.svg" alt="">
                                <p class="m-0">Alertas</p>
                            </div>
                        </a>
                    </div>

                    <div class="d-flex w-100 py-3 px-4 justify-content-start align-items-center gap-3 border-top">
                        <img src="../static/Assets - projeto estacionamento/Icon-sair.svg" alt="">
                        <p class="text-danger m-0">Sair</p>
                    </div>
                </div>
            </div>
        `;
    }
}


