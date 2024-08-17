import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface PrivateRouteProps {
  children: ReactNode; // This tells TypeScript the component expects children
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.user); // Adjust RootState if needed

  useEffect(() => {
    if (!currentUser) {
      // Redirect to the sign-in page if not authenticated
      router.push("/login");
    }
  }, [currentUser, router]);

  // Show children only if the user is authenticated
  return currentUser ? <>{children}</> : null;
};

export default PrivateRoute;
