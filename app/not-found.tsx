import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-navy text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-4 max-w-md">
        <div className="text-6xl font-extrabold text-brand-pink tracking-tight">404</div>
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-brand-border/80 text-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-4">
          <Button href="/" variant="primary" size="md">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
