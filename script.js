const translations = {
  en: {
    headerTitle: "Daily Financial Tip",
    headerSubtitle: "Empowering your financial journey, one tip at a time!",
    tipTitle: "Today's Tip: Start an Emergency Fund",
    tipDescription: "An emergency fund helps you handle unexpected expenses without relying on debt. Begin by setting aside a small portion of your income every month in a separate account.",
    subscribeTitle: "Subscribe for More Tips",
    subscribeDescription: "Get a financial tip delivered to your inbox daily. Start improving your financial literacy today!",
    footerText: "Want personalized advice? Contact Us",
  },
  hi: {
    headerTitle: "दैनिक वित्तीय सुझाव",
    headerSubtitle: "हर दिन एक सुझाव के साथ आपकी वित्तीय यात्रा को सशक्त बनाना!",
    tipTitle: "आज का सुझाव: आपातकालीन निधि शुरू करें",
    tipDescription: "आपातकालीन निधि अप्रत्याशित खर्चों को संभालने में मदद करती है। हर महीने अपनी आय का एक छोटा हिस्सा अलग खाते में जमा करके शुरू करें।",
    subscribeTitle: "अधिक सुझावों के लिए सदस्यता लें",
    subscribeDescription: "अपने इनबॉक्स में प्रतिदिन एक वित्तीय सुझाव प्राप्त करें। आज ही अपनी वित्तीय साक्षरता में सुधार करना शुरू करें!",
    footerText: "निजीकृत सलाह चाहिए? हमसे संपर्क करें",
  },
};

document.getElementById("language-dropdown").addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  const translation = translations[selectedLanguage];

  // Update text content
  document.getElementById("header-title").textContent = translation.headerTitle;
  document.getElementById("header-subtitle").textContent = translation.headerSubtitle;
  document.getElementById("tip-title").textContent = translation.tipTitle;
  document.getElementById("tip-description").textContent = translation.tipDescription;
  document.getElementById("subscribe-title").textContent = translation.subscribeTitle;
  document.getElementById("subscribe-description").textContent = translation.subscribeDescription;
  document.getElementById("footer-text").textContent = translation.footerText;
});
