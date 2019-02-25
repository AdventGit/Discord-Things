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

scrollToBottom.prototype.guildTarget = function() {
  return $('div.guild-1EfMGQ');
};
scrollToBottom.prototype.guildDMTarget = function() {
  return $('span.dms-rcsEnV');
};
scrollToBottom.prototype.channelTarget = function() {
  return $('div.wrapper-KpKNwI');
};
scrollToBottom.prototype.dmTarget = function() {
  return $('div.channel-2QD9_O a');
};
scrollToBottom.prototype.scrollTarget = function() {
  return $('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG');
};

scrollToBottom.prototype.hookGuild = function() {
  if (scrollToBottom.prototype.guildTarget().length !== 0) {
    scrollToBottom.prototype.guildTarget().on('click.scroll', function() {
      scrollToBottom.prototype.scrollInstant();
    });
  } else {
    setTimeout(function() {
      scrollToBottom.prototype.hookGuild();
    },200);
  };
};
scrollToBottom.prototype.hookDMGuild = function() {
  if (scrollToBottom.prototype.guildDMTarget().length !== 0) {
    scrollToBottom.prototype.guildDMTarget().on('click.scroll', function() {
      scrollToBottom.prototype.scrollInstant();
    });
  } else {
    setTimeout(function() {
      scrollToBottom.prototype.hookDMGuild();
    },200);
  };
};
scrollToBottom.prototype.hookChannel = function() {
  if (scrollToBottom.prototype.channelTarget().length !== 0) {
    scrollToBottom.prototype.channelTarget().on('click.scroll', function() {
      scrollToBottom.prototype.scrollInstant();
    });
  } else {
    setTimeout(function() {
      scrollToBottom.prototype.hookChannel();
    },200);
  };
};
scrollToBottom.prototype.hookDM = function() {
  if (scrollToBottom.prototype.dmTarget().length !== 0) {
    scrollToBottom.prototype.dmTarget().on('click.scroll', function() {
      scrollToBottom.prototype.scrollInstant();
    });
  } else {
    setTimeout(function() {
      scrollToBottom.prototype.hookDM();
    },200);
  };
};

scrollToBottom.prototype.hook = function() {
  scrollToBottom.prototype.hookGuild();
  scrollToBottom.prototype.hookDMGuild();
  scrollToBottom.prototype.hookChannel();
  scrollToBottom.prototype.hookDM();
};
scrollToBottom.prototype.unhook = function() {
  scrollToBottom.prototype.guildTarget().off('click.scroll');
  scrollToBottom.prototype.guildDMTarget().off('click.scroll');
  scrollToBottom.prototype.channelTarget().off('click.scroll');
  scrollToBottom.prototype.dmTarget().off('click.scroll');
};

scrollToBottom.prototype.scrollInstant = function() {
  if (scrollToBottom.prototype.scrollTarget().scrollTop() != ((scrollToBottom.prototype.scrollTarget()[0].scrollHeight) - (scrollToBottom.prototype.scrollTarget().height()))) {
    scrollToBottom.prototype.scrollTarget().scrollTop(((scrollToBottom.prototype.scrollTarget()[0].scrollHeight) - (scrollToBottom.prototype.scrollTarget().height())));
  } else {
    scrollToBottom.prototype.scrollTimed();
  };
};
scrollToBottom.prototype.scrollTimed = function() {
  setTimeout(function() {
    if (scrollToBottom.prototype.scrollTarget().scrollTop() != ((scrollToBottom.prototype.scrollTarget()[0].scrollHeight) - (scrollToBottom.prototype.scrollTarget().height()))) {
      scrollToBottom.prototype.scrollTarget().scrollTop(((scrollToBottom.prototype.scrollTarget()[0].scrollHeight) - (scrollToBottom.prototype.scrollTarget().height())));
      scrollToBottom.prototype.scrollInstant();
    }
  },1);
};

scrollToBottom.prototype.start = function() {
  scrollToBottom.prototype.hook();
};

scrollToBottom.prototype.stop = function() {
  scrollToBottom.prototype.unhook();
};