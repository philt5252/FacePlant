using UnityEngine;
using System.Collections;

public class GameController : MonoBehaviour {

	public Rigidbody2D Player;
	public GUISkin TextSkin;

	private bool playerLaunched = false;
	private bool playerAtSpeed = false;

	private float velocityTolerance = 0.05f;
	private float playerStartX;
	private int score = 0;


	// Use this for initialization
	void Start () 
	{
		playerStartX = Player.transform.position.x;

		Player.AddForce (new Vector2 (500, 500));
		playerLaunched = true;
	}
	
	// Update is called once per frame
	void Update () 
	{

	}

	void FixedUpdate() 
	{
		if (Input.GetButtonDown ("FacePlant")) 
		{
			Player.AddForce (new Vector2(100,-500));

		}

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

	void OnGUI()
	{
		GUI.skin = TextSkin;
		TextSkin.label.fontSize = Mathf.RoundToInt (35 * Screen.width / 854);
		GUI.Label (new Rect (0,0,Screen.width/16,Screen.height/16), score.ToString());
	}

	void UpdateScore()
	{
		int newScore = (int)(Player.transform.position.x - playerStartX);

		if (newScore > score) 
		{
			score = newScore;
		}
						
	}
}
