import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { useState } from "react";
import * as Components from "./Components";
import axios from "axios";
import "./styles.css";
import style from "./Entrance.module.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const [signIn, setSignIn] = useState(true);

  const [isLoginPage, setIsLoginPage] = useState({
    loginPage: true,
    class: "",
  });

  const loginToggle = () => {
    setIsLoginPage((prevState) => ({
      loginPage: !prevState.loginPage,
      class: prevState.loginPage ? "animate-signUp" : "animate-signIn",
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const contact = form.contact.value;

    const userData = {
      name,
      email,
      password,
      contact,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8000/user/register",
        userData,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (data.success) {
        toast.success(data.message);
        setSignIn(true);
        console.log(data);
        form.reset();
      } else {
        let message = data.message.message;
        let error = message
          .substring(message.indexOf(":") + 1)
          .replaceAll(",", "\n");
        toast.error(error);
      }
    } catch (e) {
      console.log(e);
      toast.error(e.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const userData = {
      email,
      password,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8000/user/login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        console.log(data);
        localStorage.setItem("token", JSON.stringify(data.data.token));
        toast.success(data.message);
        form.reset();
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Toaster />
      <div className={`${style["desktop-form"]} bg-background`}>
        <Components.Container>
          {/* desktop -form for signUp */}
          <Components.SignUpContainer $signin={signIn}>
            <Components.Form onSubmit={handleSignUp}>
              <Components.Title>Create Account</Components.Title>
              <Components.Input
                type="text"
                placeholder="Full Name"
                name="name"
                required
              />
              <Components.Input
                type="email"
                placeholder="Email(KNIT)"
                name="email"
                required
              />
              <Components.Input
                type="text"
                name="contact"
                placeholder="Contact No."
                required
              />
              <div className="flex bg-[rgb(238,238,238)] rounded w-full items-center relative h-fit" >
                <Components.Input

                  className="outline-none flex-grow px-4 border-black"
                  name="password"
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <GoEye className="" /> : <GoEyeClosed />}
                </button>
              </div>

              <Components.Button type="submit">Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          {/* // desktop -form for sign in */}
          <Components.SignInContainer $signin={signIn}>
            <Components.Form onSubmit={handleSignIn}>
              <Components.Title>Sign in</Components.Title>
              <Components.Input
                type="email"
                placeholder="Email(KNIT)"
                name="email"
              />
              <div className="flex bg-[rgb(238,238,238)] rounded w-full items-center relative">
                <Components.Input
                  className="outline-none flex-grow  px-4"
                  name="password"
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Password"
                  aria-label="Password input"
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <GoEye /> : <GoEyeClosed />}
                </button>
              </div>
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button type="submit">Sign In</Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer $signin={signIn}>
            <Components.Overlay $signin={signIn}>
              <Components.LeftOverlayPanel $signin={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => setSignIn(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel $signin={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter Your personal details and start journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => setSignIn(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>

      {/* mobile - form for sign up */}
      <div className={`${style["mobile-form"]} bg-background`}>
        <div className={`wrapper ${isLoginPage.class}`}>
          <div className="form-wrapper sign-Up">
            <form onSubmit={handleSignUp}>
              <h2>Sign Up</h2>
              <div className={style["input-group"]}>
                <input name="fullname" type="text" required />
                <label htmlFor="">Fullname</label>{" "}
                <i className="bx bxs-user"></i>
              </div>
              <div className={style["input-group"]}>
                <input name="email" type="email" required />
                <label htmlFor="">Email(KNIT)</label>{" "}
                <i className="bx bxs-user"></i>
              </div>
              <div className={style["input-group"]}>
                <input type="text" name="contact" required />
                <label htmlFor="">Contact No.</label>{" "}
                <i className="bx bxs-envelope"></i>
                <i className="bx bxs-user"></i>
              </div>
              <div className={`${style["input-group"]} flex justify-center`}>
                <input type={showPassword ? "text" : "password"} name="password" required />
                <label htmlFor="">Password</label>{" "}
                <i className="bx bxs-lock-alt"></i>
                <div onClick={toggleShowPassword} className="grid place-items-center">
                  {
                    (showPassword) ? <IoIosEye className="text-2xl cursor-pointer" /> : <IoIosEyeOff className="text-2xl cursor-pointer" />
                  }
                </div>
              </div>
              <button type="submit" className={style["btn"]}>
                Sign Up
              </button>

              <div className={style["Sign-link"]}>
                <p>
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={loginToggle}
                    className={style["SignIn-link"]}
                  >
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* mobile -form for sign in */}
          <div className="form-wrapper sign-in">
            <form onSubmit={handleSignIn}>
              <h2>Login</h2>
              <div className={style["input-group"]}>
                <input type="email" name="email" required />
                <label htmlFor="">Email</label> <i className="bx bxs-user"></i>
              </div>

              <div className={`${style["input-group"]} flex justify-center`}>
                <input type={showPassword ? "text" : "password"} name="password" required />
                <label htmlFor="">Password</label>{" "}
                <i className="bx bxs-lock-alt"></i>
                <div onClick={toggleShowPassword} className="grid place-items-center">
                  {
                    (showPassword) ? <IoIosEye className="text-2xl cursor-pointer" /> : <IoIosEyeOff className="text-2xl cursor-pointer" />
                  }
                </div>
              </div>
              <div className={style["forgot-password"]}>
                <a href="">Forgot Password?</a>
              </div>
              <button type="submit" className={style["btn"]}>
                Login
              </button>
              <div className={style["Sign-link"]}>
                <p>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    onClick={loginToggle}
                    className={style["SignUp-link"]}
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
