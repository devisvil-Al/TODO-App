import { useState, useEffect } from "react";
import Avatar from 'react-avatar-edit';


function UploadAvatar() {
    const [src, setSrc] = useState(null)
    const [preview, setPreview] = useState(null)

    const onClose = () => {
        setPreview(null)
    }
    const onCrop = view => {
        setPreview(view)
    }


    return<div>
        <Avatar
            width={200}
            height={200}
            onCrop={onCrop}
            onClose={onClose}
            src={src}
        />
        {preview && <img src={preview} />}
    </div>
}

export default UploadAvatar