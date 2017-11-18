var con=false;
var arr1=['垃圾','菜鸡','emm','还行','吃鸡'];
var StarArr=document.getElementsByTagName("img");
function starPic(num)
{
	if(con==true)
		return;
	else if(num<=2&&con==false)
	{
		for(var i=0;i<num;i++)
		{
			StarArr[i].src="images/star1.png";
		}
		document.getElementById("Text").value=arr1[i-1];
	}
	else if(num>2&&con==false)
	{
		for(var i=0;i<num;i++)
		{
			StarArr[i].src="images/star2.png";
		}
		document.getElementById("Text").value=arr1[i-1];
	}
}

function hide(num)
{
	if(con==true)
	{
		return;
	}
	for(var j=0;j<num;j++)
	{
		StarArr[j].src="images/star0.png";
	}
	document.getElementById("Text").value="";

}
function qd()
{
	con=true;
}
