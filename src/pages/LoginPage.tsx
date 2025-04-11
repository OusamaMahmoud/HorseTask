import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../services/axios";
import { getToken, setToken } from "../lib/auth";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router";

type LoginForm = {
  email: string;
  password: string;
};
type LoginResponse = {
  data: {
    token: string;
  };
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const storedToken = getToken();
  if (storedToken) {
    return <Navigate to="/horses" replace />;
  }

  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.post<LoginResponse>("/login", data);
      const token = res.data.data.token;

      if (token) {
        setToken(token);
        navigate("/horses");
      } else {
        setError("Login failed: Token not found");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          {error && <div className="alert alert-error mt-2">{error}</div>}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text flex items-center gap-2">
                  <FaEnvelope /> Email
                </span>
              </div>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered w-full"
                defaultValue="frosiatech_it@dal-digital.com"
              />
              {errors.email && (
                <p className="text-error text-sm">{errors.email.message}</p>
              )}
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text flex items-center gap-2">
                  <FaLock /> Password
                </span>
              </div>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="input input-bordered w-full"
                defaultValue="iqbO2imG9RRc"
              />
              {errors.password && (
                <p className="text-error text-sm">{errors.password.message}</p>
              )}
            </label>

            <button
              type="submit"
              className="btn btn-primary w-full mt-4"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner" /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
