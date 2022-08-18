import React from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { auth } from "src/api/firebase";

// Components
const NavigationBar = React.lazy(() =>
  import("../../../components/common/NavigationBar")
);
const FooterComponent = React.lazy(() =>
  import("../../../components/common/FooterComponent")
);
const LoginSection = React.lazy(() => import("./LoginSection"));

/**
 * @returns Login page
 */
export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Check if the user is already logged in and if logged in redirect to user home page
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(thunks.user.userLogin(user));
        history.push("/law-admin");
      }
    });
  }, []);
  return (
    <>
      <div className="h-screen">
        <div className="relative bg-white overflow-hidden">
          <NavigationBar activeNav="Log in" />
          <LoginSection />
        </div>
        {/* <FooterComponent /> */}
      </div>
    </>
  );
}
