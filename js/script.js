class CustomZaglavlje extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       
        <header>
            <a href="./index.html"><img src="img/header/ABBA_logo_net.png" alt="ABBA logo"></a>

            <div class="menuBar">
                <ul>
                    <li><a href="./index.html">POČETNA</a></li>
                    <li><a href="shop.html">ŠOP</a></li>
                    <li><a href="disco.html">DISCO</a></li>
                    <li><a href="tour.html">TURNEJA</a></li>
                </ul>
            </div>
            <button id="infoButton">Info</button>
        </header>

        `
    }
}

customElements.define('custom-zaglavlje', CustomZaglavlje);

class CustomFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `

        <footer>
            <p>EPOS</p>
            <p>© 2022 Novembar</p>
            <p>by Čeda, Đorđe & Irina</p>
        </footer>
        `
    }
}

customElements.define('custom-footer', CustomFooter);

// RESPONZIVNOST
function reponzivnostMob(){
    document.getElementById("shop-grid-wrapper").style.gridTemplateColumns = "1fr";
}
function responzivnostTablet(){
    document.getElementById("shop-grid-wrapper").style.gridTemplateColumns = "1fr 1fr";
}
function responzivnostKomp(){
    document.getElementById("shop-grid-wrapper").style.gridTemplateColumns = "1fr 1fr 1fr";
}
