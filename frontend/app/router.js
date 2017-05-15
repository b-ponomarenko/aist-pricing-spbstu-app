import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('accessories');
  this.route('attributes');
  this.route('categories', function() {
    this.route('index', { path: '' });
    this.route('show', { path: '/:id' });
  });

  this.route('boiler', function() {
    this.route('wizard', function() {
      this.route('components', { path: '/wizard/:boilerId/components' });
      this.route('salary', { path: '/wizard/:boilerId/salary' })
    });
  });
});

export default Router;
