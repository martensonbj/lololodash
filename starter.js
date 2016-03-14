var _ = require("lodash");

var data = [
     { id: 22, username: "martin", active: true},
     { id: 23, username: "max",    active: false},
     { id: 24, username: "linda",  active: false}
 ]

var worker = function(data){
  return _.filter(data, {"active" : true} );
};

module.exports = worker;
