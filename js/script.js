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
            <button id="infoButton" type="button" onclick="openPopupInfo()">Info</button>
        </header>

        <div id="contact-info" class="contact-info">

        <div id="contact-info-wrapper">

            <img src="/img/contact/info.png" alt="info logo circular transparent">
            <p>Autori</p>
            
            <div class="contact">
                <a href="https://www.linkedin.com/in/ceda/" target="_blank">
                    <img src="img/contact/ceda.png" alt="Čeda">
                </a>
                <h2>Čeda Veličković<br>2020/0204</h2>
                
            </div>
            <div class="contact">
                <a href="https://www.linkedin.com/in/%C4%91or%C4%91e-%C4%91or%C4%91evi%C4%87-99a8ab252/" target="_blank">
                    <img src="img/contact/djole.png" alt="Đole"></a>
                <h2>Đorđe Đorđević<br>2020/0119</h2>
            </div >
            <div class="contact">
                <a href="https://www.linkedin.com/in/irina-bo%C5%BEani%C4%87//" target="_blank">
                    <img src="img/contact/irina.png" alt="Irina">
                </a>
                <h2>Irina Božanić<br>2021/1050</h2>
            </div>

            <button type="button" onclick="closePopupInfo()">Nazad</button>

        </div>
        
        
    </div>
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

function openPopupInfo(){
    document.getElementById("contact-info").classList.add("open-contact-info");
}
function closePopupInfo(){
    document.getElementById("contact-info").classList.remove("open-contact-info");
}

