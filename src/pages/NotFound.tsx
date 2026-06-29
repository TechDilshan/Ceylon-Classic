import { Link, useLocation } from "react-router-dom";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path={location.pathname}
      />
      <div className="text-center px-4">
        <h1 className="font-heading mb-4 text-5xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">This page could not be found.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-medium hover:opacity-90">
            Home
          </Link>
          <Link to="/shop" className="border border-border px-6 py-2.5 rounded-md font-medium hover:bg-secondary">
            Shop
          </Link>
          <Link to="/contact" className="border border-border px-6 py-2.5 rounded-md font-medium hover:bg-secondary">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
