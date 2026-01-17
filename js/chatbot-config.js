/**
 * CHATBOT CONFIGURATION
 * Konfigurasi terpusat untuk N8N Brandable Chatbox
 * Digunakan di semua halaman
 */

// Tunggu hingga Chatbot.js dimuat
if (window.N8NbrandableChatbox) {
  window.N8NbrandableChatbox.init({
    webhookUrl: "https://workflow.srvdevhome.my.id/webhook/1a05e652-773a-40f2-ae60-92a875111c68",
    botName: "Nattya Bot",
    brandColor: "#135bec",
    accentColor: "#0ea5e9",
    botAvatarUrl: "",
    userAvatarUrl: "",
    welcomeMessage: "Hallo Saya Nattya Bot, Ada yang bisa saya bantu?, dengan siapa saya berbicara?",
    headers: {},
    darkMode: true,
    openByDefault: false,
    allowHTMLInResponses: true,
    launcherVariant: "icon-text",
    launcherText: "Chat with us",
    sessionTtlMinutes: 60,
    transformRequest: (text, ctx) => ({ message: text, sessionId: ctx.sessionId, metadata: ctx.metadata }),
    transformResponse: (data) => data?.reply || data?.message || data?.text || data?.output || "No response",
  });
} else {
  console.warn('[Chatbot] N8NbrandableChatbox not loaded yet');
}
