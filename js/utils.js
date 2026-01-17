/**
 * UTILITY & TEMPLATE HELPERS
 * Fungsi reusable untuk rendering komponen dan manajemen DOM
 */

const DOM = {
  /**
   * Render logo brand di navbar
   */
  renderLogo() {
    const container = document.getElementById('logoBrand');
    if (!container || !CONFIG) return;

    const { brand } = CONFIG;
    const logoHTML = brand.logo 
      ? `<img src="${brand.logo}" alt="${brand.name}" class="h-6 sm:h-8 w-auto object-contain">`
      : `<div class="flex size-8 items-center justify-center rounded-lg bg-primary/20 text-primary"><span class="material-symbols-outlined text-2xl">dns</span></div>`;
    
    container.innerHTML = `
      ${logoHTML}
      <a href="index.html" class="text-white text-sm sm:text-lg font-bold tracking-tight whitespace-nowrap">${brand.name}</a>
    `;
    
    // Ensure proper alignment
    container.classList.add('flex', 'items-center', 'gap-1', 'sm:gap-2');
  },

  /**
   * Render service cards dari data configuration
   */
  renderServices(containerId, services) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = services
      .map(
        (service) => `
      <div class="group relative rounded-xl border border-slate-800 bg-[#1c1f27] p-6 hover:border-primary/50 hover:bg-[#1c1f27]/80 transition-all duration-300 animate-fadeInUp">
        <div class="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-slate-800 text-white group-hover:bg-primary group-hover:text-white transition-colors">
          <span class="material-symbols-outlined">${service.icon}</span>
        </div>
        <h4 class="mb-2 text-xl font-bold text-white">${service.title}</h4>
        <p class="text-slate-400 text-sm leading-relaxed mb-4">${service.description}</p>
        <a class="inline-flex items-center text-sm font-bold text-slate-300 group-hover:text-primary transition-colors" href="${service.link}">
          ${CONFIG.lang.buttons.learnMore} <span class="material-symbols-outlined ml-1 text-sm">chevron_right</span>
        </a>
      </div>
    `
      )
      .join("");
  },

  /**
   * Render stats dari data configuration
   */
  renderStats(containerId, stats) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = stats
      .map(
        (stat) => `
      <div class="flex flex-col gap-1 animate-fadeInUp">
        <p class="text-3xl font-bold text-white tracking-tight">${stat.value}</p>
        <p class="text-sm font-medium text-slate-400">${stat.label}</p>
      </div>
    `
      )
      .join("");
  },

  /**
   * Render portfolio projects
   */
  renderPortfolio(containerId, portfolio) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = portfolio
      .map(
        (project, index) => {
          // Check if image exists, otherwise use icon as fallback
          const imageHTML = project.image 
            ? `<img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" onerror="this.parentElement.innerHTML='<span class=\\\"material-symbols-outlined text-6xl text-primary/40\\\">image_not_supported</span>'">`
            : `<span class="material-symbols-outlined text-6xl text-primary/40 group-hover:text-primary/60 transition-colors">${project.icon}</span>`;
          
          return `
      <div class="group bg-[#1c1f27] border border-slate-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fadeInUp animate-stagger-${(index % 6) + 1}">
        <div class="h-48 bg-gradient-to-br from-primary/20 to-slate-800 relative flex items-center justify-center overflow-hidden">
          ${imageHTML}
        </div>
        <div class="p-6">
          <div class="inline-block px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            ${project.category}
          </div>
          <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">${project.description}</p>
          <div class="pt-4 border-t border-slate-700">
            <p class="text-xs text-slate-500 font-medium">${project.metrics}</p>
          </div>
        </div>
      </div>
    `;
        }
      )
      .join("");
  },

  /**
   * Setup navigation active state
   */
  setupNav(currentPage) {
    document.querySelectorAll("nav a").forEach((link) => {
      const href = link.getAttribute("href");
      const isActive = href === currentPage || (currentPage === "index.html" && href === "/");
      if (isActive) {
        link.classList.add("text-white");
        link.classList.remove("text-slate-300", "hover:text-white");
      }
    });
  },

  /**
   * Setup smooth scroll behavior
   */
  setupSmoothScroll() {
    document.documentElement.style.scrollBehavior = "smooth";
  },

  /**
   * Setup intersection observer untuk lazy loading & animations
   */
  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });
  },

  /**
   * Setup lazy loading images
   */
  setupLazyImages() {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
            }
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img);
      });
    }
  },

  /**
   * Setup mobile menu toggle
   */
  setupMobileMenu() {
    const menuBtn = document.querySelector("button[aria-label='Toggle menu']") || 
                    document.querySelector("button:has(.material-symbols-outlined:contains('menu'))");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {
      menuBtn.addEventListener("click", () => {
        nav.classList.toggle("hidden");
        nav.classList.toggle("flex");
        nav.classList.add("absolute", "top-16", "left-0", "right-0", "flex-col", "bg-[#111318]/95", "backdrop-blur-md", "border-b", "border-slate-800", "p-4");
      });
    }
  },

  /**
   * Format text dengan placeholder variables
   */
  interpolate(text, data) {
    return text.replace(/{{(\w+)}}/g, (match, key) => data[key] || match);
  },

  /**
   * Tambah class dengan delay untuk stagger animation
   */
  staggerAnimation(selector, animationClass = "animate-fadeInUp", delay = 100) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add(animationClass);
      }, index * delay);
    });
  },
};

/**
 * Initialize semua DOM utilities saat halaman dimuat
 */
document.addEventListener("DOMContentLoaded", () => {
  // Render logo dari CONFIG
  if (typeof CONFIG !== 'undefined') {
    DOM.renderLogo();
  }

  // Smooth scroll
  DOM.setupSmoothScroll();

  // Intersection observer untuk animations
  DOM.setupIntersectionObserver();

  // Lazy load images
  DOM.setupLazyImages();

  // Mobile menu
  DOM.setupMobileMenu();

  // Set active navigation
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  DOM.setupNav(currentPage);
});

// Export untuk modul systems jika diperlukan
if (typeof module !== "undefined" && module.exports) {
  module.exports = DOM;
}
