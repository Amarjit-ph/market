/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Sunday, February 13th 2022, 1:54:20 am
 * Year 2022
 */
import React from 'react';
const starRating = (count, product) => {
    let total = 6;
    let starCount = count;
    let emptyStarCount = total - count;
    let filledStarsJSX = [];
    let emptyStartsJSX = [];
    for (let i = 1; i < emptyStarCount; i++) {
        emptyStartsJSX.push(<li>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
            </svg>
        </li>);
    }
    for (let i = 1; i <= starCount; i++) {
        filledStarsJSX.push(<li>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-yellow-400 fill-current"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
            </svg>
        </li>);
    }
    return (
        <ul class="flex items-center gap-x-1">
            {filledStarsJSX}
            {emptyStartsJSX}
            <span className='text-sm'>{(product.rating.count * 128).toLocaleString()}</span>
        </ul>
    )
}
export default starRating;