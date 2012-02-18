Ext.define('Sencha.view.PresidentList', {
    extend: 'Ext.List',
    xtype: 'presidentlist',
    requires: ['Sencha.store.Presidents'],
    
    config: {
        grouped: true,
        indexBar: true,
        itemTpl: '{firstName} {lastName}',
        store: 'Presidents',
    }
});
