/**
 * Created by Antonio on 31/10/16.
 */
'use strict'

var sql = require('mssql');

sql.connect("mssql://{adminscoop}:{-ana2008}@{misqlserver}.database.windows.net:1433/{mibasededatos}?encrypt=true")
    .then(function() {

        new sql.Request().query("UPDATE news SET published = 1")
            .then(function(recordset) {
                console.log("All news published");
            }).catch(function(err) {
            console.error(err);
        });

    }).catch(function(err) {
    console.error(err);
});