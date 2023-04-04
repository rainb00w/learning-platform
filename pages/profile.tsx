import React from "react";
import { logOutFunction } from "@/api/auth-api";
import { useAuthStateAtom } from "@/helpers/atoms";
import { useRouter } from "next/router";
import { useState } from "react";
import { IconSelector } from "@/helpers/icon-selector";

export default function Profile() {
  const router = useRouter();
  const [authState, setAuthState] = useAuthStateAtom();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogOut = async () => {
    setIsLoading(true);
    const response = await logOutFunction();
    setAuthState(false);
    router.push("/");
    setIsLoading(false);
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-y-8 py-32">
      <h4 className="text-h4 text-black">Profile</h4>
      {!isLoading ? (
        <button className="buttonPrimaryYellow" onClick={handleLogOut}>
          Log Out
        </button>
      ) : (
        <IconSelector id="loadingCircle" />
      )}
    </div>
  );
}
