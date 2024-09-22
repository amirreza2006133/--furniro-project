import iziToast from "izitoast";
import doneIcon from "../../img/icons/done.png";
import infoIcon from "../../img/icons/info.png";

class NotificationView {
  _notificationSettings = {
    timeout: 5000,
    zindex: 999999999999999,
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

  info(message) {
    iziToast.show({
      ...this._notificationSettings,
      class: "notification info",
      message,
      color: "#228be6",
      iconUrl: infoIcon,
      timeout: 10000,
    });
  }
}

export default new NotificationView();
