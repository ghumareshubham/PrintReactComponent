// import React from 'react';
  
// import axios from 'axios';

// const API_BASE_URL = "http://localhost:8080/api/files";

// class FileUploadService {
//     uploadFile(file) {
//         const formData = new FormData();
//         formData.append("file", file);

//         return axios.post(`${API_BASE_URL}/upload`, formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//             },
//         });
//     }
// }

// export default new FileUploadService();



import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/images";

class FileUploadService {
    uploadImage(imageData) {
        const formData = new FormData();
        formData.append("image", imageData);
        return axios.post(`${API_BASE_URL}/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    getImages() {
        return axios.get(`${API_BASE_URL}`);
    }

    updateImage(imageId, newImageData) {
        const formData = new FormData();
        formData.append("image", newImageData);
        return axios.put(`${API_BASE_URL}/update/${imageId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    deleteImage(imageId) {
        return axios.delete(`${API_BASE_URL}/delete/${imageId}`);
    }
}

export default new FileUploadService();
