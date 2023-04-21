import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import defaultIcon from '../../../../assets/icons/upload.svg';
import successIcon from '../../../../assets/icons/success.svg';
import deleteFileIcon from '../../../../assets/icons/delete.svg';

export const InputFile = ({label, require, input, values}) => {
    const [fileUpload, setFileUpload] = useState();
    const [imagePreviewUrl, setImagePreviewUrl] = useState();

    const handleUploadFile = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setFileUpload(file)
            setImagePreviewUrl(reader.result)
        }

        reader.readAsDataURL(file);
    };
    
    const handleDeleteFile = (e) => {
        e.preventDefault()
        setFileUpload('');
        setImagePreviewUrl('');
        input.onChange(null);
    };

    useEffect(() => {
        input.onChange(imagePreviewUrl)
    }, [fileUpload, imagePreviewUrl]);

    return (
        <div className="field">
            <label className="field__label" >
                {label}
                {require && '*'}
            </label>
            <div className="field__input-wrapper">
                <input className="input-file-value" type="text" name={input.name} {...input} value={imagePreviewUrl} />
                <input className="input-file" type="file" id={input?.name} onChange={(e) => handleUploadFile(e)} />
                <label className="input-file-label" htmlFor={input?.name}>
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