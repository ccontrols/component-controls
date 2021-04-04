  let matchMedia;
  beforeAll(() => {
    jest.mock('rc-util/lib/Portal');
    matchMedia = new MatchMediaMock();
  });
  afterEach(() => {
    matchMedia.clear();
  });