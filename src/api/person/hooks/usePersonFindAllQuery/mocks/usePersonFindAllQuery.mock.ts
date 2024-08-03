export const mockedPersonFindAll = {
  usePersonFindAllQuery: jest.fn().mockImplementation(() => ({
    data: {
      content: [{ id: 'valid_id', name: 'valid_name' }]
    }
  }))
}
