import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "@/style";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/reducer/validate";
import { loginStatus } from "@/reducer/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const RegisterForm = () => {
  const { email, password, error } = useSelector((state) => state.validate);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state สำหรับ show/hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: email || "",
      password: password || "",
    },
  });

  const submitForm = (data) => {
    dispatch(setCredentials(data));
    dispatch(loginStatus({ email: data.email, token: "fake-token" }));
    navigate("/user/auth/dashboard");
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
          <Label htmlFor="Username">Username*</Label>
        </div>
        <Input />
      </div>

      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email*</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          {error?.email && (
            <p className="text-red-500 text-sm">Invalid email address</p>
          )}
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password*</Label>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: 8,
              })}
              className="pr-10"
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
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          {error?.password && (
            <p className="text-red-500 text-sm">
              Must be 8 or more characters long
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="passwordAgain">Password Again*</Label>
          </div>
          <div className="relative">
            <Input
              id="passwordAgain"
              type={showPasswordAgain ? "text" : "password"}
              {...register("passwordAgain", {
                required: "Password Again is required",
                minLength: 8,
              })}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPasswordAgain((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              tabIndex={-1}
            >
              {showPasswordAgain ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
          {errors.passwordAgain && (
            <p className="text-red-500 text-sm">{errors.passwordAgain.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className={`${styles.bgCustom} w-full hover:opacity-90 text-white`}
          onClick={() => {
            navigate("/user/unauth/login");
          }}
        >
          Signup
        </Button>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <a
            className="underline underline-offset-4 text-purple-700"
            onClick={() => {
              navigate("/user/unauth/login");
            }}
          >
            Sign in
          </a>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
