import React, { useEffect, useState } from 'react'






export const BlogHome = () => {

    const res = fetch('/getBlog')
        .then(res => res.json())
        .then(console.log);

    return (
        <>
            <nav class="bg-dark navbar-dark">
                <div class="container">
                    <a href="" class="navbar-brand"><i class="fas fa-tree mr-2"></i>Home</a>
                    <form class="form-inline">
                        <input class="form-control mr-sm-0" type="search" placeholder="Search Blog" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <section id="header" class="jumbotron">
                <h4 class="display-3 text-center">welcome to blog website</h4>
                <button class="btn btn-primary ">Create Blog </button>

            </section>

            <section id="gallery">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-4">
                            {res.data.map(ele =>
                                <div class="card">
                                    <img src={ele.imageUrl} alt="" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">{ele.title}</h5>
                                        <button class="btn btn-outline-s btn-sm">View Details</button>

                                    </div>

                                </div>

                            )}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
