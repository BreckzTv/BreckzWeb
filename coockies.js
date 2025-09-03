window.onload = function () {
  const consent = getCookie("cookieConsent");
  if (!consent) {
    document.getElementById("cookieConsent").style.display = "block";
  } else if (consent === "accepted") {
    loadAdSense();
  }
};

function acceptCookies() {
  setCookie("cookieConsent", "accepted", 365);
  document.getElementById("cookieConsent").style.display = "none";
  loadAdSense();
}

function declineCookies() {
  setCookie("cookieConsent", "declined", 365);
  document.getElementById("cookieConsent").style.display = "none";
}

function loadAdSense() {
  let adsenseScript = document.createElement("script");
  adsenseScript.async = true;
  adsenseScript.src =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4053846668307985";
  adsenseScript.crossOrigin = "anonymous";
  document.head.appendChild(adsenseScript);

  // Beispiel-Anzeige (Slot-ID anpassen!)
  let ad = document.createElement("ins");
  ad.className = "adsbygoogle";
  ad.style = "display:block";
  ad.setAttribute("data-ad-client", "ca-pub-4053846668307985");
  ad.setAttribute("data-ad-slot", "f08c47fec0942fa0"); // <-- Eigene Slot-ID eintragen
  ad.setAttribute("data-ad-format", "auto");
  ad.setAttribute("data-full-width-responsive", "true");

  document.getElementById("adsense-container").appendChild(ad);

  (adsbygoogle = window.adsbygoogle || []).push({});
}

// --- Cookie Helferfunktionen ---
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0)
      return c.substring(nameEQ.length, c.length);
  }
  return null;
}
