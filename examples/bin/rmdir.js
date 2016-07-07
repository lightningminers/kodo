var fs = require('fs');
var path = require('path');
var containerPath = path.resolve('./');

module.exports = rmdir;

function rmdir(dirPath) {
  dirPath = path.resolve(containerPath,dirPath);
  var dirs = [];
  collection(dirPath,dirs);
  dirs.forEach(function (v) {
    var status = fs.rmdirSync(v);
    if (status){
      console.log(status);
    }
  });
}

function collection(url,dirs) {
  var stat;
  try {
    stat = fs.statSync(url);
  }catch(e){
    console.log(e)
  };
  if (stat){
    if (stat.isDirectory()){
      dirs.unshift(url);
      recursion(url,dirs);
    }else{
      if (stat.isFile()){
        fs.unlinkSync(url);
      }
    }
  }
}

function recursion(url,dirs) {
  var arr = fs.readdirSync(url);
  var i = 0;
  var le = arr.length;
  for (;i<le;i++) {
    var v = path.resolve(url,arr[i]);
    collection(v,dirs);
  }
}
