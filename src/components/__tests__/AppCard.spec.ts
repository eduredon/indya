import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppCard from '../AppCard.vue'

describe('Card', () => {
  it('renders props when passed', () => {
    const image = 'test-image.jpg'
    const name = 'Test Name'
    const wrapper = mount(AppCard, {
      props: { image, name }
    })

    expect(wrapper.find('.card__image img').attributes('src')).toBe(image)
    expect(wrapper.find('.card__title').text()).toBe(name)
  })

  it('emits click event when card is clicked', async () => {
    const wrapper = mount(AppCard)

    await wrapper.find('.card').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
