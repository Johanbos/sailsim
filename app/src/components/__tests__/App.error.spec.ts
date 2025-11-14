/**
 * Error handling test for App.vue.
 * Verifies that the app fails gracefully if the root element is missing.
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../../App.vue'

describe('App error handling', () => {
  it('fails gracefully if root element is missing', () => {
    // Simulate missing root element by mounting to a non-existent selector
    // This should throw an error or fail gracefully
    const mountApp = () => {
      // This simulates what main.ts does, but with a wrong selector
      const el = document.createElement('div')
      el.id = 'not-the-app'
      document.body.appendChild(el)
      // Try to mount App to a non-existent #app
      // @vue/test-utils mount will throw if selector is not found
      mount(App, { attachTo: '#not-the-app-does-not-exist' })
    }
    expect(mountApp).toThrow()
  })
})
