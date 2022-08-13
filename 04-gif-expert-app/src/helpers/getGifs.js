export const getGifs = async (category ) => {
    const url = 'https://api.giphy.com/v1/gifs/search'
    const api_key = 'MbUzPcSriCassxshRlixuftIKfnE74bf';
    const limit = 10
    const request = `
    ${ url }?api_key=${ api_key }&q=${ category}
    &limit=${limit}
    `

    const resp = await fetch(request);
    const { data } = await resp.json();

    const gifs = data.map( img=> ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gifs
    
}