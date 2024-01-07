import JSONData from '../../data/data.json';
import { Product } from '../types/types';
import { createServer } from "miragejs"

async function mockFetch(fakeUrl: string) {
    await Promise.race([{status: 'pending'}])
    return new Promise<Product[]>(res => {
        setTimeout(() => res(JSONData), 3000);
    })
}

// export default mockFetch;



let server = createServer({
    routes() {
        this.get('/api/products', () => JSONData)
    }
});

export default server;