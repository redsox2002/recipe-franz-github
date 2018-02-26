"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;

    if (document.getElementsByClassName('mail-status unread').length > 0) {
      count = 1;
    }

    // set Franz badge
    Franz.setBadge(0, count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
