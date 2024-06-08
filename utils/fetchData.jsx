export async function get(url, setter) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error en la petición: " + response.statusText);
  }
  const data = await response.json();
  setter(data);
}

export async function post(url, data, setter) {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    console.log(response);
    alert("Error en la petición: " + response.statusText);
    return;
  }
  setter((prev) => [...prev, data]);
}