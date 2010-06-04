// how to toggle character on charactoggle On

public var Gaze_UI : GUIDisplay;
var ThomasTModel : GameObject;
var i : int;

// Initial general properties of the Thomas T Model Character 
// position paramters 
var initThomasXPosition : float;
var initThomasYPosition : float;
var initThomasZPosition : float;
// rotational paramters 
var initThomasXRotation : float;
var initThomasYRotation : float;
var initThomasZRotation : float;
// Scalre paramters
var initThomasXScale : float;
var initThomasYScale : float;
var initThomasZScale : float;


// Use this for initialization
function Start () {
//Instantiate(Thomas_Rigid, gameObject.transform.position, Quaternion.identity); 
for(i = 0 ; i < 1 ; i++)
{
//var ThomasT_Model : GameObject = Instantiate (ThomasTModel, gameObject.transform.position, gameObject.transform.rotation) as GameObject;
}
}

function Awake() {
	ThomasTModel = gameObject;
	// Defining general initial paramters when application is in awake mode
	// Position
	initThomasXPosition = 3.51946; 
	initThomasYPosition = 12.951;
	initThomasZPosition = 30.57005;
	//Rotation
	initThomasXRotation = 0.009471752;
	initThomasYRotation = 0.1252065;
	initThomasZRotation = 0.02371944;
	
	initThomasXScale = 1.0;
	initThomasYScale = 1.0;
	initThomasZScale = 1.0;
		
}	
// Update is called once per frame
function Update () {
	  // current value of position slider x 
	  Debug.Log("Value of position x slider is " + ThomasTModel.transform.position.z);
	  // updating positional paramters
 	  ThomasTModel.transform.position.x =Gaze_UI.getfltSliderValuePosX() + initThomasXPosition;
 	  ThomasTModel.transform.position.y =Gaze_UI.getfltSliderValuePosY() + initThomasYPosition;
 	  ThomasTModel.transform.position.z =Gaze_UI.getfltSliderValuePosZ() + initThomasZPosition;
      
      // Updating rotational parameters 
      ThomasTModel.transform.rotation.x =Gaze_UI.getfltSliderValueRotX() - initThomasXRotation;
      ThomasTModel.transform.rotation.y =Gaze_UI.getfltSliderValueRotY() - initThomasYRotation;
      ThomasTModel.transform.rotation.z =Gaze_UI.getfltSliderValueRotZ() + initThomasZRotation;
      
      // updating Scale paramters 
 	  ThomasTModel.transform.localScale.x = Gaze_UI.getfltSliderValueScaX()+initThomasXScale;
 	  ThomasTModel.transform.localScale.y = Gaze_UI.getfltSliderValueScaY()+initThomasYScale;
 	  ThomasTModel.transform.localScale.z = Gaze_UI.getfltSliderValueScaZ()+initThomasZScale;
 	  
 	  if(Gaze_UI.getCharacOneToggleState() == false)
 	  {
 	  	ThomasTModel.transform.position.x =Gaze_UI.getfltSliderValuePosX() + 30.51946;
 	  } 
 	  
}
