import React, { useState } from 'react';
import './style.scss';
import defaultIcon from '../../../../assets/icons/upload.svg';
import successIcon from '../../../../assets/icons/success.svg';
import deleteFileIcon from '../../../../assets/icons/delete.svg';

export const InputFile = ({label, require, name, register, classes}) => {
    const [fileUpload, setFileUpload] = useState();

    const handleUploadFile = (e) => {
        e.preventDefault();
        setFileUpload(e.target.files[0]);
    };
    
    const handleDeleteFile = (e) => {
        e.preventDefault()
        setFileUpload(null);
    };

    return (
        <div className={`field ${classes}`}>
            <label className="field__label" >
                {label}
                {require && '*'}
            </label>
            <div className="field__input-wrapper">
                <input
                    className="input-file"
                    type="file"
                    id={name}
                    {...register}
                    onChange={handleUploadFile}
                />
                <label className="input-file-label" htmlFor={name}>
                    {fileUpload ?
                        <div className="input-file-label__upload">
                            <img src={successIcon} alt="upload seccess" />
                            <span className="file-name">
                                {fileUpload.name}
                            </span>
                            <button className="delete-file" onClick={handleDeleteFile}>
                                <img src={deleteFileIcon} alt="delete file" />
                            </button>
                        </div> :
                        <div className="input-file-label__empty">
                            <p className="input-file-label__text">
                                Выберите или перетащите файл
                            </p>
                            <div className="upload-file">
                                <img src={defaultIcon} alt="upload file" />
                            </div>
                        </div>
                    }
                </label>
            </div>
        </div>
    );
};