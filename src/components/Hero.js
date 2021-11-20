import React from 'react';
import { useSelector } from 'react-redux';

export const Hero = () => {
    /* const data = useSelector((state) => state.entries.value);
      */
    

    return (
        <section className="Hero">
            <h1>Blog</h1>
            <p>I've been writing online since 2014, mostly about web development and tech careers. In total, I've written 69 articles on this site. Use the search below to filter by title.</p>
        </section>
    )
}