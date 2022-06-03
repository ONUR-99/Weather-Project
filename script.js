const map = L.map("map").setView([39.92077, 32.85411], 5); // harita ilk bakış konumu ve yakınlık oranı

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const key = "22af526f2f676c56c072482179da5dbb"; //api key
function weatherBallon(cityID) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=" +
      cityID +
      "&lang=tr&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      drawWeather(data);
      console.log(data);
    });
}
//verileri almak için fetch getirme komutu kullandım.
//veriler çekmek için json formatına dönüştürüyorum
//drawWeather ile de hava durumu verilerini bir parametre olarak alacak ve
//açıklaması ,sıcaklık ve konum öğelerini verecek
//verilerden sıcaklık kelvin geldiği için derece ye çevirilir

function drawWeather(d) {
  const celcius = Math.round(parseFloat(d.main.temp) - 273.15); //sıcaklık
  //console.log(celcius);
  const humidity = d.main.humidity; // nem
  //console.log(humidity);
  const feels_like = Math.round(parseFloat(d.main.feels_like) - 273.15); //hissedilen sıcaklık
  //console.log(feels_like);
  const description = d.weather[0].description; // hava durumu açıklaması
  //console.log(description);
  const sehir = d.name; //şehir ismi
  //console.log(sehir);
  const lon = d.coord.lon; //enlem
  //console.log(lon);
  const lat = d.coord.lat; //boylam
  //console.log(lat);
  const link = d.id; //şehirlerin api deki id yani numaralarını

  var myIcon = L.icon({
    iconUrl: "481431.png",
    iconSize: [25, 25],
  });
  //harita üzerineki ikon görseli
  L.marker([lat, lon], {
    icon: myIcon,
  })
    .addTo(map)
    .bindPopup(
      `<p>
      Şehir: ${sehir} <br>
      Hava Durumu: ${description} <br>
      Sıcaklık: ${celcius}° <br>
      Hissedilen Sıcaklık : ${feels_like}° <br>
      Nem : %${humidity} <br>
      Detaylı Hava Durumu : <a href="https://openweathermap.org/city/${link}" target="_blank">LİNK</a>
      </p>`
    )

    .openPopup();
}
//harita üzerindeki açılır pencerede gösterilen değişkenler
//Enlem: ${lat} <br>
//Boylam: ${lon} <br>

window.onload = function () {
  weatherBallon(325361), //ADANA *01
    weatherBallon(325329), //ADIYAMAN *02
    weatherBallon(325302), //AFYONKARAHİSAR *03
    weatherBallon(325163), //AĞRI *04
    weatherBallon(752014), //AMASYA *05
    weatherBallon(323786), //ANKARA *06
    weatherBallon(323776), //ANTALYA *07
    weatherBallon(751817), //ARTVİN *08
    weatherBallon(322830), //AYDIN *09
    weatherBallon(322165), //BALIKESİR *10
    weatherBallon(750598), //BİLECİK *11
    weatherBallon(321082), //BİNGÖL *12
    weatherBallon(321025), //BİTLİS *13
    weatherBallon(750516), //BOLU *14
    weatherBallon(320392), //BURDUR *15
    weatherBallon(750269), //BURSA *16
    weatherBallon(749780), //ÇANAKKALE *17
    weatherBallon(749747), //ÇANKIRI *18
    weatherBallon(748879), //ÇORUM *19
    weatherBallon(317106), //DENİZLİ *20
    weatherBallon(316540), //DİYARBAKIR *21
    weatherBallon(747712), //EDİRNE *22
    weatherBallon(315808), //ELAZIĞ *23
    weatherBallon(315373), //ERZİNCAN *24
    weatherBallon(315367), //ERZURUM *25
    weatherBallon(315202), //ESKİŞEHİR *26
    weatherBallon(314830), //GAZİANTEP *27
    weatherBallon(746881), //GİRESUN *28
    weatherBallon(746425), //GÜMÜŞHANE *29
    weatherBallon(318137), //HAKKARİ *30
    weatherBallon(312394), //HATAY *31
    weatherBallon(311073), //ISPARTA *32
    weatherBallon(311728), //MERSİN *33
    weatherBallon(745042), //İSTANBUL *34
    weatherBallon(311044), //İZMİR *35
    weatherBallon(743952), //KARS *36
    weatherBallon(743882), //KASTAMONU *37
    weatherBallon(308463), //KAYSERİ *38
    weatherBallon(743166), //KIRKLARELİ *39
    weatherBallon(307513), //KIRŞEHİR *40
    weatherBallon(742865), //KOCAELİ *41
    weatherBallon(306571), //KONYA *42
    weatherBallon(305268), //KÜTAHYA *43
    weatherBallon(304922), //MALATYA *44
    weatherBallon(304827), //MANİSA *45
    weatherBallon(310859), //KAHRAMANMARAŞ *46
    weatherBallon(304794), //MARDİN *47
    weatherBallon(304184), //MUĞLA *48
    weatherBallon(304081), //MUŞ *49
    weatherBallon(303830), //NEVŞEHİR *50
    weatherBallon(303827), //NİĞDE *51
    weatherBallon(741100), //ORDU *52
    weatherBallon(740483), //RİZE *53
    weatherBallon(740352), //SAKARYA *54
    weatherBallon(740264), //SAMSUN *55
    weatherBallon(300822), //SİİRT *56
    weatherBallon(739598), //SİNOP *57
    weatherBallon(300619), //SİVAS *58
    weatherBallon(738927), //TEKİRDAĞ *59
    weatherBallon(738743), //TOKAT *60
    weatherBallon(738648), //TRABZON *61
    weatherBallon(298846), //TUNCELİ *62
    weatherBallon(298332), //ŞANLIURFA *63
    weatherBallon(298298), //UŞAK *64
    weatherBallon(298117), //VAN *65
    weatherBallon(296560), //YOZGAT *66
    weatherBallon(737022), //ZONGULDAK *67
    weatherBallon(324496), //AKSARAY *68
    weatherBallon(750938), //BAYBURT *69
    weatherBallon(309527), //KARAMAN *70
    weatherBallon(307654), //KIRIKKALE *71
    weatherBallon(321836), //BATMAN *72
    weatherBallon(300640), //ŞIRNAK *73
    weatherBallon(751057), //BARTIN *74
    weatherBallon(751952), //ARDAHAN *75
    weatherBallon(311728), //IĞDIR *76
    weatherBallon(738025), //YALOVA *77
    weatherBallon(744562), //KARABÜK *78
    weatherBallon(307864), //KİLİS *79
    weatherBallon(303195), //OSMANİYE *80
    weatherBallon(865521); //DÜZCE *81
};
