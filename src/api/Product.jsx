import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

// جلب كل المنتجات
export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Product API Error:", error);
    return [];
  }
};

// جلب منتج معين بالـ ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data || null;
  } catch (error) {
    console.error("Product API Error:", error);
    return null;
  }
};

// جلب كل التصنيفات
export const getAllCategories = async () => {
  try {
    const response = await api.get("/categories");
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Category API Error:", error);
    return [];
  }
};
