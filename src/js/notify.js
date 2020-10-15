import { error, notice, success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default {
  error(data) {
    error({
      title: 'Oh No!',
      text: `${data.message}`,
      delay: 1500,
    });
  },
  noticeAnyMatches() {
    notice({
      title: 'Nothing hepens',
      text: "Can't find any matches, try change your request",
      delay: 1500,
    });
  },
  noticeEmpty() {
    notice({
      title: 'Empty imput',
      text: 'Please imput something',
      delay: 1500,
    });
  },
  noticeSucces() {
    success({
      title: 'okay =)',
      text: 'Your query is successful =)',
      delay: 1500,
    });
  },
};
