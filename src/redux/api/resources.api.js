import Axios from "axios"

const axiosInstance = Axios.create({
  baseURL: "https://avarice-api.herokuapp.com/",
})

export function getRaces() {
  return axiosInstance({
    method: "GET",
    url: "/races",
  })
}

export function getClasses() {
  return axiosInstance({
    method: "GET",
    url: "/classes",
  })
}

export function getWeapons() {
  return axiosInstance({
    method: "GET",
    url: "/weapons",
  })
}

export function getWearables() {
  return axiosInstance({
    method: "GET",
    url: "/wearables",
  })
}

export function getItems() {
  return axiosInstance({
    method: "GET",
    url: "/items",
  })
}
