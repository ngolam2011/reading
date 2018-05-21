import { shallow, mount } from 'enzyme'
export default (component, store) => {
  const context = {
    store,
  }
  return shallow(component, { context, disableLifecycleMethods: true })
}

export const mountWithStore =  (component, store) => {
  const context = {
    store,
  }
  return mount(component, { context, disableLifecycleMethods: true })
}
