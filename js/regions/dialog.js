define([
    'app',
    'marionette'
], function(app, Marionette){

    return  Marionette.Region.extend({
        onShow: function(view){
            this.listenTo(view, "dialog:close", this.closeDialog);

            var self = this;
            this.$el.modal({
                backdrop: true,
                keyboard: true,
                show: true
            });
        },

        closeDialog: function(){
            this.stopListening();
            this.close();
            this.$el.modal('hide');
        }
    });

});

