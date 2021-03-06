sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function (Controller) {
    "use strict";

    return Controller.extend("rroot.controller.Filter", {
        onReset: function(oEvent) {
            // jQuery.sap.require("sap.m.MessageToast");
            // var params = oEvent.getParameters();
            var sMessage = "onReset trigered";
            sap.m.MessageToast.show(sMessage);
        },
        onSearch: function(oEvent) {
            jQuery.sap.require("sap.m.MessageToast");
            // var params = oEvent.getParameters();
            var sMessage = "onSearch trigered";
            sap.m.MessageToast.show(sMessage);
        }
    });
});