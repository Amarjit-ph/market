/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Sunday, February 13th 2022, 8:42:00 pm
 * Year 2022
 */
import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Card = () => {
    return (
        <div class="w-full max-w-md mx-auto rounded-md shadow-md overflow-hidden p-2" >
            <div className='mt-2'>
                <Skeleton height={130} />
                <div className='mt-2'>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
        </div>
    );
}
export default Card;