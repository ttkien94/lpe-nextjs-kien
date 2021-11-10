import { useRouter } from "next/router";
import { TOKEN } from "src/constant/LocalStorage";

function withAuth(WrappedComponent, isProtect) {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = localStorage.getItem(TOKEN);

      if (isProtect && !accessToken) {
        Router.replace("/");
        return null;
      } else if (isProtect && accessToken) {
        return <WrappedComponent {...props} />;
      }

      // Checking if have token is redirect user to home path
      if (accessToken) {
        Router.replace("/");
        return null;
      }

      // If dont have token user can access page
      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
}

export default withAuth;
