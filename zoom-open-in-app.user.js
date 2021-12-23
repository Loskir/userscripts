// ==UserScript==
// @name        Zoom open in app
// @author      Loskir
// @description This userscript redirects zoom.us links to the desktop app
// @version     1.0
// @license     MIT License
// @updateURL   https://github.com/Loskir/userscripts/raw/main/zoom-open-in-app.user.js
// @downloadURL https://github.com/Loskir/userscripts/raw/main/zoom-open-in-app.user.js
// @match       *://*.zoom.us/*
// @run-at      document-start
// @noframes
// ==/UserScript==

(function() {
    'use strict'
    const url = new URL(document.URL)
    const data = url.pathname.match(/\/j\/(\d+)/i)
    if (data) {
      let link = `zoommtg://zoom.us/join/?action=join&confno=${data[1]}`
      if (url.searchParams.get('pwd')) {
        link += `&pwd=${url.searchParams.get('pwd')}`
      }
      window.location.replace(link)
      window.close()
    }
})();
