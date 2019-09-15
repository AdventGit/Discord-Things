//META { "name": "scrollToBottom" } *//
const scrollToBottom = function(){};

//BD Information
scrollToBottom.prototype.getName = function() {
  return 'scrollToBottom';
};
scrollToBottom.prototype.getDescription = function() {
  return 'When entering any channel with chat; scrolls to the bottom.';
};
scrollToBottom.prototype.getVersion = function() {
  return '2.1';
};
scrollToBottom.prototype.getAuthor = function() {
  return 'AdventDiscord (square inspired)';
};

//Elements I target
scrollToBottom.prototype.guildTarget = function() {
  return $('div.listItem-2P_4kh');
};
scrollToBottom.prototype.channelTarget = function() {
  return $('div.wrapper-1ucjTd');
};
scrollToBottom.prototype.dmTarget = function() {
  return $('a.channel-2QD9_O');
};
scrollToBottom.prototype.scrollTarget = function() {
  return $('div.messagesWrapper-3lZDfY div.scrollerWrap-2lJEkd div.scroller-2FKFPG');
};
scrollToBottom.prototype.windowMutationTarget = function() {
  return $('div.chat-3bRxxu');
};
scrollToBottom.prototype.channelMutationTarget = function() {
  return $('div.container-PNkimc div.scrollerWrap-2lJEkd div.scroller-2FKFPG');
};
scrollToBottom.prototype.channelsMutationTarget = function() {
  return $('div.container-PNkimc');
};

//Hooks
scrollToBottom.prototype.hookGuild = function() {
  if (scrollToBottom.prototype.guildTarget() !== 0) {
    scrollToBottom.prototype.guildTarget().on('click.scroll', function() {
      scrollToBottom.prototype.scrollInstant();
    });
  } else {
    setTimeout(function() {
      scrollToBottom.prototype.guildTarget().on('click.scroll', function() {
        scrollToBottom.prototype.scrollInstant();
      });
    },1);
  };
};
scrollToBottom.prototype.hookChannel = function() {
  if (scrollToBottom.prototype.guildTarget() !== 0) {
    scrollToBottom.prototype.channelTarget().on('click.scroll', function() {
      scrollToBottom.prototype.scrollInstant();
    });
  } else {
    setTimeout(function() {
      scrollToBottom.prototype.guildTarget().on('click.scroll', function() {
        scrollToBottom.prototype.scrollInstant();
      });
    },1);
  };
};
scrollToBottom.prototype.hookDM = function() {
  if (scrollToBottom.prototype.guildTarget() !== 0) {
    scrollToBottom.prototype.dmTarget().on('click.scroll', function() {
      scrollToBottom.prototype.scrollInstant();
    });
  } else {
    setTimeout(function() {
      scrollToBottom.prototype.guildTarget().on('click.scroll', function() {
        scrollToBottom.prototype.scrollInstant();
      });
    },1);
  };
};
scrollToBottom.prototype.hook = function() {
  scrollToBottom.prototype.hookGuild();
  scrollToBottom.prototype.hookChannel();
  scrollToBottom.prototype.hookDM();
};
scrollToBottom.prototype.unhook = function() {
  scrollToBottom.prototype.guildTarget().off('click.scroll');
  scrollToBottom.prototype.channelTarget().off('click.scroll');
  scrollToBottom.prototype.dmTarget().off('click.scroll');
};

//Scrollers
scrollToBottom.prototype.scrollInstant = function() {
  try {
    if (scrollToBottom.prototype.scrollTarget().scrollTop() != ((scrollToBottom.prototype.scrollTarget()[0].scrollHeight) - (scrollToBottom.prototype.scrollTarget().height()))) {
      scrollToBottom.prototype.scrollTarget().scrollTop(((scrollToBottom.prototype.scrollTarget()[0].scrollHeight) - (scrollToBottom.prototype.scrollTarget().height())));
    } else {
      scrollToBottom.prototype.scrollTimed();
    };
  } catch {}
};
scrollToBottom.prototype.scrollTimed = function() {
  try {
    setTimeout(function() {
      if (scrollToBottom.prototype.scrollTarget().scrollTop() != ((scrollToBottom.prototype.scrollTarget()[0].scrollHeight) - (scrollToBottom.prototype.scrollTarget().height()))) {
        scrollToBottom.prototype.scrollTarget().scrollTop(((scrollToBottom.prototype.scrollTarget()[0].scrollHeight) - (scrollToBottom.prototype.scrollTarget().height())));
        scrollToBottom.prototype.scrollInstant();
      };
    },1);
  } catch {}
};

//Mutation Observers for element reloads
scrollToBottom.prototype.rehookObserver = new MutationObserver(function(mutations) {
  scrollToBottom.prototype.unhook();
  scrollToBottom.prototype.hook();
});
scrollToBottom.prototype.rehookScrollObserver = new MutationObserver(function(mutations) {
  scrollToBottom.prototype.unhook();
  scrollToBottom.prototype.hook();
  scrollToBottom.prototype.scrollInstant();
});
scrollToBottom.prototype.mutationTargetWatches = function() {
  scrollToBottom.prototype.rehookScrollObserver.observe(scrollToBottom.prototype.windowMutationTarget().get(0), {
    attributeOldValue: false,
    attributes: false,
    characterData: false,
    characterDataoldValue: false,
    childList: true,
    subtree: false
  });
  scrollToBottom.prototype.rehookObserver.observe(scrollToBottom.prototype.channelsMutationTarget().get(0), {
    attributeOldValue: false,
    attributes: false,
    characterData: false,
    characterDataoldValue: false,
    childList: true,
    subtree: true
  });
  scrollToBottom.prototype.rehookObserver.observe(scrollToBottom.prototype.channelMutationTarget().get(0), {
    attributeOldValue: false,
    attributes: false,
    characterData: false,
    characterDataoldValue: false,
    childList: true,
    subtree: false
  });
};

//Init
scrollToBottom.prototype.init = function() {
  $(function() {
    try {
      scrollToBottom.prototype.hook();
      scrollToBottom.prototype.mutationTargetWatches();
      scrollToBottom.prototype.scrollInstant();
    } catch {
      setTimeout(function() {
        scrollToBottom.prototype.init();
      },200);
    };
  });
};

//Start
scrollToBottom.prototype.start = function() {
  scrollToBottom.prototype.init();
};

//Stop
scrollToBottom.prototype.stop = function() {
  scrollToBottom.prototype.unhook();
  scrollToBottom.prototype.rehookObserver.disconnect();
  scrollToBottom.prototype.rehookScrollObserver.disconnect();
};