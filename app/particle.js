var Snow = function (){
	this.$win = $(window);
	this.$body = $(document.body);
	this.degCurrent = 0;
	this.degStep = Math.random() * 5;
	this.size = 1 + (Math.random() * 3);
	this.startX = Math.random() * this.$win.width();
	this.x = Math.ceil(Math.random() * this.$win.width());
	this.y = 0;
	this.stepY = 1 + (Math.random() * 2);
	this.interval = null;
	this.opacity = 0.3 + Math.random();
	this.$element = $('<div>').css({
		position: 'absolute',
		left: this.x,
		top: this.y,
		width: this.size,
		height: this.size,
		background: '#fff',
		opacity: this.opacity
	});

	this.$body.append(this.$element);

	this.init();
};
Snow.prototype = {
	init: function () {
		this.move();
	},
	move: function () {
		var _this = this;

		this.interval = setInterval(function () {
			var
				rad = Math.PI / 180 * _this.degCurrent,
				x = _this.startX + 10 * Math.cos(rad);

			_this.$element.css({
				left: x,
				top: _this.y
			});

			_this.degCurrent += _this.degStep;
			_this.y += _this.stepY;

			_this.judgeToStop();
		}, 10);
	},
	judgeToStop: function () {
		if (this.y > this.$win.height()) {
			this.$element.remove();
			clearInterval(this.interval);
		}
	}
};

var Tonakai = function () {
	this.$win = $(window);
	this.$body = $(document.body);
	this.degCurrent = 0;
	this.degStep = Math.random() * 7.5;
	this.startX = Math.random() * this.$win.width();
	this.$image = $('<img src="/images/tonakaisan.png" class="tonakai" width="150">');
	this.x = -300;
	this.y = 0;
	this.stepX = 2 + (Math.random() * 10);
	this.startY = Math.random() * (this.$win.height() - this.$image.width())
	this.stepY = 1 + (Math.random() * 2);
	this.interval = null;
	this.opacity = 0.3 + Math.random();

	this.$image.css({
		position: 'absolute',
		left: this.x,
		top: this.startY
	});

	this.$body.append(this.$image);

	this.init();
};
Tonakai.prototype = {
	init: function () {
		this.move();
	},
	move: function () {
		var _this = this;

		this.interval = setInterval(function () {
			var
				rad = Math.PI / 180 * _this.degCurrent,
				deg = 45 + 10 * Math.cos(rad);

			_this.$image.css({
				transform: 'rotate(' + deg+ 'deg)',
				left: _this.x
			});

			_this.x += _this.stepX;
			_this.degCurrent += _this.degStep;
			_this.judgeToStop();
		}, 10);
	},
	judgeToStop: function () {
		if (this.x > this.$win.width()) {
			this.$image.remove();
			clearInterval(this.interval);
		}
	}
};

var loopSnow = function () {
	new Snow();

	setTimeout(function () {
		loopSnow();
	}, 100);
};

var loopTonakai = function () {
	new Tonakai();

	setTimeout(function () {
		loopTonakai();
	}, 700);
};

$(function () {
	// loopSnow();

	setTimeout(function () {
		$('#js-christmas').fadeIn(1000);
	}, 5000);
});

$(window).on('load', function () {
	// loopTonakai();
});
