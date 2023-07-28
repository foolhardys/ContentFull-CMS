import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
    space: 'j1ov3j7j8ti9',
    environment: 'master',
    accessToken: import.meta.env.VITE_API_KEY
})


export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProjects] = useState([])

    const getData = async () => {
        try {
            const response = await client.getEntries()
            console.log(response.items)
            const products = response.items.map((item) => {
                const { title, image, depolymentLink } = item.fields
                const id = item.sys.id
                const img = image.fields.file.url
                return { title, img, depolymentLink, id }
            })

            setProjects(products)
            setLoading(false)

        } catch (error) {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return { loading, products }

}