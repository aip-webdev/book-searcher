export const checkForOfflineMode = () => !!localStorage.getItem('offline')

export const setOfflineMode = (val) => {
  val ? localStorage.setItem('offline', val) : localStorage.removeItem('offline')
}
