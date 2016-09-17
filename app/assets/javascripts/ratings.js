$(document).ready(function() {
  var Rating = function(object) {
    this.number = parseInt(object.number);
    this.$selector = object.selector
  }

  Rating.rated = { status: false, number: 0 };
  Rating.all = [];
  Rating.getIndexFromClassName = function(selector) {
    // example class name: "rating-star sr-1"
    return $(selector).attr('class').split(' ')[1].split('-')[1];
  };
  Rating.rate = function(number) {
    Rating.rated.status = true;
    Rating.rated.number = number;
  };
  Rating.restoreRating = function() {
    Rating.colorStars(Rating.rated.number);
  };
  Rating.colorStars = function(number) {
    Rating.all.forEach(function(r) {
      if (r.number <= number) {
        $(r.$selector).addClass('rating-star-hover');
      }
    });
  };
  Rating.discolorStars = function() {
    Rating.all.forEach(function(r) {
      console.log(r);
      $(r.$selector).removeClass('rating-star-hover');
    });
  };
  Rating.initialize = function() {
    var classIndex, ratingObject, rating;
    var ratings = [];
    $('.rating-star').each(function() {
      classIndex = Rating.getIndexFromClassName(this);
      ratingObject = { number: classIndex, selector: this };
      rating = new Rating(ratingObject);
      rating.initialize();
      ratings.push(rating);
    });
    Rating.all = ratings;
  };

  Rating.prototype.initialize = function() {
    this.onHover();
    this.offHover();
    this.onClick();
  };
  Rating.prototype.onHover = function() {
    var self = this;
    $(self.$selector).on('mouseenter', function() {
      Rating.discolorStars();
      Rating.colorStars(self.number);
    });
  };
  Rating.prototype.offHover = function() {
    var self = this;
    $(self.$selector).on('mouseleave', function() {
      Rating.discolorStars();

      if (Rating.rated.status) {
        Rating.restoreRating();
      }
    });
  };

  Rating.prototype.onClick = function() {
    var self = this;
    $(self.$selector).on('click', function() {
      Rating.rate(self.number);
      self.save();
    });
  };
  Rating.prototype.save = function() {

  };

  Rating.initialize();
})
