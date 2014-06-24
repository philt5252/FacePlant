#pragma strict

var ObjectCollection : GameObject[];
var MinTime : float = 1f;
var MaxTime : float = 1f;
var moveObjAfterSpawn : boolean;

function Start () {
	Spawn();
}

function Update () {

}

function Spawn()
{
	var selectedObject = ObjectCollection[Random.Range(0, ObjectCollection.Length)];
	
	Instantiate(selectedObject, transform.position, Quaternion.identity);
	
	if(moveObjAfterSpawn)
	{
		var moveVector = new Vector3(selectedObject.renderer.bounds.size.x, 0, 0);
		transform.Translate(moveVector);
	}
	
	Invoke("Spawn", Random.Range(MinTime, MaxTime));
}