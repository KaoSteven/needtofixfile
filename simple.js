var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
db.defaults({posts:[]}).write()
console.log(db.get('posts').value());
//add a post
/*db.get('posts')
.push({id:1,title:'lowdb is awesome',published:true})
.write()
db.get('posts')
.push({id:2,title:'lowdb is great',published:true})
.write()
db.get('posts')
.push({id:3,title:'lowdb is nice',published:false})
.write()
db.get('posts')
.push({id:4,title:'lowdb is good',published:false})
.write()*/

// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
