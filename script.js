AOS.init();

function verifyAge() {
    document.getElementById('age-gate').style.display = 'none';
    createFoam(); // Giriş yapınca köpükler aksın
}

function createFoam() {
    const container = document.getElementById('foam-container');
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const foam = document.createElement('div');
            foam.className = 'foam';
            
            // Rastgele boyut ve konum
            const size = Math.random() * 20 + 10 + 'px';
            foam.style.width = size;
            foam.style.height = size;
            foam.style.left = (Math.random() * 60 + 20) + '%'; // Şişenin etrafından dökülür
            
            container.appendChild(foam);
            
            // Belleği temizlemek için köpüğü kaldır
            setTimeout(() => foam.remove(), 2000);
        }, i * 50);
    }
}

// Şişeye tıklayınca da köpürsün
document.getElementById('bottle').addEventListener('click', createFoam);
