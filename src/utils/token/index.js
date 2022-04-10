const token = {
  getToken: () => {
    const userAuth = window.localStorage.getItem('userToken')
    if (userAuth) {
      let user = JSON.parse(userAuth)
      let currentDate = Math.floor(new Date().getTime() / 1000)
      let tokenDate = user.expire
      if (currentDate <= tokenDate) {
        return(user)
      } else {
        window.localStorage.removeItem('userToken')
        return(null)
      }
    } else {
      return(null)
    }
  }
}

export default token
