import axios from "axios";
// curl -X GET "https://api.timbu.cloud/products?organization_id=7c9b81a454954eaca00c71181766cf87&reverse_sort=false&page=2&size=10&APP_ID=73V9ADSPYYZ11CE&API_KEY=7dc1ffa507a4426a82ae8cdcd8b1537320240712195018494446"
// API Key=> 7dc1ffa507a4426a82ae8cdcd8b1537320240712195018494446
//  App ID => 73V9ADSPYYZ11CE
// organizationId = 7c9b81a454954eaca00c71181766cf87
// const axios = require("axios");

// const url =
//   "api.timbu.cloud/products?organization_id=7c9b81a454954eaca00c71181766cf87&reverse_sort=false&page=1&size=10&Appid=73V9ADSPYYZ11CE&Apikey=7dc1ffa507a4426a82ae8cdcd8b1537320240712195018494446";

// const url =
//   "api.timbu.cloud/products?organization_id=7c9b81a454954eaca00c71181766cf87&reverse_sort=false&page=1&size=10&Appid=73V9ADSPYYZ11CE&Apikey=7dc1ffa507a4426a82ae8cdcd8b1537320240712195018494446";
// const params = {
//   organization_id: "7c9b81a454954eaca00c71181766cf87",
//   reverse_sort: false,
//   page: 2,
//   size: 10,
//   Appid: "73V9ADSPYYZ11CE",
//   Apikey: "7dc1ffa507a4426a82ae8cdcd8b1537320240712195018494446",
// };
// export const searchProduct = async () => {
//   axios.get(url).then((response) => {
//     console.log(response);
//   });
//   .then((response)=> {
//     // const data = response.data
// //     console.log('Page:',data.page);
// //     console.log('Size:',data.size);
// //     console.log('Total:',data.total);
// //     console.log('Previous Page:',data.previous_page);
// //     console.log('Next Page:',data.next_page);
// // //   }).catch(error => {
// //     console.log(error);
//   })
// };

// const url =
//   "api.timbu.cloud/products?organization_id=7c9b81a454954eaca00c71181766cf87&reverse_sort=false&page=1&size=10&Appid=73V9ADSPYYZ11CE&Apikey=7dc1ffa507a4426a82ae8cdcd8b1537320240712195018494446";

const anotherRequest =
  "api.timbu.cloud/products?organization_id=7c9b81a454954eaca00c71181766cf87&reverse_sort=false&page=1&size=10&Appid=73V9ADSPYYZ11CE&Apikey=7dc1ffa507a4426a82ae8cdcd8b1537320240712195018494446";
export const fetchProduct = async () => {
  fetch(anotherRequest)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};
