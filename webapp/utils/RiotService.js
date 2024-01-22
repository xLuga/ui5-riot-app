sap.ui.define([
], function(
) {
	"use strict";

	return {
        readAccountBySummoner: function(summoner){
        jQuery.get({
          url : this._baseURL+this._entity_summoner+summoner+'?api_key='+this._accessToken,
          success : function(aData){
            var oModel = this.getDataModel();
            oModel.setProperty("/AccountInfo",aData);

            this.puuid = aData.puuid;
            console.log(this.puuid);
            this.hiddenAccountID = aData.id;
            this._readRankInfo();
            
          }.bind(this)
        })
      },

      _readRankInfo: function(){
        jQuery.get({
            url: this._baseURL_rank+this._entity_rank+this.hiddenAccountID+'?api_key='+this._accessToken,
         success: function(aData){
            var oModel = this.getDataModel();
            if ( aData[0].queueType == 'RANKED_SOLO_5x5' )
                aData[0].queueType = "Solo/Duo";
            
            aData[0].winRate = ( parseInt(aData[0].wins) / ( parseInt(aData[0].losses) + parseInt(aData[0].wins)) ) * 100;
            console.log(aData[0].winRate);
            oModel.setProperty("/RankInfo",aData);
            console.log(aData);
         }.bind(this)
        })
      },
      _readChampionMastery: function(){
      
      }
  };
});