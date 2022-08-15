import { useRef, useState } from "react"
import Button, { ButtonVariants } from "../Button/button"

interface FileUploadParams {
    onUpload: (file: File) => void,
    onSend: () => void,
    title: string,
    loading?: boolean,
    file: File | undefined,
    accept: string,
    id: string,
    disable?: boolean
}




const FileUpload: React.FC<FileUploadParams> = ({
    onSend,
    onUpload,
    title,
    loading,
    file,
    accept,
    id,
    disable
}) => {
    const uploadRef = useRef<HTMLInputElement>(null)


    const handleUpload: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        
        if (event && event.target.files && event.target.files[0]) {
            const file = event.target.files[0];

    
            if (!file.type.includes(accept) && accept !== "*") {
                return;
            }
            onUpload(file)
            uploadRef.current!.value = ""
        }
    };


    return (
        <>
            <div className="flex flex-row items-center relative">
                <label className={`mr-[0.75rem] w-[3.125rem] h-[3.125rem] rounded-full ${disable? "bg-disabled cursor-default" : "bg-accent cursor-pointer"}  flex justify-center items-center`} htmlFor={id}>
                    <img src="/attach.png" alt="attach" className="w-[1.625rem] h-[2.75rem]"/>
                </label>
                <Button
                    onClick={onSend}
                    variant={ButtonVariants.FILLED}
                    loading={loading}
                    disabled={disable}
                >
                    {title}
                </Button>
                <input
                    id={id}
                    ref={uploadRef}
                    accept={accept === "*" ? "*" : accept+"/*"}
                    onChange={handleUpload}
                    type="file"
                    style={{ display: "none" }}
                    onClick={(e) => e.stopPropagation()}
                    disabled={disable}
                />
                {
                    file &&
                    <span className="text-white absolute bottom-[-2rem]">{file.name}</span>
                }
            </div>
        </>
    )
}



export default FileUpload