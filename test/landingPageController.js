// Tests for match api controller 

var expect = require('chai').expect;
var LandingPageController = require('../controllers/landing_page.js');
var fakePb = require('./fakePencilblue.js');

describe('Match api controller', function(){
  describe('#require', function(){
    it('Should have the correct properties', function() {
      var landingPageController= new LandingPageController(new fakePb());
      expect(landingPageController).to.have.a.property('prototype');
    });
  });
});



