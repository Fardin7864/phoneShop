
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

export {addToLocalStorage,getFromLocalStorage,setToLocalStorage};