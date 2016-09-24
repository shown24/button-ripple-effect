'use strict';

(function(){
	function RippleEffect()
	{
		this.init();
	}
	RippleEffect.prototype.init = function()
	{
		if(document.querySelectorAll('.__ripple-eff').length) {
			var list = document.querySelectorAll('.__ripple-eff');
			Array.prototype.map.apply(list, function(i){
				console.log(i);
			})
		} else {
			console.log('You must add class "__ripple-eff" for your buttons');
		}
	};
	return new RippleEffect();
})();
