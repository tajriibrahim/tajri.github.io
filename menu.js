// ===============================================
//  COMMANDER'S NAVIGATION PROTOCOL
//  Add new pages here. They will appear on every site.
// ===============================================
const navLinks = [
    { name: "HQ // PROFILE",   url: "index.html" },
    { name: "MISSION LOGS",    url: "logs.html" },
    // { name: "FLIGHT DATA",  url: "flight.html" }, // Example: Remove // to activate
    // { name: "GALLERY",      url: "gallery.html" }
];

// ===============================================
//  SYSTEM LOGIC (DO NOT EDIT BELOW)
// ===============================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Create the container
    const navBar = document.createElement("nav");
    navBar.style.position = "fixed";
    navBar.style.top = "0";
    navBar.style.left = "0";
    navBar.style.width = "100%";
    navBar.style.background = "rgba(5, 5, 5, 0.95)";
    navBar.style.borderBottom = "1px solid #333";
    navBar.style.padding = "10px 0";
    navBar.style.zIndex = "9999";
    navBar.style.textAlign = "center";
    navBar.style.backdropFilter = "blur(5px)";

    // 2. Generate Links
    navLinks.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.innerText = link.name;
        
        // Stark Tech Styling
        a.style.color = "#00f3ff"; // Cyan
        a.style.textDecoration = "none";
        a.style.fontFamily = "'Courier New', monospace";
        a.style.fontWeight = "bold";
        a.style.fontSize = "0.9rem";
        a.style.margin = "0 15px";
        a.style.padding = "5px 10px";
        a.style.border = "1px solid transparent";
        a.style.transition = "0.3s";

        // Hover Effect
        a.onmouseover = () => {
            a.style.background = "#00f3ff";
            a.style.color = "#000";
            a.style.boxShadow = "0 0 10px #00f3ff";
        };
        a.onmouseout = () => {
            a.style.background = "transparent";
            a.style.color = "#00f3ff";
            a.style.boxShadow = "none";
        };

        // Highlight Active Page
        if (window.location.href.includes(link.url)) {
            a.style.borderBottom = "2px solid #ff9e00"; // Amber underline for current page
        }

        navBar.appendChild(a);
    });

    // 3. Inject into Body
    document.body.prepend(navBar);
    
    // 4. Add padding to body so content isn't hidden behind the fixed header
    document.body.style.paddingTop = "60px";
});
