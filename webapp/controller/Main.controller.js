sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "riot/app/utils/DataRepository",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, DataRepository,JSONModel) {
        "use strict";

        return Controller.extend("riot.app.controller.Main", {
            onInit: function () {

            },

            onSearch: function () {
                //zuerst müssen wir das Model wieder zurücksetzen
                let emptyModel = {
                    AccountInfo: {},
                    RankInfo: []
                };

                var oModel = new JSONModel(jQuery.extend(true, {}, this.emptyModel));
                this.getOwnerComponent().setModel(oModel);

                let value = this.byId("summonerID").getProperty("value");
                this.getOwnerComponent().DataRepository.readAccountBySummoner(value);
            }
        });
    });
