// Animasyonları başlat
AOS.init({ duration: 1000, once: true });

// Yaş Kontrolü
function verifyAge() {
    document.getElementById('age-gate').style.fadeOut = "slow";
    setTimeout(() => {
        document.getElementById('age-gate').style.display = 'none';
        startPouring(); // Giriş yapınca köpükler aksın
    }, 500);
}

function rejectAge() {
    alert("Üzgünüz, 18 yaşından küçükler giriş yapamaz.");
    window.location.href = "https://www.google.com";
}

// Köpük Efekti Fonksiyonu
function startPouring() {
    const container = document.getElementById('foam-container');
    
    // 60 tane köpük taneciği oluştur
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const foam = document.createElement('div');
            foam.className = 'foam';
            
            const size = Math.random() * 30 + 10 + 'px';
            foam.style.width = size;
            foam.style.height = size;
            
            // Şişenin ağız kısmından rastgele yayılma
            foam.style.left = (Math.random() * 40 + 30) + '%';
            
            container.appendChild(foam);
            
            // Animasyon bitince temizle
            setTimeout(() => foam.remove(), 2000);
        }, i * 40);
    }
}

// Şişeye tıklandığında köpüğü tekrar başlat
document.getElementById('bottle').addEventListener('click', startPouring);
