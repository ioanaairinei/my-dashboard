import { useEffect, useState } from 'react';

const useImage = (fileName: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [image, setImage] = useState<string>();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`./assets/images/${fileName}.jpeg`);
        setImage(response.default);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [fileName]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
