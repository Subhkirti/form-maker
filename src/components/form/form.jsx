import React from "react";
import "../../styles/form.css";

function Form() {
    const data = localStorage.getItem("fields");
    const fieldsData = JSON.parse(data);
    console.log("data:", fieldsData);
    

    return (
        <div className="formContainer">
            <div className="formItem" style={{ width: "700px" }}>
                {fieldsData.map((item, i) => {
                    return item?.label && <div key={i}>
                        {item?.label && <p className="labelItem">
                            {item?.label}
                            {item?.required === "true" && <span className="starIcon">*</span>}
                        </p>}

                        <input
                            className="inputItem"
                            type={item?.maxLength ? "text" : item?.type}
                            placeholder={item?.placeholder}
                            maxLength={item?.maxLength ? item?.maxLength : undefined}
                        />
                    </div>

                })}
            </div>
        </div>
    );
}

export default Form;
