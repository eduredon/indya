import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppAvatar from '../AppAvatar.vue'

describe('AppAvatar', () => {
  it('renders with props correctly', () => {
    const props = {
      src: 'avatar.jpg',
      name: 'John Doe',
      email: 'john@example.com'
    };

    const wrapper = mount(AppAvatar, { props });

    expect(wrapper.find('.avatar-img').exists()).toBe(true);
    expect(wrapper.find('.avatar-img').attributes('src')).toBe(props.src);
    expect(wrapper.find('.credentials').text()).toContain(props.name);
    expect(wrapper.find('.credentials').text()).toContain(props.email);
  });
})
