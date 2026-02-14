// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
  // Your Valentine's name that will appear in the title
  // Example: "Delisha", "Anjitesh", "Mike"
  valentineName: "시현",

  // The title that appears in the browser tab
  // You can use emojis! 💝 💖 💗 💓 💞 💕
  pageTitle: "🤓",

  // Floating emojis that appear in the background
  // Find more emojis at: https://emojipedia.org
  floatingEmojis: {
    hearts: ["❤️", "💖", "💝", "💗", "💓"], // Heart emojis
    bears: ["🧸", "🐻"], // Cute bear emojis
  },

  // Questions and answers
  // Customize each question and its possible responses
  questions: {
    first: {
      text: "혹시 ... 나 좋아해 ...?", // First interaction
      yesBtn: "응",
      // Text for "Yes" button
      noBtn: "아니", // Text for "No" button
      secretAnswer: "헉, .... 사랑하는건가", // Secret hover message
    },

    second: {
      text: "얼마나 ... ?", // For the love meter
      startText: "이만큼 ?", // Text before the percentage
      nextBtn: "다음", // Text for the next button
    },
    third: {
      text: "그럼 혹시 오늘 나의 발렌타인이 되어줄래 ... ?", // The big question!
      yesBtn: "응 !", // Text for "Yes" button
      noBtn: "아니 ..", // Text for "No" button
    },
  },

  // Love meter messages
  // They show up depending on how far they slide the meter
  loveMessages: {
    extreme: "내가 졌다 ...", // Shows when they go past 5000%
    high: "이거보다 더 ?", // Shows when they go past 1000%
    normal: "이 정도 ?", // Shows when they go past 100%
  },

  // Messages that appear after they say "Yes!"
  celebration: {
    title: "",
    message:
      "ˊᗜˋ 이런 것도 만들어보고 난 정말 행복한 공대생이야 ...\n어땠는지 연락 남겨줘",
    emojis: "😇", // These will bounce around
  },

  // Color scheme for the website
  // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
  colors: {
    backgroundStart: "#ffafbd", // Gradient start (try pastel colors for a soft look)
    backgroundEnd: "#ffc3a0", // Gradient end (should complement backgroundStart)
    buttonBackground: "#ff6b6b", // Button color (should stand out against the background)
    buttonHover: "#ff8787", // Button hover color (slightly lighter than buttonBackground)
    textColor: "#ffb6c1", // Text color (make sure it's readable!)
  },

  // Animation settings
  // Adjust these if you want faster/slower animations
  animations: {
    floatDuration: "15s", // How long it takes hearts to float up (10-20s recommended)
    floatDistance: "50px", // How far hearts move sideways (30-70px recommended)
    bounceSpeed: "0.5s", // Speed of bouncing animations (0.3-0.7s recommended)
    heartExplosionSize: 1.5, // Size of heart explosion effect (1.2-2.0 recommended)
  },

  // Background Music (Optional)
  // Add your own music URL after getting proper licenses
  music: {
    enabled: true, // Music feature is enabled
    autoplay: true, // Try to autoplay (note: some browsers may block this)
    musicUrl:
      "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
    startText: "🎵 Play Music", // Button text to start music
    stopText: "🔇 Stop Music", // Button text to stop music
    volume: 0.5, // Volume level (0.0 to 1.0)
  },
};

// Export for use in other scripts
window.DEFAULT_CONFIG = CONFIG;
window.VALENTINE_CONFIG = { ...CONFIG };
