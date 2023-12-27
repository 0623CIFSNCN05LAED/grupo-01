const API_URL = "http://localhost:3002/api/products/apiProducts/";

async function ProductsApi() {
  try {
    const response = await fetch(`${API_URL}`, { credentials: "include" });
    const result = await response.json();

    if (result && result.status === 200 && result.data) {
      return result;
    } else {
      console.error("Respuesta inesperada:", result);
      return { data: [], status: 500 };
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    return { data: [], status: 500 };
  }
}

export default ProductsApi;
