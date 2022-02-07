
async function getData(db) {
    const response = await fetch(db);
    const data = await response.json();
    return data;
}

export default getData;
