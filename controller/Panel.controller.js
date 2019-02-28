sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("rroot.controller.Panel", {
        onShowHello : function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var oReceipt = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [oReceipt]);
            MessageToast.show(sMsg);
        },
        onSecond : function () {
            MessageToast.show("Second button is clicked");
        }
    });

});