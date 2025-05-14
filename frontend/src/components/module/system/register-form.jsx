import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "@/style";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "@/reducer/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordAgain: "",
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
      profile_url:  "http://res.cloudinary.com/dcpgrfpaf/image/upload/v1747209873/rxkq2oleojlbcu4xomhh.png"
    };
    dispatch(createUser(newData));
  };

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success, navigate]);

  return (
    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-sm text-muted-foreground text-balance">
          Enter your information to signup to your account
        </p>
      </div>

      {/* Username */}
      <div className="grid gap-2">
        <Label htmlFor="name">Username</Label>
        <Input
          id="name"
          type="text"
          {...register("name", { required: "Username is required" })}
        />
        <p className="text-sm text-red-500">{errors.name?.message}</p>
      </div>

      {/* Email */}
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
              message: "Invalid email format",
            },
          })}
        />
        <p className="text-sm text-red-500">{errors.email?.message}</p>
      </div>

      {/* Password */}
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            className="pr-10"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
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
        <p className="text-sm text-red-500">{errors.password?.message}</p>
      </div>

      {/* Confirm Password */}
      <div className="grid gap-2">
        <Label htmlFor="passwordAgain">Confirm Password</Label>
        <div className="relative">
          <Input
            id="passwordAgain"
            type={showPasswordAgain ? "text" : "password"}
            className="pr-10"
            {...register("passwordAgain", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          <button
            type="button"
            onClick={() => setShowPasswordAgain((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
            tabIndex={-1}
          >
            {showPasswordAgain ? (
              <EyeOffIcon size={15} />
            ) : (
              <EyeIcon size={15} />
            )}
          </button>
        </div>
        <p className="text-sm text-red-500">{errors.passwordAgain?.message}</p>
      </div>

      {/* Submit Button */}
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <Button
          type="submit"
          className={`${styles.bgCustom} w-full hover:opacity-90 dark:text-white`}
        >
          Sign Up
        </Button>
      )}

      {/* Redirect to Login */}
      <div className="text-center text-sm">
        Already have an account?{" "}
        <span
          className="cursor-pointer text-purple-700 underline underline-offset-4"
          onClick={() => navigate("/user/unauth/login")}
        >
          Sign in
        </span>
      </div>
    </form>
  );
};

export default RegisterForm;
