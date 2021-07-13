import React, { useEffect } from 'react'
import {
    //useQuery,
    useLazyQuery,
    //useApolloClient
} from 'react-apollo';
import GET_CATEGORIES from '../../graphql/getCategories.graphql';
import { Link } from 'vtex.render-runtime';

const Categories = () => {

    const [getCategories, { data, loading }] = useLazyQuery(GET_CATEGORIES);

    useEffect(() => {
        getCategories();
    }, []);

    if( !data || loading ) {
        return (
            <div>Cargando...</div>
        )
    }

    const { categories } = data;

    console.log('categories', categories);

    const renderedItems = categories.map(({ slug, name, id }: any) => (
        <div key={id} className={`mr2`}>
            <Link
                to={`/${slug}`}
                className={""}
            >
            {name}</Link>
        </div>
    ))

    return (
        <div>
            <h4>Departamentos:</h4>
            <div className={`flex mt3`}>
                { renderedItems }
            </div>
        </div>
    )
}

export default Categories;
