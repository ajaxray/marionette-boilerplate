define([
    'app',
    'marionette'
], function(app, Marionette){

    window.notifyTimeout = null;

    return  Marionette.Region.extend({


        onShow: function(view){
            this.listenTo(view, "notification:close", this.closeNotification);
            this.$el.fadeIn('slow');

            window.notifyTimeout = setTimeout(this.closeNotification, 5000);
        },

        closeNotification: function(){
            $('#notification').fadeOut('slow');
            clearTimeout(window.notifyTimeout);
        }
    });

});

