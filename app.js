Ext.application({
    name: 'Sencha',

    controllers: ['Main'],
    views: ['Main'],
    stores: ['Presidents'],
    models: ['President'],

    launch: function() {
        Ext.Viewport.add({
            xtype: 'mainpanel'
        });
    }
});