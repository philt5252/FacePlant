#pragma strict
 
var paused : boolean;
var guiSkin : GUISkin;
 
function Start () {

 
}
 
function Update () {
 
//    if(Input.GetKeyDown(KeyCode.Escape)){
//         paused = !paused;
//       }
 
       if(paused)
         Time.timeScale = 0.0001;
       else
         Time.timeScale = 1;
 
 
    
 
}
 
// JavaScript

var pauseIcon : Texture;

 
function OnGUI () {
GUI.skin = guiSkin;

	if (GUI.Button(Rect(Screen.width - pauseIcon.width - 10, 10 , pauseIcon.width, pauseIcon.height), pauseIcon))
		
		paused = !paused;
 
       
 
    if(paused){
 
 
  
 GUILayout.BeginArea(Rect(Screen.width/2 - Screen.width/3.5, Screen.height/2 - Screen.height/2.5, 500, 500));
	
	if(GUILayout.Button("CONTINUE"))
	{
		paused = !paused;
	}
	if(GUILayout.Button("MAIN MENU"))
	{
		paused = !paused;
		Application.LoadLevel("MainMenu");
	}
	
	if(GUILayout.Button("QUIT"))
	{
		Application.Quit();
	}
	GUILayout.EndArea();
}
}