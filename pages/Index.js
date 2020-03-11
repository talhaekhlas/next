import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router'


class Index extends Component {
    static async getInitialProps(ctx) {
        // const res = await fetch('https://api.github.com/repos/zeit/next.js')
        // const json = await res.json()

        console.log(ctx)
        return { name: 'talha' }
      }

    render() {
        return (
            <div>
                <Link href="/about">
        <a>About Page {this.props.name}</a>
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