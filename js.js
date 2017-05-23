var fs = require('fs');
var Mongoclient = require('mongodb').MongoClient;
var DB_url = 'mongodb://localhost:27017/a';






function insertData(db,callback){
		
			collectioninfo.insert(a, function (err, result) {
			callback(result);
			})
	
	}


fs.readdir('D:/123/23',function(err,files){
	if(err){
		return console.error(err);
	}else{
		files.forEach(function(item){
			fs.readFile('D:/123/23/'+item,'utf-8',function (err,data){
				if(err){
					console.log(err)
				}else{
					var a = {
						name:data.replace(/^.*(\r|\n)+(\@([\u4e00-\u9fff\w])+)([\s\S]*)/,'$2')
					} 
					console.log(a)
					//console.log(data.replace(/^.*(\r|\n)+(\@([\u4e00-\u9fff\w])+)/,'000000000'))
					Mongoclient.connect(DB_url, function (err, db) {
						if(err){/^.*\n((\w|\-)+)版本([\w]|[\u4E00-\u9FA5]|[\?\s\|\：\-])+.*$/
							console.log('err');/*([\s\S]*)*/
						}else{
							console.log('连接成功');
							var collectioninfo = db.collection("a");
							collectioninfo.insert(a, function (err, result) {
								if(err){
									console.log(err);
								}else{
									console.log('OK');
									db.close();
								}
							})
						}
					})

				}
			})
		})
	}
})