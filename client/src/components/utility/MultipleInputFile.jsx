import React, { useEffect, useState } from "react";

const MultipleInputFile = (props) => {

    const [fileData, setFileData] = useState({
        fileName: "Choose file",
        fileKey: null
    })


    // --------------------------------------React Life Cycle Functions -----------------------------------------

    useEffect(() => {
        if (typeof props.name == "string") {
            setFileData({ fileName: props.name });
        }
    }, []);


    // --------------------------------------User Defined Functions -----------------------------------------

    const onChangeFile = (e) => {
        e.persist();
        setFileData({ fileName: e.target.files[0].name });
        props.onSelectImage(e.target.files[0], props.fileKey);
    }

    // --------------------------------------Render Functions -----------------------------------------

    return (
        <div className="input-group">
            <div className="custom-file">
                <input
                    type="file"
                    className="custom-file-input"
                    onChange={(e) = this.onChangeFile(e)}
                    id="myInput"
                    aria-describedby="myInput"
                />
                <label className="custom-file-label" htmlFor="myInput">
                    {fileData.fileName}
                </label>
            </div>
        </div>
    );
}

export default MultipleInputFile;
