function getEnv(key: string, defaultValue?: string): string | undefined {
    const value = import.meta.env[key as keyof ImportMetaEnv];
    return value ?? defaultValue;
}

export const env = {
    MODE: import.meta.env.MODE,
    PROD: import.meta.env.PROD,
    DEV: import.meta.env.DEV,

    VITE_APP_URL: getEnv("VITE_APP_URL", "http://localhost:5173"),
    VITE_APP_NAME: getEnv("VITE_APP_NAME", "Nimna Pathum"),
    VITE_ASGARDEO_CLIENT_ID: getEnv("VITE_ASGARDEO_CLIENT_ID", ""),
    VITE_ASGARDEO_BASE_URL: getEnv("VITE_ASGARDEO_BASE_URL", ""),
} as const;

export const isDev = env.MODE === "development";
export const isProd = env.MODE === "production";