(function () {
    var els = document.querySelectorAll('.__download-link');
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        var prefix = 'Download for ';
        var defaultText = 'Download Insomnia';
        var platform = null;

        if (el.getAttribute('data-verbose')) {
            prefix = 'Download Insomnia for ';
        }

        if (navigator.platform.toLowerCase().indexOf('mac') !== -1) {
            platform = 'Mac';
            el.innerHTML = 'Download for Mac';
            el.setAttribute('href', '/download#mac');
        } else if (navigator.platform.toLowerCase().indexOf('win') !== -1) {
            el.innerHTML = 'Download for Windows';
            platform = 'Windows';
            el.setAttribute('href', '/download#windows');
        } else if (navigator.platform.toLowerCase().indexOf('linux') !== -1) {
            platform = 'Linux';
            el.innerHTML = 'Download for Linux';
            el.setAttribute('href', '/download#ubuntu');
        }

        if (platform) {
            el.innerHTML = prefix + platform;
        } else {
            el.innerHTML = defaultText;
        }
    }
})();