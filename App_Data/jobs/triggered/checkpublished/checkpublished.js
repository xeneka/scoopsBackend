/**
 * Created by Antonio on 31/10/16.
 */
'use strict'

console.log("Actualización de noticias Publicadas")
var sql = require('mssql');

sql.connect("mssql://{adminscoop}:{-ana2008}@{abmscoopsserver}.database.windows.net:1433/{abmscoops}?encrypt=true")
    .then(function() {

        new sql.Request().query("UPDATE Autors SET visible = 1 where publicada=1")
            .then(function(recordset) {
                console.log("All news published", recordset);
            }).catch(function(err) {
            console.error(err);
        });

    }).catch(function(err) {
    console.error(err);
});