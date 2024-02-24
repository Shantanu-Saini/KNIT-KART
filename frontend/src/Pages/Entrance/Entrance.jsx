import React, { useState } from 'react';
import style from './Entrance.module.css';
import { Link } from 'react-router-dom';

import Lottie from "react-lottie";
import loginLottie from '../../assets/lottieFiles/loginLottie'
import signupLottie from '../../assets/lottieFiles/signupLottie'
const Entrance = () => {

    const defaultOptionsLogin = {
        loop: false,
        autoplay: true,
        animationData: loginLottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptionsSignup = {
        loop: true,
        autoplay: true,
        animationData: signupLottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const [isLogin, setIsLogin] = useState({
        login: false,
        headingText: "Already have an account ?",
        buttonText: "Signin here",
        compon: <Lottie
            options={defaultOptionsSignup}
            height={500}
            width={500}
        />
    });

    const handleToggle = () => {
        if (isLogin.login) {
            setIsLogin({
                login: false,
                compon: <Lottie
                    options={defaultOptionsSignup}
                    height={500}
                    width={500}
                />
            });
        } else {
            setIsLogin({
                login: true,
                compon: <Lottie
                    options={defaultOptionsLogin}
                    height={500}
                    width={500}
                />
            });
        }
        console.log(isLogin.login);
    };

    // {/* <div className={`bg-white  absolute top-0 w-full h-full z-10 ${!isLogin.login ? style['login-slide'] : style['signup-slide']}`}>
    //                         {/* Slider Window */}
    //                         <div className={style['slider-window']}>
    //                                 {isLogin.compon}
    //                         </div>
    //                     </div> */}

    return (
        <div className='flex items-center justify-center h-96'>

            <div className={style["flip-card"]}>
                <div className={`${style["flip-card-inner"]} ${!isLogin.login ? 'flipping' : ''}`}>

                    <div className={style["flip-card-front"]}>

                        {/* Log In Section */}
                        <div className='w-96 relative items-center space-y-3'>
                            <form className={style.form}>
                                <p className={style.title}>Log In </p>
                                <label>
                                    <input className={style.input} type="email" placeholder="" required="" />
                                    <span>Email</span>
                                </label>

                                <label>
                                    <input className={style.input} type="password" placeholder="" required="" />
                                    <span>Password</span>
                                </label>                        <button className={style.submit}>Submit</button>
                                <p className={style.signin}>Don't have an account yet?   <Link onClick={handleToggle}>Signup here.</Link> </p>
                            </form>
                        </div>

                    </div>


                    <div className={style["flip-card-back"]}>


                        {/* Sign Up Section */}
                        <div className='w-96 space-y-3 rounded-3xl'>
                            <form className={style.form}>
                                <p className={style.title}>Register </p>
                                <p className={style.message}>Signup now and get full access to our app. </p>
                                <div className={style.flex}>
                                    <label>
                                        <input className={style.input} type="text" placeholder="" required="" />
                                        <span>Firstname</span>
                                    </label>

                                    <label>
                                        <input className={style.input} type="text" placeholder="" required="" />
                                        <span>Lastname</span>
                                    </label>
                                </div>

                                <label>
                                    <input className={style.input} type="email" placeholder="" required="" />
                                    <span>Email</span>
                                </label>

                                <label>
                                    <input className={style.input} type="password" placeholder="" required="" />
                                    <span>Password</span>
                                </label>
                                <label>
                                    <input className={style.input} type="password" placeholder="" required="" />
                                    <span>Confirm password</span>
                                </label>
                                <button className={style.submit}>Submit</button>
                                <p className={style.signin}>Already have an account ?   <Link onClick={handleToggle}>Signin here.</Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Entrance;