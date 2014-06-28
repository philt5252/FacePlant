var mainmenuSkin : GUISkin;
var areaWidth : float;
var areaHeight: float;
var titleText : GUIText;
function OnGUI()
{

	GUI.skin = mainmenuSkin;
	mainmenuSkin.label.fontSize =  Mathf.RoundToInt(43 *Screen.width/854);
	titleText.fontSize = Mathf.RoundToInt(115 *Screen.width/854);
	
	
	GUILayout.BeginArea(Rect(Screen.width/12, Screen.height/3, Screen.width/4, Screen.height/2));
	mainmenuSkin.button.fontSize = Mathf.RoundToInt(43 * Screen.width/854);
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
