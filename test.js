var config = require('config.js');
var db = config.db;
 
//nodejs下的col集合                                                                                                                                                       
var COL = 'col';

db.query(COL, function(collection) {
     collection.insert({a:1,b:2,c:3},function(err, docs) {
        console.log("First:\n", docs);
     });
 });
 

db.query(COL, function(collection) {
     collection.find({}, {
         limit: 10
     }).toArray(function(err, docs) {
         console.log("\nSecond:\n", docs);
     });
});
