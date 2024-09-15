export const logOut = (hook: (value:boolean) => void) => {
    localStorage.removeItem("pp-token");
    sessionStorage.removeItem("userStats");
    hook(false)
}