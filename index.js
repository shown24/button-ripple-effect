'use strict';
;(() =>
{
	require('./ripple-effect.scss');

	class RippleEffect {
		constructor()
		{
			this.init();
		}

		init()
		{
			let self = this;
			if(document.querySelectorAll('.__ripple-eff').length)
			{
				let list = document.querySelectorAll('.__ripple-eff');
				for(let i = 0; i < list.length; i++)
				{
					list[i].addEventListener('click', function(e)
					{
						if(this.classList.contains('disabled') || this.disabled === true)
						{
							return false;
						}
						let c = this.querySelector('.__ripple-eff_circle');
						if(!c)
						{
							c = document.createElement('span');
							c.classList.add('__ripple-eff_circle');
							this.appendChild(c);
						}
						c.classList.remove('__replay');
						if(!c.style.height && !c.style.width)
						{
							let d = Math.max(this.outerHeight || this.offsetHeight, this.outerWidth || this.offsetWidth);
							c.style.width = (d || 300) + 'px';
							c.style.height = (d || 300) + 'px';
						}
						let x = e.pageX - self.getCoords(this).left - parseInt(c.style.width) / 2,
						    y = e.pageY - self.getCoords(this).top - parseInt(c.style.height) / 2;
						c.style.top = y + 'px';
						c.style.left = x + 'px';
						c.classList.add('__replay');
					});
				}
			}
			else
			{
				console.log('You must add class "__ripple-eff" for your buttons');
			}
		}

		getCoords(elem)
		{
			var box = elem.getBoundingClientRect();

			var body = document.body;
			var docEl = document.documentElement;

			var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
			var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

			var clientTop = docEl.clientTop || body.clientTop || 0;
			var clientLeft = docEl.clientLeft || body.clientLeft || 0;

			var top = box.top + scrollTop - clientTop;
			var left = box.left + scrollLeft - clientLeft;

			return {top: Math.round(top), left: Math.round(left)};
		}
	}
	return new RippleEffect();
})
();
