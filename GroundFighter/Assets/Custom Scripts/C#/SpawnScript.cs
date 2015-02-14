using UnityEngine;
using System.Collections;

public class SpawnScript : MonoBehaviour {

	public GameObject[] ObjectCollection;
	float timepassed;
	float interval;

	// Use this for initialization
	void Start () {
		interval = 0.05f;
		timepassed = Time.time + interval;
		
	}
	
	// Update is called once per frame
	void Update () {



		
	}
	void OnTriggerExit2D(Collider2D other)
	{
		if (other.gameObject.tag == "Player" && Time.time >= timepassed) {

			timepassed = Time.time + interval;

			GameObject selectedObject = ObjectCollection [Random.Range (0, ObjectCollection.Length)];

			GameObject newObject = Instantiate (selectedObject, transform.position, Quaternion.identity) as GameObject;


		}



	}
}
