import { describe, it, expect, beforeEach, vi } from 'vitest'
import type { HeroDto } from '../heros.dto';
import api from '@/services'
import { API_URL } from '../heros.service';

describe('Heros API', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('should fetch heros', async () => {
    const heroMock: HeroDto = {
      name: 'Spiderman',
      description: 'A hero',
      thumbnail: { path: 'path/to/image', extension: 'jpg' },
    };

    (global.fetch as any).mockResolvedValue({
      json: () => Promise.resolve({ data: { results: [heroMock] } }),
    });

    const heros = await api.heros.getHeros();

    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    expect(heros).toEqual([
      {
        name: heroMock.name,
        image: `${heroMock.thumbnail.path}.${heroMock.thumbnail.extension}`,
        description: heroMock.description,
      },
    ]);
  });
});
