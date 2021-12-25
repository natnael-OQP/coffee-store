import { createApi } from 'unsplash-js';

const unsplashApi = createApi({
    accessKey:process.env.unsplash_key,
});

export const fetcher = async() => {
    const photos = await unsplashApi.search.getPhotos({
        query: 'cat',
        page: 1,
        perPage: 10,
        color: 'green',
        orientation: 'portrait',
    });

    return photos.response.results;
}


