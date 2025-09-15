	// Function buat animasi count up
    function animateCountUp(targetElement, targetValue, duration = 2000) {
        let current = 0;
        const increment = targetValue / (duration / 10);
    
        const counter = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
                current = targetValue;
                clearInterval(counter);
            }
            targetElement.innerHTML = `<strong>Total Views:</strong> ${Math.floor(current)}`;
        }, 10);
    }
    
    // Function buat dapat emoji bendera dari country code
    function getFlagEmoji(countryCode) {
        if (!countryCode || countryCode.length !== 2) return '🏳️'; // fallback ke bendera putih
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    }
    
    document.addEventListener('DOMContentLoaded', async function() {
        // Hitungan views
        let views = localStorage.getItem('page_views');
        if (views === null) {
            views = 1;
        } else {
            views = parseInt(views) + 1;
        }
        localStorage.setItem('page_views', views);
    
        const statsDiv = document.getElementById('stats');
        if (statsDiv) {
            animateCountUp(statsDiv, views);
        }
    
        // Deteksi negara pengunjung menggunakan API IP Geolocation
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            const countryName = data.country_name || 'Unknown';
            const countryCode = data.country_code || 'UN'; // fallback ke UN
    
            if (countryCode.length === 2) {
                // Ambil data negara dari localStorage
                let countriesData = JSON.parse(localStorage.getItem('countries_viewed')) || {};
    
                // Tambahkan / Update jumlah pengunjung negara
                if (countriesData[countryCode]) {
                    countriesData[countryCode].count += 1;
                } else {
                    countriesData[countryCode] = { name: countryName, count: 1 };
                }
    
                localStorage.setItem('countries_viewed', JSON.stringify(countriesData));
    
                // Tampilkan daftar negara + jumlah pengunjung
                const countriesDiv = document.getElementById('countries');
                if (countriesDiv) {
                    countriesDiv.innerHTML = '<strong>Visitors From:</strong><br>';
    
                    for (const [code, info] of Object.entries(countriesData)) {
                        const flag = getFlagEmoji(code);
                        countriesDiv.innerHTML += `<div style="margin-top:5px;">${flag} ${info.name} - ${info.count} visitor(s)</div>`;
                    }
                }
            }
        } catch (error) {
            console.error('Gagal mendapatkan negara:', error);
        }
    });