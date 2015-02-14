using UnityEngine;
using System.Collections;

public class SnicksDeath : MonoBehaviour {
	Animator Anim;

	void Start(){
		Anim = this.transform.GetComponent<Animator> ();
		}
	void OnCollisionEnter2D(Collision2D other){
	if (other.gameObject.tag == "Player") {
			Anim.SetBool("Death", true);
			audio.Play();
	}
	
	}
}