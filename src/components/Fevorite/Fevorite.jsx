import { useOutletContext } from "react-router-dom";
import { getFromLocalStorage, removeFromLocalStorage } from "../LocalStorageManagment/localStorage";
import Phone from "../Home/Phone/Phone";
import { useEffect, useState } from "react";

const Fevorite = () => {
    const phones = useOutletContext();
    const [isShowAll, setIsShowAll] = useState(false);
    const [toDisplayPhone, setToDisplayPhone]= useState([]);
    const [render, setRender] = useState(false);

    useEffect(() =>{
        const storedPhones =  getFromLocalStorage();
        const displayPhone =   phones.filter(phone=> storedPhones.includes(phone.id))
        setToDisplayPhone(displayPhone)
    },[render])

        const handleShowAll = () => { 
            setIsShowAll(true)
         }
        const handleShowLess = () => { 
            setIsShowAll(false)
          }

          const handleRemove =(id) =>{
            removeFromLocalStorage(id)
            setRender(!render)
          }


        const phoneToDisplay = isShowAll ? toDisplayPhone : toDisplayPhone.slice(0,3);


    return (
        <div className="flex flex-col justify-center items-center mt-7">
        <h4 className="text-4xl font-extrabold text-center">Our x Phones</h4>
=        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-14">
        {
            phoneToDisplay.map(phone => <Phone
            key={phone.id}
            phone={phone}
            handleRemove={handleRemove}
            ></Phone>)
        }
    </div>
    <div>
        {
            toDisplayPhone.length > 3 &&
           ( !isShowAll && <button onClick={handleShowAll} className="btn btn-warning text-white font-bold mb-10">Show all</button> || <button onClick={handleShowLess} className="btn btn-warning text-white font-bold mb-10">Show less</button>) 

        }
    </div>
    </div>
    );
};

export default Fevorite;