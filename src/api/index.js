import { auth, signInWithPhoneNumber } from "./firebase";

export default {
  user: {
    async login(phoneNumber) {
      // console.log(pohoneNumber, appVerifier);
    //  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //    .then((confirmationResult) => {
    //      console.log("Result", confirmationResult);
    //       // SMS sent. Prompt user to type the code from the message, then sign the
    //       // user in with confirmationResult.confirm(code).
    //       window.confirmationResult = confirmationResult;
    //       // ...
    //     })
    //    .catch((error) => {
    //      console.log(error);
    //       // Error; SMS not sent
    //       // ...
    //       // window.recaptchaVerifier.render().then(function(widgetId) {
    //       //   grecaptcha.reset(widgetId);
    //       // });
    //     });
    },
  },
};
