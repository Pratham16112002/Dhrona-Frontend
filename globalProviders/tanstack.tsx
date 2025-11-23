"use client";

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { useSnackBar } from "./snackBar";
import { ApiError } from "@/errors/error";



export default function ReactQueryProvider({ children }: { children: ReactNode }) {
    const { showError } = useSnackBar()
    const newQueryCache = new QueryCache({
        onError: (error) => {
            if (error instanceof ApiError) {
                showError(error.message);
            } else if (error instanceof Error) {
                showError(error.message);
            } else {
                showError("Unknown error occurred");
            }
        }
    })

    const newMutationCache = new MutationCache({
        onError: (error) => {
            if (error instanceof ApiError) {
                console.log(error.message)
                showError(error.message);
            } else if (error instanceof Error) {
                console.log(error)
                showError(error.message);
            } else {
                showError("Unknown error occurred");
            }
        }
    })
    const [client] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                },
                queryCache: newQueryCache,
                mutationCache: newMutationCache
            })
    );

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

