#pragma strict
 
var paused : boolean;
var guiSkin : GUISkin;
 
function Start () {

 
}
 
function Update () {
 
    if(Input.GetKeyDown(KeyCode.Escape)){
         paused = !paused;
       }
 
       if(paused)
         Time.timeScale = 0.0001;
       else
         Time.timeScale = 1;
 
 
    
 
}
 
// JavaScript
var icon : Texture;
var frameStyle : GUIStyle;
 
function OnGUI () {
 
       GUI.skin = guiSkin;
 
    if(paused){
 
  GUI.Box (Rect (Screen.width/2- icon.width/2,Screen.height/2 - icon.height/2, icon.width, icon.height), icon, frameStyle);
 
       if (GUI.Button (Rect (Screen.width/2 - icon.width/12,Screen.height/2 - icon.width/8, icon.width/4, icon.height/12), "CONTINUE")) {
        paused = !paused;
              Time.timeScale = 1;
          
       }
 
       if (GUI.Button (Rect (Screen.width/2 - icon.width/12,Screen.height/2, icon.width/4, icon.height/12), "MAIN MENU")) {
         
              Application.LoadLevel("MainMenu");
              Time.timeScale = 1;
       }
 
       if (GUI.Button (Rect (Screen.width/2 - icon.width/12,Screen.height/2 + icon.width/8,icon.width/4, icon.height/12),"QUIT")) {
         Application.Quit();
       }
    }
}