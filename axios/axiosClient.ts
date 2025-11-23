import axios, { AxiosInstance } from "axios";

class AxiosClient {
    // Public readonly instance, initialized in the constructor
    public readonly apiClient: AxiosInstance; 

    constructor() {
        const env = process.env.NEXT_PUBLIC_API_ENV
        let baseURL = '';
        
        // --- 1. Determine Base URL based on environment ---
        switch (env) {
            case "LOCAL":
                baseURL = process.env.NEXT_PUBLIC_API_URL_LOCAL || '';
                break;
            case "DEV":
                baseURL = process.env.NEXT_PUBLIC_API_URL_DEV || '';
                break;
            case "PROD":
                baseURL = process.env.NEXT_PUBLIC_API_URL_PROD || '';
                break;
            default:
                console.error("Warning: NEXT_PUBLIC_API_ENV not set. Using fallback base URL.");
                // Provide a safe fallback base URL if required
                baseURL = process.env.NEXT_PUBLIC_API_URL_DEV || ''; 
                break;
        }

        // --- 2. Initialize Axios instance ---
        this.apiClient = axios.create({
            baseURL,
            timeout: 15000, // Recommended: Set a timeout
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        
        this.setResponseInterceptors();
    }
    
    /**
     * Set Response interceptors to handle global errors (e.g., 401 Unauthorized)
     */
    private setResponseInterceptors(): void {
        this.apiClient.interceptors.response.use((response) => response, async (error) => {
            const status = error?.response?.status
            if (status === 401) {
                console.warn("401 Unauthorized detected. Redirecting to login.");
                if (typeof window !== "undefined") {
                    // In a production application, you should also clear any local storage tokens here 
                    // before redirecting.
                    window.location.href = "/account/user/login";
                }
            }
            // CRITICAL: Reject the promise so that TanStack Query's onError is triggered
            return Promise.reject(error)
        })
    }
}

// Export a Singleton instance of the configured Axios client
export default new AxiosClient().apiClient;