// Helper: Set cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// Helper: Get cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, val] = c.split("=");
    if (key === name) return val;
  }
  return null;
}

// Apply saved preferences on page load
function applyPreferences() {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
}

// Handle form submission
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const fontsize = document.getElementById("fontsize").value;
  const fontcolor = document.getElementById("fontcolor").value;

  // Save cookies
  setCookie("fontsize", fontsize);
  setCookie("fontcolor", fontcolor);

  // Apply immediately
  document.documentElement.style.setProperty("--fontsize", fontsize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontcolor);
});

// Load saved settings when page opens
applyPreferences();
