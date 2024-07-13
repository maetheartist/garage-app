// const apiUrl = "api.timbu.com/v1/products";
// const apiKey = `fc792880ac154644b033260df22ba4e620240713184818035195`;

const urlPage =
  "api.timbu.cloud/products?organization_id=7c9b81a454954eaca00c71181766cf87&reverse_sort=false&page=1&size=10&Appid=73V9ADSPYYZ11CE&Apikey=7dc1ffa507a4426a82ae8cdcd8b1537320240712195018494446";
async function fetchProducts() {
  const response = await fetch(urlPage);
  const data = await response.json();
  console.log(data);
  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `${apiKey}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();

  //     console.log("Products:", data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
}

fetchProducts();

export default fetchProducts;
