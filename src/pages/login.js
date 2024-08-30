import React from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_KEY,
  process.env.REACT_APP_SUPABASE_CLIENT_ID
);

function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_IN") {
      navigate("/");
    } else {
      navigate("/success");
    }
  });

  return (
    <div className="login-wrapper">
      <div className="login">
        <Auth
          className="auth"
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google", "facebook"]}
        />
      </div>{" "}
    </div>
  );
}
export default Login;
