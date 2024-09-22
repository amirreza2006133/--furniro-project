import iziToast from "izitoast";
import doneIcon from "../../img/icons/done.png";

class NotificationView {
  _notificationSettings = {
    timeout: 5000,
  };

  success(message) {
    iziToast.show({
      ...this._notificationSettings,
      class: "notification success",
      message,
      color: "#008000",
      iconUrl: doneIcon,
    });
  }
}

export default new NotificationView();
