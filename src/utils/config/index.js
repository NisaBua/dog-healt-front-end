export const servicePath = {
  base_url:
    process.env.REACT_APP_RUN_ON === 'production'
      ? 'http://localhost:3000'
      : 'http://localhost:3000',
  service: {
    general:
      process.env.REACT_APP_RUN_ON === 'production'
        ? 'https://dogs-health-service.herokuapp.com'
        : 'http://localhost:4020'
  }
}
