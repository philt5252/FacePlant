using UnityEngine;
using System.Collections;

public class Death : MonoBehaviour {

	void OnCollisionEnter2D(Collision2D other){
		if (other.gameObject.tag == "Player") {
			audio.Play();

			Application.LoadLevel("GameOver");
		}
	}
}
