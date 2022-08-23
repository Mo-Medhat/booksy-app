import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewAllBooks() {

    const [books, setBooks] = useState(null)

    async function getBooks(numPage) {
      let {data} = await axios.get(`https://gutendex.com/books/?page=${numPage}`);
      setBooks(data.results);
    };
  
    useEffect(() => {
      getBooks(1)
    }, []);

    const nums = new Array(15).fill(0)
  
  return <>
   {books? <section className='my-10'>
    <div className="container">

        <div className="flex flex-col py-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-2 text-center w-full">
              {books.map((book)=> <>
              <div key={book.id} className='mb-2'>
                <Link to={`/Details/${book.id}`}>
                <div className="mx-3">
                  <img src={book.formats['image/jpeg']} alt={`${book.title} Poster`} className='w-full mx-auto h-[650px] sm:h-[450px] md:h-[320px] lg:h-[275px] rounded-xl' />
                  <h4 className='text-xl mt-2'>{book.title.length > 30 ? `${book.title.slice(0,30)}...`: book.title}</h4>
                  <p className='text-neutral-400'>{book.authors.map((author)=> author["name"])}</p>
                </div>
                </Link>
                </div>
              </>)}
            </div>
        </div>
            <div className='flex justify-center items-center'>
            {nums.map( (content ,index) => <div onClick={()=> getBooks(index+1)} className='w-8 h-8 border-2 flex justify-center items-center  mx-1 text-black cursor-pointer rounded transition-all hover:bg-slate-400 hover:text-white '>{index+1}</div> )}
            </div>
    </div>
  </section>: <><div className='h-screen flex justify-center items-center '>
            <i class="fa-solid fa-circle-notch fa-spin text-[#413B89] text-6xl"></i>
          </div>
          </>}
  </>
}

export default ViewAllBooks