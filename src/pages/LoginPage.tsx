import { useForm } from "react-hook-form";
import { getToken } from "../lib/auth";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { Navigate } from "react-router";
import { LoginForm } from "../types/login";
import useLogin from "../hooks/useLogin";
import horseImage from "/assets/horse.png"; 

const LoginPage = () => {
  const storedToken = getToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const { mutate: login, isPending, error, isError } = useLogin();

  const onSubmit = async (data: LoginForm) => {
    login(data);
  };

  if (storedToken) {
    return <Navigate to="/horses" replace />;
  }

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${horseImage})` }}>
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <div className="card w-full max-w-sm shadow-xl bg-white bg-opacity-90 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

          {isError && (
            <div className="alert alert-error my-2">
              {error.message}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text flex items-center gap-2 text-gray-700">
                  <FaEnvelope /> Email
                </span>
              </div>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-error text-sm">{errors.email.message}</p>
              )}
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text flex items-center gap-2 text-gray-700">
                  <FaLock /> Password
                </span>
              </div>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-error text-sm">{errors.password.message}</p>
              )}
            </label>

            <button
              type="submit"
              className="btn btn-primary w-full mt-4"
              disabled={isPending}
            >
              {isPending ? (
                <span className="loading loading-spinner" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
