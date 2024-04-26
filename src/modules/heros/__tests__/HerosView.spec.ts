import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useFetch } from '@/composables/useFetch';
import HerosView from '../views/HerosView.vue';

vi.mock('@/composables/useFetch', () => ({
  useFetch: vi.fn()
}));

vi.mock('vue-router', () => ({
  useRouter: vi.fn()
}));

vi.mock('@/stores/hero', () => ({
  useHeroStore: vi.fn()
}));

vi.mock('@/services', () => ({
  default: {
    heros: {
      getHeros: vi.fn()
    }
  }
}));

describe('HerosView', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });
  it('renders loading state when data is being fetched', async () => {
    const mockUseFetch = {
      load: vi.fn(),
      error: vi.fn(),
      loading: vi.fn()
    };
    useFetch.mockReturnValue(mockUseFetch);
    mockUseFetch.loading.mockReturnValue(true);

    const wrapper = mount(HerosView);

    expect(wrapper.html()).toContain('loading...');
  });

  it('renders error state when an error occurs', async () => {
    const mockUseFetch = {
      load: vi.fn(),
      error: vi.fn(),
      loading: vi.fn()
    };
    useFetch.mockReturnValue(mockUseFetch);
    mockUseFetch.loading.mockReturnValue(false);
    mockUseFetch.error.mockReturnValue(true);

    const wrapper = mount(HerosView);

    expect(wrapper.html()).toContain('Ha ocurrido un error inesperado...');
  });

  it('renders hero data when fetched', async () => {
    (useFetch as any).mockReturnValue({
      load: () => [
        { name: 'Spiderman', description: 'Your friendly neighborhood Spider-Man!', image: 'spiderman.jpg' },
        { name: 'Iron Man', description: 'Genius, billionaire, playboy, philanthropist', image: 'ironman.jpg' }
      ],
      error: null,
      loading: false,
    })

    const wrapper = mount(HerosView);

    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toContain('Spiderman');
    expect(wrapper.html()).toContain('Iron Man');
  })
});
