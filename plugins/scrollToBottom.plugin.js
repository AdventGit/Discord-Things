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

scrollToBottom.prototype.hookGuild = function() {
  if ($('div.guild-1EfMGQ').length !== 0) {
    $('div.guild-1EfMGQ').on('click.scroll', function() {
      scrollToBottom.prototype.scrollInstant();
    });
  } else {
    setTimeout(function() {
      scrollToBottom.prototype.hookGuild();
    },200);
  };
};
scrollToBottom.prototype.hookChannel = function() {
  if ($('div.wrapper-KpKNwI').length !== 0) {
    $('div.wrapper-KpKNwI').on('click.scroll', function() {
      scrollToBottom.prototype.scrollInstant();
    });
  } else {
    setTimeout(function() {
      scrollToBottom.prototype.hookChannel();
    },200);
  };
};
scrollToBottom.prototype.hook = function() {
  scrollToBottom.prototype.hookGuild();
  scrollToBottom.prototype.hookChannel();
};
scrollToBottom.prototype.unhook = function() {
  $('div.guild-1EfMGQ').off('click.scroll');
  $('div.wrapper-KpKNwI').off('click.scroll');
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
  },1);
};
scrollToBottom.prototype.waitScroller = function() {
  if ($('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG').length !== 0) {
    scrollToBottom.prototype.scrollInstant();
  } else {
    setTimeout(function() {
      scrollToBottom.prototype.waitScroller();
    },200);
  };
}
scrollToBottom.prototype.scrollInit = function() {
  scrollToBottom.prototype.hook();
  scrollToBottom.prototype.waitScroller();
}
scrollToBottom.prototype.start = function() {
  scrollToBottom.prototype.scrollInit();
};
scrollToBottom.prototype.stop = function() {
  scrollToBottom.prototype.unhook();
};