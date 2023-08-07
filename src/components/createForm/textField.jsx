import React, { useState } from "react";
import "../../styles/textField.css";
import { textFieldHeadings, textFields } from "../../utils";
import { useNavigate } from "react-router-dom";

function TextField() {
    const [fieldCount, setFieldCount] = useState(textFields)
    const navigate = useNavigate()

    function handleDeleteField(item, index) {
        const updatedFields = fieldCount.filter((e, i) => i !== index)
        setFieldCount(updatedFields)
    }

    function handleOnChange(element, parentIndex, key) {
        const updatedArr = fieldCount.map((item, itemIndex) => {
            if (itemIndex === parentIndex) {
                item[key] = element?.target.value
                return item
            }
            else {
                return item
            }
        }
        )
        setFieldCount(updatedArr)
    }

    function handleSaveData() {
        localStorage.setItem("fields", JSON.stringify(fieldCount))
        navigate('/form')
    }
    return (
        <div className="main">
            <h1>Text-Fields</h1>
            <table className="inputTable">
                <thead>
                    <tr>
                        {textFieldHeadings.map((item, i) => {
                            return (
                                <th key={i}>{item}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {fieldCount.map((textField, parentIndex) => {
                        return <tr key={parentIndex}>
                            <td>
                                <input
                                    placeholder='Enter Label Name'
                                    type={"text"}
                                    className="inputWrapper"
                                    onChange={(e) => handleOnChange(e, parentIndex, 'label')}
                                    value={textField?.label}
                                />
                            </td>
                            <td>
                                <input
                                    placeholder="Enter Placeholder"
                                    type={"text"}
                                    className="inputWrapper"
                                    onChange={(e) => handleOnChange(e, parentIndex, 'placeholder')}
                                    value={textField?.placeholder}
                                />
                            </td>
                            <td>
                                <input
                                    placeholder="Eg: text"
                                    type={"text"}
                                    className="inputWrapper"
                                    onChange={(e) => handleOnChange(e, parentIndex, 'type')}
                                    value={textField?.type}
                                />
                            </td>
                            <td>
                                <input
                                    placeholder="Eg: 10"
                                    type={"number"}
                                    className="inputWrapper"
                                    onChange={(e) => handleOnChange(e, parentIndex, 'maxLength')}
                                    value={textField?.maxLength}
                                />
                            </td>
                            <td>
                                <input
                                    placeholder="Eg: true"
                                    type={"text"}
                                    className="inputWrapper"
                                    onChange={(e) => handleOnChange(e, parentIndex, 'required')}
                                    value={textField?.required}
                                />
                            </td>
                            <td>
                                <button onClick={() => handleDeleteField(textField, parentIndex)} className="crossBtn">Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>

            </table>


            <button className="AddMoreBtn" onClick={() => setFieldCount((prev) => [...prev, ...[
                {
                    label: "",
                    placeholder: "",
                    type: "",
                    maxLength: "",
                    required: "",
                },
            ]])}>Add More</button>


            <button className="AddMoreBtn" onClick={handleSaveData}>Submit</button>
        </div>
    );
}

export default TextField;
