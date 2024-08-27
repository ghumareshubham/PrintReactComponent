// import React, { useState } from 'react';
// import FileUploadService from './FileUploadService';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const FileUploadComponent = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [message, setMessage] = useState('');

//     const handleFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//     };

//     const handleFileUpload = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await FileUploadService.uploadFile(selectedFile);
//             setMessage(response.data);
//         } catch (error) {
//             setMessage('File upload failed!');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-6">
//                     <div className="card">
//                         <div className="card-header">File Upload</div>
//                         <div className="card-body">
//                             {message && <div className="alert alert-info">{message}</div>}
//                             <form onSubmit={handleFileUpload}>
//                                 <div className="form-group">
//                                     <label>Choose file</label>
//                                     <input
//                                         type="file"
//                                         className="form-control"
//                                         onChange={handleFileChange}
//                                     />
//                                 </div>
//                                 <button

//  type="submit" className="btn btn-primary mt-3">Upload</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FileUploadComponent;



// import React, { useState } from 'react';
// import FileUploadService from './FileUploadService';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const FileUploadComponent = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [previewUrl, setPreviewUrl] = useState(null);
//     const [message, setMessage] = useState('');

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setSelectedFile(file);

//         // Create a URL for the selected image to display it as a preview
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setPreviewUrl(reader.result);
//         };
//         reader.readAsDataURL(file);
//     };

//     const handleFileUpload = async (e) => {
//         e.preventDefault();
//         if (!selectedFile) {
//             setMessage('Please select an image to upload!');
//             return;
//         }
//         try {
//             const response = await FileUploadService.uploadFile(selectedFile);
//             setMessage(response.data);
//             setSelectedFile(null);
//             setPreviewUrl(null);
//         } catch (error) {
//             setMessage('Image upload failed!');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-6">
//                     <div className="card">
//                         <div className="card-header">Image Upload</div>
//                            {/* Image Preview */}
//                            {previewUrl && (
//                                     <div className="mt-3">
//                                         <p>Image Preview:</p>
//                                         <img src={previewUrl} alt="Preview" className="img-thumbnail" style={{ maxWidth: '100%' }} />
//                                     </div>
//                                 )}
//                         <div className="card-body">
//                             {message && <div className="alert alert-info">{message}</div>}
//                             <form onSubmit={handleFileUpload}>
//                                 <div className="form-group">
//                                     <label>Choose an image</label>
//                                     <input
//                                         type="file"
//                                         className="form-control"
//                                         accept="image/*"
//                                         onChange={handleFileChange}
//                                     />
//                                 </div>

                             

//                                 <button type="submit" className="btn btn-primary mt-3">Upload</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FileUploadComponent;









// import React, { useState } from 'react';
// import FileUploadService from './FileUploadService';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const FileUploadComponent = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [previewUrl, setPreviewUrl] = useState(null);
//     const [message, setMessage] = useState('');

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setSelectedFile(file);

//         // Create a URL for the selected image to display it as a preview
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setPreviewUrl(reader.result);
//         };
//         reader.readAsDataURL(file);
//     };

//     const handleFileUpload = async (e) => {
//         e.preventDefault();
//         if (!selectedFile) {
//             setMessage('Please select an image to upload!');
//             return;
//         }
//         try {
//             const response = await FileUploadService.uploadFile(selectedFile);
//             setMessage(response.data);
//             // Optionally reset the selected file and preview
//             setSelectedFile(null);
//         } catch (error) {
//             setMessage('Image upload failed!');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-6">
//                     <div className="card">
//                         <div className="card-header">Image Upload</div>
//                         <div className="card-body">
//                             {message && <div className="alert alert-info">{message}</div>}
                            
//                             {/* Image Placeholder */}
//                             <div className="mb-3 text-center">
//                                 <div 
//                                     style={{
//                                         width: '100%',
//                                         height: '200px',
//                                         border: '1px solid #ccc',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         backgroundColor: '#f8f9fa'
//                                     }}
//                                 >
//                                     {previewUrl ? (
//                                         <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
//                                     ) : (
//                                         <span>No Image Selected</span>
//                                     )}
//                                 </div>
//                             </div>

//                             <form onSubmit={handleFileUpload}>
//                                 <div className="form-group">
//                                     <label>Choose an image</label>
//                                     <input
//                                         type="file"
//                                         className="form-control"
//                                         accept="image/*"
//                                         onChange={handleFileChange}
//                                     />
//                                 </div>

//                                 <button type="submit" className="btn btn-primary mt-3">Upload</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FileUploadComponent;












// import React, { useState, useEffect } from 'react';
// import FileUploadService from './FileUploadService';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ImageCrudComponent = () => {
//     const [images, setImages] = useState([]);
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [previewUrl, setPreviewUrl] = useState(null);
//     const [editMode, setEditMode] = useState(false);
//     const [editImageId, setEditImageId] = useState(null);
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         loadImages();
//     }, []);

//     const loadImages = async () => {
//         try {
//             const response = await FileUploadService.getImages();
//             setImages(response.data);
//         } catch (error) {
//             setMessage('Failed to load images');
//         }
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setSelectedFile(file);

//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setPreviewUrl(reader.result);
//         };
//         reader.readAsDataURL(file);
//     };

//     const handleUpload = async (e) => {
//         e.preventDefault();
//         try {
//             if (editMode) {
//                 await FileUploadService.updateImage(editImageId, selectedFile);
//                 setMessage('Image updated successfully');
//             } else {
//                 await FileUploadService.uploadImage(selectedFile);
//                 setMessage('Image uploaded successfully');
//             }
//             resetForm();
//             loadImages();
//         } catch (error) {
//             setMessage('Operation failed!');
//         }
//     };

//     const handleEdit = (imageId, imageUrl) => {
//         setEditMode(true);
//         setEditImageId(imageId);
//         setPreviewUrl(imageUrl);
//     };

//     const handleDelete = async (imageId) => {
//         try {
//             await FileUploadService.deleteImage(imageId);
//             setMessage('Image deleted successfully');
//             loadImages();
//         } catch (error) {
//             setMessage('Delete operation failed!');
//         }
//     };

//     const resetForm = () => {
//         setSelectedFile(null);
//         setPreviewUrl(null);
//         setEditMode(false);
//         setEditImageId(null);
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-6">
//                     <div className="card">
//                         <div className="card-header">{editMode ? 'Edit Image' : 'Upload Image'}</div>
//                         <div className="card-body">
//                             {message && <div className="alert alert-info">{message}</div>}
                            
//                             <form onSubmit={handleUpload}>
//                                 <div className="form-group">
//                                     <label>{editMode ? 'Change Image' : 'Select Image'}</label>
//                                     <input
//                                         type="file"
//                                         className="form-control"
//                                         accept="image/*"
//                                         onChange={handleFileChange}
//                                     />
//                                 </div>

//                                 <div className="mt-3 text-center">
//                                     <div 
//                                         style={{
//                                             width: '100%',
//                                             height: '200px',
//                                             border: '1px solid #ccc',
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                             backgroundColor: '#f8f9fa'
//                                         }}
//                                     >
//                                         {previewUrl ? (
//                                             <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
//                                         ) : (
//                                             <span>No Image Selected</span>
//                                         )}
//                                     </div>
//                                 </div>

//                                 <button type="submit" className="btn btn-primary mt-3">{editMode ? 'Update Image' : 'Upload Image'}</button>
//                             </form>

//                             <hr />

//                             <div className="image-list">
//                                 {images.map(image => (
//                                     <div key={image.id} className="d-flex align-items-center mb-3">
//                                         <img src={image.url} alt="Uploaded" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
//                                         <button 
//                                             className="btn btn-secondary btn-sm mr-2" 
//                                             onClick={() => handleEdit(image.id, image.url)}>
//                                             <FontAwesomeIcon icon={faEdit} />
//                                         </button>
//                                         <button 
//                                             className="btn btn-danger btn-sm" 
//                                             onClick={() => handleDelete(image.id)}>
//                                             <FontAwesomeIcon icon={faTrash} />
//                                         </button>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ImageCrudComponent;









import React, { useState, useEffect } from 'react';
import FileUploadService from './FileUploadService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCrudComponent = () => {
    const [images, setImages] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editImageId, setEditImageId] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        loadImages();
    }, []);

    const loadImages = async () => {
        try {
            const response = await FileUploadService.getImages();
            setImages(response.data);
        } catch (error) {
            setMessage('Failed to load images');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            if (editMode) {
                await FileUploadService.updateImage(editImageId, selectedFile);
                setMessage('Image updated successfully');
            } else {
                await FileUploadService.uploadImage(selectedFile);
                setMessage('Image uploaded successfully');
            }
            resetForm();
            loadImages();
        } catch (error) {
            setMessage('Operation failed!');
        }
    };

    const handleEdit = (imageId, imageUrl) => {
        setEditMode(true);
        setEditImageId(imageId);
        setPreviewUrl(imageUrl);
    };

    const handleDelete = async (imageId) => {
        try {
            await FileUploadService.deleteImage(imageId);
            setMessage('Image deleted successfully');
            loadImages();
        } catch (error) {
            setMessage('Delete operation failed!');
        }
    };

    const resetForm = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setEditMode(false);
        setEditImageId(null);
    };
    

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">{editMode ? 'Edit Image' : 'Upload Image'}</div>
                        <div className="card-body">
                            {message && <div className="alert alert-info">{message}</div>}
                            
                            <form onSubmit={handleUpload}>
                                <div className="form-group">
                                    <label>{editMode ? 'Change Image' : 'Select Image'}</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </div>

                                <div className="mt-3 text-center">
                                    <div 
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            border: '1px solid #ccc',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#f8f9fa'
                                        }}
                                    >
                                        {previewUrl ? (
                                            <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                                        ) : (
                                            <span>No Image Selected</span>
                                        )}
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary mt-3"   disabled={!selectedFile}>{editMode ? 'Update Image' : 'Upload Image'}</button>
                           
                            </form>

                            <hr />

                            <div className="image-list">
                                {images.map(image => (
                                    <div key={image.id} className="d-flex align-items-center mb-3">
                                        <img src={image.url} alt="Uploaded" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                                        <button 
                                            className="btn btn-secondary btn-sm mr-2" 
                                            onClick={() => handleEdit(image.id, image.url)}>
                                            <FontAwesomeIcon icon={faEdit} /> 
                                        </button>
                                        <button 
                                            className="btn btn-danger btn-sm" 
                                            onClick={() => handleDelete(image.id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCrudComponent;
