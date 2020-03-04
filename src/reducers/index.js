import updateBookList from './book-list'
import updateShoppingCart from './shopping-cart'

const reducer = (state, action) => {
  // Это самый простой способ убедиться, что действие действительно доходит до reducer-а
  // console.log(action.type)

  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  }

}

export default reducer

// Золотое правило React и Redux в том числе: Чтобы мы не делали, мы не должны изменять существующий state
// Для того, чтобы отображать ошибки нужно их где-то сохранять.
// И это где-то наш глобальный state (initialState), который управляется Redux-ом
// Поэтому в глобальный state мы добавляем поле, который назвается error.
// Мы не забываем обнулять это поле каждый раз, когда мы начинаем делать новый запрос
// или когда к нам приходит успешный ответ нам нужно переставить error в null
// независимо от того чем error был до этого
