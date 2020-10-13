import { error, alert, notice } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default {
  notice() {
    notice({
      title: 'Regular Notice',
      text: "Check me out! I'm a notice.",
      delay: 200,
    });
  },
  error(data) {
    error({
      title: 'Oh No!',
      text: `${data.message}`,
    });
  },
};
