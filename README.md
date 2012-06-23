jQuery-Mobile-Spinbox
=====================

Spinbox is a jQuery-mobile based number spinner. [Full Documentation and Demos](http://dev.jtsage.com/jQM-Spinbox/)

The spinbox control is simple to use - just load the script after jQM, and set your data-type="spinbox".  Initial input type can be whatever you want, nothing is changed - min/max are enforced with the buttons.
		
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script> 
    <script type="text/javascript" src="http://code.jquery.com/mobile/latest/jquery.mobile.min.js"></script>

    <!-- Optional Mousewheel support: http://brandonaaron.net/code/mousewheel/docs -->
    <script type="text/javascript" src="PATH/TO/YOUR/COPY/OF/jquery.mousewheel.min.js"></script>

    <script type="text/javascript" src="http://dev.jtsage.com/cdn/spinbox/latest/jqm-spinbox.min.js"></script>
	

A typical input:
	
    <div data-role="fieldcontain">
        <label for="spin">Input spinner</label>
        <input type="text" data-role="spinbox" name="spin" id="spin" value="60" min="0" max="100" />
    </div>

  
