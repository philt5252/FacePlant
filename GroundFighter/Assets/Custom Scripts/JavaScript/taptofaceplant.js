function Update () {
guiText.fontSize = Mathf.RoundToInt(105 * Screen.width/854);
 if (Input.GetButtonDown("FacePlant"))
 {
 	this.gameObject.SetActive(false);
 }
 
}