jQuery-Mobile-Spinbox
=====================

Spinbox is a jQuery-mobile based number spinner. [Full Documentation and Demos](http://dev.jtsage.com/jQM-Spinbox/)

The spinbox control is simple to use - just load the script after jQM, and set your data-type="spinbox".  Initial input type can be whatever you want, nothing is changed - min/max are enforced with the buttons.
		
    &lt;script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"&gt;&lt;/script&gt; 
    &lt;script type="text/javascript" src="http://code.jquery.com/mobile/latest/jquery.mobile.min.js"&gt;&lt;/script&gt;

    &lt;!-- Optional Mousewheel support: http://brandonaaron.net/code/mousewheel/docs -->
    &lt;script type="text/javascript" src="PATH/TO/YOUR/COPY/OF/jquery.mousewheel.min.js">&lt;/script>

    &lt;script type="text/javascript" src="http://dev.jtsage.com/cdn/spinbox/latest/jqm-spinbox.min.js"&gt;&lt;/script&gt;
	

A typical input:
	
    &lt;div data-role="fieldcontain"&gt;
        &lt;label for="spin"&gt;Input spinner&lt;/label&gt;
        &lt;input type="text" data-role="spinbox" name="spin" id="spin" value="60" min="0" max="100" /&gt;
    &lt;/div&gt;

  
