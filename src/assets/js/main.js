

window.onload = () => {
    const _get = (arg) => {
        return document.querySelector(arg)
    }
    

    if (_get('.toggle-sidebar-btn')) {
        _get('.toggle-sidebar-btn').addEventListener('click', () => {
            _get('body').classList.toggle('toggle-sidebar')
        })
    }
    
}