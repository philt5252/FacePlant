using UnityEngine;
using System.Collections;

public class GroundSpawn : MonoBehaviour {

	public GameObject[] ObjectCollection;

	//public bool MoveObjAfterSpawn;
	public GameObject player;
	float playerStartX;
	int groundUpdate;

	// Use this for initialization
	void Start () {
		//Spawn ();
		groundUpdate = 0;
		playerStartX = player.transform.position.x;

	}
	
	// Update is called once per frame
	void Update () {

		int score = Mathf.RoundToInt (player.transform.position.x - playerStartX);

		if (score >= 500) {
			groundUpdate  = 1;

		}



	}



	void OnTriggerStay2D(Collider2D other)
	{
		if (other.gameObject.tag == "Player") {
			GameObject selectedObject = ObjectCollection [groundUpdate];

			GameObject newObject = Instantiate (selectedObject, transform.position, Quaternion.identity) as GameObject;


			BoxCollider2D collider = newObject.GetComponent<BoxCollider2D> ();

			Vector3 moveVector = new Vector3 (collider.size.x - .1f, 0, 0);
			transform.Translate (moveVector);

		}

	}
}
