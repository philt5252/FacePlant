
 
var paused : boolean;
var guiSkin : GUISkin;
var scaleX : int = Mathf.RoundToInt(Screen.width/854);
var scaleY : int = Mathf.RoundToInt(Screen.height/480);
 
function Start () {

 
}
 
function Update () {
 
//    if(Input.GetKeyDown(KeyCode.Escape)){
//         paused = !paused;
//       }
 
       if(paused)
         Time.timeScale = 0;
       else
         Time.timeScale = 1;
 
 
    
 
}
 
// JavaScript

var pauseIcon : Texture;



 
function OnGUI () {
GUI.skin = guiSkin;
guiSkin.button.fontSize  = Mathf.RoundToInt(43 * Screen.width/854);
	if (GUI.Button(Rect(Screen.width - pauseIcon.width - 10, 10 , pauseIcon.width , pauseIcon.height ), pauseIcon))
		
		paused = !paused;
 
       
 
    if(paused){
 
 
  
 GUILayout.BeginArea(Rect(Screen.width/4, Screen.height/4 , Screen.width/2, Screen.height/2));
	
	if(GUILayout.Button("CONTINUE"))
	{
		paused = !paused;
	}
	if(GUILayout.Button("MAIN MENU"))
	{
		paused = !paused;
		Application.LoadLevel("MainMenu");
	}
	if(GUILayout.Button("RESTART"))
	{
		paused = !paused;
		Application.LoadLevel(Application.loadedLevel);
	}
	
	if(GUILayout.Button("QUIT"))
	{
		Application.Quit();
	}
	GUILayout.EndArea();
}
}