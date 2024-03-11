import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Button } from 'antd';
const { Dragger } = Upload;

const uploadFile = (file) => {
  console.log(file, file);
}

const props = {
  name: 'file',
  multiple: true,
  //action: {uploadFile}, //'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
  customRequest(options) {
    handleCustomUpload(options);
  }
};

const handleCustomUpload = async (options) => {
  // 在这里实现你的自定义上传逻辑  
  // options.file 是上传的文件对象  
  // options.onSuccess, options.onError 是上传成功和失败的回调函数  

  // 假设你有一个名为 uploadFile 的函数，用于处理文件上传  
  const uploadFile = async (file) => {
    try {
      console.log('上传文件', file);

      // 在这里调用你的 API 或者其他上传逻辑  
      // 假设你返回了一个包含文件URL的响应  
      // const response = await fetch('/your-upload-api', {
      //   method: 'POST',
      //   body: file,
      // });
      // const url = await response.json(); // 假设服务器返回的是文件URL  
      // return url;
    } catch (error) {
      // console.error('上传失败:', error);
      // throw error;
    }
  };

  const file = options.file;
  try {
    const url = await uploadFile(file);
    options.onSuccess(url, file);
  } catch (error) {
    options.onError(error);
  }
};

const DragFileUpload = () => (
  <div>
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>


  </Dragger>
  <Button>添加</Button>
  </div>
  // <>
  //   <Upload
  //     name="file"
  //     showUploadList={false}
  //     customRequest={handleCustomUpload}
  //   >
  //     <Button >点击上传</Button>
  //   </Upload>
  // </>
);
export default DragFileUpload;