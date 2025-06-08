"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { SiApple, SiGithub } from "react-icons/si";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Share_Tech_Mono } from "next/font/google";
import { useMemo, useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CheckCircle, Loader2, XCircle } from "lucide-react";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

type AuthType = "login" | "register";

export default function AuthForm({ type = "login" }: { type?: AuthType }) {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const formSchema = useMemo(() => {
    if (type === "register") {
      return z.object({
        name: z.string().min(2, "Name is too short"),
        email: z.string().email({ message: "Enter a valid email" }),
        password: z.string().min(6, "Password must be at least 6 characters"),
      });
    } else {
      return z.object({
        email: z.string().email({ message: "Enter a valid email" }),
        password: z.string().min(6, "Password must be at least 6 characters"),
      });
    }
  }, [type]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (formData: any) => {
    console.log(`${type} data:`, formData);
    if (type === "login") {
      // handle login
      setLoading(true);
      const { data, error } = await authClient.signIn.email(
        {
          email: formData.email,
          password: formData.password,
        },
        {
          onRequest: (data) => {
            console.log("onRequest", data);
          },
          onSuccess: (data) => {
            console.log("onSuccess", data);
            toast.success("Login successful!", {
              description: "Welcome back!",
              icon: <CheckCircle className="text-green-500 w-5 h-5" />,
            });

            router.push("/");
            setLoading(false);
          },
          onError: (error) => {
            console.log("onError", error);
            toast.error("Login failed", {
              description: error.error.message,
              icon: <XCircle className="text-red-500 w-5 h-5" />,
            });

            setLoading(false);
          },
        }
      );
    } else {
      // handle register
      setLoading(true);
      const { data, error } = await authClient.signUp.email(
        {
          email: formData.email,
          password: formData.password,
          name: formData.name,
        },
        {
          onRequest: (data) => {
            console.log("onRequest", data);
          },
          onSuccess: (data) => {
            console.log("onSuccess", data);
            toast.success("Registration successful!", {
              description: "Your account has been created.",
              icon: <CheckCircle className="text-green-500 w-5 h-5" />,
            });
            router.push("/auth/log-in");
            setLoading(false);
          },
          onError: (error) => {
            console.log("onError", error);
            toast.error("Registration failed", {
              description: error.error.message,
              icon: <XCircle className="text-red-500 w-5 h-5" />,
            });

            setLoading(false);
          },
        }
      );
      console.log(data, error);
      setLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      setLoading(true);
      const resp = await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });
      console.log(resp);
      toast.success("Login successful!", {
        description: "Welcome back!",
        icon: <CheckCircle className="text-green-500 w-5 h-5" />,
      });

      router.push("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login failed", {
        description: "Something went wrong",
        icon: <XCircle className="text-red-500 w-5 h-5" />,
      });
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const resp = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
      console.log(resp);
      toast.success("Login successful!", {
        description: "Welcome back!",
        icon: <CheckCircle className="text-green-500 w-5 h-5" />,
      });

      router.push("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login failed", {
        description: "Something went wrong",
        icon: <XCircle className="text-red-500 w-5 h-5" />,
      });
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#121212] flex items-center justify-center ${shareTechMono.className}`}
    >
      <Card className="flex flex-col md:flex-row w-full h-full max-h-screen bg-[#121212] rounded-none md:rounded-3xl overflow-hidden shadow-xl">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 text-[#e5e5e5] flex flex-col justify-center">
          {/* Header */}
          <div className="flex items-center mb-10">
            <div className="bg-[#1f1f1f] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
              AI
            </div>
            <div className="ml-auto text-sm text-[#7a7a7a]">
              {type === "login" ? "New here?" : "Already a member?"}{" "}
              <Link
                href={type === "login" ? "/auth/register" : "/auth/log-in"}
                className="font-semibold text-white hover:underline"
              >
                {type === "login" ? "Register" : "Sign in"}
              </Link>
            </div>
          </div>

          {/* Titles */}
          <h1 className="text-4xl font-semibold mb-4">
            {type === "login" ? "Sign in" : "Sign up"}
          </h1>
          <p className="text-sm font-semibold mb-4">
            {type === "login"
              ? "Login to your account"
              : "Create a new account"}
          </p>

          {/* Auth Buttons */}
          <div className="flex space-x-4 mb-8">
            <div className="w-1/2">
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-[#1f1f1f] text-white border border-[#2a2a2a] hover:bg-[#2a2a2a] transition py-3 rounded-md"
                onClick={handleGoogleSignIn}
              >
                <FcGoogle className="text-xl" />
                <span className="font-medium">Google</span>
              </Button>
            </div>
            <div className="w-1/2">
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-[#1f1f1f] text-white border border-[#2a2a2a] hover:bg-[#2a2a2a] transition py-3 rounded-md"
                onClick={handleGithubSignIn}
              >
                <SiGithub className="text-xl" />
                <span className="font-medium">Github</span>
              </Button>
            </div>
          </div>

          <hr className="border-[#2a2a2a] mb-6" />
          <p className="text-xs mb-2">Or continue with email address</p>

          {/* Email Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {type === "register" && (
              <div className="space-y-1">
                <div className="relative flex items-center">
                  <FaUser className="absolute left-3 text-[#7a7a7a] text-lg pointer-events-none" />
                  <Input
                    type="text"
                    placeholder="Your name"
                    {...register("name")}
                    className="w-full bg-[#1f1f1f] border border-transparent text-[#e5e5e5] placeholder-[#7a7a7a] rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
            )}

            <div className="space-y-1">
              <div className="relative flex items-center">
                <FaEnvelope className="absolute left-3 text-[#7a7a7a] text-lg pointer-events-none" />
                <Input
                  type="email"
                  placeholder="Your email"
                  {...register("email")}
                  className="w-full bg-[#1f1f1f] border border-transparent text-[#e5e5e5] placeholder-[#7a7a7a] rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password field for both login and register */}
            <div className="space-y-1">
              <div className="relative flex items-center">
                <FaLock className="absolute left-3 text-[#7a7a7a] text-lg pointer-events-none" />
                <Input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full bg-[#1f1f1f] border border-transparent text-[#e5e5e5] placeholder-[#7a7a7a] rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#f9a847] hover:bg-[#f7a43f] text-black font-bold py-3 rounded-md transition flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" color="white" />
                  <span className="text-white">Loading...</span>
                </>
              ) : (
                <span>{type === "login" ? "Login" : "Continue"}</span>
              )}
            </Button>
          </form>

          <p className="text-xs text-[#4a4a4a] mt-6 max-w-xs leading-relaxed">
            This site is protected by reCAPTCHA and the Google Privacy Policy.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 md:flex hidden items-center justify-center bg-[#121212]">
          <img
            src="https://storage.googleapis.com/a1aa/image/1eb345d8-8545-4392-60d3-e34a7070a2d5.jpg"
            alt="Robot"
            className="w-full h-auto max-h-[700px] object-contain rounded-none md:rounded-3xl"
          />
        </div>
      </Card>
    </div>
  );
}
