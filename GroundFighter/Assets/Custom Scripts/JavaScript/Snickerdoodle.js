function OnCollisionEnter2D(coll : Collision2D)
{
	if(coll.gameObject.tag == "Player")
	{
		AnimatorSetTrigger(true);
	}
}

function AnimatorSetTrigger(OnCollisionEnter2D)
{
	OnCollisionEnter2D = true;
}