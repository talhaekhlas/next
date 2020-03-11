import React from 'react';
import Link from 'next/link';

import { useEffect } from 'react'
import { useRouter } from 'next/router'

const first = () => {

    const router = useRouter()

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/nested-page/first/?counter=10',null, { shallow: true })
  }, [])

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter])

    return (
        <div>
            <Link href="/">
                    <a>Home</a>
            </Link>
    <h1 align="center">I am nested first page {router.query.counter}</h1>
        </div>
    );
};

export default first;