import Toast from "./Toast";

const obj = {}
obj.install = function (Vue) {
  // document.body.appendChild(Toast.$el)

  //1.创建组件x
  const toastConstructor = Vue.extend(Toast)

  //2.new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastConstructor()

  //3.手动将组件对象挂载到一个元素上
  toast.$mount(document.createElement('div'))

  //4.toast.$el就是上面的div
  document.body.appendChild(toast.$el)


  Vue.prototype.$toast = toast

}

export default obj