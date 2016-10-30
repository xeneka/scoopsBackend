/**
 * Created by Antonio on 30/10/16.
 */
'use strict';

var azuremobile = require('azure-mobile-apps');

var table =azuremobile.table();

// Definición de la tabla

table.columns = {
    "idNew":"string",
    "voto":"number"
}

// Definición de Trigger

/*table.insert(function(context){
    context.item.idUsuario = context.user.id;
    return context.execute();
})*/


table.read.access = 'anonymous';
table.insert.access = 'anonymous';
table.update.access = 'authenticated';
table.delete.access = 'authenticated';