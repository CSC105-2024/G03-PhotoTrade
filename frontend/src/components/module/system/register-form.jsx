import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "@/style";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "@/reducer/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { signUpValidation } from "@/reducer/validate";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordAgain: '',
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { errorVal, userInfo, blankInput } = useSelector((state) => state.validate);
  const { isAuthenticated, success } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);


  const submitForm = (data) => {
    // dispatch(loginStatus({ email: data.email, token: "fake-token" }));
    const value = {
      name: data.name || '',
      email: data.email || '',
      password: data.password || '',
      passwordAgain: data.passwordAgain || '',
    }
    dispatch(signUpValidation(value))

    // const response = dispatch(createUser(data))
    // console.log(response);
    // if (success) {
    //   navigate('/')
    // }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your information to signup to your account
        </p>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="Username">Username</Label>
        </div>
        <Input 
          id="name"
          type="text"
          {...register("name")}
        />
        <p className="text-red-500 text-sm">{errorVal.name}</p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="text"
            placeholder="m@example.com"
            {...register("email")}
          />
          <p className="text-red-500 text-sm">{errorVal.email}</p>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              className="pr-10"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              tabIndex={-1}
            >
              {showPassword ? <EyeOffIcon size={15} /> : <EyeIcon size={15} />}
            </button>
          </div>
          {/* {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )} */}
          {/* {error?.password && (
            <p className="text-red-500 text-sm">
              Must be 8 or more characters long
            </p>
          )} */}
          <p className="text-red-500 text-sm">{errorVal.password}</p>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="passwordAgain">Password again</Label>
          </div>
          <div className="relative">
            <Input
              id="passwordAgain"
              type={showPasswordAgain ? "text" : "password"}
              className="pr-10"
              {...register("passwordAgain")}
            />
            <button
              type="button"
              onClick={() => setShowPasswordAgain((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              tabIndex={-1}
            >
              {showPasswordAgain ? <EyeOffIcon size={15} /> : <EyeIcon size={15} />}
            </button>
          </div>
          {/* {errors.passwordAgain && (
            <p className="text-red-500 text-sm">{errors.passwordAgain.message}</p>
          )} */}
          <p className="text-red-500 text-sm">{errorVal.password}</p>
        </div>

        <Button
          type="submit"
          className={`${styles.bgCustom} w-full hover:opacity-90`}
        >
          Signup
        </Button>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <a
            className="underline underline-offset-4 text-purple-700 cursor-pointer"
            onClick={() => {
              navigate("/user/unauth/login");
            }}
          >
            Sign in
          </a>
        </div>
      </div>
      {console.log('errors', errorVal)}
      {console.log('userInfo', userInfo)}
      {console.log('blankInput', blankInput)}
    </form>
  );
};

export default RegisterForm;
