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



  function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("25 December 2022 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);



