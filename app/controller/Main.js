Ext.define('Sencha.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainpanel'
        },
        control: {
            'presidentlist': {
                disclose: 'showDetail'
            }
        }
    },

    showDetail: function() {
        this.getMain().push({
            xtype: 'presidentdetail'
        })
    }

});