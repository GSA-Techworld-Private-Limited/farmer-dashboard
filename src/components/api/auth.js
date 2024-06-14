import axios from "axios";

export const baseUrl = "https://v3h2dw9k-8000.inc1.devtunnels.ms/";
export const token = sessionStorage.getItem("token");

export const fetchStats = async (setStats) => {
  try {
    const res = await axios.get(`${baseUrl}superadmin/dashboard-stats/`, {
      Authorization: `token ${token}`,
    });
    setStats(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchProductListStats = async (setProductListStats) => {
  try {
    const res = await axios.get(
      `${baseUrl}superadmin/dashboard-product-stats/`,
      {
        Authorization: `token ${token}`,
      }
    );
    setProductListStats(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchExperts = async (setExperts) => {
  try {
    const res = await axios.get(`${baseUrl}superadmin/add-expert-dashboard/`, {
      Authorization: `token ${token}`,
    });
    setExperts(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchProducts = async (setProducts) => {
  try {
    const res = await axios.get(
      `${baseUrl}superadmin/add-products-dashboard/`,
      {
        Authorization: `token ${token}`,
      }
    );
    setProducts(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchCategories = async (setCategories) => {
  try {
    const res = await axios.get(
      `${baseUrl}superadmin/add-category-dashboard/`,
      {
        Authorization: `token ${token}`,
      }
    );
    setCategories(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchOrdersList = async (setOrders) => {
  try {
    const res = await axios.get(`${baseUrl}superadmin/orders-list-dashboard/`, {
      Authorization: `token ${token}`,
    });
    setOrders(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchEmployees = async (setEmployees) => {
  try {
    const res = await axios.get(
      `${baseUrl}superadmin/add-employee-dashboard/`,
      {
        Authorization: `token ${token}`,
      }
    );
    setEmployees(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchFarmers = async (setFarmers) => {
  try {
    const res = await axios.get(`${baseUrl}superadmin/add-farmer-dashboard/`, {
      Authorization: `token ${token}`,
    });
    setFarmers(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchFarmersCrops = async (setFarmersCrops) => {
  try {
    const res = await axios.get(
      `${baseUrl}superadmin/farmer-crop-list-dashboard/`,
      {
        Authorization: `token ${token}`,
      }
    );
    setFarmersCrops(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchVendors = async (setVendors) => {
  try {
    const res = await axios.get(`${baseUrl}superadmin/add-vendor-dashboard/`, {
      Authorization: `token ${token}`,
    });
    setVendors(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchNurseries = async (setNurseries) => {
  try {
    const res = await axios.get(`${baseUrl}superadmin/add-nursery-dashboard/`, {
      Authorization: `token ${token}`,
    });
    setNurseries(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchUsers = async (setUsers) => {
  try {
    const res = await axios.get(
      `${baseUrl}superadmin/add-other-user-dashboard/`,
      {
        Authorization: `token ${token}`,
      }
    );
    setUsers(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchCouponData = async (setCouponData) => {
  try {
    const res = await axios.get(`${baseUrl}superadmin/add-coupons-dashboard/`, {
      Authorization: `token ${token}`,
    });
    setCouponData(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const fetchSales = async (setSales, period, setLoading) => {
  try {
    setLoading && setLoading(true);
    const res = await axios.get(
      `${baseUrl}superadmin/dashboard-sales-stats/?period=${period}`,
      {
        Authorization: `token ${token}`,
      }
    );
    setLoading && setLoading(false);
    setSales(res.data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
