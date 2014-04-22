/**
 * Created by anis on 4/22/14.
 */
define([
    'app',
    'marionette',
    'routers/index',
    'controllers/index'
], function(app, Marionette, Router, Controller){

    var PagesModule = app.module("Pages", function(Pages) {
        this.startWithParent = false;

        this.addInitializer(function(){
            console.log('Module => Pages module initialized');

            this.router = new Router({ controller: Controller });
        });


    });

//    PagesModule.addFinalizer(function(){
//        MyApp.someRegion.close();
//    });

    return PagesModule;
});