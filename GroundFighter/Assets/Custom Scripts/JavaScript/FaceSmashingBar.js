/*faceSmashBarScript*/
 

var faceSmashBarBG : Texture2D; //faceSmashBarbackground
var faceSmashBarFG : Texture2D; //faceSmashBarforeground


var faceSmashBarFGMaxHeight : float;//the starting width of the foreground bar


var currentfaceSmashBar:float; //the current faceSmashBarstatus
var lanternStatus : Light;
var scale : float = 0.5;
var scaleX : float;
var scaleY : float;
var baseScreenX : float = 854;
var baseScreenY : float = 480;
var safeZone = false;




function Start()

{
    faceSmashBarFGMaxHeight = faceSmashBarFG.height;
   	
    currentfaceSmashBar=100;
    
    scaleX = Screen.width / baseScreenX * scale;
    scaleY = Screen.height / baseScreenY * scale;
    
    
}
 //faceSmashBarupdate
function LateUpdate () 
{

    if (currentfaceSmashBar < 100)
    {
    currentfaceSmashBar += 1;
    }
  
}


				

//creating the lanternHealthbars
function OnGUI()
{
    //this is the width that the foreground bar should be
    var newBarHeight:float = (currentfaceSmashBar/100) * faceSmashBarFGMaxHeight;
  	
 
   	
    Debug.Log("faceSmashBarleft " + currentfaceSmashBar);
 
    //a spacing variable to help us position the lanternHealth
    var gap:int = 20;
    
    GUI.BeginGroup(new Rect (gap, Screen.height - faceSmashBarBG.height*scaleY - gap, faceSmashBarBG.width*scaleX, faceSmashBarBG.height*scaleY));
		GUI.DrawTexture(Rect (0,0, faceSmashBarBG.width*scaleX, faceSmashBarBG.height*scaleY), faceSmashBarBG);
       
	       	GUI.BeginGroup(new Rect(0,faceSmashBarFG.height*scaleY - newBarHeight*scaleY, faceSmashBarFG.width*scaleX, faceSmashBarFG.height*scaleY));
	         	GUI.DrawTexture(Rect(0,0, faceSmashBarFG.width*scaleX, faceSmashBarFG.height*scaleY), faceSmashBarFG);
	        		        		
	        	
		       		GUI.EndGroup();
		       		
		       	GUI.EndGroup();
		       	
	 
		 	 
		
	
}

