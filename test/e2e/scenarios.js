'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

  it('should redirect index.html to index.html#/phones', function() {
<<<<<<< HEAD
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/phones');
      });
=======
    browser().navigateTo('app/index.html');
    expect(browser().location().url()).toBe('/phones');
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01
  });


  describe('Phone list view', function() {

    beforeEach(function() {
<<<<<<< HEAD
      browser.get('app/index.html#/phones');
=======
      browser().navigateTo('app/index.html#/phones');
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01
    });


    it('should filter the phone list as user types into the search box', function() {
<<<<<<< HEAD

      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(8);
=======
      expect(repeater('.phones li').count()).toBe(20);

      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);

      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(8);
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01
    });


    it('should be possible to control phone order via the drop down select box', function() {
<<<<<<< HEAD

      var phoneNameColumn = element.all(by.repeater('phone in phones').column('{{phone.name}}'));
      var query = element(by.model('query'));

      function getNames() {
        return phoneNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

      query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi",
        "MOTOROLA XOOM\u2122"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

      expect(getNames()).toEqual([
        "MOTOROLA XOOM\u2122",
        "Motorola XOOM\u2122 with Wi-Fi"
      ]);
=======
      input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                   "MOTOROLA XOOM\u2122"]);

      select('orderProp').option('Alphabetical');

      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["MOTOROLA XOOM\u2122",
                   "Motorola XOOM\u2122 with Wi-Fi"]);
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01
    });


    it('should render phone specific links', function() {
<<<<<<< HEAD
      var query = element(by.model('query'));
      query.sendKeys('nexus');
      element.all(by.css('.phones li a')).first().click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/phones/nexus-s');
      });
=======
      input('query').enter('nexus');
      element('.phones li a').click();
      expect(browser().location().url()).toBe('/phones/nexus-s');
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01
    });
  });


  describe('Phone detail view', function() {

    beforeEach(function() {
<<<<<<< HEAD
      browser.get('app/index.html#/phones/nexus-s');
=======
      browser().navigateTo('app/index.html#/phones/nexus-s');
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01
    });


    it('should display nexus-s page', function() {
<<<<<<< HEAD
      expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
=======
      expect(binding('phone.name')).toBe('Nexus S');
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01
    });


    it('should display the first phone image as the main phone image', function() {
<<<<<<< HEAD
      expect(element(by.css('img.phone.active')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
=======
      expect(element('img.phone.active').attr('src')).toBe('img/phones/nexus-s.0.jpg');
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01
    });


    it('should swap main image if a thumbnail image is clicked on', function() {
<<<<<<< HEAD
      element(by.css('.phone-thumbs li:nth-child(3) img')).click();
      expect(element(by.css('img.phone.active')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);

      element(by.css('.phone-thumbs li:nth-child(1) img')).click();
      expect(element(by.css('img.phone.active')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
=======
      element('.phone-thumbs li:nth-child(3) img').click();
      expect(element('img.phone.active').attr('src')).toBe('img/phones/nexus-s.2.jpg');

      element('.phone-thumbs li:nth-child(1) img').click();
      expect(element('img.phone.active').attr('src')).toBe('img/phones/nexus-s.0.jpg');
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01
    });
  });
});
