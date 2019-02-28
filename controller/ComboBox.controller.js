sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function(jQuery, Controller, JSONModel) {
    "use strict";
    return Controller.extend("rroot.controller.ComboBox", {
        onInit: function () {
            // set explored app's demo model on this sample
            var oModel = new JSONModel(jQuery.sap.getModulePath("rroot", "invoice>/Invoices"));
            this.getView().setModel(oModel);
        }
    });
});