<script>
    function searchData(event) {
        event.preventDefault(); // Mencegah form refresh halaman

        // Ambil nilai input pencarian
        const query = document.getElementById("searchInput").value.trim().toLowerCase();

        // Daftar data dan halaman yang sesuai
        const data = {
            "jawa barat": "jawabarat.html",
            "jawa tengah": "jawatengah.html",
            "jawa timur": "jawatimur.html",
            "bali": "bali.html",
            "aceh": "Aceh.html",
            "kalimantan barat": "kalimantan_barat.html",
            "kalimantan timur": "kalimantan_timur.html",
            "sumatra barat": "Sumatera_barat.html"
        };

        // Cek apakah query cocok dengan data
        if (data[query]) {
            window.location.href = data[query]; // Arahkan ke halaman yang sesuai
        } else {
            alert("Data tidak ditemukan! Coba masukkan kata kunci yang sesuai.");
        }
    }
</script>
