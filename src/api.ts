import { fetchData } from './service';

async function getData() {
  const data = await fetchData();
  return data;
}

export default getData();