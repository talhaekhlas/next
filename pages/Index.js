import React, { Component } from 'react';
import Link from 'next/link';


class Index extends Component {
    render() {
        return (
            <div>
                <Link href="/about">
                    <a>About Page</a>
                </Link>
               <h1 align="center">I am home page</h1>
            </div>
        );
    }
}

export default Index;