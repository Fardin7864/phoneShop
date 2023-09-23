
const addToLocalStorage= id =>{
    const phones = getFromLocalStorage()
    const exist = phones.find(phoneId => phoneId === id);
    if (!exist) {
        phones.push(id);
        setToLocalStorage(JSON.stringify(phones)); 
    }

}

const getFromLocalStorage = () =>{
    const phones = localStorage.getItem('phones');
    return JSON.parse(phones) || [];
}
const setToLocalStorage = (phones) =>{
    localStorage.setItem('phones',phones);
}

const removeFromLocalStorage = (id) =>{
    const phones = getFromLocalStorage();
    // console.log(phones)
    const removedPhone = phones.filter(phone=> phone !== id);
    // console.log(removedPhone)
    localStorage.setItem('phones',JSON.stringify(removedPhone));

}

export {addToLocalStorage,getFromLocalStorage,setToLocalStorage,removeFromLocalStorage};