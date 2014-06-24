var mainmenuSkin : GUISkin;
var areaWidth : float;
var areaHeight: float;
var titleScreen : Texture;
function OnGUI()
{
GUI.BeginGroup(new Rect(0,0, Screen.width, Screen.height));
	         		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), titleScreen);
	        		        		
	        	
		       GUI.EndGroup();
	GUI.skin = mainmenuSkin;
	var ScreenX = ((Screen.width *0.5) - (areaWidth *0.5));
	var ScreenY = ((Screen.height * 0.5)-(areaHeight * 0.5));
	
	GUILayout.BeginArea(Rect(Screen.width/12, Screen.height/3, areaWidth, areaHeight));
	if(GUILayout.Button("TRY AGAIN"))
	{
		Application.LoadLevel("Level1");
	}
	
	if(GUILayout.Button("MAIN MENU"))
	{
		Application.LoadLevel("MainMenu");
	}
	
	if(GUILayout.Button("QUIT"))
	{
		Application.Quit();
	}
	GUILayout.EndArea();
}
