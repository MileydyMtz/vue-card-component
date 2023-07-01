import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheCard from '../TheCard.vue'

describe('TheCard', () => {
    it('renders the props correctly', () => {
        const wrapper = mount(TheCard, { 
            props: { 
                image: 'https://example.com/image.jpg',
                title: 'Prueba de título',
                text: 'Esto es una prueba de texto',
                maxLines: 3
            } 
        })

        expect(wrapper.find('.card-title').text()).toBe('Prueba de título')
        expect(wrapper.find('.card-text').text()).toBe('Esto es una prueba de texto')
        expect(wrapper.find('.card-img').attributes().src).toBe('https://example.com/image.jpg')
    })

    it('applies maxLines to style correctly', () => {
        const wrapper = mount(TheCard, { 
            props: { 
                image: 'https://example.com/image.jpg',
                title: 'Prueba de título',
                text: 'Esto es una prueba de texto',
                maxLines: 5
            } 
        })

        expect(wrapper.find('.card-text').attributes().style).toContain('-webkit-line-clamp: 5')
    })

    it('emits "more" event on click', async () => {
        const wrapper = mount(TheCard, { 
            props: { 
                image: 'https://example.com/image.jpg',
                title: 'Prueba de título',
                text: 'Esto es una prueba de texto',
                maxLines: 3
            } 
        })

        await wrapper.find('.card-button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('more')
    })

    it('has required props', () => {
        expect(TheCard.props.image.required).toBe(true)
        expect(TheCard.props.title.required).toBe(true)
        expect(TheCard.props.text.required).toBe(true)
        expect(TheCard.props.maxLines.default).toBe(3)
    })
})
