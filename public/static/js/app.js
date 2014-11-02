MoneyLog = Ember.Application.create({
	LOG_TRANSITIONS: true,

	// Extremely detailed logging, highlighting every internal
	// step made while transitioning into a route, including
	// `beforeModel`, `model`, and `afterModel` hooks, and
	// information about redirects and aborted transitions
	LOG_TRANSITIONS_INTERNAL: true,

	LOG_VIEW_LOOKUPS: true
});

MoneyLog.ViewLazyLoaderMixin = Ember.Mixin.create({
	beforeModel: function() {
		var templateName = this.get('routeName');
		var templateFileUrl = '/money-log/public/static/js/templates/' + templateName + '.hbs';

		return $.ajax({url: templateFileUrl, dataType: 'text'}).then(function(data) {
			console.log('Processing mixin: ' + templateName);
			Ember.TEMPLATES[templateName] = Ember.Handlebars.compile(data);
		});
	}
}) ;
