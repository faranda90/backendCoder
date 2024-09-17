const socket = io()
const realTimeProducts = document.getElementById("realTimeProducts")
socket.emit('products')
socket.on("products", (data)=>{
    realTimeProducts.innerHTML=""
    data.forEach(item => {
        const element =document.createElement("div")
        element.innerHTML= `
        <h3>${item.title}</h3>
        
        <span>${item.price}</span>
        <span>${item.stock} </span>
        <button id="${item.id}" class="deleteItem">Eliminar</button>
        `
    realTimeProducts.append(element)
        
        
        
        
    });
})