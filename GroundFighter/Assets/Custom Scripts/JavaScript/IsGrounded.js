var grounded : boolean;
function OnTriggerStay2D(otherCollision2D)
{
	grounded = true;
}

function OnTriggerExit2D(otherCollision2D)
{
	grounded = false;
}