import { useEffect, useState } from 'react';

const usePost = () => {


    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);




    useEffect(() => {
        const url = 'https://sheltered-temple-11409.herokuapp.com/posts';

        setIsLoading(true);
        fetch(url)
            .then(res => res.json())

            .then(data => {

                setPosts(data)
                setIsLoading(false);
            })



    }, [])




    return [posts, setPosts, isLoading]
};

export default usePost;