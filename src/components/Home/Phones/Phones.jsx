import { useOutletContext } from "react-router-dom";
import Phone from "../Phone/Phone";
import { useState } from "react";

const Phones = () => {
    const phones = useOutletContext();
    const [isShowAll, setIsShowAll] = useState(false);
    const handleShowAll = () => { 
        setIsShowAll(true)
     }

    const phoneToDisplay = isShowAll ? phones : phones.slice(0,9);

    return (
        <div className="flex flex-col justify-center items-center mt-7">
            <h4 className="text-4xl font-extrabold text-center">Our x Phones</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-14">
            {
                phoneToDisplay.map(phone => <Phone
                key={phone.id}
                phone={phone}
                ></Phone>)
            }
        </div>
        <div>
            {
                !isShowAll && <button onClick={handleShowAll} className="btn btn-warning">Show all</button> || ""

            }
        </div>
        </div>
    );
};

export default Phones;