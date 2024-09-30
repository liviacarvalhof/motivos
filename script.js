function toggleDetails(index) {
    const detalhes = document.querySelectorAll('.detalhes');
    detalhes[index].style.display = detalhes[index].style.display === 'block' ? 'none' : 'block';
}
