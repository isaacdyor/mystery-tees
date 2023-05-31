import { GetServerSideProps } from 'next';
import { useState } from 'react';
// import { env } from '../env.mjs';


const objectWithData = {
  "title": "Product",
  "description": "Good product",
  "blueprint_id": 384,
  "print_provider_id": 1,
  "variants": [
        {
            "id": 45740,
            "price": 400,
            "is_enabled": true
        },
        {
            "id": 45742,
            "price": 400,
            "is_enabled": true
        },
        {
            "id": 45744,
            "price": 400,
            "is_enabled": false
        },
        {
            "id": 45746,
            "price": 400,
            "is_enabled": false
        }
    ],
    "print_areas": [
      {
        "variant_ids": [45740,45742,45744,45746],
        "placeholders": [
          {
            "position": "front",
            "images": [
                {
                  "id": "5d15ca551163cde90d7b2203", 
                  "x": 0.5, 
                  "y": 0.5, 
                  "scale": 1,
                  "angle": 0
                }
            ]
          }
        ]
      }
    ]
}

export default function newProduct() {
  const handleClick = () => {
    fetch(`${process.env.BASE_URL}shops/9551526/products.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PRINTIFY_TOKEN}`
      },
      body: JSON.stringify(objectWithData),
    })
  }

  const imageData = {
    "file_name": "Test art work img",
    "url": "http://png-pixel.com/1x1-ff00007f.png"
  }

  const [fileName, setFileName] = useState()

  const uploadImage = async () => {
    try {
      const response = await fetch('/api/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(imageData),
      });
      const data = await response.json()
      setFileName(JSON.parse(data).file_name)

      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={uploadImage}>Upload image</button>
      <p>{fileName}</p>
      {/* <p>{image}</p> */}
      {/* <button onClick={handleClick}>Create Product</button> */}

      {/* <button onClick={fetchComments}>Load comments</button> */}
    </div>

  );
}
