$(document).on('turbolinks:load', function() {
  var Helpful = function(object) {
    this.reviewId = object.reviewId;
    this.upvote = null; // will be 0 or 1
    this.$selector = object.selector;
  }

  Helpful.dataParse = function(object) {
    var data = $(object).data();
    return {
      reviewId: data.reviewId,
      upvote: data.upvote
    };
  };
  Helpful.initialize = function() {
    var helpful_object, helpful, dataParsed;
    $('.skin-review-footer-helpful-button').each(function() {
      dataParsed = Helpful.dataParse(this);
      helpful_object = {
        reviewId: dataParsed.reviewId,
        upvote: dataParsed.upvote,
        selector: this
      };
      helpful = new Helpful(helpful_object);
      helpful.initialize();
    });
  };

  Helpful.prototype.initialize = function() {
    this.onClick();
  };
  Helpful.prototype.onClick = function() {
    var self = this;
    console.log(self.$selector)
    $(self.$selector).on('click', function() {
      self.thankUser();
      self.save();
    });
  };
  Helpful.prototype.thankUser = function() {
    var self = this;
    $(self.$selector).parent().addClass('hide');
    $(self.$selector).parent().next().removeClass('hide');
  };
  Helpful.prototype.save = function() {

  };

  Helpful.initialize();
})
