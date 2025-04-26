import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "@/style";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus } from "@/reducer/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password, error } = useSelector((state) => state.validate);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);

  const submitForm = (data) => {
    // dispatch(setCredentials(data));
    dispatch(loginStatus({ email: data.email, token: "fake-token" }));
    navigate("/user/auth/dashboard/1");
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email*</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email")}
          />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password*</Label>
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
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>

          <a
            href="#"
            className="ml-auto text-sm underline-offset-4 hover:underline text-purple-700"
            onClick={() => {
              navigate("/user/unauth/forgetpassword");
            }}
          >
            Forgot your password?
          </a>
        </div>

        <Button
          type="submit"
          className={`${styles.bgCustom} w-full hover:opacity-90 text-white cursor-pointer`}
        >
          SignIn
        </Button>
      </div>

      <div className="text-center text-sm cursor-pointer">
        Don&apos;t have an account?{" "}
        <a
          className="underline underline-offset-4 text-purple-700"
          onClick={() => {
            navigate("/user/unauth/register");
          }}
        >
          Sign up
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
