
$('.disco-cover-songs').hide();
$('.disco-cover-disc').hide();

$('.disco-cover-front').click(function(){
	$('.disco-cover-songs').show();
	$('.disco-cover-front').hide();
	$('.disco-cover-disc').show();
	$('.disco-cover-disc').animate({
		'margin-left' : "15vw",
		},600);;
})

$('.disco-cover-songs').click(function(){
	$('.disco-cover-front').show();
	$('.disco-cover-songs').hide();
	$('.disco-cover-disc').animate({
		'margin-left' : "0",
		},600);;
	$('.disco-cover-disc').hide(100);
	
})

var audio = new Audio("/sounds/mONEY.mp3");

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
