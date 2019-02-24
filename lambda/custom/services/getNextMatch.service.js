const AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
var moment = require('moment');
moment.locale('es');

function getNextMatch () {
    return new Promise(resolve => {
        var params = {
            TableName: 'bj-matches',
            // Key: {
            //   'ID': {N: '001'}
            // },
            // ProjectionExpression: 'ATTRIBUTE_NAME' Aca va los campos separados por coma que queremos traer.
          };
        ddb.scan(params, (err, data) => {
            if (err) {
                console.log("Error", err);
            } else {
                const obj = data.Items[0];
                console.log(obj.local.B);
                const match = {
                    date: moment(obj.date.S).fromNow(),
                    team: obj.team.S,
                    stadium: obj.local.BOOL? ' en la bombonera' : ' en el estadio ' + obj.stadium.S
                }  
                resolve(match);
            }
        });
    });
}

module.exports = getNextMatch;
