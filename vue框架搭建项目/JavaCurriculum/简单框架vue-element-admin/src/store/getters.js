const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  routes: state => state.permission.routes
}
export default getters
// getters放一起的优点
// 当应用程序的状态和getter函数变得复杂时，将它们放在单独的文件中可以使代码更易于维护和理解。
// 可以避免在每个模块中重复定义相同的getter函数，提高了代码的可重用性和可维护性。
// 可以独立地测试每个getter函数的逻辑，确保它们按预期工作，并且不需要依赖于其他模块或状态。
// 提供更好的扩展性，使得在应用程序的开发过程中进行更多的状态派生变得更加灵活和可维护。