function changeImage()
{
var element=document.getElementById('myimage');
if (element.src.match("bulbon"))
  {
  element.src="image/eg_bulboff.gif";
  }
else
  {
  element.src="image/eg_bulbon.gif";
  }
}