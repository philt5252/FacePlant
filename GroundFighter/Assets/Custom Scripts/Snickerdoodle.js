﻿function OnCollisionEnter2D(coll : Collision2D)
{
	if(coll.gameObject.tag == "Player")
	{
		animation.Play("snicksdeath");
	}
}
