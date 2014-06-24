using UnityEngine;
using System.Collections;

public class TestScript : MonoBehaviour {

	public Rigidbody2D Player;

	// Use this for initialization
	void Start () {
		Player.AddForce (new Vector2 (500, 500));
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
