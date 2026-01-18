# Cloudflare Workers/Pages Deployment Guide

## 🚀 Cara Deploy ke Cloudflare Workers/Pages

Website Nattya sudah siap untuk di-deploy ke Cloudflare Workers atau Cloudflare Pages!

### Metode 1: Cloudflare Pages (Recommended - Paling Mudah)

Cloudflare Pages adalah cara termudah untuk hosting static website seperti ini.

#### Langkah-langkah:

1. **Login ke Cloudflare Dashboard**
   - Buka https://dash.cloudflare.com/
   - Login dengan akun Cloudflare Anda

2. **Buat Project Baru**
   - Pilih "Workers & Pages" dari sidebar
   - Klik "Create application"
   - Pilih tab "Pages"
   - Klik "Upload assets"

3. **Upload Files**
   - Drag & drop semua file website Anda (atau pilih folder)
   - File yang perlu di-upload:
     ```
     ├── index.html
     ├── about.html
     ├── contact.html
     ├── services.html
     ├── bot.html
     ├── css/
     ├── js/
     └── img/
     ```
   - **JANGAN upload**: `.git`, `node_modules`, `wrangler.toml`, `worker.js`

4. **Deploy**
   - Klik "Deploy site"
   - Tunggu proses deployment selesai
   - Website Anda akan tersedia di: `https://your-project-name.pages.dev`

5. **Custom Domain (Opsional)**
   - Setelah deploy, klik "Custom domains"
   - Tambahkan domain Anda sendiri

---

### Metode 2: Cloudflare Workers (Advanced)

Untuk kontrol lebih lanjut, gunakan Cloudflare Workers dengan Wrangler CLI.

#### Prerequisites:
- Node.js terinstall (v16 atau lebih baru)
- Akun Cloudflare
- Cloudflare API Token

#### Langkah-langkah:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Login ke Cloudflare**
   ```bash
   npx wrangler login
   ```

3. **Test Locally**
   ```bash
   npm run dev
   ```
   - Buka browser: http://localhost:8788

4. **Deploy ke Cloudflare**
   ```bash
   npm run deploy
   ```

5. **Update wrangler.toml**
   Edit file `wrangler.toml` dan ganti:
   ```toml
   routes = [
     { pattern = "/*", zone_name = "your-domain.com" }
   ]
   ```
   Dengan domain Anda yang sebenarnya.

---

## 🔧 Konfigurasi

### File yang Sudah Dibuat:

1. **`wrangler.toml`** - Konfigurasi Cloudflare Workers
2. **`worker.js`** - Script untuk serve static files
3. **`package.json`** - NPM scripts untuk development & deployment

### Environment Variables (Opsional)

Jika Anda perlu environment variables:

```toml
# Di wrangler.toml
[vars]
ENVIRONMENT = "production"
API_URL = "https://api.example.com"
```

---

## ✅ Checklist Sebelum Deploy

- [x] Semua file HTML sudah siap
- [x] CSS dan JS sudah ter-link dengan benar
- [x] Gambar sudah ada di folder `img/`
- [x] Config di `js/config.js` sudah diupdate
- [ ] Update contact information yang real
- [ ] Test semua link dan navigation
- [ ] Test di berbagai browser
- [ ] Test responsive design (mobile/tablet/desktop)

---

## 🧪 Testing

### Test Lokal dengan Wrangler:
```bash
npm run dev
```

### Test Lokal dengan Python (Alternatif):
```bash
python -m http.server 8000
```

### Test Lokal dengan Live Server (VS Code):
- Install extension "Live Server"
- Right-click `index.html` → "Open with Live Server"

---

## 🌐 Setelah Deploy

Website Anda akan tersedia di:
- **Cloudflare Pages**: `https://your-project-name.pages.dev`
- **Custom Domain**: `https://your-domain.com` (jika sudah setup)

### Performance Benefits:
- ✅ Global CDN (200+ data centers)
- ✅ Automatic HTTPS
- ✅ DDoS protection
- ✅ Unlimited bandwidth
- ✅ Free SSL certificate
- ✅ Fast page loads worldwide

---

## 🔄 Update Website

### Cloudflare Pages:
1. Buka dashboard Cloudflare Pages
2. Pilih project Anda
3. Klik "Create new deployment"
4. Upload file yang sudah diupdate

### Cloudflare Workers:
```bash
npm run deploy
```

---

## 🐛 Troubleshooting

### Error: "Asset not found"
- Pastikan semua file path benar
- Check case-sensitive filenames (Linux/Unix)
- Verify file structure di Cloudflare dashboard

### Error: "Worker exceeded CPU time limit"
- Ini jarang terjadi untuk static sites
- Coba gunakan Cloudflare Pages sebagai gantinya

### CSS/JS tidak load:
- Check Content-Type headers di `worker.js`
- Verify file paths di HTML (gunakan relative paths)
- Clear browser cache

### Images tidak muncul:
- Pastikan folder `img/` ter-upload
- Check image paths di HTML/config.js
- Verify image file extensions (.png, .jpg, etc)

---

## 📊 Monitoring

Setelah deploy, Anda bisa monitor:
- **Analytics**: Lihat traffic, requests, bandwidth
- **Logs**: Real-time logs di Wrangler atau dashboard
- **Performance**: Core Web Vitals metrics

Access via Cloudflare Dashboard → Workers & Pages → Your Project

---

## 💡 Tips

1. **Gunakan Cloudflare Pages untuk static sites** - Lebih mudah dan gratis
2. **Enable "Always Use HTTPS"** di Cloudflare settings
3. **Setup custom domain** untuk branding yang lebih baik
4. **Enable "Auto Minify"** untuk CSS/JS/HTML di Cloudflare
5. **Use Cloudflare Analytics** untuk track visitors

---

## 📞 Support

Jika ada masalah:
1. Check Cloudflare Status: https://www.cloudflarestatus.com/
2. Cloudflare Docs: https://developers.cloudflare.com/pages/
3. Wrangler Docs: https://developers.cloudflare.com/workers/wrangler/

---

**Happy Deploying! 🚀**
