// AOS Animasyonlarını Başlat
AOS.init();

// Yaş Doğrulama Fonksiyonları
function verifyAge() {
    // Modalı gizle
    document.getElementById('age-gate').style.display = 'none';
    // Kullanıcının onayladığını tarayıcıya kaydet (Opsiyonel: Sayfa yenilendiğinde tekrar sormasın diye)
    localStorage.setItem('ageVerified', 'true');
}

function rejectAge() {
    alert("Üzgünüz, yasal yaş sınırının altındakiler giriş yapamaz.");
    window.location.href = "https://www.google.com"; // Küçükleri Google'a yönlendir
}

// Sayfa yüklendiğinde daha önce onay verip vermediğini kontrol et
window.onload = function() {
    if(localStorage.getItem('ageVerified') === 'true') {
        document.getElementById('age-gate').style.display = 'none';
    }
}
