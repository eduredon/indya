import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import HeroDetailsView from '../views/HeroDetailsView.vue';
import { useHeroStore, type Hero } from '@/stores/hero';

vi.mock('@/stores/hero', () => ({
  useHeroStore: vi.fn()
}));

describe('Hero', () => {
  it('renders hero with correct data', () => {
    const mockStore = {
      name: 'Spiderman',
      description: 'Your friendly neighborhood Spider-Man!',
      image: 'spiderman.jpg'
    };
    (useHeroStore as unknown as Hero).mockReturnValue(mockStore);

    const wrapper = mount(HeroDetailsView);

    expect(wrapper.find('.hero__image img').attributes('src')).toBe(mockStore.image);
    expect(wrapper.find('.hero__title').text()).toBe(mockStore.name);
    expect(wrapper.find('.hero__description').text()).toBe(mockStore.description);
  });
});
