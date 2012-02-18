Ext.define('Sencha.view.PresidentList', {
    extend: 'Ext.List',
    xtype: 'presidentlist',
    requires: ['Sencha.store.Presidents'],
    
    config: {
        title: 'American Presidents',
        grouped: true,
        itemTpl: '{firstName} {lastName}',
        store: 'Presidents',
        onItemDisclosure: true
    }
});
