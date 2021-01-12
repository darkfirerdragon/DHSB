var canvas=new fabric.Canvas("my_Canvas");
x1=10;
y1=10;
width_of_block=30;
height_of_block=30;
player= "" ;
block="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
    player=Img;
    player.scaleToWidth(150);
    player.scaleToHeight(140);
    player.set({
    top:y1,left:x1
    });
    canvas.add(player);
    });
    }
    function block_update(block1){
        fabric.Image.fromURL(block1,function(Img){
        block=Img;
        block.scaleToWidth(150);
        block.scaleToHeight(140);
        block.set({
        top:y1,left:x1
        });
        canvas.add(block);
        });
        }
        window.addEventListener("keydown",key_down());
    function key_down(e){
    keyPressed=e.keyCode;
    if(e.shiftKey==true && keyPressed=="80"){
    width_of_block=width_of_block+10;
    height_of_block=height_of_block+10
    document.getElementById("currunt_width").innerHTML=width_of_block;
    document.getElementById("currunt_height").innerHTML=height_of_block;
    }
    if(e.shiftKey==true && keyPressed=="77"){
        width_of_block=width_of_block-10;
        height_of_block=height_of_block-10
        document.getElementById("currunt_width").innerHTML=width_of_block;
        document.getElementById("currunt_height").innerHTML=height_of_block;
    }
    if(keyPressed=="70"){
        block_update("ironman_face.png");
        }
        if(keyPressed=="60"){
            block_update("hulkd_body.png");
            }
            if(keyPressed=="76"){
                block_update("hulk_legs.png");
                }
                if(keyPressed=="82"){
                    block_update("thor_right_hand.png");
                    }
                    if(keyPressed=="72"){
                        block_update("captain_america_left_hand.png");
                    }
                }