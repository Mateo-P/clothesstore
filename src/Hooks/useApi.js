import useSWR from 'swr';

const fetcher = async (url, method = 'GET') => {
    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URI + url, {
        method
    });

    return await response.json();
};

const useApi = (method, url) => {
    const { data, error, mutate, revalidate } = useSWR(url, (url) => fetcher(url, method), {
        revalidateOnFocus: true
    });

    return { payload: data, isLoading: !error && !data, error, mutate, revalidate };
};
export default useApi;
