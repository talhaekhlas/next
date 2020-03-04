import React, { Component } from 'react';
import Link from 'next/link';

class about extends Component {
    render() {
        return (
            <div>
                 <Link href="/">
                    <a>Home</a>
                </Link>
                <h1 align="center" className="hamba">I am About page</h1>
            </div>
        );
    }
}

export default about;