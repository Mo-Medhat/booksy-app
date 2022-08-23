import axios from 'axios'
import React, { useEffect, useState } from 'react'
import homeImg from "../../assets/imgs/homeImg.JPG";
import { Link } from 'react-router-dom';

function Home() {

  const [books, setBooks] = useState(null)

  async function getBooks() {
    let {data} = await axios.get('https://gutendex.com/books/');
    setBooks(data.results.slice(0,6));
  };

  useEffect(() => {
    getBooks()
   
  }, []);

  return <>
  {books? <section className='my-10'>
    <div className="container">
      <div className='relative flex flex-col-reverse'>
        <div className='relative md:absolute top-1/4 md:left-8'>
            <h1 className='text-[#413B89] font-bold text-2xl md:text-4xl mb-2'>Build your library</h1>
            <p className='text-neutral-400 mb-2'>Buy two selected books and get <br /> one for free</p>
            <Link className='bg-[#C2A792] text-white py-1.5 px-5 rounded-md' to='/ViewAll'>View all</Link>
        </div>
        <img src={homeImg} className="rounded-2xl w-full" alt="Reading Books" />
      </div>
        <div className="flex flex-col py-4">
          <div className='flex justify-between pb-4'>
            <h2 className='text-2xl font-bold'>Popular Now</h2>
            <Link className='text-xl text-neutral-400 hover:text-[#413B89] transition-all' to="/ViewAll">View All</Link>
          </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-2 text-center w-full">
              {books.map((book)=> <>
              <div key={book.id} className='mb-2'>
                <Link to={`/Details/${book.id}`}>
                <div className="mx-3">
                  <img src={book.formats['image/jpeg']} alt={`${book.title} Poster`} className='w-full mx-auto h-[650px] sm:h-[450px] md:h-[320px] lg:h-[275px] rounded-xl' />
                  <h4 className='text-xl mt-2'>{book.title}</h4>
                  <p className='text-neutral-400'>{book.authors.map((author)=> author["name"])}</p>
                </div>
                </Link>
                </div>
              </>)}
            </div>
        </div>
    </div>
  </section>: <><div className='h-screen flex justify-center items-center '>
            <i class="fa-solid fa-circle-notch fa-spin text-[#413B89] text-6xl"></i>
          </div>
          </>}
  
  </>
}

export default Home