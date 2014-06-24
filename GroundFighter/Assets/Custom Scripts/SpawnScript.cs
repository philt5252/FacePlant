using UnityEngine;
using System.Collections;

public class SpawnScript : MonoBehaviour {

	public GameObject[] ObjectCollection;
	public float MinTime;
	public float MaxTime;
	public bool MoveObjAfterSpawn;
	// Use this for initialization
	void Start () {
		Spawn ();
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void Spawn()
	{
		GameObject selectedObject = ObjectCollection [Random.Range (0, ObjectCollection.Length)];

		GameObject newObject = Instantiate (selectedObject, transform.position, Quaternion.identity) as GameObject;

		try
		{
			if (MoveObjAfterSpawn) 
			{
				BoxCollider2D collider = newObject.GetComponent<BoxCollider2D>();

				Vector3 moveVector = new Vector3(collider.size.x-.1f, 0, 0);
				transform.Translate(moveVector);
			}
		}catch(UnityException ex)
		{

		}


		Invoke ("Spawn", Random.Range (MinTime, MaxTime));
	}
}
