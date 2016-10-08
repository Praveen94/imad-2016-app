console.log('Loaded!');
var img=document.getElementById('madi');
var left=0;
function moveRight()
{
var left=left+10;
img.style.marginLeft=left+'px';
}
var interval=setInterval(moveRight,'100');

    


