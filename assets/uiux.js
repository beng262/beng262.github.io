// UI / UX page: one rail of phone screens per app concept. Images live in img/uiux/.
(() => {
  const concepts = [
    {
      id: "whatever", name: "WhatNow", kind: "Mobile app design · first called Whatever",
      text: "\"We decide for you.\" Answer a few playful questions about your mood and what recharges you, pick what to eat or what to do, swipe through suggestions and get a place recommended.",
      tags: ["Quiz flow", "Swipe cards", "Light theme", "Gradients"],
      screens: ["Splash", "Question 1: food", "Question 5: recharge", "Eat or do?", "Casual or fancy", "Your pick"],
    },
    {
      id: "wallpaper-app", name: "Wallpaper App", kind: "Mobile app concept",
      text: "A wallpaper store with categories, live wallpapers and a diamond economy: unlock a wallpaper with diamonds, earn them with a daily check-in, a wheel of fortune or an ad, or go premium.",
      tags: ["Browse", "Paywall", "Rewards", "Settings"],
      screens: ["Popular and categories", "Settings", "Daily check-in", "Unlock with diamonds", "Pricing plans", "Earn diamonds"],
    },
    {
      id: "fortune-teller-app", name: "Fortune Teller", kind: "Mobile app concept",
      text: "A mystical fortune-telling app. A painted welcome, a language picker, sign-in with social accounts, then a chat with your fortune teller and readings: zodiac, clairvoyance, coffee cup, palm and a magic ball.",
      tags: ["Onboarding", "Chat UI", "Illustration", "Dark theme"],
      screens: ["Welcome", "Get started", "Pick a language", "Welcome back", "Sign up", "Chat with the teller", "Choose a reading"],
    },
  ];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  document.getElementById("concepts").innerHTML = concepts.map((c) => `
    <section class="concept reveal">
      <div class="concept-head">
        <div>
          <span class="eyebrow">${esc(c.kind)}</span>
          <h2>${esc(c.name)}</h2>
          <p>${esc(c.text)}</p>
          <div class="tags">${c.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        </div>
        <span class="count">${c.screens.length} screens · scroll →</span>
      </div>
      <div class="rail">${c.screens.map((s, i) => `
        <figure class="phone"><img src="img/uiux/${c.id}-${i}.webp" alt="${esc(c.name + ": " + s)}" loading="lazy" width="540" height="1200" data-zoom="${esc(c.name + " · " + s)}" data-group="${c.id}" /><figcaption>${esc(s)}</figcaption></figure>`).join("")}
      </div>
    </section>`).join("");
  SITE.reveal();
  SITE.zoomables();
})();
