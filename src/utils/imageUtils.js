// Utility to handle image paths for both development and production
export const getImagePath = (imagePath) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In development, use the path as-is
  // In production with homepage set, use process.env.PUBLIC_URL
  return process.env.NODE_ENV === 'production' && process.env.PUBLIC_URL 
    ? `${process.env.PUBLIC_URL}/${cleanPath}`
    : `/${cleanPath}`;
};