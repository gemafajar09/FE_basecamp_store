import axios from "axios";
// import Header from './header'

export default axios.create({
  baseURL: "http://localhost:5000/"
});