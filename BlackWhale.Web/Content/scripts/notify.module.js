var notifyModule = (function () {

    function config(message, status) {

        var type = getType(status);

        $.notify({
            message: message
        }, {
            type: type
        });
    }

    function getType(status) {
        switch (status) {
            case "Success": return "success"; break;
            case "Fail": return "danger"; break;
            case "Warning": return 'warning'; break;
            default: return "success"; break;
        }
    }

    return {
        config : config
    }
}())