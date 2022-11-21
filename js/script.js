class CustomZaglavlje extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <img id="burger-icon" class="burgerMenu" src="/img/header/burger-closed.png" alt="burger menu button" onclick="openMenu()">
        

        <header id="header">
        
            <img id="x-icon" class="burgerMenu" src="/img/header/burger-opened.png" alt="burger menu button" onclick="closeMenu()">
            <a href="./index.html"><img id="menuLogo" src="img/header/ABBA_logo_net.png" alt="ABBA logo"></a>

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

function openMenu(){
    document.getElementById("burger-icon").classList.add("close-burger");
    document.getElementById("x-icon").classList.add("open-x-icon");
    document.getElementById("header").classList.add("open-header");
}

function closeMenu(){
    document.getElementById("burger-icon").classList.remove("close-burger");
    document.getElementById("x-icon").classList.remove("open-x-icon");
    document.getElementById("header").classList.remove("open-header");
}

$("#forma-submit").click(function (e) { 
    let proizvod = $("#form-proizvod option:selected").text();
    let kolicina = $("#form-kolicina").val();
    let ime = $("#form-firstName").val();
    let prezime = $("#form-lastName").val();
    let email = $("#form-email").val();
    let adresa = $("#form-adress").val();
    let telefon = $("#form-phoneNumber").val();
    let grad = $("#form-city option:selected").text();
    let postanskiBroj = $("#form-postalCode").val();
    let nacinPlacanja = $("#form-payement option:selected").text();
    let brojRata = $('input[name="form-brojRata"]:checked').val();

    if(notValid(ime) || notValid(prezime) || notValid(adresa)){
        alert("Pogrešan unos...");
    } else {
        var audio = new Audio('/sounds/mONEY.mp3');
        audio.play();
        let output = "Proizvod: " + proizvod + "\nKoličina: " + kolicina + "\nIme i prezime: " + ime + prezime + "\nE-mail adresa: " + email + "\nAdresa stanovanja: " + adresa + "\nBroj telefona: " + telefon + "\nGrad: " + grad + "\nPoštanski broj: " + postanskiBroj + "\nNacin plaćanja: " + nacinPlacanja + "\nBroj rata: " + brojRata;
        alert(output);
    }
});

function notValid(value) {
    return (
      (typeof value == "string" && !value.trim()) ||
      typeof value == "undefined" ||
      value === null
    );
  }

