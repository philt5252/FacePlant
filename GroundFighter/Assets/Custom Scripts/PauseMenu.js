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
var icon : Texture;
var frameStyle : GUIStyle;
var pauseIcon : Texture;

 
function OnGUI () {
GUI.skin = guiSkin;

	if (GUI.Button(Rect(Screen.width - pauseIcon.width - 10, 10 , pauseIcon.width, pauseIcon.height), pauseIcon))
		
		paused = !paused;
 
       
 
    if(paused){
 
  GUI.Box (Rect (Screen.width/4, 0, Screen.width, Screen.height), icon, frameStyle);
  
 
       if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2-50, 150, 50), "CONTINUE")) {
        paused = !paused;
              Time.timeScale = 1;
          
       }
 
       if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2, 150, 50), "MAIN MENU")) {
          		paused = !paused;
          		Time.timeScale = 1;
              Application.LoadLevel("MainMenu");
             
       }
 
       if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2+50, 150, 50),"QUIT")) {
         Application.Quit();
       }
    }
}