import React from 'react';
import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { id } = router.query
    const { dynamic } = router.query
    return (
        <div>
            {dynamic} / {id}
        </div>
    );
};

export default Post;
