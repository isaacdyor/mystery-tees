import { useState } from 'react';
// import { env } from '../env.mjs';


interface ImageResponse {
  id: string
  file_name: string
  height: number
  width: number
  size: number
  mime_type: string
  preview_url: string
  upload_time: string
}

export default function CreateProduct() {
  // const handleClick = () => {
  //   fetch(`${process.env.BASE_URL}shops/9551526/products.json`, {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Bearer ${process.env.PRINTIFY_TOKEN}`
  //     },
  //     body: JSON.stringify(objectWithData),
  //   })
  // }

  const imageData = {
    "file_name": "Test art work img",
    "url": "http://png-pixel.com/1x1-ff00007f.png"
  }

  const [image, setImage] = useState<ImageResponse>()

  const uploadImage = async () : Promise<void> => {
    try {
      const response = await fetch('/api/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(imageData),
      });
      const data: string = await response.json() as string
      const parsedData: ImageResponse = JSON.parse(data) as ImageResponse
      setImage(parsedData)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={uploadImage}>Upload image</button>
      <p>{image?.file_name}</p>
      {/* <p>{image}</p> */}
      {/* <button onClick={handleClick}>Create Product</button> */}

      {/* <button onClick={fetchComments}>Load comments</button> */}
    </div>

  );
}
