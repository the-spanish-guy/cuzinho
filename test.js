console.log('teste');

const languages = {
  'pt-BR': {
    title: "cuzinho hoje ?"
  }, 
  'en-US': {
    title: "little ass today ?"
  },
  'ru-RU': {
    title: "задница сегодня ?"
  }
}

const arrLanguages = []

for (const language in languages) {
  console.log(language)
  arrLanguages.push(language)
}
console.log(arrLanguages)




const locale = navigator.language;
console.log(locale)

const title = document.getElementById("title")

const test = document.getElementById("changeLanguage")
const createOption = arrLanguages.forEach(lang => {
  const el = document.createElement("option")
  el.textContent = lang
  el.value = lang
  test.appendChild(el)
})

test.addEventListener('change', (a) => {
  console.log('asdas')
  const selectedLanguage = test.options[test.selectedIndex].text
  console.log(selectedLanguage)
  title.innerHTML = languages[selectedLanguage].title
  console.log(title.innerHTML = languages[selectedLanguage].title)
})

console.log(title.innerHTML = languages[locale].title)