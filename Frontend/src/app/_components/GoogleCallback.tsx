"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "../https/api";
import { signInSuccess, signInFailure } from "../../redux/user/userSlice";
import Load from "./load";

const GoogleCallback = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    const handleCallback = async () => {
      if (!email) {
        dispatch(signInFailure("No email found in query parameters."));
        router.push("/login");
        return;
      }

      try {
        const response = await axios.get(`/user/getUSer?email=${encodeURIComponent(email)}`);
        const data = response.data;
        console.log("here issssssssssssssss the data", data)

        if (data.success) {
          dispatch(signInSuccess(data)); 
          //redirect to the required page
          if(data.data?.contactNumber) {
            router.push("/dashboard");
          }
          else{
            router.push("/personalinfo")
          }
          
        } else {
          dispatch(signInFailure(data.message || "Failed to fetch user details."));
          router.push("/login");
        }
      } catch (error:any) {
        let errorMessage = "An error occurred during user fetch.";
        if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
        dispatch(signInFailure(error));
        router.push("/login");
      }
    };

    handleCallback();
  }, [email, router, dispatch]);

  return <Load />;
};

export default GoogleCallback;
