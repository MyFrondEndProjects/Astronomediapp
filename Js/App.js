const container = document.querySelector("#container");
const body = document.getElementsByTagName("body");
const bookcontent = document.querySelector(".book-content");
const portada = document.querySelector("#portada");
const prevbtn = document.querySelector(".prevbtn");
const Gundembtn = document.querySelector("#Gundem");
const contentlist = document.querySelector(".Contentlist");
const Ul = document.querySelector(".Ul");
const bar = document.querySelector(".bar");



prevbtn.remove();
/*Oluşturulan elementler*/
const Home = document.createElement("div");
const dergi1 = document.createElement("a");
const dergi2 = document.createElement("a");
bookcontent.remove(); //Book content silindi


// Home özellikleri
Home.classList.add("Home");
Home.style.position = "absolute";
Home.style.top = "5%";
Home.style.width = "80%";
Home.style.height = "100%";
Home.style.left = "17%";
Home.style.bottom = "5%";
Home.style.border = "10px solid Black";
Home.style.boxShadow = "30px 35px 10px 5px black";
Home.style.borderRadius = "0.5em";
Home.style.backgroundImage = "url('/İmg/_\ \(4\).jpeg')";
container.appendChild(Home); //Home container a eklendi



// Dergi1 özellikleri
dergi1.style.width = "13em";
dergi1.style.height = "18em";
dergi1.style.position = "absolute";
dergi1.style.left = "15.9em";
dergi1.style.top = "0.5em";
dergi1.style.borderRadius = "0.5em";
dergi1.style.backgroundImage = "url('İmg/Ekran Görüntüsü - 2024-05-10 11-27-21.png')";
dergi1.style.cursor = "pointer";
dergi1.style.backgroundSize = "cover";
dergi1.style.backgroundPositionY = "2em;"
Home.appendChild(dergi1); //Dergi1 Home a eklendi






// Dergi1 özellikleri
dergi2.style.position = "absolute";
dergi2.style.width = "13em";
dergi2.style.height = "18em";
dergi2.style.backgroundColor = "Blue";
dergi2.style.backgroundImage = "url('/İmg/_ (2).jpeg')";
dergi2.style.backgroundSize = "cover";
dergi2.style.left = "62.6em";
dergi2.style.top = "0.5em";
dergi2.cursor = "pointer";
dergi2.style.borderRadius = "0.5em";
Home.appendChild(dergi2);//Dergi2 Home a eklendi






const dergi1open = () => { //Dergi1 fonksiyonu

	Home.remove();

	let prevbutton = document.createElement("button");
	prevbutton.classList.add("Prevbutton");
	prevbutton.style.borderRadius = "100%";
	prevbutton.textContent = "←";





	container.appendChild(prevbutton);
	container.appendChild(bookcontent);
	container.appendChild(bookcontent);
	var front = document.querySelector('.face-front');
	var back = document.querySelector('.face-back');
	var flip = document.querySelector('.book-content');
	var uno = document.querySelectorAll('.Magazin');
	const p1p = document.querySelector(".p1p");
	p1p.textContent = "Çalışıyor";
	var contZindex = 2;
	var customZindex = 1;

	for (var i = 0; i < uno.length; i++) {
		uno[i].style.zIndex = customZindex;
		customZindex--;

		uno[i].addEventListener('click', function (e) {

			var tgt = e.target;
			var unoThis = this;

			unoThis.style.zIndex = contZindex;
			contZindex++;

			if (tgt.getAttribute('class') == 'face-front') {
				unoThis.style.zIndex = contZindex;
				contZindex += 20;
				setTimeout(function () {
					unoThis.style.transform = 'rotateY(-180deg)';
				}, 500);
			}
			if (tgt.getAttribute("class") == 'face-back') {
				unoThis.style.zIndex = contZindex;
				contZindex += 20;

				setTimeout(function () {
					unoThis.style.transform = 'rotateY(0deg)';
				}, 500);
			}

			if (tgt.getAttribute('id') == 'portada') {
				flip.classList.remove("trnsf-reset");
				flip.classList.add("trnsf");
			}
			if (tgt.getAttribute('id') == 'trsf') {
				flip.classList.remove("trnsf");
				flip.classList.add("trnsf-reset");
			}

		});

	}
	const Homepv = () => {
		container.textContent = "";
		container.appendChild(Home);


	}
	prevbutton.addEventListener("click", Homepv);
}


const dergi2open = () => { //Dergi2 fonksiyonu

	Home.remove();

	let prevbutton = document.createElement("button");
	prevbutton.classList.add("Prevbutton");
	prevbutton.style.borderRadius = "100%";
	prevbutton.textContent = "←";





	container.appendChild(prevbutton);
	container.appendChild(bookcontent);
	container.appendChild(bookcontent);




	var front = document.querySelector('.face-front');
	var back = document.querySelector('.face-back');
	var flip = document.querySelector('.book-content');
	var uno = document.querySelectorAll('.Magazin');
	var portada = document.querySelectorAll('#portada');
	const p1p = document.querySelector(".p1p");
	p1p.textContent = "Çalışıyor";
	var contZindex = 2;
	var customZindex = 1;

	for (var i = 0; i < uno.length; i++) {
		uno[i].style.zIndex = customZindex;
		customZindex--;

		uno[i].addEventListener('click', function (e) {

			var tgt = e.target;
			var unoThis = this;

			unoThis.style.zIndex = contZindex;
			contZindex++;

			if (tgt.getAttribute('class') == 'face-front') {
				unoThis.style.zIndex = contZindex;
				contZindex += 20;
				setTimeout(function () {
					unoThis.style.transform = 'rotateY(-180deg)';
				}, 500);
			}
			if (tgt.getAttribute("class") == 'face-back') {
				unoThis.style.zIndex = contZindex;
				contZindex += 20;

				setTimeout(function () {
					unoThis.style.transform = 'rotateY(0deg)';
				}, 500);
			}

			if (tgt.getAttribute('id') == 'portada') {
				flip.classList.remove("trnsf-reset");
				flip.classList.add("trnsf");
			}
			if (tgt.getAttribute('id') == 'trsf') {
				flip.classList.remove("trnsf");
				flip.classList.add("trnsf-reset");
			}

		});

	}
	const Homepv = () => {
		container.textContent = "";
		container.appendChild(Home);


	}
	prevbutton.addEventListener("click", Homepv);
}


const Contents = () => {


	Ul.remove();   //Ul silindi
	contentlist.textContent = "";




	let Komploteorileri = document.createElement("a");
	let Komploteorilerili = document.createElement("li");



	Komploteorileri.textContent = "Komploteorileri";


	contentlist.appendChild(prevbtn); // Geri dönme butonu 2. ul ye eklendi
	bar.appendChild(contentlist);  //Bara 2. Ul eklendi ve tıklanılan elementin içeriği eklendi
	Komploteorilerili.appendChild(Komploteorileri);
	contentlist.appendChild(Komploteorilerili);





	const prevul = () => {
		contentlist.remove();
		bar.appendChild(Ul);
	}
	prevbtn.addEventListener("click", prevul);
}

Gundembtn.addEventListener("click", Contents);
dergi2.addEventListener("click", dergi2open);  //Dergi 2 click ye eklenen click eventi
dergi1.addEventListener("click", dergi1open); //Dergi 1 click e eklenen click eventi



dergi2.addEventListener("click", dergi2open);  //Dergi 2 click ye eklenen click eventi
dergi1.addEventListener("click", dergi1open); //Dergi 1 click e eklenen click eventi
