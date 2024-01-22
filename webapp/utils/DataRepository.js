sap.ui.define([
    "sap/ui/base/Object",
    "sap/ui/model/json/JSONModel",
    "./RiotService",
    "./config"
  ], function (
    baseObject,
    JSONModel,
    RiotService,
    config
  ) {
    "use strict";
    var commonAPIs = {
        Account: {
            AccountInfo: { },
            RankInfo: []
        },

      constructor: function (oComp) {
        this.oComp = oComp;
        var oModel = new JSONModel(jQuery.extend(true, {}, this.Account));
        this.oComp.setModel(oModel);
      },
      getDataModel : function(){
        return this.oComp.getModel();
      }
    },
      oFinalService = jQuery.extend(true, commonAPIs, RiotService, config),
      oService = baseObject.extend("riot.app.utils.DataRepository", oFinalService)
    return oService;
  });