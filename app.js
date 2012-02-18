Ext.application({
    name: 'Sencha',

    controllers: ['Main'],
    views: ['PresidentList'],
    stores: ['Presidents'],
    models: ['President'],

    launch: function() {
        Ext.Viewport.add({
            xtype: 'presidentlist'
        });
    }
});