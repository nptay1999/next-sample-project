export const getHello = async () => {
  const response = await fetch('http://localhost:3000/api/hello');
  const data = await response.json();
  return data;
};
