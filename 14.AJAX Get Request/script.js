async function getData() {
    try{
        const response = await axios.get('https://api.example.com/data');
        console.log(response.data);
    } catch(error) {
        console.log(error)
    }
}
getData()