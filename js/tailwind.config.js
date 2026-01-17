/* 
 * ==========================================================================
 * TAILWIND CSS CONFIGURATION
 * ==========================================================================
 * File ini berisi konfigurasi Tailwind CSS yang digunakan di seluruh website.
 * Dengan memisahkan config ke file terpisah, kita bisa menghindari duplikasi
 * kode di setiap halaman HTML.
 * 
 * Cara pakai: Tambahkan script ini SETELAH Tailwind CDN di setiap halaman HTML.
 * ==========================================================================
 */

tailwind.config = {
    // Mode gelap (dark mode) menggunakan class "dark" pada tag <html>
    darkMode: "class",
    
    theme: {
        extend: {
            // =========================================
            // WARNA KUSTOM (Custom Colors)
            // =========================================
            colors: {
                // Warna utama brand (biru)
                "primary": "#135bec",
                
                // Warna background untuk mode terang
                "background-light": "#f6f6f8",
                
                // Warna background untuk mode gelap
                "background-dark": "#101622",
            },
            
            // =========================================
            // FONT FAMILIES
            // =========================================
            fontFamily: {
                // Font untuk heading/judul (Space Grotesk)
                "display": ["Space Grotesk", "sans-serif"],
                
                // Font untuk body text (Noto Sans)
                "body": ["Noto Sans", "sans-serif"],
            },
            
            // =========================================
            // BORDER RADIUS
            // =========================================
            borderRadius: {
                "DEFAULT": "0.25rem",  // 4px - default
                "lg": "0.5rem",        // 8px - large
                "xl": "0.75rem",       // 12px - extra large
                "full": "9999px",      // Bulat penuh (untuk lingkaran)
            },
        },
    },
}
