//META { "name": "scrollToLast" } *//

(function($) {
  $.fn.scrollToBottom = function() {
    return this.each(function (i, element) {
      $(element).scrollTop(Number.MAX_SAFE_INTEGER);
    });
  };
}(jQuery));

const scrollToLast = function() {

  var onSwitch, cancels = [];
  
  onSwitch = ({methodArguments: [ev]}) => {
    if(("CHANNEL_SELECT" === ev.type || "GUILD_SELECT" === ev.type) && /^\/channels\/(?:@me|\d+)\/\d+$/.test(window.location.pathname))
      var isDone = "False";
      var intr = setInterval(function() {
        if ($('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG')[0].scrollHeight - $('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG').scrollTop() == $('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG').outerHeight()) {
          isDone = "True";
        }
        $('.messagesWrapper-3lZDfY .scrollerWrap-2lJEkd .scroller-2FKFPG').scrollToBottom();
        if (isDone == "True") clearInterval(intr);
      },1000);
  };

  return {
    getName: () => "Scroll-To-Last",
    getDescription: () => "When entering any text channel, scrolls to the bottom and marks it as read.",
    getAuthor: () => "square",
    getVersion: () => "1.0.2",

    start: () => {
      cancels.push(BdApi.monkeyPatch(
        BdApi.findModule(m => m._actionHandlers && m._actionHandlers.CHANNEL_SELECT)._actionHandlers,
        "CHANNEL_SELECT", {before: onSwitch}
      ));
      cancels.push(BdApi.monkeyPatch(
        BdApi.findModule(m => m._actionHandlers && m._actionHandlers.GUILD_SELECT)._actionHandlers,
        "GUILD_SELECT", {before: onSwitch}
      ));
    },

    stop: () => {
      cancels.forEach(c => c());
      cancels = [];
    }
  };
};