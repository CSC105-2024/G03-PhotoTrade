import { SquareArrowLeft } from "lucide-react";
import RegisterForm from "@/components/module/system/register-form";
import { Link, useNavigate } from "react-router-dom";
import BackgroundRegister from "@/assets/BackgroundRegister.png";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            PhotoTrade
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>

        <SquareArrowLeft
          className="size-6 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="relative bg-muted lg:block hidden">
        <img
          src={BackgroundRegister}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover "
        />
      </div>
    </div>
  );
};

export default RegisterPage;
