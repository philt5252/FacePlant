using UnityEngine;
using System.Collections;

public class GameController : MonoBehaviour {

	public Rigidbody2D Player;

	private bool playerLaunched = false;
	private bool playerAtSpeed = false;

	private float velocityTolerance = 0.1f;

	// Use this for initialization
	void Start () 
	{
		Player.AddForce (new Vector2 (500, 500));
		playerLaunched = true;
	}
	
	// Update is called once per frame
	void Update () 
	{
	
	}

	void FixedUpdate() 
	{

		if (playerLaunched && (Mathf.Abs (Player.velocity.x) > velocityTolerance || Mathf.Abs(Player.velocity.y) > velocityTolerance)) 
		{
			playerAtSpeed = true;
		}

		if (playerAtSpeed && Mathf.Abs (Player.velocity.x) < velocityTolerance && Mathf.Abs(Player.velocity.y) < velocityTolerance) 
		{
			Application.LoadLevel ("GameOver");
		}
	}
}
