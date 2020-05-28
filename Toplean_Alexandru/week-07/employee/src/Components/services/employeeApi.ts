import { MenuItem } from "./../../Models/MenuItem";
import { ActionSuccessful } from "./../ActionComponent";
import { axiosClient } from "./axiosClient";
import { handleError } from "./apiUtils";

/* export const getMenus = () => {
  return axiosClient.get("employee/restaurants/1/menus").catch(handleError);
}; */

export const getRestaurants = () => {
  return axiosClient.get(`employee/restaurant/All`).catch(handleError);
};

export const getMenus = (restaurant: string) => {
  return axiosClient.get(`employee/restaurant/${restaurant}/AllMenus`);
};

export const getMenu = (restaurant: string, menu: string) => {
  return axiosClient.get(`employee/restaurant/${restaurant}/${menu}`);
};

export const getMenuItems = (restaurant: string, menu: string) => {
  return axiosClient.get(
    `employee/restaurant/${restaurant}/${menu}/allmenuitems`
  );
};

export const updateMenuItem = (menuItem: MenuItem) => {
  return axiosClient.post(`employee/updatemenuitem`, menuItem);
};

export const createRestaurant = (
  rName: string,
  rImage?: string,
  rStars: number = 0
) => {
  return axiosClient.post("employee/createrestaurant", {
    name: rName,
    image: rImage,
    stars: rStars,
  });
};

export const createMenuItem = (
  restaurant: string,
  menu: string,
  menuItem: MenuItem
) => {
  return axiosClient.post(
    `employee/${restaurant}/${menu}/createmenuitem`,
    menuItem
  );
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
