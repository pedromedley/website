(function () {
    var els = document.querySelectorAll('.__download-link');
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (navigator.platform.toLowerCase().indexOf('mac') !== -1) {
            el.innerHTML = 'Download for Mac';
            el.setAttribute('href', '/download#mac');
        } else if (navigator.platform.toLowerCase().indexOf('win') !== -1) {
            el.innerHTML = 'Download for Windows';
            el.setAttribute('href', '/download#windows');
        } else if (navigator.platform.toLowerCase().indexOf('linux') !== -1) {
            el.innerHTML = 'Download for Linux';
            el.setAttribute('href', '/download#ubuntu');
        }
    }
})();