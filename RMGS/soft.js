window.onload=function()
{
	var listNodes=document.getElementsByTagName("li");
	for(var i=0;i<listNodes.length;i++)
	{
		listNodes[i].onmouseover=function(){
			this.className="Show";
		}
		listNodes[i].onmouseout=function(){
			this.className="";
		}
	}
	var flag=1;
	var interval=setInterval(Change,2000);
	function Change(){
		if(flag<=4)
		{
			var temp=document.getElementById("imgroll");
			temp.src="images/"+flag+".jfif";
			flag++;
		}
		else
			flag=1;
	}

}
