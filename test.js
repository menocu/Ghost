  function bad1() {
    // ruleid: jquery-insecure-selector
    var item = '.item-' + window.location.hash;
    $(item).css({});
  }
