import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./i18n";
import "./scss/style.scss";
import "react-phone-number-input/style.css";
import "react-chat-elements/dist/main.css";
import { auth } from "./services/firebase";
import { thunks } from "./store";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import i18next from "./i18n";

// Toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loading = (
  <div className="pt-3 text-center bg-slate-50">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Components
import { ProtectedRoute, Modal } from "./components";

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Page404Error = React.lazy(() =>
  import("./views/pages/page404/404ErrorPage")
);
// const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const LoginPage = React.lazy(() => import("./views/pages/login/LoginPage"));

function App() {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  // Language change
  useEffect(() => {
    const savedLocale = Cookies.get("LawWebcurrentLocale");
    if (savedLocale) {
      i18next.changeLanguage(savedLocale);
      // window.location.reload();
    }
  },[]);

  // Check if user is logged in
  useEffect(() => {
    let isSubscribed = true;
    auth.onAuthStateChanged((user) => {
      if (isSubscribed && user) {
        dispatch(thunks.user.userLogin(user));
      }
    });
    return () => (isSubscribed = false);
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name = {t("login_page")}
            render={(props) => <LoginPage {...props} />}
          />
          <Route
            exact
            path="/404"
            name= {t("page_not_found")}
            render={(props) => <Page404Error {...props} />}
          />
          <ProtectedRoute
            isLoggedIn={false}
            path="/law-admin"
            name={t("admin_dashboard")}
            render={(props) => <DefaultLayout {...props} />}
          />
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
