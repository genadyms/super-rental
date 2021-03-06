import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index');

test('it exists', function(assert) {
	let route = this.subject({
    	replaceWith(routeName) {
      		assert.equal(routeName, 'rentals', 'replace with route name rentals');
    	}
  	});
  	route.beforeModel();
});
