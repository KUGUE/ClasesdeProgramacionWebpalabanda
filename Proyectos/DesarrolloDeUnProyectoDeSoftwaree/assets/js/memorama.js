var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;
var currentCardCount = 4;
var Source = "#boxcard";
let initialCardSize = 400;
var ImgSource = [

	"/assets/img/Memorama/abeja.png",
	"/assets/img/Memorama/ajo.png",
	"/assets/img/Memorama/bife.png",
	"/assets/img/Memorama/espantapajaros.png",
	"/assets/img/Memorama/brocoli.png",
	"/assets/img/Memorama/cerdo.png",
	"/assets/img/Memorama/oveja.png",
	"/assets/img/Memorama/tomate.png",
	"/assets/img/Memorama/conejo.png",
	"/assets/img/Memorama/caballo.png",
	"/assets/img/Memorama/champinon.png",
	"/assets/img/Memorama/manzana.png",
	"/assets/img/Memorama/vaca.png",
	"/assets/img/Memorama/pollo.png",
	"/assets/img/Memorama/sol.png",
	"/assets/img/Memorama/zanahoria.png",
	"/assets/img/Memorama/maiz.png",
	"/assets/img/Memorama/patata.png",
	"/assets/img/Memorama/granero.png",
	"/assets/img/Memorama/huevo.png",
  ];
function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}
	
function ShuffleImages() {
	var ImgAll = $(Source).children();
	var ImgThis = $(Source + " div:first-child");
	var ImgArr = new Array();

	for (var i = 0; i < ImgAll.length; i++) {
		ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
		ImgThis = ImgThis.next();
	}
	
		ImgThis = $(Source + " div:first-child");
	
	for (var z = 0; z < ImgAll.length; z++) {
	var RandomNumber = RandomFunction(0, ImgArr.length - 1);

		$("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
		ImgArr.splice(RandomNumber, 1);
		ImgThis = ImgThis.next();
	}
}

function ResetGame() {
	ShuffleImages();
	$(Source + " div img").hide();
	$(Source + " div").css("visibility", "visible");
	Counter = 0;
	$("#success").remove();
	$("#counter").html("" + Counter);
	BoxOpened = "";
	ImgOpened = "";
	ImgFound = 0;
	return false;
}

function OpenCard() {
	var id = $(this).attr("id");

	if ($("#" + id + " img").is(":hidden")) {
		$(Source + " div").unbind("click", OpenCard);
	
		$("#" + id + " img").slideDown('fast');

		if (ImgOpened == "") {
			BoxOpened = id;
			ImgOpened = $("#" + id + " img").attr("src");
			setTimeout(function() {
				$(Source + " div").bind("click", OpenCard)
			}, 300);
		} else {
			CurrentOpened = $("#" + id + " img").attr("src");
			if (ImgOpened != CurrentOpened) {
				setTimeout(function() {
					$("#" + id + " img").slideUp('fast');
					$("#" + BoxOpened + " img").slideUp('fast');
					BoxOpened = "";
					ImgOpened = "";
				}, 400);
			} else {
				$("#" + id + " img").parent().css("visibility", "none");
				$("#" + BoxOpened + " img").parent().css("visibility", "none");
				ImgFound++;
				BoxOpened = "";
				ImgOpened = "";
			}
			setTimeout(function() {
				$(Source + " div").bind("click", OpenCard)
			}, 400);
		}
		Counter++;
		$("#counter").html("" + Counter);
		if (ImgFound == currentCardCount) {
			setTimeout(function() {
				Swal.fire({
					title: "Felicidades lo lograste",
					width: 1000,
					padding: "3em",
					color: "#716add",
					background: "#fff url(/assets/img/alerts/confeti.gif)",
					showCancelButton: true,
					confirmButtonText: "Salir",
					cancelButtonText: "Siguiente Nivel", 
				}).then((result) => {
					if (!result.isConfirmed) {
						NextGame();
					} else {
						window.location.href = '../Edades/6-8.html';
					}
				});
			}, 1000); 
		}
		
	}
}

// ... (tu código existente)

document.addEventListener("DOMContentLoaded", function () {
	for (var y = 1; y < 3; y++) {
	  // Cambia el bucle forEach para que solo recorra las primeras 4 imágenes
	  for (var i = 0; i < currentCardCount; i++) {
		var newDiv = document.createElement("div");
		newDiv.id = "card" + y + i;
		newDiv.innerHTML = "<img src='" + ImgSource[i] + "' />";
		document.querySelector(Source).appendChild(newDiv);
	  }
	}
  
	var cardDivs = document.querySelectorAll(Source + " div");
	cardDivs.forEach(function (div) {
	  div.addEventListener("click", OpenCard);
	});
  
	ShuffleImages();
  });
  function ResizeCards(cardSize) {
	$("#boxcard div").css({
	  width: cardSize-200 + "px",
	  height: cardSize-200 + "px",
	});
	initialCardSize==cardSize;
  }
  
  function NextGame() {
	currentCardCount += 4; // Aumenta el número de cartas en 4
	if (currentCardCount <= ImgSource.length) {
	  $(Source).empty();
  
	  for (var y = 1; y < 3; y++) {
		for (var i = 0; i < currentCardCount; i++) {
		  var newDiv = document.createElement("div");
		  newDiv.id = "card" + y + i;
		  newDiv.innerHTML =
			"<img src='" +
			ImgSource[i % ImgSource.length] +
			"' />";
		  document.querySelector(Source).appendChild(newDiv);
		}
	  }
  
	  ResizeCards(initialCardSize);
  
	  var cardDivs = document.querySelectorAll(Source + " div");
	  cardDivs.forEach(function (div) {
		div.addEventListener("click", OpenCard);
	  });
  
	  ShuffleImages();
	  ResetGame();
	} else {
	  alert("¡Felicidades! Has completado todos los niveles.");
	}
  }
  
  function AdjustCardSize() {
	var cardSize = carinitialCardSizedSize - 50; // Ajusta el tamaño inversamente proporcional al número de cartas
	ResizeCards(cardSize);
  }
  