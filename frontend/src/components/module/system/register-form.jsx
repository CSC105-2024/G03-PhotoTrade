import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "@/style";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "@/reducer/auth";
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
      name: '',
      email: '',
      password: '',
    },
  });

  const submitForm = async (data) => {
    // dispatch(setCredentials(data));
    // dispatch(loginStatus({ email: data.email, token: "fake-token" }));
    const response = await createUser(data)
    console.log(response);
    // await dispatch(response.data)

    // const response = dispatch(createUser(data))
    
    // if (response.status === 201) {
    //   navigate("/");
    //   console.log('SignUp Successfull')
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
          <Label htmlFor="Username">Username*</Label>
        </div>
        <Input 
          id="name"
          type="text"
          {...register("name", { required: "Username is required"})}
        />
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
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password Again*</Label>
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
          Signup
        </Button>
        <div className="text-center text-sm">
        Already have an account?{" "}
        <a 
          className="underline underline-offset-4 text-purple-700"
          onClick={() => {
            navigate("/user/unauth/login")
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
