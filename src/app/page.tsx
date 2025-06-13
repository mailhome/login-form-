import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";



export default function Home() {

  return (
    <main className="w-full h-full flex flex-col items-center justify-center bg-sky-500">
      <div className={cn("space-y-6 text-center w-8/12 mx-auto flex-col flex items-center justify-center",)}>
        <h1 className="text-6xl font-semibold text-white d">
         🔐 Auth
        </h1>
        <p className="text-white font-semibold text-lg">
          A simple authentication service
        </p>
      </div>
      <LoginButton>
        <Button 
        variant="secondary"
        size="lg" 
        className="mt-4 text-lg">
          Sign in
        </Button>
      </LoginButton>
    </main>
  );
}
