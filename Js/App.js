//Elementleri tanımlıyorum
const container = document.querySelector("#container");
const body = document.getElementsByTagName("body");
const bookcontent = document.querySelector(".book-content");
const portada = document.querySelector(".face-front");
const Ul = document.querySelector(".Ul");
const bar = document.querySelector(".bar");
const Hb2=document.querySelector("#Hb2");
const Home = document.querySelector(".Home");
const front = document.querySelector('.face-front');
const back = document.querySelector('.face-back');
const flip = document.querySelector('.book-content');
const uno = document.querySelectorAll('.Magazin');
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
const Homebutton = document.querySelector("#Homebutton");
const Appfooter = document.querySelector("#Appfooter");
const haberalani = document.querySelector(".haberalani");
const darkthemebutton = document.querySelector(".darkthemebutton");
const theme = document.querySelector(".theme");
const lightthemebutton = document.querySelector(".lightthemebutton");
const Habera1p=document.querySelector(".Habera1p");
const haberalani1=document.querySelector(".haberalani1");
const haberalani2=document.querySelector(".haberalani2");
const Habera2p=document.querySelector(".Habera2p");
const gundempanelclistli=document.querySelectorAll(".gundempanelclistli");
const newslist = document.querySelectorAll('.gundempanelclistli');
const Astronomediavideobutton=document.querySelector("#Astronomediavideobutton");
const gundempanelbtn=document.querySelector(".gundempanelbtn");
const astrolojigündemtextcontent=document.querySelector(".astrolojigündemtextcontent");
const Astronomediavideo=document.querySelector(".Astronomediavideo");
const astronomediavideocontainer=document.querySelector(".astronomediavideocontainer");
const astronomediavideocontent=document.querySelector(".astronomediavideocontent");
const videoinfocontainer=document.querySelector(".videoinfocontainer");
const astronomediavideoadd=document.querySelector(".astronomediavideoadd");
const tarih=document.querySelector(".tarih");
const Avtitle=document.querySelector(".Avtitle");
const Hb1=document.querySelector("#Hb1");
const avinfo=document.querySelector(".avinfo");
const videobaslik=document.querySelector(".videobaslik");
const videoyth=document.querySelector(".videoyth");
const videoc=document.querySelectorAll(".videoc");
const Hakkımızdabutton=document.querySelector("#Hakkımızdabutton");
const Hakkimizdasayfasi=document.querySelector(".Hakkimizdasayfasi");
const yetkinliklerbutton=document.querySelector("#yetkinliklerbutton");
const hakkımızdacontent=document.querySelector(".hakkımızdacontent");
const benkimimbutton=document.querySelector("#benkimimbutton");
const iletisimbutton=document.querySelector("#iletisimbutton");
const hakkimizdacontent=document.querySelector(".hakkimizdacontent");
const hakkimizrightbar=document.querySelector(".hakkimizrightbar");
const hakkimizdacontentscrean=document.querySelector(".hakkimizdacontentscrean");
const isbirligi=document.querySelector("#isbirligi");
const isbirligicontent=document.querySelector(".isbirligicontent");
const isbirligicontainer=document.querySelector(".isbirligicontainer");
const t=document.querySelector(".t");
const TG=document.querySelector("#TG");
const Spacegalery=document.querySelector(".Spacegalery");
const searchconteiner=document.querySelector(".searchconteiner");
const Gsearch=document.querySelector(".Gsearch");
const Gsearchbutton=document.querySelector(".Gsearchbutton");
/*------------------------------------------------------------------------------*/






let gunceltarih= new Date();
let gun = gunceltarih.toLocaleDateString('tr-TR'); // 'tr-TR' Türkçe için örnek bir locale



// Haber alanları icerik güncelleme alanı 

//Haberalanı1 

Habera1p.textContent="Hakkımızda sayfasından genel bilgileri edinebilirsiniz";




//Haberalanı2

Habera2p.textContent="AstronomediaTV ile gündem ve genel olarak yayınlayacağımız yeni videoları takip edebilirsiniz AstronomediaTV sayfamız incelemek isterseniz şuan yayında";
//------------------------------------------------------//




/*------------------------------------------Burası projenin sonunda Firebase den veri alınarak değiştirelecek----------------------------------------*/
const Aimgdata =[
	{
		photoname:"Mars",
		url:["İmg/icon.png","Mars.png",],
	}
]


const HomeBF = () => {
	container.innerHTML = "";
	container.appendChild(Home);
	container.appendChild(bar);
	container.appendChild(haberalani);
	container.appendChild(Appfooter);
	container.appendChild(theme);
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









	/*Raflar ekleniyor ekleniyor.*/
	Home.appendChild(raf1);

	/*---------------------------------*/



	/*Raflara içerik ekleniyor*/
	raf1.style.backgroundImage = "url('/İmg/Ekran\ Görüntüsü\ -\ 2024-05-10\ 11-27-21.png')";
	raf1.style.backgroundSize = "cover";
	raf1.style.backgroundPositionY = "center";
	raf1.style.backgroundPositionX = "0";
	/*---------------------------------------------------------------------------------------*/






	document.querySelector("#pagetitlee").textContent="Astronomedia/Astronomedia"

	//Raf1 deki dergi açıldı
	const raf1o = () => {

	
		//İnfocontainer silindi
		haberalani.remove();
		/*------------------------------*/





		/*Raf 1 deki derginin içerikleri ekleniyor*/
		portada.backgroundImage = "url('/İmg/icon.png')";

		//Sayfa 1 ön yüz (Kapak)



		//Sayfa1 arka yüz
		portada.style.backgroundImage = "url('/İmg/background.jpg')";
		Pagetitle1.textContent = "3 Cisim problemi";
		p1p.textContent = "Bugün Netflix dizisyle birlikte tekrar gündeme gelen 3 cisim problemiyle ilgili bir yazımızı sunacaz. gündeme gelen 3 cisim problemiyle ilgili bir yazımızı sunacaz.";
		p1p.textContent += "fermi paradoksu da bulunan çok geniş kapsamlı içeriğe sahip bilimsel bir kavramdır.Klasik mekanikte, üç cisim problemi, üç cismin karşılıklı etkileşimlerini inceleyen temel bir fiziksel problemi temsil eder.Bu problem, üç cismin birbirlerine olan çekim veya itme 	kuvvetlerine maruz kaldığı bir sistemde,";
		p1p2.textContent = " Üç cisim problemi, Newton'un hareket yasalarına dayanır ve genellikle çözümü matematiksel olarak karmaşık olabilir.Bu nedenle, üç cisim problemini çözmek, birçok farklı fizik alanında, özellikle astronomi ve mekanik mühendislikte, önemli bir yetenek olarak kabul edilir. Bu problemi anlamak ve çözmek, karmaşık sistemlerin davranışını anlamak ve tahmin";
		p1p2.textContent += " etmek için temel bir araç sağlar.Üç cisim problemi, fiziksel etkileşimlerin karmaşıklığını inceleyen önemli bir fiziksel kavramdır ve genellikle farklı disiplinlerde karşımıza çıkar. 	Bu kavram, klasik mekanikte üç cismin birbirlerine olan çekim veya itme kuvvetlerine maruz kaldığı bir sistemdeki hareketlerin analizini hedefler. Özellikle Newton'un hareket yasaları temel alınarak formüle edilmiştir. Bu problem, astronomide, yıldızların, gezegenlerin ve galaksilerin hareketini anlamak için önemlidir. Ayrıca, mühendislikte de kullanılır;";
	
		p1i.src = "./İmg/3cisimproblemi.jpeg";


		//Sayfa2 ön yüz
		p2i.src = "İmg/a35c2eb6-fea5-4c70-ae10-825d2b594939.jpeg";
		p2pt.textContent = "Dünya Dışı Gezegenlerin Sayısı Sürekli Artıyor";
		p2t1.textContent = "Astronomi dünyası, Güneş Sistemi dışındaki gezegenlerin keşfine yönelik heyecan verici bir gelişmeyle çalkalanıyor. Son verilere göre, bir grup uluslararası bilim insanı, Hubble Uzay Teleskobu ve Keck Gözlemevi'nin yardımıyla, Samanyolu Galaksisi'nde 50 yeni potansiyel gezegenin varlığını belirledi. Bu yeni keşfedilen gezegenler, çeşitli boyutlarda ve uzaklıkta olup, bazıları Dünya'nın boyutlarına ve yaşama uygunluğuna sahip olabileceklerinin işaretlerini taşıyor. Bilim insanları, bu yeni gezegenlerin tespitinde transit yöntemi olarak bilinen bir teknik 	kullandılar.";
		p2t1.textContent += " ölçülerek gezegenin varlığı tespit edilir. Bu keşif, bilim insanlarının evrende yaşamın varlığını araştırmak için kullandığı güçlü araçların bir göstergesidir. Araştırmacılar, bu yeni keşiflerin gezegen oluşumu ve evrimi hakkında daha fazla bilgi sağlayabileceğini belirtiyorlar.";
	



		//Sayfa2 arka yüz
		p2btitle.textContent = "Evrendeki En Parlak Galaksiyi Keşfettiler";
		p2bpt.textContent = "İçerik: Gök bilimciler, evrende daha önce görülmemiş bir parlaklıkta bir galaksi keşfettiler. Yeni keşfedilen galaksi, adeta milyonlarca yıldızın bir araya gelerek şaşırtıcı bir ışık gösterisi sunduğu bir sahne gibi görünüyor. Bu görkemli galaksiyi özel kılan şey ise, merkezinde meydana gelen bir hypernova patlamasının yol açtığı devasa ışık salınımı. Hypernova patlamaları, güneşimizin binlerce kez daha parlak bir ışık yaydığı, evrendeki en güçlü patlamalardan biri olarak kabul edilir. Bu galaksi, 13 milyar ışık yılı uzaklıkta yer aldığı için, gökbilimcilerin bu olağanüstü olayı gözlemlemesi ve incelemesi zorlu bir süreçti. Ancak, son teknolojik gelişmeler ve gelişmiş gözlem teleskopları, bu devasa patlamanın ardındaki gizemi çözmeye yardımcı oldu.";
		p2bpt.textContent += "Gökbilimciler, bu parlak galaksinin doğası hakkında daha fazla bilgi edinmek için yoğun bir şekilde çalışıyorlar. Hypernova patlamalarının evrendeki nasıl oluştuğu, galaksi oluşumunu nasıl etkilediği ve uzaydaki diğer galaksilerle olan etkileşimleri gibi sorular, astronomi topluluğunda büyük bir ilgi uyandırıyor. Bu keşif, evrenin derinliklerindeki sırları anlamak için yapılan sonsuz bir arayışın sadece bir örneği olarak görülüyor ve gelecekte daha fazla benzeri olayın keşfedilmesine olanak sağlıyor.";
		


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
		p3bp.textContent += "Bu bulgular, Europa'nın potansiyel yaşam için uygun bir ortam sunabileceği fikrini daha da güçlendirmektedir.";



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




/*------------------------------------------------------------------------------*/













/*Tema değiştirme fonksiyonu*/
lightthemebutton.remove();
const karanlıktema = () => {
	container.style.backgroundColor = "#28282B";
	Appfooter.style.backgroundColor = "#28282B";
	Astronomediavideo.style.backgroundColor="#28282B";
	Hakkimizdasayfasi.style.backgroundColor="#28282B";
	hakkimizdacontent.style.backgroundColor="#28282B";
	hakkimizrightbar.style.backgroundColor="#28282B";
	hakkimizdacontentscrean.style.backgroundColor="darkgray";

	
	Spacegalery.style.backgroundColor="#28282B";

	

	isbirligicontainer.style.backgroundColor="#28282B";
	darkthemebutton.remove();
	theme.appendChild(lightthemebutton);
}

const Aydınlıktema = () => {
	lightthemebutton.remove();
	theme.appendChild(darkthemebutton);
	container.style.backgroundColor = "#2d6f75";
	Astronomediavideo.style.backgroundColor="#2d6f75";
	Hakkimizdasayfasi.style.backgroundColor="#2d6f75";
	hakkimizdacontent.style.backgroundColor="#2d6f75";
	hakkimizrightbar.style.backgroundColor="bisque";
	hakkimizdacontentscrean.style.backgroundColor="bisque";

	Spacegalery.style.backgroundColor="#2d6f75";

	
	Appfooter.style.backgroundColor = "White";
	container.style.backgroundImage = "";


	

}
/*-------------------------------------------------------*/













//                               Astroloji Gundem panel içerik güncelleme alanı                                          //


let Burcbaslık=document.createElement("h1");

// newslist içindeki tüm li öğelerini döngüye aldım
for (let i = 0; i < newslist.length; i++) {
    // Her bir li öğesi içindeki a öğelerini seçtim
    var anchorElements = newslist[i].getElementsByTagName("a");

    // Her bir a öğesi için tıklama olayı dinleyicisi ekledim
    for (let j = 0; j < anchorElements.length; j++) {




        anchorElements[j].addEventListener("click", function() {
            // Tıklanan öğenin id'sini seçtim
            if (this.id === "yengec") {
			Burcbaslık.textContent="Yengeç";
			astrolojigündemtextcontent.appendChild(Burcbaslık);
            astrolojigündemtextcontent.textContent=" Sevgili Yengeç, bugün sosyal ilişkilerinde ve aşk hayatında dönüşüm söz konusu olabilir. Yeni insanlarla tanışmak ve sosyal çevreni genişletmek için harika bir zaman. Ay'ın Oğlak burcunda konumlanmasıyla, ilişkilerinde daha ciddi ve sorumluluk sahibi olman gerekebilir. Bu da özellikle romantik ilişkine denge ve düzen getirecektir. Öte yandan, sosyal etkinliklere katılmak ve arkadaşlarınla vakit geçirmek de sana iyi gelecektir.  Mevcut ilişkinde yeni bir sayfa açmaya ne dersin? Bazı hataları geride bırakmak ilişkinin seyrini değiştirebilir. Partnerinle, birlikte mutlu olduğun aktivitelerle dolu bir hafta geçirebilirsin. Yaşayacağın bu heyecan, aşk hayatını adeta tazeleyecektir. Bu arada haftanın ilk günü bekar Yengeç burçlarına da şans getirecek. Açıkçası aşk hayatınıza bir anda girecek!   Bu süreçte, yeni iş fırsatları ve tekliflere de hazır olmalısın. Kariyerinde yeni heyecanlar ve bereketli kazançlar seni bekliyor. Yarın görüşmek üzere, sevgiyle kal... Sabah saatlerinde aniden değişen durumlara karşı dikkatli olmalısınız. Karşınızdaki kişilerle sıkıntılı süreçlere girmemeye özen gösterin. İlerleyen zamanlarda kendinizi daha rahat hissedebilirsiniz. Keyif aldığınız şeyler için harcama yapmak isteyebilirsiniz. Gün içinde sizi uğraştıran kişilere karşı dikkatli olmanızda fayda var.  Yengeç burcu günümüzde 22 Haziran ile 23 Temmuz arasında doğan kişilerdir. Yengeç burcu olan kişiler genel olarak hayatlarındaki her konuda aşırı derecede alıngan, hassas ve de kuruntulu olan kişilerdir. Sorumluluk duyguları da oldukça çok gelişmiş olmaktadır.";
            astrolojigündemtextcontent.textContent+=" Yaşamlarındaki her konuda aşırı bir şekilde hassas, alıngan ve kuruntulu olan Yengeç'leri tanımlayan sözcük 'Hissederim' dir. Sorumluluk duyguları çok gelişmiştir. Her işte olağanüstü olan ayrıntıcılıkları, işlerinde mükemmeliyetçiliği getirir. Ayni sorumlulukları karşılarındakilerden de beklerler. Yengeç'ler duygusallıkları ve duyarlılıkları ile tanınırlar. Çevresindeki her insandan da ayni hassasiyeti bekledikleri için, kolay geçinilir tipler değildir. İyi günlerinde neşeli, iyi kalpli, yardımsever, düşünceli ve anlayışlıdırlar. Fakat herhangi belirgin bir neden olmadan somurtkan ve alıngan olabilirler. Yakınlarını ve arkadaşlarını çok sevmelerine karşın, bunu pek belli etmezler. Kendilerini herhangi bir şekilde inciten kişileri zor bağışlarlar ve yapılan hareketi asla unutmazlar. Yengeç'ler müziğe ve dinsel konulara karşı ilgilidirler. Sabırlı olan Yengeç'ler tartışmalardan kesinlikle hoşlanmazlar. Duygularını sessiz bir şekilde saklarlar. Gerçek Yengeç Burcu insanı fiziksel olarak; soluk, beyaz tenli, orta ve kısa boylu, yuvarlak yüzlüdür. Gözleri genelde gri veya mavi gözlüdür. Saçları mat ve kahverengi olur.Yengeç kadınları tartışmasız çok güzeldirler. Ay gezegenini simgeleyen güzel yüzleri vardır. Vücut yapıları gençliklerinde güzeldirler. Yaşları ilerledikçe, dikkat etmezlerse kilolu tombul bir vücutları olur .  Bu burcun sembolü tarih boyunca değişik şekillere girmiştir. Babilliler onu MÖ 4000-2000 yılları arasında kaplumbağa olarak tanımlamışlardı. Eski Kalde düşünürleri bu burcu insanın kapısı olarak tanımlarlar. Yunan ve Roma hikâyelerinde Yengeç gökyüzüne Hera tarafından çıkarılır. Herkül'ün 12 görevinin ikincisinde deniz canavarı Hydra'nın zincire vurulması istenir. Bu savaş sırasında Yengeç, Herkül'ü ayağından ısırır. Hera da onu kahraman olarak gökyüzüne bir takımyıldız olarak atar. Koruyucu ve hassas, besleyen, büyüten, derin duygular, güçlü annelik duygusu, fedakâr, sezgi sahibi, başkalarının ihtiyaçlarına duyarlı. İlişkilerinde eğilimleri: İlişkilerinde güven arayan, hassas bir tutumu vardır. Aşırı kırılgan olabilir. Duygusal açıdan yakın olduğu kişiyle kendini güven içinde, hiç ayrılmamacasına bağlı hissetmek ister. Bir eve, yuvaya bağlı olmak, kendine kökler ve aile yaratmak ilişkilerinde ağır basacaktır. ";
            }
			if (this.id === "koc") {
                astrolojigündemtextcontent.textContent="Koç, Burçlar kuşağının ilk burcudur. Hareketli ve enerjik oluşları ile tanınırlar. Ben egoları çok fazla gelişmiştir. BEN, onların aynası olmuştur adeta. Bu burçta doğanlar çok pratiktirler. Olaylar karşısında coşkularını gizleyemezler. Yaşam yolunda canlılıklarını ve atılganlıklarını yitirmeden heyecanla ilerlerler. Merak ettikleri konularda olabildiğince yaratıcılardır. Amaçları doğrultusunda ilerlerken, kendilerini eylemleri ile kanıtlamak isterler. Eğer Koç'lar girişimde bulunacakları zaman izleyecekleri rotayı ayrıntıları ile planlarsa, enerjik yapılarının da yardımı ile daha da üretken olabilirler. Bencilliklerinden kaynaklanan sabırsızlıkları ve söz dinlemez yaratılışları yüzünden zaman zaman güç durumlara düştükleri de olur. Böyle anlarda başladıkları işlerini sonuçlandırmadan bırakırlar. Konuşmaları abartılıdır, bazen gerçekleri değiştirerek anlatırlar. Kavrama yetenekleri fazla olan Koç'lar yaşam sahnesinin başrolünde olmayı tercih ederler. Aşırı kıskanç ve bağımsızlıklarına düşkün olurlar. Fiziksel yapıları uzun yüzlü ve uzun boyludurlar. Kolları ve bacakları güçlüdür. Esmer ve kıvırcık saçları vardır. Bakışları delici ve keskindir. Sağlıklı bir ciltleri vardır.Spor yapmaya meraklı oldukları için de, bir çok spor salonlarında Koçlara rastlayabilirsiniz. Güzel dişleri olan Koçların; gözlerini dikerek gülümsemesi, çevrelerini etkisi altına alır. Koç Burcu Özellikleri: Koç burcu kadını ve erkeğinin tüm Koç burçları çalışma ortamlarında da arkadaş ortamlarında da her zaman hareket, hız ve rekabet peşindedir; her şeyde birinci olmaya çalışırlar. Yönetici gezegenleri Mars'ın ateş elementine ait olması nedeniyle Koç burcu en aktif burçlardan biridir. Zaman zaman düşünmeden de olsa harekete geçmek onların doğasındadır. Bu burç doğasında doğan kişiler, özellikle inisiyatif alabilen kişilerdir. Daha büyük bir başlangıç yapmak için kendilerinde cesaret ve harekete geçme isteği her koşulda görülür. Koç burcu insanları sabırsızdır. İnatçı bir karaktere sahip olan Koç burcu, hareketli, heyecanlı ve enerjik olmasıyla bilinir. Tutkulu ve sadakatli olan Koç burcu kadını, dik başlı yapısı ile ön plana çıkıyor. Korumacı ve kıskanç tavırları ile bilinen Koç'lar ile genelde anlaşılması zor insanlar oluyor. Lider ve otoriter özellikleri ise Koç burcu kadınının her zaman söz sahibi olmak istemesine neden oluyor. ";
				astrolojigündemtextcontent.textContent+="Koç burcu olumlu yönleri arasında mücadeleci yapısı en başta yer alır. Koç burcu zoru sever ve istediği şeyler konusunda oldukça büyük mücadeleler verir. Koç burcunun olumlu yönleri içinde bulunan mücadeleci yapısı onu hedeflerine her gün biraz daha yaklaştırarak başarıyı elde etmesini sağlar. Koç burçları ateş elementine mensup bir burç olduğundan ani duygu değişimleri ve öfke patlamalarında kontrolsüzdür. Öfkelendiğinde ya da üzüntüsünü dile getirdiğinde yaşadığı duygusallık nedeniyle kaçmak ve kurtulmak isteyebilir. Burçlara uygun lakaplar, KOÇ: Cesur yürek. BOĞA: Zat-ı şahane. İKİZLER: Sabah şekeri. YENGEÇ: Yufka yürek Dünyanın en zeki ve en güçlü burçları merak ediliyordu. Yapılan bir araştırmada ''Akrep, Koç ve İkizler'' burcunun en zeki burçlar olduğu kanıtlandı. Bu üç burçtaki insanlar diğer burç insanlarına göre daha zeki ve daha güçlü bir hafızaya sahip oluyorlar.";
            }
			if (this.id === "boga") {
               astrolojigündemtextcontent.textContent=" Boğa Güvenilir ve barışçıllardır. Boğa burcunun olumlu özellikleri arasında; dayanıklı olması, mantıklı bir şekilde hareket etmesi, güvenilir olması, kendine yeten bir kişiliğe sahip olması, barışçıl olması, duyarlı, üretken ve sabırlı olması, dengeli bir kişiliğe sahip olması ve son derece nazik olması vardır. Boğa burcu insanı cana yakın, merhametli ve sempatik yapısıyla biliniyor. Toprak grubunda yer alan Boğa burçları, sakin ve güvenilir yapılarıyla da tanınıyor. Keskin düzeyde maddi zekaya sahip olan bu insanlar hem gündelik yaşamda hem de iş hayatında bu özellikleri ile kolaylık sağlıyorlar. Boğa burcu kadını sakin ve sabırlıdır. Telaştan, aceleden hiç hoşlanmaz, hazırlanması, giyinmesi, süslenmesi için zamana ihtiyacı vardır. Kadını eşsiz lezzetler denemekten, yemekten hoşlanır ve keyif alır; lüks, konfor ve maddiyat etkileyicidir. Ayrıca hedef odaklı, azimli ve inatçıdır.  Boğa burçları arkadaşlarına ve aşkına çok sadıktır. Bu nedenle güven konusu onlar için önemlidir. Eğer karşısındaki ona yalan söylerse ve ortaya çıkarsa asla affetmez. Onların yalan radarları hep açıktır.  Boğa burcu sevdiklerinin en başında yemek yemek geliyor. Boğa burcunun en sevdiği şeylerden biri yeme içme faaliyetleri. Sanata oldukça meraklı olan boğa burçları birden fazla sanat dalına ilgi duyabilir. Boğa burcu sevdikleri listesinde bir başka madde ise romantizm! Boğa burcunun en iyi anlaştığı burçlar Yengeç, Oğlak ve Balık'tır. Yengeç Boğa uyumu: Boğa ve Yengeç burçları güvende olma ihtiyacını paylaşırlar; her ikisi de rahatına düşkündür ve ciddi bir ilişki kurmaya isteklidirler. Boğa Burcu Erkeği Hangi Burçla Evlenmeli? Boğa burcu erkeğinin evlenmek için en uygun burçlar Oğlak, Başak, Yengeç ve Balık burçlarıdır. Oğlak burcu, Boğa burcu erkeği için en uygun eşler arasında yer alır.  Boğa burcu olumlu yönleri arasında duygusal olmak gelir. Bu özellik ilk etapta olumsuz görünebilir ancak ilişkilerinde oldukça güçlü bağlar kurmasını sağlayabilir. Boğa burcu sabit bir burç olsa da duyguları sonuna kadar hissetmekten ve duygularını göstermekten hiç korkmaz. Yeşil rengin enerjisi boğa burcuna şans ve uğur getirmektedir. Kıyafetlerinizde ve aksesuarlarınızda yeşil renk veya yakın tonlar tercih ederek kendinize şans ve uğur getirebilirsiniz. Dikkat çekmeyi ve zirvede olmayı seven ikizler burcu, ışıldayan ve parıldayan tonları; sarı ve turuncu renkleri yansıtmaktadır";
			   astrolojigündemtextcontent.textContent+="Yapılan bir araştırmada ''Başak, Balık, Boğa ve Oğlak'' burcunun en temiz burçlar olduğu belirlendi. Yine mükemmeliyetçi, çalışkan ve azimli Akrep'leri sıralamamızda ikinciliğe koyabiliriz. Boğa burcunun en iyi anlaştığı burçların bir diğeri ise Oğlak'lardır. Zira Oğlak'lar bu sakin, dingin enerjiyi severler, toprak burcu olmanın getirdiği tensellikten, güzellikten de hoşlanırlar. Boğa kadını yatakta kontrolün partnerinde olmasını sever. Size olan ilgisini sözlerinden çok davranışlarıyla göstermeyi tercih eder. Her zaman çok şehvetli olmayabilirler ancak partnerlerinin cinsel arzularına sürekli olarak duyarlıdır. Onlar için en iyi burç oğlak burcudur. Oğlak burcunun sakin yapısıyla harika bir uyum yakalayacaklardır. Terazi ve Aslan burçlarıyla da iyi anlaşırlar. İkizler, Yay ve Kova'yla ise asla anlaşamazlar. Boğa burcu kadınları, kıyafet tercihlerinde doğallığı ve kaliteyi ön planda tutar. Boğa burcu giyim tarzı, genellikle zarif ve sade detaylarla zenginleştirilmiş olup, doğal tonlarla bezelidir. Yeşilin tüm tonları, deniz mavisi, toprak ve pastel renkler, bu burcun kadınları için ideal renk seçimleridir. Boğa: Bir hata yaptıklarında o insanın yüzüne bakmaya çekinirler. Hem zaten olan olmuştur. O yüzden Boğa'ların özür dilemedikleri için kaybettiği çok arkadaşları vardır...";
            
            }
			if (this.id === "aslan") {
                astrolojigündemtextcontent.textContent="Aslan burcu, 23 Temmuz ile 22 Ağustos arasında doğan kişileri temsil eder. Onları tanımlayan özellikler arasında özgüven, cömertlik, liderlik ve yaratıcılık vardır. Aslanlar, genellikle etraflarında göz önünde olmaktan hoşlanır ve doğuştan gelen bir sahne ışıkları varmış gibi davranırlar. Aslan burçları kendisi gibi ateş grubundan olan Yay ve Koç ile iyi anlaşırlar. Ancak gözlem ve haritalardaki durumlarına bakıldığında, Aslan burcu sevdikleri eğlence, enerjik olmak ve spor yapmak vardır. Bazı aslan burçları yaratıcılıkları dolayısı ile sanatsal faaliyetlere ilgi gösterebilir. Sanatsal bir hobi edinmek aslan burcu sevdikleri arasında yer alır. Aslan burcu sevdikleri arasında gücünü gösterebilmek en önemlisidir.  Aslan burcu kadınlarının genellikle orta boyludur. Aslan burcu kadını, birden fazla olumlu özelliğe sahiptir. Bunlar arasında; girişimci ruhlu olması, heyecanlı bir yapısının bulunması ve yaratıcı olması ön plandadır. Tutkulu, iyimser ve sadık olan aslan burcu kadınları, karşındakine çok değer verir.  Yaptığı bir işi, ortaya koyduğu bir çalışmayı takdir etmemek, yeterince övmemek, kısacası takdir görememek onun moralini çok bozacaktır.  Aslan kadını lükse düşkündür; parlak renkli, mücevherli, gösterişli giysileri sever. Ne kadar çok mücevher varsa o kadar iyidir; ister yapay elmas olsun ister Swarovski kristali.  Aslan burcunun karşıt burcu Kova'dır. Ayrıca Boğa ve Akrep burcu ile de anlaşmakta zorlanabilir. Aslan burcu erkeği; kıskanç olmasına karşın kendine hakim olan burçlar arasında yer almaktadır. Kıskanmayı, kıskanılmayı sever. Karşı cins tarafından kıskanılmak erkeğin egosunu yükseltir.  8 kendisi gibi rekabetçi olan koç burcuyla yaya göre daha az anlaşması olacaktır. Aslan burcunun anlaşmakta zorlanacağı burçlar su grubu burçlarıdır. En zeki burçlar listesinde Aslan burcu da yer alır. Aslan burçları hem zekaları hem de duruşlarıyla girdikleri her ortamda hemen fark edilir. Çevresindeki tüm fırsatları tespit etme yeteneğine sahiptir. Aslan burçları zekaları sayesinde başkalarının görmediği detayları görür.  İyi zamanlarında etkileyici, güler yüzlü, başkalarına yardım etmeyi seven ve bunu kendine görev sayan Aslan'lar sevimli ve iyimser kişilerdir. Ona karşı hatalı davransanız bile, size olgun bir şekilde tepki verir. Fakat; Sabrı taştıktan sonra, dürüst ve mert, gerektiğinde sert bir şekilde tavır gösterir. "; 
                astrolojigündemtextcontent.textContent+="Aslan burcu olan bireyler zekilikleri ile güçlerine güç katan kişilerdir. Önderlik edebilme yeteneğine sahip oldukları için güçlü ve de başarılı olurlar. Aslan burçları iyi yöneticiler olup her zaman odak noktası olmayı da sevdikleri nedeni ile bu noktaya gelebilmeleri adına çok çalışırlar.  Aslan desteği (gurur yapıp istemese bile) Terazi ve İkizler'den alır. Başak desteği Akrep ve Yengeç'ten alır.  - Hem cinsellikte hem de aşk konusunda kontrolü ele alacak bir partner isterler. - Zekası ile bir yere gelmiş olan akıllı erkekler ilgilerini çeker. - Komik ve espri anlayışı yüksek olan erkeklerden hoşlanırlar. Bu gibi kriterleri ön plana çıkarmak suretiyle aslan burcu kadınını etkilemek mümkün.  Aslan burcu takıntıları: Konuşurken saçıyla oynamadan duramaz. Her çantasının içinde mutlaka ayna ve de cımbız vardır. Altın kolye, altın saat, altın yüzük takmayı çok sever. Marka takıntısı olan burçlardır.  Aslanlar şaşırtıcı derecede detaylı temizlik yapar. Temizlik yaptıkça rahatlarlar. Temizliğin yanı sıra evlerini dekore etmeyi çok severler. Evlerinde yaptıkları değişiklikler onlara huzur verir.  Aslan: Aslan burcu anlık duygulara çabuk kapılan Zodyak'ın her şeye en çabuk sinirlenen burcudur. En çok sinirlendiği şey de gururunun incinmesidir.  Yaratıcılığı ve etkileyiciliği ile bilinen aslan burcu oldukça sahiplenici ve kıskanç karaktere sahiptir. Bu burcun en büyük korkusu ise çevresinde hiç kimsenin kalmamasıdır. Bir duruma karşı gurur yapmaktan da oldukça korkar ama bunu belli etmez ve yapması gereken gurursa bunu yapar.  Aslan burcu insanları, lüks ve gösterişli yaşam tarzını severler. Bu nedenle, para kazanmak ve harcamak konusunda oldukça tutkuludurlar. Aslanlar, maddi varlıklarını korumak için de çaba gösterirler. Bonkör, lüksü seven, gösterişten hoşlanan Aslan için para biriktirmek neredeyse imkansız gibidir.  Olumsuz özelliklerin: Kendini beğenen, eleştiriye gelemeyen, savurgan, güce düşkün, inatçı, asabi… ";
            }
			if (this.id === "basak") {
                
                astrolojigündemtextcontent.textContent="Başak'lar çalışkan ve pratik insanlar olup, yaşamlarındaki en önemli konu İş' tir. Güvendikleri kişilere yardım etmeyi sevmelerine rağmen, inanmadıkları ve tembel olduklarını bildikleri kişilere karşı soğuk davranırlar. Yaşamları boyunca dinlenmeden çalışırlar. Onların dinlenme biçimi bile başkalarına yorucu gelebilir. Başak (Lat.: Virgo), bir burç. Başlangıç tarihi 23 Ağustos, bitiş tarihi 23 Eylül'dür.  Başak burcu oldukça yardımsever bir burçtur bu yüzden özellikle sevdiği insanların daha sonra da yardımına ihtiyacı olan insanların her zaman yardımına koşacaktır. Başak burcu olumlu yönleri arasında insanların hayatına düzen getirebilmesi de yer alır. Başak burcu bunun için büyük çaba sarf eder.  Başak burcu sevdikleri zekasını ispatlayabileceği işler olarak genellenebilir. Entelektüel düşünmeyi seven başak burcu sevdikleri arasında analitik konulara da yer verir. İş hayatı önceliğinde olan başak burcu sevdikleri şeyler olarak iş hayatında başarı en başlarda yer alır. Başak burcu sevmedikleri arasında en yaygın olarak bilinen belki de dağınıklıktır. Bu dağınıklık sadece ev düzenini değil, tüm hayatı genelleyebilecek bir düzen gereksinimi sonucunda başak burçlarının mesafeli yaklaştığı bir yaşam biçimidir. Başak burcu sevmedikleri arasında bu neden ile disiplinsizlikte yer alır.  Başak: Başak burcu anlaşılması en zor olan burçlardandır. Sinirlenince içine kapanır ve bir daha dışarı açılması çok uzun bir zaman alabilir. En çok sinirlendiği şeyler arasında eşyalarına, kendisine, hayatına dışarıdan müdahale edilmesi gelir.  Başak burcunun en iyi anlaştığı burçlardan bazıları genellikle boğa, oğlak ve yengeç burçları olarak kabul edilir. Bu burçlar genellikle Başak burcuyla uyumlu olabilirler, ancak ilişkilerde birçok faktör etkili olduğundan, burçlar arası ilişkiler kişisel deneyimlere ve ilişki dinamiklerine de bağlı olabilir. Başak burcunun en iyi romantik partnerleri Boğa, Yengeç ve Oğlak'tır. Boğa – Başak uyumu: Boğa da Başak da içe dönük olmaya meyilli burçlardır ve sık sık dışarı çıkıp sosyalleşmek yerine evlerine kapanmayı severler. Başak'ın detaycılığı Boğa'nın güvenlik ihtiyacını karşılar. Duygusal anlamda çok güçlü olduğunu söylemeyiz. Aklı başında havası, eleştirel eğilimleri ile kendi konusunda uzman gözükür. Başak ne Yengeç gibi aşırı koruyucu ve hassas, ne de Terazi gibi fazla havada ve hafiftir. İlişkilerinde netlik, mükemmellik ve dürüstlük arayacaktır. ";
				astrolojigündemtextcontent.textContent+="Başak burcu kadını kıskançtır. Özellikle sevdiği insana karşı onu sahiplenme duygusu ile birlikte aşırı kıskanç tavırlar sergileyebilir. Sevdiğini paylaşmak istememesine bağlı kıskançlıkları da görülmektedir. BAŞAK: Çevresinde olup biten her şeyi eleştiren yargılayan ve her şeyden düzen bekleyen başak burcunun korkuları arasında hasta olmak ilk sırada yer alıyor. Kişiliği gibi sade bir yaşamı olan Başak, başkalarına hizmet etmeyi sevdiği gibi, finansal anlamda yardım etmekten de sakınmaz.Sağlığına ve temizliğe çok önem veren Başak ın en büyük harcamaları bu alandadır. Son derece titiz olan başak burcu insanları, özensiz hiçbir şeye tahammül edemiyorlar. Sık bulundukları her ortamın hijyenine ekstra özen göstermelerinin yanı sıra, anlık bulundukları bir yerin bile temiz olması konusunda hassas davranıyorlar.  Eleştirilmekten hiç hazzetmeyen Başak'ları, hele de herkesin içinde sakın eleştirmeyin. Haklı dahi olsanız bu durumu içine sindiremeyecektir. Ayrıca onun beklentilerini karşılarken, ya da onunla çalışıyorsanız, gelişi güzel iş yapmak, detayları önemsememek de onun sinirini bozacaktır.";
				astrolojigündemtextcontent.textContent +=" Başak İlk tepkisi kendine duvar örmek, ardına saklanıp etrafından şikayetçi olmaktır. Böyle anlarda eğer rahatsız ederseniz zehirli eleştiri oklarını yüreğinizin tam ortasına nişan alabilir. Kimi Başaklar da gerilim anında çekmeceleri, dolapları boşaltır, işe yaramayan ıvır zıvırları kaldırıp atabilirler.  Başak burcu erkeğinin anlaştığı burçlar; oğlak, yengeç ve boğa burcudur. Başak burcu erkeklerinin ayrıntıya dikkat etmeleri, oğlak burcu bireyleri adına çok önemlidir. Başak burcu erkekleri, oğlak burcu bireylerini üzmez. Bu sebepten ötürü başak burcu erkekleri, oğlak burcu bireyleri ile çok iyi anlaşır. Başaklar, Yay, Koç ve Aslan burçları ile çok fazla anlaşamaz. Mantık ve analitik zekâlarıyla ön plana çıkan Başak burçların; Yay, Koç ve Aslan burçlarıyla pek iyi anlaştığı söylenemez. Çünkü bu burçlar düşünmeden ve ana yönelik bir yaşama sahip oldukları için başak burçlarıyla zıt düşmektedirler. Çevresinde olup biten her şeyi eleştiren, yargılayan ve her şeyden düzen bekleyen Başak burcunun korkuları arasında hasta olmak ilk sırada yer alıyor. Sonrasında başkalarının onun hayatlarını eleştirmesinden kaygı duyabilirler.";
            }
			if (this.id === "ikizler") {
               astrolojigündemtextcontent.textContent=" İkizler Gezmeyi, seyahati sever, hareketli, değişken bir hayatı tercih eder. Aşktan çabuk sıkılabilir, sadakat konusunda çok beklenti içinde olmamak gerekir, zira sürekli değişim arar hayatında. Zorlu durumlar karşısında pratik çözümleriyle yol göstericidir. Tarzı: En son trendlere, yeniliklere meraklıdır. kizler (Latince: Gemini), 21 Mayıs ile 21 Haziran arasında doğanların İkizler takımyıldızının etkisinde olduğuna inanılan burç. Tatlı dilli oluşlarıyla kolayca dost edinebilen ikizler burcu insanları, ortamlarda oldukça popülerdir. Her yaşta, her dönemde öğrenmeye aç ve istekli oluşları, onları farklı kılar. Duygusallık onlar için çoğu zaman ikinci plandadır ve mantıklarıyla hareket ederler. En kötü yanları ise bir konu hakkında kararsız kalmalarıdır. Hava elementine sahip Zodyak'taki ilk burçtur. İkizler: İkizler burcu hayattan zevk almayı bilen olumsuz duyguların geçiciliğini özümseyen insanlardır. Lakin şaş kaza onları yapmadıkları bir şeyle suçlarsanız eğer o zaman İkizler öfkesiyle karşılaşırsınız. Yalnız dikkat, diğer burçların aksine İkizler burcu insanı öyle öfkeden kudurup ortalığı yıkıp dökmez. İkizler burcu insanlarının olumsuz yönlerini değişken, huzursuz, kurnaz, yersiz bir biçimde meraklı, kararsız ikiyüzlü, sinirlerini kontrol edemeyen, dedikoducu, yüzeysel, diken üzerinde yaşayan olarak sıralayabiliriz. İkizler burcu, enerjik ve çok yönlü yapısıyla öne çıkar. Bir ortama girdiğinde sürekli gülümsemesi, mutlu tavırları ve canayakınlığıyla göze çarpan bu kişiler, hareketli yaşamayı sever. Ancak ikizler burcu özellikleri arasında yer alan kararsızlık ve değişkenlik, zaman zaman maymun iştahlılığa dönüşebilir. Zekalarını her an yeni bilgiler öğrenmeye adamış olan ikizler burcu, her konu hakkında her şeyi derinlemesine öğrenmek istediğinden sürekli bir araştırma içerisindedir. Farkındalığı çok yüksek olan ikizler aynı zamanda iletişim kurma konusundaki yetenekleriyle de zekalarını ortaya koyarlar. Yönetici gezegeni Merkür olan İkizler burçlarının hazırcevap, ilgi uyandıran ve muzip bir yönleri vardır. Konuşmaya bayılırlar. İkizler için aşk kalpten çok beyinden geçen bir olaydır. Dikkat çekmeyi ve zirvede olmayı seven ikizler burcu, ışıldayan ve parıldayan tonları; sarı ve turuncu renkleri yansıtmaktadır. ";
			   astrolojigündemtextcontent.textContent+=" İKİZLER: İkizler burcu deyince akla ilk gelen pratik zeka ve konuşkanlık. Girdiği her ortamda kolayca varlığını hissettiren ikizlerin en büyük korkuları arasında konuşma yeteneğini ve ellerini kaybetmek yer alıyor.  Bilgi verme ve bilgi alma işlevini sürdürememek, ellerini ve konuşma yeteneğini kaybetme korkusu. İkizler burcu deyince akla ilk gelen pratik zekâ ve konuşkanlıktır.  Gün içerisinde sürekli bir aktivite içerisinde olan ikizler burcunun uyku aklına bile gelmez. Rüyalarında genellikle bir şeyden kaçmaya eğilimleri vardır. İkizler burcu için 6-7 saatlik uyku idealdir. Yengeç burcunda doğan insanlar uykuya çok düşkünlerdir.  İkizler altında doğan insanlar tipik olarak şaşırtıcı olmayan rahat ilişkileri tercih ediyorlar. Yaklaşık yüzde 31'i aldatıyor veya aldatmaya yaklaşıyor. Süper sosyal bir hava burcu olarak bilinen İkizler, iki kişi için yeterli ilgi ve hobilere sahip.  İkizler burçları çapkın bir karaktere sahip dersek yanılmış olmayız. Bu yüzden ikizler burcu aşk hayatında maymun iştahlıdır. Bir ikizler burcu ile birlikteyken problem yaşayacaksanız sorun büyük ihtimalle bu özelliğinden kaynaklanacaktır. İkizler burcu aşk hayatında eğlencelidir. Özgürlüğüne düşkün ikizler burcunun sevdikleri arasında keşfetmek yer alıyor. Meraklı karakteri, keşfetme isteği zaman zaman başına dert olsa da ikizler burcu keşfetmeye asla ara vermez. Öğrenme süreci sonsuza dek devam eder. Hava grubundan olmaları nedeniyle onlar her duruma kolayca uyum sağlama özelliğine sahipler. Ancak biraz sabırsız olduklarını da söylememiz gerekir. Birine karşı sabırları tükendiğinde, ikinci bir şansları kalmıyor. İkizler burcu sevmedikleri söz konusu olduğunda baskı ve sahiplenilmek de ilk sıralarda sayılabilir. Özellikle bir ilişkide ikizler burcunu soğutan ve kaçıran şeylerin başında baskı ve sahiplenmek gelir. Çünkü ikizler burçları özgürlüğüne düşkün bir karaktere sahiptir. "; 
            
            }
			if (this.id === "yay") {
               astrolojigündemtextcontent.textContent="Yay erkil, maceraperest ve risk almaktan, hayata açık durmaktan keyif alan bir burçtur. Burcun sembolünde ileri doğru atılan ok, bu burcun geçmişi değil, geleceğe yönelik olduğunu gösterir. Pozitif ve hayatı olduğu gibi kabul eden tutumları ile Yay'lar keyif veren, geniş görüşlü ve eğlendirici partnerlerdir.Yay (Latince: Sagittarius), bir burç. Başlangıç tarihi 22 Kasım, bitiş tarihi 22 Aralık'tır. Simgesi yarı at, yarı insan olan bir okçu figürüdür. Elementi ateş, niteliği değişkendir.  Yay kadını her ne kadar fiziksel olarak aktif olsa da ruhunda güçlü sezgilere sahiptir. Dürüstlük, sadakat ve bağlılık onun için önemlidir. Yay kadını ilişkisinde fazla derinlik ve romantizmden hoşlanmayabilir. Romantik yaklaşımlar yerine akılcı ve pragmatik yolları etkileyici bulur.  Dost ve arkadaş canlısı, sosyal, sempatik, girişken Yay burcu erkeği bu özellikleriyle ele avuca sığmaz. Üstelik aile yaşamından ziyade gezip tozmayı, eğlenmeyi, arkadaşlarıyla zaman geçirmeyi sever. Aile konularında son derece fedakârdır. Zira ailesi söz konusu olduğunda Yay erkeğinin gözü hiçbir şey görmeyebilir.  Yay burcu oldukça meraklı bir burçtur. Bu nedenle keşfetmek ve araştırmak yay burcu sevdikleri arasında yer alır. Yay burcunun bu yapısı onu sürekli yeni maceralara sürükler. Yay burcu bunları yaparken özgür olmak isteyecektir.  Kendini yaşam boyu öğrenmeye adamış ve doğuştan idealist olan yay burçları, zekası ile diğer burçların arasından kolayca sıyrılabilmektedir. Her insanın kapasitesini anlamada ve tüm sorunları iyilikle çözmede yetkin kişilerdir.  Yay burcu sevmedikleri arasında monotonluk yer alır. Yay burcu sürekli bir yenilik ve heyecan peşindedir. Onu rutine binmiş ilişki ve işler oldukça sıkacaktır. Yay burcu sabit bir hayat sürmekten hiç hoşlanmaz.  Yay burcu bireyler, cinselliği keşfetmekten hoşlanır ve maceralı deneyimlere açıktırlar. Jüpiter tarafından yönetilen bir burç olan Yay, maceracı ve özgür ruhlu doğasıyla bilinir. Hem hayatta hem de yatak odasında yeni şeyler deneyimlemek için güçlü arzuları vardır. Yay burçları açık fikirli ve denemeye isteklidir.  Oldukça maceracı bir yapıya sahip olan yay burcu aşk hayatında da bu tutkusunu sürdürür. Yay burcu aşk hayatında partneri ile sürekli gezmek ve yeni yerler keşfetmek ister. Küçük seyahatler bile onu heyecanlandırmaya yetecektir. Yay burcu aşk hayatında, uzun süreli bir ilişki içinde bile olsa, heyecan peşindedir. ";
               astrolojigündemtextcontent.textContent+="Yay kadınları genellikle seks sırasında üstte olmak isterler. Cinselliğe oldukça fazla düşkündürler ve biraz çapkındırlar. Sekste sıradanlıktan ve uzun süren sevişmelerden hoşlanmıyorlar. Yay burcu erkeği çapkın olarak nitelendirilir. Bunun sebebi özgür ruhu olarak gösterilebilir çünkü yay burcu erkeği bir ilişkide bağlanma problemi yaşayabilir. Yay burcu erkeği hareketli yapısı sayesinde spora oldukça meyillidir.  Aslında şans ve zenginlik gezegeni Jüpiter tarafından yönetilen Yay burcu insanları, hep maddi sınırlarını aşmanın peşindedir.Her şeyi büyük boyutlarda düşünen Yay burcu, büyük yatırımlar yapmayı, geniş ölçekli meblağlarla oynamayı sever.Dolayısıyla riskleri de büyür.Tehlike son aşamasına gelip, kapıya dayanıncaya ...  Yay burcunun en anlaşamadığı burç ateşin üzerine toprak ağırlığıyla çökebilen Oğlak olabilir. Üstelik Oğlak'lar Yay'ın aksine sınırlardan ve kurallardan hoşlanır, her şeyi planla, programla yürütmek arzusundadır, aşırılıklardan, hele de çılgınlıklardan hiç hazzetmez.  Fikir alışverişinde bulunabileceği ve kendisini anlayabilen kişileri sever. - Macera yaşamayı seven kadınları tercih eder. - Kendi hareketli dünyasına uyum sağlayabilecek olan kadınları sever. - Seyahat etmeyi seven kadınlar, yay burcu erkeklerin oldukça dikkatini çeker.  Özgür ruhlu Yay erkekleri yatak odasında değişiklikleri severler. Hatta bazen mekan yatak odası dahi olmayabilir. Cinsellikte açık görüşlü olan Yay erkekleri, partnerleriyle yeni şeyler denemeyi severler. Müfettişlik, dedektiflik, casusluk, terapistlik, operatör doktorluk, yarışçılık, askerlik, pilotluk, mühendislik, hukuk, psikoloji, politika, görsel sanatlar, plastik sanat, mağara kaşifliği… Yay burcu, Jüpiter yönetimindedir ve gezmeye, dolaşmaya ve temiz havaya, felsefe ve düşünceye dair işlerde ustadır. ";
            }
			if (this.id === "kova") {
                astrolojigündemtextcontent.textContent=" Kova burcu erkeği büyüleyici ve çoğu zaman kafa karıştırıcı bir insan olabilir. Kova burcu erkeği pek çok insanın merak ettiği türden bir adamdır. Ancak çok az insan gerçekten onu anlar. Bu durumun çoğu, bu adamların genellikle ya kendi zamanlarının ilerisinde olarak algılanmasından ya da çoğu insanın onları duymaya hazır olmamasından kaynaklanmaktadır. Kova burcu erkekleri radikal ve yeni fikirlere sahiptirler. Bu burcun erkekleri çoğunlukla toplumun genelinden uzaklaştıklarını hisseder. Gelecek ile ilgili uzak görüşlerini paylaşabilecekleri benzer düşünen birkaç kişi ile gelişirler. Kova Burcu Yükseleni Nasıl Hesaplanır? Bir burcun yükselen burcunu hesaplamak mümkündür. Bir kişinin yükselen burcunun hesaplanabilmesi için kesinlikle doğduğu saat ve dakikanın bilinmesi gerekmektedir. Kişi doğum tarihiyle beraber doğum saatini de belirterek yükselen burcunu öğrenebilir. Yükselen burçlar her dakika değişiklik gösterebilmektedir. Bu nedenle doğru saatin bilinmesi önemlidir. Yükselen Burç Ne İşe Yarar? Yükselen burçlar kişilerin fiziksel görünüşlerini ve kendilerini nasıl gördüklerini temsil eden burçlardır. Yaklaşık iki saat aralıklarla değişen yükselen burçlar kişinin asıl burcu kadar önemlidir. Yükselen burç ile asıl burcun bazı özellikleri dengelenebilmektedir. Kişinin bazı özellikleri ön plana çıkarken bazıları da geri planda kalabilmektedir. Aynı burca sahip kişilerin farklı özellikleri taşıması yükselen burçların etkisinden dolayıdır. 	Kova Burcu Alçalanı Nedir?Alçalan burçlar kişinin evlilik hayatı ve daha çok ikili ilişkilerini temsil eden burçlardır. Çatışan özellikler ve bu özellikleri farklı kişilerde aramak alçalan burcun etkisidir. Alçalan burç hesaplanırken öncelikle yükselen burca bakılır. Yani alçalan burç hesaplanırken de doğum günü ve saati bilinmelidir. Doğum haritası aracılığıyla da alçalan burç hesaplanabilir.";
				astrolojigündemtextcontent.textContent+="Kova burcu erkeklerinin nadiren geleneksel, sıkıcı masa başı işleri vardır. Çoğu zaman kendi programlarını oluşturmayı tercih ederler ve kurumsal yapıları veya hayal güçlerinin sınırlarını zorlamalarına izin vermeyen birçok kuralın önüne geçerler. Fikir ve yaratıcılık alanı, bir kova burcu erkeğinin gerçekten gelişeceği yerdir. Bunlar insanlığa yardım etmek için insanları bir araya getirmek, asırlık sorunları çözmeye çalışmak için zihnini ve müthiş zekasını kullanan bu burç için önemlidir. Kova burcu erkeği ütopya fikrinden motive olur ve tüm insanlar için daha iyi bir dünya yaratmak ister. Ancak bazen büyük resimde kendini kaybeder. İdeal olarak bir kova burcu erkeği deha özelliklerini hayır kurumlarına yardım etmeye veya yaratıcı hareketlerin bir parçası olmaya koyacaktır. Kova burçları yardımsever, güler yüzlü ve sevgi dolu insanlardır. İnsanlar arasında ayrım yapmazlar herkesin aynı yaşam standartlarına sahip olmalarını isterler. İyi niyetli kovalar bazen inatçı davranırlar. Özgür ruhlarından ötürü aile yaşamında zorlanırlar. Entelektüel deneyimler, farklı cinsel deneyimler, farklı kültürler ve seyahatler bir Kova burcunun aşk hayatında da olmazsa olmazdır. Özgürlüğüyle bilinen Kova burcu aşk hayatında özgürlük de olmazsa olmazdır. Bir Kova burcu kıskanmaz ve asla kıskançlığa gelemez. Geleneksel ilişki tiplerinde uzun süre dayanamaz.  Adalet, hak ve özgürlükler Kova için önemlidir. Ayrıca onun özgürlüğünü, bireyselliğini kısıtlamaya kalkar, ona kurallar dikte eder, zorla işler yüklerseniz, onu darmadağın etmeniz kaçınılmaz bir sondur ve tabiiki bu durumu asla kabul etmeyecektir. Şubat burçları içinde yer alan kova burcu insanları, hareketli ve hızlı yaşamlarıyla tanınır. Onların hızına yetişmek hiç kolay değildir. Tükenmeyen enerjileriyle hep koştururlar. Eğlenceli yapıya sahip olan kovalar daha çok masa tenisi, tenis, futbol, basketbol ve voleybol gibi hareketli sporları severler. Astrolojide, burçların birbirleriyle uyumu karmaşık bir konsepttir ve genellemeler kişisel tercihlere, yaşam deneyimlerine ve diğer astrolojik faktörlere göre değişebilir. Ancak, Kova burcu genellikle İkizler ve Terazi burçlarıyla daha iyi anlaşma eğilimindedir.";
				
               
                
            }
			if (this.id === "terazi") {
               astrolojigündemtextcontent.textContent=" Teraziler Bu nedenle bir ilişki içerisinde olmayı da severler. Teraziler mutlu oldukları ve değer verdikleri bir insanla ilişki yaşadığında kıskanç olma eğilimindedir. Ancak her zaman daha iyisini hedefleyen Teraziler, daha iyi gözüken bir ilişki gördüklerinde kıskanma eğilimde olurlar. Mavi tonlarının haricinde pembe renk ve pastel tonlar da terazi burçlarının uğurlu renkleri arasında yer almaktadır. Kıyafetlerinizde, aksesuarlarınızda ve dekorasyon ürünlerinizde; mavi, pembe ve pastel tonlara yer verebilirsiniz. Terazi burcu erkeğinin anlaştığı burçlar; kova, ikizler ve aslan burcu olarak sıralanabilir. Terazi burcunun erkekleri sosyalleşmeyi, insan arasına girmeyi çok sever. Bu yüzden her zaman kendileri gibi enerjik, hareketli olan ikizler burcu ile çok iyi anlaşmaktadırlar. Terazi burcu sevmediklerinden bir tanesi riskli işler arasında yer almaktır. Riskli işler terazi burcunun huzurunu kaçıracağından bu tür işlerin içinde bulunmaktan hoşlanmaz. Bireysel olarak hareket eden insanlar terazi burcu sevmedikleri arasında yer alır. Terazi burcu doğaya oldukça meraklıdır. Doğa yürüyüşleri, doğa ile ilgili olan her şey terazi burcu sevdikleri arasına girer. Bunun yanı sıra terazi burcu sevdikleri arasında lüks bir yaşam da yer alır. Lüks bir hayat sürmeyi seven terazi burcu rahatına ve huzuruna düşkündür. Terazi burcu erkeği ilişkiler konusunda adeta bir uzman gibidir. Dengeyi, eşitliği gözetir, kendisi kadar karşısındakini de düşünür. Kibardır, naziktir, zariftir. Eşinde, birlikteliğinde en doğru ve en uygun kişinin arayışındadır ve o kişinin de kendinden emin bir lider olmasını bekler. Terazi burcunun en iyi anlaştığı burçları, Kova, İkizler ve Yay olarak sıralayabiliriz. Kova – Terazi uyumu: Kova da Terazi de sosyalleşmeyi, konuşmayı ve insan içinde olmayı severler. Bir çift olarak sosyal hayatları oldukça zengin ve doyurucu olacaktır. Ayrıca birbirleriyle fikirlerini paylaşmaktan da hoşlanırlar. Terazi Burcu Özellikleri 2024 - Terazi Burcunun Kısaca Genel Terazi burçları genel olarak akıllı, mantıklı ve aşk dolu özelliklere sahiplerdir. Terazi burçları hayallerine ulaşmak için çok çalışırlar. Terazi burçları genel olarak uzlaşı yanlısı ve kibar özellikleri ile bilinirler. İlişkilerinde adil olan terazi burçları mantıkları ile birlikte hareket ederler.";
			   astrolojigündemtextcontent.textContent+="Renk olarak genellikle pastel tonları tercih eder. Bluz ve gömleklerinde fırfır, kurdele, fular kullanmayı çok sever. Derin dekoltelerden pek hoşlanmazlar. Moda konusunda uzman olan Terazi burçları, sezonun trendlerini yakından takip ederek en yeni parçaları dolabına eklemeyi sever. Terazi burcu mutfakta tam takım yemek yapmaktan sıkılabilir. Ama sevdiği tatlıları yapmaya bayılır. Partneri/eşi için özenle tatlı, meyve tabakları hazırlamak onun için zevktir. Terazi burcunu en iyi yansıtan hayvan kurttur. Tıpkı kurtlar gibi Teraziler de seçeneklerini değerlendirme konusunda son derece dikkatlidirler. Dengeli yaratıklardır ve ekip çalışmasına da son derece yatkınlık gösterirler. Yalnız hareket etmektense sürü halinde gezmeyi severler.  Rutinleşmiş bir ilişki Terazi burçları için çekilmez bir işkence gibidir. Bu durum nedeniyle ilişki çıkmaza girebilmektedir. İşte tam bu sebepten dolayı toprak burcu elementleriyle fazla iyi anlaşamazlar. Boğa, Oğlak ve Başak burçlarıyla iyi anlaşamayan Terazi burçları, kolay etkilendikleri için kolayca kanabilirler. Kararsız Terazi'lerin evlenme kararı alması kolay olmaz. İlişkinin zamanla oturduğunu hissettiklerinde rahatlayacak ve karar vermeleri kolaylaşacaktır. Kendilerini güvende hissetmezlerse ona aşkınızda dürüst olduğunuzu hissettirmeniz gerekebilir. İlişki durumları oldukça karmaşık olan Terazi burçları, partnerlerine sadık değillerdir.Kabalıktan hiç hoşlanmayan Terazi insanları, Estetik ve güzellik bakımından kendini geliştirmiş insanlardır. Zekilerdir. Teraziler, saf ve temiz kalpliliklerinin yanı sıra hem iyi bir konuşmacı hem de iyi bir dinleyicidirler. Terazi burcu olan kişiler genellikle uyumlu ve sevecen olurlar. Bunun yanı sıra dengeli ve doğru bir şekilde hareket ederler. Bunun yanı sıra terazi burçları en sinirli anlarda bile mutlu olmayı başarırlar. Bu burçtaki kişiler çalışmayı ve yeni şeyler öğrenmeyi de çok severler. Daha çok yüzeysel ilişkiler kurabilen Teraziler, karşılarından kötü bir hareket gördüklerinde onları buna pişman ederler. Akılları çoğunlukla havadadır.";
            }
        });
    }
}


const Hb2btn=()=>
	{
		Astronomediatvpo();
	}


	const Hb1btn=()=>
		{
			Hakkımızdapage();
		}
	
	


//Astronomediavideo
astronomediavideoadd.remove();
Astronomediavideo.remove();

let videosdizisi=Astronomediavideo.getElementsByTagName("a");



// Astronomedia video sayfasını açan fonksiyon
const Astronomediatvpo=()=>
	{
	
		container.innerHTML="";
                  
		 
      






		//

      /*                     container a sayfalar eklenen alan                  */

		//Videolar sayfasının olduğu container eklendi
		container.appendChild(Astronomediavideo);


		//App footer eklendi
		container.appendChild(Appfooter);


		//Tema butonu eklendi
		container.appendChild(theme);
	/*-------------------------------------------------------------------------------*/ 
        

        





    //---------------------------------------------Video thumbnail ekleme alanı--------------------------------------------------//
			 for(let x=0; x<videoc.length; x++)
				{
					if(videoc[x].id=="Dunyavideo1content")
						{
							videoc[x].style.backgroundImage="url('İmg/Dunya.png')";
						
							document.getElementById("tarihinfo1").textContent="Paylaşım tarihi "+gun;
							
						}
						if(videoc[x].id=="Meteorvideocontent")
							{
							videoc[x].style.backgroundImage="url('İmg/Meteor.png')";
				
							document.getElementById("tarihinfo2").textContent="Paylaşım tarihi "+gun;
							    

							}
							if(videoc[x].id=="Galaksivideocontent")
								{
								videoc[x].style.backgroundImage="url('İmg/Galaksi.png')";
							
								document.getElementById("tarihinfo3").textContent="Paylaşım tarihi "+gun;
									
	
								}
								if(videoc[x].id=="Marsvideocontent")
									{
                                    videoc[x].style.backgroundImage="url('İmg/Mars.png')";
									t.textContent="Paylaşım tarihi :"+gun;

									}
						
				}

 /*---------------------------------------------------------------------------------------------------------------------------------------------*/ 
 document.querySelector("#pagetitlee").textContent="Astronomedia video/Astronomedia"

		  //---------------------------------Açılan videoların içeriklerinin eklenme alanı------------------------------------------------//
           for(let i=0; i<videosdizisi.length; i++)
			{
				

                  const videoo=()=>
					{
						
						//Tüm videoları kontrol edip if ile ayrıştırarak açılan videolara ayrı ayrı içerikler ekleniyor
						if(videosdizisi[i].id=="Dunyavideo1")
							{

								       //Container içeriği sıfırlandı
						                container.textContent="";
										//container a Appfooter eklendi
										container.appendChild(Appfooter);
										//container a tema butonu ekledi
										container.appendChild(theme);
                                        //Container a video sayfası eklendi
										container.appendChild(astronomediavideoadd);
								        //container a video içeriği eklendi		
									    astronomediavideocontent.src="Video/Dunya1.mp4";
										// video başlığı eklendi
                                        Avtitle.textContent="Dunya videosu";                                      
										// Video içeriğnin bilgisi eklendi
										avinfo.textContent="Dunyanın uzaydan temsili görüntüleri";

										//videonun eklenme tarihi eklendi
										videoyth.textContent="Paylaşım tarihi :"+gun;

										
							}

							if(videosdizisi[i].id=="Meteorvideo")
								{
	
										   //Container içeriği sıfırlandı
											container.textContent="";
											//container a Appfooter eklendi
											container.appendChild(Appfooter);
											//container a tema butonu ekledi
											container.appendChild(theme);
											//Container a video sayfası eklendi
											container.appendChild(astronomediavideoadd);
											//container a video içeriği eklendi		
											astronomediavideocontent.src="Video/Meteor.mp4";
											// video başlığı eklendi
											Avtitle.textContent="Meteor videosu";                                      
											// Video içeriğnin bilgisi eklendi
											avinfo.textContent="Temsili meteor görüntüleri";
											//videonun eklenme tarihi eklendi
											videoyth.textContent="Paylaşım tarihi :"+gun;
	
											
								}
						
									if(videosdizisi[i].id=="Galaksivideo")
										{
			
												   //Container içeriği sıfırlandı
													container.textContent="";
													//container a Appfooter eklendi
													container.appendChild(Appfooter);
													//container a tema butonu ekledi
													container.appendChild(theme);
													//Container a video sayfası eklendi
													container.appendChild(astronomediavideoadd);
													//container a video içeriği eklendi		
													astronomediavideocontent.src="Video/Galaksi.mp4";
													// video başlığı eklendi
													Avtitle.textContent="Galaksi videosu";                                      
													// Video içeriğnin bilgisi eklendi
													avinfo.textContent="Galaksi temsili görüntüleri";
			
													//videonun eklenme tarihi eklendi
													videoyth.textContent="Paylaşım tarihi :"+gun;
			
													
										}
										if(videosdizisi[i].id=="Marsvideo")
											{
				
													   //Container içeriği sıfırlandı
														container.textContent="";
														//container a Appfooter eklendi
														container.appendChild(Appfooter);
														//container a tema butonu ekledi
														container.appendChild(theme);
														//Container a video sayfası eklendi
														container.appendChild(astronomediavideoadd);
														//container a video içeriği eklendi		
														astronomediavideocontent.src="Video/856359-hd_1920_1080_30fps.mp4";
														// video başlığı eklendi
														Avtitle.textContent="Mars videosu";                                      
														// Video içeriğnin bilgisi eklendi
														avinfo.textContent="Mars temsili görüntüleri";
														//videonun eklenme tarihi eklendi
				                                        
														
											}



					}

				videosdizisi[i].addEventListener("click", videoo);


				
			}
	}


//------------------------------------------------------------------------------------//











/*--------------------------------------------------Hakkımızda sayfası---------------------------------------------------*/
Hakkimizdasayfasi.remove();


const Hakkımızdapage=()=>
	{

		hakkımızdacontent.textContent="";
		container.textContent="";
		

		   /*container a Hakkımızda sayfasının içerikleri ekleniyor*/ 
		    container.appendChild(Hakkimizdasayfasi);
			//Appfooter eklendi 
			container.appendChild(Appfooter);
			//Tema butonu eklendi 
			container.appendChild(theme);
		
         /*---------------------------------------------------------*/





		     
          /*Yetkinliklerim içerik ekleme/güncelleme alanı*/ 
            const yetkinliklerimF=()=>
				{
					
					hakkımızdacontent.textContent="Frond-End developer olarak başladığım kariyer hedefimde aynı zamanda farklı teknolojileride öğrenmek için kendimi geliştiriyorum. C# ile Masaüstü uygulamalarıgeliştirdiğim ve daha sonra da Sql, Js, Html, Css ve Bootstrap öğrenerek ilerlediğim bu kariyer hedefimde Flutter dili öğrenerek aynı zamanda cross platform geliştirme imkanı olan yetenekleri de kazanmaya çalışıyorum de başlayarak mobil ve web developer olarak ilerliyorum ama akademik hayatımda hayatıma giren C#, Javascript, Sql, Html, Css, Bootstrap gibi dillere Kotlin de ekleyerek çok yönlü yazılım geliştirici olarak hayatıma devam etmek için hergün daha fazla çalışıyorum birçok teknoloji ve yazılım dillerini öğrenerek de kariyerimi geliştirmeye çalışıyorum. şimdilik yazılımcı adayı ve ağırlıklı web geliştiricilikte yetenekler kazanan bir öğrenciyim projelerim ve geliştirdiğim uygulamalari incelemek isterseniz eğer iletişim sayfasından github hesabıma ulaşabilirsiniz işbirliği teklifleri için iletişim sayfasına bakabilirsiniz";
				}

         /*----------------------------------------------------------------------------------------------*/





          /*Ben kimim sayfası içerik ekleme/güncelleme alanı*/ 

               const benkimimF=()=>
				{

                     hakkımızdacontent.textContent="Frond-end developer olarak başladığım kariyer hedefimde Back-End teknolojiler öğrenerek ilerlediğim Web ağırlıklı olarak başladığım ve Mobil, Masaüstü uygulamlar konusunda da kendimi geliştirdiğim bir yazılımcı adayı öğrenciyim ";



				}
		  /*----------------------------------------------------------------------------------------*/ 
			document.querySelector("#pagetitlee").textContent="Hakkımızda/Astronomedia"


         /*İletisim sayfası içerik ekleme/güncelleme alanı*/ 
                  const iletisimF=()=>
					{
						hakkımızdacontent.textContent="";
                        



						/*--------------------Github adresi içerikleri-------------------*/
						 let Githubadresi=document.createElement("a");
						 let Githubadresic=document.createElement("h1");
						 Githubadresic.textContent="Github adresine gitmek için github iconuna tıklayınız";
						 Githubadresic.style.position="absolute";
						 Githubadresic.style.left="6%";
						 Githubadresic.style.fontSize="1em";
						 Githubadresic.style.top="4.9em";
						 Githubadresi.href="https://github.com/Myrpojects";
                         let githubimg=document.createElement("img");
						 githubimg.style.width="10em";
						 githubimg.style.height="10em";
						 githubimg.src="İmg/Using GitHub To Improve Workflow.jpeg";
						 githubimg.style.borderRadius="100%";
						
						 Githubadresi.appendChild(githubimg);
                         Githubadresi.style.position="absolute";
						 Githubadresi.style.right="5%";
						Githubadresi.style.top="2%";
                          






                        hakkımızdacontent.appendChild(Githubadresic);
						hakkımızdacontent.appendChild(Githubadresi);
						
					}
         /*------------------------------------------------------------------------------------------*/ 
		  /*Hakkımızda sayfasının eventlistenerları*/
		  iletisimbutton.addEventListener("click", iletisimF);
		  benkimimbutton.addEventListener("click",benkimimF);
		  yetkinliklerbutton.addEventListener("click",yetkinliklerimF);

	}










/*-----------------------------------------------------------------------------------------------------------------------------*/




/*------------------------------------------------Astronomedia search sayfası ------------------------------------------------*/
Spacegalery.remove();
      const TGF=()=>
		{
			container.textContent="";
			container.appendChild(theme);
			container.appendChild(Appfooter);
			container.appendChild(Spacegalery);
  


			document.querySelector("#pagetitlee").textContent="Haberler/Astronomedia"
		
	                 const Gse=()=>
						{
							
							for(let x=0; x<Aimgdata.length; x++)
								{
									if(Aimgdata[x].photoname==Gsearch.value)
										{
											let i=0;
											let ısscliscb = document.createElement("a");
											let ussclisc = document.createElement("div");
											ısscliscb.classList.add("ısscliscb");
											ussclisc.classList.add("ussclisc");
											
											if(x==i)
												{
													ussclisc.style.backgroundImage = 'url(' + Aimgdata[x].url[i] + ')'; // İlk URL'yi kullanın
											        document.querySelector(".ussclist").appendChild(ussclisc);
											       i++;
												}


										}
								}
							
						}

                Gsearchbutton.addEventListener("click", Gse);
		}

//---------------------------------------------------------------------------------------------------------------------//








/*--------------------------------------------İsbirligi içeriği--------------------------------------------------------*/
isbirligicontainer.remove();

const isbirligiF=()=>
	{
		document.querySelector("#pagetitlee").textContent="İşbirliği/Astronomedia"

		container.textContent="";
		container.appendChild(theme);
		container.appendChild(Appfooter);
		container.appendChild(isbirligicontainer);
		container.appendChild(isbirligicontent);
		






		
	}

/*--------------------------------------------------------------------------------------------------------------------*/








//                                               GLobal Evenetlistenerlar                                             //
TG.addEventListener("click", TGF);
isbirligi.addEventListener("click",isbirligiF);
Hakkımızdabutton.addEventListener("click", Hakkımızdapage);
Astronomediavideobutton.addEventListener("click", Astronomediatvpo);
darkthemebutton.addEventListener("click", karanlıktema);
lightthemebutton.addEventListener("click", Aydınlıktema);
Homebutton.addEventListener("click", HomeBF);
Hb2.addEventListener("click", Hb2btn);
Hb1.addEventListener("click",Hb1btn);
/*Gsearchbutton.addEventListener("click", Asscontainer);*/
//--------------------------------------------------------------------------------------------------------------------//





