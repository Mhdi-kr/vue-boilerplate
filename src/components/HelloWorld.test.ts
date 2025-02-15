// import { describe, expect, it, beforeEach } from 'vitest'
import type { MountingOptions } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { fireEvent, render } from '@testing-library/vue'

import HelloWorld from './HelloWorld.vue'

const factory = (options?: MountingOptions<any>) => render(HelloWorld, {
  global: {
    plugins: [createTestingPinia({ createSpy: vi.fn })],
  },
  ...options,
})

describe('HelloWorld', () => {
  it('shold mount correctly', async () => {
    const wrapper = factory({
      props: {
        msg: 'any',
      },
    })
    expect(wrapper).toBeTruthy()
    wrapper.unmount()
  })

  it('shold add counter correctly', async () => {
    const wrapper = factory({
      props: {
        msg: 'any',
      },
    })
    const { getByTestId } = wrapper
    const counterElement = getByTestId('counter')
    const counterPiniaElement = getByTestId('counter-pinia')
    const addElement = getByTestId('add-btn')
    const addPiniaElement = getByTestId('add-btn-pinia')

    expect(counterElement.innerHTML).toBe(' Counter: 0')
    await fireEvent.click(addElement)
    expect(counterElement.innerHTML).toBe(' Counter: 1')

    expect(counterPiniaElement.innerHTML).toBe(' Counter Pinia: 0')
    await fireEvent.click(addPiniaElement)
    expect(counterPiniaElement.innerHTML).toBe(' Counter Pinia: 1')
    wrapper.unmount()
  })
})
