
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

/*document.addEventListener("DOMContentLoaded", () => {
    window.setInterval(function () {
      var d = new Date();
      let sati = d.getHours();
      let minuti = d.getMinutes();
      let sekunde = d.getSeconds();
	  let dan = d.getDay
	  let mesec = d.getMonth();
	  let godina = d.getFullYear();
      $("#tour-date").text(dan + '/' + mesec + '/' + godina);
    }, 1000);
  });*/