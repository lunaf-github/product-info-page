import JSONData from '../../data/data.json';
import { Product } from '../features/product/types';


async function mockFetch(fakeUrl: string): Promise<Product[]> {
    return new Promise<Product[]>(res => {
        setTimeout(() => res(JSONData), 400);
    })
}


export default mockFetch;