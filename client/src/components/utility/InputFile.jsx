import React, { useEffect } from "react";

import { useState } from "react";

const InputFile = (props) => {
    const [fileName, setFile] = useState({
        fileName: "Choose file"
    })

    // --------------------------------------React Life Cycle Functions -----------------------------------------


    useEffect(() => {
        if (typeof props.name == "string") {
            setFile({ fileName: props.name });
        }
    }, []);


    // --------------------------------------User Defined Functions -----------------------------------------

    const onChange = event => {
        setFile({ fileName: event.target.files[0].name })
        props.onSelectImage(event.target.files[0]);
    };

    // --------------------------------------Render Functions -----------------------------------------

    return (
        <div className="input-group">
            <div className="custom-file">
                <input
                    type="file"
                    className="custom-file-input"
                    onChange={(event) => onChange(event)}
                    id="myInput"
                    aria-describedby="myInput"
                />
                <label className="custom-file-label" htmlFor="myInput">
                    {fileName}
                </label>
            </div>
        </div>
    );
}

export default InputFile;
