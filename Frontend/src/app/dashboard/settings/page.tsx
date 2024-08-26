"use client";
import Dashboard from "./Dashboard"
import PrivateRoute from "@/app/_components/PrivateRoute"

export default function Settings(){
    return(
        <PrivateRoute>
        <div>
            <Dashboard/>
        </div>
        </PrivateRoute>
    )
}