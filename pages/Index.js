import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router'


class Index extends Component {
    render() {
        return (
            <div>
                <Link href="/about">
                    <a>About Page</a>
                </Link>
                <span onClick={() => Router.push('/about')}> <a>Another About</a> </span>
                <Link href="/nested-page/first">
                    <a>Nested page</a>
                </Link>

                <Link href="/dynamic-page/[slug]" as = "/dynamic-page/firstd">
                    <a>dynamic page</a>
                </Link>


               <h1 align="center">I am home page</h1>
            </div>
        );
    }
}

export default Index;