import Upload from "antd/es/upload/Upload";

function MyUpload() {
    return (
        <>
            <div>
                <p>上传文件</p>
                <Upload action="/upload.do" >
                </Upload>
            </div>
        </>
    )
}

export default MyUpload;