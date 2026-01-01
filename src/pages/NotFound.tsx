import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-extrabold text-blue-600/20">404</h1>
        
        <div className="relative -mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Page Not Found</h2>
          <p className="text-slate-500 mb-8">
            The page you are looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
          >
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;