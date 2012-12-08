/*
 * jQuery Mobile Framework : plugin to provide number spinbox.
 * Copyright (c) JTSage
 * CC 3.0 Attribution.  May be relicensed without permission/notification.
 * https://github.com/jtsage/jquery-mobile-spinbox
 */

(function($) {
	$.widget( "mobile.spinbox", $.mobile.widget, {
		options: {
			// All widget options, including some internal runtime details
			dmin: false,
			dmax: false,
			theme: false,
			initSelector: "input[data-role='spinbox']",
			clickEvent: 'vclick'
		},
		_create: function() {
			var w = this, tmp,
				o = $.extend(this.options, this.element.jqmData('options')),
				d = {
					input: this.element,
					wrap: this.element.wrap('<div style="display:inline; white-space:nowrap"></div>').parent()
				};
				
			w.d = d;
			
			if ( o.theme === false ) {
				o.theme = $(this).closest('[data-theme]').attr('data-theme');
				if ( typeof o.theme === 'undefined' ) { o.theme = 'c'; }
			}
			
			w.d.input.removeClass('ui-input-text ui-corner-all').addClass('ui-slider-input');
			
			if ( o.dmin === false ) { o.dmin = ( typeof w.d.input.attr('min') !== 'undefined' ) ? parseInt(w.d.input.attr('min'),10) : Number.MAX_VALUE * -1; }
			if ( o.dmax === false ) { o.dmax = ( typeof w.d.input.attr('max') !== 'undefined' ) ? parseInt(w.d.input.attr('max'),10) : Number.MAX_VALUE; }
			
			w.d.up = $('<div>')
				.buttonMarkup({icon: 'plus', theme: o.theme, iconpos: 'notext', corners:false, shadow:true, inline:true})
				.addClass('ui-corner-right')
				.css({'marginLeft':'0px', 'marginBottom':'0px', 'marginTop':'0px', 'paddingLeft':'.4em'})
				.appendTo(w.d.wrap);
				
			w.d.down = $('<div>')
				.buttonMarkup({icon: 'minus', theme: o.theme, iconpos: 'notext', corners:false, shadow:true, inline:true})
				.addClass('ui-corner-left')
				.css({'marginRight':'0px', 'marginBottom':'0px', 'marginTop':'0px', 'paddingRight':'.4em'})
				.prependTo(w.d.wrap);
				
			w.d.up.on(o.clickEvent, function(e) {
				e.preventDefault();
				if ( !w.disabled ) {
					tmp = parseInt(w.d.input.val(),10) + 1;
					if ( tmp <= o.dmax ) { w.d.input.val(tmp); }
                        		w.d.input.trigger('change');
				}
			});
			
			w.d.down.on(o.clickEvent, function(e) {
				e.preventDefault();
				if ( !w.disabled ) {
					tmp = parseInt(w.d.input.val(),10) - 1;
					if ( tmp >= o.dmin ) { w.d.input.val(tmp); }
                       			w.d.input.trigger('change');
				}
			});
			
			if ( typeof $.event.special.mousewheel !== 'undefined' ) { // Mousewheel operation, if plugin is loaded
				w.d.input.on('mousewheel', function(e,d) {
					e.preventDefault();
					if ( !w.disabled ) {
						tmp = parseInt(w.d.input.val(),10) + ((d<0)?-1:1);
						if ( tmp >= o.dmin && tmp <= o.dmax ) { w.d.input.val(tmp); }
                       				w.d.input.trigger('change');
					}
				});
			}
		},
		disable: function(){
			// Disable the element
			this.d.input.attr("disabled",true);
			this.d.input.addClass("ui-disabled").blur();
			this.disabled = true;
		},
		enable: function(){
			// Enable the element
			this.d.input.attr("disabled", false);
			this.d.input.removeClass("ui-disabled");
			this.disabled = false;
		}
	});
	  
	$( document ).bind( "pagecreate create", function( e ){
		$.mobile.spinbox.prototype.enhanceWithin( e.target, true );
	});
})( jQuery );
