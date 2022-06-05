let filtr_price = document.getElementById('filtr-price_content'),
    filtr_category = document.getElementById('filtr-category'),
    cart = document.getElementById('cart-content')
let range_price = document.querySelector('#range-price'),
    tabl1 = document.querySelector('.range-count #tabl1')
let but_card = document.getElementById('btn-card')
let cart_content = cart.getElementsByClassName('items')[0]

 loadCollectBooks()
function loadCollectBooks(){
    
    let final_price = 0
    document.querySelector('.fitr_price_text').addEventListener('click', (e) => {showFiltrBlock(filtr_price,'d-none')})
    document.querySelector('.fitr_cat_text').addEventListener('click', (e) => {showFiltrBlock(filtr_category, 'd-none')})
    document.querySelector('#cart .ico-block').addEventListener('click', (e) => {showFiltrBlock(cart,"d-none")})


   
    range_price.addEventListener('input', inputRangePrice)

    let List_book = []

    fetch("'http://45.8.249.57/bookstore-api'",
        {
            method: 'GET'
        })
    .then(responce => {
        console.log(responce.json());
    })
    books.forEach((e,i) => {
       let card = document.createElement('div')
        card.setAttribute('class', 'card_book position-relative')
        card.setAttribute('data-id', randomId())
        card.innerHTML = '<img src="..." class="card-img" alt="...">'+
        '<div class="card_title">'+e.title+'</div>'+
        '<div class="d-flex card-bottom">'+
            '<div id="buy" class="but">in cart</div>'+
            '<div class="price-book_text"><span class="card_price">'+e.price+'</span> p.</div>'+
        '</div>'
        document.querySelector('#catalog').append(card) 
    })
    let books_collect = document.getElementById('catalog').children

    for(book of books_collect){
        let buy = book.children[2].children[0]
        buy.addEventListener('click', el => {
            document.getElementById('count_price_cart').textContent
             = finalPrice(filtrArrayForFindBook(el.target.closest('.card_book'),'price'))

            showFiltrBlock(el.target.closest('.card_book'),'added')
            buy.innerHTML = '<div> \uF26B</div>'
            let id = el.target.closest('.card_book').dataset.id
            List_book.push(id)
            // console.log(List_book)     
            cart_content.append(newBookInCart(List_book,el.target.closest('.card_book')))
            setTimeout(() => {
                buy.textContent = 'in cart'
                
            },1000)     
        })
    }

    
function randomId(){
    return Math.round(Math.random() * 5000 * 32 * Math.random() * 25)
}
function finalPrice(pr){
    final_price += parseInt(pr)
    return final_price

}
function filtrArrayForFindBook(current,needly){
    let need  = current.getElementsByClassName('card_' + needly)[0].textContent
    return need
}
function delBookInCart(){
    console.log(this);
    let del = this.closest('.item')
    let price_del_block = del.querySelector('.price-book_text').textContent
    del.remove()
    document.getElementById('count_price_cart').textContent = final_price -= parseInt(price_del_block)
    
    // finalPrice()
}
function inputRangePrice(){
    // console.log(this.value);
    tabl1.textContent = this.value
}
function showFiltrBlock(elem,added_Class){
    if(elem.classList.contains(added_Class)) elem.classList.remove(added_Class)
    else elem.classList.add(added_Class)
}

function newBookInCart(array,book_current){
    let card_item_obj = filtrArrayForFindBook(book_current, 'price')
    let item = document.createElement('div')
    
    console.log(card_item_obj);
    item.setAttribute('class', 'item position-relative')
    item.innerHTML = '<table>'+
    '<tr>'+
        '<td><div class="name tb">'+filtrArrayForFindBook(book_current, 'title')+'</div></td>'+
        '<td><div class="length tb"><span class="sht"></span> шт.</div></td>'+
        '<td><div id="pr-cart" class="price-book_text tb">'+filtrArrayForFindBook(book_current, 'price')+'</div></td>'+
        '<td><div class="del tb">'+
            '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'+
        '</div></td>'+
    '</tr>'+
'</table>'

    let deleteBtn = cart_content.getElementsByClassName('del')
    for(del_btn of deleteBtn){
        del_btn.addEventListener('click', delBookInCart)
    }
    return item
}


}
