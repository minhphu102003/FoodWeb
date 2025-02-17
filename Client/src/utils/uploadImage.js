import axios from 'axios';

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const createPublicId = () => {
  return `${Date.now()}`; 
};

const createFormData = (file, publicId) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET); 
  formData.append('cloud_name', CLOUD_NAME); 
  formData.append('public_id', publicId); 
  formData.append('filename_override', `${publicId}.jpg`); 
  return formData;
};

export const uploadImageToCloudinary = async (file) => {
  const publicId = createPublicId(); 
  const formData = createFormData(file, publicId); 

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, 
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data.secure_url; 
  } catch (error) {
    console.error('Error uploading image:', error.response || error);
    throw new Error('Upload image failed');
  }
};
