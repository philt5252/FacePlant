using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class PlayerController : MonoBehaviour 
{

	public float maxSpeed = 5f;
	bool facingRight = true;
	private List<GameObject> collectItems = new List<GameObject>();

	Animator anim;

	bool grounded = false;
	bool dead = false;
	public Transform groundCheck;
	public GameObject particle;
	float groundRadius = 0.2f;
	public LayerMask whatIsGround;
	public float jumpForce = 700f;

	// Use this for initialization
	void Start () 
	{
		anim = GetComponent<Animator>();
		collectItems.AddRange(GameObject.FindGameObjectsWithTag("PickUp"));


	}
	
	// Update is called once per frame
	void FixedUpdate () 
	{
		grounded = Physics2D.OverlapCircle (groundCheck.position, groundRadius, whatIsGround);

		if (!grounded)
			return;
		if (dead)
			return;

		anim.SetBool ("Ground", grounded);
		anim.SetFloat ("vSpeed", rigidbody2D.velocity.y);
		float move = Input.GetAxis ("Horizontal");

		anim.SetFloat ("Speed", Mathf.Abs (move));

		rigidbody2D.velocity = new Vector2 (move * maxSpeed, rigidbody2D.velocity.y);

		if (move > 0 && !facingRight) 
						Flip ();
				else if (move < 0 && facingRight)
						Flip ();

	}

	void Update ()
	{
		if (grounded && Input.GetButtonDown ("Jump")) 
		{
			anim.SetBool("Ground", false);
			rigidbody2D.AddForce(new Vector2(0, jumpForce));
		}
	}

	void Flip ()
	{
		facingRight = !facingRight;
		Vector3 theScale = transform.localScale;
		theScale.x *= -1;
		transform.localScale = theScale;

	}

	void OnTriggerEnter2D (Collider2D other)
	{
		if (other.gameObject.tag == "hazard") 
		{
			GameObject go = Instantiate(particle, other.transform.position, Quaternion.identity) as GameObject;
			Destroy(go, 2);
			other.gameObject.SetActive(false);
			Dead ();
		}

		if (other.gameObject.tag == "PickUp") 
		{
			GameObject go = Instantiate(particle, other.transform.position, Quaternion.identity) as GameObject;
			Destroy(go, 2);
			other.gameObject.SetActive(false);
			collectItems.Remove(other.gameObject);
		}
	}

	void Dead ()
	{
		grounded = false;
		dead = true;
		anim.SetBool("Dead", dead);

		rigidbody2D.velocity = Vector2.zero;


		if(!facingRight)
		{
			//Flip ();
			rigidbody2D.AddForce(new Vector2(100, jumpForce));

		}

		else
		{
			//Flip ();
			rigidbody2D.AddForce(new Vector2(-100, jumpForce));
					
		}

		BoxCollider2D box = GetComponent<BoxCollider2D>();
		box.enabled = false;
		
		CircleCollider2D circle = GetComponent<CircleCollider2D>();
		circle.enabled = false;
		StartCoroutine ("DeadTimer");
	}

	void StayDead ()
	{
		Debug.Log ("Here");
		anim.SetBool("StayDead", true);
	}

	IEnumerator DeadTimer()
	{
		yield return new WaitForSeconds(.25f);

		anim.SetBool("StayDead", true);
	}
}