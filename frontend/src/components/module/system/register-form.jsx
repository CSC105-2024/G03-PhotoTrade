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

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, 
    watch
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordAgain: '',
    },
    mode: "onBlur",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { success, loading } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);

  const submitForm = (data) => {
    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
    }

    dispatch(createUser(newData));
    if (success) {
      navigate('/');
    }
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
          {...register("name", { required: "Username is required" })}
        />
      </div>
      <p className="text-red-500 text-sm">{errors.name?.message}</p>

      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="text"
            placeholder="m@example.com"
            {...register("email", { 
              required: "Email is required", 
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format"
              }
            })}
          />
        </div>
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              className="pr-10"
              {...register("password", { 
                required: "Password is required", 
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                }
              })}
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
        </div>
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="passwordAgain">Confirm Password</Label>
          </div>
          <div className="relative">
            <Input
              id="passwordAgain"
              type={showPasswordAgain ? "text" : "password"}
              className="pr-10"
              {...register("passwordAgain", {
                required: "Please confirm your password",
                validate: (value) => value === watch('password') || "Passwords do not match"
              })}
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
          <p className="text-red-500 text-sm">{errors.passwordAgain?.message}</p>
        </div>

        {loading ? <div><span>Loading...</span></div> 
          :   <Button
                type="submit"
                className={`${styles.bgCustom} w-full hover:opacity-90 dark:text-white`}
              >
                Sign Up
              </Button>
        }

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
    </form>
  );
};

export default RegisterForm;
