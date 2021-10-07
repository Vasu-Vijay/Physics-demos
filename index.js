var isFirst1=true, isFirst2=true;
$(async function(){
	if(window.location.href.indexOf("html")!=-1){
		$("#a1").attr("href","./waves/index.html");
		$("#a2").attr("href","./gravity/index.html");
		$("#a3").attr("href","./electrostatics/index.html");
	}
	$("#rickroll").hover((e)=>{
		if(isFirst1){
			$("#rickroll").html("<a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\"><img src=\"https://c.tenor.com/lBK-Zii3--IAAAAM/rickroll.gif\"></a>")
			console.log('d');
			isFirst1=false;
			isFirst2=true;
		}
		
	},(e)=>{
		if(isFirst2){
			$("#rickroll").html("")
			console.log('fd');
			isFirst2=false;
			isFirst1=true;
		}
	})
})