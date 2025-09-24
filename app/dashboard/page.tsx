"use client";

import { Button } from "@/components/ui/button";
import { handleReqWithToaster } from "@/lib/handle-req-with-toaster";
import { useAppDispatch } from "@/redux/app/hooks";
import {
  useGetUserDataQuery,
  useLogoutMutation,
} from "@/redux/features/auth/authApi";
import { logoutUser } from "@/redux/features/auth/authSlice";

export default function Dashboard() {
  const { data, isLoading } = useGetUserDataQuery();
  const [logout, { isLoading: logoutLoading }] = useLogoutMutation();

  const dispatch = useAppDispatch();
  const handleLogoutSubmit = async () => {
    handleReqWithToaster("Logout ...", async () => {
      await logout().unwrap();
      dispatch(logoutUser());
    });
  };
  return (
    <div className="flex items-center justify-center  flex-col gap-5 h-screen ">
      <h1 className="text-48 text-primary font-bold flex items-center gap-1">
        Welcome,
        {isLoading ? (
          <div className="h-12 w-48 animate-pulse rounded-md  bg-primary/20"></div>
        ) : (
          data?.data?.name
        )}
      </h1>

      <Button
        className="w-56"
        onClick={handleLogoutSubmit}
        isLoading={logoutLoading}
      >
        Logout
      </Button>
    </div>
  );
}
