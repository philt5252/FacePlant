var mainmenuSkin : GUISkin;
var areaWidth : float;
var areaHeight: float;
//var titleScreen : Texture;
function OnGUI()
{
GUI.BeginGroup(new Rect(0,0, Screen.width, Screen.height));
	         		
	        		        		
	        	
		       GUI.EndGroup();
	GUI.skin = mainmenuSkin;
	var ScreenX = ((Screen.width *0.5) - (areaWidth *0.5));
	var ScreenY = ((Screen.height * 0.5)-(areaHeight * 0.5));
	
	GUILayout.BeginArea(Rect(Screen.width-Screen.width/2.8, Screen.height/4, areaWidth, areaHeight));
	
	if(GUILayout.Button("START GAME"))
	{
		Application.LoadLevel("Level1");
	}
	
	if(GUILayout.Button("QUIT"))
	{
		Application.Quit();
	}
	GUILayout.EndArea();
}
