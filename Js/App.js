/*Elementleri tanımlıyorum*/
const container = document.querySelector("#container");
const body = document.getElementsByTagName("body");
const bookcontent = document.querySelector(".book-content");
const portada = document.querySelector(".face-front");
const Ul = document.querySelector(".Ul");
const bar = document.querySelector(".bar");
const AstronomiH = document.querySelector("#AstronomiH");
const T = document.querySelector("#T");
const İnfo = document.querySelector(".İnfo");
const Home = document.querySelector(".Home");
const prevbtn = document.querySelector(".prevbtn");
let front = document.querySelector('.face-front');
let back = document.querySelector('.face-back');
let flip = document.querySelector('.book-content');
let uno = document.querySelectorAll('.Magazin');
const Pagetitle1 = document.querySelector(".Pagetitle1");
const p1p = document.querySelector(".p1p");
const p1p2 = document.querySelector(".p1p2");
const p1i = document.querySelector(".p1i")
const p2i = document.querySelector(".p2i");
const p2pt = document.querySelector(".p2pt");
const p2t1 = document.querySelector(".p2t1");
const p2bpt = document.querySelector(".p2bpt");
const p2btitle = document.querySelector(".p2btitle");
/*-------------------------*/







bookcontent.remove(); //Book content silindi
prevbtn.remove(); //prevbuton silindi



/*Raflar tanımlandı*/
let raf1 = document.createElement("a");
raf1.classList.add("raf1");
let raf2 = document.createElement("a");
raf2.classList.add("raf2");
let raf3 = document.createElement("a");
raf3.classList.add("raf3");
let raf4 = document.createElement("a");
raf4.classList.add("raf4");
/*-------------------------------------*/



/*Raflar diziye aktarıldı*/
let rafs = [raf1, raf2, raf3, raf4];
/*---------------------------------*/






//Astronomihaberleri 
const AstronomiHF = () => {


	İnfo.remove(); //İnfo silindi




	/*Raflar ekleniyor ekleniyor.*/
	Home.appendChild(raf1);
	Home.appendChild(raf2);
	Home.appendChild(raf3);
	Home.appendChild(raf4);
	/*---------------------------------*/



	/*Raflara içerik ekleniyor*/
	raf1.style.backgroundImage = "url('/İmg/Ekran\ Görüntüsü\ -\ 2024-05-10\ 11-27-21.png')";
	raf1.style.backgroundSize = "cover";
	raf1.style.backgroundPositionY = "center";

	raf2.style.backgroundImage = "url('/İmg/Ekran\ Görüntüsü\ -\ 2024-05-10\ 11-27-21.png')";
	raf2.style.backgroundSize = "cover";
	raf2.style.backgroundPositionY = "center";


	raf3.style.backgroundImage = "url('/İmg/Ekran\ Görüntüsü\ -\ 2024-05-10\ 11-27-21.png')";
	raf3.style.backgroundSize = "cover";
	raf3.style.backgroundPositionY = "center";


	raf4.style.backgroundImage = "url('/İmg/Ekran\ Görüntüsü\ -\ 2024-05-10\ 11-27-21.png')";
	raf4.style.backgroundSize = "cover";
	raf4.style.backgroundPositionY = "center";
	/*---------------------------------------------------------------------------------------*/







	//Raf1 deki dergi açıldı
	const raf1o = () => {




		/*Raf 1 deki derginin içerikleri ekleniyor*/
		portada.backgroundImage = "url('/İmg/icon.png')";

		//Sayfa 1 ön yüz (Kapak)



		//Sayfa1 arka yüz
		portada.style.backgroundImage = "url('/İmg/background.jpg')";
		Pagetitle1.textContent = "3 Cisim problemi";
		p1p.textContent = "Bugün Netflix dizisyle birlikte tekrar gündeme gelen 3 cisim problemiyle ilgili bir yazımızı sunacaz. 3 cisim problemi çok geniş kapsamda içinde gerçek bilimsel hala çözülememiş verileri de taşısa komplo teorilerine de konu olmuştur. 3 cisim problemi içinde";
		p1p.textContent += "fermi paradoksu da bulunan çok geniş kapsamlı içeriğe sahip bilimsel bir kavramdır.Klasik mekanikte, üç cisim problemi, üç cismin karşılıklı etkileşimlerini inceleyen temel bir fiziksel problemi temsil eder.Bu problem, üç cismin birbirlerine olan çekim veya itme 	kuvvetlerine maruz kaldığı bir sistemde, her bir cismin hareketini hesaplamayı amaçlar.";
		p1p2.textContent = " Üç cisim problemi, Newton'un hareket yasalarına dayanır ve genellikle çözümü matematiksel olarak karmaşık olabilir.Bu nedenle, üç cisim problemini çözmek, birçok farklı fizik alanında, özellikle astronomi ve mekanik mühendislikte, önemli bir yetenek olarak kabul edilir. Bu problemi anlamak ve çözmek, karmaşık sistemlerin davranışını anlamak ve tahmin";
		p1p2.textContent += " etmek için temel bir araç sağlar.Üç cisim problemi, fiziksel etkileşimlerin karmaşıklığını inceleyen önemli bir fiziksel kavramdır ve genellikle farklı disiplinlerde karşımıza çıkar. 	Bu kavram, klasik mekanikte üç cismin birbirlerine olan çekim veya itme kuvvetlerine maruz kaldığı bir sistemdeki hareketlerin analizini hedefler. Özellikle Newton'un hareket yasaları temel alınarak formüle edilmiştir. Bu problem, astronomide, yıldızların, gezegenlerin ve galaksilerin hareketini anlamak için önemlidir. Ayrıca, mühendislikte de kullanılır;";
		p1p2.textContent += " örneğin, roketlerin, uçakların ve diğer karmaşık sistemlerin hareketlerini modellenmesi ve tahmin edilmesinde önemli bir rol oynar. Üç cisim problemi, zamanla birçok farklı şekilde 	ele alınmıştır ve hatta popüler kültürde bile yer bulmuştur. Örneğin, Netflix dizisi 'Travelers' gibi bilim kurgu yapıtlarında üç cisim problemi, zaman yolculuğu gibi karmaşık kavramlarla birleilerek heyecan verici hikayelerin temelini oluşturabilir. Bu nedenle, üç cisim problemi, sadece fizik bilimlerinde değil, aynı zamanda popüler kültürde de ilgiçekici bir konudur.";
		p1i.src = "./İmg/3cisimproblemi.jpeg";


		//Sayfa2 ön yüz
		p2i.src = "İmg/a35c2eb6-fea5-4c70-ae10-825d2b594939.jpeg";
		p2pt.textContent = "Dünya Dışı Gezegenlerin Sayısı Sürekli Artıyor";
		p2t1.textContent = "Astronomi dünyası, Güneş Sistemi dışındaki gezegenlerin keşfine yönelik heyecan verici bir gelişmeyle çalkalanıyor. Son verilere göre, bir grup uluslararası bilim insanı, Hubble Uzay Teleskobu ve Keck Gözlemevi'nin yardımıyla, Samanyolu Galaksisi'nde 50 yeni potansiyel gezegenin varlığını belirledi. Bu yeni keşfedilen gezegenler, çeşitli boyutlarda ve uzaklıkta olup, bazıları Dünya'nın boyutlarına ve yaşama uygunluğuna sahip olabileceklerinin işaretlerini taşıyor. Bilim insanları, bu yeni gezegenlerin tespitinde transit yöntemi olarak bilinen bir teknik 	kullandılar. Bu yöntemde, bir yıldızın önünden geçen bir gezegenin belirgin ışık kaybı";
		p2t1.textContent += " ölçülerek gezegenin varlığı tespit edilir. Bu keşif, bilim insanlarının evrende yaşamın varlığını araştırmak için kullandığı güçlü araçların bir göstergesidir. Araştırmacılar, bu yeni keşiflerin gezegen oluşumu ve evrimi hakkında daha fazla bilgi sağlayabileceğini belirtiyorlar. Ayrıca, bu gezegenlerin atmosferik bileşimi ve yüzey";
		p2t1.textContent += "özellikleri hakkında daha fazla bilgi edinmek için gelecekteki gözlemler ve uzay misyonları planlanmaktadır Bu son keşif, evrende yaşamın olası varlığını araştıran bilim insanlarını heyecanlandırıyor ve insanlık için yeni ufuklar açabilecek potansiyel gezegenlerin keşfine ışık tutuyor.";



		//Sayfa2 arka yüz
		p2btitle.textContent = "Evrendeki En Parlak Galaksiyi Keşfettiler";
		p2bpt.textContent = "İçerik: Gök bilimciler, evrende daha önce görülmemiş bir parlaklıkta bir galaksi keşfettiler. Yeni keşfedilen galaksi, adeta milyonlarca yıldızın bir araya gelerek şaşırtıcı bir ışık gösterisi sunduğu bir sahne gibi görünüyor. Bu görkemli galaksiyi özel kılan şey ise, merkezinde meydana gelen bir hypernova patlamasının yol açtığı devasa ışık salınımı. Hypernova patlamaları, güneşimizin binlerce kez daha parlak bir ışık yaydığı, evrendeki en güçlü patlamalardan biri olarak kabul edilir. Bu galaksi, 13 milyar ışık yılı uzaklıkta yer aldığı için, gökbilimcilerin bu olağanüstü olayı gözlemlemesi ve incelemesi zorlu bir süreçti. Ancak, son teknolojik gelişmeler ve gelişmiş gözlem teleskopları, bu devasa patlamanın ardındaki gizemi çözmeye yardımcı oldu.";
		p2bpt.textContent += "Gökbilimciler, bu parlak galaksinin doğası hakkında daha fazla bilgi edinmek için yoğun bir şekilde çalışıyorlar. Hypernova patlamalarının evrendeki nasıl oluştuğu, galaksi oluşumunu nasıl etkilediği ve uzaydaki diğer galaksilerle olan etkileşimleri gibi sorular, astronomi topluluğunda büyük bir ilgi uyandırıyor. Bu keşif, evrenin derinliklerindeki sırları anlamak için yapılan sonsuz bir arayışın sadece bir örneği olarak görülüyor ve gelecekte daha fazla benzeri olayın keşfedilmesine olanak sağlıyor.";
		p2bpt.textContent += "Araştırmacılar, bu parlak galaksinin doğası hakkında daha fazla bilgi edinmek için yoğun bir şekilde çalışıyorlar. Hypernova patlamalarının evrende nasıl oluştuğu ve galaksi oluşumunu nasıl etkilediği gibi sorular, astronomi topluluğunda büyük bir ilgi uyandırıyor. Bu keşif, evrenin derinliklerindeki sırları anlamak için yapılan sonsuz bir arayışın sadece bir örneği olarak görülüyor ve gelecekte daha fazla benzeri olayın keşfedilmesine olanak sağlıyor. Gök bilimciler, uzayın sonsuz sırlarını çözmek ve evrenin gizemlerini açığa çıkarmak için çalışmalarını sürdürüyorlar.";











		/*-----------------------------------------------------------------------------*/




		/*Silinen elementler*/
		bar.remove();
		Home.remove();
		/*-------------*/


		/*Eklenen elementler*/
		container.appendChild(bookcontent);
		container.appendChild(prevbtn);
		/*-----------------------------------*/



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

	}



	raf1.addEventListener("click", raf1o);



}
/*------------------------------------------------------------------------------*/










//Komplo teorileri
const TF = () => {
	İnfo.remove();
	Home.appendChild(raf1);
	Home.appendChild(raf2);
	Home.appendChild(raf3);
	Home.appendChild(raf4);










}
/*------------------------------------------------------------------*/


T.addEventListener("click", TF);
AstronomiH.addEventListener("click", AstronomiHF);







