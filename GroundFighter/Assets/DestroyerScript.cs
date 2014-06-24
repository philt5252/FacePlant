using UnityEngine;
using System.Collections;

public class DestroyerScript : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () 
	{
	
	}

	void OnCollisionEnter2D(Collision2D collision)
	{
		Destroy (collision.gameObject);
	}

	void OnCollisionStay2D(Collision2D collision)
	{
		Destroy (collision.gameObject);
	}
}
