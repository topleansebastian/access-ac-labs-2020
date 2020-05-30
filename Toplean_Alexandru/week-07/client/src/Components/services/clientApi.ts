import { Restaurant } from "./../../Models/Restaurant";
import { axiosClient } from "./axiosClient";
import { handleError } from "./apiUtils";

/* export const getMenus = () => {
  return axiosClient.get("employee/restaurants/1/menus").catch(handleError);
}; */

export const getRestaurants = () => {
  return axiosClient.get(`client/restaurant/All`).catch(handleError);
};

export const getMenus = (restaurant: string) => {
  return axiosClient.get(`client/restaurant/${restaurant}/allmenus`);
};

export const getMenuItems = (restaurant: string, menu: string) => {
  return axiosClient.get(
    `client/restaurant/${restaurant}/${menu}/allmenuitems`
  );
};

export const getClient = (username: string, password: string) => {
  return axiosClient.get(`client/login/${username}/${password}`);
};

export const createClient = (
  name: string,
  username: string,
  password: string,
  email: string
) => {
  return axiosClient.post(`client/createclient`, {
    Name: name,
    Username: username,
    Password: password,
    Email: email,
  });
};

/* export const getMenu = (menuId: string) => {
  return axiosClient
    .get(`employee/restaurants/1/menus/${menuId}`)
    .catch(handleError);
};

export const createMenuItem = (menuId: string, item: MenuItem) => {
  return axiosClient
    .post(`employee/restaurants/1/menus/${menuId}/items`, {
      name: item.name,
      price: item.price,
    })
    .catch(handleError);
}; */