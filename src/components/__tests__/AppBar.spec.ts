import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppBar from '../AppBar.vue'
import AppAvatar from '../AppAvatar.vue'

describe('AppBar', () => {
  it('renders RouterLink to home', () => {
    const wrapper = mount(AppBar, {
      global: {
        components: { RouterLink: RouterLinkStub }
      }
    })

    expect(wrapper.findComponent(RouterLinkStub).props('to')).toBe('/')
  })

  it('renders AppAvatar with correct props', () => {
    const wrapper = mount(AppBar)

    const avatar = wrapper.findComponent(AppAvatar)
    expect(avatar.props()).toEqual({
      name: 'Eduardo Redondo',
      email: 'eduredon@gmail.com',
      src: '/src/assets/avatar.jpeg'
    })
  })
})
