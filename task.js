var readline=require('readline');
var http=require('http');
var url=require('url');
var fs=require('fs');

var incomming=[];
var result="";
var input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
input.question("Enter a character:",(answer)=>{
   search(answer);
   input.close();
});

function search(a){
    fs.readFile("example.txt",(err,data)=>{
        incomming=data.toString().split(" ");
        incomming.forEach(element=>{
            if(element[0]==a){
                result +=" "+element;
            }
            });
            if(!result){
                result="no match found"

            }
            serverCall(result)
        });
    }
    function serverCall(result){
        var server=http.createServer(function(req,res){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("<h2>Hello</h2><h1 style='color:blue'>"+result+"</h1>");
res.end();
        }).listen(8080);
    }
    