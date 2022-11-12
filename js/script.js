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
