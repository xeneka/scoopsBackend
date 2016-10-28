/**
 * Created by Antonio on 27/10/16.
 */


//'use strict';

var api =  {

    get:function (req, res,next) {

        if (typeof req.params.length <0) {
            return next()
        }

        var context = req.azureMobile;
        //var user = context.user.id;

        var query = {


        sql: "select name from  Autors where name = 'Pepe'"




        }


        req.azureMobile.data.execute(query).then(function(result){
            console.log("Entro");
            res.json(result)
        });

    }


};

//api.get.access = 'anonymous';
module.exports = api