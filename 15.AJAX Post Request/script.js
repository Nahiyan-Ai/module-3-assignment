async function sendData() {
    try{
        const response = await axios.get("https://api.example.com/submit", {
            name: "John Doe", 
            email: "johndoe@example.com"
        })
        console.log(response.data)
    } catch(error) {
        console.log(error)
    }
}
sendData();