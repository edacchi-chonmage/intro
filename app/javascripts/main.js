var Modal = function ($base) {
	this.$body = $(document.body);
	this.$base = $base;
	this.$window = this.$base.find('.jsc-modal-window');
	this.$trigger = this.$base.find('.jsc-modal-trigger');
	this.$filter = $('<div>');

	this.ANIMATION = {
		DURATION: 300
	};

	this.init();
};
Modal.prototype = {
	init: function () {
		this.prepareModal();
		this.bindEvents();
	},
	bindEvents: function () {
		var _this = this;

		this.$trigger.on('click', function () {
			_this.show();
		});
	},
	prepareModal: function () {
		this.$filter.css({
			position: 'fixed',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: 'none',
			background: 'rgba(0, 0, 0, 0.8)',
			opacity: 0
		});

		this.$body
			.append(this.$filter)
			.append(this.$window);
	},
	show: function () {
		this.$filter.show().stop().animate({
			opacity: 1
		}, this.ANIMATION.DURATION);
		this.$window.show().stop().animate({
			opacity: 1
		}, this.ANIMATION.DURATION);
	},
	hide: function () {
		this.$filter.stop().animate({
			opacity: 0
		}, this.ANIMATION.DURATION, $.proxy(function () {
			this.$filter.hide();
		}, this));
		this.$window.stop().animate({
			opacity: 0
		}, this.ANIMATION.DURATION, $.proxy(function () {
			this.$window.hide();
		}, this));
	}
};

var PanelistManager = function ($base) {
	this.$base = $base;
	this.modal = new Modal(this.$base);
	console.log(this.$base);
	this.$name = this.modal.$window.find('.jsc-panelist-name');

	this.TEXT = {
		YOU: 'You :)'
	};

	this.init();
};
PanelistManager.prototype = {
	init: function () {
		this.bindEvents();
	},
	bindEvents: function () {
		var _this = this;

		this.modal.$trigger.on('click', function () {
			_this.changePanelist();
		});
	},
	changePanelist: function () {
		// panelist type
		if (true) {
			this.changePanelist2You();
		} else {
			this.changePanelist2Other();
		}
	},
	changePanelist2You: function () {
		this.$name
			.text(this.TEXT.YOU)
			.removeClass('other')
			.addClass('you');
	},
	changePanelist2Other: function () {
		console.log(this.$name.length);
		this.$name
			// FIXME
			.text('Nakao')
			.removeClass('you')
			.addClass('other');
	}
};

$(function () {
	new PanelistManager($('#jsi-panelist'));
});
