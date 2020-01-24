import Vue from 'vue'

Vue.filter('trim', (text, length) => {
  const node = document.createElement('div')
  node.innerHTML = text
  const content = node.textContent
  return content.length > length ? content.slice(0, length) + '...' : content
})
