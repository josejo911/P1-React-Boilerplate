import React from 'react';
import App from './app';
import HomePage from './pages/homePage';
import Services from './pages/servicesPage';
import About from './pages/aboutPage';
import Posts from './pages/blog/postsPage';
import Post from './pages/blog/postPage';

export default [
    {
        path: '/blog',
        ...App,
        routes: [
            {
                path: '/blog/:id',
                ...Post
            },
            {
                ...Posts
            }
        ]
    },
    {
        path: '/Services',
        ...App,
        routes: [
            {
                ...Services
            }
        ]
    },
    {
        path: '/about',
        ...App,
        routes: [
            {
                ...About
            }
        ]
    },
    {
        path: '/',
        exact: true,
        ...App,
        routes: [
            {
                ...HomePage
            }
        ]
    },
];

