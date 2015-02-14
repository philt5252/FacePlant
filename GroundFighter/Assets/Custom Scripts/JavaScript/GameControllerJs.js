

var Player : Rigidbody2D;
var TextSkin : GUISkin;
var FaceSmashingBar : FaceSmashingBar;


private var  playerLaunched : boolean = false;
private var playerAtSpeed : boolean = false;

private var velocityTolerance : float = 0.05f;
private var playerStartX : float ;
private var score : int = 0;

	
// Use this for initialization
	function Start () 
	{
		playerStartX = Player.transform.position.x;

		Player.AddForce (new Vector2 (500, 500));
		playerLaunched = true;
		
	}
	
	// Update is called once per frame
	function Update () 
	{
		var velocityY : float = Player.velocity.y;
		var velocityX: float = Player.velocity.x;
		
		if( Player.velocity.x < 0 ){
			Player.velocity.x *= -1;
		}
		
		 if (Input.GetButtonDown ("FacePlant")) 
		{
			
			var newVelocity : float = FaceSmashingBar.currentfaceSmashBar/100 * (-2500 - velocityY);
			var foward : float = FaceSmashingBar.currentfaceSmashBar/100 * (500 + velocityX);
			Player.AddForce (new Vector2(foward , newVelocity));
			FaceSmashingBar.currentfaceSmashBar = 0;
		}

	}

	function FixedUpdate() 
	{
		//var faceSmashingBar : FaceSmashingBar = this.GetComponent("FaceSmashingBar");
		
		
		
		UpdateScore ();
		if (playerLaunched && (Mathf.Abs (Player.velocity.x) > velocityTolerance || Mathf.Abs(Player.velocity.y) > velocityTolerance)) 
		{
			playerAtSpeed = true;
		}

		if (playerAtSpeed  && Mathf.Abs (Player.velocity.x) < velocityTolerance && Mathf.Abs(Player.velocity.y) < velocityTolerance) 
		{
			Application.LoadLevel ("GameOver");
		}
	}

	function OnGUI()
	{
		GUI.skin = TextSkin;
		TextSkin.label.fontSize = Mathf.RoundToInt (100 * Screen.width / 854);
		GUI.Label (new Rect (0,0,500,500), score.ToString());
	}

	function UpdateScore()
	{
		var newScore = Player.transform.position.x - playerStartX;

		if (newScore > score) 
		{
			score = newScore;
		}
						
	}