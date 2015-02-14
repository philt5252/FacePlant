var mainmenuSkin : GUISkin;
var areaWidth : float;
var areaHeight: float;
var titleText : GUIText;
function OnGUI()
{
	titleText.fontSize = Mathf.RoundToInt(141 *Screen.width/854);
	GUI.skin = mainmenuSkin;
	mainmenuSkin.label.fontSize = Mathf.RoundToInt(43 * Screen.width/854);
	
	
	GUILayout.BeginArea(Rect(Screen.width- Screen.width/4, Screen.height/2, Screen.width/4, Screen.height/2));
	mainmenuSkin.button.fontSize = Mathf.RoundToInt(52 * Screen.width/854);	
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
