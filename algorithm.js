 $(document).ready(function(){
    setTimeout(function(){ 

var url = [
    "https://sci-hub.se","https://sci-hub.ren","https://sci-hub.ws","https://sci-hub.tw","https://sci-hub.ac","https://sci-hub.is","https://sci-hub.gq","https://sci-hub.io","https://sci-hub.ga","https://mg.scihub.ltd","https://sci-hub.org","https://scihub.bban.top","https://sci-hub.nz","https://sci-hub.tv","https://sci-hub.hk","https://sci-hub.cc","https://scihub.wikicn.top","https://sci-hub.name","https://sci-hub.mn",
    "https://sci-hub.bz","https://sci-hub.nu","https://sci-hub.la","https://sci-hub.biz","https://sci-hub.cn"];
console.log("aaa");
    var i;
for (i = 0; i < url.length; i++) {
   $.ajax({
       url: 'geturl.php?url='+ url[i],
       success: function(html) {
          $("#content").append(html);
          
       }
    });
} 

 }, 2000);

 
    
    


  
});
