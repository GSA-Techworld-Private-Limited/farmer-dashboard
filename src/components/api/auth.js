import axios from "axios";

export const baseUrl = "https://v3h2dw9k-8055.inc1.devtunnels.ms/";
const token = sessionStorage.getItem("token");

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
