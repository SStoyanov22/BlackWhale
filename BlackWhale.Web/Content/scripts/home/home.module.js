var homeModule = (function () {

    function configHomeIndexView() {
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load('particles-js', '../Content/scripts/home/particlesjs-config.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }

    return {
        configHomeIndexView: configHomeIndexView
    }
}())