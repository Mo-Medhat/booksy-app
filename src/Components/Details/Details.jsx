import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {

    const params = useParams()
    const [bookDetails, setBookDetails] = useState(null)

    
  async function getBookDetails(id) {
    let {data} = await axios.get(`https://gutendex.com/books/${id}`);
    setBookDetails(data);
  };

  useEffect(() => {
    getBookDetails(params.id)
  }, []);
  
  return <>
    <div className="container">

        {bookDetails? <><div className="flex flex-col md:flex-row  py-10">
            <div className='md:w-1/2 w-full '>
              <div className="content px-4">
              <img src={bookDetails.formats['image/jpeg']} alt={`${bookDetails.title} Poster`} className='w-full' />
              </div>
            </div>
            <div className='md:w-1/2 w-full '>
               <div className="content px-4 my-1">
               <div className='flex items-center mb-1'><h2 className='text-lg font-medium'>Title:</h2> <h2 className='ml-2 flex iteams-center'>{bookDetails.title}</h2></div>
               <div className='flex items-center mb-1'><h2 className='text-lg font-medium'>Author:</h2> <h2 className='ml-2'>{bookDetails.authors.map((author)=> author.name)}</h2></div>
                <div className='flex items-center mb-1'><h2 className='text-lg font-medium'>Birth year:</h2> <h2 className='ml-2'>{bookDetails.authors.map((author)=> author.birth_year)}</h2></div>
                <div className='flex items-center mb-1'><h2 className='text-lg font-medium'>Death year:</h2> <h2 className='ml-2'>{bookDetails.authors.map((author)=> author.death_year)}</h2></div>
                <div className='flex my-1'>
                  <h3 className='text-lg font-medium'>Download count:</h3>
                  <div className='flex flex-wrap ml-2 items-center '>{bookDetails.download_count}</div>
                </div>
                <div className='flex my-1'>
                  <h3 className='text-lg font-medium'>Languages:</h3>
                  <div className='flex flex-wrap ml-2'>{bookDetails.languages.map((language)=> <span className='bg-[#423b89e5] text-white p-1 rounded mr-1'>{language}</span>)}</div>
                </div>

                <div className='flex my-1'>
                  <h3 className='text-lg font-medium'>Bookshelves:</h3>
                  <div className='flex flex-wrap ml-2 '>{bookDetails.bookshelves.map((bookshelve)=> <span className='bg-[#423b89e5] text-white p-1 rounded mr-1 mb-1'>{bookshelve}</span>)}</div>
                </div>

                <div className='flex my-1'>
                  <h3 className='text-lg font-medium'>subjects:</h3>
                  <div className='flex flex-wrap ml-2'>{bookDetails.subjects.map((subject)=> <span className='bg-[#423b89e5] text-white p-1 rounded mr-1 mb-1'>{subject}</span>)}</div>
                </div>
               
              

               </div>
            </div>
        </div> </> :

          <><div className='h-screen flex justify-center items-center '>
            <div className='animate-spin '>
            <i class="fa-solid fa-circle-notch fa-spin text-[#413B89] text-6xl"></i>
            </div>
          </div>
          </>
        }

    </div>
  

  </>
}

export default Details