import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4 relative overflow-hidden">
      
     
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 z-10">
        <div className="card-body">

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Welcome Back</h2>
            <p className="text-sm text-base-content/70">Enter your credentials to access your account</p>
          </div>

          {/* Email Login Form */}
          <form
            className="space-y-4"
          >
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 focus-within:outline-primary">
               
                <input 
                  type="email" 
                  name="email"
                  className="grow" 
                  placeholder="name@example.com" 
                  required 
                />
              </label>
            </div>

            {/* Password Input */}
            <div className="form-control">
              <div className="label">
                <span className="label-text font-medium">Password</span>
              </div>
              <label className="input input-bordered flex items-center gap-2 focus-within:outline-primary">
                <input 
                  type="password" 
                  name="password"
                  className="grow" 
                  placeholder="••••••••" 
                  required 
                />
              </label>
            </div>

            {/* Login Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full shadow-lg">Login</button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider text-sm text-base-content/60 my-6">OR</div>

          {/* Social Login */}
          <form action="/api/auth/signin/google" method="POST">
            <button className="btn btn-outline w-full hover:bg-base-200 hover:border-base-300 transition-colors">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5 mr-2"
                alt="google"
              />
              Continue with Google
            </button>
          </form>

          {/* Footer Text */}
          <p className="text-center text-sm text-base-content/70 mt-6">
            Don’t have an account?{" "}
            <Link href="/register" className="link link-primary font-semibold no-underline hover:underline">
              Create an account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}