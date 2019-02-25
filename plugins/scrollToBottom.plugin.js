//META { "name": "scrollToBottom" } *//
const scrollToBottom = function(){};

scrollToBottom.prototype.getName = function() {
  return 'scrollToBottom';
};
scrollToBottom.prototype.getDescription = function() {
  return 'When entering any text channel, scrolls to the bottom.';
};
scrollToBottom.prototype.getVersion = function() {
  return '1.1';
};
scrollToBottom.prototype.getAuthor = function() {
  return 'AdventDiscord (square inspired)';
};

scrollToBottom.prototype.scrollInstant = function() {
  if (($('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG')[0].scrollHeight - $('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG').scrollTop()) > ($('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG').outerHeight() + 1)) {
    $('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG').scrollTop(Number.MAX_SAFE_INTEGER);
  } else {
    scrollToBottom.prototype.scrollTimed();
  };
};
scrollToBottom.prototype.scrollTimed = function() {
  setTimeout(function() {
    if (($('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG')[0].scrollHeight - $('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG').scrollTop()) > ($('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG').outerHeight() + 1)) {
      $('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG').scrollTop(Number.MAX_SAFE_INTEGER);
      scrollToBottom.prototype.scrollTimed();
    }
  },1200);
};

scrollToBottom.prototype.start = function() {
  $('div.guild-1EfMGQ').on('click.scroll', function() {
    scrollToBottom.prototype.scrollInstant();
  });
  $('div.wrapper-KpKNwI').on('click.scroll', function() {
    scrollToBottom.prototype.scrollInstant();
  });
};
scrollToBottom.prototype.stop = function() {
  $('div.guild-1EfMGQ').off('click.scroll');
  $('div.wrapper-KpKNwI').off('click.scroll');
};