import { Sidebar } from "./sidebar.js";
import { Appbar } from "./appbar.js";
import { Corpo } from "./corpo.js";
import { CardR } from "./card-resumo.js";
import { Secao } from "./secao.js";
import { Alert } from "./card-alert.js";




customElements.define('m-sidebar', Sidebar);
customElements.define('m-appbar', Appbar);
customElements.define('m-corpo', Corpo);
customElements.define('m-cardr', CardR);
customElements.define('m-secao', Secao);
customElements.define('m-card-alert', Alert);