/**
 * Created by Antonio on 26/10/16.
 */

'use strict';

var azuremobile = require('azure-mobile-apps');

var table =azuremobile.table();

table.columns = {
    "name":"string",
    "secondName":"string"
}
