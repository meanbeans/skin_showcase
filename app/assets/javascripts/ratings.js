$(document).ready(function() {
  var Rating = function(object) {
    this.number = parseInt(object.number);
    this.$selector = object.selector
  }

  Rating.all = [];
  Rating.getIndexFromClassName = function(selector) {
    // example class name: "rating-star sr-1"
    return $(selector).attr('class').split(' ')[1].split('-')[1];
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
    this.colorStars();
    this.discolorStars();
  };
  Rating.prototype.colorStars = function() {
    var currentIndex;
    var self = this;
    $(self.$selector).on('mouseenter', function() {
      Rating.all.forEach(function(r) {
        if (r.number <= self.number) {
          $(r.$selector).addClass('rating-star-hover');
        }
      });
    });
  };
  Rating.prototype.discolorStars = function() {
    var currentIndex;
    var self = this;
    $(self.$selector).on('mouseleave', function() {
      Rating.all.forEach(function(r) {
        if (r.number <= self.number) {
          $(r.$selector).removeClass('rating-star-hover');
        }
      });
    });
  };

  Rating.initialize();
})
