import { useEffect, useState } from "react";
import {
  GenericContainer,
  GenericTitle,
  GenericContent,
} from "../GenericLayout";
import { useRouter } from "next/router";
import { LOCAL_STORAGE_GITHUB_ACCESS_TOKEN } from "@/utils/constants";
import LoadingScreen from "@/components/Loaders/Screen";
import { capitalizeText } from "@/utils/helper";

const ConnectAccountCallbackView = () => {
  const router = useRouter();
  const { access_token } = router.query;
  const [redirectFrom, setRedirectFrom] = useState<string>("");

  const storeHandlerInLocalStorage = (access_token: string) => {
    localStorage.setItem(LOCAL_STORAGE_GITHUB_ACCESS_TOKEN, access_token);
  };

  useEffect(() => {
    const path = router.pathname.replaceAll("/", "").replace("callback", "");
    if (path) {
      setRedirectFrom(capitalizeText(path));
    }

    if (access_token) {
      storeHandlerInLocalStorage(access_token as string);
      window.close();
    }
  }, [access_token]);

  return (
    <GenericContainer>
      <GenericTitle>
        ZKredentials | Redirecting from {redirectFrom}
      </GenericTitle>
      <GenericContent>
        <LoadingScreen />
      </GenericContent>
    </GenericContainer>
  );
};

export default ConnectAccountCallbackView;
