import JSONData from '../../data/data.json';

async function mockFetch(url: string) {
    return new Promise(res => {
        setTimeout(() => res(JSONData), 600);
    })
}

export default mockFetch;