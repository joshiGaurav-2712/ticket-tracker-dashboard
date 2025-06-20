
import { apiService } from './api';

export interface Store {
  id: number;
  name: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

class StoreService {
  async getAllStores() {
    console.log('Fetching all stores...');
    const response = await apiService.get<Store[]>('/store/');
    console.log('Stores response:', response);
    
    if (response.error) {
      console.error('Failed to fetch stores:', response.error);
      throw new Error(response.error);
    }
    
    return response;
  }
}

export const storeService = new StoreService();
