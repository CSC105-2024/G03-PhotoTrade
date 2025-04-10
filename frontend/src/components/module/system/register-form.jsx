import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "@/style";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/reducer/validate";
import { loginStatus } from "@/reducer/auth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { email, password, error } = useSelector((state) => state.validate);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    navigate("/user/auth/dashboard")
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
          <Label htmlFor="email">Email</Label>
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
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: 8,
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          {error?.password && (
            <p className="text-red-500 text-sm">
              Must be 8 or more characters long
            </p>
          )}
        </div>

        <Button
          type="submit"
          className={`${styles.bgCustom} w-full hover:opacity-90`}
        >
          SignUp
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
