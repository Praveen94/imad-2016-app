console.log('Loaded!');
var img=document.getElementById('madi');
var left=0;
function moveRight()
{
left=left+10;
img.style.marginLeft=left+'px';
}
img.onmouseenter=function(){
var interval=setInterval(moveRight,'100');
};
    


