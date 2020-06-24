document.querySelector('span').addEventListener('click', () => {
  const node = document.querySelector('.container')
  const validade = node.classList.contains('close-aside')
  if(validade) {
    node.classList.remove('close-aside')
  } else {
    node.classList.add('close-aside')
  }
})