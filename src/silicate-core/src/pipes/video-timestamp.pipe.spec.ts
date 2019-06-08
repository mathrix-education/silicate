import { VideoTimestampPipe } from './video-timestamp.pipe';

describe('VideoTimestampPipe', () => {
  it('create an instance', () => {
    const pipe = new VideoTimestampPipe();
    expect(pipe).toBeTruthy();
  });
});
