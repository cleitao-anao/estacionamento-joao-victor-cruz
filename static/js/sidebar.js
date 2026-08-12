class Appbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
        <div class="appbar d-flex position-sticky sticky-top border-bottom border-2">
            <div class="d-flex h-100 w-100 px-4 justify-content-between align-items-center" style="margin-left: 260px;">

            <h2 class="fw-bold" style="font-size: 22px;">coiso</h2>

            <div class="d-flex ps-4 flex-row align-items-center border-start gap-2">
                <div class="d-flex align-items-end flex-column" style="line-height: 14px;">

                <p class="fw-bold" style="font-size: 14px;">sasdasdasddsadasoi</p>
                <p class="text-body-secondary" style="font-size: 11px;">{}</p>

                </div>
                <div class="foto-perfil rounded-circle border border-2" style="padding: 1px;">
                <img src="../static/Assets - projeto estacionamento/Foto de Perfil do Administrador.png" alt="">
                </div>


            </div>
            </div>



        
        `;
    }
}


customElements.define('m-appbar', Appbar);
