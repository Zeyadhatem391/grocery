import axios from "axios";

// Use relative path to leverage Next.js rewrites (avoids CORS)
const API_URL = "";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(`API Error: Token invalid or server is down`, error);
    return Promise.reject(error);
  },
);

// Profile API
export const profileAPI = {
  getProfile: () => api.get("/api/profile").then((res) => res.data),
  updateProfile: (data: any) =>
    api.put("/api/profile/info", data).then((res) => res.data),
  updateImage: (file: File) => {
    const formData = new FormData();
    formData.append("image", file); // field name لازم يتوافق مع backend

    return api
      .post("/api/profile/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Axios يحط boundary تلقائي
        },
      })
      .then((res) => res.data);
  },
};

export const notificationAPI = {
  getNotifications: () =>
    api.get("/api/notification-settings").then((res) => res.data),
  updateNotifications: (data: any) =>
    api.put("/api/notification-settings", data).then((res) => res.data),
};

// Dashboard API
export const dashboardAPI = {
  getDashboard: () => api.get(`/api/dashboard`).then((res) => res.data),
};

export default api;
