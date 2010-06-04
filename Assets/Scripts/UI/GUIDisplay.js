public var thisMetalGUISkin : GUISkin;
//public GUISkin thisOrangeGUISkin;
//public GUISkin thisAmigaGUISkin;
private var rctWindow1 : Rect;
private var rctWindow2 : Rect;
private var rctWindow3 : Rect;
private var rctWindow4 : Rect;
private var blnToggleState : boolean = false;

private var characOneToggleState : boolean = true;
private var characTwoToggleState : boolean = false;
private var characThreeToggleState : boolean = false;
private var characFourToggleState : boolean = false;


//private float fltSliderValue = 0.5f;
// Position slider values 
private var fltSliderValuePosX : float = 0.0;
private var fltSliderValuePosY : float = 0.0;
private var fltSliderValuePosZ : float = 0.0;

    
// Rotation slider values 
private var fltSliderValueRotX : float = 0.0;
private var fltSliderValueRotY : float = 0.0;
private var fltSliderValueRotZ : float = 0.0;
    
// Scale slider values 
private var fltSliderValueScaX : float = 0.0;
private var fltSliderValueScaY : float = 0.0;
private var fltSliderValueScaZ : float = 0.0;
    
    
private var scrollPosition : Vector2 = Vector2.zero;

public function getCharacTwoToggleState() : boolean
{ 
	return characTwoToggleState;
}

public function getCharacThreeToggleState() : boolean
{ 
	return characThreeToggleState;
}

public function getCharacFourToggleState() : boolean
{ 
	return characFourToggleState;
}

public function getCharacOneToggleState() : boolean
{ 
	return characOneToggleState;
}

public function getfltSliderValueScaZ() : float
{
	return fltSliderValueScaZ;
}

public function getfltSliderValueScaX() : float
{
	return fltSliderValueScaX;
}

public function getfltSliderValueScaY() : float
{
	return fltSliderValueScaY;
}

public function getfltSliderValuePosY() : float
{
	return fltSliderValuePosY;
}
public function getfltSliderValuePosX() : float
{
    return fltSliderValuePosX;
}


public function getfltSliderValueRotX() : float
{
	return fltSliderValueRotX;
}

public function getfltSliderValueRotY() : float
{
	return fltSliderValueRotY;
}

public function getfltSliderValueRotZ() : float
{
	return fltSliderValueRotZ;
}

public function getfltSliderValuePosZ() : float
{
	return fltSliderValuePosZ;
}
//    class snNodeArray
//    {
//        public var itemType : String;
//        public var itemName : String;
//        public function snNodeArray(itemType : String,itemName : String)
//        {
//            this.itemType = itemType;
//            this.itemName = itemName;
//        }
//    }
    
    public var testArrayType : String[]= new String[20];
    public var testArrayItem : String[]= new String[20];
    function Awake() : void
    {
    	var i : int;
        //rctWindow1 = new Rect(20, 20, 320, 400);
        rctWindow2 = new Rect(1090, 30, 320, 450);
        rctWindow3 = new Rect(1090, 500, 320, 200);
        //rctWindow4 = new Rect(360, 20, 320, 400);
        for (i = 0; i < 19; i++)
        {
            testArrayType[i] = "node";
            testArrayItem[i] = "Hello" + i.ToString();
        }
    }

    function OnGUI()
    {
        //GUI.skin = thisOrangeGUISkin;
        //rctWindow1 = GUI.Window(0, rctWindow1, DoMyWindow, "Orange Unity", GUI.skin.GetStyle("window"));
        GUI.skin = thisMetalGUISkin;
        rctWindow2 = GUI.Window(1, rctWindow2, DoMyWindow2, "General Model related properties", GUI.skin.GetStyle("window"));
        rctWindow3 = GUI.Window(2, rctWindow3, DoMyWindow4, "Gaze Control Parameters - Toggle Listbox", GUI.skin.GetStyle("window"));
        //GUI.skin = thisAmigaGUISkin;
        //rctWindow4 = GUI.Window(3, rctWindow4, DoMyWindow, "Amiga500", GUI.skin.GetStyle("window"));
    }

    function gcListItem(strItemName : String)
    {
        GUILayout.BeginHorizontal();
        GUILayout.Label(strItemName);
        blnToggleState = GUILayout.Toggle(blnToggleState, "");
        GUILayout.EndHorizontal();
    }

    function gcListBox()
    {
    	var i : int;
	    GUILayout.BeginHorizontal();
        GUILayout.BeginVertical(GUI.skin.GetStyle("box"));
        scrollPosition = GUILayout.BeginScrollView(scrollPosition, GUILayout.Width(160), GUILayout.Height(130));
        for (i = 0; i < 20; i++)
        {
            gcListItem("Gaze Control Parameter " + i);
        }
        GUILayout.EndScrollView();
        GUILayout.EndVertical();
         GUILayout.Label("Gaze Control Settings");
        GUILayout.EndHorizontal();
    }

    function DoMyWindow4(windowID : int)
    {
        gcListBox();
        GUI.DragWindow();
    }

    function DoMyWindow3(windowID : int)
    {
        scrollPosition = GUI.BeginScrollView(new Rect(10, 100, 200, 200), scrollPosition, new Rect(0, 0, 220, 200));
        GUI.Button(new Rect(0, 0, 100, 20), "Top-left");
        GUI.Button(new Rect(120, 0, 100, 20), "Top-right");
        GUI.Button(new Rect(0, 180, 100, 20), "Bottom-left");
        GUI.Button(new Rect(120, 180, 100, 20), "Bottom-right");
        GUI.EndScrollView();
        GUI.DragWindow();
    }

    // void DoMyWindow(int windowID)
    //    {
    //        GUILayout.BeginVertical();
    //        GUILayout.Label("Im a Label");
    //        GUILayout.Space(8);
    //        GUILayout.Button("Im a Button");
    //        GUILayout.TextField("Im a textfield");
    //        GUILayout.TextArea("Im a textfield\nIm the second line\nIm the third line\nIm the fourth line");
    //        blnToggleState = GUILayout.Toggle(blnToggleState, "Im a Toggle button");
    //        GUILayout.EndVertical();
    //        GUILayout.BeginVertical();
    //        //Sliders
    //        GUILayout.BeginHorizontal();
    //        fltSliderValue = GUILayout.HorizontalSlider(fltSliderValue, 0.0f, 1.1f, GUILayout.Width(128));
    //        fltSliderValue = GUILayout.VerticalSlider(fltSliderValue, 0.0f, 1.1f, GUILayout.Height(50));
    //        GUILayout.EndHorizontal();
    //        //Scrollbars
    //        GUILayout.BeginHorizontal();
    //        fltScrollerValue = GUILayout.HorizontalScrollbar(fltScrollerValue, 0.1f, 0.0f, 1.1f, GUILayout.Width(128));
    //        fltScrollerValue = GUILayout.VerticalScrollbar(fltScrollerValue, 0.1f, 0.0f, 1.1f, GUILayout.Height(90));
    //        GUILayout.Box("Im\na\ntest\nBox");
    //        GUILayout.EndHorizontal();
    //        GUILayout.EndVertical();
    //        GUI.DragWindow();
    //    }

    function DoMyWindow2(windowID : int)
    {
	    GUILayout.Label("General Model related Settings");
        GUILayout.Label("Select the model");
        GUILayout.BeginVertical();
        GUILayout.BeginHorizontal();
        characOneToggleState = GUILayout.Toggle(characOneToggleState, "Interesting charc 1");
        characTwoToggleState = GUILayout.Toggle(characTwoToggleState, "Interesting charc 2");
        GUILayout.EndHorizontal();
        GUILayout.BeginHorizontal();
        characThreeToggleState = GUILayout.Toggle(characThreeToggleState, "Interesting charc 3");
        characFourToggleState = GUILayout.Toggle(characFourToggleState, "Interesting charc 4");
        GUILayout.EndHorizontal();
        GUILayout.EndVertical();
        GUILayout.Label("General settings for the model");
        GUILayout.Label("Position");
		GUILayout.BeginHorizontal();
		GUILayout.Label("X");
        fltSliderValuePosX = GUILayout.HorizontalSlider(fltSliderValuePosX, -0.5, 0.5, GUILayout.Width(128));
        GUILayout.EndHorizontal();
	    GUILayout.BeginHorizontal();
        GUILayout.Label("Y");
        fltSliderValuePosY = GUILayout.HorizontalSlider(fltSliderValuePosY, -0.5, 0.5, GUILayout.Width(128));
        GUILayout.EndHorizontal();
     	GUILayout.BeginHorizontal();
        GUILayout.Label("Z");
        fltSliderValuePosZ = GUILayout.HorizontalSlider(fltSliderValuePosZ, -0.5, 0.5, GUILayout.Width(128));
        GUILayout.EndHorizontal();
       	GUILayout.Label("Rotation");
		GUILayout.BeginHorizontal();
		GUILayout.Label("X");
	    fltSliderValueRotX = GUILayout.HorizontalSlider(fltSliderValueRotX, -1.0, 1.0, GUILayout.Width(128));
	    GUILayout.EndHorizontal();
		GUILayout.BeginHorizontal();
	    GUILayout.Label("Y");
	    fltSliderValueRotY = GUILayout.HorizontalSlider(fltSliderValueRotY, -1.0, 1.0, GUILayout.Width(128));
	    GUILayout.EndHorizontal();
	    GUILayout.BeginHorizontal();
	    GUILayout.Label("Z");
	    fltSliderValueRotZ = GUILayout.HorizontalSlider(fltSliderValueRotZ, -1.0, 1.0, GUILayout.Width(128));
	    GUILayout.EndHorizontal();
	 	GUILayout.Label("Scale");
	    GUILayout.BeginHorizontal();
		GUILayout.Label("X");
	    fltSliderValueScaX = GUILayout.HorizontalSlider(fltSliderValueScaX, -0.25, 0.18, GUILayout.Width(128));
	    GUILayout.EndHorizontal();
		GUILayout.BeginHorizontal();
	    GUILayout.Label("Y");
	    fltSliderValueScaY = GUILayout.HorizontalSlider(fltSliderValueScaY, -0.25, 0.18, GUILayout.Width(128));
	    GUILayout.EndHorizontal();
	    GUILayout.BeginHorizontal();
	    GUILayout.Label("Z");
	    fltSliderValueScaZ = GUILayout.HorizontalSlider(fltSliderValueScaZ, -0.25, 0.18, GUILayout.Width(128));
	    GUILayout.EndHorizontal();
        // GUILayout.BeginVertical();
        //   GUILayout.Button("Im a Button");
        //   GUILayout.TextField("Im a textfield");
        //   GUILayout.TextArea("Im a textfield\nIm the second line\nIm the third line\nIm the fourth line");
        //   blnToggleState = GUILayout.Toggle(blnToggleState, "Im a Toggle button");
        //   GUILayout.EndVertical();
        //   GUILayout.BeginVertical();
        //   //Sliders
        //   GUILayout.BeginHorizontal();
        //   fltSliderValue = GUILayout.HorizontalSlider(fltSliderValue, 0.0f, 1.1f, GUILayout.Width(128));
        //   fltSliderValue = GUILayout.VerticalSlider(fltSliderValue, 0.0f, 1.1f, GUILayout.Height(50));
        //   GUILayout.EndHorizontal();
        //   //Scrollbars
        //   GUILayout.BeginHorizontal();
        //   fltScrollerValue = GUILayout.HorizontalScrollbar(fltScrollerValue, 0.1f, 0.0f, 1.1f, GUILayout.Width(128));
        //   fltScrollerValue = GUILayout.VerticalScrollbar(fltScrollerValue, 0.1f, 0.0f, 1.1f, GUILayout.Height(90));
        //   GUILayout.Box("Im\na\ntest\nBox");
        //   GUILayout.EndHorizontal();
        //   GUILayout.EndVertical();
        GUI.DragWindow();
    }

