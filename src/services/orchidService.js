import axios from 'axios';

export const fetchOrchids = async () => {
  try {
    const response = await axios.get(
      'https://demo.ipconfigure.com/service/orchids',
      {
        params: {
          fsid: 'test',
          exclude: 'isAvailable',
          include: 'name',
          offset: 0,
          limit: 10,
        },
        headers: {
          accept: 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching orchids:', error);
    return [
      { id: 'Test', name: 'test', isAvailable: true },
      { id: 'Test1', name: 'test', isAvailable: true },
      { id: 'Test2', name: 'test', isAvailable: true },
      { id: 'Test3', name: 'test', isAvailable: true },
      { id: 'Test4', name: 'test', isAvailable: true },
      { id: 'Test5', name: 'test', isAvailable: true },
    ];
  }
};
