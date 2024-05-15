
//Elementleri tanımlıyorum
const container = document.querySelector("#container");
const body = document.getElementsByTagName("body");
const bookcontent = document.querySelector(".book-content");
const portada = document.querySelector(".face-front");
const Ul = document.querySelector(".Ul");
const bar = document.querySelector(".bar");
const AstronomiH = document.querySelector("#AstronomiH");
const T = document.querySelector("#T");
const Home = document.querySelector(".Home");
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
const p3pt = document.querySelector(".p3pt");
const p3t = document.querySelector(".p3t");
const p3bt = document.querySelector(".p3bt");
const p3bi = document.querySelector(".p3bi");
const p3bp = document.querySelector(".p3bp");
const p4ft = document.querySelector(".p4ft");
const p4fimage = document.querySelector(".p4fimage");
const p4fpt = document.querySelector(".p4fpt");
const infocontainer = document.querySelector(".infocontainer");
const Homebutton = document.querySelector("#Homebutton");
const Appfooter = document.querySelector("#Appfooter");
const haberalani = document.querySelector(".haberalani");
/*------------------------------------------------------------------------------*/


const HomeBF = () => {
	container.innerHTML = "";
	container.appendChild(Home);
	container.appendChild(bar);
	container.appendChild(infocontainer);
	container.appendChild(haberalani);
	container.appendChild(Appfooter);
}




bookcontent.remove(); //Book content silindi



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



container.appendChild(infocontainer);


//Astronomihaberleri 
const AstronomiHF = () => {







	/*Raflar ekleniyor ekleniyor.*/
	Home.appendChild(raf1);

	/*---------------------------------*/



	/*Raflara içerik ekleniyor*/
	raf1.style.backgroundImage = "url('/İmg/Ekran\ Görüntüsü\ -\ 2024-05-10\ 11-27-21.png')";
	raf1.style.backgroundSize = "cover";
	raf1.style.backgroundPositionY = "center";
	raf1.style.backgroundPositionX = "0";
	/*---------------------------------------------------------------------------------------*/







	//Raf1 deki dergi açıldı
	const raf1o = () => {


		//İnfocontainer silindi
		infocontainer.remove();
		/*------------------------------*/





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


		//Sayfa3 ön yüz 


		p3pt.textContent = "Tabii, oyuk dünya teorisi, Dünya'nın iç kısmının boş olduğunu ve içinde büyük bir boşluk veya boş bir alanın bulunduğunu öne süren bir iddiadır. Bu teoriye göre, Dünya'nın içi, kabuğun altında geniş bir iç boşlukla doludur ve yaşamı destekleyen bir iç güneş veya iç ısı kaynağı bulunabilir. Oyuk dünya teorisini destekleyenler, bu iç boşluğun, Dünya'nın manyetik alanını açıklayabileceğini ve bazı doğal fenomenleri izah edebileceğini savunurlar. Ayrıca, bazı efsaneler ve mitolojik hikayelerde, iç dünya veya Agartha adı verilen gizemli bir yerden bahsedilir, bu da oyuk dünya teorisini destekleyenlerin argümanlarından biridir. Ancak, bilimsel kanıtlar ve gözlemler, Dünya'nın içinde geniş bir boşluğun bulunmadığını ve Dünya'nın yapısının standart bir şekilde kabul edilen modelde olduğunu göstermektedir. Jeolojik veriler ve Dünya'nın iç kısmını anlamak için yapılan derin sondajlar, Dünya'nın katı bir çekirdeğe ve mantoya sahip olduğunu doğrulamaktadır.";
		p3pt.textContent += "Sonuç olarak, oyuk dünya teorisi genellikle bilimsel topluluk tarafından kabul görmeyen bir spekülasyon olarak görülür ve mevcut bilimsel kanıtlarla çelişmektedir.";
		p3t.textContent = "Oyuk dünya teorisi";
		p3pt.style.color = "#2d6f75";
		p3t.style.color = "#2d6f75";



		//Sayfa 3 Arka yüz 
		p3bt.textContent = "Europa'da Potansiyel Bir Okyanusun İzleri Bulundu";
		p3bi.src = "/İmg/Every\ Moon\ in\ Our\ Solar\ System\,\ Ranked.jpeg";
		p3bp.textContent = "Jüpiter'in en büyük dört ayından biri olan Europa, uzun süredir bilim insanlarının dikkatini çeken bir hedef olmuştur.";
		p3bp.textContent += "Europa'nın buz tabakalarının altında muhtemelen sıvı bir su okyanusu olabileceği düşünülmekteydi ve bu durum, gezegenin potansiyel olarak yaşam için uygun bir ortam sunabileceği fikrini doğurmuştu. Şimdi, son gözlemler ve analizler, Europa'nın yüzeyinde potansiyel bir okyanusun izlerini destekleyen güçlü kanıtlar bulunduğunu gösteriyor. Araştırmacılar, Galileo uzay aracı tarafından elde edilen verileri inceleyerek Europa'nın yüzeyini detaylı bir şekilde incelediler. Europa'nın yüzeyindeki buz kırıkları ve çatlakları, altında sıvı su bulunabileceğine dair güçlü kanıtlar sunmaktadır.";
		p3bp.textContent += "Bu bulgular, Europa'nın potansiyel yaşam için uygun bir ortam sunabileceği fikrini daha da güçlendirmektedir. Sıvı suyun varlığı, organik bileşiklerin varlığı ve enerji kaynaklarının olası bulunması, Europa'nın derin okyanuslarında mikrobiyal yaşamın varlığına işaret edebilir. Bu keşif, gezegenimizin evrende yaşamın yaygınlığı konusundaki bakış açısını derinden etkileyebilir. Europa gibi uydular, uzay araştırmalarının odak noktaları haline gelmeye devam edecek ve gelecek keşifler, evrenimizde yaşamın potansiyel yayılımı hakkındaki anlayışımızı daha da genişletebilir. Ayrıca, yeni bulgular, Europa'nın yüzeyindeki buz tabakalarının altında sıvı su oluşumu için potansiyel olarak uygun koşulların bulunduğunu göstermektedir. Buz tabakalarının altındaki sıvı su, volkanik faaliyetler veya jeotermal ısı kaynakları gibi çeşitli mekanizmalarla oluşabilir. Bu durumda, Europa'nın derinliklerindeki okyanuslar, Dünya'nın okyanuslarında bulunan hidrotermal çatlak sistemlerine benzer ortamlara sahip olabilir. Araştırmacılar, Europa'nın potansiyel yaşam için uygun bir ortam sağlayıp sağlamadığını anlamak için gelecekte daha fazla gözlem ve keşif yapmayı planlıyorlar. Bu amaçla, Avrupa Uzay Ajansı (ESA) ve NASA gibi uzay ajansları, Europa'ya yönelik gelecek uzay misyonları için planlar yapmaktadır.";



		//Sayfa 4 ön yüz 
		p4fimage.src = "/İmg/How\ to\ Spot\ the\ North\ Star_\ 9\ Steps\ \(with\ Pictures\)\ -\ wikiHow.jpeg";
		p4ft.textContent = "Gerçek Yıldızlar Gizleniyor mu?";
		p4fpt.textContent = "Günümüzde, uzay keşiflerinin artmasıyla birlikte, uzaydaki gözlemlerden elde edilen fotoğraf ve veriler her zamankinden daha fazla ilgi çekiyor. Ancak, bazı komplo teorisyenleri, uzay ajanslarının bu görüntüleri manipüle ettiğini ve gerçek yıldızları gizlediğini iddia ediyorlar.Bu teoriye göre, uzay ajansları, gerçek uzay görüntülerini kamuoyundan saklayarak, uzaydaki gizli sırları ve varlıkları gizlemek için çalışıyorlar. Bazı komplo teorisyenlerine göre, bu manipülasyonların amacı, uzayda var olduğuna inanılan gizli teknolojileri veya hatta uzaylı varlıkları gizlemektir.Özellikle, Ay'ın çevresinde veya Mars'ın yüzeyinde çekilen fotoğrafların detaylı bir şekilde incelenmesi, bazıları tarafından düzenlemeler veya gerçekleri gizleme olarak yorumlanıyor. Bazı görüşlere göre, gerçek yıldızların resimlerden çıkarılması veya üzerinin kapatılmasıyla, uzayda bulunan gizli nesnelerin veya varlıkların daha kolay gizlenmesi sağlanıyor.Ancak, bilim insanları ve uzay ajansları, bu tür iddiaları kesin bir şekilde reddediyorlar ve uzaydaki görüntülerin doğruluğunu ve bütünlüğünü savunuyorlar. Uzay ajansları, uzaydaki gözlemlerin kamuoyuyla paylaşılmasının, bilimsel keşiflerin ve insanlığın evreni anlama çabalarının bir parçası olduğunu vurguluyorlar.Bu komplo teorisi, uzay hakkındaki bilgi ve algıları etkileyebilir ve kamuoyunda karışıklığa neden olabilir. Ancak, bilimsel kanıtlar ve güvenilir uzay ajansı kaynakları, uzaydaki gözlemlerin doğruluğunu ve şeffaflığını desteklemeye devam ediyor.";




		/*-----------------------------------------------------------------------------*/




		/*Silinen elementler*/
		bar.remove();
		Home.remove();
		/*-------------*/


		/*Eklenen elementler*/
		container.appendChild(bookcontent);
		/*-----------------------------------*/



		let contZindex = 2;
		let customZindex = 1;



		for (let i = 0; i < uno.length; i++) {
			uno[i].style.zIndex = customZindex;
			customZindex--;

			uno[i].addEventListener('click', function (e) {

				let tgt = e.target;
				let unoThis = this;

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







	/*Raflar ekleniyor ekleniyor.*/
	Home.appendChild(raf1);
	/*---------------------------------*/



	/*Raflara içerik ekleniyor*/
	raf1.style.backgroundImage = "url('/İmg/backimg.jpg')";;
	raf1.style.backgroundSize = "cover";
	raf1.style.backgroundPositionX = "center";
	raf1.style.backgroundRepeat = "no-repeat";
	raf1.style.backgroundPositionX = "-5em";

	/*---------------------------------------------------------------------------------------*/







	//Raf1 deki dergi açıldı
	const raf1o = () => {


		//İnfocontainer silindi
		infocontainer.remove();
		/*------------------------------*/





		/*Raf 1 deki derginin içerikleri ekleniyor*/

		//Sayfa 1 ön yüz (Kapak)
		portada.style.backgroundImage = "url('/İmg/backimg.jpg')";





		//Sayfa1 arka yüz

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


		//Sayfa3 ön yüz 


		p3pt.textContent = "Tabii, oyuk dünya teorisi, Dünya'nın iç kısmının boş olduğunu ve içinde büyük bir boşluk veya boş bir alanın bulunduğunu öne süren bir iddiadır. Bu teoriye göre, Dünya'nın içi, kabuğun altında geniş bir iç boşlukla doludur ve yaşamı destekleyen bir iç güneş veya iç ısı kaynağı bulunabilir. Oyuk dünya teorisini destekleyenler, bu iç boşluğun, Dünya'nın manyetik alanını açıklayabileceğini ve bazı doğal fenomenleri izah edebileceğini savunurlar. Ayrıca, bazı efsaneler ve mitolojik hikayelerde, iç dünya veya Agartha adı verilen gizemli bir yerden bahsedilir, bu da oyuk dünya teorisini destekleyenlerin argümanlarından biridir. Ancak, bilimsel kanıtlar ve gözlemler, Dünya'nın içinde geniş bir boşluğun bulunmadığını ve Dünya'nın yapısının standart bir şekilde kabul edilen modelde olduğunu göstermektedir. Jeolojik veriler ve Dünya'nın iç kısmını anlamak için yapılan derin sondajlar, Dünya'nın katı bir çekirdeğe ve mantoya sahip olduğunu doğrulamaktadır.";
		p3pt.textContent += "Sonuç olarak, oyuk dünya teorisi genellikle bilimsel topluluk tarafından kabul görmeyen bir spekülasyon olarak görülür ve mevcut bilimsel kanıtlarla çelişmektedir.";
		p3t.textContent = "Oyuk dünya teorisi";
		p3pt.style.color = "#2d6f75";
		p3t.style.color = "#2d6f75";



		//Sayfa 3 Arka yüz 
		p3bt.textContent = "Europa'da Potansiyel Bir Okyanusun İzleri Bulundu";
		p3bi.src = "/İmg/Every\ Moon\ in\ Our\ Solar\ System\,\ Ranked.jpeg";
		p3bp.textContent = "Jüpiter'in en büyük dört ayından biri olan Europa, uzun süredir bilim insanlarının dikkatini çeken bir hedef olmuştur.";
		p3bp.textContent += "Europa'nın buz tabakalarının altında muhtemelen sıvı bir su okyanusu olabileceği düşünülmekteydi ve bu durum, gezegenin potansiyel olarak yaşam için uygun bir ortam sunabileceği fikrini doğurmuştu. Şimdi, son gözlemler ve analizler, Europa'nın yüzeyinde potansiyel bir okyanusun izlerini destekleyen güçlü kanıtlar bulunduğunu gösteriyor. Araştırmacılar, Galileo uzay aracı tarafından elde edilen verileri inceleyerek Europa'nın yüzeyini detaylı bir şekilde incelediler. Europa'nın yüzeyindeki buz kırıkları ve çatlakları, altında sıvı su bulunabileceğine dair güçlü kanıtlar sunmaktadır.";
		p3bp.textContent += "Bu bulgular, Europa'nın potansiyel yaşam için uygun bir ortam sunabileceği fikrini daha da güçlendirmektedir. Sıvı suyun varlığı, organik bileşiklerin varlığı ve enerji kaynaklarının olası bulunması, Europa'nın derin okyanuslarında mikrobiyal yaşamın varlığına işaret edebilir. Bu keşif, gezegenimizin evrende yaşamın yaygınlığı konusundaki bakış açısını derinden etkileyebilir. Europa gibi uydular, uzay araştırmalarının odak noktaları haline gelmeye devam edecek ve gelecek keşifler, evrenimizde yaşamın potansiyel yayılımı hakkındaki anlayışımızı daha da genişletebilir. Ayrıca, yeni bulgular, Europa'nın yüzeyindeki buz tabakalarının altında sıvı su oluşumu için potansiyel olarak uygun koşulların bulunduğunu göstermektedir. Buz tabakalarının altındaki sıvı su, volkanik faaliyetler veya jeotermal ısı kaynakları gibi çeşitli mekanizmalarla oluşabilir. Bu durumda, Europa'nın derinliklerindeki okyanuslar, Dünya'nın okyanuslarında bulunan hidrotermal çatlak sistemlerine benzer ortamlara sahip olabilir. Araştırmacılar, Europa'nın potansiyel yaşam için uygun bir ortam sağlayıp sağlamadığını anlamak için gelecekte daha fazla gözlem ve keşif yapmayı planlıyorlar. Bu amaçla, Avrupa Uzay Ajansı (ESA) ve NASA gibi uzay ajansları, Europa'ya yönelik gelecek uzay misyonları için planlar yapmaktadır.";



		//Sayfa 4 ön yüz 
		p4fimage.src = "/İmg/How\ to\ Spot\ the\ North\ Star_\ 9\ Steps\ \(with\ Pictures\)\ -\ wikiHow.jpeg";
		p4ft.textContent = "Gerçek Yıldızlar Gizleniyor mu?";
		p4fpt.textContent = "Günümüzde, uzay keşiflerinin artmasıyla birlikte, uzaydaki gözlemlerden elde edilen fotoğraf ve veriler her zamankinden daha fazla ilgi çekiyor. Ancak, bazı komplo teorisyenleri, uzay ajanslarının bu görüntüleri manipüle ettiğini ve gerçek yıldızları gizlediğini iddia ediyorlar.Bu teoriye göre, uzay ajansları, gerçek uzay görüntülerini kamuoyundan saklayarak, uzaydaki gizli sırları ve varlıkları gizlemek için çalışıyorlar. Bazı komplo teorisyenlerine göre, bu manipülasyonların amacı, uzayda var olduğuna inanılan gizli teknolojileri veya hatta uzaylı varlıkları gizlemektir.Özellikle, Ay'ın çevresinde veya Mars'ın yüzeyinde çekilen fotoğrafların detaylı bir şekilde incelenmesi, bazıları tarafından düzenlemeler veya gerçekleri gizleme olarak yorumlanıyor. Bazı görüşlere göre, gerçek yıldızların resimlerden çıkarılması veya üzerinin kapatılmasıyla, uzayda bulunan gizli nesnelerin veya varlıkların daha kolay gizlenmesi sağlanıyor.Ancak, bilim insanları ve uzay ajansları, bu tür iddiaları kesin bir şekilde reddediyorlar ve uzaydaki görüntülerin doğruluğunu ve bütünlüğünü savunuyorlar. Uzay ajansları, uzaydaki gözlemlerin kamuoyuyla paylaşılmasının, bilimsel keşiflerin ve insanlığın evreni anlama çabalarının bir parçası olduğunu vurguluyorlar.Bu komplo teorisi, uzay hakkındaki bilgi ve algıları etkileyebilir ve kamuoyunda karışıklığa neden olabilir. Ancak, bilimsel kanıtlar ve güvenilir uzay ajansı kaynakları, uzaydaki gözlemlerin doğruluğunu ve şeffaflığını desteklemeye devam ediyor.";
		/*-----------------------------------------------------------------------------*/




		/*Silinen elementler*/
		bar.remove();
		Home.remove();
		/*-------------*/


		/*Eklenen elementler*/
		container.appendChild(bookcontent);
		/*-----------------------------------*/



		let contZindex = 2;
		let customZindex = 1;



		for (let i = 0; i < uno.length; i++) {
			uno[i].style.zIndex = customZindex;
			customZindex--;

			uno[i].addEventListener('click', function (e) {

				let tgt = e.target;
				let unoThis = this;

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

	Homebutton.addEventListener("click", HomeBF);
	raf1.addEventListener("click", raf1o);

	/*------------------------------------------------------------------*/
}


Homebutton.addEventListener("click", HomeBF);
T.addEventListener("click", TF);
AstronomiH.addEventListener("click", AstronomiHF);





