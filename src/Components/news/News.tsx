import React from 'react';
import newsList from '../../data/News-data';
import NewsCards from './NewsCard';

const News = () => {
    return(
        <section className='bg-navbar-black text-white mt-14 md:mt-0 w-screen overflow-hidden font-body'>
            <h1 className="font-sans text-2xl mt-10 opacity-70 mb-8">News</h1>
            <div className="flex items-center justify-center pb-16">
                <div className="flex flex-col md:grid gap-8 grid-cols-3">
                {
                    newsList.map((item) => 
                    <NewsCards key={item.id} item={item}/>)
                }
                </div>
            </div>
        </section>
    )
}

export default News;