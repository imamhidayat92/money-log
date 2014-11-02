MoneyLog.Router.map(function() {
	this.resource('transactions');
});

MoneyLog.ApplicationRoute = Ember.Route.extend(MoneyLog.ViewLazyLoaderMixin, {

});

MoneyLog.TransactionsRoute = Ember.Route.extend(MoneyLog.ViewLazyLoaderMixin, {
	model: function() {
		console.log(Ember.TEMPLATES);

		return [
			{
				id: 1,
				amount: 10000,
				category: {
					id: 1,
					name: 'Normal'
				}
			},
			{
				id: 2,
				amount: -1000,
				category: {
					id: 1,
					name: 'Normal'
				}
			},
			{
				id: 3,
				amount: -2000,
				category: {
					id: 1,
					name: 'Normal'
				}
			}
		];
	}
});