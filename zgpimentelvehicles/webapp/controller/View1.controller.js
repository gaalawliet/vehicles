sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function(Controller) {
        "use strict";

        return Controller.extend("vehicles.zgpimentelvehicles.controller.View1", {
            onInit: function() {

            },
            onGoToView2Press: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView2");
            }
        });
    });