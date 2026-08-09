const onSubmitHandler = async (event) => {
    event.preventDefault();
    const product = event.target.productName.value;
    const obj = {
        productName: product
    }
    
    axios.post("http://localhost:3000/products",obj).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
   
   
    
}