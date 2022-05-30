let filtr_price = document.getElementById('filtr-price_content'),
    filtr_category = document.getElementById('filtr-category'),
    cart = document.getElementById('cart-content')
let range_price = document.querySelector('#range-price'),
    tabl1 = document.querySelector('.range-count #tabl1')
let but_card = document.getElementById('btn-card')
let books_collect

document.querySelector('.fitr_price_text').addEventListener('click', (e) => {showFiltrBlock(filtr_price,'hidden')})
document.querySelector('.fitr_cat_text').addEventListener('click', (e) => {showFiltrBlock(filtr_category, 'hidden')})
document.querySelector('#cart .ico-block').addEventListener('click', (e) => {showFiltrBlock(cart,"hidden")})



range_price.addEventListener('input', inputRangePrice)
loadCollectBooks()

function loadCollectBooks(){
    let List_book = []
    books.forEach((e,i) => {
       let card = document.createElement('div')
        card.setAttribute('class', 'card_book')
        card.innerHTML = '<img src="..." class="card-img-top" alt="...">'+
        '<div class="card_title">'+e.title+'</div>'+
        '<div class="flex_block card-bottom">'+
            '<div id="buy" class="but">in cart</div>'+
            '<div class="price-book_text"><span id="price_book">'+e.price+'</span> p.</div>'+
        '</div>'
        document.querySelector('#catalog').append(card) 
    })
    let books_collect = document.getElementById('catalog').children

    for(book of books_collect){
        
        let buy = book.children[2].children[0]
        buy.addEventListener('click', el => {
            showFiltrBlock(book,'added')
            console.log(List_book);
            // console.log(filtrArrayForFindBook(el));
            List_book.push(filtrArrayForFindBook(el.path[2].children[1].textContent))
            console.log(List_book);

            List_book.forEach((element,ind) => {
                document.getElementById('items').append(newBookInCart(element.title,element.price,1))
            })
            document.getElementById('count_price_cart').textContent = finalPrice() + ' rub'
            
            })
        
    }

    
}
function finalPrice(){
    let final_price = 0
    let items = document.getElementById('items').children
    for(p of items){
        final_price += parseInt(document.getElementById('pr-cart').textContent)
    }
    return final_price
}
function filtrArrayForFindBook(e){
                return books.find((elem,i) => elem.title = e)
            }
function addBookInCart(){
    console.log(this);

}
function inputRangePrice(){
    console.log(this.value);
    tabl1.textContent = this.value
}
function showFiltrBlock(elem,added_Class){
    if(elem.classList.contains(added_Class)) elem.classList.remove(added_Class)
    else elem.classList.add(added_Class)
}


