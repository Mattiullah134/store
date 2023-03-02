import { React, useState } from 'react'
import { useQRCode } from 'next-qrcode';
import QRCode from 'qrcode';
// React tostify
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



// Admin pannel
import { ThemeProvider } from "@mui/material/styles";
import { Grid, Stack, TextField, Button, } from "@mui/material";


function Addproducts() {

  const { SVG } = useQRCode();

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('tshirts')
  const [size, setSize] = useState('s')
  const [color, setColor] = useState('black')
  const [price, setPrice] = useState('')
  const [slug, setSlug] = useState('')
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState('');
  const [prodtImage, setProdtImage] = useState('')


  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    }
    else if (e.target.name === 'category') {
      setCategory(e.target.value)
    }
    // else if (e.target.name === 'size') {
    //   setSize(e.target.value)
    // }
    // else if (e.target.name === 'color') {
    //   setColor(e.target.value)
    // }
    else if (e.target.name === 'price') {
      setPrice(e.target.value)
    }
    else if (e.target.name === 'slug') {
      setSlug(e.target.value)
    }
    else if (e.target.name === 'desc') {
      setDesc(e.target.value)
    }
    // else if (e.target.name === 'img') {
    //   setImg(e.target.value)
    // }
    else if (e.target.name === 'img') {
      setProdtImage(e.target.value)
    }
  }
  const [url, setUrl] = useState('');
  const [imgUrl, setImgUrl] = useState(''); // this is for the last image tag
  const submit = async (e) => {
    e.preventDefault()

    // fetch the data from form to makes a file in local system

    let data = { title, price, img, category, desc, slug, prodtImage };

    setImg(url)

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    setImgUrl(data.img)
    if (response.success === true) {
      toast.success(response.message, { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
    }
    else {
      toast.error(response.message, { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
    }
    setTitle('')
    setCategory('')
    setSize('')
    setColor('')
    setPrice('')
    setDesc('')
    setSlug('')
    setImg('')
    setProdtImage('')
  }

  return (

    <>

      {/* React tostify */}
      <ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

      <Grid container spacing={0} className='container w-1/2 my-20 mx-auto'>
        <Grid item xs={12} lg={12}>
          <form method='POST' onSubmit={submit} >
            <Stack spacing={3}>
              <TextField onChange={handleChange} value={title} name="title" label="Title" variant="outlined" required />
              <div className="flex ml-6 items-center">
                <span className="mr-3">Category: </span>
                <div className="relative">
                  <select name='category' value={category} onChange={handleChange} className="rounded-md border pl-2 appearance-none py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-800 text-base l-3 pr-10" >
                    <option value={'tShitrs'}>T-Shirts</option>
                    <option value={'120ml'}>120ml</option>
                    <option value={'150ml'}>150ml</option>
                    <option value={'200ml'}>200ml</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
              {/* <div className="flex ml-6 items-center">
                <span className="mr-3">Size: </span>
                <div className="relative">
                  <select name='size' value={size} onChange={handleChange} className="rounded-md border pl-2 appearance-none py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-800 text-base l-3 pr-10">
                    <option value={'s'}>S</option>
                    <option value={'m'}>M</option>
                    <option value={'l'}>L</option>
                    <option value={'xl'}>XL</option>
                    <option value={'xxl'}>XXL</option>

                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center" required>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div> */}



              {/* <div className="flex ml-6 items-center">
                <span className="mr-3">Color: </span>
                <div className="relative">
                  <select name='color' value={color} onChange={handleChange} className="rounded-md border pl-2 appearance-none py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-800 text-base l-3 pr-10" required>
                    <option value={'black'}>Black</option>
                    <option value={'blue'}>Blue</option>
                    <option value={'white'}>White</option>
                    <option value={'green'}>Green</option>
                    <option value={'yellow'}>Yellow</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div> */}



              <TextField onChange={handleChange} value={price} name="price" label="Price" variant="outlined" />
              <TextField onChange={handleChange} value={slug} name="slug" label="Slug" variant="outlined" />
              <TextField onChange={handleChange} value={desc} name="desc" label="Description" multiline rows={4} />
              <TextField onChange={handleChange} value={prodtImage} name="img" label="image" />
              {/* <label for="myfile">Select a file:</label>
              <input type="file" onChange={handleChange} id="myfile" name="img" /> */}
              {/* <TextField onChange={handleChange} value={img} name="img" label="Image" variant="outlined" required /> */}
            </Stack>
            <br />
            <Button type='submit' onClick={() => {
              let data1 = `${process.env.NEXT_PUBLIC_HOST}/product/${slug}`;
              QRCode.toDataURL(data1).then(setUrl);
            }} variant="outlined" mt={2}>Submit</Button>
          </form>
        </Grid>
      </Grid>
      {/* <SVG
        text={'ye description hai okay!!!!'}
        options={{
          level: 'M',
          margin: 3,
          scale: 4,
          width: 200,

        }}
      /> */}
    </>
  )
}

export default Addproducts