import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BrandProducts = () => {
    const [brandData, setBrandData] = useState([])
    const category = useParams()
    const allBrandData = useLoaderData()
    // console.log(brandData)

    useEffect(() => {
        const filteredData = allBrandData.filter(aData => aData.brand.toLocaleLowerCase() === category.name.toLocaleLowerCase())
        setBrandData(filteredData)
    }, [])


    return (
        <div>
            {
                // brandData.map(aData =>)
            }
        </div>
    );
};

export default BrandProducts;