import { writable } from "svelte/store";

const categoriesList = writable([


    {
        "categoryList": [
            {
                "categoryName": "msm",
                "categoryLink": "/products"
            },
            {
                "categoryName": "msm1",
                "categoryLink": "/products1"
            }
        ]
    }
])

export default categoriesList
