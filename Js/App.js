
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const b1p = document.querySelector(".b1p");
const f2text = document.querySelector(".f2text");





let currentLocation = 1;

let numOfPapers = 5;

let maxLocation = numOfPapers + 1;





const openBook = () => {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

const closeBook = (isAtBeginning) => {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}


/*! Diğer sayfanın açıldığı ve içerik eklenen fonksiyon*/
const goNextPage = () => {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();

                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                b1p.textContent = " Liu Cixin tarafından yazılmış olan bilimkurgu romanıdır. Dünyanın Geçmişi üçlemesinin ilk kitabıdır. Çinli okuyucular seriyi genellikle ilk kitap olan Üç Cisim olarak anmaktadır. Başlık, yörünge mekaniğindeki üç cisim problemini ifade etmektedir.Roman, 2006 yılında Science Fiction World’de serileştirilmiş, 2008 yılında bir kitap olarak yayınlanmış ve Çin'deki en popüler bilimkurgu romanı olmuştur. 2006 yılında Çin Bilimkurgu Yinhe Ödülü'nü aldı Aynı adı taşıyan dizi uyarlamasının ilk sezonu 2024 yılında yayınlanmıştır.Ken Liu'nun İngilizce çevirisi, 2014 yılında Tor Books tarafından yayımlandı. Zeynep Özmeral’in Türkçe çevirisi ise İthaki Yayınları tarafından 2016’da yayımlanmıştır. En İyi Roman için 2015 Hugo Ödülü'nü kazandı ve 2014 En İyi Roman için Nebula Ödülü'ne aday gösterildi.";
                b1p.textContent += "Netflix'te yayınlanan “3 Cisim Problemi” isimli dizi, ismini 3 yıldıza sahip bir Dünya-dışı gezegen sisteminden alıyor ve gezegenin sahipleri ise San-Ti olarak anılıyor. Aslında teknik olarak ismi 4 cisim problemi olmalıydı: 3 yıldız + gezegen. Yeni Netflix dizisi 3 Cisim Problemi'nin hikayesine derinlemesine girdiğinizde karşınıza üç kitaplık bir problem çıkıyor. Bunun nedeni de dizinin, Çinli bilimkurgu yazarı Cixin Liu tarafından kaleme alınan Dünya'nın Geçmişi üçlemesi serisinden çeşitli kısımları kullanıyor olması.";
                b1p.textContent += " 3 cisim problemi astronomininde sıkça sorduğu soruların içinde bulunduğu fermi paradoksu ve genel bilimsel tüm yıldızlar aynı anda kıpraşabilir mi, Sophon nedir?, nanofiber bir gemiyi dilimleyebilir mi?, Güneş bir antene dönüştürülebilir mi?, insan vucudu susuz bırakılıp kurutularak yıllar sonra tekrar suya atıp canlandırılabilir mi  ya da insan vucudu dondurulup yıllar sonra tekrar buzu çözüldükten sonra kaldığı yerden hayatına devam edebilir mi gibi soru işaretlerini de cevap veriyor aynı zamanda dünya dışı yaşamla ilgili buna ilgi duyanlar için sürükleyici bir içeriğe sahip ";
                b1p.textContent += " 3 cisim dizisinin içeriğine gelirsek de Yıkımın eşiğindeki bir uzaylı uygarlığı sinyali yakalar ve Dünya'yı işgal etmeyi planlar. Bu arada Dünya'da, ya üstün varlıkları ağırlamayı ve yozlaşmış olarak görülen bir dünyayı ele geçirmelerine yardım etmeyi ya da işgale karşı savaşmayı planlayan farklı kamplar oluşmaya başlar.";
                f2text.textContent = "Bu teori; Düz Dünya teorisine nazaran Dünya’nın düz değil, bir küre şeklinde olduğunu ancak kutuplarında oyuklar, delikler olduğunu dile getiriyor. Bu delikler; tıpkı birer kapı, geçit gibi Dünya’nın içindeki yeni bir dünyaya açılmakta. Ve bu dünyaya da Agarta denmekte. Agarta’nın geçmişi aslında Tibet, Orta Asya’ya kadar uzanmakta. Bu geleneklerde sözü edilen bu efsanevi, mistik dünya; ancak bazı coğrafyalarda bulunan dağlar, gizli geçitler aracılığıyla (ki bunların bazılarının Türkiye’de de var olduğuna inanılmakta) ziyaret edilebilir. Oyuk Dünya teorisine göre Dünya’mızın içi bomboş. Evet, yine ortada bir çekirdek bulunuyor ancak bu çekirdek, Dünya’nın içinde var olduğuna inanılan Agarta’ya bir ısı ve ışık kaynağı oluyor. Aynı zamanda yine bu gizli yer altı dünyasında milyonlarca yıl önce nesli tükenmiş olan mamut, dinozor gibi canlılar yer almakta. Bugün sizin için oyuk dünya komplo teorisine değinecez. Bu teori dünya daki en ütopik içerikli komplo teorilerden biri içerisinde agartalılar den hitlere birçok ütopik karakterler bulunuyor. Bu komplo teorisinde komplosu kadar popüler olan bir diğer komplo teorisinden bahsedeceğiz: “Oyuk Dünya” komplo teorisi; yani Dünya'nın gerçekte küresel ve katı bir yapıda değil, küresel olsa bile içi oyuk bir yapıda olduğuna inananların savunduğu komplo teorisi. Buna geçmeden önce, insanların neden bu tür bariz bir şekilde hatalı komplo teorilerine bu kadar büyük bir talep gösterdiklerini öğrenmek isterseniz şu yazımızı okumanızı tavsiye ederiz. ";
                f2text.textContent += "İddialar bununla kalmıyor. Başka iddialara göre nerdeyse 1 asır kadar önce, yani 20. yüzyılda, üstün güce sahip olan bazı devletler Agartalılar ile iletişime geçiyor. Bu iddiada en çok adı geçen isim, (elbette) Hitler’dir. Hitler, 1930 yıllarında bu delikleri keşfedip Agartalılar ile iletişime geçiyor ve bir şekilde onlarla anlaşma sağlayıp üstün savunma teknolojilerinden faydalanıyor. Hatta kuzey kutuplarında bazı üsler kurup, sık sık Agartalılar ile iletişime geçiyor. Bir başka iddiaya göre, 2. Dünya Savaşı’ndan sonra Almanlar yenileceklerini anladığında Hitler ve bazı Nazi subayları, bu deliklerden Agarta’ya kaçıp saklanmıştır. Görüldüğü üzere iddialar çok farklı şekillerde dallanabiliyor: Hitler, uzaylılar, Nuh Tufanı... Ancak az önce belirttiğimiz gibi bütün iddiaların kökeninde aynı şey yatıyor: Dünya’nın içi boş ve orada Agarta isimli br medeniyet yer alıyor. Peki bu teorinin gerçek olduğunu düşünenlerin bilimsel iddiaları var mı? Bunlardan söz edelim.";
                f2text.textContent += "Halley kuyruklu yıldızının isim babası Edmond Halley'in 1697 yılında kaleme aldığı bir araştırmasında bu teorinin Dünya’nın manyetik alanının kaynağı ile bir geçerlilik kazanabileceği yer alıyordu. Ona göre Dünya’nın oluşmaya başladığı ilk zamanlarda Dünya tamamen eriyik kayalardan oluşuyordu ve bu kayalar soğurken Dünya’nın kendi etrafında çok hızlı bir şekilde dönmesinden ötürü bir santifirüj etkisiyle Dünya’nın iç katmanları birbirinden ayrıldı. Merkezde erimiş metalde oluşan son derece sıcak bir çekirdek kaldı. Bu çekirdeğin etrafında ise tahmini 2-4 arası katman yer alıyordu. Ve bu katmanlar farklı hızlarda hareket ediyordu. Bundan ötürü de Dünya’nın manyetik alanı oluşuyordu.";
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

const goPrevPage = () => {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:

                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6:
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}




/* *Event listener */
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
