var Gradient = this.Gradient = Base.extend({
	beans: true,

	initialize: function() {
		this.setStops([
				new GradientStop('white', 0),
				new GradientStop('black', 1)]);
		this.type = 'linear';
	},

	getStops: function() {
		return this._stops;
	},

	setStops: function(stops) {
		if (stops.length < 2)
			throw new Error(
					'Gradient stop list needs to contain at least two stops.');
		this._stops = stops;
	}
});
