// Bu oyun, kullanıcıya bir kelimeyi harf harf tahmin etme şansı verir. Başlangıçta kelimeyi gizlemek için her harfi _ ile gösteririz. Kullanıcı her tahminde bulunur ve doğru tahminler kelimenin yerini alır. Kullanıcı kelimeyi tamamlayana kadar oyun devam eder.



const kelime = "javascript";
let gizliKelime = "_".repeat(kelime.length).split("");
let adim = kelime.length + 3;

for (let i = 0; i < adim; i++) {
  if (!gizliKelime.includes("_")) break;

  const tahmin = prompt(
    `Kelime: ${gizliKelime.join(" ")}\nKalan tahmin hakkı: ${adim - i}\nBir harf tahmin edin:`
  );

  if (!tahmin || tahmin.length !== 1) {
    alert("Lütfen yalnızca bir harf girin!");
    i--; // Geçersiz girişte hakkı azaltma
    continue;
  }

  let yanlisTahmin = false;

  for (const [index, letter] of [...kelime].entries()) {
    if (letter === tahmin) {
      gizliKelime[index] = letter;
      yanlisTahmin = true;
    }
  }

  alert(yanlisTahmin ? "Doğru tahmin!" : "Yanlış tahmin!");
}

if (!gizliKelime.includes("_")) {
  alert(`Tebrikler! Kelimeyi buldunuz: ${gizliKelime.join("")}`);
} else {
  alert(`Hakkınız bitti! Kelime: ${kelime}`);
}








